var takeSnapshotUI = createClickFeedbackUI();

var video;
var takePhotoButton;
var toggleFullScreenButton;
var switchCameraButton;
var amountOfCameras = 0;
var currentFacingMode = 'environment';
var faceDetector;
var globalAngle = 0;
var layoutOverlay;
var isDetecting = false;

let sequence;
let adviseText;

const audioNotify = new Audio('./snd/notification-sound.wav');

const { FaceDetection } = new aigenSDK();

// this function counts the amount of video inputs
// it replaces DetectRTC that was previously implemented.
function deviceCount() {
  return new Promise(function (resolve) {
    var videoInCount = 0;

    navigator.mediaDevices
      .enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {
          if (device.kind === 'video') {
            device.kind = 'videoinput';
          }

          if (device.kind === 'videoinput') {
            videoInCount++;
            console.log('videocam: ' + device.label);
          }
        });

        resolve(videoInCount);
      })
      .catch(function (err) {
        console.log(err.name + ': ' + err.message);
        resolve(0);
      });
  });
}

document.addEventListener('DOMContentLoaded', function (event) {
  // check if mediaDevices is supported
  if (
    navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia &&
    navigator.mediaDevices.enumerateDevices
  ) {
    // first we call getUserMedia to trigger permissions
    // we need this before deviceCount, otherwise Safari doesn't return all the cameras
    // we need to have the number in order to display the switch front/back button
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: true,
      })
      .then(function (stream) {
        stream.getTracks().forEach(function (track) {
          track.stop();
        });

        deviceCount().then(function (deviceCount) {
          amountOfCameras = deviceCount;

          // init the UI and the camera stream
          initCameraUI();
          initCameraStream();
        });
      })
      .catch(function (error) {
        //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        if (error === 'PermissionDeniedError') {
          alert('Permission denied. Please refresh and give permission.');
        }

        console.error('getUserMedia() error: ', error);
      });
  } else {
    alert(
      'Mobile camera is not supported by browser, or there is no camera detected/connected',
    );
  }
});

function initCameraUI() {
  video = document.getElementById('video');
  adviseText = document.getElementById('advise-text');

  // -- switch camera part
  if (amountOfCameras > 1) {
    switchCameraButton.style.display = 'block';

    switchCameraButton.addEventListener('click', function () {
      if (currentFacingMode === 'environment') currentFacingMode = 'user';
      else currentFacingMode = 'environment';

      initCameraStream();
    });
  }
}

// https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js
async function initCameraStream() {
  // stop any active streams in the window
  if (window.stream) {
    window.stream.getTracks().forEach(function (track) {
      console.log(track);
      track.stop();
    });
  }

  var size = 1280;

  var constraints = {
    audio: false,
    video: {
      width: { ideal: size },
      height: { ideal: size },
      facingMode: currentFacingMode,
    },
  };

  faceDetector = await FaceDetection.initializeFaceDetector();

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);

  function handleSuccess(stream) {
    window.stream = stream; // make stream available to browser console for detect RTC
    video.srcObject = stream;

    //TODO ================================================
    video.addEventListener('loadeddata', predictWebcam);

    const track = window.stream.getVideoTracks()[0];
    const settings = track.getSettings();
    str = JSON.stringify(settings, null, 4);
    console.log('settings ' + str);
  }

  function handleError(error) {
    console.error('getUserMedia() error: ', error);
  }
}

let lastVideoTime = -1;
let centerCount = -1;

async function predictWebcam() {
  let startTimeMs = performance.now();

  // Detect using detectForVideo.
  if (video.currentTime !== lastVideoTime) {
    lastVideoTime = video.currentTime;

    const detection = FaceDetection.detectForVideo(
      video,
      faceDetector,
      startTimeMs,
    );

    // check is detecting
    if (!isDetecting && detection?.pose === FaceDetection.POSE.CENTER) {
      centerCount += 1;
      if (centerCount > 20) isDetecting = true;
    }

    // Start Get Sequence
    if (isDetecting && !sequence) {
      sequence = await getData('http://localhost:3002/get_sequence');
      adviseText.innerHTML = sequence?.next_choice;

      audioNotify.play();
    } else if (
      sequence?.status === 'processing' &&
      sequence?.next_choice === detection?.pose
    ) {
      const image = takeSnapshot(video);

      sequence = await postData('http://localhost:3002/liveness', {
        image,
        request_id: sequence.request_id,
      });

      adviseText.innerHTML = sequence?.next_choice;

      audioNotify.play();
    } else if (sequence?.status === 'completed' && sequence?.result === 'Yes') {
      adviseText.innerHTML = sequence?.status;

      audioNotify.play();

      console.log(sequence);

      isDetecting = false;

      stream = video.srcObject;
      tracks = stream.getTracks();
      tracks.forEach(function (track) {
        track.stop();
      });
    }
  }

  // Call this function again to keep predicting when the browser is ready
  window.requestAnimationFrame(predictWebcam);
}

function takeSnapshot() {
  // if you'd like to show the canvas add it to the DOM
  var canvas = document.createElement('canvas');

  var width = video.videoWidth;
  var height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, width, height);

  return canvas
    .toDataURL('image/jpeg')
    .replace(/^data:image\/jpeg;base64,/, '');

  // polyfil if needed https://github.com/blueimp/JavaScript-Canvas-to-Blob

  // https://developers.google.com/web/fundamentals/primers/promises
  // https://stackoverflow.com/questions/42458849/access-blob-value-outside-of-canvas-toblob-async-function
  // function getCanvasBlob(canvas) {
  //   return new Promise(function (resolve, reject) {
  //     canvas.toBlob(function (blob) {
  //       resolve(blob);
  //     }, 'image/jpeg');
  //   });
  // }

  // // some API's (like Azure Custom Vision) need a blob with image data
  // getCanvasBlob(canvas).then(function (blob) {
  //   // do something with the image blob
  // });
}

// https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b
// closure; store this in a variable and call the variable as function
// eg. var takeSnapshotUI = createClickFeedbackUI();
// takeSnapshotUI();

function createClickFeedbackUI() {
  // in order to give feedback that we actually pressed a button.
  // we trigger a almost black overlay
  var overlay = document.getElementById('video_overlay'); //.style.display;

  // sound feedback
  var sndClick = new Howl({ src: ['snd/click.mp3'] });

  var overlayVisibility = false;
  var timeOut = 80;

  function setFalseAgain() {
    overlayVisibility = false;
    overlay.style.display = 'none';
  }

  return function () {
    if (overlayVisibility == false) {
      sndClick.play();
      overlayVisibility = true;
      overlay.style.display = 'block';
      setTimeout(setFalseAgain, timeOut);
    }
  };
}

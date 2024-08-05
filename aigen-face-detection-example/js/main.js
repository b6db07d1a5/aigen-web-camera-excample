var video;
var amountOfCameras = 0;
var currentFacingMode = 'user';
var faceDetector;
var isDetecting = false;

var sequence;
var adviseText;

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

  //A. initial detaction instance
  faceDetector = await FaceDetection.initializeFaceDetector();

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);

  function handleSuccess(stream) {
    window.stream = stream; // make stream available to browser console for detect RTC
    video.srcObject = stream;

    // Video Detecting
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

    //B. processing video instance
    const detection = FaceDetection.detectForVideo(
      video,
      faceDetector,
      startTimeMs,
    );

    // 0. Check Center Face count to 10 Frame and continue do liveness

    // POSE constraint
    // LEFT: 'Turn_left'
    // RIGHT: 'Turn_right'
    // UP: 'Look_up'
    // DOWN: 'Look_down'
    // CENTER: 'Center'

    if (!isDetecting && detection?.pose === FaceDetection.POSE.CENTER) {
      centerCount += 1;
      if (centerCount > 20) isDetecting = true;
    }

    if (isDetecting && !sequence) {
      // 1. Start Get Sequence

      // GET https://apis.aigen.online/aiface/liveness-detection/v1
      // https://docs.aigen.online/documents/v/v1/api-reference/aiface/liveness-detection
      sequence = await getData(
        'https://apis.aigen.online/aiface/liveness-detection/v1?mode=2&part=face&select=Turn_right&select=Turn_left',
      );
      adviseText.innerHTML = sequence?.next_choice;

      audioNotify.play();
    } else if (
      sequence?.status === 'processing' &&
      sequence?.next_choice === detection?.pose
    ) {
      // 2. Processing image

      // POST https://apis.aigen.online/aiface/liveness-detection/v1
      // https://docs.aigen.online/documents/v/v1/api-reference/aiface/liveness-detection

      const image = takeSnapshot(video);

      sequence = await postData(
        'https://apis.aigen.online/aiface/liveness-detection/v1',
        {
          image,
          request_id: sequence.request_id,
        },
      );

      adviseText.innerHTML = sequence?.next_choice;

      audioNotify.play();
    } else if (
      sequence?.status === 'completed' ||
      sequence?.status === 'uncompleted'
    ) {
      // 3. Verify Complete or Not
      adviseText.innerHTML = sequence?.status;

      audioNotify.play();

      console.log(sequence);

      // 4. Stop Detection
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
}

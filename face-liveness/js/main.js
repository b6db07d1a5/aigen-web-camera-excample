/*

>> kasperkamperman.com - 2018-04-18
>> kasperkamperman.com - 2020-05-17
>> https://www.kasperkamperman.com/blog/camera-template/

*/

var takeSnapshotUI = createClickFeedbackUI()

var video
var takePhotoButton
var videoContainer
var videoCanvas
var currentFacingMode = 'user'

document.addEventListener('DOMContentLoaded', function (event) {
  // check if mediaDevices is supported
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia && navigator.mediaDevices.enumerateDevices) {
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
          track.stop()
        })

        // init the UI and the camera stream
        initCameraUI()
        initCameraStream()
      })
      .catch(function (error) {
        //https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
        if (error === 'PermissionDeniedError') {
          alert('Permission denied. Please refresh and give permission.')
        }

        console.error('getUserMedia() error: ', error)
      })
  } else {
    alert('Mobile camera is not supported by browser, or there is no camera detected/connected')
  }
})

function initCameraUI() {
  video = document.getElementById('video')
  takePhotoButton = document.getElementById('takePhotoButton')
  videoContainer = document.getElementById('vid_container')
  videoCanvas = document.getElementById('vid_canvas')

  // https://developer.mozilla.org/nl/docs/Web/HTML/Element/button
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role

  takePhotoButton.addEventListener('click', function () {
    takeSnapshotUI()
    takeSnapshot()
  })

  // Listen for orientation changes to make sure buttons stay at the side of the
  // physical (and virtual) buttons (opposite of camera) most of the layout change is done by CSS media queries
  // https://www.sitepoint.com/introducing-screen-orientation-api/
  // https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
  window.addEventListener(
    'orientationchange',
    function () {
      // iOS doesn't have screen.orientation, so fallback to window.orientation.
      // screen.orientation will
      if (screen.orientation) angle = screen.orientation.angle
      else angle = window.orientation

      var guiControls = document.getElementById('gui_controls').classList
      var vidContainer = document.getElementById('vid_container').classList

      if (angle == 270 || angle == -90) {
        guiControls.add('left')
        vidContainer.add('left')
      } else {
        if (guiControls.contains('left')) guiControls.remove('left')
        if (vidContainer.contains('left')) vidContainer.remove('left')
      }

      //0   portrait-primary
      //180 portrait-secondary device is down under
      //90  landscape-primary  buttons at the right
      //270 landscape-secondary buttons at the left
    },
    false
  )
}

// https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js
function initCameraStream() {
  // stop any active streams in the window
  if (window.stream) {
    window.stream.getTracks().forEach(function (track) {
      console.log(track)
      track.stop()
    })
  }

  // we ask for a square resolution, it will cropped on top (landscape)
  // or cropped at the sides (landscape)
  var size = 1280

  var constraints = {
    audio: false,
    video: {
      width: { ideal: size },
      height: { ideal: size },
      facingMode: currentFacingMode,
    },
  }

  navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError)

  function handleSuccess(stream) {
    window.stream = stream // make stream available to browser console
    video.srcObject = stream

    const track = window.stream.getVideoTracks()[0]
    const settings = track.getSettings()
    str = JSON.stringify(settings, null, 4)
    console.log('settings ' + str)
  }

  function handleError(error) {
    console.error('getUserMedia() error: ', error)
  }
}

function takeSnapshot() {
  var playerWidth = video.videoWidth || 1280
  var playerHeight = video.videoHeight || 720
  var playerAR = playerWidth / playerHeight

  var canvasWidth = videoContainer.offsetWidth || 1280
  var canvasHeight = videoContainer.offsetHeight || 1280
  var canvasAR = canvasWidth / canvasHeight

  var sX, sY, sW, sH

  if (playerAR > canvasAR) {
    sH = playerHeight
    sW = playerHeight * canvasAR
    sX = (playerWidth - sW) / 2
    sY = 0
  } else {
    sW = playerWidth
    sH = playerWidth / canvasAR
    sX = 0
    sY = (playerHeight - sH) / 2
  }

  videoCanvas.width = sW
  videoCanvas.height = sH

  var context = videoCanvas.getContext('2d')

  if (context && video) {
    context.translate(sW, 0)
    context.scale(-1, 1)
    context.drawImage(video, sX, sY, sW, sH, 0, 0, sW, sH)
  }

  var base64 = videoCanvas.toDataURL('image/jpeg').replace(/^data:image\/jpeg;base64,/, '')

  console.log(base64)
  return base64
}

// https://hackernoon.com/how-to-use-javascript-closures-with-confidence-85cd1f841a6b
// closure; store this in a variable and call the variable as function
// eg. var takeSnapshotUI = createClickFeedbackUI();
// takeSnapshotUI();

function createClickFeedbackUI() {
  // in order to give feedback that we actually pressed a button.
  // we trigger a almost black overlay
  var feedbackUI = document.getElementById('feedback_ui') //.style.display;

  //sound notification
  const sndClick = new Audio('./snd/click.mp3')

  //var sndClick = new Howl({ src: ['snd/click.mp3'] })

  var overlayVisibility = false
  var timeOut = 80

  function setFalseAgain() {
    overlayVisibility = false
    feedbackUI.style.display = 'none'
  }

  return function () {
    if (overlayVisibility == false) {
      sndClick.play()
      overlayVisibility = true
      feedbackUI.style.display = 'block'
      setTimeout(setFalseAgain, timeOut)
    }
  }
}

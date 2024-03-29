let camera = document.querySelector('div.wrap video')
let click_liveness = document.querySelector("button[name='click_liveness']")
let text_advise = document.querySelector("p[name='text_advise']")

let width = 640
let height = 480

//sound notification
const audioNotify = new Audio('./assets/notification-sound.wav')

const { FR } = new AIGEN()

//start liveness from click action
click_liveness.addEventListener('click', async function () {
  await FR.startLivenessDetection({ camera, getSequence, postLiveness, faceTracing, sequenceCallback, finishCallback })

  audioNotify.play()
})

let isCamera = startCamera()

async function startCamera() {
  //start
  console.log('start camera')

  //image resolution ***more resolution is data tranfer size

  let stream = null

  //get media consent
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { width, height },
      audio: false,
    })

    camera.srcObject = stream

    return true
  } catch (error) {
    //on error can't open camera handler
    alert(error.message)
    return false
  }
}

async function getSequence() {
  // for more information https://docs.aigen.online/documents/api-reference/aiface/liveness-detection#get-choices-data-which-will-be-used-in-the-liveness-detection-api.
  return await getData('http://localhost:3002/get_sequence')
}

async function postLiveness({ image, request_id }) {
  // for more information https://docs.aigen.online/documents/api-reference/aiface/liveness-detection#get-choices-data-which-will-be-used-in-the-liveness-detection-api.
  return await postData('http://localhost:3002/liveness', { image, request_id })
}

//finish data
function finishCallback(data) {
  console.log(data)
  text_advise.innerText = 'Verify Success'

  audioNotify.play()
}

//sequence detected
function sequenceCallback() {
  console.log('next sequence')

  audioNotify.play()
}

//face tracing during video process
function faceTracing(tracing) {
  const faceAdvice = FR.actions[tracing]

  text_advise.innerText = faceAdvice.text
}

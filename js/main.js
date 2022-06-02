let recordBtn = document.getElementById('record-button')
let playBtn = document.getElementById('play-button')
let pauseBtn = document.getElementById('pause-button')

recordBtn.addEventListener('click', recAlert)
playBtn.addEventListener('click', recAlert)
pauseBtn.addEventListener('click', recAlert)

function recAlert(){
    getMedia({audio: true, video: false})
    navigator.mediaDevices.getUserMedia({ audio: true })
.then(stream => {
const mediaRecorder = new MediaRecorder(stream);
mediaRecorder.start();
});
}
async function getMedia(constraints) {
    let stream = null;
  
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      /* use the stream */
    } catch(err) {
      /* handle the error */
    }
  }


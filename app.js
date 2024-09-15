let logDiv = document.getElementById("log");

const SR = new SpeechRecognition({ continuous: false });

const rec = SR.recognition();

SR.start("start");

SR.result((text) => {
  console.log(text);
});

let logDiv = document.getElementById("log");

const SR = new SpeechRecognition({ continuous: false });

const rec = SR.recognition();

SR.start("start");

SR.result((text) => {
  greet(text);
  bgColor(text);
  textColor(text);
  textSize(text);
  opener(text);
});

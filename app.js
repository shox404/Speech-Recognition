let logDiv = document.getElementById("log");

class SpeechRecognition {
  constructor({ continuous }) {
    this.On = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!this.On) {
      alert("Speech Recognition API not supported in this browser.");
    } else {
      this.continuous = continuous;
    }
  }
  recognition() {
    const rec = new this.On();
    rec.continuous = this.continuous;
    return rec;
  }
  start(btn, callback) {
    const startButton = document.getElementById(btn);
    startButton.addEventListener("click", () => {
      rec.start();
      logDiv.innerHTML = "<p>Listening...</p>";
      if (callback) callback();
    });
  }
  result(callback) {
    rec.addEventListener("result", (event) => {
      let text = this.getValue(event);
      if (callback) return callback(text);
    });
  }
  getValue(event) {
    let text = "";
    const { results, resultIndex } = event;
    for (let i = resultIndex; i < results.length; i++) {
      text += results[i][0].transcript;
    }
    return text;
  }
}

const SR = new SpeechRecognition({ continuous: false });

const rec = SR.recognition();

SR.start("start");

SR.result((text) => {
  console.log(text);
});

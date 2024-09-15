let start = document.getElementById("start");
let logDiv = document.getElementById("log");

const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SR) {
  const rec = new SR();

  rec.continuous = true;

  start.addEventListener("click", () => {
    rec.start();
    logDiv.innerHTML = "<p>Listening...</p>";
  });

  rec.addEventListener("result", (event) => {
    const result = event.results;
    let text = "";
    
});
} else {
  alert("Speech Recognition API not supported in this browser.");
}

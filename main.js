const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Speech Recognition API not supported in this browser.");
} else {
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const logDiv = document.getElementById("log");

  startButton.addEventListener("click", () => {
    recognition.start();
    logDiv.innerHTML = "<p>Listening...</p>";
  });

  stopButton.addEventListener("click", () => {
    recognition.stop();
    logDiv.innerHTML += "<p>Stopped listening.</p>";
  });

  recognition.addEventListener("result", (event) => {
    const results = event.results;
    let transcript = "";

    for (let i = event.resultIndex; i < results.length; i++) {
      transcript += results[i][0].transcript;
    }

    transcript.split(" ").map((item) => {
      document.body.style.backgroundColor = item;
    });
    logDiv.innerHTML += `<p>${transcript}</p>`;
  });

  recognition.addEventListener("error", (event) => {
    logDiv.innerHTML += `<p>Error: ${event.error}</p>`;
  });

  recognition.addEventListener("end", () => {
    logDiv.innerHTML += "<p>Speech recognition has ended.</p>";
  });
}

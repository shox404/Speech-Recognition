const data = {
  greet: [
    "hi",
    "hello",
    "hey",
    "greetings",
    "howdy",
    "what's up",
    "good day",
    "hiya",
    "hey there",
    "hello there",
  ],
  bgColor: [
    ["background", "color"],
    ["bg", "color"],
    ["browser", "color"],
  ],
  textColor: [
    ["text", "color"],
    ["next", "color"],
    ["txt", "color"],
  ],
  textSize: [
    ["text", "size"],
    ["next", "size"],
    ["txt", "size"],
    ["font", "size"],
    ["fun", "size"],
    ["on", "size"],
    ["phone", "size"],
  ],
  opener: [["open"], ["open", ".com"], ["open", "website"]],
};

async function greet(text) {
  const { greet } = data;

  greet.map((item) => {
    if (text.toLowerCase().includes(item)) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(
        greet[Math.floor(Math.random() * greet.length)]
      );
      const voices = synth.getVoices();
      const selectedVoice = voices.find(
        (voice) => voice.name === "Google UK English Male"
      );
      utterance.voice = selectedVoice;
      synth.speak(utterance);
    }
  });
}

function bgColor(text) {
  const texts = text.split(" ");
  if (exist(text, data.bgColor)) {
    texts.map((item) => {
      if (isValidColor(item)) {
        document.body.style.backgroundColor = item;
      }
    });
  }
}

function textColor(text) {
  const texts = text.split(" ");
  if (exist(text, data.textColor)) {
    texts.map((item) => {
      if (isValidColor(item)) {
        document.body.style.color = item;
      }
    });
  }
}

function textSize(text) {
  const texts = text.split(" ");
  if (exist(text, data.textSize)) {
    texts.map((item) => {
      if (Number(item)) {
        console.log(item + "px");
        document.body.style.fontSize = item + "px";
      }
    });
  }
}

function opener(text) {
  const texts = text.split(" ");
  console.log(texts);
  if (exist(text, data.opener)) {
    texts.map(() => {
      open("https://awwwards.com", "_blank");
    });
  }
}

function exist(text, value) {
  return new Set(
    value.map((item) => {
      const inner = new Set(
        item.map((key) => text.toLowerCase().includes(key.toLowerCase()))
      );
      return inner.has(false);
    })
  ).has(false);
}

function isValidColor(color) {
  const style = new Option().style;
  style.color = color;
  return style.color == color.toLowerCase();
}

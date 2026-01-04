export function speechToText(audioFile, onResult, onEnd) {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = true;
  recognition.interimResults = false;

  let finalText = "";

  recognition.onresult = (event) => {
    for (let i = event.resultIndex; i < event.results.length; i++) {
      if (event.results[i].isFinal) {
        finalText += event.results[i][0].transcript + " ";
      }
    }
    onResult(finalText.trim());
  };

  recognition.onend = () => {
    onEnd();
  };

  // 🔊 Play audio so browser can "hear" it
  const audio = new Audio(URL.createObjectURL(audioFile));
  audio.play();

  recognition.start();
}

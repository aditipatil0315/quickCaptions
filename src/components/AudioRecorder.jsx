import { useRef, useState } from "react";

function AudioRecorder({ setRawText }) {
  const recognitionRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
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

    recognition.onresult = (event) => {
      let text = "";
      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript + " ";
      }
      setRawText(text.trim());
    };

    recognition.start();
    recognitionRef.current = recognition;
    setIsRecording(true);
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-6 text-center">
      {!isRecording ? (
        <button
          onClick={startRecording}
          className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
        >
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="border border-black px-6 py-2 rounded bg-black text-white"
        >
          Stop Recording
        </button>
      )}
    </div>
  );
}

export default AudioRecorder;

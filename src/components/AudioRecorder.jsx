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
    <div className="text-center">
      {!isRecording ? (
        <button
          onClick={startRecording}
          className="w-full sm:w-auto bg-baby-blue text-dark-brown border-2 border-baby-blue px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-blue-200 hover:border-blue-300 transition-colors duration-200 shadow-sm text-base sm:text-lg"
        >
          🎤 Start Recording
        </button>
      ) : (
        <div className="space-y-4">
          <button
            onClick={stopRecording}
            className="w-full sm:w-auto bg-dark-brown text-white border-2 border-dark-brown px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-brown-800 hover:border-brown-800 transition-colors duration-200 shadow-sm text-base sm:text-lg"
          >
            ⏹️ Stop Recording
          </button>
          
          {/* Recording status indicator */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-dark-brown font-medium text-sm sm:text-base">
              Recording... Speak clearly into your microphone
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default AudioRecorder;
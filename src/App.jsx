import { useState } from "react";
import AudioRecorder from "./components/AudioRecorder";
import CaptionSettings from "./components/CaptionSettings";
import CaptionPreview from "./components/CaptionPreview";
import { formatCaptions } from "./utils/captionFormatter";

function App() {
  const [rawText, setRawText] = useState("");
  const [captions, setCaptions] = useState([]);

  const [settings, setSettings] = useState({
    wordsPerLine: 3,
    fontSize: 36,
    color: "#000000",
  });

  const generateCaptions = () => {
    if (!rawText) return;
    const result = formatCaptions(rawText, settings.wordsPerLine);
    setCaptions(result);
  };

  return (
    <div className="min-h-screen bg-white text-black p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Voice to Captions
      </h1>

      <AudioRecorder setRawText={setRawText} />

      {rawText && (
        <CaptionSettings
          settings={settings}
          setSettings={setSettings}
          onGenerate={generateCaptions}
        />
      )}

      {captions.length > 0 && (
        <CaptionPreview captions={captions} settings={settings} />
      )}
    </div>
  );
}

export default App;

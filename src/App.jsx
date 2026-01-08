import { useState } from "react";
import AudioRecorder from "./components/AudioRecorder";
import CaptionSettings from "./components/CaptionSettings";
import CaptionPreview from "./components/CaptionPreview";
import { formatCaptions } from "./utils/captionFormatter";
import DownloadCaptions from "./components/DownloadCaptions";

function App() {
  const [rawText, setRawText] = useState("");
  const [captions, setCaptions] = useState([]);

  const [settings, setSettings] = useState({
    wordsPerLine: 3,
    fontSize: 36,
    color: "#5C4033",
  });

  const generateCaptions = () => {
    if (!rawText) return;
    const result = formatCaptions(rawText, settings.wordsPerLine);
    setCaptions(result);
  };

  return (
    <div className="min-h-screen bg-butter-yellow text-dark-brown">
      {/* Page Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10">

        {/* Header */}
        <header className="text-center mb-12 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Voice to Captions
          </h1>
          <p className="text-dark-brown/70 text-sm sm:text-base max-w-xl mx-auto">
            Record audio, generate captions, preview them, and export in multiple formats
          </p>
        </header>

        {/* Main Content */}
        <main className="space-y-10">

          {/* Audio Recording Section */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-baby-blue/30 space-y-6">
            <h2 className="text-xl font-semibold">
              1. Record Audio
            </h2>

            <AudioRecorder setRawText={setRawText} />

            {rawText && (
              <div className="p-4 bg-butter-yellow/50 rounded-xl border border-baby-blue space-y-2">
                <h3 className="font-medium text-sm sm:text-base">
                  Transcribed Text
                </h3>
                <p className="text-sm sm:text-base leading-relaxed">
                  {rawText}
                </p>
              </div>
            )}
          </section>

          {/* Caption Settings */}
          {rawText && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-baby-blue/30 space-y-6">
              <h2 className="text-xl font-semibold">
                2. Caption Settings
              </h2>

              <CaptionSettings
                settings={settings}
                setSettings={setSettings}
                onGenerate={generateCaptions}
              />
            </section>
          )}


          {captions.length > 0 && (
            <section className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-baby-blue/30 space-y-8">
              <h2 className="text-xl font-semibold">
                3. Preview & Export
              </h2>

              <div className="space-y-8">
                <CaptionPreview captions={captions} settings={settings} />
                <DownloadCaptions captions={captions} />
              </div>
            </section>
          )}

        </main>


        <footer className="mt-16 pt-6 border-t border-baby-blue/30 text-center text-dark-brown/60 text-sm space-y-1">
          <p>Import caption files directly into your video editing software</p>
          <p>Supports SRT and VTT formats</p>
        </footer>

      </div>

      

      

      
    </div>
  );
}

export default App;

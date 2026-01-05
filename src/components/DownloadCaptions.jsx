import { generateSRT } from "../utils/exporters/srt";
import { generateVTT } from "../utils/exporters/vtt";

function DownloadCaptions({ captions }) {
  const downloadFile = (content, filename) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-xl mx-auto mt-6 border p-4 rounded">
      <h2 className="font-semibold mb-3">Download Captions</h2>

      <div className="flex gap-3">
        <button
          onClick={() =>
            downloadFile(generateSRT(captions), "captions.srt")
          }
          className="flex-1 border border-black py-2 rounded hover:bg-black hover:text-white transition"
        >
          Download SRT
        </button>

        <button
          onClick={() =>
            downloadFile(generateVTT(captions), "captions.vtt")
          }
          className="flex-1 border border-black py-2 rounded hover:bg-black hover:text-white transition"
        >
          Download VTT
        </button>
      </div>

      <p className="text-xs mt-3 text-center">
        Import these files directly into your video editing software.
      </p>
    </div>
  );
}

export default DownloadCaptions;

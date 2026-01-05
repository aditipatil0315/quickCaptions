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
    <div className="space-y-4">
      <h3 className="font-semibold text-dark-brown text-lg">
        Export Captions
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <button
          onClick={() =>
            downloadFile(generateSRT(captions), "captions.srt")
          }
          className="flex items-center justify-center gap-2 bg-baby-blue text-dark-brown border-2 border-baby-blue py-3 px-4 rounded-lg font-medium hover:bg-blue-200 hover:border-blue-300 transition-colors duration-200 shadow-sm text-base"
        >
          <span className="text-lg">📥</span>
          <span>Download SRT</span>
        </button>

        <button
          onClick={() =>
            downloadFile(generateVTT(captions), "captions.vtt")
          }
          className="flex items-center justify-center gap-2 bg-baby-blue text-dark-brown border-2 border-baby-blue py-3 px-4 rounded-lg font-medium hover:bg-blue-200 hover:border-blue-300 transition-colors duration-200 shadow-sm text-base"
        >
          <span className="text-lg">📥</span>
          <span>Download VTT</span>
        </button>
      </div>

      <div className="bg-butter-yellow/50 border border-baby-blue rounded-lg p-3 sm:p-4">
        <h4 className="font-medium text-dark-brown mb-2 text-sm">
          Supported Software:
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-dark-brown/70">
          <div>• Adobe Premiere Pro</div>
          <div>• Final Cut Pro</div>
          <div>• DaVinci Resolve</div>
          <div>• iMovie</div>
          <div>• YouTube Studio</div>
          <div>• VLC Media Player</div>
        </div>
      </div>

      <p className="text-xs text-dark-brown/60 text-center">
        Files are ready to import into your video editing software
      </p>
    </div>
  );
}

export default DownloadCaptions;
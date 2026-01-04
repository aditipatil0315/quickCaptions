function CaptionSettings({ settings, setSettings, onGenerate }) {
  return (
    <div className="max-w-xl mx-auto mt-6 border p-4 rounded">
      <h2 className="font-semibold mb-4">Caption Settings</h2>

      <div className="mb-3">
        <label className="block text-sm mb-1">
          Words per line
        </label>
        <input
          type="number"
          min="1"
          value={settings.wordsPerLine}
          onChange={(e) =>
            setSettings({
              ...settings,
              wordsPerLine: Number(e.target.value),
            })
          }
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm mb-1">
          Font size (preview)
        </label>
        <input
          type="number"
          value={settings.fontSize}
          onChange={(e) =>
            setSettings({
              ...settings,
              fontSize: Number(e.target.value),
            })
          }
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm mb-1">
          Font color
        </label>
        <input
          type="color"
          value={settings.color}
          onChange={(e) =>
            setSettings({
              ...settings,
              color: e.target.value,
            })
          }
        />
      </div>

      <button
        onClick={onGenerate}
        className="w-full border border-black py-2 rounded hover:bg-black hover:text-white transition"
      >
        Generate / Regenerate Captions
      </button>
    </div>
  );
}

export default CaptionSettings;

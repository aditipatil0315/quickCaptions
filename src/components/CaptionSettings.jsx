function CaptionSettings({ settings, setSettings, onGenerate }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Words per line */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-dark-brown">
            Words per line
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={settings.wordsPerLine}
            onChange={(e) =>
              setSettings({
                ...settings,
                wordsPerLine: Number(e.target.value),
              })
            }
            className="w-full border-2 border-baby-blue px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-baby-blue focus:border-transparent text-dark-brown bg-white text-base"
          />
          <p className="text-xs text-dark-brown/60">
            Recommended: 3-5 words for readability
          </p>
        </div>

        {/* Font size */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-dark-brown">
            Font size (px)
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="12"
              max="72"
              value={settings.fontSize}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  fontSize: Number(e.target.value),
                })
              }
              className="flex-1 h-2 bg-baby-blue/30 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-dark-brown font-medium w-12 text-center">
              {settings.fontSize}px
            </span>
          </div>
          <p className="text-xs text-dark-brown/60">
            Adjust for your video resolution
          </p>
        </div>
      </div>

      {/* Color picker */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-dark-brown">
          Font color
        </label>
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="color"
            value={settings.color}
            onChange={(e) =>
              setSettings({
                ...settings,
                color: e.target.value,
              })
            }
            className="h-10 w-16 cursor-pointer border-2 border-baby-blue rounded-lg"
          />
          <div className="flex-1 min-w-50">
            <input
              type="text"
              value={settings.color}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  color: e.target.value,
                })
              }
              className="w-full border-2 border-baby-blue px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-baby-blue focus:border-transparent text-dark-brown bg-white text-sm"
              placeholder="#000000"
            />
          </div>
        </div>
      </div>

      {/* Generate button */}
      <div className="pt-4">
        <button
          onClick={onGenerate}
          className="w-full bg-baby-blue text-dark-brown border-2 border-baby-blue py-3 rounded-lg font-medium hover:bg-blue-200 hover:border-blue-300 transition-colors duration-200 shadow-sm text-base sm:text-lg"
        >
          🔄 Generate / Regenerate Captions
        </button>
      </div>
    </div>
  );
}

export default CaptionSettings;
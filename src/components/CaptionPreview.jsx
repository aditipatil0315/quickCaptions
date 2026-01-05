function CaptionPreview({ captions, settings }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h3 className="font-semibold text-dark-brown text-lg">
          Live Preview
        </h3>
        <div className="text-sm text-dark-brown/70 bg-baby-blue/20 px-3 py-1 rounded-full">
          {captions.length} lines • {settings.fontSize}px font
        </div>
      </div>

      {/* Preview Frame */}
      <div className="border-2 border-baby-blue rounded-xl h-75 sm:h-87.5 overflow-y-auto p-4 bg-butter-yellow shadow-inner">
        <div className="space-y-3 sm:space-y-4">
          {captions.map((line, index) => (
            <div
              key={index}
              style={{
                fontSize: `${settings.fontSize}px`,
                color: settings.color,
                lineHeight: 1.3,
              }}
              className="text-center font-medium py-1 sm:py-2"
            >
              {line}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint for mobile */}
      <div className="text-center sm:hidden">
        <p className="text-xs text-dark-brown/60">
          ↑ Scroll to see all captions ↑
        </p>
      </div>
    </div>
  );
}

export default CaptionPreview;
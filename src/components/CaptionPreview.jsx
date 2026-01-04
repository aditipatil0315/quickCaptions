function CaptionPreview({ captions, settings }) {
  return (
    <div className="max-w-2xl mx-auto mt-8 border rounded p-4">
      <h2 className="font-semibold mb-4">Caption Preview</h2>

      {/* Preview Frame */}
      <div className="border rounded-md h-[300px] overflow-y-auto p-3 bg-white">
        <div className="space-y-3">
          {captions.map((line, index) => (
            <div
              key={index}
              style={{
                fontSize: settings.fontSize,
                color: settings.color,
              }}
              className="text-center"
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaptionPreview;

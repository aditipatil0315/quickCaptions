// function formatTime(seconds) {
//   const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
//   const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
//   const secs = String(Math.floor(seconds % 60)).padStart(2, "0");
//   const ms = "000";
//   return `${hrs}:${mins}:${secs},${ms}`;
// }

// export function generateSRT(captions, duration = 2) {
//   let srt = "";
//   let currentTime = 0;

//   captions.forEach((line, index) => {
//     const start = formatTime(currentTime);
//     const end = formatTime(currentTime + duration);

//     srt += `${index + 1}\n`;
//     srt += `${start} --> ${end}\n`;
//     srt += `${line}\n\n`;

//     currentTime += duration;
//   });

//   return srt;
// }

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(Math.floor(seconds % 60)).padStart(2, "0");
  const ms = "000";

  return `${hrs}:${mins}:${secs},${ms}`;
}

export function generateSRT(captions, duration = 2) {
  let srtLines = [];
  let currentTime = 0;

  captions.forEach((line, index) => {
    const start = formatTime(currentTime);
    const end = formatTime(currentTime + duration);

    srtLines.push(
      `${index + 1}`,
      `${start} --> ${end}`,
      line,
      "" // blank line
    );

    currentTime += duration;
  });

  // ✅ CRLF line endings
  return srtLines.join("\r\n");
}


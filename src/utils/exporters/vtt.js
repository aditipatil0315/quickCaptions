// function formatTime(seconds) {
//   const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
//   const secs = String(Math.floor(seconds % 60)).padStart(2, "0");
//   return `00:${mins}:${secs}.000`;
// }

// export function generateVTT(captions, duration = 2) {
//   let vtt = "WEBVTT\n\n";
//   let currentTime = 0;

//   captions.forEach((line) => {
//     const start = formatTime(currentTime);
//     const end = formatTime(currentTime + duration);

//     vtt += `${start} --> ${end}\n`;
//     vtt += `${line}\n\n`;

//     currentTime += duration;
//   });

//   return vtt;
// }


function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(Math.floor(seconds % 60)).padStart(2, "0");

  return `${hrs}:${mins}:${secs}.000`;
}

export function generateVTT(captions, duration = 2) {
  let vttLines = ["WEBVTT", ""];

  let currentTime = 0;

  captions.forEach((line) => {
    const start = formatTime(currentTime);
    const end = formatTime(currentTime + duration);

    vttLines.push(
      `${start} --> ${end}`,
      line,
      ""
    );

    currentTime += duration;
  });

  return vttLines.join("\r\n");
}

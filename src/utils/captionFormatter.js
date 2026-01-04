export function formatCaptions(text, wordsPerLine) {
  const words = text.split(" ");
  const captions = [];

  for (let i = 0; i < words.length; i += wordsPerLine) {
    captions.push(words.slice(i, i + wordsPerLine).join(" "));
  }

  return captions;
}

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

fightButton.addEventListener("click", function () {
  // Challenge:
  // When the user clicks on the "Pick Fighters" button, pick two random
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  let emojiOne = Math.floor(Math.random() * fighters.length);
  let emojiTwo = Math.floor(Math.random() * fighters.length);

  stageEl.textContent = fighters[emojiOne] + "  vs  " + fighters[emojiTwo];
});

const sounds = [
  "cheer",
  "game-over",
  "beast-roar",
  "birds-singing",
  "cinematic-heartbeat",
  "rocket-whoosh",
];

// Loop through sounds & create button for each sound
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  document.getElementById("buttons").appendChild(btn);
});

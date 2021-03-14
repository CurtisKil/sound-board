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

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    // Stop sound from playing over other sounds
    song.pause();
    song.currentTime = 0;
  });
}

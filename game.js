
// ASTROGO — Combined Homepage + Exploration Game

const planets = {
  Moon: {
    title: "Welcome to the Moon!",
    description: "Explore lunar landscapes and discover the stories of humanity's first Moon missions.",
    mission: "MISSION 01: LUNAR EXPLORATION"
  },
  Mars: {
    title: "Welcome to Mars!",
    description: "Explore the Red Planet and discover the robotic explorers that helped us investigate it.",
    mission: "MISSION 02: MARTIAN EXPLORATION"
  }
};

// HOMEPAGE FUNCTIONS

function startGame() {
  const section = document.getElementById("planets");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function selectPlanet(planetName) {
  if (!planets[planetName]) return;
  window.location.href = "game.html?world=" + planetName.toLowerCase();
}

function showMessage(message) {
  let messageBox = document.getElementById("game-message");

  if (!messageBox) {
    const main = document.querySelector("main");
    if (!main) return;

    messageBox = document.createElement("p");
    messageBox.id = "game-message";
    messageBox.setAttribute("role", "status");
    main.appendChild(messageBox);
  }

  messageBox.textContent = message;
}

// GAME ENGINE

const canvas = document.getElementById("gameCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;

let currentWorld = "moon";
let player = { x: 80, y: 250, speed: 4 };
let keys = {};
let nearbyArtifact = null;
let animationStarted = false;

let discovered = JSON.parse(
  localStorage.getItem("astrogo-discovered") || "[]"
);
let stars = Number(localStorage.getItem("astrogo-stars") || 0);

const artifacts = {
  moon: [
    { name: "Apollo 11 Descent Stage", x: 220, y: 180, fact: "The lower part of the Apollo 11 lunar module remained on the Moon after the astronauts returned home." },
    { name: "Lunar Flag Assembly", x: 390, y: 330, fact: "Apollo 11 astronauts planted a United States flag on the Moon in July 1969." },
    { name: "Laser Retroreflector", x: 550, y: 160, fact: "Apollo astronauts left a special reflector. Scientists still use it to measure the distance between Earth and the Moon." },
    { name: "Solar Wind Experiment", x: 710, y: 350, fact: "Apollo 11 astronauts placed a sheet of special foil on the Moon to collect particles from the solar wind." },
    { name: "Apollo 12 Seismometer", x: 310, y: 420, fact: "Apollo 12 astronauts installed an instrument that helped scientists study moonquakes." },
    { name: "Apollo 15 Rover", x: 650, y: 250, fact: "The Apollo 15 astronauts used a lunar rover to travel farther across the Moon and explore more terrain." },
    { name: "Apollo 17 Rover", x: 480, y: 90, fact: "Apollo 17's lunar rover helped astronauts explore the Taurus-Littrow valley in 1972." },
    { name: "Surveyor 3", x: 820, y: 180, fact: "NASA's Surveyor 3 spacecraft landed on the Moon in 1967 and helped prepare for later crewed missions." }
  ],

  mars: [
    { name: "Sojourner Rover", x: 220, y: 180, fact: "Sojourner was NASA's first successful Mars rover. It explored the planet in 1997." },
    { name: "Pathfinder Lander", x: 390, y: 330, fact: "The Pathfinder lander delivered Sojourner to Mars in 1997 and sent images and science data to Earth." },
    { name: "Pathfinder Airbags", x: 550, y: 160, fact: "A system of airbags helped protect the Pathfinder lander when it bounced onto the Martian surface." },
    { name: "Spirit Rover", x: 710, y: 350, fact: "Spirit explored Mars from 2004. It continued working for years and taught scientists about the planet's past." },
    { name: "Opportunity Rover", x: 310, y: 420, fact: "Opportunity explored Mars for nearly 15 years, far longer than its original planned mission." },
    { name: "Curiosity Sky Crane", x: 650, y: 250, fact: "The sky crane lowered Curiosity safely onto Mars in 2012. The crane then flew away and came to rest nearby." },
    { name: "Perseverance Backshell", x: 480, y: 90, fact: "The backshell helped protect Perseverance during its journey through the Martian atmosphere before landing in 2021." },
    { name: "Ingenuity Helicopter", x: 820, y: 180, fact: "Ingenuity was the first aircraft to make powered, controlled flights on another planet. Its Mars flight mission ended in 2024." }
  ]
};

function startMission(world) {
  if (!canvas) return;

  currentWorld = world;
  document.getElementById("missionSelect").hidden = true;
  document.getElementById("exploration").hidden = false;

  document.getElementById("worldTitle").textContent =
    world === "moon" ? "🌙 LUNAR EXPLORATION" : "🔴 MARS EXPLORATION";

  player = { x: 80, y: 250, speed: 4 };

  updateCollection();

  if (!animationStarted) {
    animationStarted = true;
    drawGame();
    movePlayer();
  }
}

function returnToMissions() {
  document.getElementById("exploration").hidden = true;
  document.getElementById("missionSelect").hidden = false;
  closeDiscovery();
}

function updateCollection() {
  const list = document.getElementById("collectionList");
  const count = document.getElementById("collectionCount");
  const starDisplay = document.getElementById("stars");

  if (!list || !count || !starDisplay) return;

  const worldItems = artifacts[currentWorld];
  const found = discovered.filter(item =>
    worldItems.some(a => a.name === item)
  );

  count.textContent =
    "Artifacts discovered: " + found.length + " / " + worldItems.length;

  starDisplay.textContent = stars;
  list.innerHTML = "";

  found.forEach(name => {
    const item = document.createElement("div");
    item.className = "collection-item";
    item.textContent = "⭐ " + name;
    list.appendChild(item);
  });
}

function drawGame() {
  if (!ctx) return;

  if (document.getElementById("exploration").hidden) {
    requestAnimationFrame(drawGame);
    return;
  }

  const isMoon = currentWorld === "moon";

  ctx.fillStyle = isMoon ? "#10132d" : "#321b37";
  ctx.fillRect(0, 0, 900, 500);

  // Stars
  for (let i = 0; i < 75; i++) {
    const x = (i * 137) % 900;
    const y = (i * 67) % 230;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(x, y, 2, 2);
  }

  // Distant landscape
  ctx.fillStyle = isMoon ? "#373a59" : "#743d43";
  ctx.beginPath();
  ctx.moveTo(0, 310);

  for (let x = 0; x <= 900; x += 60) {
    ctx.lineTo(x, 270 + Math.sin(x * 0.025) * 35);
  }

  ctx.lineTo(900, 500);
  ctx.lineTo(0, 500);
  ctx.fill();

  // Ground
  ctx.fillStyle = isMoon ? "#77758b" : "#a65345";
  ctx.fillRect(0, 370, 900, 130);

  // Small rocks
  for (let i = 0; i < 22; i++) {
    const x = (i * 83) % 900;
    const y = 390 + (i * 29) % 100;

    ctx.fillStyle = isMoon ? "#55556e" : "#813e3d";
    ctx.beginPath();
    ctx.ellipse(x, y, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Discoverable artifacts
  nearbyArtifact = null;

  artifacts[currentWorld].forEach(artifact => {
    const found = discovered.includes(artifact.name);

    ctx.fillStyle = found ? "#75e6c1" : "#ffd66b";
    ctx.beginPath();
    ctx.arc(artifact.x, artifact.y, 13, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#ffffff";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";
    ctx.fillText(found ? "✓" : "✦", artifact.x, artifact.y + 4);

    const distance = Math.hypot(
      player.x - artifact.x,
      player.y - artifact.y
    );

    if (!found && distance < 55) nearbyArtifact = artifact;
  });

  // Astronaut
  ctx.fillStyle = "#d9e6ff";
  ctx.beginPath();
  ctx.arc(player.x, player.y, 17, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#6b91d9";
  ctx.beginPath();
  ctx.arc(player.x, player.y - 2, 9, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(player.x - 12, player.y + 15, 24, 8);

  if (nearbyArtifact) {
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px Arial";
    ctx.fillText("PRESS E TO DISCOVER", player.x, player.y - 35);
  }

  requestAnimationFrame(drawGame);
}

function openDiscovery() {
  if (!nearbyArtifact) return;

  document.getElementById("artifactTitle").textContent =
    nearbyArtifact.name;

  document.getElementById("artifactDescription").textContent =
    nearbyArtifact.fact;

  document.getElementById("discoveryPanel").hidden = false;
}

function closeDiscovery() {
  const panel = document.getElementById("discoveryPanel");
  if (panel) panel.hidden = true;
}

function collectArtifact() {
  if (!nearbyArtifact) return;

  if (!discovered.includes(nearbyArtifact.name)) {
    discovered.push(nearbyArtifact.name);
    stars += 10;

    localStorage.setItem(
      "astrogo-discovered",
      JSON.stringify(discovered)
    );

    localStorage.setItem("astrogo-stars", String(stars));
  }

  closeDiscovery();
  updateCollection();
}

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  keys[key] = true;

  if (key === "e") openDiscovery();
});

document.addEventListener("keyup", event => {
  keys[event.key.toLowerCase()] = false;
});

function movePlayer() {
  if (!canvas) return;

  if (!document.getElementById("exploration").hidden) {
    if (keys["arrowleft"] || keys["a"]) player.x -= player.speed;
    if (keys["arrowright"] || keys["d"]) player.x += player.speed;
    if (keys["arrowup"] || keys["w"]) player.y -= player.speed;
    if (keys["arrowdown"] || keys["s"]) player.y += player.speed;

    player.x = Math.max(20, Math.min(880, player.x));
    player.y = Math.max(30, Math.min(470, player.y));
  }

  requestAnimationFrame(movePlayer);
}

// Start the selected world when opened from the homepage
if (canvas) {
  const requestedWorld =
    new URLSearchParams(window.location.search).get("world");

  if (requestedWorld === "moon" || requestedWorld === "mars") {
    startMission(requestedWorld);
  } else {
    updateCollection();
  }

  document.getElementById("stars").textContent = stars;
}

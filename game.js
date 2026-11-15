
// ==========================================
// ASTROGO — COMPLETE GAME.JS
// Homepage + Moon + Mars + Discoveries
// ==========================================

// HOMEPAGE INFORMATION

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

// IMAGE LOADING

const artifactImages = {
  ingenuity: new Image(),
  marsRover: new Image(),
  lunarRover: new Image(),
  lunarModule: new Image()
};

artifactImages.ingenuity.src = "assets/ingenuity.png.png";
artifactImages.marsRover.src = "assets/mars rover.png.png";
artifactImages.lunarRover.src = "assets/lunar rover.png.png";
artifactImages.lunarModule.src = "assets/lunar module.png.png";

const landscapeImages = {
  moon: new Image(),
  mars: new Image()
};

landscapeImages.moon.src = "assets/moon land.png.png";
landscapeImages.mars.src = "assets/mars land.png.png";

function getArtifactImage(name) {
  const n = name.toLowerCase();

  if (n.includes("ingenuity")) {
    return artifactImages.ingenuity;
  }

  if (
    n.includes("sojourner") ||
    n.includes("spirit rover") ||
    n.includes("opportunity") ||
    n.includes("curiosity")
  ) {
    return artifactImages.marsRover;
  }

  if (n.includes("rover")) {
    return artifactImages.lunarRover;
  }

  if (
    n.includes("descent stage") ||
    n.includes("lander")
  ) {
    return artifactImages.lunarModule;
  }

  return null;
}

// HOMEPAGE BUTTON FUNCTIONS

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

// SAVED PROGRESS

let discovered = JSON.parse(
  localStorage.getItem("astrogo-discovered") || "[]"
);

let stars = Number(
  localStorage.getItem("astrogo-stars") || 0
);

// ARTIFACTS AND DISCOVERY FACTS

const artifacts = {
  moon: [
    {
      name: "Apollo 11 Descent Stage",
      x: 220, y: 180,
      fact: "The lower part of the Apollo 11 lunar module remained on the Moon after the astronauts returned home."
    },
    {
      name: "Lunar Flag Assembly",
      x: 390, y: 330,
      fact: "Apollo 11 astronauts planted a United States flag on the Moon in July 1969."
    },
    {
      name: "Laser Retroreflector",
      x: 550, y: 160,
      fact: "Apollo astronauts left a special reflector. Scientists still use it to measure the distance between Earth and the Moon."
    },
    {
      name: "Solar Wind Experiment",
      x: 710, y: 350,
      fact: "Apollo 11 astronauts placed a sheet of special foil on the Moon to collect particles from the solar wind."
    },
    {
      name: "Apollo 12 Seismometer",
      x: 310, y: 420,
      fact: "Apollo 12 astronauts installed an instrument that helped scientists study moonquakes."
    },
    {
      name: "Apollo 15 Rover",
      x: 650, y: 250,
      fact: "The Apollo 15 astronauts used a lunar rover to travel farther across the Moon and explore more terrain."
    },
    {
      name: "Apollo 17 Rover",
      x: 480, y: 90,
      fact: "Apollo 17's lunar rover helped astronauts explore the Taurus-Littrow valley in 1972."
    },
    {
      name: "Surveyor 3",
      x: 820, y: 180,
      fact: "NASA's Surveyor 3 spacecraft landed on the Moon in 1967 and helped prepare for later crewed missions."
    }
  ],

  mars: [
    {
      name: "Sojourner Rover",
      x: 220, y: 180,
      fact: "Sojourner was NASA's first successful Mars rover. It explored the planet in 1997."
    },
    {
      name: "Pathfinder Lander",
      x: 390, y: 330,
      fact: "The Pathfinder lander delivered Sojourner to Mars in 1997 and sent images and science data to Earth."
    },
    {
      name: "Pathfinder Airbags",
      x: 550, y: 160,
      fact: "A system of airbags helped protect the Pathfinder lander when it bounced onto the Martian surface."
    },
    {
      name: "Spirit Rover",
      x: 710, y: 350,
      fact: "Spirit explored Mars from 2004. It continued working for years and taught scientists about the planet's past."
    },
    {
      name: "Opportunity Rover",
      x: 310, y: 420,
      fact: "Opportunity explored Mars for nearly 15 years, far longer than its original planned mission."
    },
    {
      name: "Curiosity Sky Crane",
      x: 650, y: 250,
      fact: "The sky crane lowered Curiosity safely onto Mars in 2012. The crane then flew away and came to rest nearby."
    },
    {
      name: "Perseverance Backshell",
      x: 480, y: 90,
      fact: "The backshell helped protect Perseverance during its journey through the Martian atmosphere before landing in 2021."
    },
    {
      name: "Ingenuity Helicopter",
      x: 820, y: 180,
      fact: "Ingenuity was the first aircraft to make powered, controlled flights on another planet. Its Mars flight mission ended in 2024."
    }
  ]
};

// START A MISSION

function startMission(world) {
  if (!canvas) return;
  if (world !== "moon" && world !== "mars") return;

  currentWorld = world;

  document.getElementById("missionSelect").hidden = true;
  document.getElementById("exploration").hidden = false;

  document.getElementById("worldTitle").textContent =
    world === "moon"
      ? "🌙 LUNAR EXPLORATION"
      : "🔴 MARS EXPLORATION";

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

// COLLECTION DISPLAY

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
    "Artifacts discovered: " +
    found.length + " / " + worldItems.length;

  starDisplay.textContent = stars;
  list.innerHTML = "";

  found.forEach(name => {
    const item = document.createElement("div");
    item.className = "collection-item";
    item.textContent = "⭐ " + name;
    list.appendChild(item);
  });
}

// DRAW THE GAME

function drawGame() {
  if (!ctx) return;

  const exploration = document.getElementById("exploration");

  if (exploration.hidden) {
    requestAnimationFrame(drawGame);
    return;
  }

  const isMoon = currentWorld === "moon";

  // Draw the selected planet background
  const background = landscapeImages[currentWorld];

  if (background.complete && background.naturalWidth > 0) {
    ctx.drawImage(
      background,
      0,
      0,
      canvas.width,
      canvas.height
    );
  } else {
    ctx.fillStyle = isMoon ? "#77758b" : "#a65345";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Draw discoverable artifacts
  nearbyArtifact = null;

  artifacts[currentWorld].forEach(artifact => {
    const found = discovered.includes(artifact.name);
    const img = getArtifactImage(artifact.name);

    if (img && img.complete && img.naturalWidth > 0) {
      const width = 65;
      const height = 52;

      ctx.globalAlpha = found ? 0.5 : 1;

      ctx.drawImage(
        img,
        artifact.x - width / 2,
        artifact.y - height / 2,
        width,
        height
      );

      ctx.globalAlpha = 1;
    } else {
      ctx.fillStyle = found ? "#75e6c1" : "#ffd66b";
      ctx.beginPath();
      ctx.arc(artifact.x, artifact.y, 13, 0, Math.PI * 2);
      ctx.fill();
    }

    const distance = Math.hypot(
      player.x - artifact.x,
      player.y - artifact.y
    );

    if (!found && distance < 55) {
      nearbyArtifact = artifact;
    }
  });

  // Draw astronaut
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

  // Discovery prompt
  if (nearbyArtifact) {
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      "PRESS E TO DISCOVER",
      player.x,
      player.y - 35
    );
  }

  requestAnimationFrame(drawGame);
}

// DISCOVERY PANEL

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

  if (panel) {
    panel.hidden = true;
  }
}

// COLLECT ARTIFACT

function collectArtifact() {
  if (!nearbyArtifact) return;

  if (!discovered.includes(nearbyArtifact.name)) {
    discovered.push(nearbyArtifact.name);
    stars += 10;

    localStorage.setItem(
      "astrogo-discovered",
      JSON.stringify(discovered)
    );

    localStorage.setItem(
      "astrogo-stars",
      String(stars)
    );
  }

  closeDiscovery();
  updateCollection();
}

// KEYBOARD CONTROLS

document.addEventListener("keydown", event => {
  const key = event.key.toLowerCase();
  keys[key] = true;

  if (key === "e") {
    openDiscovery();
  }
});

document.addEventListener("keyup", event => {
  keys[event.key.toLowerCase()] = false;
});

// PLAYER MOVEMENT

function movePlayer() {
  if (!canvas) return;

  const exploration = document.getElementById("exploration");

  if (!exploration.hidden) {
    if (keys["arrowleft"] || keys["a"]) {
      player.x -= player.speed;
    }

    if (keys["arrowright"] || keys["d"]) {
      player.x += player.speed;
    }

    if (keys["arrowup"] || keys["w"]) {
      player.y -= player.speed;
    }

    if (keys["arrowdown"] || keys["s"]) {
      player.y += player.speed;
    }

    player.x = Math.max(20, Math.min(canvas.width - 20, player.x));
    player.y = Math.max(30, Math.min(canvas.height - 20, player.y));
  }

  requestAnimationFrame(movePlayer);
}

// OPEN THE REQUESTED WORLD FROM HOMEPAGE

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

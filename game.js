
/* =================================
   ASTROGO 2.0 — GAME INTERACTIONS
================================= */

// Planet information
const planets = {
  Moon: {
    title: "Welcome to the Moon! 🌙",
    description:
      "Your lunar adventure begins here! Discover historic spacecraft, explore the lunar surface and uncover the stories of humanity's first Moon missions.",
    mission: "MISSION 01: LUNAR EXPLORATION"
  },

  Mars: {
    title: "Welcome to Mars! 🔴",
    description:
      "Welcome to the Red Planet! Explore the world of robotic explorers and discover the spacecraft and equipment that helped us investigate Mars.",
    mission: "MISSION 02: MARTIAN EXPLORATION"
  }
};

// Start exploring button
function startGame() {
  document.getElementById("planets").scrollIntoView({
    behavior: "smooth"
  });
}

// Planet selection
function selectPlanet(planetName) {
  const planet = planets[planetName];

  if (!planet) return;

  // Remove an existing popup
  const existingPopup = document.querySelector(".planet-popup");

  if (existingPopup) {
    existingPopup.remove();
  }

  // Create popup
  const popup = document.createElement("div");
  popup.className = "planet-popup";

  const popupContent = document.createElement("div");
  popupContent.className = "popup-content";

  const mission = document.createElement("p");
  mission.className = "popup-mission";
  mission.textContent = planet.mission;

  const heading = document.createElement("h2");
  heading.textContent = planet.title;

  const description = document.createElement("p");
  description.textContent = planet.description;

  const button = document.createElement("button");
  button.className = "popup-close";
  button.textContent = "LET'S GO! ✦";

  button.addEventListener("click", () => {
    popup.remove();
    showMessage(
      `🚀 ${planetName} selected! Your adventure is coming soon.`
    );
  });

  popupContent.append(mission, heading, description, button);
  popup.appendChild(popupContent);

  document.body.appendChild(popup);

  // Close popup by clicking outside
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.remove();
    }
  });

  // Close popup with Escape key
  document.addEventListener("keydown", function closeOnEscape(event) {
    if (event.key === "Escape") {
      popup.remove();
      document.removeEventListener("keydown", closeOnEscape);
    }
  });
}

// Show a message
function showMessage(message) {
  let messageBox = document.getElementById("game-message");

  if (!messageBox) {
    messageBox = document.createElement("p");
    messageBox.id = "game-message";
    messageBox.setAttribute("role", "status");

    document.querySelector("main").appendChild(messageBox);
  }

  messageBox.textContent = message;
}

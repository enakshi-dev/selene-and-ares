
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

function startGame() {
  document.getElementById("planets").scrollIntoView({
    behavior: "smooth"
  });
}

function selectPlanet(planetName) {
  const planet = planets[planetName];

  if (!planet) return;

  const oldPopup = document.querySelector(".planet-popup");

  if (oldPopup) {
    oldPopup.remove();
  }

  const popup = document.createElement("div");
  popup.className = "planet-popup";

  const content = document.createElement("div");
  content.className = "popup-content";

  const mission = document.createElement("p");
  mission.className = "popup-mission";
  mission.textContent = planet.mission;

  const heading = document.createElement("h2");
  heading.textContent = planet.title;

  const description = document.createElement("p");
  description.textContent = planet.description;

  const button = document.createElement("button");
  button.className = "popup-close";
  button.textContent = "LET'S GO!";

  button.addEventListener("click", function () {
    popup.remove();
    showMessage(planetName + " selected! Your adventure is coming soon.");
  });

  content.append(mission, heading, description, button);
  popup.appendChild(content);
  document.body.appendChild(popup);

  popup.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.remove();
    }
  });
}

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


function startGame() {
  const message = document.getElementById("message");

  message.textContent =
    "🚀 Mission started! Welcome to the Moon, Space Explorer!";

  const astronaut = document.querySelector(".astronaut");

  astronaut.textContent = "👩‍🚀";

  astronaut.style.transform = "scale(1.2)";

  setTimeout(() => {
    astronaut.style.transform = "scale(1)";
  }, 400);
}

const artifacts = {
  moon: [
    {id:"moon-1",name:"Apollo 11 Lunar Module Descent Stage",mission:"Apollo 11",year:"1969",symbol:"🛸",story:"The lower half of the Eagle lunar module carried Neil Armstrong and Buzz Aldrin to the Moon. After the astronauts lifted off in the ascent stage, the descent stage stayed behind at Tranquility Base.",why:"It marks the landing site of the first crewed Moon landing and shows how the lunar module was designed to separate into two parts.",status:"The descent stage remains on the lunar surface at the Apollo 11 site. It is a historic human-made object, not an operating spacecraft."},
    {id:"moon-2",name:"Apollo 11 Flag Assembly",mission:"Apollo 11",year:"1969",symbol:"⚑",story:"Armstrong and Aldrin planted a United States flag during their first lunar walk. The flag was attached to a horizontal rod so it would appear to extend in the air without wind.",why:"It became one of the best-known images of the first human landing on another world.",status:"The flag assembly was left at the site. NASA imagery suggests the flag was likely knocked over by the lunar module's launch, but its present condition is not confirmed."},
    {id:"moon-3",name:"Apollo Lunar Laser Retroreflector",mission:"Apollo 11, 14 & 15",year:"1969–1971",symbol:"▦",story:"This panel of special corner-cube reflectors sends laser light back toward its source. Scientists on Earth can aim lasers at it and measure the round-trip time.",why:"Laser ranging helps scientists measure the Earth–Moon distance very precisely and study the Moon's orbit and motion.",status:"Reflector arrays remain at Apollo landing sites. Apollo retroreflectors have continued to support scientific measurements."},
    {id:"moon-4",name:"Apollo Solar Wind Composition Experiment",mission:"Apollo 11",year:"1969",symbol:"☼",story:"Astronauts unfurled a sheet of thin aluminum foil to catch particles streaming from the Sun. They rolled it up and brought it back to Earth for laboratory study.",why:"The samples helped scientists learn what the solar wind is made of and how the Sun interacts with the lunar environment.",status:"The foil collector was returned to Earth. Only its support pole remained on the Moon, according to NASA's lunar heritage report."},
    {id:"moon-5",name:"Apollo 12 ALSEP Seismometer",mission:"Apollo 12",year:"1969",symbol:"〰",story:"Apollo 12 astronauts deployed a seismic station as part of the Apollo Lunar Surface Experiments Package. It listened for moonquakes and vibrations in the lunar ground.",why:"Its measurements helped researchers investigate the Moon's internal structure and how seismic waves travel through it.",status:"The Apollo 12 seismometer was part of a network that sent data until the Apollo seismic experiments were shut down in September 1977. Hardware remains at the site."},
    {id:"moon-6",name:"Apollo 15 Lunar Roving Vehicle",mission:"Apollo 15",year:"1971",symbol:"🚙",story:"The first crewed lunar rover let astronauts David Scott and James Irwin travel farther from their landing module while collecting rocks and exploring the Hadley–Apennine region.",why:"The battery-powered rover greatly expanded the area astronauts could explore and the amount of lunar geology they could study.",status:"The rover was left on the Moon after the mission. Its final parking location is part of the Apollo 15 site."},
    {id:"moon-7",name:"Apollo 17 Lunar Roving Vehicle",mission:"Apollo 17",year:"1972",symbol:"🚙",story:"Apollo 17 astronauts Eugene Cernan and Harrison Schmitt used this rover during the final crewed Apollo lunar landing. Schmitt was a geologist and helped gather valuable samples.",why:"The mission collected important lunar rocks and soil, including samples that continue to be studied by scientists.",status:"The rover remains at the Taurus–Littrow landing site. Apollo 17 was the last crewed mission to land on the Moon."},
    {id:"moon-8",name:"Surveyor 3 Spacecraft",mission:"Surveyor 3",year:"1967",symbol:"📡",story:"Surveyor 3 was an uncrewed robotic lander that touched down on the Moon in 1967. Apollo 12 astronauts later visited it and brought selected parts, including its camera, back to Earth.",why:"It helped demonstrate robotic lunar landing technology and gave engineers useful information before human lunar exploration.",status:"The spacecraft's remaining structure is still at its lunar landing site. Some components were returned to Earth by Apollo 12."}
  ],
  mars: [
    {id:"mars-1",name:"Sojourner Rover",mission:"Mars Pathfinder",year:"1997",symbol:"🤖",story:"Sojourner was the first successful wheeled rover to operate on another planet. About the size of a microwave oven, it examined nearby rocks and sent images and measurements to its lander.",why:"It proved that a small mobile robot could explore Mars and helped prepare the way for much larger rovers.",status:"Sojourner stopped communicating in 1997. It remains on Mars near the Pathfinder lander at Ares Vallis."},
    {id:"mars-2",name:"Mars Pathfinder Lander",mission:"Mars Pathfinder",year:"1997",symbol:"🛰",story:"Pathfinder delivered Sojourner to Mars using a landing system that included a parachute and giant airbags. After bouncing to a stop, its petal-like panels opened and the rover rolled out.",why:"The mission tested lower-cost ways to reach Mars and returned thousands of images plus valuable measurements of rocks, soil and weather.",status:"The lander, renamed the Carl Sagan Memorial Station, remains at Ares Vallis. Its final data transmission arrived on September 27, 1997."},
    {id:"mars-3",name:"Mars Pathfinder Airbags",mission:"Mars Pathfinder",year:"1997",symbol:"◉",story:"Huge interconnected airbags wrapped around Pathfinder and cushioned its landing. The spacecraft bounced across the surface before coming to rest and allowing the airbags to deflate.",why:"The system demonstrated a new way to land safely on rocky terrain and influenced later Mars landing designs.",status:"The airbags were deflated after landing and remain as mission hardware around the Pathfinder landing site."},
    {id:"mars-4",name:"Spirit Rover",mission:"Mars Exploration Rover",year:"2004",symbol:"🤖",story:"Spirit explored Gusev Crater, studying rocks and soil for clues about ancient water. It far outlasted its original 90-sol primary mission and continued working for years.",why:"Its discoveries provided strong evidence that liquid water had altered rocks in Mars' past.",status:"Spirit became stuck in soft soil and stopped communicating in March 2010. It remains on Mars as an inactive rover."},
    {id:"mars-5",name:"Opportunity Rover",mission:"Mars Exploration Rover",year:"2004",symbol:"🤖",story:"Opportunity explored Meridiani Planum and found geological evidence that water once flowed across or soaked parts of Mars. It operated for nearly 15 years.",why:"Its long journey transformed scientists' understanding of ancient Martian environments and showed how durable robotic explorers could be.",status:"NASA ended the mission in February 2019 after a planet-wide dust storm interrupted communications. Opportunity remains on Mars."},
    {id:"mars-6",name:"Curiosity Sky Crane Descent Stage",mission:"Mars Science Laboratory",year:"2012",symbol:"🚀",story:"During Curiosity's landing, a rocket-powered descent stage hovered above the surface and lowered the rover on nylon tethers. Once the rover touched down, the stage flew away and crashed at a safe distance.",why:"The sky crane made it possible to land a large, heavy rover with precision in a scientifically interesting location.",status:"The descent stage was intentionally discarded after landing in Gale Crater in August 2012. Curiosity itself remains an active rover; the stage does not."},
    {id:"mars-7",name:"Perseverance Backshell",mission:"Mars 2020",year:"2021",symbol:"◒",story:"The backshell protected Perseverance during its journey through space and the early part of its descent through the Martian atmosphere. It also carried the parachute that slowed the spacecraft.",why:"Its design and sensors helped engineers understand the intense process of entering and landing on Mars.",status:"The backshell and parachute separated before touchdown and landed away from the rover in Jezero Crater. Perseverance remains an active mission; the backshell is discarded hardware."},
    {id:"mars-8",name:"Ingenuity Mars Helicopter",mission:"Mars 2020",year:"2021",symbol:"✥",story:"Ingenuity was a small technology demonstrator that became the first aircraft to make powered, controlled flights on another planet. Its flights showed how aerial scouts might help future explorers.",why:"It proved that powered flight is possible in Mars' extremely thin atmosphere and opened a new path for planetary exploration.",status:"Ingenuity's mission ended in January 2024 after 72 flights. It remains on the Martian surface; Perseverance continues its separate rover mission."}
  ]
};

// NASA mission photographs used in the exhibit cards and detail panels.
const artifactImages = {
  "moon-1": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/detail_as14-66-9306_orig.jpg?fit=clip&h=1024&w=986",
  "moon-2": "https://images-assets.nasa.gov/image/as11-40-5875/as11-40-5875~large.jpg?fit=clip&h=1920&w=1856",
  "moon-3": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/detail_as14-67-09361_orig.jpg?fit=clip&h=1002&w=1000",
  "moon-4": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/detail_as17-134-20473_orig.jpg?fit=clip&h=1024&w=1024",
  "moon-5": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/a/as12-48-7134.jpg?fit=clip&h=1024&w=1024",
  "moon-6": "https://assets.science.nasa.gov/content/dam/science/cds/general/images/2023/03/2-apollo-15-on-moon-1.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
  "moon-7": "https://images-assets.nasa.gov/image/S72-37002/S72-37002~large.jpg?fit=clip&h=1320&w=1920",
  "moon-8": "https://assets.science.nasa.gov/content/dam/science/psd/lunar-science/2023/08/detail_su5_67_h_1340.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
  "mars-1": "https://photojournal.jpl.nasa.gov/jpeg/PIA00614.jpg",
  "mars-2": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/4/40057_PIA04315.jpg?fit=clip&h=1024&w=1024",
  "mars-3": "https://photojournal.jpl.nasa.gov/jpeg/PIA00768.jpg",
  "mars-4": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/3/6/36170_PIA16063_NewNavPerspective.jpg?fit=clip&h=1024&w=1024",
  "mars-5": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/p/i/a/PIA22909.jpg?fit=clip&h=1024&w=1024",
  "mars-6": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/3/6/36510_pia16238.jpg?fit=clip&h=1024&w=1024",
  "mars-7": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/4/5/45771_PIA24427-HiRISE_Views_Perseverance_After_Landing.jpg?fit=clip&h=1008&w=1930",
  "mars-8": "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/mars/downloadable_items/4/8/48430_PIA25968.jpg?fit=clip&h=1127&w=4160"
};
Object.values(artifacts).flat().forEach(item => { item.image = artifactImages[item.id] || ""; });

const STORAGE_KEY = "astrogo-discoveries-v1";
let discoveries = loadDiscoveries();
let currentArtifact = null;

function loadDiscoveries(){
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}
function saveDiscoveries(){
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(discoveries)); }
  catch (error) { console.warn("ASTROGO could not save progress in this browser.", error); }
}
function discoveredCount(world){ return artifacts[world].filter(item => discoveries.includes(item.id)).length; }
function updateProgress(){
  const total = discoveries.length;
  document.getElementById("headerCount").textContent = `${total} / 16`;
  ["moon","mars"].forEach(world => {
    const count = discoveredCount(world), percent = Math.round(count / 8 * 100);
    const ids = {
      moon:["moonCardProgress","moonProgressText","moonProgressPercent","moonProgressBar","moonAchievement"],
      mars:["marsCardProgress","marsProgressText","marsProgressPercent","marsProgressBar","marsAchievement"]
    }[world];
    const textEl = document.getElementById(ids[0]);
    if(textEl) textEl.textContent = `${count} / 8 DISCOVERED`;
    document.getElementById(ids[1]).textContent = `${count} / 8`;
    document.getElementById(ids[2]).textContent = `${percent}%`;
    document.getElementById(ids[3]).style.width = `${percent}%`;
    document.getElementById(ids[4]).classList.toggle("show", count === 8);
  });
}
function renderArtifacts(world){
  const container = document.getElementById(`${world}Artifacts`);
  if(!container) return;
  container.innerHTML = "";
  artifacts[world].forEach((item,index) => {
    const isFound = discoveries.includes(item.id);
    const card = document.createElement("button");
    card.className = `artifact-card${isFound ? " discovered" : ""}`;
    card.type = "button";
    card.innerHTML = `<div class="artifact-thumb ${world}"><img class="artifact-photo" src="${item.image}" alt="${item.name} — NASA mission photograph" loading="lazy" onerror="this.style.display='none';this.parentElement.querySelector('.artifact-symbol').style.display='block';"><span class="artifact-index">${String(index+1).padStart(2,"0")} / 08</span><span class="artifact-symbol" aria-hidden="true">${item.symbol}</span>${isFound ? '<span class="discovered-mark">✓</span>' : ""}</div><div class="artifact-info"><small>${item.mission.toUpperCase()} · ${item.year}</small><h3>${item.name}</h3><p>${isFound ? "In your discovery log" : "Artifact awaiting discovery"}</p><div class="card-open"><span>OPEN EXHIBIT</span><span>↗</span></div></div>`;
    card.addEventListener("click", () => openArtifact(world,item.id));
    container.appendChild(card);
  });
}
function showView(view){
  document.body.classList.remove("theme-moon","theme-mars");
  if(view === "moon" || view === "mars") document.body.classList.add(`theme-${view}`);
  document.querySelectorAll(".view").forEach(section => section.classList.toggle("active",section.id === view));
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active",link.dataset.view === view));
  const mainNav = document.getElementById("mainNav");
  if(mainNav) mainNav.classList.remove("open");
  window.location.hash = view;
  window.scrollTo({top:0,behavior:"smooth"});
}
function openArtifact(world,id){
  const item = artifacts[world].find(entry => entry.id === id);
  if(!item) return;
  currentArtifact = {world,item};
  document.getElementById("modalWorld").textContent = world === "moon" ? "LUNAR ARCHIVE" : "MARTIAN ARCHIVE";
  document.getElementById("modalMission").textContent = item.mission.toUpperCase();
  document.getElementById("modalTitle").textContent = item.name;
  document.getElementById("modalYear").textContent = `MISSION YEAR · ${item.year}`;
  document.getElementById("modalStory").textContent = item.story;
  document.getElementById("modalWhy").textContent = item.why;
  document.getElementById("modalStatus").textContent = item.status;
  const modalVisual = document.getElementById("modalVisual");
  modalVisual.className = `modal-visual ${world}`;
  modalVisual.style.backgroundImage = `linear-gradient(0deg, #080914bb, transparent 70%), url("${item.image}")`;
  modalVisual.style.backgroundSize = "cover";
  modalVisual.style.backgroundPosition = "center";
  const button = document.getElementById("markDiscovered");
  const done = discoveries.includes(item.id);
  button.textContent = done ? "✓ Discovered" : "Mark as discovered ✓";
  button.classList.toggle("done",done);
  document.getElementById("modalNote").textContent = done ? "This exhibit is already in your discovery log." : "Your discovery is saved in this browser.";
  const modal = document.getElementById("artifactModal");
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeModal(){
  const modal = document.getElementById("artifactModal");
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  currentArtifact = null;
}

// PROBLEM C FIX: Explore Now button scrolls to world portals and prompts selection instead of forcing Moon
document.getElementById("enterMuseum").addEventListener("click", () => {
  const portalsSection = document.getElementById("entrancePortals");
  if(portalsSection) {
    portalsSection.scrollIntoView({ behavior: "smooth", block: "center" });
    portalsSection.classList.add("highlight-pulse");
    setTimeout(() => portalsSection.classList.remove("highlight-pulse"), 1500);
  }
});

document.querySelectorAll("[data-open-world]").forEach(button => button.addEventListener("click",() => showView(button.dataset.openWorld)));
document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click",event => {event.preventDefault();showView(link.dataset.view);}));

// PROBLEM B FIX: Back to Home button listeners
document.querySelectorAll(".back-home-btn").forEach(btn => {
  btn.addEventListener("click", () => showView("home"));
});

document.getElementById("menuToggle").addEventListener("click",() => document.getElementById("mainNav").classList.toggle("open"));
document.getElementById("modalClose").addEventListener("click",closeModal);
document.getElementById("artifactModal").addEventListener("click",event => {if(event.target.id === "artifactModal") closeModal();});
document.addEventListener("keydown",event => {if(event.key === "Escape") closeModal();});
document.getElementById("markDiscovered").addEventListener("click",() => {
  if(!currentArtifact) return;
  if(!discoveries.includes(currentArtifact.item.id)) discoveries.push(currentArtifact.item.id);
  saveDiscoveries(); updateProgress(); renderArtifacts(currentArtifact.world);
  document.getElementById("markDiscovered").textContent = "✓ Discovered";
  document.getElementById("markDiscovered").classList.add("done");
  document.getElementById("modalNote").textContent = "Added to your discovery log. Progress saved in this browser.";
});
["moon","mars"].forEach(world => renderArtifacts(world));
updateProgress();
const initialView = ["home","moon","mars","about"].includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";
showView(initialView);

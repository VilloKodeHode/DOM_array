// en funksjon som bruker append child for å legge til et p tag med innholdet fra en tilfeldig index i arrayet på starten:
function randomAnimal() {
  //initialiserer et array på innsiden av arrayet:
  const animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Kangaroo",
    "Monkey",
    "Penguin",
    "Dolphin",
    "Panda",
  ];

  // initialiserer en variabel for å fange opp hvor jeg vil at koden skal vises:
  //TODO Test ut forskjellige måter her (f.eks querySelector)
  let outPut = document.getElementById("randomElementOutPut");

  // initialiserer en variabel som er første element i taggen som har id="randomElementOutPut"
  let child = outPut.firstChild;
  // conditional som sjekker om det allerede finnes en child i outPut
  while (child) {
    // kjøres hvis det allerede finnes en child i output:
    //først fjernes child
    outPut.removeChild(child);
    // så legges en ny tilfeldig til
    child = outPut.firstChild;
  }

  //lage et filfeldig index tall:
  let randomNumber = Math.floor(Math.random() * animals.length);

  // initialisere en variabel som skal lage en p tag:
  let newParagraph = document.createElement("p");

  // sier at den p taggen som blir laget skal tekstinnhold fra et tilfeldig index i arrayet på toppen:
  newParagraph.textContent = animals[randomNumber];
  newParagraph.style.fontSize = "40px"

  // legge til en p tag med tekstinnhold i outPut
  outPut.appendChild(newParagraph);

  // returner outPut
  return outPut;
}

// vi callbacker ikke her siden vi vil at denne skal kjøres ved å trykke på en knapp (se i htmlen)

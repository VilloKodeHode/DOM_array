// initialisere et array:
const fruits = ["Kiwi", "Apple", "Pear", "Melon", "Mango", "Orange"];

// initialiserer variabel at man skal lage ul tag:
const fruitList = document.createElement("ul");
// kjøre standard loop som kjører lengde av arrayet man har definert i forkant:
for (let i = 0; i < fruits.length; i++) {
    // hver gang loopen kjøres:
    // lager et nytt li element:
    const fruitItem = document.createElement("li");
    // li elementet får tekstinnholdet til tilsvarende index i arrayet over:
    fruitItem.textContent = fruits[i];
    // gir li elementet en tilfeldig font størrelse
    fruitItem.style.fontSize = `${Math.floor(Math.random() * 50 + 10)}px`
    // legger li elementet inn i ul'en man har definert på starten:
    fruitList.append(fruitItem);
    //etter alt dette finnes det, men det har ikke blitt sagt hvor det skal være
}

// forteller hvor den ferdige ul + li items skal være:
document.body.prepend(fruitList)
//prepend forteller at man skal legge dette på toppen av siden

// parents.append(fruitList)
// File script.js - La città degli eventi

// Inizia qui il tuo lavoro! Usa gli eventi per animare la città degli eventi.

// Esempio di struttura iniziale
document.addEventListener('DOMContentLoaded', () => {
    console.log('Benvenuto nella città degli eventi!');
    
    // Aggiungi qui i tuoi eventi
});

function Municipio() {
    var door = document.getElementById('door');
    if (door.src.includes("door-closed.png")) {
        door.src = "./Textures/door-open.png";
    } else {
        door.src = "./Textures/door-closed.png";
    }
}

function changeColor() {
    const marketSign = document.getElementById('market-sign');
    marketSign.style.backgroundColor = 'red';
}

function changeColorBack() {
    const marketSign = document.getElementById('market-sign');
    marketSign.style.backgroundColor = 'white';
}

function Music(Id) {
    const audio = document.getElementById(Id);
        audio.play();
}

// Festa function to trigger confetti
function Festa() {
    const partyButton = document.getElementById('party-button');
    party.confetti(partyButton, {
        count: party.variation.range(500, 500),
        size: party.variation.range(0.6, 1.4),
    });
}


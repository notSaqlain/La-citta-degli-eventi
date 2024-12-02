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

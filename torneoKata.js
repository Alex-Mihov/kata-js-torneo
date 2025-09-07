// Importa fighters e weapons dal file esterno
import { fighters, weapons } from './fightersAndWeapons.js';

// * Fase 1 - 🔥 Scelta dell'Arma: ogni combattente sceglierà casualmente un'arma dalla relativa lista.Una volta scelta, un'arma non sarà più disponibile per i successivi combattenti.

// Funzione che assegna un'arma casuale a ogni combattente
function randomWeapon(availableWeapons) {

    // Per ogni combattente...
    const chooseWeapon = fighters.map((f) => {

        // Scegli un indice casuale tra le armi disponibili
        const randomIndex = Math.floor(Math.random() * availableWeapons.length);

        // Prendi l'arma corrispondente a quell'indice
        const casualWeapon = availableWeapons[randomIndex];

        // Rimuovi l'arma scelta dalla lista delle armi disponibili
        const weapon = availableWeapons.splice(randomIndex, 1);

        // Restituisci un nuovo oggetto combattente con l'arma e la sua potenza
        return { ...f, weapon: casualWeapon.name, weaponPower: casualWeapon.power }
    })

    // Restituisci la lista aggiornata dei combattenti con le armi assegnate
    return chooseWeapon

}

// Stampa il risultato
console.log(randomWeapon(weapons));


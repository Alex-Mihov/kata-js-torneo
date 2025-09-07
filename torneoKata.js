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
// console.log(randomWeapon(weapons));

// * Fase 2 - 💪 Allenamento: ogni combattente si sottoporrà ad un allenamento che incrementerà(o forse no) la sua potenza, moltiplicandola per un numero casuale tra 1 e 100.

const completeObj = randomWeapon(weapons);
// console.log(completeObj);

// Applica la fase di allenamento a ciascun combattente
const training = completeObj.map((f) => {

    // Genera un numero casuale tra 1 e 100 (moltiplicatore dell'allenamento)
    const randomMultiplier = Math.floor(Math.random() * 100) + 1;

    // Restituisci un nuovo oggetto combattente con la potenza aggiornata
    // La potenza originale del combattente viene moltiplicata per il moltiplicatore casuale
    return { ...f, power: f.power * randomMultiplier }
})

// Stampa la lista dei combattenti dopo l'allenamento
console.log(training);



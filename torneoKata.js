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
// console.log(training);

// * Fase 3 -  🎯 Qualificazione: escludiamo dal torneo chi, dopo l'allenamento non è riuscito a raggiungere una potenza di almeno 2000.

const qualifications = training.filter(f => f.power > 2000)

console.log(qualifications);


// **Fase 4 - ⚔️ Combattimento:** i combattimenti si svolgeranno tra un partecipante e il successivo dell'elenco, assicurandosi che ognuno combatta una sola volta.

// *In ogni scontro vincerà il combattente con la potenza più alta.In caso di parità vincerà chi "gioca in casa", ossia chi viene prima nell'elenco. 

// *⚠️ Bisogna assicurarsi che l'elenco contenga un numero pari di combattenti, altrimenti l'ultimo non avrebbe un avversario.Potrebbe essere necessario aggiungere un combattente "Robot" con potenza "4000" all'ultimo minuto.

// Se il numero di qualificati è dispari, aggiungi il Robot
let fightersForBattle = [...qualifications];
if (fightersForBattle.length % 2 !== 0) {
    fightersForBattle.push({
        name: "Robot",
        power: 4000,
        weapon: "Laser",
        weaponPower: 4000
    });
}

// Array per salvare i vincitori dei duelli
const winners = [];

// Cicla a passi di 2 per formare le coppie e determinare il vincitore
for (let i = 0; i < fightersForBattle.length; i += 2) {
    const fighter1 = fightersForBattle[i];
    const fighter2 = fightersForBattle[i + 1];

    // Confronta la potenza
    if (fighter1.power > fighter2.power) {
        winners.push(fighter1);
    } else if (fighter2.power > fighter1.power) {
        winners.push(fighter2);
    } else {
        // In caso di parità vince chi viene prima (fighter1)
        winners.push(fighter1);
    }
}

// Stampa i vincitori dei duelli
console.log("Vincitori dei duelli:", winners);

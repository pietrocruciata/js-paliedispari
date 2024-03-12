// CHIEDERE ALL'UTENTE DI SCEGLIERE TRA PARI O DISPARI
const evenOdd = prompt('scegli e digita se pari o dispari')
console.log(evenOdd);

// CHIEDERE ALL'UTENTE DI INSERIRE UN NUMERO DA 1 A 5
const userNUmber = parseInt(prompt('inserisci un numero da 1 a 5'))
console.log('numero scelto dall utente: ', userNUmber);

if (userNUmber <= 5 &&
    userNUmber > 0 &&
    evenOdd === 'pari' || evenOdd === 'dispari') {
    //GENERARE UN NUMERO RANDOM DA 1 A 5 USANDO UNA FUNZIONE
    function isRandomNumber() {
        const randomNumber = parseInt(Math.floor(Math.random() * 5) + 1)
        return randomNumber;
    }

    const random = isRandomNumber()
    console.log('numero casuale:', random);

    // SOMMIAMO I DUE NUMERI
    const sum = userNUmber + random
    console.log('somma dei due numeri:', sum);

    // STABILIAMO SE LA SOMMA è PARI O DISPARI USANDO UNA FUNZIONE
    function isEvenOdd() {
        const rest = sum % 2
        return rest
    }

    // DICHIARIMAO IL VINCITORE
    if (isEvenOdd() === 0 && evenOdd === 'pari') {
        console.log('hai vinto il numero è pari!');
    } else if (isEvenOdd() !== 0 && evenOdd === 'dispari') {
        console.log('hai vinto il numero è dispari !');
    } else {
        console.log('hai perso!');
    }
}else{
    alert('error')
}





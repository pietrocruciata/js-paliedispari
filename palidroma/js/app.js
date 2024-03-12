// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
const word = prompt('inserisi una parola') 

//CREARE UN ARRAY CON CICLO FOR PER LEGGERE LA PROLA LETTERA PER LETTERA
const array = [];
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
    const wordIndex = word[i]
    array.push(wordIndex)
}
console.log(array);

//CREARE UN ARRAY CON CICLO FOR PER LEGGERE LA PROLA LETTERA PER LETTERA 
//AL CONTRARIO
const arrayReverse = [];
for (let j = word.length - 1; j >= 0; j--) {
    console.log(word[j]);
    const wordIndexReverse = word[j]
    arrayReverse.push(wordIndexReverse)
}
console.log(arrayReverse);



// CREARE UNA FUNZIONE PER CAPIRE SE LA PAROLA è PALINDROMA
function isPalindrome(word1, word2) {
    let result = false
    for (let i = 0; i < word.length; i++) {
        // SE LA PAROLA è PALINDRROMA ALLORA TORNERà TRUE
        if (word1[i] === word2[i]) {
            console.log('la parola è palindroma');
            result = true
            // ALTRIMENTI TORNERà FALSE
        } else {
            console.log('la parola non è palindroma');
            result = false
        }
    }
    return result
}

// STAMPARE IL RISULTATO DEL CONTROLLO
const finalResult = isPalindrome(array, arrayReverse);
console.log(finalResult);



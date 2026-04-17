/* Create a command - line Caesar Cipher encryption program that: 
   takes a phrase and a shift number from process.argv,
   applies the shift(both positive and negative), 
   and outputs the encrypted text. 
   
*/

// take inputs from command line arguments
const arrPlainText = [];
arrPlainText.push(process.argv[2]);
const shiftNumber = process.argv[3];



const arrAlphabet = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
];

const encryptCaesarCipher = arrPlainText.map((word) => {
    //console.log("word: " + word);
    const chars = word.split("");
    //console.log("chars: " + chars);
    chars.forEach((char, index) => {
        if (arrAlphabet.includes(char)) {

            // convert letter to number by finding index in alphabet array
            const indexOfChar = arrAlphabet.indexOf(char);
            //console.log("char: " + char + " indexOfChar: " + indexOfChar);

            // encrypt char by applying shift and wrap around using modulo
            const shiftedIndex = (indexOfChar + parseInt(shiftNumber)) % 26;
        

            // convert shifted index back to char and replace in chars array
            let newChar = arrAlphabet[shiftedIndex];
            chars[index] = newChar;
            //console.log("chars after replacement before join: " + chars);
            //console.log("Encrypted Sentence: " + chars.join(""));
        }        
    });

    return chars.join("");
});


const decryptedCaesarCipher = encryptCaesarCipher.map((word) => {
    //console.log("word: " + word);
    const chars = word.split("");
    //console.log("chars: " + chars);
    chars.forEach((char, index) => {
        if (arrAlphabet.includes(char)) {

            // convert letter to number by finding index in alphabet array
            const indexOfChar = arrAlphabet.indexOf(char);
            //console.log("char: " + char + " indexOfChar: " + indexOfChar);

            // decrypt char by applying negative shift and wrap around using modulo
            const shiftedIndex = (indexOfChar - parseInt(shiftNumber) + 26) % 26;
            

            // convert shifted index back to char and replace in chars array
            let newChar = arrAlphabet[shiftedIndex];
            chars[index] = newChar;
            //console.log("chars after replacement before join: " + chars);
            //console.log("Encrypted Sentence: " + chars.join(""));
        }        
    });

    return chars.join("");
});


console.log("Original Plain Text: " + arrPlainText);
console.log("Encrypted Sentence: " + encryptCaesarCipher);
console.log("Decrypted Sentence: " + decryptedCaesarCipher);


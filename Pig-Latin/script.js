let arrSentence = [];

// get the sentence from command line argument
arrSentence.push(process.argv[2]);
console.log(arrSentence);

// split sentence into words
const words = arrSentence[0].split(" ");
console.log(typeof words);
console.log(words);

// convert each word to pig latin
const pigLatinWords = words.map( (word) => {

    // Separate punctuation from word
    const punctuation = word.match(/[^a-zA-Z]$/)?.[0] || ""; // capture trailing punctuation
    const cleanWord   = word.replace(/[^a-zA-Z]/g, "");      // remove punctuation


    // split string into characters
    const chars = cleanWord.toLowerCase().split("");
    console.log(chars);

    // Check first char is vowel or consonant
    const vowels = ["a", "e", "i", "o", "u"];
    const firstChar = chars[0];
    console.log(`First char: ${firstChar}`);
    

    // Convert to Pig Latin
    let translated;
    if (vowels.includes(firstChar)) {
        console.log("First char is a vowel");
        console.log("Pig Latin: " + word + "way");

        translated = `${word}way`;
    } else {
        console.log("First char is a consonant");
        const rest = chars.slice(1).join("");
        console.log(`Pig Latin: ${rest}${firstChar}ay`);
        translated = rest + firstChar + "ay";
        
    }

    return translated + punctuation; // reattach punctuation

} );

console.log(pigLatinWords);

// join pig latin words into a sentence
const pigLatinSentence = pigLatinWords.join(" ");
console.log(pigLatinSentence);
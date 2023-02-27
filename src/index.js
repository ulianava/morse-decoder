const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let words = expr.split('**********');
    let sum = '';
    let phrase = '';
    for (let i = 0; i < words.length; i++) {
        for (let a = 0; a < Array.from(words[i]).length; a+=10) {
            Array.from(words[i]).slice(a,a+10).join('').replaceAll('10','.').replaceAll('11','-').replaceAll('0','')
            sum = MORSE_TABLE[Array.from(words[i]).slice(a,a+10).join('').replaceAll('10','.').replaceAll('11','-').replaceAll('0','')]
            phrase +=sum
        }
        phrase+=' ';
        sum='';
    }
    return phrase.trimEnd()
}

module.exports = {
    decode
}
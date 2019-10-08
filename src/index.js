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
  let result = '';

  for (let i = 0; i < expr.length / 10; i++) {
    let digits = expr.substr(i * 10, 10);
    if (digits == '**********') {
      result += ' ';
      continue;
    }

    let code = '';
    for (let j = 0; j < digits.length / 2; j++) {
      let pair = digits.substr(j * 2, 2);
      if (pair == '10') {
        code += '.';
      } else if (pair == '11') {
        code += '-';
      }
    }

    result = result + MORSE_TABLE[code];
  }
   return result;
}

module.exports = {
    decode
}
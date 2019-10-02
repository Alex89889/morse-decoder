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
	'------': ' ',
};

function decode(expr) {
	var arr=expr.match(/.{10}/g);
	var result=[];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i]=='**********'){
			result[i]='------';
		}
		else{
			var arr2=arr[i].match(/.{2}/g);
			result[i]='';
			for (var j = 0; j < arr2.length; j++) {
				if(arr2[j]=='10'){
					result[i]=result[i]+'.';
				}
				else if(arr2[j]=='11'){
					result[i]=result[i]+'-';
				}
			}
		}
	}
  return result.map(b => MORSE_TABLE[b]).join('');
}


module.exports = {
    decode
}

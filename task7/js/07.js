/*jshint esversion: 6 */

let normText = document.getElementById('normText');
let cipherText = document.getElementById('cipherText');
// let help = document.getElementById('help');

//текст шифруется
normText.oninput = function () {
  const offset = 33;
  const offset1 = 7;
  const offset2 = 19;
  //из кода в символ
  // help.innerHTML = String.fromCharCode(97);
  let str = this.value;
  //из символа в код
  // console.log(str.charCodeAt(0));
  let out = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    code = code + offset + offset1 - offset2;
    out += String.fromCharCode(code);
  }
  document.getElementById('outCipherText').innerHTML = out;
};

//расшифровка текста
cipherText.oninput = function () {
  const offset = 33;
  const offset1 = 7;
  const offset2 = 19;
  let str = this.value;
  let out = '';
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    code = code + offset2 - offset1 - offset;
    out += String.fromCharCode(code);
  }
  document.getElementById('outNormText').innerHTML = out;
};
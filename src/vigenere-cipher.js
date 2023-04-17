const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.square = [];
    this.reverse = reverse;
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row.push(...this.alphabet.slice(0, i));
      this.square.push(row);
    }
  }

  getSquare() {
    return this.square;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    const longKey = [];
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (key[j]) {
        if (this.alphabet.includes(text[i])) {
          longKey.push(key[j]);
          j++;
        } else {
          longKey.push(text[i]);
        }
      } else {
        j = 0;
        if (this.alphabet.includes(text[i])) {
          longKey.push(key[j]);
          j++;
        } else {
          longKey.push(text[i]);
        }
      }
    }
    this.generateSquare();
    let result = "";
    for (let count = 0; count < text.length; count++) {
      let i = this.alphabet.indexOf(text[count]);
      let j = this.alphabet.indexOf(longKey[count]);
      if (i !== -1 || j !== -1) result += this.square[i][j];
      else result += text[count];
    }
    this.square = [];
    return this.reverse ? result : result.split("").reverse().join("");
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    const longKey = [];
    let j = 0;
    for (let i = 0; i < text.length; i++) {
      if (key[j]) {
        if (this.alphabet.includes(text[i])) {
          longKey.push(key[j]);
          j++;
        } else {
          longKey.push(text[i]);
        }
      } else {
        j = 0;
        if (this.alphabet.includes(text[i])) {
          longKey.push(key[j]);
          j++;
        } else {
          longKey.push(text[i]);
        }
      }
    }
    this.generateSquare();
    let result = "";
    for (let count = 0; count < text.length; count++) {
      let i = this.alphabet.indexOf(longKey[count]);
      let j = 0;
      if (i !== -1) {
        j = this.square[i].indexOf(text[count]);
      } else {
        j = -1;
      }
      if (j !== -1) result += this.alphabet[j];
      else result += text[count];
    }
    return this.reverse ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

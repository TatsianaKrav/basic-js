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
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  charWithNum = {};

  fullObj() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let key = this.alphabet[i];
      this.charWithNum[key] = i;
    }
    return this.charWithNum;
  }

  encrypt(text, keyWord) {
/*     this.fullObj();
    let code = "";
    let codeInNums = "";

    for (let i = 0; i < text.length; i++) {
      let numText = this.charWithNum[text[i]] + "  "; // получить цифру, которая соотв букве из объекта
      let numKey = this.charWithNum[keyWord[i % keyWord.length]] + "  ";
      codeInNums += ((numText + numKey) % this.alphabet.length) + " ";
      code = this.alphabet[codeInNums];
    }

    return code; */


    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
  decrypt() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine,
};

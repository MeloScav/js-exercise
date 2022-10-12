/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const calculateSquareOfEvenNumber = (firstNumber,endNumber) => {
        let squareOfEvenNumber = "";
        for(i=firstNumber; i<=endNumber; i++) {
            if(i%2 == 0) {
                squareOfEvenNumber += `Le carré de ${i} est ${i*i} \n`;
            }
        }
        return squareOfEvenNumber;
    }

    document.getElementById("run").addEventListener("click", () => console.log(calculateSquareOfEvenNumber(1,21)));
})();

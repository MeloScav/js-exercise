/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const inputOp = document.querySelectorAll("input[id^='op-']");
    const buttons = document.querySelectorAll(".actions button");

    const getInputValues = (inputs) => {
        const values = [];

        inputs.forEach(input => {
            let inputValue = input.value.trim();

            if (inputValue !== "") {
                values.push(input.value);
            }
        });

        return values;
    }
    
    const onlyNumbersArr = (arr) => {
        return arr.every(el => !isNaN(el));
    }

    const calculate = (operation, numbers) => {
        let operator = null;
        let results = null;

        switch (operation) {
            case "addition":
                operator = "+";
                break;
            case "substraction":
                operator = "-";
                break;
            case "multiplication":
                operator = "*";
                break;
            case "division":
                operator = "/";
                break;
            default:
                results = null;
          }

          if (numbers.length > 0 && onlyNumbersArr(numbers)) {
            results = numbers.reduce((prev, curr) => eval(prev + operator + curr));
          }

          return results;
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
        const numbers = getInputValues(inputOp);
        const results = calculate(btn.id, numbers);
        let resultsMsg = "L'opération est invalide.";

        if (numbers.length === inputOp.length && !isNaN(results) && isFinite(results)) {
            resultsMsg = results;
        }
        
        console.log(resultsMsg);
        })
    });
    
})();
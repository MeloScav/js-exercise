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

    buttons.forEach(el => {
        el.addEventListener("click", ()=> {
          let btnId = el.id;

          switch (btnId) {
            case "addition":


                break;
            case "substraction":
                console.log("sub -");
                break;
            case "multiplication":
                console.log("mult .");
                break;
            case "division":
                console.log("div /");
                break;
            default:
                console.log("default");
          }
            
        })
    });

})();
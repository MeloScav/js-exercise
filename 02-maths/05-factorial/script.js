/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const btn = document.getElementById("run");

    const factorization = (x) => {
        let result = null;
        if(x === 0) {
            result = 1;
        } else {
           result = 1;
           for(let i = 1; i <= x; i++) {
                result *= i;
           }
        }
        return result;
    }

    btn.addEventListener("click", () => {
        const nbr = document.getElementById("number").value;
        if(isNaN(nbr)) {
            console.log("Numéro non valide.");
        } else if (nbr < 0) {
            console.log("Le numéro doit être positif.");
        } else {
            console.log(`La factorielle de ${nbr} est ${factorization(nbr)}`);
        }
    })

})();

/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const btn = document.getElementById("run");
    const numbers = document.getElementById("numbers").value;
    const numbersArray = numbers.split(", ").map(a => Number(a));

    const numbersArrayAscending = [...numbersArray].sort((a, b) => a - b);

    btn.addEventListener("click", () => console.log(numbersArrayAscending));
})();

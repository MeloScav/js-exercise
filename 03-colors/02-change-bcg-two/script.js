/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const btn = document.getElementById("run");

    const getColorValue = () => {
        const inputColor = document.getElementById("color").value;
        return inputColor;
    }

    const changeColor = (color) => {
        document.body.style.backgroundColor = color;
    }

    btn.addEventListener("click", () => {
       changeColor(getColorValue());
    })

})();

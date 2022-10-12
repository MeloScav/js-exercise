/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const btn = document.getElementById("run");

    const getRandomColor = () => {
        let code = "0123456789ABCDEF";
        let hexColor = "#";
        for(i=0; i<6; i++) {
            hexColor += code[Math.floor(Math.random()*16)]
        }
        return hexColor;
    }

    const changeColor = (color) => {
        document.body.style.backgroundColor = color;
    }

    btn.addEventListener("click", () => {
        changeColor(getRandomColor());
    })

})();

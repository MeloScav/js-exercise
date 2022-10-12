/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const itemToChange = document.getElementById("target");
    const currentDate = new Date();
    const dayTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 17, 30, 0).getTime();

    itemToChange.innerText = currentDate.getTime() <= dayTime ? "Bonjour" : "Bonsoir";

})();

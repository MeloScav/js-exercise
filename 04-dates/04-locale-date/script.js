/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const getLocalDate = (language) => {
        const date = new Date();
        const option = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

        return date.toLocaleDateString(language, option);
    }

    const getLocalTime = (hourSeparator) => {
        const date = new Date();
        const getHours = date.getHours();
        const getMins = date.getMinutes();

        const hoursToString = getHours.toString().padStart(2, "0");
        const minsToString = getMins.toString().padStart(2, "0");

        return hoursToString + hourSeparator + minsToString;
    }

    const showMessage = () => document.querySelector("#target").innerHTML = getLocalDate("fr-BE") + ", " + getLocalTime("h");

    showMessage();
    setInterval(() => showMessage(), 1000);


})();

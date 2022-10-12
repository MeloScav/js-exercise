/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const btn = document.getElementById("run");
    const dateOfBirthSelects = document.querySelectorAll(".dob select");
    
    const getDateFromSelects = (selects) => {
        let year;
        let month;
        let day;
        selects.forEach(select => {
            switch (select.id) {
                case "dob-year":
                    year = select.value;
                    break;
                case "dob-month":
                    month = select.value;
                    break;
                case "dob-day":
                    day = select.value;
                    break;
                default:
                    break;
            }
        });

        return new Date(year, month, day);
    }

    console.log(getDateFromSelects(dateOfBirthSelects));

})();

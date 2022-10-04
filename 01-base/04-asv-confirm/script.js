/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    const question = (message) => {
        let answer = "";

        do {
            answer = prompt(message);
        } while (answer == "" || answer == null || answer == undefined);

        return answer;
    }

    let confirmation = false;

    do {
        let userAge = question("Bonjour ! Quel âge avez-vous ?");
        let userSex = question("Quel est votre sexe ?");
        let userCountry = question("De quelle ville venez-vous ?");

        confirmation = confirm(`Veuillez vérifier les informations suiventes : \n ${userAge} \n ${userSex} \n ${userCountry}`);
    } while (confirmation == false);
})();

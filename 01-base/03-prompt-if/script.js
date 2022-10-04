/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const questionMessage = "Voulez-vous du gâteau ?";
    const questionPrompt = (message = questionMessage) => {
        return prompt(message).toLowerCase();
    }
    
    let question = questionPrompt();

    if(question == "oui" || question == "yes"){
        alert("Bravo ! Le gâteau, c'est la viiiee !!");
    }
    else {
        alert("Du gâteau, ça ne se refuse pas !! Bourou !");
        question = questionPrompt();
    }
})();

const langage = {
    JAVASCRIPT: 1,
    TYPESCRIPT: 2,
    CS: 3,
    JAVA: 4
}

const langageClone = Object.assign({}, langage);

const convert = (obj) => {
    const phrase = "j'aime le ";

    Object.keys(obj).forEach(key => {
        obj[key] = phrase + key.toLowerCase()
    });
}

convert(langageClone)

console.log(langageClone.JAVASCRIPT);

// const convert = (langId) => {
//     let lang = null;
//     let phrase = "J'aime le ";

//     switch (langId) {
//         case 1:
//             lang = "javascript";
//             break;
//         case 2:
//             lang = "typescript";
//             break;
//         case 3:
//             lang = "c#";
//             break;
//         case 4:
//             lang = "java";
//             break;
//         default:
//             lang = "";
//             break;
//     }

//     return console.log(phrase + lang);
// }

// convert(langage.TYPESCRIPT);
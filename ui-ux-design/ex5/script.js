let numberArray = [5, 8, 9, 85, 2, 1854894168, 618, 1, 42 , 54894645];

let pairNumber = numberArray.filter(nb => nb % 2 === 0);
console.log(`Le tableau contenant les chiffres pair est ${pairNumber}`);

const addNumberArrayInArray = (array, newArray) => {
    let newNumberArray = array.concat(newArray);
    return newNumberArray;
}


// console.log(`Le nouveau tableau constitué est ${addNumberArrayInArray(numberArray,pairNumber)}`);

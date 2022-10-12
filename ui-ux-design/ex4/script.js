const numberArray = [5, 8, 9, 85, 2, 1854894168, 618, 1, 42 , 54894645];

let nbOfPairNumber = numberArray.filter(nb => nb % 2 === 0).length;

console.log(nbOfPairNumber);
const numbersInput = document.getElementById("numbers");
const numbersArray = numbersInput.value.split(", ").map(a => Number(a));

const numbersArrayAscending = [...numbersArray].sort((a, b) => a - b);

console.log(numbersArray);
console.log(numbersArrayAscending);
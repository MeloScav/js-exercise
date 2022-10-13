const bankAccountInput = document.getElementById("bank-account");

const isValidBankAccountSyntax = (bankAccountNumber) => {
    bankAccountNumber = bankAccountNumber.value.split("-").join("");

    const first10Digits = Number(bankAccountNumber.substring(0, 10));
    const last2Digits = Number(bankAccountNumber.slice(-2));

    return first10Digits % 97 === last2Digits;
}

document.getElementById("run").addEventListener("click", () => console.log(isValidBankAccountSyntax(bankAccountInput) ? "Compte valide" : "Compte invalide"));


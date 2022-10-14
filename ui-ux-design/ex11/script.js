const nbOfDisks = 3;

const towerOfHanoi = (n, fromRod, auxRod, toRod) => {
    if (n == 0) {
        return;
    }

    towerOfHanoi(n - 1, fromRod, toRod, auxRod);
    console.log(`Bouge le disque ${n} de la barre ${fromRod} à la barre ${toRod}.`);
    towerOfHanoi(n - 1, auxRod, fromRod, toRod);
}

document.getElementById("run").addEventListener("click", () => {
    towerOfHanoi(nbOfDisks, 'A', 'B', 'C');
})
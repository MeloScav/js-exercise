const btn = document.getElementById("run");
const nbOfDisks = 4;

const towerOfHanoi = (n, fromRod, toRod, auxRod) => {
    if (n == 0) {
        return;
    }

    towerOfHanoi(n - 1, fromRod, auxRod, toRod);
    console.log(`Bouge le disque ${n} de la barre ${fromRod} à la barre ${toRod}.`);
    towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

towerOfHanoi(nbOfDisks, 'A', 'C', 'B');

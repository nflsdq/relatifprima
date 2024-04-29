function hitungPPB(a, b) {
    let temp;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function cekRelatifPrima() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const ppb = hitungPPB(num1, num2);
    const hasil = document.getElementById('hasil');

    if (Ppb === 1) {
        hasil.textContent = `Bilangan ${num1} dan ${num2} adalah relatif prima karena PPBnya adalah 1.`;
        hasil.style.borderColor = '#4CAF50'; // Hijau untuk positif
    } else {
        hasil.textContent = `Bilangan ${num1} dan ${num2} bukan relatif prima karena PPBnya adalah ${ppb}.`;
        hasil.style.borderColor = '#f44336'; // Merah untuk negatif
    }
}

document.getElementById('num1').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        cekRelatifPrima();
    }
});

document.getElementById('num2').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        cekRelatifPrima();
    }
});
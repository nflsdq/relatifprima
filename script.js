function hitungPPB(a, b) {
    let temp;
    while (b !== 0) {
        temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function faktor(n) {
    let hasil = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            hasil.push(i);
        }
    }
    return hasil;
}

function cekRelatifPrima() {
    const bil1 = document.getElementById('bil1').value;
    const bil2 = document.getElementById('bil2').value;

    if (bil1 === '' || bil2 === '') {
        document.getElementById('hasil').style.display = 'block';
        document.getElementById('hasil').innerHTML = 'Silakan masukkan kedua bilangan.';
        document.getElementById('hasil').style.borderColor = '#f44336';
        document.getElementById('faktor').style.display = 'none';
        return;
    }

    const bil1Int = parseInt(bil1);
    const bil2Int = parseInt(bil2);
    const ppb = hitungPPB(bil1Int, bil2Int);
    const faktor1 = faktor(bil1Int);
    const faktor2 = faktor(bil2Int);

    let faktor1Text = faktor1.map(f => faktor2.includes(f) ? `<strong>${f}</strong>` : f).join(', ');
    let faktor2Text = faktor2.map(f => faktor1.includes(f) ? `<strong>${f}</strong>` : f).join(', ');

    document.getElementById('faktor').style.display = 'block';
    document.getElementById('faktor').innerHTML = `Faktor ${bil1Int}: ${faktor1Text} <br> Faktor ${bil2Int}: ${faktor2Text}`;

    document.getElementById('hasil').style.display = 'block';
    if (ppb === 1) {
        document.getElementById('hasil').innerHTML = `Bilangan ${bil1Int} dan ${bil2Int} adalah relatif prima.`;
        document.getElementById('hasil').style.borderColor = '#4CAF50';
    } else {
        document.getElementById('hasil').innerHTML = `Bilangan ${bil1Int} dan ${bil2Int} bukan relatif prima karena PPBnya adalah ${ppb}.`;
        document.getElementById('hasil').style.borderColor = '#f44336';
    }
}

document.getElementById('bil1').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        cekRelatifPrima();
    }
});

document.getElementById('bil2').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        cekRelatifPrima();
    }
});
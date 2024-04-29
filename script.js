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
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    if (num1 === '' || num2 === '') {
        document.getElementById('hasil').style.display = 'block';
        document.getElementById('hasil').innerHTML = 'Silakan masukkan kedua bilangan.';
        document.getElementById('hasil').style.borderColor = '#f44336';
        document.getElementById('faktor').style.display = 'none';
        return;
    }

    const num1Int = parseInt(num1);
    const num2Int = parseInt(num2);
    const ppb = hitungPPB(num1Int, num2Int);
    const faktor1 = faktor(num1Int);
    const faktor2 = faktor(num2Int);

    let faktor1Text = faktor1.map(f => faktor2.includes(f) ? `<strong>${f}</strong>` : f).join(', ');
    let faktor2Text = faktor2.map(f => faktor1.includes(f) ? `<strong>${f}</strong>` : f).join(', ');

    document.getElementById('faktor').style.display = 'block';
    document.getElementById('faktor').innerHTML = `Faktor ${num1Int}: ${faktor1Text} <br> Faktor ${num2Int}: ${faktor2Text}`;

    document.getElementById('hasil').style.display = 'block';
    if (ppb === 1) {
        document.getElementById('hasil').innerHTML = `Bilangan ${num1Int} dan ${num2Int} adalah relatif prima.`;
        document.getElementById('hasil').style.borderColor = '#4CAF50';
    } else {
        document.getElementById('hasil').innerHTML = `Bilangan ${num1Int} dan ${num2Int} bukan relatif prima karena PPBnya adalah ${ppb}.`;
        document.getElementById('hasil').style.borderColor = '#f44336';
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
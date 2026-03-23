const circulo = document.getElementById('meuCirculo');

function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// O evento 'mouseover' detecta quando o mouse entra no elemento
circulo.addEventListener('mouseover', () => {
    const novaCor = gerarCorAleatoria();
    circulo.style.backgroundColor = novaCor;
});
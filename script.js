// Acessibilidade
const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibilidade = document.getElementById('opcoes-acessibilidade');
const aumentarFonte = document.getElementById('aumentar-fonte');
const diminuirFonte = document.getElementById('diminuir-fonte');
const alternaContraste = document.getElementById('alterna-contraste');

let tamanhoFonte = 16;

botaoAcessibilidade.addEventListener('click', () => {
    const expanded = botaoAcessibilidade.getAttribute('aria-expanded') === 'true';
    botaoAcessibilidade.setAttribute('aria-expanded', !expanded);
    opcoesAcessibilidade.classList.toggle('ativo');
});

aumentarFonte.addEventListener('click', () => {
    if (tamanhoFonte < 22) {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + 'px';
    }
});

diminuirFonte.addEventListener('click', () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + 'px';
    }
});

alternaContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// Fechar menu de acessibilidade ao clicar fora
document.addEventListener('click', (e) => {
    if (!botaoAcessibilidade.contains(e.target) && !opcoesAcessibilidade.contains(e.target)) {
        opcoesAcessibilidade.classList.remove('ativo');
        botaoAcessibilidade.setAttribute('aria-expanded', 'false');
    }
});

// Variáveis globais
let timer;
let horas = 0;
let minutos = 0;
let segundos = 0;
let cronometroRodando = false;

// Elementos do DOM
const display = document.querySelector('.display');
const iniciarBtn = document.getElementById('iniciar');
const pausarBtn = document.getElementById('pausar');
const zerarBtn = document.getElementById('zerar');

// Função para atualizar o display
function atualizarDisplay() {
    // Formata os valores com dois dígitos
    const horasFormatadas = horas.toString().padStart(2, '0');
    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');
    
    // Atualiza o texto do display
    display.textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
}

// Função que incrementa o tempo
function incrementarTempo() {
    segundos++;
    
    // Lógica para minutos e horas
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }
    
    atualizarDisplay();
}

// Evento do botão Iniciar
iniciarBtn.addEventListener('click', () => {
    if (!cronometroRodando) {
        timer = setInterval(incrementarTempo, 1000);
        cronometroRodando = true;
        
        // Atualiza o estado dos botões
        iniciarBtn.disabled = true;
        pausarBtn.disabled = false;
    }
});

// Evento do botão Pausar
pausarBtn.addEventListener('click', () => {
    if (cronometroRodando) {
        clearInterval(timer);
        cronometroRodando = false;
        
        // Atualiza o estado dos botões
        iniciarBtn.disabled = false;
        pausarBtn.disabled = true;
    }
});

// Evento do botão Zerar
zerarBtn.addEventListener('click', () => {
    clearInterval(timer);
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometroRodando = false;
    
    // Atualiza o display e o estado dos botões
    atualizarDisplay();
    iniciarBtn.disabled = false;
    pausarBtn.disabled = true;
});

// Configuração inicial
atualizarDisplay();
pausarBtn.disabled = true; // Desabilita o botão pausar inicialmente



// Função para abrir o modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Fechar o modal se clicar fora da área do conteúdo
window.onclick = function(event) {
    if (event.target === document.getElementById("myModal")) {
        closeModal();
    }
}


var palestrantes = [];
var participantes = [];
var idade = 0;
var dataAtual = new Date();
var dataEvento = new Date();

if (dataEvento >= dataAtual) {
    if (idade >= 18) {
        console.log("Cadastro permitido");
    } else {
        console.log("Cadastro não Permitido!");
    } 
} else {
    console.log("Data do Evento Iválido!");
}


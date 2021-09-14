var palestrantes = ["Maria","José"];
var participantes = [ "Luiz","Fernanda","Marta","Pedro"];
var nome;
var idade = 0;
var dataAtual = new Date();
var dataEvento;
//Entrada dos dados do participante
nome = participantes[1];
idade = 18;
//digite a data no formato: mm/dd/yyyy
dataEvento = new Date("09/11/2021");
if (participantes.length < 100) {
    if (dataEvento >= dataAtual) {
        if (idade >= 18) {
            console.log("Cadastro Permitido");
            console.log("---------------------------------");
            console.log("Palestrante.: " + palestrantes[0]);
            console.log("Nome........: " + nome);
            console.log("Idade.......:" + idade);
            console.log("Data Atual..: " + dataAtual.toDateString());
            console.log("Data Evento.: " + dataEvento.toDateString());
            console.log("---------------------------------");
        } else {
            console.log("Idade Inválida! (mínima 18 anos)");
        } 
    } else {
        console.log("Data do Evento Inválido!");
        console.log("Data Atual..: " + dataAtual.toDateString());
        console.log("Data Evento.: " + dataEvento.toDateString());
    }
}    
else {
    console.log("Cadasto não permitido! Máximo de participantes é igual a 100" );
}    



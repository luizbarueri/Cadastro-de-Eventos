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

for(let x = 0; x < participantes.length; x++) {
    console.log("---------------------------------");

    dataEvento = new Date("09/20/2021");
    idade = 18;
    if (x == 1) {
        //testa uma data de evento iválido
        dataEvento = new Date("09/10/2021");
    }
    if  (x == 2) {
        //testa uma idade menor que 18
        idade = 17;
    } 
    if (participantes.length < 100) {
        if (dataEvento >= dataAtual) {
            if (idade >= 18) {
                console.log("Cadastro Permitido");
                console.log("Palestrante.: " + palestrantes[0]);
                console.log("Nome........: " + nome);
                console.log("Idade.......:" + idade);
                console.log("Data Atual..: " + dataAtual.toDateString());
                console.log("Data Evento.: " + dataEvento.toDateString());
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
    console.log("---------------------------------");
    
    
}



const nome = "Avanade";
console.log(nome, " chamando a variável usando o var");

escreve("Galo doido")
//Funcção nominal  -  Funções sofrem hoisting
function escreve(x){
    console.log(x);
}

function mudaTitulo(novoTitulo) {
    document.querySelector("h1").innerHTML = "<i>" + novoTitulo + "</i>";
}

mudaTitulo("Aqui é Galo");

//expressão de função
//funlção anonima
const mudaTitulo2 = function(target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;
}

mudaTitulo2("h2", "Troca o subtitulo")

const relogio = () =>{
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString())
}

setInterval(relogio, 1000)

const frases = ["Um banco para 20 milhões de pessoas", "C6 Bank, o seu banco digital", "Tag de pedágio grátis", "Vem ser C6 Bank"]

const mudaFrase = function(target, frases, tempo){
    let total = 0;
    setInterval(()=>{
        document.querySelector(target).innerHTML = frases[total >= frases.length? total = 0 : total++]
    }, tempo * 1000);
}

mudaFrase("h1", frases, 4);

// const frases = ["Um banco para 20 milhões de pessoas", "C6 Bank o seu banco", "Cartão de crédito sem anuidade"]

// const mudaFrase = function(target, frases, tempo){
//     let total = 0; 
//     setInterval(() =>{
//         document.querySelector(target).innerHTML = frases[total >= frases.length ? total = 0 : total++];
//    }, tempo * 1000);
// }

// mudaFrase("h1", frases, 4)

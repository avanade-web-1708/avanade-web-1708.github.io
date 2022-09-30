const resultado = document.querySelector('#resultado')

//arrow function não acessa 'arguments'

let myFunc = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}

myFunc.showArguments(
    "BMW",
    "AUDI",
    "FIAT",
    "GM",
    "FERRARI"
);

let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}
    
// myFunc.showArguments(
//     "Opala",
//     "Vectra",
//     "Siena",
//     "Corsa",
//     "F50"
// );    

let user = {
    nome: "Alexsander",
    usandoArrow: () =>{
        console.log(`Meu nome é ${this.nome}, com Arrow Function`)
    }, 
    usandoNominal(){
        console.log(`Meu nome é ${this.nome}, com Nominal Function`);
    },
}

user.usandoArrow();
user.usandoNominal();

let soma = (a, b) =>{
    console.log(a + b );
}

let soma2 = function(a, b){
    console.log(a + b);
}

//new soma(50, 20);
new soma2(50, 20);
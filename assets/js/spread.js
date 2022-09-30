const aereasNacional = ["Latam", "Azul", "Gol", "Passaredo"]
const airCompanies = [...aereasNacional, "Delta", "United", "Emirates"]

console.log(airCompanies);
const user = {
    nome: "Alexsander",
    email: "alex@email.com",
    password: "ZAqjlkdjlkasjdlksa"
}

const{password, ...data} = user;
console.log(`O meu Deus, `, data)


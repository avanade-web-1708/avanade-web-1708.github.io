const aereas = document.querySelector('#aereas')
const aereasArray = [
    'Azul',
    'Gol',
    'Latam', 
    'Passaredo', 
    'United Airlines', 
    'American Airlines', 
    'Copa Airlines']

aereasArray.forEach((value, key) => {
    aereas.innerHTML += `<option value="${key}">${value}</option>`
})

const menu = [
    "Todos",
    "Venda na Amazon",
    "Ofertas do Dia",
    "Prime",
    "Eletrônicos",
    "Ideias para Presente",
    "Brinquedos e Jogos",
    "Computadores",
    "eBooks Kindle",
    "Games",
    "Ferramentas e Construção",
    "Livros",
  ];

  const ulMenu = document.createElement('ul')
  ulMenu.setAttribute('id', 'menu')
  ulMenu.setAttribute('class', 'menu-site')

  menu.forEach((value, key) => {
    ulMenu.innerHTML += `<li>${value}</li>`
  })

  document.querySelector('nav').appendChild(ulMenu)

  
  const newCarros = ['Corsa', 'Uno', 'Gol', 'Palio', 'Kombi', '208']
  newCarros.unshift('Brasilia')
  newCarros.push('Premio')
  const ultimo = newCarros.pop()
  //console.log(ultimo)
  //console.log(newCarros)
  const nomeCompleto = 'Alexsander da Silva'
  const nomeArray = nomeCompleto.split(' ')
  const americanName = [nomeArray.at(-1), nomeArray[0]].join(', ')
  //console.log(americanName, "Formato americano")
  const removeUm = newCarros.splice(5)
  //console.log(removeUm, "Remove um splice")
  console.log('------------------------------------')

  const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melancia']
  // const primeiras = frutas.slice(1, 3)
  // console.log(primeiras)
  const filtro = (item) => {
    return item === 'Pera' || item === 'Maçã'
   //return item.toUpperCase()
  }

  //console.log(filtro('Maça'))
  const frutasMap = frutas.map(filtro)
  const frutasFilter = frutas.filter(filtro)
  const frutasFind = frutas.find(filtro)
  //console.log(frutasFind)

  const ages = [17, 2, 65, 21, 56, 78, 80, 15, 7, 10, 19, 48, 29, 36, 41, 59, 71, 5, 0, 11, 62]

  const agesFilter = ages.filter((age) => 18 && age <= 60)
  console.log(agesFilter, 'Adulto')

  const agesMap = ages.map((age) =>{
    if(age >= 0 && age <= 2){
      return 'Bebê'
    }
    else if(age > 2 && age <= 11){
      return 'Criança'
    }
    else if(age > 11 && age <= 17){
      return 'Adolescente'
    }
    else if(age > 17 && age <= 59){
      return 'Adulto'
    }
    else{
      return 'Idoso'
    }
  })
  console.log(agesMap, 'agesMap')

  const agesFind = ages.find((age) => age > 60)


  console.log(agesFind, "idoso")
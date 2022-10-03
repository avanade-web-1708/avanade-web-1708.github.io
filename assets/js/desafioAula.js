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
  ulMenu.setAttribute('id', 'menu-site')

  menu.forEach((value, key) => {
    ulMenu.innerHTML += `<li>${value}</li>`
  })

  document.querySelector('nav').appendChild(ulMenu)
  
  const newCarros = ['Corsa', 'Uno', 'Gol', 'Palio', 'Kombi', '208']
  console.log(newCarros)
  const nomeCompleto = 'Alexsander da Silva'
  const nomeArray = nomeCompleto.split(' ')
  const americanName = [nomeArray.at(-1), nomeArray[0]].join(', ')
  console.log(americanName, "Formato americano")

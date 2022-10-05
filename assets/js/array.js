const carros = document.querySelector("#carros")
const carrosArray = [
    'Chevrolet',
    'Fiat',
    'Ford',
    'Honda',
    'Kia',
    'Mazda',
    'Mercedes',
    'Nissan',
    'Peugeot',
    'Renault',
    'Toyota',
    'Volkswagen'
]


carrosArray.forEach((value, key)=>{
    carros.innerHTML += `<option value="${key}">${value}</option>`
})

carrosArray.forEach((value) => console.log(value))

const importados = [['BMW','320i', 'M3', 'M4', 'X5', 'X6'], 
    ['Audi', 'A4', 'S4', 'S4 Avanti', 'Q7', 'RS7'], 
    ['Mercedes', 'GTR', 'E63', 'S63', 'Brabus GLE', 'AMG 63']
]


importados.forEach((marcas) => {
    const select = document.createElement('select')
    select.setAttribute('id', marcas[0])

    marcas.forEach((carros, key)=>{
        select.innerHTML += `<option value="${carros}">${carros}</option>`
 
    })

    document.querySelector('body').appendChild(select)

})
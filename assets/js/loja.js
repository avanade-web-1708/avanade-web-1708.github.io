//Conseguir acessar a API por fetch
//Tentar listar os produtos no console
//Trazer apenas 10 produtos


const produtos = async () => {
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    const busca = await fetch('https://dummyjson.com/products', options)
    const json = await busca.json()
    for(let i = 0 ; i < 10 ; i++){
        if(document.querySelector('#title' + i)){
            document.querySelector('#title' + i).innerHTML = json.products[i].title
        }
        if(document.querySelector('#description' + i)){
            document.querySelector('#description' + i).innerHTML = json.products[i].description
        }
    }

    
}


produtos()
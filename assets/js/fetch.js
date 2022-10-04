const cep = document.querySelector('#cep')

//blur = clicou na caixa de texto e saiu
cep.addEventListener('blur', (e) => {
    let search = cep.value.replace('-', '') //value fora de evento sempre vem vazio, precisa estar dentro de um EVENTO
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    //viacep.com.br/ws/01001000/json/
    const resultado = document.querySelector('#resultado')
    //fetch vai gerar uma promisse. Promisse é uma promessa de algo que vai acontecer. 
    //Se der certo vai retornar o resultado, se der errado retornará um erro.
    //Se der certo, resolvemos a promisse, se der errado rejeita a promisse
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(response => {
        response.json()
        .then(result => console.log(result))})
    .catch((e) => console.log(e.message)) 
})



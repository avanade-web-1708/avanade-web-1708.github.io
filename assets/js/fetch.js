const cep = document.querySelector('#cep')

const showData = (result) => {
    for(const campo in result){
        if(document.querySelector(`#${campo}`)){
            document.querySelector(`#${campo}`).value = result[campo]
        }
    }
   
}
//blur = clicou na caixa de texto e saiu
cep.addEventListener('blur', async (e) => {
    let search = cep.value.replace('-', '') //value fora de evento sempre vem vazio, precisa estar dentro de um EVENTO
    
    if(search < 8 || Number(search) === NaN){
        alert('CEP inválido')
        return
    }

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    

    //viacep.com.br/ws/01001000/json/
    //fetch vai gerar uma promisse. Promisse é uma promessa de algo que vai acontecer. 
    //Se der certo vai retornar o resultado, se der errado retornará um erro.
    //Se der certo, resolvemos a promisse, se der errado rejeita a promisse
    const busca = await fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    const json = await busca.json()
    showData(json)
})



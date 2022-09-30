let senha = document.querySelector(".password")
let confirmSenha = document.querySelector(".confirm-password")


function capturaSenha(){
    if(senha.value != confirmSenha.value){
        confirmSenha.setCustomValidity("Senhas Diferentes")
        confirmSenha.reportValidity()
        return false
    }else{
        confirmSenha.setCustomValidity('')
        return true
    }
}

confirmSenha.addEventListener('input', capturaSenha)
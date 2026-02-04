let res = document.getElementById("res")
let principal = document.getElementById("Principal")
let corredor
let espaço
let  lado

/*function iniciar() {
    let senha = window.prompt('Digite a senha')
    
    if (Number(senha) == 1234) {return}
    
    else {
        window.alert('Senha Errada!')
        iniciar()
    }
} */

function Verificar() {
    res.innerHTML = ''
   for(i=1; i<=12; i++)
    //res.innerHTML += `<p class="nomePallet">Nº ${i}</p>`
    res.innerHTML += "<img src='imagens/pelletico.png' alt='Pallet' class='icones'>"
}
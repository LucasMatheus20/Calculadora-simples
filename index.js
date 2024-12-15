function inserir(a){
    const tela = document.querySelector("#tela")
    tela.innerHTML += a
   

}
function apagarTudo(){
    tela.innerHTML = '' 
}
function apagar(){
    const tela = document.querySelector("#tela").innerHTML     // (inicio , final )
    document.querySelector('#tela').innerHTML = tela.substring(0   , tela.length - 1)
   
}
function calcular(){
    let tela = document.querySelector('#tela').innerHTML
    document.querySelector('#tela').innerHTML = eval(tela)
}
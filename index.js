function inserir(a) {
  const tela = document.querySelector("#tela");
  tela.innerHTML += a;
}
function apagarTudo() {
  tela.innerHTML = "";
}
function apagar() {
  const tela = document.querySelector("#tela").innerHTML; // (inicio , final )
  document.querySelector("#tela").innerHTML = tela.substring(
    0,
    tela.length - 1
  );
}
function calcular() {
  let tela = document.querySelector("#tela").innerHTML;
  document.querySelector("#tela").innerHTML = eval(tela);
}
document.addEventListener("keydown", (e) => {
  teclas = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
    ".",
  ]
  ;
  if (teclas.includes(e.key)) {
    inserir(e.key);
  }else if(e.key == 'Enter'){
        calcular()
  }else if(e.key == 'Backspace'){
        apagar()
  }else{
    return true
  }
});

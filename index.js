const imagens = document.querySelectorAll(".img1")
const setaVoltar = document.getElementById("seta-esquerda")
const setaAvancar = document.getElementById("seta-direita")

let imagemAtual = 0

setaAvancar.addEventListener("click", function () {

  if (imagemAtual === imagens.length - 1) {
    return
  }
  
  imagemAtual++

  esconderImagemAberta()
  mostrarImagem()
  mostrarOuEsconderSetas()

  })

  setaVoltar.addEventListener("click", function () {

    if (imagemAtual === 0) {
      return
    }
  
    imagemAtual--

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
  
    })
  
  function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar")
  }

  function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
  }


  function mostrarOuEsconderSetas() {
  
   const naoEhAPrimeiraImagem = imagemAtual !== 0

   if(naoEhAPrimeiraImagem) {
    setaVoltar.classList.remove("opacidade-seta")
   } else {
    setaVoltar.classList.add("opacidade-seta")
   }

   const chegouNaUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1

   if(chegouNaUltimaImagem) {
    setaAvancar.classList.add("opacidade-seta")
   } else{
    setaAvancar.classList.remove("opacidade-seta")
   }

  }


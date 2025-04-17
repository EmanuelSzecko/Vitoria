document.addEventListener("DOMContentLoaded", () => {
    const imagens = document.querySelectorAll(".carrossel-imagens img");
    const btnAnterior = document.querySelector(".anterior");
    const btnProximo = document.querySelector(".proximo");
    let indexAtual = 0;
  
    function mostrarImagem(index) {
      imagens.forEach((img, i) => {
        img.classList.toggle("ativo", i === index);
      });
    }
  
    btnProximo.addEventListener("click", () => {
      indexAtual = (indexAtual + 1) % imagens.length;
      mostrarImagem(indexAtual);
    });
  
    btnAnterior.addEventListener("click", () => {
      indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
      mostrarImagem(indexAtual);
    });
  
    mostrarImagem(indexAtual);
  });
  
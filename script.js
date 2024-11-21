// Função para alternar a visibilidade do menu lateral
function toggleMenu() {
  const menu = document.getElementById('menu');
  const moreOptions = document.querySelector('.more-options');

  // Alterna a visibilidade do menu lateral
  menu.classList.toggle('active');
  
  // Altera a animação dos três pontinhos
  moreOptions.classList.toggle('active');
}

const buttons = document.querySelectorAll('.project-button');
const closes = document.querySelectorAll('.close');

// Abre modal
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modal;
    document.getElementById(modalId).style.display = 'flex';
  });
});

// Fecha modal ao clicar no X
closes.forEach(span => {
  span.addEventListener('click', () => {
    span.parentElement.parentElement.style.display = 'none';
  });
});

// Fecha modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    e.target.style.display = 'none';
  }
});

// BOTÃO DARK MODE
const darkModeToggle = document.createElement('button');
darkModeToggle.id = 'dark-mode-toggle';
darkModeToggle.textContent = 'Modo Escuro';
document.body.appendChild(darkModeToggle);

// Alterna dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        darkModeToggle.textContent = 'Modo Escuro';
    }
});
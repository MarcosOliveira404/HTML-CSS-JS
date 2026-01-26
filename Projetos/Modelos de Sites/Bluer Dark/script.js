const btnMobile = document.getElementById('btn-mobile');

btnMobile.addEventListener('click', () => {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const expanded = nav.classList.contains('active');
  btnMobile.setAttribute('aria-expanded', expanded);
  btnMobile.setAttribute('aria-label', expanded ? 'Fechar Menu' : 'Abrir Menu');
});

document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', () => {
        const subprojectList = button.nextElementSibling;
        const isVisible = subprojectList.style.display === 'block';
        document.querySelectorAll('.subproject-list').forEach(list => list.style.display = 'none'); // Fecha todas as listas
        subprojectList.style.display = isVisible ? 'none' : 'block'; // Abre/Fecha a lista clicada
    });
});

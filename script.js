function toggleLike(el) { el.classList.toggle('liked'); el.textContent = el.classList.contains('liked') ? '💖' : '❤️'; 
} 
    const params = new URLSearchParams(window.location.search);
    const nombreAnimal = params.get('animal');
    const animalNameEl = document.getElementById('animal-name');
    if (nombreAnimal) {
      animalNameEl.textContent = `Estás adoptando a: ${nombreAnimal}`;
    }

    document.getElementById('adopcion-form').addEventListener('submit', function (e) {
      e.preventDefault();
      document.getElementById('mensaje-confirmacion').style.display = 'block';
      this.reset();
    });
// Selecciona todos los elementos con la clase "card__inner"
const cards = document.querySelectorAll(".card__inner");

// Itera sobre cada tarjeta y agrega el evento de clic
cards.forEach(function(card) {
  card.addEventListener("click", function(e) {
    // Cambia la clase de la tarjeta que se hizo clic
    card.classList.toggle('is-flipped');
  });
});

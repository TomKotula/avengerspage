{
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
  };

  document
    .getElementById("checkbox")
    .addEventListener("change", toggleDarkMode);

  function openModal() {
    var modal = document.getElementById("lightboxModal");
    modal.style.display = "block";

    modal.onclick = function (event) {
      if (event.target == modal) {
        closeModal();
      }
    };
  }

  function closeModal() {
    document.getElementById("lightboxModal").style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modal__slides");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }
}

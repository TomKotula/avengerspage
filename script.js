{
    const welcome = () => {
        console.log("Hello everyone!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const lightMode = document.querySelector(".lightMode");

        body.classList.toggle("gray");
        lightMode.innerText = body.classList.contains("gray") ? "☀️" : "🌙";
    };

    const init = () => {
        const navButton = document.querySelector(".navigation__button");
        navButton.addEventListener("click", toggleBackground);

        welcome();
    };

    function openModal() {
        var modal = document.getElementById('lightboxModal');
        modal.style.display = "block";

        modal.onclick = function (event) {
            if (event.target == modal) {
                closeModal();
            }
        }
    }

    function closeModal() {
        document.getElementById('lightboxModal').style.display = "none";
    }

    var slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("modal__slides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
    
    init();
}
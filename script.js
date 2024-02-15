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

    init();
}
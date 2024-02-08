{
    const welcome = () => {
        console.log("Witam wszystkich developerów, którzy tutaj zaglądają");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const lightMode = document.querySelector(".lightMode");
        
        body.classList.toggle("dark");
        lightMode.innerText = body.classList.contains("dark") ? "Light" : "Dark";
    };

    const init = () => {
        const navButton = document.querySelector(".navigation__button");
        navButton.addEventListener("click", toggleBackground);

        welcome();
    };

    init();
}
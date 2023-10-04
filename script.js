let navButton = document.querySelector(".navButton");
let body = document.querySelector(".body");
let lightMode = document.querySelector(".lightMode");

navButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        lightMode.innerText = "Light";
    } else {
        lightMode.innerText = "Dark";
    }
});

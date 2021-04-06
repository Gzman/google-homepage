
const stylePage = () => {
    const navbar = document.querySelector("nav");
    navbar.style["background-color"] = "#ff6600";

    const search_text = document.getElementsByClassName("search-text")[0];
    search_text.setAttribute("value", "Hier gehts lang, meine Freunde!");

    const div = document.createElement("div");
    div.style["background-color"] = "yellow";
    div.style.padding = "50px";
    document.querySelector("main").append(div);

    document.querySelector("footer .info").style["background-color"] = "#ff6600";
    document.querySelector("footer .lang").style["background-color"] = "#ff6600";
}

const signButton = document.querySelector("#sign-btn");
signButton.onclick = () => stylePage();

const doSomething = function() {
    this.classList.toggle("search-btn-onclick");
    const navLinks = document.querySelectorAll("nav a");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style["color"] = "#6633ff";
        navLinks[i].style["font-size"] = "16px";
    }
}

const heyHo = () => document.querySelector(".search-text").style["background-color"] = "#ff6600";

const googleSearchButton = document.querySelector(".search-btn");
googleSearchButton.addEventListener("click", doSomething);
googleSearchButton.addEventListener("click", heyHo);
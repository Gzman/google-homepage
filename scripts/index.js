
const signButton = document.querySelector("#sign-btn");

signButton.onclick = () => {
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
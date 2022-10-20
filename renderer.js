document.addEventListener("DOMContentLoaded",async() => {
    let names = window.api.getNames();
    let divNames = document.getElementById("names");
    let namesStr = names.join("</br>");
    divNames.innerHTML = namesStr;
})
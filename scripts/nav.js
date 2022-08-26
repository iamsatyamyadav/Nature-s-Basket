let div = document.getElementById("pop");
let btn = document.getElementById("bTog");

btn.addEventListener("click", () => {
    if (div.style.display === "none") {
        div.style.display = "block"
    } else {
        div.style.display = "none"
    }
})

function pinChange() {

    let NewPin = document.getElementById("pinVal").value;

    let pin = document.getElementById("pChange").innerText = NewPin
}




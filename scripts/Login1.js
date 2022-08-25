import Login from "../components/Login.js"

document.getElementById("Lonin_div").innerHTML= Login()




    document.getElementById("login_but").addEventListener("click", function () {
        let login_div = document.getElementById("Lonin_div")
        login_div.style.display = "block"

    })
    document.getElementById("Hide_page_but").addEventListener("click", function () {
        let login_div = document.getElementById("Lonin_div")
        login_div.style.display = "none"

    })

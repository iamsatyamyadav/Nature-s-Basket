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

    document.getElementById("Login_But_for_get_Data").addEventListener("click",function(){
let bla = false;
        let arr = JSON.parse(localStorage.getItem("User_Data"))||[]
        
        arr.forEach((el) => {
            let Email = document.getElementById("Email_log_sy").value
            let password = document.getElementById("password_log_sy").value
            if(Email == el.Email && password==el.Password){
                bla = true;
            }
           
        });

        if(bla==true){
            alert("You are login successfully.")
            window.location.reload()
        }else{
            alert("Enter the Valid email and Password.")
        }
       

    })

  



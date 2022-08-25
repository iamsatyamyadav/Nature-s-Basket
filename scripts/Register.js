import Register from "../components/Register.js"

document.getElementById("Register_div").innerHTML= Register()



document.getElementById("Register_but").addEventListener("click", function () {
    let login_div = document.getElementById("Register_div")
    login_div.style.display = "block"

})
document.getElementById("Hide_but_for_Register").addEventListener("click", function () {
    let login_div = document.getElementById("Register_div")
    login_div.style.display = "none"

})


let register = document.getElementById("Register_but_for_get_Data").addEventListener("click",function(){
function UserData(N,E,P){
this.Name = N;
this.Email = E;
this.Password = P;

}
let Name = document.getElementById("Name_sy").value;
let Email = document.getElementById("Email_sy").value;
let password = document.getElementById("password_sy").value;


let A_User_Data = new UserData(Name,Email,password)

console.log(A_User_Data)

let arr = JSON.parse(localStorage.getItem("User_Data"))||[]



arr.push(A_User_Data)

let forLoc = localStorage.setItem("User_Data",JSON.stringify(arr))

window.location.reload();
})

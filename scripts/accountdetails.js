let localuserdata={
    first_name:"Ajay",
    Last_name:"Patil",
    Email:"abcd@gmail.com",
    mobile:9099889900
}

let row=document.querySelector(".row");
// row.style.border="1px solid";
row.style.boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";

let printd=()=>{

let div1=document.createElement("div");
div1.style.display="flex";
div1.style.justifyContent="space-evenly";
div1.style.width="100%";
div1.style.height="70px";
// div1.style.border="1px solid";  

let div2=document.createElement("div");
div2.style.display="flex";
div2.style.width="100%";
div2.style.height="70px";
div2.style.marginBottom="100px";
div2.style.justifyContent="space-evenly";
// div2.style.border="1px solid";  


let p=document.createElement("h3");
p.style.color="red";
p.innerText=`First Name:- ${localuserdata.first_name}`;

let p1=document.createElement("h3");
p1.style.color="red";
p1.innerText=`Last Name:- ${localuserdata.Last_name}`;

let p2=document.createElement("h3");
p2.style.color="red";

p2.innerText=`Email:- ${localuserdata.Email}`;
let p3=document.createElement("h3");
p3.style.color="red";
p3.innerText=`Mobile:- ${localuserdata.mobile}`;

div1.append(p,p1);
div2.append(p2,p3);

row.append(div1,div2);
    
}

printd();
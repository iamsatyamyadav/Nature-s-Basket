let datafromLS=JSON.parse(localStorage.getItem("addtomyorder"))||[];
// console.log(datafromLS);

let row=document.querySelector(".row");

let printdata=()=>{
    row.innerHTML="";
    datafromLS.forEach((elem)=>{
        // console.log(elem);
        let div1=document.createElement("div");
        div1.style.display="block";
        div1.style.height="500px";
        div1.style.border="none";
        div1.style.boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";

        let img=document.createElement("img");
        img.style.width="100%";
        img.style.height="250px";
        img.style.boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px";
        img.src=elem.image;

        let p1=document.createElement("p");
        p1.innerText=elem.title;
        p1.style.textAlign="center";

        let p2=document.createElement("p");
        p2.innerText=elem.title1;
        p2.style.textAlign="center";

        let p3=document.createElement("p");
        p3.innerText=elem.pc;
        p3.style.textAlign="center";

        let p4=document.createElement("p");
        p4.innerText=elem.price;
        p4.style.textAlign="center";

        let btn=document.createElement("button");
        btn.addEventListener("click",function(){
            myfunctionRemove(elem);
            // window.location.reload();
        })
        btn.style.width="70%";
        btn.style.border="none";
        btn.style.borderRadius="20px";
        btn.style.height="40px";
        btn.style.display="block";
        btn.style.margin="auto";
        btn.style.backgroundColor="red";
        btn.innerText="Remove";
        btn.style.color="white";
        btn.style.boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
        div1.append(img,p1,p2,p3,p4,btn);
        row.append(div1);

    })

   
}
// printdata();
// let  body=document.querySelector("#bdy");
// body.addEventListener("load",function(){
//         // printdata();
//         alert("hello")
//         window.location.reload();
// })



function myfunctionRemove(elem)
{
    // event.preventDefault();
    datafromLS=datafromLS.filter(function(ele){
        return ele!=elem;
    })
    // console.log(datafromLS);

    localStorage.setItem("addtomyorder",JSON.stringify(datafromLS));
    // printdata(datafromLS);
    window.location.reload();
}
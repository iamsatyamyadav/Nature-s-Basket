// let slide=document.querySelector("#slider_box");
//  import {NavBar} from '../components/navbar1.js'
//  document.getElementById('NavBar').innerHTML = NavBar();
let slider=document.querySelector("#slider");

let img=[
    
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/b7641ce5-fd86-485f-bc27-e6c486afc951_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/d076c03c-6a84-42e3-820f-96cc67b5ab62_1320x376.jpg",
];


let counter=0;
setInterval(function(){
slider.innerHTML=null;
let image=document.createElement("img");
image.style.height="100%";
image.style.width="100%";
image.setAttribute("id","slide_images");
image.src=img[counter++];

if(counter==img.length)
{
    counter=0;
}

slider.append(image);
},1000);



let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let btn3=document.querySelector("#btn3");
let btn4=document.querySelector("#btn4");

btn1.onclick=function(){
    // slider.style.transform="translateX(0px)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
}

btn2.onclick=function(){
    // slider.style.transform="translateX(-100%)";
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
}
btn3.onclick=function(){
    // slider.style.transform="translateX(-200%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    btn4.classList.remove("active");
}

btn4.onclick=function(){
    // slider.style.transform="translateX(-300%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.add("active");}

// .......................................................................................................
// .............................................................................................
// .............................................................................................
    let shop_by_category_poster=document.querySelector("#shop_by_category_poster");
    let arraylocal=JSON.parse(localStorage.getItem('addtomyorder'))||[];

    let arraydata=[
        {
            image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1324506_1_425x425.jpg",
            title:"DELIVERY IN 90 MINUTES",
            title1:"Mamie Yova Lychee Stirred Yoghurt 90G",
            pc:"1Pc",
            price:"Buy @ Rs.32.75/-"
        },
        {
            image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/89fafabd-6784-4b32-a8e4-cc6b4d26d1b3_425x425.jpg",
            title:"DELIVERY IN 90 MINUTES",
            title1:"Mamie Yova Lychee Stirred Yoghurt 90G",
            pc:"1Pc",
            price:"Buy @ Rs.39.75/-"
        },
        {
            image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bd76ca3b-660c-4602-b7bb-ec9c8353c7cb_425x425.jpg",
            title:"DELIVERY IN 90 MINUTES",
            title1:"Mamie Yova Lychee Stirred Yoghurt 90G",
            pc:"1Pc",
            price:"Buy @ Rs.38.75/-"
        },
        {
            image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a8ecb31c-960f-4e5c-a7b1-5df2c822aeaf_425x425.jpg",
            title:"DELIVERY IN 90 MINUTES",
            title1:"Mamie Yova Lychee Stirred Yoghurt 90G",
            pc:"1Pc",
            price:"Buy @ Rs.37.75/-"
        },
        {
            image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5e50d332-c96f-4aa0-bed5-2cd48138e3fe_425x425.jpg",
            title:"DELIVERY IN 90 MINUTES",
            title1:"Mamie Yova Lychee Stirred Yoghurt 90G",
            pc:"1Pc",
            price:"Buy @ Rs.38.75/-"
        },

        {
            image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bd76ca3b-660c-4602-b7bb-ec9c8353c7cb_425x425.jpg",
            title:"DELIVERY IN 90 MINUTES",
            title1:"Mamie Yova Lychee Stirred Yoghurt 90G",
            pc:"1Pc",
            price:"Buy @ Rs.35.75/-"
        },

        {
            image:"https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bd76ca3b-660c-4602-b7bb-ec9c8353c7cb_425x425.jpg",
            title:"DELIVERY IN 90 MINUTES",
            title1:"Mamie Yova Lychee Stirred Yoghurt 90G",
            pc:"1Pc",
            price:"Buy @ Rs.34.75/-"
        },
    ];

    // console.log(arraydata.length);
    //Add to my order

    let Add_to_myorder=document.querySelector(".Add_to_myorder");
    let Add_to_myorder1=document.querySelector(".Add_to_myorder1");
    let Add_to_myorder2=document.querySelector(".Add_to_myorder2");
    let Add_to_myorder3=document.querySelector(".Add_to_myorder3");
    let Add_to_myorder4=document.querySelector(".Add_to_myorder4");
    let Add_to_myorder5=document.querySelector(".Add_to_myorder5");
    let Add_to_myorder6=document.querySelector(".Add_to_myorder6");


    Add_to_myorder.addEventListener("click",function(){

        // arraydata.forEach(function(){
            arraylocal.push(arraydata[0]);
            localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));
            // console.log(arraylocal);
        // })
        
    })

    Add_to_myorder1.addEventListener("click",function(){

        // arraydata.forEach(function(){
            arraylocal.push(arraydata[1]);
            localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));
            // console.log(arraylocal);
        // })
        
    })
    Add_to_myorder2.addEventListener("click",function(){

        // arraydata.forEach(function(){
            arraylocal.push(arraydata[2]);
            localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));
            // console.log(arraylocal);
        // })
        
    })
    Add_to_myorder3.addEventListener("click",function(){

        // arraydata.forEach(function(){
            arraylocal.push(arraydata[3]);
            localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));
            // console.log(arraylocal);
        // })
        
    })
    Add_to_myorder4.addEventListener("click",function(){

        // arraydata.forEach(function(){
            arraylocal.push(arraydata[4]);
            localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));
            // console.log(arraylocal);
        // })
        
    })
    Add_to_myorder5.addEventListener("click",function(){

        // arraydata.forEach(function(){
            arraylocal.push(arraydata[5]);
            localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));
            // console.log(arraylocal);
        // })
        
    })

    Add_to_myorder6.addEventListener("click",function(){

        // arraydata.forEach(function(){
            arraylocal.push(arraydata[6]);
            // console.log(arraylocal);
            localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));
        // })
        

    })
    console.log(arraylocal);

    // localStorage.setItem("addtomyorder",JSON.stringify(arraylocal));

    // ---------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
    //category data...................................................................
    
    let div1=document.querySelectorAll(".categorydata");

    let leftarr=document.querySelectorAll("#leftarrow");
    let rightarr=document.querySelector("#rightarrow");
    let left=1;
    let right=4;
    
  function boxes(){
    for(let i=left;i<=right;i++){
        div1[i].style.display="inline-block";
        // appenddata(arraydata[i]);
    }
    }

    function lefta(){
        if(left<=3 && right<=7)
        {
       
        div1[left].style.display="none";
        
       
        left++;
        right++;

        for(let i=left;i<=right;i++)
        {
            div1[i].style.display="inline-block";
        }
    }
    else{
        return;
    }
    }

    function righta(){
        if(left>=2 && right>=5)
        {
       
        div1[right].style.display="none";
        
       
        left--;
        right--;

        for(let i=left;i<=right;i++)
        {
            div1[i].style.display="inline-block";
        }
    }
    else{
        return;
    }
    }

//trending data.........................................................................
let trendingdata=document.querySelectorAll(".trendingdata");
let leftarr1=document.querySelectorAll("#leftarrow1");
let rightarr1=document.querySelector("#rightarrow1");
 let left1=1;
 let right1=4;
function trending_boxes(){
    for(let i=left1;i<=right1;i++)
    {
        trendingdata[i].style.display="inline-block";
    }
}

function lefta1(){
    if(left1<=3&&right1<=8)
    {
        trendingdata[left1].style.display="none";
    

    left1++;
    right1++;

    for(let i=left1;i<=right1;i++)
    {
        trendingdata[i].style.display="inline-block";
    }
}

}

function righta1(){
    if(left1>=2&&right1>=5){
    trendingdata[right1].style.display="none";

    left1--;
    right1--;
    for(let i=left1;i<=right1;i++)
    {
        trendingdata[i].style.display="inline-block";
    }
    }
    
}

//Curated for you box..................................

let curated=document.querySelectorAll(".curatingdata");
let left2=1;
 let right2=4;
function curated_box(){
for(let i=left2;i<=right2;i++){
curated[i].style.display="inline-block";
}
}
function lefta2(){

    if(left2<=3 && right2<=8)
    {
    curated[left2].style.display="none";

    left2++;
    right2++;

    for(let i=left2;i<=right2;i++)
        {
            curated[i].style.display="inline-block";
        }
    }

}

function righta2(){

    if(left2>=2 && right2>=5)
    {
    curated[right2].style.display="none";

    left2--;
    right2--;

    for(let i=left2;i<=right2;i++)
        {
            curated[i].style.display="inline-block";
        }
    }

}

//sliding coding.................................................................
let objslidedara=["https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg","https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg","https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"];

let btnarrowleft=document.querySelector("#btnarrowleft");
let btnarrowright=document.querySelector("#buttonarrowright");
let img1=document.querySelector("#img1");
let slidearray=0;
btnarrowleft.addEventListener("click",function(){
   

    if(slidearray==0)
    {
        slidearray=objslidedara.length-1;
        
    }
    else{
        slidearray--;
    }

    img1.src=objslidedara[slidearray];
})

btnarrowright.addEventListener("click",function(){
   

    if(slidearray==objslidedara.length-1)
    {
        slidearray=0;
        
    }
    else{
        slidearray++;
    }

    img1.src=objslidedara[slidearray];
})



//.............................Brands..................................
let brand_shop=document.querySelectorAll(".brand_shop");
let l=1;
let r=5;
function brandscall(){
for(let i=l;i<=r;i++)
{
    brand_shop[i].style.display="inline-block";
}
}

function btnleftarr(){
  
for(let i=0;i<=3;i++)
{
    brand_shop[i].style.display="none";
} 


 l++;
 r++;

 for(let i=l;i<=r;i++)
 { 
    brand_shop[i].style.display="inline-block";
    // if(i==r){
    //     i==l;
    // }
    if(l==4){ 

        l=1;
        // r=5;
    }

 }


}
// ------------------------------------------------------------


// Discover Data
let discover=document.querySelectorAll(".discoverdata");

let healthy=document.querySelectorAll(".healthydata");
// console.log(healthy);
let healthy_offer=document.querySelector("#healthy_offer");

let organic_offer=document.querySelector("#organic_offer");

// let category_offer=document.querySelector("#category_offer");
// category_offer.addEventListener("click",function(){

// })

let left4=1;
let right4=4;

let leftarrow3=document.querySelector("#leftarrow3");//discoverdata
let rightarrow3=document.querySelector("#rightarrow3");//discoverdata
let leftarrow4=document.querySelector("#leftarrow4");//healthy
let rightarrow4=document.querySelector("#rightarrow4");//healthy
healthy_offer.addEventListener("click",function(){
    rightarrow4.style.display="inline-block";
    leftarrow4.style.display="inline-block";
    rightarrow3.style.display="none";
    leftarrow3.style.display="none";
    for(let i=left3;i<=right3;i++){
        discover[i].style.display="none";
        }

        for(let i=left4;i<=right4;i++)
        {
            healthy[i].style.display="inline-block";
        }
})

let left3=1;
let right3=4;






organic_offer.addEventListener("click",function(){

    rightarrow4.style.display="none";
    leftarrow4.style.display="none";

    rightarrow3.style.display="inline-block";
    leftarrow3.style.display="inline-block";

    for(let i=left4;i<=right4;i++){
        healthy[i].style.display="none";
        }

for(let i=left3;i<=right3;i++){
discover[i].style.display="inline-block";
}


})



function discover_box(){
for(let i=left3;i<=right3;i++){
discover[i].style.display="inline-block";
}
}

function lefta3(){

    if(left3<=3 && right3<=8)
    {
   discover[left3].style.display="none";

    left3++;
    right3++;

    for(let i=left3;i<=right3;i++)
        {
            discover[i].style.display="inline-block";
        }
    }

}

function righta3(){

    if(left3>=2 && right3>=5)
    {
    discover[right3].style.display="none";

    left3--;
    right3--;

    for(let i=left3;i<=right3;i++)
        {
            discover[i].style.display="inline-block";
        }
    }

}




function lefta4(){

    if(left4<=3 && right4<=8)
    {
   healthy[left4].style.display="none";

    left4++;
    right4++;

    for(let i=left4;i<=right4;i++)
        {
            healthy[i].style.display="inline-block";
        }
    }

}

function righta4(){

    if(left4>=2 && right4>=5)
    {
    healthy[right4].style.display="none";

    left4--;
    right4--;

    for(let i=left4;i<=right4;i++)
        {
            healthy[i].style.display="inline-block";
        }
    }

}












//     let appenddata=(arrayd)=>{
//         // arraydata.length=4;
//     // arraydata.forEach((elem)=>{
//         // console.log(arrayd);
//         // while(arraydata.length<=3){
//     // let div1=document.querySelector(".categorydata");
//     // div1.setAttribute("id","categorydata");
    

//     let img=document.querySelector(".pos1");
//     img.src=arrayd.image;

//     let title=document.querySelector(".para");
//     title.innerText=arrayd.title;

//     let p1=document.querySelector(".para1");
//     p1.innerText=arrayd.category1;

    
//     let p2=document.querySelector(".para2");
//     p2.innerText=arrayd.category2;

    
//     let p3=document.querySelector(".para3");
//     p3.innerText=arrayd.category3;

    
//     let p4=document.querySelector(".para4");
//     p4.innerText=arrayd.view;


// div1.append(img,title,p1,p2,p3,p4);

// // shop_by_category_poster.append(div1);
//         // }        
    
//     }


    

    // div1.style.backgroundColor="red";
    // let arraynum=0;
    // butn[0].addEventListener("click",function(){
      
    //     if(arraynum==0){
    //         arraynum=arraydata.length-1;
    //     }
    //     else{
    //         arraynum--;
    //     }
    //     // console.log(arraydata[arraynum]);

    //     // div1.innerHTML=arraydata[arraynum];
    //     appenddata(arraydata[arraynum]);
    // });

// ................................................................................
    
    // butn[1].addEventListener("click",function(){
      
    //     if(arraynum==arraydata.length-1){
    //         arraynum=0;
    //     }
    //     else{
    //         arraynum++;
    //     }
    //     // console.log(arraydata[arraynum]);

    //     // div1.innerHTML=arraydata[arraynum];
    //     appenddata(arraydata[arraynum]);
    // })

    // ----------------------------------------------------------------------------

    

 


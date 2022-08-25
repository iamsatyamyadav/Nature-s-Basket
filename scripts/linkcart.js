let arrdata = JSON.parse(localStorage.getItem("cartmei")) || [];
// let quant=localStorage.getItem('quantity') || 1;
// quant=quant.toString()
// console.log(typeof(quant));
// console.log(quant)
display(arrdata);

function display(arrdata) {
  let total = 0;
  document.querySelector(".cart-items").innerHTML = "";
  // document.querySelector(".cart-items").innerHTML=""

  let res = arrdata.forEach(function (el, index) {
    let maindiv = document.createElement("div");
    maindiv.setAttribute("class", "cart-row");
    let divs = document.createElement("div");
    divs.setAttribute("class", "cart-item cart-column");
    let img = document.createElement("img");
    img.src=el.img
    img.setAttribute("class", "cart-item-image");
    let span1 = document.createElement("span");
    span1.innerText = el.name;
    span1.setAttribute("class", "cart-item-title");
    divs.append(img, span1);

    let span2 = document.createElement("span");
    span2.innerText = el.price;
    span2.setAttribute("class", "cart-price cart-column");

    let divs2 = document.createElement("div");
    divs2.setAttribute("class", "cart-quantity cart-column");
    let input = document.createElement("input");
    input.setAttribute("type", "number");
     input.setAttribute("value", el.quantity);
    
    input.setAttribute("class", "cart-quantity-input");
    input.addEventListener("change",function(){
        // localStorage.setItem("cartmei")
        if(input.value>=0){
        el.quantity=input.value;
        console.log(el.quantity);
        display(arrdata)
        }
        else{
          el.quantity=1;
          display(arrdata)
        }
    })

     
    //  let checktype=+input.value
    //      console.log(typeof(checktype))

    //       if(checktype<=0 ){
    //     console.log(2)
    //     input.value=1;
    //      }
    //     if(checktype>0){
    //         total()
            // console.log(6)
            //  console.log(typeof(checktype),checktype)
            // // // localStorage.setItem("quantity",input.value);
            //   input.setAttribute("value","checktype")
            //  console.log(input.value)
            // // // let ok=true
            // // // console.log(ok)
            //   display(arrdata)
        // 
            
        //      let y=event.target.parentElement.parentElement
        //      let x=y.getElementsByClassName("cart-price")[0];
        //     let z=parseFloat( x.innerText.replace("Rs",""));
        //     console.log(z)
        //     //   total +=  z * input.value;
        //       display(arrdata)
        //       console.log(total)
        //     //   document.getElementsByClassName("cart-total-price")[0].innerText =
        //     //   "Rs" + total;
        //  }
        
    // })
    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("class", "btn btn-danger cart-quantity-button");
    button.innerText = "Remove";
    button.addEventListener("click", function () {
      arrdata.splice(el, 1);
      localStorage.setItem("cartmei", JSON.stringify(arrdata));
      display(arrdata);
    });
    divs2.append(input, button);

    maindiv.append(divs, span2, divs2);
    document.querySelector(".cart-items").append(maindiv);

    let price = parseFloat(span2.innerText.replace("Rs", ""));
    let quantity = input.value;
    // console.log(price,quantity)
    total += price * quantity;
  });
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "Rs" + total;
    let form=document.querySelector("#form1").addEventListener("submit",function(event){
      event.preventDefault()
      // console.log(form1.name.value)
      if(form1.name.value=="Discount20"){
  console.log(3)
          let remove=total*20/100;
          total=total-remove
          console.log(total)
          document.getElementsByClassName("cart-total-price")[0].innerText =
          "Rs" + total ;
          total=total+remove
      }
     else{
        console.log(2)
        // total
        document.getElementsByClassName("cart-total-price")[0].innerText =
          "Rs" + total ;
      }
    })
    let formm=document.querySelector("#form1").addEventListener("mouseout",function(event){
      event.preventDefault()
      // console.log(form1.name.value)
      if(form1.name.value!="Discount20"){
        console.log(6)
        // total
        document.getElementsByClassName("cart-total-price")[0].innerText =
          "Rs" + total ;
      }
    })
    // var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    // function total(){
    //     let price = parseFloat(span2.innerText.replace("Rs", ""));
    //     let quantity = input.value;
    //     // console.log(price,quantity)
    //     total += price * quantity;
    // }

  //   updateCartTotal();

  //   function updateCartTotal(){
  //       // console.log(3)
  //       let total=0;
  //       let cartItemContainer=document.getElementsByClassName("cart-item")[0]
  //       let cartRows = cartItemContainer.getElementsByClassName('cart-row')
  //       for(let i=0;i<cartRows.length;i++){
  //           console.log(total)
  //           let cartrow=cartRows[i];
  //           let priceElement=cartrow.getElementsByClassName("cart-price")[0];
  //           let quantityElement=cartrow.getElementsByClassName("cart-price")[0];
  //           let price=parseFloat(priceElement.innerText.replace("Rs",""));
  //           let quantity=quantityElement.value;
  //           total+=(price*quantity)
  //       }
  //       total=Math.round(total*100)/100
  //       document.getElementsByClassName("cart-total-price")[0].innerText="Rs" + total
  //   }
}
// function removeCartItem(el) {
//     arrdata.el.remove()
//     // var buttonClicked = event.target
//     // buttonClicked.parentElement.parentElement.remove()
//     // display(arrdata);
//     localStorage.setItem("cartmei",)

// }
//updateCartTotal();

document
  .getElementsByClassName("btn-purchase")[0]
  .addEventListener("click", function () {
    alert("Thank you for your purchase");
    arrdata=[];
    localStorage.removeItem("cartmei");
    display(arrdata)
    // location.href = "index4.html";
    location.href="index.html"
  });
  

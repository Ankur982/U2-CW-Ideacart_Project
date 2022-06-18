
let uploadedArr=JSON.parse(localStorage.getItem("New-Product")) || [];
let review=JSON.parse(localStorage.getItem("review"));

function displayProducts(uploadedArr){
    document.querySelector("#tbody").innerHTML="";
  
  
  uploadedArr.map(function(el){
    let tr=document.createElement("tr");
  let td1=document.createElement("td")
  let image=document.createElement("img");
  image.src=el.image;
  td1.append(image);

  let name=document.createElement("td")
  name.innerText=el.description;

  let price=document.createElement("td")
  price.innerText=el.price;

  let accept=document.createElement("td");
  accept.innerText="Accept"
  accept.style.color="green";
  accept.addEventListener("click",function(){
    acceptFun(el)
  });


  let reject=document.createElement("td");
  reject.innerText=" Reject"
  reject.style.color="red";
  reject.addEventListener("click",function(){
    rejectFun(el);
  })

 tr.append(td1,name,price,accept,reject)

document.querySelector("#tbody").append(tr)

  });  
}

displayProducts(uploadedArr)




let productLS=[];
let acceptedItems=0;
function acceptFun(el){
    let obj={  
        description:el.description,
        image:el.image,
        price:el.price,
        type:el.type,
        id:el.id,
       }

       acceptedItems++;
       review--;     
       productLS.push(obj);
       localStorage.setItem("accepted-Product",JSON.stringify(productLS));
       localStorage.setItem("review",JSON.stringify(review));
       localStorage.setItem("aproved",JSON.stringify(acceptedItems));
 
       //deleting item from LS

       let deleted=uploadedArr.filter(function(element){
        return element.id!=el.id;
       });
       uploadedArr=deleted ;
       localStorage.setItem("New-Product",JSON.stringify(uploadedArr));
       displayProducts(uploadedArr)
       
}


productLS=[];
let rejectedItems=0;
function rejectFun(el){
    let obj={  
        description:el.description,
        image:el.image,
        price:el.price,
        type:el.type,
        id:el.id,
       }

       rejectedItems++;
       review--;    
       productLS.push(obj);
       localStorage.setItem("rejected-Product",JSON.stringify(productLS));
       localStorage.setItem("review",JSON.stringify(review));
       localStorage.setItem("reject",JSON.stringify(rejectedItems));

        //deleting item from LS

        let deleted=uploadedArr.filter(function(element){
            return element.id!=el.id;
           });
           uploadedArr=deleted ;
           localStorage.setItem("New-Product",JSON.stringify(uploadedArr));
           displayProducts(uploadedArr)

}

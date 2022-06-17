let addedProductArr=JSON.parse(localStorage.getItem("New-Product"));
let acceptedArr=JSON.parse(localStorage.getItem("accepted-Product"));
let rejectedArr=JSON.parse(localStorage.getItem("rejected-Product"));

function displayUploaded(addedProductArr){
     
  addedProductArr.map(function(el){
    let tr=document.createElement("tr");
  let td1=document.createElement("td")
  let image=document.createElement("img");
  image.src=el.image;
  td1.append(image);

  let name=document.createElement("td")
  name.innerText=el.description;

  let price=document.createElement("td")
  price.innerText=el.price;

 tr.append(td1,name,price)

document.querySelector("#tbody").append(tr)

  });  
}

let pendingArr=addedProductArr.filter(function(el){
for(let i=0;i<acceptedArr.length;i++){
   return acceptedArr[i].id!=el.id; 
}

});
addedProductArr=pendingArr;

 pendingArr=addedProductArr.filter(function(el){
  for(let i=0;i<rejectedArr.length;i++){
     return rejectedArr[i].id!=el.id; 
  }
  addedProductArr=pendingArr;
  });

displayUploaded(addedProductArr)


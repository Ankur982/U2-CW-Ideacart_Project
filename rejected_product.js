let addedProductArr=JSON.parse(localStorage.getItem("New-Product"));

function displayUploaded(addedProductArr){
    
  let div=document.createElement("div");
  
  addedProductArr.map(function(el){
  let image=document.createElement("img")
  image.src=el.image;

  let name=document.createElement("h2")
  name.innerText=el.description;

  let price=document.createElement("h2")
  price.innerText=el.price;

 div.append(image,name,price)

document.querySelector("#uploded").append(div)

  });  
}
displayUploaded(addedProductArr);
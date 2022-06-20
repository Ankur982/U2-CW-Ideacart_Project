let reviewItems = JSON.parse(localStorage.getItem("review")) || 0;
let productLS = JSON.parse(localStorage.getItem("New-Product")) || [];
JSON.parse(localStorage.getItem("added-Product")) || [];
document.querySelector("#form").addEventListener("submit", addPoductFun);
let formData = document.querySelector("#form");

function addPoductFun(event) {
  event.preventDefault();

  //unique Id check function

  // pushing data to localStorage

  let obj = {
    description: formData.name.value,
    image: formData.image.value,
    price: formData.price.value,
    type: formData.type.vakue,
    id: formData.productid.value,
  };
  if (checkID(obj.id) === true) {
    reviewItems++;

    productLS.push(obj);
    localStorage.setItem("New-Product", JSON.stringify(productLS));
    localStorage.setItem("added-Product", JSON.stringify(productLS));
    localStorage.setItem("review", JSON.stringify(reviewItems));
    alert("Product added sucessfully");
  } else {
    alert("Product ID already exists ! use differnt Product ID");
  }
}

// unique Id check function

function checkID(el) {
  let flag = true;
  for (let i = 0; i < productLS.length; i++) {
    if (el == productLS[i].id) {
      flag = false;
      break;
    }
  }

  if (flag == true) {
    return true;
  } else {
    return false;
  }
}
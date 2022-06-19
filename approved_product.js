let addedProductArr = JSON.parse(localStorage.getItem("accepted-Product"));

function displayUploaded(addedProductArr) {
  addedProductArr.map(function (el) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let image = document.createElement("img");
    image.src = el.image;
    td1.append(image);

    let name = document.createElement("td");
    name.innerText = el.description;

    let price = document.createElement("td");
    price.innerText = el.price;

    tr.append(td1, name, price);

    document.querySelector("#tbody").append(tr);
  });
}
displayUploaded(addedProductArr);



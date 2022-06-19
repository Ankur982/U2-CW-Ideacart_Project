document.querySelector("#signup").addEventListener("click", mySignup);
let dataArr = JSON.parse(localStorage.getItem("userData")) || [];

function mySignup(event) {
  event.preventDefault();
  let dataObj = {
    name: document.querySelector("#name").value,
    mobile: document.querySelector("#mobile").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value
  };

  if (checkEmail(dataObj.email) == true) {
    dataArr.push(dataObj);
    localStorage.setItem("userData", JSON.stringify(dataArr));
    if (dataObj.email == "" || dataObj.password == "" || dataObj.name == "") {
      alert("please fill all details")
    } else {
      alert("Sign up completed....please signin");
        document.querySelector('.cont').classList.toggle('s--signup');
        // window.location.reload();
    }
  } else {
    alert("Account already exist")
  }

  function checkEmail(email) {
    let filtered = dataArr.filter(function(ele) {
      return email === ele.email;
    })
    if (filtered.length > 0) {
      return false;
    } else {
      return true;
    }

  }
}

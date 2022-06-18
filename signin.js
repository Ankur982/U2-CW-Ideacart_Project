let users = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector("#signin").addEventListener("click", mySignIn);

function mySignIn(event) {
  event.preventDefault();
  let data = {
    userEmail: document.querySelector("#entered_email").value,
    userPassword: document.querySelector("#entered_password").value,
  }

  // if (data.userEmail == "admin@gmail.com" && data.userPassword == "admin") {
  //   window.location.href = "https://www.google.com";
  // } else
   if (checkSignin(data.userEmail, data.userPassword) == true) {
    alert("sign in successful")
    window.location.href = "home_page.html";
    localStorage.setItem("signinData", JSON.stringify(data));
  } else {
    alert("Invalid email or password")
  }

  function checkSignin(email, password) {
    let filter = users.filter(function(ele) {
      return ele.email == email && ele.password == password
    })
    if (filter.length > 0) {
      return true;
    } else {
      return false
    }
  }
}
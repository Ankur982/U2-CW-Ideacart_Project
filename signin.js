let users = JSON.parse(localStorage.getItem("userData")) || [];
document.querySelector("#signin").addEventListener("click", mySignIn);

function mySignIn(event) {
  event.preventDefault();
  let data = {
    userEmail: document.querySelector("#entered_email").value,
    userPassword: document.querySelector("#entered_password").value,
  }

  if (data.userEmail == "admin@gmail.com" && data.userPassword == "admin") {
    alert("Welcome Admin !")
    window.location.href = "admin.html";
    return;
  } else {
    function checkSignin(email, password) {
      let filter = users.filter(function (ele) {
        return ele.email == email && ele.password == password;
      })
      if (filter.length > 0) {
        return filter;
      } else {
        return false;
      }
    }
    let currentUser = checkSignin(data.userEmail, data.userPassword);
    if (currentUser == false) {
      alert("User Not Found");
    } else {
      localStorage.setItem("signinData", JSON.stringify(currentUser));
      alert("SignIn Success!!");
      window.location.href = "index.html";
    }
  }


}
<script>
    let users=JSON.parse(localStorage.getItem("userData"))||[];
    document.querySelector("button").addEventListener("click",mySignIn);
    function mySignIn(event){
        event.preventDefault();
        let data={
           userEmail:document.querySelector("#entered_email").value,
           userPassword:document.querySelector("#entered_password").value
        }
           
        if(checkSignin(data.userEmail,data.userPassword)==true){
            localStorage.setItem("signinData",JSON.stringify(data));
            alert("sign in successful")
            window.location.href="#";
        }else{
            alert("worng email or password")
        }

       function checkSignin(email,password){
        let filter=users.filter(function(ele){
            return ele.email==email && ele.password==password
        })
        if(filter.length>0){
            return true;
        }else{
            return false
        }
       }
    }
</script>
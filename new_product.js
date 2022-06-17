document.querySelector("#form").addEventListener("submit",addPoductFun);
let formData=document.querySelector("#form");


let productLS=JSON.parse(localStorage.getItem("New-Product")) || [];

function addPoductFun(){
    event.preventDefault();
    //unique Id check function
    if(checkID(formData.productid.value)===false){

        // pushing data to localStorage

        let obj={  
            description:formData.name.value,
            image:formData.image.value,
            price:formData.price.value,
            type:formData.type.vakue,
            id:formData.productid.value,
           }
      
          new_productLS.push(obj);
          localStorage.setItem("New-Produt",JSON.stringify(new_productLS))
    }
    
   else{
    alert("Product ID already exists ! use differnt Product ID");
    
   }

}

// unique Id check function 

function checkID(el){
    for(let i=0;i<productLS.length;i++){
       
      if(el==productLS[i].id){
        
        return true;

     }
     else{
        return false;
     }

    }
}
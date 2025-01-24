

let userID2 = "abc";
let password2 = "abc";

// let us =document.getElementById('user1').value;
// let pass =document.getElementById('password1').value; 

function data(){
    let us =document.getElementById('user1').value;
    let pass =document.getElementById('password1').value; 

    if(us=== userID2 && pass===password2){
        alert("Logine successfully");
        return true;
       
    }else if(us!= userID2 && pass===password2){
        alert("Please Enter Currect Your User Id ?")
        return false;
    }else if(us=== "" || pass===""){
     alert("Please Enter Your User Id And Password?");
    return false;
    }else if (us!= userID2 && pass!=password2){
        alert("Please Enter Currect Your Password ?")
        return false;   
    }else {false;
        
    }
}


    
        

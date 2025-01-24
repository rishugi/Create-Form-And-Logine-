

function data(){
    yName=document.getElementById("naMe").value;
    mob=document.getElementById("mob").value;
    emaiL=document.getElementById("Email").value;
    userID=document.getElementById("Userid").value;
    doB=document.getElementById("dob").value;
    pass=document.getElementById("password").value;
    repass=document.getElementById("rePassword").value;

 if (yName===""||mob===""||doB===""||emaiL===""||userID===""||pass===""||repass===""){
    alert("All fields are mandatory");
    return false;
   }else if(yName=NaN){
        alert("only object inter hear");
        return false;
    }else if(mob.length >10||mob.length<10){
        alert("number should be 10 digite only");
        return false;
    }else if(pass.length <8){
        alert("Pssword should be 8 digite only");
        return false;
    }else if(repass!=pass){
        alert("Please inter same password");
        return false;
    }else { 
        true;
        alert("submit successfully")
    }
}
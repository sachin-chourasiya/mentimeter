var loginId = document.getElementById('loginId').value
// loginId.style.color ="blue";

var loginPass = document.getElementById('loginpass').value
console.log(loginPass.length)
var loginSub = document.getElementById('loginSubmit')

loginSub.addEventListener('click', check)

function check(){
    
    if(Number(loginId.length) == 0 && Number(loginPass.length)==0){
   
        document.getElementById("msg1").innerHTML= "Please fill in this field!";
        document.getElementById("msg2").innerHTML= "Please fill in this field!";
    }else  if(Number(loginId.length) == 0 ){
        // document.getElementById("msg1").innerHTML= "Please fill in this field!";
       document.getElementById("msg2").innerHTML= "Please fill in this field!";
    }  else if(Number(loginPass.length)==0){

        document.getElementById("msg1").innerHTML= "Please fill in this field!";
    }
}
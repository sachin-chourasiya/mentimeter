var signId = document.getElementById('signId').value
// signId.style.color ="blue";

var signpass = document.getElementById('signpass').value

var signname = document.getElementById('signname').value


var signSub = document.getElementById('signSubmit')

signSub.addEventListener('click', check1)

function check1(){
    
    if(Number(signId.length) == 0 && Number(signpass.length)==0 && Number(signname.length)==0){
   
        document.getElementById("msg11").innerHTML= "Please fill in this field!";
        document.getElementById("msg12").innerHTML= "Please fill in this field!";
        document.getElementById("msg13").innerHTML= "Please fill in this field!";
    }
    // }else  if(Number (signId.length) == 0 ){
    //     // document.getElementById("msg1").innerHTML= "Please fill in this field!";
    //    document.getElementById("msg12").innerHTML= "Please fill in this field!";
    // }  else if(Number (signpass.length)==0){

    //     document.getElementById("msg11").innerHTML= "Please fill in this field!";
    // }
}
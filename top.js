var input = document.getElementById('navInput')
var vote = document.getElementById('voteButton');
var count =0;
var cross = document.getElementById('cross')
cross.addEventListener('click',pinkremove)

input.addEventListener('click', borderBlue)

function borderBlue(event){
    var item = event.target;
    item.style.border = "3px solid blue"
    input.removeEventListener('click')
    // vote.disabled = true;
    // vote.addEventListener('submit', activate)
}


function pinkremove(){
    
    count = count+1;
    if(count==1){
        var pinkP = document.getElementById('buttonPink')
        var learn = document.getElementById('learnMoreBox')
        var c = document.getElementById('cross')
        pinkP.style.backgroundColor="white";
        pinkP.style.color= "white"
        pinkP.style.borderStyle ="none"
        pinkP.style.margin = "0";
        pinkP.style.padding="0";
        pinkP.style.fontSize ='0';
        learn.style.backgroundColor="white";
        learn.style.color= "white"
        learn.style.borderStyle ="none"
        learn.style.margin = "0";
        learn.style.padding="0";
        learn.style.fontSize ='0';
        cross.style.fontSize ='0';
        cross.style.backgroundColor="white";
        cross.style.color= "white"
        cross.style.margin = "0";
        cross.style.padding="0";


        cross.removeEventListener('click',pinkremove)
    }


}
// function activate(event){

   
//    if(event.target){
//         var inData = document.getElementById('navInput').value;
//         var inValidation = validation(inData)
//         if(inValidation){ 
//              input.disabled = false;
//         //    vote.addEventListener('submit')
    
//         }else{
//            input.disabled = true;
    
//         //    vote.setAttribute('disabled')
//         }
//    }
   
// }

// function inValidation(inData){
//     return inData.trim().length>4;
// }

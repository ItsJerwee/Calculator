var result=document.getElementById("outputtext");

/* display item on output */
var display=(number)=>{
  result.value=result.value+=number;
}

/* clears output */
function Clear() {
  result.value = " ";
}

/* deletes last item in output */
function Delete(){
  result.value=result.value.slice(0,-1);
}

/* invald message is sent if invalid equation occurs */
let Result=()=>{
   try{
    result.value=eval(result.value)
   }
   catch(err){
     alert("Invalid Input!");
   }
}

/* hover function on text*/
function changeText(obj, text){
  obj.innerText = text;
}
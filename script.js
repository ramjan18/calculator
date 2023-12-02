

function solve(val){
    var v= document.querySelector(".display");
    v.value += val;
}

function result(){
    var num= document.querySelector(".display").value;
    var num1=eval(num);
    document.querySelector(".display").value=num1;
}

// function clear(){
  
//    clr.value= " ";
// }

function del(){
    var del=document.querySelector(".display");
    del.value=del.value.slice(0,-1);
}

var clr= document.getElementById("ac");
clr.addEventListener("click",() =>{
  var clear=document.querySelector(".display");
  clear.value=" ";
})
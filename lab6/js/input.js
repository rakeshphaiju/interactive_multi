var input=[""];

function myFunction()
{
var x=document.getElementById("box");
input.push(document.getElementById("input").value);
x.innerHTML=input.join('<br/>'); 

}
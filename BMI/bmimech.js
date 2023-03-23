 let height=document.getElementById("height");
 let weight=document.getElementById("weight");
 let result;
 function calculate(){
 result=((weight.value)*(weight.value))/(height.value);
 }
 let solution=document.getElementById("forms2");
 solution.querySelector('h2').value="Result";
 solution.querySelector('p').value= result;
 solution.style(border)='1px solid rgb(45, 45, 131);'


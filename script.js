function display(value){
   document.getElementById("display").value +=value;
 }
 function Allclear(){
   document.getElementById("display").value="";
   
   
 }
function result(){
  
    document.getElementById("display").value=eval(document.getElementById("display").value);
  
  
  
}
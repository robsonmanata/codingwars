
function shownum() {
 let x = document.getElementsByTagName("input").value 
 let z =[document.getElementsByTagName("input")[0].value,document.getElementsByTagName("input")[1].value,document.getElementsByTagName("input")[2].value]  

 let i;
 for (i = 0; i < z.length; i++){
    alert(z[i])
 }
}
function formdetail(){
    var formitems = document.getElementById("myform");
    var i;
    var item =""
    for(i = 0; i < formitems.length; i++){
        item += formitems.elements[i].value + "<br>";
    }
   
    document.getElementById("mzform").innerHTML=item

}
function removedetail(){
   document.getElementById("mzform").innerHTML = ""
   
}

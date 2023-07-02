
function shownum() {
 let x = document.getElementsByTagName("input").value 
 let z =[document.getElementsByTagName("input")[0].value,document.getElementsByTagName("input")[1].value,document.getElementsByTagName("input")[2].value]  

 let i;
 for (i = 0; i < z.length; i++){
    alert(z[i])
 }
}

function formdetail(){
    event.preventDefault();
    var formitems = document.getElementById("myform");
    var i;
    var item =""
    for(i = 0; i < formitems.length; i++){
        item += formitems.elements[i].value + "<br>";
    }
   
    document.getElementById("mzform").innerHTML=item; 
}

//Asychronus javascript
function displaydata(item){
    document.getElementById("mzform").innerHTML=item;
}

const url = 'https://timetable-lookup.p.rapidapi.com/TimeTable/BOS/LAX/20191217/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fafd32854dmshe40ade0a301bae0p1703adjsndc5798bc1531',
		'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
	}
};
async function start(){
    const response = await fetch(url, options);
	const result = await response.text();
	displaydata(result);

}
start();
	

var theId = localStorage.getItem('education');

console.log(theId);


var data;
// var imgURL = "../img/companies/";


	$.getJSON("textInfo/textInfoEducation.json", function(json) {
	    data = json; 

	    console.log(data.all[theId])
	    changeContent(theId);
	    	    
	});

	console.log("hej")


function prevCompany(){
	theId = theId-1;
	
	if(theId < 0) theId = data.all.length -1;	
	
	changeContent(theId);

}

function nextCompany(){

	theId = parseInt(theId) + 1;

	if(theId == data.all.length) theId = 0;

	changeContent(theId);
}


function changeContent(id){
	
	document.getElementById("edu-img").src= data.all[id].img;
	document.getElementById("company").innerHTML = data.all[id].education;
	document.getElementById("infoTxt").innerHTML = data.all[id].info;
	document.getElementById("link").innerHTML = data.all[id].website;
}
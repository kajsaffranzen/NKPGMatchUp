
var theId = localStorage.getItem('company');

console.log(theId);


var data;
var imgURL = "../img/companies/";


	$.getJSON("textInfo/textInfo.json", function(json) {
	    data = json; 

	    changeContent(theId);
	    	    
	});


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
	console.log("i changeContent: " + id);
	document.getElementById("company").innerHTML = data.all[id].company;
	document.getElementById('website').innerHTML = data.all[id].website;
}
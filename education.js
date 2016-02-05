
var theId = localStorage.getItem('education');

console.log(theId);


var data;
// var imgURL = "../img/companies/";


	$.getJSON("textInfo/textInfoEducation.json", function(json) {
	    data = json; 

	    console.log(data.all[theId])


	    
		

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

//converts the \n in json to <br> in html
function convertToHTMLVisibleNewline(value) {
    if (value != null && value != "") {
        return value.replace(/\n/g, "<br/>");
    } else {
        return value;
    }
}


function changeContent(id){
	
	document.getElementById("edu-img").src= data.all[id].img;
	document.getElementById("company").innerHTML = data.all[id].education;
	document.getElementById("infoTxt").innerHTML = convertToHTMLVisibleNewline(data.all[id].info);
	document.getElementById("link").innerHTML = data.all[id].website;
}


var theId = localStorage.getItem('company');
var data;

console.log(theId);


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

//converts the \n in json to <br> in html
function convertToHTMLVisibleNewline(value) {
    if (value != null && value != "") {
        return value.replace(/\n/g, "<br/>");
    } else {
        return value;
    }
}


function changeContent(id){

	var videoDiv = 0;
	var innerWidth = window.innerWidth;

	document.getElementById("company-img").src= data.all[id].img;
	if(data.all[id].info == "empty"){

		// document.getElementById('link').setAttribute("style","height:2200px");	
		document.getElementById("company").innerHTML = " Gå in på hemsidan för mer information. ";
		document.getElementById("infoTxt").innerHTML = "";

	}
	else{
		document.getElementById("company").innerHTML = data.all[id].company;
		document.getElementById("infoTxt").innerHTML = convertToHTMLVisibleNewline(data.all[id].info);
	}

	if(data.all[id].video == "empty"){
		document.getElementById("video").src = " ";
		if(innerWidth < 992){
			document.getElementById('video').setAttribute("style","height:0px");
		}
		
		// document.getElementById('video').setAttribute("style","height:0px");	
		videoDiv = 0;
	}
	else{
		var source = data.all[id].video + "&output=embed";
		console.log(source)
		document.getElementById("video").src = data.all[id].video;
		document.getElementById('video').setAttribute("style","height:345px");
		videoDiv = 400;
	}

	
	var link = document.getElementById("link");
	var url = "http://" + data.all[id].website;

	link.innerHTML = data.all[id].website;
	link.setAttribute('href', url);

	var height = window.innerHeight;
	var divH = document.getElementById('infoTxt').offsetHeight;
	
	changeHeight(height, divH, videoDiv);
	
}


function changeHeight(innerHeight, divHeight, videoDiv){
		
	var innerWidth = window.innerWidth;

	if(innerWidth > 1000){

		if(divHeight > 1800){

			document.getElementById('fill').setAttribute("style","height:2400px");	
		}
		else if( 1250 < divHeight && divHeight < 1800){
			document.getElementById('fill').setAttribute("style","height:1900px");	
		}
		else if( 1000 < divHeight && divHeight < 1250){
			document.getElementById('fill').setAttribute("style","height:1550px");	
		}
		else if(800 < divHeight && divHeight < 1000){
			document.getElementById('fill').setAttribute("style","height:1300px");	
		}
		else if(divHeight < 800 && divHeight > 600){
			document.getElementById('fill').setAttribute("style","height:1100px");	
		}
		else if(divHeight < 600 && videoDiv != 0){
			console.log("very special");
			document.getElementById('fill').setAttribute("style","height:1100px");
		}
		else{
			console.log("i else")
			document.getElementById('fill').setAttribute("style","height:100%");
		}
			
	}
	else if( 800 < innerWidth && innerWidth < 1000){
		if(divHeight > 1800){
			document.getElementById('fill').setAttribute("style","height:2900px");	
		}
		else if((1200 < divHeight && divHeight < 1800) && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:2900px");	
		}
		else if(1200 < divHeight && divHeight < 1800){
			document.getElementById('fill').setAttribute("style","height:2000px");	
		}
		else if( 800 < divHeight && divHeight < 1300){
			document.getElementById('fill').setAttribute("style","height:2050px");	
		}
		else if((600 < divHeight && divHeight < 900) && videoDiv != 0) {
			document.getElementById('fill').setAttribute("style","height:2000px");	
		}
		else if(600 < divHeight && divHeight < 900){
			document.getElementById('fill').setAttribute("style","height:1400px");	
		}
		else if(220 < divHeight && divHeight < 600){
			document.getElementById('fill').setAttribute("style","height:1400px");	
		}
		else if(divHeight < 220 && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:1400px");	
		}
		else
			document.getElementById('fill').setAttribute("style","height:100%");
	}
	else if( 400 < innerWidth && innerWidth < 800){
		if(divHeight > 1800){
			document.getElementById('fill').setAttribute("style","height:2200px");	
		}
		else if((1200 < divHeight && divHeight < 1800) && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:2500px");	
		}
		else if(1200 < divHeight && divHeight < 1800){
			document.getElementById('fill').setAttribute("style","height:2000px");	
		}
		else if( 800 < divHeight && divHeight < 1300){
			document.getElementById('fill').setAttribute("style","height:1770px");	
		}
		else if((600 < divHeight && divHeight < 900) && videoDiv != 0) {
			document.getElementById('fill').setAttribute("style","height:2000px");	
		}
		else if(600 < divHeight && divHeight < 900){
			document.getElementById('fill').setAttribute("style","height:1400px");	
		}
		else if(300 < divHeight && divHeight < 600){
			document.getElementById('fill').setAttribute("style","height:1200px");	
		}
		else if(divHeight < 220 && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:1400px");	
		}
		else
			document.getElementById('fill').setAttribute("style","height:100%");
	}
	else if(350 < innerWidth && innerWidth < 400){
		if(divHeight > 1600){
			document.getElementById('fill').setAttribute("style","height:2100px");
		}
		else if( (1200 < divHeight && divHeight < 1600) && divHeight != 0){
			document.getElementById('fill').setAttribute("style","height:2350px");	
		}
		else if( 1200 < divHeight && divHeight < 1600){
			document.getElementById('fill').setAttribute("style","height:1950px");	
		}
		else if( 800 < divHeight && divHeight < 1200){
			document.getElementById('fill').setAttribute("style","height:1550px");	
		}
		else if((500 < divHeight && divHeight < 800) && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:1600px");	
		}
		else if((500 < divHeight && divHeight < 800) ) {

			document.getElementById('fill').setAttribute("style","height:1310px");	
		}
		else if(220 < divHeight && divHeight < 500){
			document.getElementById('fill').setAttribute("style","height:1000px");	
		}
		else if(divHeight < 220 && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:1000px");
		}
		else
			document.getElementById('fill').setAttribute("style","height:105%");			

	}
	else{	
		if((divHeight > 1600) && videoDiv != 0) {
			document.getElementById('fill').setAttribute("style","height:2420px");
		}
		else if(divHeight > 1600){
			document.getElementById('fill').setAttribute("style","height:2100px");
		}
		else if( 1200 < divHeight && divHeight < 1600){
			document.getElementById('fill').setAttribute("style","height:1750px");	
		}
		else if( (800 < divHeight && divHeight < 1200) && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:1750px");	
		}
		else if( 800 < divHeight && divHeight < 1200){
			document.getElementById('fill').setAttribute("style","height:1550px");	
		}
		else if(500 < divHeight && divHeight < 800){
			document.getElementById('fill').setAttribute("style","height:1200px");	
		}
		else if(220 < divHeight && divHeight < 500){
			document.getElementById('fill').setAttribute("style","height:800px");	
		}
		else if(220 > divHeight && videoDiv != 0){
			document.getElementById('fill').setAttribute("style","height:980px");	
		}
		else
			document.getElementById('fill').setAttribute("style","height:600px");			

	}

}


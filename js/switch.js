// console.log("yhp")


function getCompanyId(id){

	localStorage.setItem('company', id);

	var theId = localStorage.getItem('company');

	console.log("i switch: " + theId);

	window.location.href = window.location.href+"companies.html";


}

function getEducationId(id){
	localStorage.setItem('education', id);

	window.location.href = window.location.href+"education.html";

}
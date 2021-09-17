function inputHandler(evt){
	showData(evt.data)
}
function showData(text)  {
	var showData = document.getElementById("showData");
	if (text == null) {
		showData.innerHTML = showData.innerHTML.slice(0, -1) ;
	} else{
		showData.innerHTML = showData.innerHTML + text;
	}
}
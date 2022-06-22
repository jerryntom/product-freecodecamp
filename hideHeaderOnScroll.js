var prevScrollpos = window.pageYOffset;
var headerHeight = "-120px";

if (screen.width <= "600") {
	headerHeight = "-210px";
}

window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header-div").style.top = "0";
	} 
	else {
		document.getElementById("header-div").style.top = headerHeight;
	}

	prevScrollpos = currentScrollPos;
}

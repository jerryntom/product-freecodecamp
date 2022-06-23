var prevScrollpos = window.pageYOffset;
var headerTop = "-120px";

if (screen.width <= "600") {
	headerTop = "-210px";
}

window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("header-div").style.top = "0";
	} 
	else {
		document.getElementById("header-div").style.top = headerTop;
	}

	prevScrollpos = currentScrollPos;
}

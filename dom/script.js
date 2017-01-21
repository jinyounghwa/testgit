var div1 = getSelector(".div1");
var div2 = getSelector(".div2");
var div3 = getSelector(".div3");



function getSelector(target) {
	return document.querySelector(target);
}

div3.addEventListener("click", function(evt) {
	console.log("click!");
})

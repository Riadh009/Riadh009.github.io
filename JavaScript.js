// popup

var clickme = document.getElementById('clickme');
var cancel = document.getElementById('cancel');
var overlay = document.getElementById('overlay');


clickme.addEventListener('click', openModal);
cancel.addEventListener('click', closePopup);

function closePopup() {

	overlay.style.display = 'none';

}

function openModal() {

	overlay.style.display = 'none';
	window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

}

function hidediv()
{
	document.getElementById("popup").style.visibility="hidden";
}
setTimeout("hidediv()", 10000);

function hidediv()
{
	overlay.style.visibility="hidden";
}
setTimeout("hidediv()", 10000);

// change color and font-family

document.getElementById('change').onclick = changeColor;   

function changeColor() {



	const hed1 = document.querySelectorAll("h1,h2,h3,span,body")
	hed1.forEach(function(h){
	var classes = h.classList;
	var result = classes.contains("changing1");
	if (result){
		h.classList.remove("changing1")
		}else{
		h.classList.add("changing1")
		}
	});

	const parag = document.querySelectorAll("p,ul,li,em,strong,code,blockquote,a")
	parag.forEach(function(p){
	var classes = p.classList;
	var result = classes.contains("changing2");
	if (result){
		p.classList.remove("changing2")
		}else{
		p.classList.add("changing2")
		}
	})
}

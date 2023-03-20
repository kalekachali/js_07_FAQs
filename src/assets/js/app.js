// variables:
const btns = document.querySelectorAll('.btn');

// run:
btns.forEach(function(btn) {

	btn.addEventListener('click', function(e) {

		let card = e.currentTarget.parentElement.parentElement.parentElement;

		card.classList.toggle('unfold');

		checkIcons(btn);

	});

	checkIcons(btn);
});

// FUNCTIONS:

// 1. check icons and swap them appropriately
function checkIcons(btn) {

	// change the icon
	if(btn.parentElement.parentElement.parentElement.classList.contains('unfold')) {

		btn.firstChild.nextSibling.classList.replace('fa-plus', 'fa-minus');
	
	} else {

		btn.firstChild.nextSibling.classList.replace('fa-minus', 'fa-plus');
	}
}
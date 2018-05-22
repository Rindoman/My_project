let off = document.querySelectorAll('on');
let on = document.querySelectorAll('off');

document.querySelector('#eng').addEventListener('click', () => {
	on.forEach(function(element) {
		element.style.display = 'block';
	});

	off.forEach(function(element) {
		element.style.display = 'none';
	});
});

document.querySelector('#ru').addEventListener('click', () => {
	off.forEach(function(element) {
		element.style.display = 'block';
	});

	on.forEach(function(element) {
		element.style.display = 'none';
	});
});
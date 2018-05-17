let off = document.querySelectorAll('on');
let on = document.querySelectorAll('off');

document.querySelector('#eng').addEventListener('click', () => {
	let on = document.querySelectorAll('.on');
	on.forEach(function(element) {
		element.style.display = 'block';
	});

	let off = document.querySelectorAll('.off');
	off.forEach(function(element) {
		element.style.display = 'none';
	});
});

document.querySelector('#ru').addEventListener('click', () => {
	let off = document.querySelectorAll('.off');
	off.forEach(function(element) {
		element.style.display = 'block';
	});

	let on = document.querySelectorAll('.on');
	on.forEach(function(element) {
		element.style.display = 'none';
	});
});
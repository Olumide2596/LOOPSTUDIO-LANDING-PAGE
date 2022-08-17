'use strict';

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navigation = document.querySelector('.navigation');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', function () {
	navigation.classList.remove('hidden');
	navigation.insertAdjacentHTML(
		'beforeend',
		`<nav>
		<ul>
			<li><a href="#">About</a></li>
			<li><a href="#">Careers</a></li>
			<li><a href="#">Events</a></li>
			<li><a href="#">Products</a></li>
			<li><a href="#">Support</a></li>
		</ul>
	</nav>`
	);
});

close.addEventListener('click', function () {
	navigation.classList.add('hidden');
});

'use strict';

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navigation = document.querySelector('.navigation');
const nav = document.getElementsByName('nav');

hamburger.addEventListener('click', function () {
	navigation.classList.remove('hidden');
});

close.addEventListener('click', function () {
	navigation.classList.add('hidden');
});

const logo = document.querySelector('.logo');
const creations = document.querySelector('.creations');

logo.addEventListener('click', function (e) {
	creations.scrollIntoView({ behavior: 'smooth' }); // new method

	// const position = creations.getBoundingClientRect();
	// window.scrollTo({
	// 	left: position.left + window.pageXOffset,
	// 	top: position.top + window.pageYOffset,
	// 	behavior: 'smooth',
	// });
});

// Math.floor(Math.random() * (max - min + 1) + min)

// const header = document.querySelector('header');
// const message = document.createElement('div');
// message.innerHTML = `We use cookies to improve functionality and analytics <button class="btn btn--close--cookie" style= 'background-color:pink;margin-left: 20px; border-radius: 20px'>Got it</button>`;
// header.insertAdjacentHTML(
// 	'beforebegin',
// 	`<div style='text-align:center; padding:10px; background-color:gray'>We use cookies to improve functionality and analytics <button class="btn btn--close--cookie" style= 'background-color:pink;margin-left: 20px; border-radius: 20px'>Got it</button></div>`

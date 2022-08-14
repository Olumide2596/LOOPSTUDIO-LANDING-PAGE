'use strict';

const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', function () {
	navigation.classList.remove('hidden');
});

close.addEventListener('click', function () {
	navigation.classList.add('hidden');
});

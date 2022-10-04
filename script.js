'use strict';

const mes = document.querySelector('.container__message');
const but = document.querySelector('.container');

but.addEventListener('click', function(){
      mes.classList.toggle('changed-message');
})
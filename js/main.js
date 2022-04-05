'use strict';

let btn = document.querySelector('.btn');
let img = document.querySelector('.img');

btn.addEventListener('click', function() {

    if (img.classList.contains('show')) {
        img.classList.remove('show');
    } else {
        img.classList.add('show');
    }
    
})
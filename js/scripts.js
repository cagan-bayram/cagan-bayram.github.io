/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.card');

    projectCards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.classList.add('card-hover-effect');
        });

        card.addEventListener('mouseout', function() {
            card.classList.remove('card-hover-effect');
        });
    });
});
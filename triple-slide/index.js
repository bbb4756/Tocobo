window.addEventListener('DOMContentLoaded', init);

function init() {

    let wrap =document.querySelector('#wrap');
    let left = document.querySelector('.left');
    let right = document.querySelector('.right');
    let i = 0;

    left.addEventListener('click', goLeft);
    right.addEventListener('click', goRight);

    function goLeft() {
        if (i == 0) i = 8;
        wrap.setAttribute('class', 'on'+i);
        i--;
    }

    function goRight() {
        if (i == 8) i = 0;
        wrap.setAttribute('class', 'on'+(i+1));
        i++;
    }
}
window.addEventListener("DOMContentLoaded", async () => {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');
    let button4 = document.getElementById('button4');

    button1.addEventListener('mouseleave', optionMouseLeft(button1));
    button2.addEventListener('mouseleave', optionMouseLeft(button2));
    button3.addEventListener('mouseleave', optionMouseLeft(button3));
    button4.addEventListener('mouseleave', optionMouseLeft(button4));
    button1.addEventListener('click', buttonClick(1));
    button2.addEventListener('click', buttonClick(2));
    button3.addEventListener('click', buttonClick(3));
    button4.addEventListener('click', buttonClick(4));
});


async function optionMouseLeft(button) {
    return function () {
        button.style.animation = 'UnHoverOption 300ms ease-in-out';
    }
}


function buttonClick(num){
    return function() {
        window.location.href = 'BrainPage' + num + '.html';
    }

}
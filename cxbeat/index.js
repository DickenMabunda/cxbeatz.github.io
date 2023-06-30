const btn = document.querySelector('.show');

const hide = document.querySelector('.hide');

function content() {

    if (hide.classList.contains('show')) {

        hide.classList.remove('show');

    } else {
        hide.classList.add('show');
    }
};

btn.addEventListener('click', content);


const bars = document.querySelector('#bars');
const menu = document.querySelector('#menu');

bars.addEventListener('click', () => {
    bars.style.display = 'none'
    menu.style.display = 'block'
})

menu.addEventListener('click', () => {
    bars.style.display = 'block'
    menu.style.display = 'none'
})

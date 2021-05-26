const numbers = document.querySelectorAll('.numbers span');
const launch = document.querySelector('.launch');
const counter = document.querySelector('.counter');
const settings = document.querySelector('.settings');

const resetDOM = () => {
    counter.classList.remove('hide');
    settings.classList.remove('show');

    numbers.forEach((number) => {
        number.classList.value = '';
    })

    numbers[0].classList.add('pop-in');
}

const runAnimation = () => {

    numbers.forEach((number, index) => {
        const nextToLast = numbers.length - 1;
        number.addEventListener('animationend', (e) => {
            if (e.animationName === 'pop-in' && index !== nextToLast) {
                number.classList.remove('pop-in');
                number.classList.add('pop-out');
            } else if(e.animationName === 'pop-out' && number.nextElementSibling) {
                number.nextElementSibling.classList.add('pop-in');
            } else {
                settings.classList.add('show');
                counter.classList.add('hide');
            }
        })
       
    })
};

runAnimation();
launch.addEventListener('click', () => resetDOM());


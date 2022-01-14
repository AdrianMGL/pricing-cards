// standard
const standard = document.querySelector('.standard');
document.documentElement.style.setProperty('--animate-duration', '2s');
standard.classList.add('animate__animated', 'animate__slideInDown');


//premium
const premium = document.querySelector('.premium');
document.documentElement.style.setProperty('--animate-duration', '2s');
premium.classList.add('animate__animated', 'animate__rubberBand', 'animate__repeat-3');
// animate__repeat-2
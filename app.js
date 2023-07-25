console.log("teste");

const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

const days = document.querySelector('#days');
const months = document.querySelector('#months');
const years = document.querySelector('#years');

const now = new Date;


day.addEventListener('keyup', () => {
    let value = day.value;
    if (value < 1 || value > 31){
        console.log("Insira um dia válido");
    }
});

month.addEventListener('keyup', () => {
    let value = month.value;
    if (value < 1 || value > 12) {
        console.log("insira um mês válido");
    }
});

year.addEventListener('keyup', () => {
    let value = year.value;
    if (value < now.getFullYear() - 120 || value > now.getFullYear()){
        console.log("Insira um ano válido");
    }
});

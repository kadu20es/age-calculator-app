console.log("teste");

const DAY = document.querySelector('#day');
const MONTH = document.querySelector('#month');
const YEAR = document.querySelector('#year');

const DAYS = document.querySelector('#days');
const MONTHS = document.querySelector('#months');
const YEARS = document.querySelector('#years');

let validDay, validMonth, validYear;

// dd/MM/yyyy
//const now = new Date().toLocaleString().substring(0, 10);
const now = new Date();

let birthDate = new Date();

DAY.addEventListener('keyup', () => {
    validDay = DAY.value;
    if (validDay < 1 || validDay > 31){
        console.log("Insira um dia válido");
    }
    birthDate.setDate(validDay);
});

MONTH.addEventListener('keyup', () => {
    validMonth = MONTH.value;
    if (validMonth < 1 || validMonth > 12) {
        console.log("insira um mês válido");
    }
    if (validDay > 28 && validMonth == 2){
        console.log("fevereiro só tem 28 dias");
    }
    birthDate.setMonth(validMonth-1);
});

YEAR.addEventListener('keyup', () => {
    validYear = YEAR.value;
    if (validYear < now.getFullYear() - 120 || validYear > now.getFullYear()){
        console.log("Insira um ano válido");
    }

    if (validYear % 4 == 0){
        console.log("ano bissexto");
    }
    birthDate.setFullYear(validYear);
    calculate(birthDate);
});

function calculate(birthDate){
    console.log(birthDate);


    let novaData = new Date(now - birthDate);
    console.log(novaData)
    let novaData2 = (novaData.toISOString().slice(0, 4) - 1970) + "Y " + novaData.getMonth() + "M " + (novaData.getDate()-1 + "D ");
    console.log(novaData2);

    let message = `Você nasceu a ${years} anos, ${months} meses e ${days} dias!`;
    console.log(message);
}

calculate();

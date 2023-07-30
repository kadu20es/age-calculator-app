const DAY = document.querySelector('#day');
const MONTH = document.querySelector('#month');
const YEAR = document.querySelector('#year');

const DAYS = document.querySelector('#days');
const MONTHS = document.querySelector('#months');
const YEARS = document.querySelector('#years');

const DIV = document.createElement('div');
DIV.setAttribute('class', 'error');

const now = new Date();

let birthDate = new Date();
console.log(MONTH.value);


DAY.addEventListener('blur', () => {
    const dia = document.getElementById('dia');

    if (DAY.value == '') {
        DIV.innerHTML = "This field is required";
        dia.append(DIV);

    } else if (DAY.value < 1 || DAY.value > 31){
        DIV.innerHTML = "Must be a valid day";
        dia.append(DIV);

    } else if (DAY.value === null || DAY.value > 0 && DAY.value < 32){
        DIV.innerHTML = '';

    }

    birthDate.setDate(DAY.value);
});

MONTH.addEventListener('blur', () => {
    const mes = document.getElementById('mes');

    if (MONTH.value == '') {
        DIV.innerHTML = "This field is required";
        mes.append(DIV);

    } else if (MONTH.value < 1 || MONTH.value > 12) {
        DIV.innerHTML = "Must be a valid month";
        mes.append(DIV);

    } else if (MONTH.value > 0 && MONTH.value < 13) {
        MONTH.value == '';
    }

    if (DAY.value > 28 && MONTH.value == 2){
        DIV.innerHTML = "February has 28/29 days";
        mes.append(DIV);

    } else if (MONTH.value === null){
        DIV.innerHTML = '';
    }

    birthDate.setMonth(MONTH.value-1);
});

YEAR.addEventListener('blur', () => {
    const ano  = document.getElementById('ano');

    if (YEAR.value == '') {
        DIV.innerHTML = "This field is required";
        ano.append(DIV);

    } else if (YEAR.value < now.getFullYear() - 120 || YEAR.value > now.getFullYear()){
        DIV.innerHTML = "Must be in the past";
        ano.append(DIV);
    }

    if (YEAR.value % 4 == 0){
        console.log("ano bissexto");
    }
    birthDate.setFullYear(YEAR.value);

    if (YEAR.value != ''){
        calculate(birthDate);
    }
});

function calculate(birthDate){
    let novaData = new Date(now - birthDate);

    if (((novaData.getFullYear()).toString() - 1970) < 100){
        (YEARS.innerHTML = (novaData.getFullYear()).toString() - 1970);
    }

    MONTHS.innerHTML = novaData.getMonth();
    DAYS.innerHTML = (novaData.getDate());
}



const DAY = document.querySelector('#day');
const MONTH = document.querySelector('#month');
const YEAR = document.querySelector('#year');

const daysResult = document.querySelector('#daysResult');
const monthResult = document.querySelector('#monthsResult');
const yearsResult = document.querySelector('#yearsResult');

const errorMsgDay = document.querySelector(".error-msg-day");
const errorMsgMonth = document.querySelector(".error-msg-month");
const errorMsgYear = document.querySelector(".error-msg-year");

const labelDay = document.querySelector('.day-label');
const labelMonth = document.querySelector('.month-label');
const labelYear = document.querySelector('.year-label');

const button = document.querySelector("button");

let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

                    //   Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
const normalYearMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                  // Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
const leapYearMonths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const bYear = currentYear % 4 === 0;

// ----------------------------------------------------------------------

function printResults(totalYears, totalMonths, totalDays){
    yearsResult.innerHTML = totalYears;
    monthResult.innerHTML = totalMonths;
    daysResult.innerHTML = totalDays;
}

function applyErrorStyle(data, errorMsg, label){
    data.classList.add("input-error");
    errorMsg.style.display = "flex";
    label.style.color = "#FF5555";
    return;
}

function removeErrorStyle(){
    DAY.classList.remove("input-error");
    MONTH.classList.remove("input-error");
    YEAR.classList.remove("input-error");
    errorMsgDay.style.display = "none";
    errorMsgMonth.style.display = "none";
    errorMsgYear.style.display = "none";
    labelDay.style.color = "#707070";
    labelMonth.style.color = "#707070";
    labelYear.style.color = "#707070";
    return;
}

function validateDay(inputDay) {
    if (inputDay < 1 || inputDay > 31) {
        applyErrorStyle(DAY, errorMsgDay, labelDay);
        return false;
    }
    return true;
}

function validateMonth(inputMonth, inputDay){
    if (inputMonth < 1 || inputMonth > 12) {
        applyErrorStyle(MONTH, errorMsgMonth, labelMonth);
        return false;
    }

    // valida fevereiro
    if (inputMonth === normalYearMonths[1] && inputDay > 28){
        // valida ano bissexto
        if (!bYear) {
            alert("Not leap year")
            return false;
        }
        return false;
    }
    return true;
}

function validateYear(inputYear){
    if (inputYear < 1100 || inputYear > currentYear) {
        applyErrorStyle(YEAR, errorMsgYear, labelYear);
        return false;
    }
    return true;
}

function calculate(inputDay, inputMonth, inputYear){
    if (!bYear){
        if(inputDay > currentDay){
            currentDay += normalYearMonths[currentMonth - 1];
            currentMonth = currentMonth - 1;
        }
    } else { // avaliar esse código
        currentDay += leapYearMonths[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }

    if (inputMonth > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    const totalYears = currentYear - inputYear;
    const totalMonths = currentMonth - inputMonth;
    const totalDays = currentDay - inputDay;

    printResults(totalYears, totalMonths, totalDays);
}


button.addEventListener('click', () => {

   let inputDay = DAY.value.trim();
   let inputMonth = MONTH.value.trim();
   let inputYear = YEAR.value.trim();

   if (inputDay === "" || inputMonth === "" || inputYear === ""){
    alert("Please, enter valid date");
    return;
   }

   if (validateDay(inputDay) && validateMonth(inputMonth, inputDay) && validateYear(inputYear)) {
        removeErrorStyle();
        calculate(inputDay, inputMonth, inputYear);
   }


});

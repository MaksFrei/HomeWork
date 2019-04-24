"use strict";
let money, time;

function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {

        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько это обойдется?");

        if (typeof (a) === 'string' && typeof (a) != 'null' && typeof (b) === 'string' && typeof (b) != 'null' &&
            a != '' && b != '' && a.length < 50 && b.length < 50) {
            console.log('Done!');
            appData.expenses[a] = b;
        }
    }
}

chooseExpenses();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет:' + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Какова сумма накоплений?');
        let percent = +prompt('Под какой процент?');

        appData.monthIcome = save / 100 / 12 * percent;
        alert('Доход с депозита в месяц ' + appData.monthIcome);
    }
}
checkSavings();

function chooseOptExpenses(){
    for(let i = 1; i <= 3; i++){
        let a = prompt('Укажите необязательные доходы');
        appData.optionalExpenses[i] = a;
    }
}
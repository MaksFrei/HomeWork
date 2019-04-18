"use strict";

let expNames = [];
let expCosts = [];
let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

expNames[0] = prompt("Введите обязательную статью расходов в этом месяце");
expCosts[0] = prompt("Во сколько это обойдется?");
expNames[1] = prompt("Введите обязательную статью расходов в этом месяце");
expCosts[1] = prompt("Во сколько это обойдется?");

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        [expNames[0]]: expCosts[0],
        [expNames[1]]: expCosts[1]
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert(+money/30);
console.log(appData);

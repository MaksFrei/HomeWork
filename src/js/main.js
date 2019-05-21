"use strict";
let startBtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];
let inputs = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('.checksavings .savings');
let sum = document.querySelector('.choose-sum');
let percent = document.querySelector('.choose-percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');
let money, time;
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = prompt("Во сколько это обойдется?");
    
            if (typeof (a) === 'string' && typeof (a) != 'null' && typeof (b) === 'string' && typeof (b) != 'null' &&
                a != '' && b != '' && a.length < 50 && b.length < 50) {
                console.log('Done!');
                appData.expenses[a] = b;
            }else{
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет:' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка');
        }
    },
    checkSavings: function(){
        if (appData.savings) {
            let save = +prompt('Какова сумма накоплений?');
            let percent = +prompt('Под какой процент?');
    
            appData.monthIcome = save / 100 / 12 * percent;
            alert('Доход с депозита в месяц ' + appData.monthIcome);
        }
    },
    chooseOptExpenses: function(){
        for(let i = 1; i <= 3; i++){
            let a = prompt('Укажите необязательные доходы');
            appData.optionalExpenses[i] = a;
        }
    },
    chooseIncome: function(){
        while(appData.income.length == 0){
            let items = prompt('Что принесет дополнительный доход?(Перечислите через запятую)');
            if (typeof(items) === 'string' && typeof(items) != 'null' && items != '')
            {
                appData.income = items.split(',');
            }
        }
        items = (prompt('Может что-то еще?'));
        if (typeof(items) === 'string' && typeof(items) != 'null' && items != '')
        {
            appData.income = items.split(',');
        }
        appData.income.sort();
        appData.income.forEach(function(item, i, arr){
            alert(i+1 + ': ' + item);
        });

    
    }
}
function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {

        money = +prompt("Ваш бюджет на месяц?", "");
    }
    console.log('Наша программа включает в себя данные: ');
    for (var p in appData){
        console.log(p);
    }
}

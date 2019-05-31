let startBtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];
let expenses = document.getElementsByClassName('expenses-item');
let expensesBtn = document.getElementsByTagName('button')[0];
let optExpensesBtn = document.getElementsByTagName('button')[1];
let countBtn = document.getElementsByTagName('button')[2];
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.getElementById('savings');
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
    savings: false
    
};

onLoad(true);

function onLoad(arg){
    expensesBtn.disabled = arg;
    optExpensesBtn.disabled = arg;
    countBtn.disabled = arg;
}

startBtn.addEventListener('click', function start() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    onLoad(false);
    while (isNaN(money) || money == "" || money == null) {

        money = +prompt("Ваш бюджет на месяц?", "");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    console.log('Наша программа включает в себя данные: ');
    for (var p in appData) {
        console.log(p);
    }
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {
        let a = expenses[i].value;
        let b = expenses[++i].value;

        if (typeof (a) === 'string' && typeof (a) != 'null' && typeof (b) === 'string' && typeof (b) != 'null' &&
            a != '' && b != '' && a.length < 50 && b.length < 50) {
            console.log('Done!');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optExpensesBtn.addEventListener('click', function () {

    for (let i = 0; i <= optionalExpenses.length; i++) {
        let a = optionalExpenses[i].value;
        appData.optionalExpenses[i] = a;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
    }
});

countBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        alert('Ежедневный бюджет:' + appData.moneyPerDay);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncome.addEventListener('input', function () {

    let items = chooseIncome.value;
    if (typeof (items) === 'string' && typeof (items) != 'null' && items != '') {
        appData.income = items.split(',');
    }
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings === true) {
        appData.savings = false;
    }else{
        appData.savings = true;
    }
});

sum.addEventListener('input', function(){
    if (appData.savings){
        let sumV = +sum.value;
        let percentV = +percent.value;
        
        appData.yearIcome = sumV / 100  * percent;
        appData.monthIcome = sumV / 100 / 12 * percent;

        monthSavingsValue.textContent = appData.monthIcome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIcome.toFixed(1);
    }
});

percent.addEventListener('input', function(){
    if (appData.savings){
        let sumV = +sum.value;
        let percentV = +percent.value;
        
        appData.yearIcome = sumV / 100  * percent;
        appData.monthIcome = sumV / 100 / 12 * percent;

        monthSavingsValue.textContent = appData.monthIcome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIcome.toFixed(1);
    }
});
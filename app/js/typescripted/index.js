var accessForm = document.querySelector('form');
accessForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var amount = parseInt(document.querySelector('#amount').value);
    var salary = parseInt(document.querySelector('#expectedSalary').value);
    var repayment = parseInt(document.querySelector('#repayment').value);
    var monthlySalary = (salary / 12);
    var amountBorrowed = amount;
    var totalAmount = amount;
    if (amount >= 6400 && amount <= 7199) {
        totalAmount += 500;
        amountBorrowed += 500;
    }
    else if (amount >= 7200 && amount <= 8000) {
        totalAmount += 1000;
        amountBorrowed += 1000;
    }
    var deposit = totalAmount / 20;
    var months = 0;
    var payback = (monthlySalary / 100) * repayment;
    while (totalAmount >= 1) {
        totalAmount -= payback;
        months++;
    }
    var paybackRounded = payback.toFixed(2);
    var depositRounded = deposit.toFixed(2);
    console.log(paybackRounded);
    document.querySelector('.results').innerHTML = '<div class="textOutput">You have decided to borrow £' + amountBorrowed + ', repaying ' + repayment + '% of your monthly salary.<br> ' +
        'This means you will be paying £' + paybackRounded + ' per month for ' + months + ' months.<br> Your administration fee will be £' + depositRounded + '.</div>';
});
let bankAmount = 10000;

const VAT = 1.17;

const details = ["+200", "-100", "+146", "+167", "-2900"];

function bankAmountWithExpenses (array) {
    let totalExpenses = 0;
    array.forEach((expense) => {
        let amountExpens = Number(expense);
        let amountExpensVAT = amountExpens * VAT;
        totalExpenses +=amountExpensVAT
        return totalExpenses
    });
    bankAmount = bankAmount + totalExpenses
    console.log(bankAmount);
}


bankAmountWithExpenses(details)

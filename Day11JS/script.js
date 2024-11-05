let balance = 0;
document.getElementById("balance").innerHTML = balance;

function makeDeposit(){
    const amount = parseFloat(document.getElementById("depositAmount").value);  
    balance += amount;
    document.getElementById("balance").innerHTML = balance;

    addTransaction("Credit", amount)
}

function makeWithdrawl(){
    const amount = parseFloat(document.getElementById("withdrawAmount").value);  
    balance -= amount;
    document.getElementById("balance").innerHTML = balance;

    addTransaction("Debit", amount)
}
function addTransaction(type, amount) {
    const transactionList = document.getElementById("transaction");
    const transactionItem = document.createElement("li");
    transactionItem.textContent = type + ": $ " +amount +" | Balance: $" +balance;

    transactionList.appendChild(transactionItem);
}
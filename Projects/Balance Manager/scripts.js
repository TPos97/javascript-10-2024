let balance = 10000
document.getElementById('balance').textContent = balance;


function newStatement(date, type, amount, currentBalance){
    const tableBody = document.getElementById('s-body');
    const newRow = document.createElement('tr')

    newRow.innerHTML = `
        <td>${date}</td>
        <td>${type}</td>
        <tdclass="${type === 'Deposit' ? 'credit' : 'debit'}">$${amount.toFixed(2)}</td>
        <td>$${currentBalance.toFixed(2)}</td>`;

    tableBody.appendChild(newRow);
}
function deposit(amount) {
    if (amount > 0) {
        balance += amount;
        document.getElementById('balance').textContent = balance.toFixed(2);
        newStatement(new Date().toISOString().split('T')[0], 'Deposit', amount, balance);
    } else {
        alert('Please enter a valid deposit amount.');
    }
}
function withdraw(amount) {
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById('balance').textContent = balance.toFixed(2);
        newStatement(new Date().toISOString().split('T')[0], 'Withdrawal', amount, balance);
    } else if (amount > balance) {
        alert('Insufficient balance for this withdrawal.');
    } else {
        alert('Please enter a valid withdrawal amount.');
    }
}

document.getElementById('depositButton').addEventListener('click', () => {
    const depositAmount = parseFloat(document.getElementById('depAmt').value);
    deposit(depositAmount);
    document.getElementById('depAmt').value = '';
})
document.getElementById('withdrawButton').addEventListener('click', () => {
    const withdrawAmount = parseFloat(document.getElementById('withAmt').value);
    withdraw(withdrawAmount);
    document.getElementById('withAmt').value = '';
})
let balance = 1000;
document.getElementById("balance").innerHTML = balance;

function toggleTransactionFields(){
    let type = document.getElementById("transactionType").value;

    document.getElementById("amount").placeholder = type == "Deposit" ? "Enter Deposit Amount" : "Enter Withdrawal Amount" ;
}
function toggleCustomDescription(){
    let description = document.getElementById("transactionDescription").value;
    let customDescriptionField = document.getElementById("customDescription");

    console.log(description)
    console.log(customDescriptionField)

    description === "Other" ? customDescriptionField.classList.remove("hidden")
    : customDescriptionField.classList.add("hidden")
}
function makeTransaction(){

    let type = document.getElementById("transactionType").value;

    //console.log(type);

    let description = document.getElementById("transactionDescription").value;

    if (description == "Other"){
        description = document.getElementById("customDescription").value
    } else {
        description = description;
    }

    let myAmount = parseFloat(document.getElementById("amount").value);

     console.log(type);
    if (type == "Deposit")
    {deposit(myAmount)}

    else{withdraw(myAmount)}

    addTransaction(type, description, myAmount);
}
function withdraw(amount){
    balance -= amount;
    document.getElementById("balance").textContent = balance;
}
function deposit(amount){
    balance += amount;
    document.getElementById("balance").textContent = balance;
}
function addTransaction(type, description, amount){

    let transactionList = document.getElementById("transactions")

    let date = new Date().toLocaleString();

    let amountClass = type == "Deposit" ? "credit" : "debit";

    let myhtml = `<tr>
    <td>${date}</td>
    <td>${description}</td>
    <td class="${amountClass}" >${amount}</td>
    <td>$ ${balance}</td>
    </tr>`

    transactionList.innerHTML += myhtml;
}
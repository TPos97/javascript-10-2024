function calculatetotal(){
    var loanAmnt = document.getElementById("loanAmount").value;
    var interestRate = document.getElementById("rate").value;
    var monthsRemaining = document.getElementById("months").value;

    var interest = (loanAmnt * (interestRate * 0.01))/monthsRemaining;
    var installAmount = loanAmnt / monthsRemaining + interest

    document.getElementById("install-amnt").innerHTML = installAmount.toFixed()
}
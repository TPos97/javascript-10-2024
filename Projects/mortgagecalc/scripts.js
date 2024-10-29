function calculatetotal(){
    var mortgageCost = document.getElementById("mortgage").value;
    var insuranceRate = document.getElementById("rate").value;
    var monthsRemaining = document.getElementById("months").value;

    var totalAmount = mortgageCost * insuranceRate/100 * monthsRemaining

    document.getElementById("total").innerHTML = totalAmount.toFixed()
}
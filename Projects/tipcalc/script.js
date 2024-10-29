function calculatetip(){
    var mybillAmount = document.getElementById("bill").value;
    var myTip = document.getElementById("tip").value;
    
    var totalAmount = mybillAmount * (1+myTip/100);

    document.getElementById('total').innerHTML = totalAmount.toFixed()
}

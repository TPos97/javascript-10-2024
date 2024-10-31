function calculateAge(){
{
    var birthdate = new Date(document.getElementById("birthdate").value);
    var today = new Date();

    var myAge = today.getFullYear() - birthdate.getFullYear();
}

    document.getElementById("ageResult").innerText = 'You are '+ myAge +' years old.';
}

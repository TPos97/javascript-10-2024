function updateFromCelsius() {
    const celsius = parseFloat(document.getElementById("celsius").value) || 0;
    document.getElementById("fahrenheit").value = (celsius * 9 / 5 + 32).toFixed(2);
    document.getElementById("kelvin").value = (celsius + 273.15).toFixed(2);
}

function updateFromFahrenheit() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value) || 0;
    document.getElementById("celsius").value = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    document.getElementById("kelvin").value = (((fahrenheit - 32) * 5 / 9) + 273.15).toFixed(2);
}

function updateFromKelvin() {
    const kelvin = parseFloat(document.getElementById("kelvin").value) || 0;
    document.getElementById("celsius").value = (kelvin - 273.15).toFixed(2);
    document.getElementById("fahrenheit").value = ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
}
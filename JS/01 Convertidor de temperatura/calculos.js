document.getElementById("convertBtn").addEventListener("click", function() 
{
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
    let result;

    if (isNaN(inputTemp)) {
        alert("Por favor ingresa un valor numérico válido.");
        return;
    }

    if (inputUnit === outputUnit) {
        result = inputTemp;
    } else {
        switch (inputUnit) {
            case "C":
                if (outputUnit === "F") {
                    result = (inputTemp * 9/5) + 32;
                } else if (outputUnit === "K") {
                    result = inputTemp + 273.15;
                } else if (outputUnit === "R") {
                    result = (inputTemp + 273.15) * 9/5;
                }
                break;

            case "F":
                if (outputUnit === "C") {
                    result = (inputTemp - 32) * 5/9;
                } else if (outputUnit === "K") {
                    result = (inputTemp + 459.67) * 5/9;
                } else if (outputUnit === "R") {
                    result = inputTemp + 459.67;
                }
                break;

            case "K":
                if (outputUnit === "C") {
                    result = inputTemp - 273.15;
                } else if (outputUnit === "F") {
                    result = (inputTemp * 9/5) - 459.67;
                } else if (outputUnit === "R") {
                    result = inputTemp * 9/5;
                }
                break;

            case "R":
                if (outputUnit === "C") {
                    result = (inputTemp - 491.67) * 5/9;
                } else if (outputUnit === "F") {
                    result = inputTemp - 459.67;
                } else if (outputUnit === "K") {
                    result = inputTemp * 5/9;
                }
                break;

            default:
                alert("Unidad de entrada no válida.");
                return;
        }
    }

    document.getElementById("result").value = result.toFixed(2);
});
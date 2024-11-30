document.addEventListener("DOMContentLoaded", function () 
{
    const form = document.getElementById("imc-form");
    const imcValueElement = document.getElementById("imc-value").querySelector("span");
    const imcCategoryElement = document.getElementById("imc-category");

    function calcularIMC(peso, estatura) {
        return (peso / (estatura * estatura)).toFixed(2);
    }

    function obtenerCategoriaIMC(imc) {
        if (imc < 18.5) {
            return { categoria: "Peso bajo", clase: "peso-bajo" };
        } else if (imc >= 18.5 && imc < 24.9) {
            return { categoria: "Peso normal", clase: "peso-normal" };
        } else if (imc >= 25 && imc < 29.9) {
            return { categoria: "Sobrepeso", clase: "sobrepeso" };
        } else if (imc >= 30 && imc < 34.9) {
            return { categoria: "Obesidad I", clase: "obesidad-i" };
        } else if (imc >= 35 && imc < 39.9) {
            return { categoria: "Obesidad II", clase: "obesidad-ii" };
        } else {
            return { categoria: "Obesidad III", clase: "obesidad-iii" };
        }
    }

    form.addEventListener("submit", function (event) 
    {
        event.preventDefault();

        const peso = parseFloat(document.getElementById("peso").value);
        const estatura = parseFloat(document.getElementById("estatura").value);

        if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
            alert("Por favor, introduce valores válidos.");
            return;
        }

        const imc = calcularIMC(peso, estatura);

        const { categoria, clase } = obtenerCategoriaIMC(imc);

        imcValueElement.textContent = imc;
        imcCategoryElement.textContent = categoria;

        imcCategoryElement.classList.remove("peso-bajo", "peso-normal", "sobrepeso", "obesidad-i", "obesidad-ii", "obesidad-iii");

        imcCategoryElement.classList.add(clase);
    });
});
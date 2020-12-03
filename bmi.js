const bmiCalc = (weight, height) => {
    return (weight / (height * height)) * 703;
}

document.querySelector("#calcBTN").addEventListener("click", () => {
    const feet = parseInt(document.querySelector("#feet").value);
    const inches = parseInt(document.querySelector("#inches").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const height = feet * 12 + inches;
    const bmi = bmiCalc(weight, height);
    document.querySelector("#bmi").innerHTML = bmi.toFixed(1);
})

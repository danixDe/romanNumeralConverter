const error = document.getElementById("error");
const result = document.getElementById("output");
const input = document.getElementById("number");
const btn = document.getElementById("convert-btn");

btn.addEventListener("click", () => {
    convert(input.value);
});
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convert(input.value);
    }
});

function convert(input) {
    let number = parseInt(input);
    if (isNaN(number)) {
        error.textContent = "Please enter a number";
        error.classList.add("error");
        result.textContent = '';
        result.classList.remove("output");
    }else if(number<1){
        error.textContent='Please enter a number greater than or equal to 1';
        error.classList.add("error");
        result.textContent='';
        result.classList.remove("output");
    }
     else if (input.includes(".")) {
        error.textContent = "Please enter a natural number";
        error.classList.add("error");
        result.textContent = "";
        result.classList.remove("output");
    } else if (number > 3999) {
        error.textContent = "Please enter a number less than or equal to 3999";
        error.classList.add("error");
        result.textContent = "";
        result.classList.remove("output");
    } else {
        const output = roman(input);
        result.textContent = output;
        result.classList.add("output");
        error.textContent = '';
        error.classList.remove('error');
    }
}

function roman(number) {
    let romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    let output = '';

    romanNumerals.forEach(item => {
        while (number >= item.value) {
            output += item.numeral;
            number -= item.value;
        }
    });
    return output;
}
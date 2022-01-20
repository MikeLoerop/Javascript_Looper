
//Get starting and ending values
function getValues () {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    let numbers = generateNumbers(startValue, endValue);
}

//Generate numbers from startValue to endValue
function generateNumbers(startValue, endValue){
    let numbers = [];

    for (let i = startValue; i <= endValue; i++) {
        numbers.push(index);
    }

    return numbers;
}

//Display the numbers and mark the even numbers bold

// function
// give array of #s to,
// returns square of every number


// var number= numbers[i];
// var squaredNumbers = number*number;
// console.log(numbers, squaredNumbers);


function squareEachNumber(numbers) {
    var newArray =[];
    for (var i=0; i<numbers.length; i++){
        var multiplied = numbers[i]*numbers[i];
        newArray.push(multiplied);
    }
    console.log(newArray);
return newArray;
}


//using MAP
// var squareEachNumber = [1, 2, 3];

// var squareEachNumberArray = squareEachNumber.map(numbers=> numbers * numbers);
// console.log(squareEachNumberArray);


var result = squareEachNumber([1, 2, 3]);

if (result[0] == 1 && result[1] == 4 && result[2] == 9) {
    console.info("Pass");
} else {
    console.info("Fail");
}
function  squareSumOfNumbers(numbers) {
    var sumOfSquares = 0;
    for(var i=0; i<numbers.length; i++){
        //numbers are squared
        var squared = numbers[i] * numbers[i];
        //squared numbers need to be added
        sumOfSquares += squared;
    }

    console.log(sumOfSquares);
}

console.log(squareSumOfNumbers([1,2,3]));

// squared = 1, 4, 9
//adding up = 14
// function sumNumbers that takes an array of numbers and takes their sum




function sumOfNumbers (numbers) {
    //create a for loop where each number is added to the next
    var sum = 0;
    for(i=0; i<numbers.length; i++){
        //sum for 3 numbers
        //var sum1= numbers[0] + numbers[1] + numbers[2];
        //var sum2= numbers[i] + numbers[i][1] + numbers[i][i+1];

        //sum = sum + numbers[i];
        sum += numbers[i];
    }
    console.log(sum);
}

//we want an output of 6
return sumOfNumbers([1, 2, 3, 4]);

//first round:  sum = 0 + 1 = 1
//second round: sum = 1 + 2 = 3
//third round:  sum = 3 + 3 = 6
//fourth round: sum = 6 + 4 = 10
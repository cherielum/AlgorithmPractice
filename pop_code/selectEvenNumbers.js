// Takes an array of numbers and returns another array
// with only the even numbers from the input array
function selectEvenNumbers(numbers) {
    //setting up new array called newArray
    var newArray=[];
    //need a for loop to loop through current array: arrayEq
    //for each # in the input array, this for loop will do something
    for(x=0; x<input.length; x++){
        //what makes a number even? it has to be divisible by 2
        //a number is divisible by 2 when it's module is ===0
        //eg 2%2===0; 1R0; it is even
        //   4%2===0; 2R0; it is even
        //   6%2===0; 3R0; it is even

        //declaring what makes a number even
        // var evenNumber = numbers[x]%2;
        if (numbers[x] % 2 === 0) {
             //need to push even numbers ONLY into a newArray
            newArray.push(numbers[x]);
        // console.log(numbers[x]);  // else console.log(x);
        }
    }
     console.log(newArray);

    return newArray;
}


        // if (numbers[x] % 2 === 0)
        //     console.log(numbers[x] + " this is even");
        // else
        //     console.log(x);


var input = [10, 1, 2, 3, 4, 5, 6];
var expected = [10, 2, 4, 6];

/// IGNORE BELOW THIS

function arrayEq(expected, actual) {
    for (var i = 0; i < expected.length; i++) {
        e = expected[i];
        a = actual[i];
        if (e !== a) {
            return false;
        }
    }

    return true;
}

var actual = selectEvenNumbers(input);

if (arrayEq(expected, actual)) {
    console.log("Pass");
} else {
    console.log("Fail");
}
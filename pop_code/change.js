//create a function that returns the least amount of change.


function leastAmountOfChange(change){
    var newArray =[];
    var newAmount;
        //console.log(change);
        for (var x =0; x<change; x++ ){
        // console.log(x);
            if  (change > 0.25) {
                newAmount = change-0.25;
                //newArray.push(newAmount);
                console.log(newAmount);
            }
            if (newAmount > 0.25) {
                newAmount = newAmount-0.25;
                //newArray.push(newAmount);
                console.log(newAmount);
            }
        }
}

console.log(leastAmountOfChange(5.00));
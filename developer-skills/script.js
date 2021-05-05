temperatues = [17 , 21, 23 ]
temperatuesTwo = [12, 5, -5, 0, 4];

// My attempt
function printForecast(temp) {
    for(i=0; i < temp.length; i++){
        console.log("1 days ... " + i);
    }
    console.log(temp);
}

printForecast(temperatues);

// Answer 

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast2 = function(arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
        //$ is an identifer. It is taking the array and the first number
        // i on its own is the postion of the value in the array. 
        str += `${arr[i]}C in ${i + 1} days ... `;
    }
    console.log(str);
}

printForecast2(data1);
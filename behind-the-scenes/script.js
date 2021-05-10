'use strict';

function calcAge(birthYear) { // Global scope
    const age = 2037 - birthYear;

    function printAge() { //Child scope of calcAge
        let output = `You are the ${age}, born in ${birthYear}`;
        console.log(output);


        if(birthYear >= 1981 && birthYear <= 1996) { // blocked scoped
            var millenial = true;
            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a,b) {
                return a + b;
            }

            output = 'NEW OUTPUT'

        }
        console.log(millenial); // functioned scoped
        //console.log(add(2,3)); This will only work if you remove strict mode. 
        console.log(output);
    }

    printAge();
    return age;
}

const firstName = 'Jonas'; // Global scope
calcAge(1991);
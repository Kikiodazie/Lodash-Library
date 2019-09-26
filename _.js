const _ = {
    //Below is an Implementation of .clamp() method of JavaScript Lodash Library.
    clamp (number,lowerBound,upperBound) {

        if(number < lowerBound){
            return lowerBound;
        }
        if(number > upperBound ) {
            return upperBound;
        }
        if(number > lowerBound && number < upperBound){
            return number;
        }

        //REFACTORABLE WAY OF IMPLEMENTATION
        // let firstClamp = Math.max(number,lowerBound);
        // let clampedValue = Math.min(firstClamp,upperBound);
        // return clampedValue;

    },
     //Below is an Implementation of .InRange() method of JavaScript Lodash Library.

    inRange (num, start = 0, end){
        if(end === undefined){
            end = start;
            start = 0;
        }
        if(start > end){
            temp = end;
            end =start;
            start = temp;

        }
        if(num < start){
            return false;
        }
        if(num >= end){
            return false;
        }
        if(num < start){
            return false;
        }
        if(num === start){
            return true;
        }
        if(num > start && num < end){
            return true;
        }


    },
    //Below is an Implemented modified version of the .words() method of JavaScript Lodash Library
    words(str) {
        let words= [];
        let arr = str.split(' ');
        words.push(arr);
        return arr;
    },
    //Below is an Implemented modified version of the .words() method of JavaScript Lodash Library
    pad(str,length) {
        let len = str.length;

        if(len > length){
            return str;
        }
        let startPadding = Math.floor((length - len)/2);
        let endPadding = length - len - startPadding;
        let paddedString = " ".repeat(startPadding) + str + " ".repeat(endPadding);

        return paddedString;


        
    },

    has(object,key){
        let value = object.key;
        
        if(value != undefined){
            return true;
        }
        if(value === undefined){
            return false;
        }

    }

}




// Do not write or modify code below this line.
module.exports = _;
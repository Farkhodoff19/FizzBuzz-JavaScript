function fizzBuzz(input) {
    if(typeof input != 'number') {
        return 'Son emas'
    }else if((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz'
    }else if(input % 3 === 0) {
        return 'Fizz'
    }else if(input % 5 === 0) {
        return 'Buzz'  
    }else {
        return input
    }
}

let result = fizzBuzz(15) 
console.log(result);
// 1. Task #1 Quadratic equation

const calculate = (a, b, c) => {
    let discriminant = b**2 - 4 * a * c;    
    if (discriminant > 0) {
        let rootFromDisc = Math.sqrt(discriminant);
        let rootOne = ( -b + rootFromDisc) / 2 * a;
        let rootTwo = ( -b - rootFromDisc) / 2 * a;
        let roots = {
            "x1": rootOne,
            "x2": rootTwo
        }
        return roots;
    }
    if (discriminant == 0){
        let rootFromDisc = Math.sqrt(discriminant);
        let root = ( -b + rootFromDisc) / 2 * a;
        let roots = {
            "x1": root,
            "x2": null,
        }
        return roots;
    }
    if (discriminant < 0){
        let roots = {
            "x1": null,
            "x2": null
        }
        return roots;
    }

}

console.log(calculate(1, 2, 3));

// 2. Task #2 Factorial
let factorial = (num) => {
    let sum = 1;
    for(let i = 1; i <= num; i++){
        sum *= i;
    }
    return sum;
}

console.log(factorial(5));


// 3. Task #3 Calculator
let addition = (...args) => {
    let result = 0;
    for(let arg of args){
        result += arg;
    }
    return result;
}

let subtraction = (...args) => {
    let result = args[0];
    for(let i = 1; i < args.length; i++){
        result -= args[i];
    }
    return result;
}

let multiplication = (...args) => {
    let result = 1;
    for(let arg of args){
        result *= arg;
    }
    return result;
}

let division = (...args) => {
    let result = args[0];
    for(let i = 1; i < args.length; i++){
        result /= args[i];
    }
    return result;
}

const calculator = (callback, ...args) => {
    return callback(...args);
  };

  console.log(addition(2, 3, 4))
  console.log(subtraction(20, 10, 5));
  console.log(multiplication(2, 2, 3))
  console.log(division(100, 10, 2))
  console.log(calculator(division, 10, 2))
  console.log(calculator(multiplication, 10, 2))


// 4. Task #4 Fibonacci
let n = prompt('Enter some number');
const fib = (n) => {
    let n1 = 0;
    let n2 = 1;
    let nextNumber;
    let fibonacciSequence = [];
    for (let i = 1; i <= n; i++) {
        fibonacciSequence.push(n1);
        nextNumber = n1 + n2;
        n1 = n2;
        n2 = nextNumber;
    }
    return fibonacciSequence;
  };

  console.log(fib(n));


// 5. Task #5 Pyramide

let pyramide = (rows) => {
        let starLength = 1;
        let cageLength = rows - starLength;
        for(let i = 0; i < rows; i++){
            let cages = ''.padStart(cageLength, '#');
            let stars = ''.padStart(starLength, "*");
            console.log(`${cages}${stars}${cages}`);
            cageLength--;
            starLength += 2;
        }
    }
    pyramide(5);
    


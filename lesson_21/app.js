// 1. Decorator 

function sumF (num){
    return this.num + num;
  };

let cache = {};

function cachesDecorator (func){
    return function () {
        return  cache[func.name] =  func.call(this, ...arguments); // .name - returns name of function
    }
};
  
  const obj = {
    num: 1,
    result: null,
    sum(num) {
      this.result = this.num + num;
      return this.result;
    },
  };

const decoratedSum = cachesDecorator(sumF);
console.log(decoratedSum.call(obj, 2));
// 3
  
const decoratedSum1 = cachesDecorator(obj.sum);
console.log(decoratedSum1.call(obj, 3));
  // 4

// 2. Task#2 Factorial recursion
function factorial (initialNumber){
    if(initialNumber === 1){
        return 1;
    } else {
        return initialNumber * factorial (initialNumber - 1);
    }
  };
  
console.log(factorial(5));


// 3. Task #3  Fibonacci
function fib(length) {
    if (length === 1) {
      return [1];
    } else if (length === 2) {
      return [1, 1];
    } else {
      const sequence = fib(length - 1);
      const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(nextNumber);
      return sequence;
    }
  }
const fibonacciSequence = fib(5); 
console.log(fibonacciSequence);

  
// 4. Task#4 Print lessons 
const list = {
    title: "lesson-1",
    next: {
      title: "lesson-2",
      next: {
        title: "lesson-3",
        next: {
          title: "lesson-4",
          next: {
            title: "lesson-5",
            next: null,
          },
        },
      },
    },
  };

function readList (list){
    if (list.next === null){
        return list.title;
    }else{
        console.log(list.title);
        return readList(list.next);

    }
}

console.log(readList(list));
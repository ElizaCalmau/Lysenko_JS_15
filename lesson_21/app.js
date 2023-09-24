// 1. Decorator 
const obj = {
  num: 1,
  sum(num) {
    return this.num + num;
  },
};

const cachesDecorator = (func) => {
 let cache = new Map(); // create new collection (key, val)
 return function(num){ 
  if(!cache.has(num)){ //if collection is empty from argument of function call func
    let result = func.call(this, num); // put the result of function that calls with object and argument num to veriale result 
    cache.set(num, result); // set properties to cache collection num - key, result- value
  }
  return cache.get(num); // getting valut 'result' by key 'num'
 }
};

const sum = function (num) {
  return this.num + num;
};

const decoratedSum = cachesDecorator(sum);// call sum func
console.log(decoratedSum.call(obj, 2)); // arguments in 'let result = func.call(this, num);'
console.log(decoratedSum.call(obj, 2));

const decoratedSum2 = cachesDecorator(obj.sum); // call method sum of obj
console.log(decoratedSum.call(obj, 3)); // arguments in 'let result = func.call(this, num);'
console.log(decoratedSum.call(obj, 3));
console.log(decoratedSum.call(obj, 33));

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


// 5. Deep copy
const arr = [
  1,
  "string",
  null,
  undefined,
  { a: 15, b: 10, c: [1, 2, 3, { a: 4 }], d: undefined, e: true },
  true,
  false,
];

const deepCopy = (arr) => {
};
let copy = deepCopy(arr);
console.log(copy(arr));


// 6. DOM
const table = {
  tagName: "table",
  attrs: {
    border: "1",
  },
  children: [
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["1x1"],
        },
        {
          tagName: "td",
          children: ["1x2"],
        },
      ],
    },
    {
      tagName: "tr",
      children: [
        {
          tagName: "td",
          children: ["2x1"],
        },
        {
          tagName: "td",
          children: ["2x2"],
        },
      ],
    },
  ],
};

const render = ({ tagName, attrs, children }) => {
  let html = `<${tagName}`;
  for (const attr in attrs) {
    html += ` ${attr}="${attrs[attr]}"`;
  }
  html += ">";

  for (const child of children) {
    if (child?.tagName) {
      html += render(child);
    } else if (typeof child === "string") {
      html += child;
    }
  }

  html += `</${tagName}>`;

  return html;
};

const html = render(table);

document.write(html);
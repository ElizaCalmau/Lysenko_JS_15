// 1. Task #1 Pythagorean theorem

const pythagorean = (a, b) => {
    let c = a**2 + b**2;
    let result = Math.sqrt(c)
    console.log(result)
};

pythagorean(5, 12);


// 2. Task#2  Show number in money format (+- sign should be present. Separate thousands with ,)

const formatMoney = (num) =>{
    let fixedNum = num.toFixed(2);
    let dividedNum =  fixedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if( fixedNum > 0 ){
        console.log(`+${dividedNum}`) 
    }
    else{
        console.log(dividedNum);
    }
};
formatMoney(1232323);
//'+ 1,232,323.00'
formatMoney(123456);
formatMoney(-23.2132);
//'- 23.21'



//3. Task #3 Format number in spaces

const formatNumber = (num) => {
    let precidedNum = num.toPrecision(7);
    let formattedNum = precidedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    console.log(formattedNum);
    
};

formatNumber(1232323);
// 1 232 323

formatNumber(1223.65378);
// 1 223.654


// 4. Task #4 Write a password generator with length n

const generatePassword = (n) => {
    let str = ''
    let max = 127;
    let min = 32;
    for( let i = 0; i <= n; i++){
       str += String.fromCharCode(Math.floor(Math.random() * (max - min)) + min);       
    }
    console.log(str);
};
//console.log(Math.floor((Math.random())*127)) 
generatePassword(8);
generatePassword(18);
// 1H:s4dh$

// 5. Calculate percentage with n numbers after dot

const calc = (firstNum, secondNum, precision) =>{
    let percentage = (100 * secondNum) / firstNum;
    if (precision > 0){
        let result = percentage.toFixed(precision);
    console.log(`${result}%`);
    } else {
        console.log(`${percentage}%`);
    }
    
};

calc(200, 50, 0);
// 25

calc(200, 0.14, 1);
// 0.1



//6. Get integer part of number and decimal

const splitNumber = (num) => {
    let splitedNum = num.toString().split('.');
    let newObj = {int: splitedNum[0], decimal: splitedNum[1]};
    if(splitedNum[1] === undefined){
        newObj = {int: splitedNum[0], decimal: 0};
    }
    console.log(newObj);    
};

splitNumber(2);
// {int: 2, decimal: 0}

splitNumber(9.34);
// {int: 2, decimal: 34}

splitNumber(0.99);


//7. Check if prime 
const isPrime = (n) => {
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        } if( n % i !== 0) {
            return true;
    }
}
};

console.log(isPrime(4));
// false

console.log(isPrime(5));
// true

console.log(isPrime(52));


//Check if number is Armstrong Number

const isArmstrong = (n) => {
    let numsArr = n.toString().split('');
    console.log(numsArr);
    let mult = 0;
    let sumOfMult = numsArr.map( (el) => {
        return mult+= el*el*el;
    })
    if( mult === n){
        console.log(`${n} is Armstrong's num`)
    }   
};

isArmstrong(4);

isArmstrong(153);
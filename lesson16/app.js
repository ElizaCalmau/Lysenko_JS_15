// 1. Task #1 Reverse str

const reverse = (str) => {
    let reverseStr = '';

    for(let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    console.log(reverseStr);
}

reverse("hello");


// 2. Task #2 Count words

const countWords = (str) => {
    console.log(str.split(' ').length);

  };
  
countWords("Hi my name is Taras");


// 3. Task #3 Clear whitespace

const clearWhiteSpace = (str) => {
    const srtingArr = str.split(' ')
    let clearStr = ''
    for( let i = 0; i < srtingArr.length; i++){
        if( srtingArr[i] !== ' '){
            clearStr += srtingArr[i];
        }
    }
    console.log(clearStr);
  };
  
  const result = clearWhiteSpace("  1   2   ");


  // 4. Task #4 Max length

  const cutStr = (str, maxLength) => {
   console.log(str.slice(0, maxLength));
   if(str.length > maxLength){
    console.log(`${str.slice(0, maxLength)}...`)
   }  
  };
  
  cutStr("Hello", 5);

  cutStr("Hello there", 5);

  //5. Palindrome

  const palindrome = (str) => {
     let j = str.length - 1;
     for(let i = 0; i < str.length; i++){
        let currentStart = str[i];
            for(; j>= 0; j--){
                let currentEnd = str[j];
                if(currentStart === currentEnd){
                 j--;
                 break;    
                }return; 
            }
        }console.log(`${str} is a palindrome`)
    }
 
  palindrome("tenet");
  palindrome('anta')
  palindrome("js");
 

 // Additional tasks 
// 1. Change a first character to Upper Case
 let ucFirst = (str) => {
   console.log(str.replace(str[0], str[0].toUpperCase())) ;
 }
ucFirst('elizabeth');


// 2. Check spam 

const checkSpam = (str) => {
    if(str.match(/free/gi)){
        console.log(str)
    }
    if(str.match(/say/gi)){
        console.log(str)
    }
    
}

checkSpam('get a fRee gift');
checkSpam('We are here to sAY "hello"');
checkSpam ('lalala');
checkSpam('hey, BeFree company is here');



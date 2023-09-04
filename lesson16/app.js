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
    let srtingArr = str.split(' ')
    let clearStr = ''
    for( let i = 0; i < srtingArr.length; i++){
        if( srtingArr[i] !== NaN){
            clearStr += srtingArr[i];
        }
    }
    console.log(clearStr);
  };
  
  const result = clearWhiteSpace("  1   2   ");


  // 4. Task #4 Max length

  const cutStr = (str, maxLength) => {
   console.log(str.slice(0, maxLength))    
  };
  
  cutStr("Hello", 5);

  cutStr("Hello there", 5);

  //5. Palindrome

  const palindrome = (str) => {
    if(str[0].match(str[str.length-1])){
        console.log(`${str} is Palindrome`)
    } else {
        console.log(`${str} is not Palindrome`)
    }

  };
  
  palindrome("tenet");

  palindrome("js");
 
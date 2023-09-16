function solution(str, ending){
    return str.search(ending) ?  true : false;
    console.log(str.search(ending));
    console.log(str.indexOf(ending))
    }
  

console.log(solution('abcde', 'cde'));
console.log(solution('abcde', 'abc'));
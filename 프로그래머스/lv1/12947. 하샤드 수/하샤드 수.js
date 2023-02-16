function solution(x) {  
  let result = 0;
  let num = String(x).split('')
  for(let i = 0; i < num.length; i++) {
    result += Number(num[i])
  }
   return x % result == 0 ? true : false
}
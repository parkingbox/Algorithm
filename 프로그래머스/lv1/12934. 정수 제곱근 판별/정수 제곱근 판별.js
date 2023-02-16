// 

function solution(n) {
  var answer = 0;
  let result = n / Math.sqrt(n)
    console.log(result)
  if( Math.sqrt(n) % 1 == 0 ) {
    return Math.pow(result + 1, 2)
  } else {
    return -1
  }
    
  return answer;
}
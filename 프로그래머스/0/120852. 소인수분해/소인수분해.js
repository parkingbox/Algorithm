function solution(n) {
  let result = [];
  let num = 2;
  
  while (n >= 2) {
    if (n % num === 0) {
      result.push(num)
      n = n / num;
    }
     else num ++;
  }
  
  return [...new Set(result)];
}
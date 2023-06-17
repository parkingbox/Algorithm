function solution(n) {
  let arr = n.toString(2).split('');
  let arrLeng = arr.filter(item => item === '1').length
  let arrLeng2
  while(arrLeng!==arrLeng2){
    n = n + 1;
    arrLeng2 = n.toString(2).split('').filter(item => item ==='1').length;
  };
  return n
}
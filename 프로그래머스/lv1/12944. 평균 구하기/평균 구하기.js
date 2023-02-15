//배열의 합 / 배열의 length = 평균값
function solution(arr) {
  let sum = 0 
  for(let i = 0; i< arr.length; i++) {
    sum += arr[i]
  }
    return sum / arr.length
}
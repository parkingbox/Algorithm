function solution(x) {
  let result = 0;
  let arr = String(x).split('')
    for(let i = 0; i< arr.length; i++) {
        result += parseInt(arr[i])
    }
    return x % result == 0 ? true : false
}
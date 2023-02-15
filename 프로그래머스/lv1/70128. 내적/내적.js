// a와 b 배열의 인덱스 값의 곱 더하기

let answer = 0
function solution(a, b) {
    for(let i = 0; i < a.length; i++) {
      answer += a[i]*b[i]
    }
    return answer
}
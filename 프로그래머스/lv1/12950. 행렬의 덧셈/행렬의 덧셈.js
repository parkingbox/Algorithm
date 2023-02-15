// arr1[i] arr2[i]
// 2차원 배열을 for문을 돌려 같은 인덱스 끼리 더해준다

function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
      let sum = [];
      for(let j = 0; j < arr1[i].length; j++) {
        sum.push(arr1[i][j] + arr2[i][j])
      }
      answer.push(sum)
    }
    return answer
}
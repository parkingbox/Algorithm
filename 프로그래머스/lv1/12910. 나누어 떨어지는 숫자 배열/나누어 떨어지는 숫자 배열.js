// array element에서 divisor로 나누어 떨어지는 값 arr[i] % divisor == 0
// 오름차순 sort

function solution(arr, divisor) {
    var answer = [];
    // arr[i]가 나누어 떨어지면 push    
    for (let i = 0; i <arr.length; i++) {
      if( arr[i] % divisor == 0 ) {
          answer.push(arr[i]);
      } 
    }
    // answer에 답이 없으면 -1 push
    if(answer.length == 0) {
        answer.push(-1);
    }
    //오름차순 정렬
    answer.sort((a,b) => a - b)
    return answer;
}
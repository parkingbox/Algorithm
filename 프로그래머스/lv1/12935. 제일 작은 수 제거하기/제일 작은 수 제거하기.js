// arr에서 가장 작은 수 제거 후 리턴
// 리턴 배열이 빈 배열이면 -1

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if( arr.length <= 1) {
        return [-1]
    } else {
        return arr
    }
}
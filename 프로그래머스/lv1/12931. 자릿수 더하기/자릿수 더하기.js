

function solution(n) {
    let answer = n.toString().split('').map(ans => parseInt(ans));
    
    return answer.reduce((acc, cur) => acc + cur);
}
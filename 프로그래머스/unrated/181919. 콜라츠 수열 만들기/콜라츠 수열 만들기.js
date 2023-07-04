function solution(n) {
    let answer = []
    let result = n
    while(result !== 1) {
        answer.push(result)
        if(result%2 === 0) {
            result/=2
        } else {
            result = 3 * result + 1
        }
    }
    answer.push(1)
    return answer
}
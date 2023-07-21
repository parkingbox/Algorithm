function solution(num_list) {
    let answer = 0
    for (let i = 0; i < num_list.length; i++){
        let num = num_list[i]
        while (true){
            if(num === 1) {
                break
            } else if(num % 2 === 0) {
                num = num / 2
                answer = answer + 1
            } else {
                num = (num - 1) / 2
                answer = answer + 1
            }
        }
    }
    return answer
}
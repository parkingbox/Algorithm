function solution(my_string) {    
    let answer = 0
    for(let i = 0 ; i < my_string.length;i++) {
        let newNum = ''
        while(!Number.isNaN(Number(my_string[i]))) {
            newNum+= my_string[i]
            i++
        }
        answer= answer + Number(newNum)
    }
    return answer
}
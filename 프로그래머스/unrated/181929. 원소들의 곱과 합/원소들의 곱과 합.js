function solution(num_list) {
    let answer = 0
    for(let i = 0; i < num_list.length; i++) {
        answer += num_list[i]
    }
    return num_list.reduce((acc, cal) => acc * cal) > answer * answer ? 0 : 1
}
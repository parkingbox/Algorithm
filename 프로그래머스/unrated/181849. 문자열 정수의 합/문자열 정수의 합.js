function solution(num_str) {
    return Array.from(num_str).reduce((acc, cal) => acc + Number(cal),0)
}
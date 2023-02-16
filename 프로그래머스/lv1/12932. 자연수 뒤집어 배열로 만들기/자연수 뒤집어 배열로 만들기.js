function solution(n) {
    let arr = String(n).split('').reverse().map((x) => Number(x))
    return arr;
}
function solution(arr, k) {
    const plus = (item) => item + k
    const mul = (item) => item * k
    
    return k % 2 === 0 ? arr.map(plus): arr.map(mul)
    
}
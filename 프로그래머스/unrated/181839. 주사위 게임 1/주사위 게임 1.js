function solution(a, b) {
    return a % 2 !== 0 && b % 2 !== 0 
    ? a*a + b*b 
    : a % 2 !== 0 || b % 2 !== 0
    ? 2*(a+b)
    :a % 2 === 0 && b % 2 === 0
    ? Math.abs(a - b) : null
}
function solution(a, b) {
    let strNum = String(a) + String(b)
    let num = 2 * a * b
    return strNum < num ? num : Number(strNum)
}
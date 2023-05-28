function solution(arr, n) {
    return arr.map((item, i) => (
    arr.length % 2 !== i % 2 ? item + n : item
))
}
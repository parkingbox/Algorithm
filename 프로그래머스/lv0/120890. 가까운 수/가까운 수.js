function solution(array, n) {
    array.sort((a, b) => a-b);
    let a;
    let b;
    let answer = [];

    for (let i = 0; i < array.length; i++) {
        answer.push(Math.abs(n-array[i]))
        a = Math.min(...answer);
        b = answer.indexOf(a)
    }
    return array[b]
}
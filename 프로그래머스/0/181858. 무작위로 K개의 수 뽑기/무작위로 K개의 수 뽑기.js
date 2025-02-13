function solution(arr, k) {
    const answer = arr.filter((n, i) => arr.indexOf(n) === i).slice(0, k);
    return [...answer, ...Array(k - answer.length).fill(-1)];
}
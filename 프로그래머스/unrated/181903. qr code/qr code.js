function solution(q, r, code) {
    return [...code].reduce((a, c, i) => {
        return i%q === r ? a+c : a
    }, "")
}
function solution(s1, s2) {
    return s1.filter((a,i) => s2.includes(a)).length
}
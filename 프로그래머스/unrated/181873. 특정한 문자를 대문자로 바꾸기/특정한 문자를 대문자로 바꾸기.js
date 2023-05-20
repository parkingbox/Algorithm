function solution(my_string, alp) {
    return Array.from(my_string).map(
        item => item == alp 
        ? alp.toUpperCase()
        : item).join('')
}
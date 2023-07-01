function solution(my_string) {
    return [...my_string].filter((el, index) => my_string.indexOf(el) === index).join('')

}
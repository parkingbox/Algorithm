function solution(myString) {
    return Array.from(myString).map(a => a.charCodeAt() < 108 ? 'l' : a).join("")

}
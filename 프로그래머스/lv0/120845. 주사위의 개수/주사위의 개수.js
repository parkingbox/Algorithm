function solution(box, n) {
    return box.map(item => Math.floor(item / n)).reduce((acc, cal)=> acc * cal)
}
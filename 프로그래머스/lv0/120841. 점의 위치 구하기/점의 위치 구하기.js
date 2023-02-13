function solution(dot) {
    var answer = 0;
    const [x, y] = dot
    if(x > 0 && y > 0 ) {
        return answer = 1
    } else if (x < 0 && y > 0) {
        return answer = 2
    } else if (x < 0 && y < 0) {
        return answer = 3
    } else {
        return answer = 4
    } 
}
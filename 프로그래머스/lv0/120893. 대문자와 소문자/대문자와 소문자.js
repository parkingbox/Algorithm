function solution(my_string) {
    var answer = '';
    let str = my_string.split('');
    for(let i of str) {
        answer += i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();
    }
    return answer;
}
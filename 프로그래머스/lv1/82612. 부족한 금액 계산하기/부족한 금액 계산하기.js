//놀이기구 이용료 = n * price  // count번 놀이기구 이용료 = count * price
// money에서 money - (i* price) + ((i+1) * price)

function solution(price, money, count) {
    var answer = 0;
    for(i = 1; i < count + 1; i++) {
      answer += i * price
    }
    if(answer > money) {
        return answer -money
    } else {
        return 0
    }
    return answer;
}
    //전체 합에서 배열의 합 구하여 빼기
function solution(numbers) {
    let answer = 0;
    // 배열에서 찾을수 없는 0 ~ 9까지의 숫자를 찾아 모두 더하기
    let sum = 45
    
    // 배열의 합 구하기
    for (i = 0; i < numbers.length; i++) {
        answer += numbers[i] 
    }
    
    let result = 45 - answer;
    return result;
}
// 최대한 많은 부서에 지원하도록 오름차순으로 정렬

function solution(d, budget) {
    let answer = 0
    let sum = 0
    
    d.sort((a,b) => a - b)
    for(i = 0; i < d.length; i++){
        sum += d[i];
       if(sum <= budget){
            answer++;
        } else {
            break;
        }
    }
    return answer
} 
function solution(s) {
    let answer = [];
    let result = [];
    
    for(let i = 0; i < s.length; i++){
        if(!result.includes(s[i])){
            answer.push(-1);
            result.push(s[i]);
        } else if(result.includes(s[i])){
            answer.push(i - result.lastIndexOf(s[i]));
            result.push(s[i]);
        }
        
    }
    return answer;
}
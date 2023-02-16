// p와 y의 개수 같으면 true, 다르면 false , 하나도 없으면 true

function solution(s){
    // 소문자로 변환
    let str = s.toLowerCase()
    let sum = 0;
    //s문자열에서 p가 있으면 sum에서 더하기 y가 있으면 sum에서 빼기
    for(let i = 0; i < s.length; i++) {  
      if(str[i] === 'p') {
        sum++
      } else if (str[i]=== 'y') {
        sum--
      }
    }
    return sum == 0 ? true : false
}
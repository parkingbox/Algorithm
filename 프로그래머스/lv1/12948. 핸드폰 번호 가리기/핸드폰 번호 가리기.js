// phone_number 에서 뒤에 4개를 제외하고 string *로 변경
// phone_number의 전체 길이 - 4 하고 string로 변환
// repeat -> 매개변수의 값만큼 새로운 문자열로 반환

// function solution(phone_number) {
//     const len = phone_number.length - 4; // 7
//     return  '*'.repeat(len)  + phone_number.substring(len)
//     // repeat메소드로 len값만큼 * 로 변환 +인덱스를 사용해서 시작점 설정
// }

function solution(phone_number) {
    const len = phone_number.length - 4;
    return  '*'.repeat(len)  + phone_number.slice(-4)
    // repeat메소드로 len값만큼 * 로 변환 +인덱스를 사용해서 시작점 설정
    // slice 음수일 경우 끝에서부터 길이 slice(index, end index(제외))
    
}


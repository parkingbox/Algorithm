function solution(rsp) {
    return [...rsp].map((item, i) => 
            item == '2' ? '0' : 
            item == '0' ? '5' :
            item == '5' ? '2' :
            null).join('')
}
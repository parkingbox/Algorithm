function solution(emergency) {
    let sortArr = emergency.slice().sort((a,b)=>b-a);
    return emergency.map(v=>sortArr.indexOf(v)+1);
}
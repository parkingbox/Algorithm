function solution(myString) {
    let newAns = myString.split('x').filter(item => item !=='').sort()
    return newAns;
}
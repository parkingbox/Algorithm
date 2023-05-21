function solution(my_string) {
    let answer = [...my_string].map((item)=> isNaN(item) ? null : item)
    .join('')
    const newAns = [...answer]
    const newArr = newAns.map(Number)

    return newArr.sort((a,b)=> a-b)
}
function solution(intStrs, k, s, l) {
    const result = []
    intStrs.map(item => {
        const num = Number(item.slice(s, s+l))
        if(num > k) result.push(num)
    })
    return result
}
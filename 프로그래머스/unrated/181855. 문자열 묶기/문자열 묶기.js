function solution(strArr) {
    const result={}
    strArr.forEach(item => {
        const len = item.length
        result[len] = result[len] ?? []
        result[len].push(item)
    })
    const values = Object.values(result).map(a => a.length)
    return Math.max(...values)
}
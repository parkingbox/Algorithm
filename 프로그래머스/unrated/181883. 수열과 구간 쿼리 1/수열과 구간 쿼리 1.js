function solution(arr, queries) {
    return queries.reduce((acc, cur) => {
        const [s, e] = cur
        for(let i = s ; i <= e ; i ++) {
            acc[i]+=1
        }
        return acc
    }, arr)
}
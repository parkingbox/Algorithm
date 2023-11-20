function solution(my_string, is_prefix) {
    const result = []
    const newArr = [...my_string].reduce((acc, cur, idx) => {
        const sliceWord = my_string.slice(0, idx+1)
        return [...acc, sliceWord]
    }, [])
    
    return newArr.includes(is_prefix) ? 1 : 0
}
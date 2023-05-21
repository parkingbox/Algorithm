function solution(num_list) {
    let even = num_list.filter((_,i)=> i % 2 === 0)
    let odd =  num_list.filter((_,i)=> i % 2 === 1)
    let evenAdd = even.reduce((a,c)=> a+c)
    let oddAdd = odd.reduce((a,c)=> a+c)
    return evenAdd > oddAdd ? evenAdd : oddAdd
}
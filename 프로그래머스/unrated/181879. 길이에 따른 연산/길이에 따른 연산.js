function solution(num_list) {
    return num_list.length > 10 ?
    num_list.reduce((acc, cal)=> acc + cal) :
    num_list.reduce((acc, cal)=> acc * cal)
}
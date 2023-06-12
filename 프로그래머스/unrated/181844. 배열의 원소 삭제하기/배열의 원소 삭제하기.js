function solution(arr, delete_list) {
    return arr.filter(item => !delete_list.some(other => other === item))
}
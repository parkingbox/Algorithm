function solution(my_string, num1, num2) {
    const newStr = my_string.split('');
    
    [newStr[num1], newStr[num2]] = [newStr[num2], newStr[num1]];
    return newStr.join('');
}
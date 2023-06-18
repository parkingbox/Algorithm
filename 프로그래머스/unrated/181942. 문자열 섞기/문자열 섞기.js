function solution(str1, str2) {
    return Array.from(str1).map((item, i) => item + str2[i]).join('');
}
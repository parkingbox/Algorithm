function solution(my_string) {
const strArr = [];

for (let i = 0; i < my_string.length; i++) {
  strArr.push(my_string.slice(i));
}

return strArr.sort();
}
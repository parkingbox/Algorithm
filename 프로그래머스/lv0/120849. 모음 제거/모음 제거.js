function solution(my_string) {
  const str = 'aeiou'
    let newString = my_string.split('').filter((x)=>(!str.includes(x))).join('')   
    return newString;
}
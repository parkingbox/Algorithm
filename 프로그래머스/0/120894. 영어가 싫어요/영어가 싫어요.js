function solution(numbers) {
    const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    num.forEach((item, index) => {
        numbers = numbers.split(item).join(index);
    });
    
    return parseInt(numbers)
}
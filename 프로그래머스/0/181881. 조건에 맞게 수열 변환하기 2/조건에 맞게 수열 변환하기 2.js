function solution(arr) {
    let count = 0;
    let prevArr = [...arr];
    
    while (true) {
        let newArr = prevArr.map(num => {
            if (num >= 50 && num % 2 === 0) {
                return num / 2;
            } else if (num < 50 && num % 2 === 1) {
                return num * 2 + 1;
            }
            return num;
        });
        
        if (newArr.every((num, index) => num === prevArr[index])) {
            break;
        }
        
        prevArr = newArr;
        count++;
    }
    
    return count;
}
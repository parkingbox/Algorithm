function solution(code) {
    let mode = 0;

    const answer = [...code].reduce((acc, cur, i) => {
        if (cur === '1') {
            mode = 1 - mode;
        } else if ((mode === 0 && i % 2 === 0) || (mode === 1 && i % 2 !== 0)) {
            acc += cur;
        }
        return acc;
    }, '');

    return answer.length > 0 ? answer : "EMPTY";
}
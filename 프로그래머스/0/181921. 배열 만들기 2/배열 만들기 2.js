function solution(l, r) {
    const answer = (num) => /^[05]+$/.test(num.toString());
    
    const result = Array.from({ length: r - l + 1 }, (_, i) => l + i)
                        .filter(answer);

    return result.length ? result : [-1];
}
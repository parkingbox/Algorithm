function solution(names) {
  const answer = [];
    while (names.length !== 0) { 
      answer.push(names.splice(0, 5)[0]);
    }
  return answer;
}
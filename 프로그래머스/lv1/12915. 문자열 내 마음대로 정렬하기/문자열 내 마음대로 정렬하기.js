      function solution(strings, n) {
        return strings.sort((a, b) => {
          let firstString = a[n];
          let secondString = b[n];
          if (firstString > secondString) {
            return 1
          } else if (firstString < secondString) {
            return -1
          } else {
            return (a > b) ? 1 : -1
          }
        });
      }
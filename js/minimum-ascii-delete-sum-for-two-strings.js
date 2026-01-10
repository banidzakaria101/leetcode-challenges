var minimumDeleteSum = function(s1, s2) {
  let m = s1.length, n = s2.length;
  let dp = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + s1.charCodeAt(i - 1);
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let sum1 = 0, sum2 = 0;
  for (let c of s1) sum1 += c.charCodeAt(0);
  for (let c of s2) sum2 += c.charCodeAt(0);

  return sum1 + sum2 - 2 * dp[m][n];
};
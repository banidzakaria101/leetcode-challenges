var maxProduct = function(root) {
  const MOD = 1e9 + 7;
  let totalSum = 0;
  let maxProd = 0;

  function getTotalSum(node) {
    if (!node) return 0;
    totalSum += node.val;
    getTotalSum(node.left);
    getTotalSum(node.right);
  }

  function dfs(node) {
    if (!node) return 0;

    let leftSum = dfs(node.left);
    let rightSum = dfs(node.right);

    let subtreeSum = leftSum + rightSum + node.val;

    let product = subtreeSum * (totalSum - subtreeSum);
    maxProd = Math.max(maxProd, product);

    return subtreeSum;
  }

  getTotalSum(root);
  dfs(root);

  return maxProd % MOD;
};

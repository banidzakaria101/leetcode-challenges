var subtreeWithAllDeepest = function(root) {

  function dfs(node) {
    if (!node) return [0, null];

    let [leftDepth, leftNode] = dfs(node.left);
    let [rightDepth, rightNode] = dfs(node.right);

    if (leftDepth > rightDepth) {
      return [leftDepth + 1, leftNode];
    }
    if (rightDepth > leftDepth) {
      return [rightDepth + 1, rightNode];
    }

    return [leftDepth + 1, node];
  }

  return dfs(root)[1];
};

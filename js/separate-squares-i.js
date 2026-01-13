var findLine = function(squares) {
  let total = 0;
  let minY = Infinity;
  let maxY = -Infinity;

  for (let [x, y, l] of squares) {
    total += l * l;
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y + l);
  }

  const target = total / 2;

  let low = minY;
  let high = maxY;

  for (let i = 0; i < 60; i++) { 
    const mid = (low + high) / 2;
    let areaBelow = 0;

    for (let [x, y, l] of squares) {
      const height = Math.min(Math.max(mid - y, 0), l);
      areaBelow += height * l;
    }

    if (areaBelow < target) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return low;
};

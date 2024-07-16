function topKFrequent(nums: number[], k: number): number[] {
  const countObj: Record<string, number> = {};
  nums.forEach((num) => {
    if (countObj[num]) countObj[num]++;
    else countObj[num] = 1;
  });

  return Object.entries(countObj)
    .sort(([x, a], [y, b]) => b - a)
    .slice(0, k)
    .map(([val, _]) => parseInt(val));
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

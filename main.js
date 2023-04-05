function MAX(nums) {
  return Math.max(...nums);
}

function MIN(nums) {
  return Math.min(...nums);
}

function AVE(nums) {
  let numbers = 0;
  for (let n = 0; n < nums.length; n++) {
    numbers += nums[n];
  }
  return numbers / nums.length;
}

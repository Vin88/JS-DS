function removeDuplicates(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i == nums.length) {
      result.push(nums[i]);
    } else if (nums[i + 1] != nums[i]) {
      result.push(nums[i]);
    }
  }
  console.log(result);
  return result.length;
}

removeDuplicates([1, 1, 2]);

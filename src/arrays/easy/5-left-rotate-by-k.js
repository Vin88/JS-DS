class Solution {
  rotateArray(nums, k) {
    let nLength = nums.length;
    let temp = new Array(nLength);
    let j = 0;
    for (let i = k; i < nLength; i++) {
      temp[j] = nums[i];
      j++;
    }

    for (let l = 0; l < k; l++) {
      temp[j] = nums[l];
      j++;
    }
    return temp;
  }
}

class OptimalSolution {
  nums = [];
  rotateArray(nums, k) {
    const l = nums.length;
    nums = this.reverse(0, k, nums);
    nums = this.reverse(k, l, nums);
    nums = this.reverse(0, l, nums);
    return nums;
  }

  reverse(start, end, nums) {
    const len = start + end;
    let i = start;
    while (i < len / 2) {
      const temp = nums[i];
      nums[i] = nums[len - i - 1];
      nums[len - i - 1] = temp;
      i++;
    }
    return nums;
  }
}

const sol = new Solution();
sol.rotateArray([1, 2, 3, 4, 5, 6], 2);

const optSol = new OptimalSolution();
optSol.rotateArray([1, 2, 3, 4, 5, 6], 2);

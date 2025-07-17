class MoveZeroesSolution {
  moveZeroes(nums) {
    let result = [];
    for (let i = 0; i < result.length; i++) {
      if (nums[i] >= 1) {
        result.push(nums[i]);
      }
    }

    for (let i = 0; i < result.length; i++) {
      if (!result[i]) {
        result.push(0);
      }
    }
    return result;
  }
}

class OptimalSolution {
  moveZeroes(nums) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        j = i;
        i = j + 1;
      }
      if (j && nums[i] != 0) {
        nums[j] = nums[i];
        nums[j] = 0;
        j = i;
      }
    }
    return nums;
  }
}

const sol = new MoveZeroesSolution();
console.log(sol.moveZeroes([1, 0, 2, 3, 4, 0, 5, 6]));

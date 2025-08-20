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
    let j = -1;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
        j = i;
        break;
      }
    }
    if (j == -1) return nums; 
    for (let i = j + 1; i < nums.length; i++) {
      if (nums[j] == 0 && nums[i] != 0) {
        nums[j] = nums[i];
        nums[i] = 0;
        j = j + 1;
      }
    }
    return nums;
  }
}

const data = [1, 0, 2, 3, 4, 0, 5, 6];
const sol = new MoveZeroesSolution();
console.log(sol.moveZeroes(data));
console.log("Brute force...")
console.log("Time Complexity: O(2N) --> O(N) + O(X) + O(N-X) ~ O(2*N)");
console.log("Space Complexity: O(1), No extra array is crated" );

const optimalSol = new OptimalSolution();
console.log(sol.moveZeroes(data));
console.log("Optimal solution...")
console.log("Time Complexity: O(N) --> O(N-J)+O(J)");
console.log("Space Complexity: O(1), No extra array is crated" );
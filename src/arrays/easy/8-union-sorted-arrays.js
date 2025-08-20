class UnionsortedArraSolution {
    unionArray(nums1, nums2) {
        const distinctNums1 = [];
        const distinctNums2 = [];
        for (let i = 0; i < nums1.length; i++) {
          if (nums1[i] !== nums1[i + 1]) {
            distinctNums1.push(nums1[i]);
          }
        }
        for (let i = 0; i < nums2.length; i++) {
          if (nums2[i] !== nums2[i + 1]) {
            distinctNums2.push(nums2[i]);
          }
        }
      
        let i = 0,
          j = 0,
          result = [];
        while (i < distinctNums1.length && j < distinctNums2.length) {
          if (distinctNums1[i] == distinctNums2[j]) {
            result.push(distinctNums1[i]);
            i++;
            j++;
          }
          if (distinctNums1[i] < distinctNums2[j]) {
            result.push(distinctNums1[i]);
            i++;
          } else if (distinctNums1[i] > distinctNums2[j]) {
            result.push(distinctNums2[j]);
            j++;
          }
        }
      
        for (; i < distinctNums1.length; i++) {
          result.push(distinctNums1[i]);
        }
        for (; j < distinctNums1.length; j++) {
          result.push(distinctNums2[j]);
        }
      
        return result;
    }

    // this is not giving sorted result, insertion order is maintained
    byMaps(nums1, nums2) {
        const data = new Map();
        const result = [];
        for (let i = 0; i < nums1.length; i++) {
            data.set(nums1[i], nums1[i])
          }

          for (let i = 0; i < nums2.length; i++) {
            data.set(nums2[i], nums2[i])
          }

          for(let [key, value] of data) {
            result.push(key)
          }
          return key;
    }

    // this is not giving sorted result, insertion order is maintained
    bySet(nums1, nums2) {
        const data = new Set();
        const result = [];
        for (let i = 0; i < nums1.length; i++) {
            data.add(nums1[i])
        }

        for (let i of nums2) {
            data.add(i)
        }

        return data.entries().next().value;
    }

    optimalSolution(nums1, nums2) {
      let i = 0,
        j = 0,
        result = new Set();
      while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
          result.add(nums1[i]);
          i++;
          j++;
        }
        if (nums1[i] < nums2[j]) {
          result.add(nums1[i]);
          i++;
        } else if (nums1[i] > nums2[j]) {
          result.add(nums2[j]);
          j++;
        }
      }
    
      for (; i < nums1.length; i++) {
        result.add(nums1[i]);
      }
      for (; j < nums2.length; j++) {
        result.add(nums2[j]);
      }
    
      return [...result];
  }

  optimalSolutionWithUsingSet(nums1, nums2) {
    let i = 0,
      j = 0,
      result = [];
    while (i < nums1.length && j < nums2.length) {
      const resultLength = result.length;
      if (nums1[i] == nums2[j]) {
        if (resultLength === 0 || result[resultLength - 1] != nums1[i]) {
          result.push(nums1[i]);
        }
        i++;
        j++;
      }
      if (nums1[i] < nums2[j]) {
        if (resultLength === 0 || result[resultLength - 1] != nums1[i]) {
          result.push(nums1[i]);
        }
        i++;
      } else if (nums1[i] > nums2[j]) {
        if (resultLength === 0 || result[resultLength - 1] != nums2[i]) {
          result.push(nums2[i]);
        }
        j++;
      }
    }
  
    for (; i < nums1.length; i++) {
      const resultLength = result.length;
      if (resultLength === 0 || result[resultLength - 1] != nums1[i]) {
        result.push(nums1[i]);
      }
    }
    for (; j < nums2.length; j++) {
      const resultLength = result.length;
      if (resultLength === 0 || result[resultLength - 1] != nums2[i]) {
        result.push(nums2[i]);
      }
    }
  
    return [...result];
  }
}

const data1 = [1, 2, 3, 3, 4, 5];
const data2 = [0, 1, 3, 4, 6];
const sol = new UnionsortedArraSolution();
console.log(sol.unionArray(data));
console.log("Brute force...")
console.log("Time Complexity: O(i)+o(j)+O(i)+O(j) --> O(2i+2j) ~ O(2(I+J))");
console.log("Space Complexity: O(i+j), No extra array is crated" );

console.log(sol.optimalSolution(data));
console.log("Optimal Solution...")
console.log("Time Complexity: O(I+J)");
console.log("Space Complexity: O(i+j), No extra array is crated" );
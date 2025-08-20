class MaxConsecutiveOneInArray {
    bruteForce(data) {
        let flag = 0;
        let result = 0;
        for (let i of data) {
            if (i) {
                flag++;
            } else {
                result = Math.max(flag,result);
                flag = 0;
            }
        }
        return result;
    }
}

const data = [1, 2, 3, 4, 5, 7];

const sol = new MaxConsecutiveOneInArray();
console.log(sol.bruteForce(data, 7));
console.log("Brute force...")
console.log("Time Complexity: O(N)");
console.log("Space Complexity: O(1)" );
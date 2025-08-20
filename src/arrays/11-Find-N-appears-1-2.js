class FindNoAppearsOnesInArray {
    bruteForce(data) {
        let resultObj = {};
        let result;
        if (data.length > 0) {
            for (let i of data) {
                if (!resultObj[i]) {
                    resultObj[i] = 1
                } else {
                    resultObj[i] = resultObj[i]+1
                }
            }

            for (let key of Object.keys(resultObj)) {
                if (resultObj[key] == 1) {
                    result = key;
                    return result;
                }
            }
        }

        return result;
    }

    usingHashing(data) {
        let maxElement;
        for (let i of data) {
            maxElement = Math.max(maxElement, i)
        }

        const hashArr = new Array(maxElement + 1).fill(0);
        for (let i= 0 ;i < data.length;i++) {
            hashArr[data[i]]++;
        }

        for(let i= 0 ; i <= hashArr.length;i++) {
            if (hashArr[i] == 1) {
                return i;
            }
        }
    }

    usingHashMap(data) {
        const hashMap = new Map()
        for (let i= 0 ;i < data.length;i++) {
            hashMap.set(data[i], (hashMap.get(data[i]) || 0) + 1);
        }

        for(let [key, count] of hashMap) {
            if (count == 1) {
                return key;
            }
        }
    }

    /**
     * Optimal approach using XOR
     */
    optimalSolution(data) {
        let result = 0
        for(let i of data) {
            result = result ^ i;
        }

        return result;
    }
}

const data = [1, 2,2,3,1,4,3];

const sol = new FindNoAppearsOnesInArray();
console.log(sol.bruteForce(data));
console.log("Brute force...")
console.log("Time Complexity: O(2N)");
console.log("Space Complexity: O(1)" );

console.log(sol.usingHashing(data));
console.log("Better Solution 1...")
console.log("Time Complexity: O(N) + O(N) + O(N)");
console.log("Space Complexity: O(maxElement + 1)" );

console.log(sol.usingHashMap(data));
console.log("Better Solution 1e...")
console.log("We are inserting N elements in the map data structure and insertion takes logM time(where M = size of the map). So this results in the first term O(N*logM). ")
console.log("Time Complexity: O(N*logM) + O(M)");
console.log("Space Complexity: O(maxElement + 1)" );


console.log(sol.optimalSolution(data));
console.log("Optimal Solution ...")
console.log("Time Complexity: O(N)");
console.log("Space Complexity: O(1)" );
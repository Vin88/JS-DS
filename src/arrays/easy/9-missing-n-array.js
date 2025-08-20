class FindMissingNInArray {
    findMissingNo(data, N) {
        for (let i = 0;i<N; i++) {
            if (data[i+1] - data[i] !== 1) {
                return i+2;
            }
        }
    }

    // Using the sum of given array
    summationSolution(data, N) {
        let totalN = (N*(N+1))/2;
        let totalData = 0;
        for (let i of data) {
            totalData += i
        }

        return totalN - totalData;
    }

    // XOR 
    // 1 ^ 1 -> 0
    // 2 ^ 2 -> 0
    // 1 ^ 0 -> 1
    // 1 ^ 2 -> 3
    // 2 ^ 3 -> 5
    XORSolution(data, N) {
        let xorN = 1;
        for (let i of data) {
            xorN ^= i;
        }

        let xorData = 1;
        for (let i = 1 ; i <= N ; i++) {
            xorData ^= i;
        }

        return xorN ^ xorData;
    }

    // Optimal Solution
    optimalSolution(data, N) {
        const additive = N % 2;
        
        let midPointer = Math.floor(N/2);
        console.log("mid", midPointer,data[midPointer - 1])
        if ( data[midPointer - 1] > midPointer) {
            let i = midPointer - 1;
            console.log("mid greate", i)
            while (i>= 0) {
                if (data[i] - data[i-1] != 1) {
                    return i+1
                }
                i --;
            }
        }

        if (midPointer == data[midPointer - 1]) {
           
            let i = midPointer - 1;
             console.log("mid correct", i)
            while (i<N) {
                if (data[i+1] - data[i] != 1) {
                    return i+2
                }
                i ++;
            }
        }
    }
}

const data = [1, 2, 3, 4, 5, 7];

const sol = new FindMissingNInArray();
console.log(sol.findMissingNo(data, 7));
console.log("Brute force...")
console.log("Time Complexity: O(N)");
console.log("Space Complexity: O(1)" );

console.log(sol.optimalSolution(data, data.length));
console.log("Optimal Solution...")
console.log("Time Complexity: O(N/2)");
console.log("Space Complexity: O(1)" );
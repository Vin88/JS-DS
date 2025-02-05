console.log("***** Brute force *****")
console.log ("Check from the end, if the previous is lesser than i");
console.log ("Time Complexity O(N Log N)")

function implBruteForce(sortedIp) {
    let result = new Set();
    for(let i of sortedIp){
        result.add(i);
    }
    let count = 0;
    for (let j in result.keys()) {
        count++;
    }
    console.log("Length---", result.size, count);
    return result;
}

console.log("***** Optimal solution *****")
console.log ("check if the current value should not be equal to previous");
console.log ("Time Complexity O(N)");

function implOptimalSolu(sortedIp) {
    let result = [sortedIp[0]];
    let resultIndex = 0;
    for (let i = 1 ; i < sortedIp.length;i++) {
        if (sortedIp[i] != result[resultIndex]) {
            resultIndex++;
            result[resultIndex] = sortedIp[i]
        }
    }
    console.log("Length---", result.length);
    return result;
}
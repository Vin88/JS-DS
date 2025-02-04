console.log('**************** \n');
console.log('Find second largest no in the array');

console.log("***** Brute force *****")
console.log (" Sort the array and take the second largest");
console.log ("Time Complexity O(n Log N + n)")

console.log("***** Better Way *****")
console.log (" 1, First find the  largest");
console.log (" 2, Again find the  largest but lesser than largest");
console.log ("Time Complexity O(2 N)")
function findSecondLargestBetter(ip) {
    let largest = -Infinity;
    let sLargest = -Infinity;
    for (let i = 0; i < ip.length;i++) {
        largest = Math.max(largest, ip[i])
    }
    for (let i = 0; i < ip.length;i++) {
        if (ip[i] > sLargest && ip[i] != largest) {
            sLargest = ip[i];
        }
    }
    return sLargest;
}


console.log("***** Optimal Solution *****")
console.log ("find largest, previous largest is second largest");
console.log ("Time Complexity O(N)")
function findSecondLargestOptimal(ip) {
    let largest = -Infinity;
    let sLargest = -Infinity;
    for (let i = 0; i < ip.length;i++) {
        if (ip[i] > largest) {
            sLargest = largest;
            largest = ip[i];
        } else if ((ip[i] != largest) && (ip[i] > sLargest)) {
            sLargest = ip[i];
        }
        largest = Math.max(largest, ip[i])
    }
    return sLargest;
}
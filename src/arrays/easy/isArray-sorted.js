console.log("***** Optimal *****")
console.log ("Check from the end, if the previous is lesser than i");
console.log ("Time Complexity O(N)")
function isArraySortedBF(ip) {
    let isSorted = true;
    for (let i = ip.length; i>= 0 ; i--) {
        if (i > 0 && ip[i] <= ip[i-1]) {
            isSorted = false;
        }
    }
    return isSorted;
}
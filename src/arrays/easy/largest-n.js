console.log('**************** \n');
console.log('Find largest no in the array');

console.log("***** Brute force *****");
console.log(" Sort the array and take the last element")
console.log("***** Optimal solution *****");
function findLargest(ip) {
    let largest = ip[0];
    for (let  i = 1; i < ip.length;i++) {
        if(ip[i] > largest) {
            largest = ip[i];
        }
    }
    return largest
}

console.log('\n **************** ');
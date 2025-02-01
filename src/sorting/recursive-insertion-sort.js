function implRecursiveInsertionSort(ip, i) {
    if (i == ip.length) return ip;
    let j = i;
    while (j>0 && ip[j-1] > ip[j]) {
        const temp = ip[j-1];
        ip[j-1] = ip[j];
        ip[j] = temp;
        j--;
    }
    return implRecursiveInsertionSort(ip, i+1);
}

console.log('**************** \n');
console.log('Insertion Sort');
console.log('Time complexity---O(n^2)');
const result = implRecursiveInsertionSort([45, 2, 6, 12, 9], 0);
console.log(result);
console.log('\n **************** ');
function implRecursiveBubbleSort(ip, ipLength) {
  let swapped = false;
  for (let i = 0; i < ipLength; i++) {
    if (ip[i] > ip[i + 1]) {
      swapped = true;
      const temp = ip[i];
      ip[i] = ip[i + 1];
      ip[i + 1] = temp;
    }
  }
  if (ipLength > 0 && swapped) {
    recursiveBubbleSort(ip, ipLength - 1);
  }
}

console.log('**************** \n');
console.log('Recursive Bubble Sort');
console.log('Time complexity Worst---O(n^2)/O(n)');
console.log('Time complexity Best(if the array is already sorted) ---O(n)');
const ip = [45, 2, 6, 12, 9];
const result = implRecursiveBubbleSort(ip, ip.length);
console.log(result);
console.log('\n **************** ');

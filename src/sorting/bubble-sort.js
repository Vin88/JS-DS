function implBubbleSort(inp) {
  for (let i = inp.length - 1; i >= 1; i--) {
    let isSwapped = false;
    for (let j = 0; j < i; j++) {
      if (inp[j] > inp[j + 1]) {
        console.log('greater', inp[j], inp[j + 1]);
        isSwapped = true;
        let temp = inp[j];
        inp[j] = inp[j + 1];
        inp[j + 1] = temp;
      }
    }
    if (!isSwapped) {
      break;
    }
  }
  return inp;
}
console.log('**************** \n');
console.log('Bubble Sort');
console.log('Time complexity Worst---O(n^2)/O(n)');
console.log('Time complexity Best(if the array is already sorted) ---O(n)');
const result = implBubbleSort([45, 2, 6, 12, 9]);
console.log(result);
console.log('\n **************** ');

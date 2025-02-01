function printSubsequence(ind, arr, sum, orgArr, finalSum) {
  if (ind >= orgArr.length) {
    if (sum == finalSum) {
      console.log(arr);
    }
    return;
  }
  arr.push(orgArr[ind]);
  sum = sum + orgArr[ind];
  printSubsequence(ind + 1, arr, sum, orgArr, finalSum);
  arr.pop();
  sum = sum - orgArr[ind];
  printSubsequence(ind + 1, arr, sum, orgArr, finalSum);
}

printSubsequence(0, [], 0, [3, 1, 2], 2);

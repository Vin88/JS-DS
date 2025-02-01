function printSubsequence(ind, arr, orgArr) {
  if (ind >= orgArr.length) {
    console.log(arr);
    return;
  }
  arr.push(orgArr[ind]);
  printSubsequence(ind + 1, arr, orgArr);
  arr.pop();
  printSubsequence(ind + 1, arr, orgArr);
}

printSubsequence(0, [], [3, 1, 2]);

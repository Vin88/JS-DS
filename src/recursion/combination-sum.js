function printCombinationSum(ind, arr, orgArr, target) {
  if (ind >= orgArr.length) {
    if (target == 0) {
      console.log(arr);
    }
    return;
  }

  if (orgArr[ind] <= target) {
    arr.push(orgArr[ind]);
    printCombinationSum(ind, arr, orgArr, target - orgArr[ind]);
    arr.pop();
  }
  printCombinationSum(ind + 1, arr, orgArr, target);
}

printCombinationSum(0, [], [2, 3, 6, 7], 7);

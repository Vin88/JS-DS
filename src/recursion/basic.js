// Print name n times through recursion
function printName(i, n) {
  while (i <= n) {
    console.log('Hi Vin....', i);
    i++;
    printName(i);
  }
}
//printName(1, 5);

// Print name N-1 through recursion
function printNTo1(n) {
  if (n < 1) {
    return;
  }
  console.log(n);
  printNTo1(n - 1);
}
//printNTo1(10);

// Recursion through back tracking
function print1ToNBackTracking(n) {
  if (n < 1) {
    return;
  }
  print1ToNBackTracking(n - 1);
  console.log(n);
}
print1ToNBackTracking(10);

//Funcitonal Recursion factorial
function functionalRecursive(n) {
  if (n == 1) {
    return n;
  }
  return n * functionalRecursive(n - 1);
}
console.log('**** Factorial of ', 3, '*****');
console.log(functionalRecursive(5));

// Functional recursive palindrome
function functionPalindrome(n, text) {
  if (n >= text.length / 2) return true;
  if (text[n] != text[text.length - 1 - n]) return false;
  return functionPalindrome(n + 1, text);
}

console.log('**** Palindrome *****');
console.log(functionPalindrome(0, 'maddam'));

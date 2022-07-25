const a = 1, b = 4;
const N = 9;
const findNthTerm = (first, second, num) => {
   const diff = second - first;
   const fact = (num - 1) * diff;
   const term = first + fact;
   return term;
};
console.log(findNthTerm(a, b, N));
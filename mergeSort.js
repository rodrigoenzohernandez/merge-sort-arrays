/**
 * Receives two sorted arrays and returns one merge and sorted array. Complexity O(n)
 * @param {array} A sorted array
 * @param {array} B sorted array
 * @returns {array}
 */

function merge(A, B) {
  let sortedArray = [];
  let indexA = 0;
  let indexB = 0;

  //iterate until A or B has no elements
  while (indexA != A.length && indexB != B.length) {
    let nextElement;

    if (A[indexA] < B[indexB]) {
      nextElement = A[indexA];
      indexA++;
    } else {
      nextElement = B[indexB];
      indexB++;
    }

    sortedArray.push(nextElement);
  }

  //concat to sortedArray the remaining elements
  let unmergedElements = [];
  if (A.length != indexA) unmergedElements = A.slice(indexA, A.length);
  if (B.length != indexB) unmergedElements = B.slice(indexB, B.length);

  sortedArray = sortedArray.concat(unmergedElements);

  return sortedArray;
}

console.log(merge([1, 2, 3, 4], [2, 3, 5, 7, 8, 9])); //output --> [1, 2, 2, 3, 3, 4, 5, 7, 8, 9]
console.log(merge([1, 2, 3, 4], [2, 3])); //output --> [ 1, 2, 2, 3, 3, 4 ]
console.log(merge([4], [2, 3])); //output --> [ 2, 3, 4 ]

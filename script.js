// pop: Removes the last element from an array and returns that value. If the array is empty, it returns undefined.
let myArray = [1, 2, 3, 4, 5];
let poppedValue = myArray.pop();
console.log("pop:", myArray, "Popped Value:", poppedValue);
// console output is pop[1,2,3,4] and the popped element is [5]

// push: Adds one or more elements to the end of an array and returns the new length of the array.
myArray.push(6, 7);
console.log("push:", myArray);
// console output will be push: [1, 2, 3, 4, 6, 7]

// shift: Removes the first element from an array and returns that element.
let shiftedElement = myArray.shift();
console.log("shift:", myArray, "Shifted Element:", shiftedElement);
// console output will be shift : [2, ,3, 4, 5, 6, 7] shifted element is [1]

// unshift: Adds one or more elements to the beginning of an array and returns the new length of the array.
myArray.unshift(-2, -1, 0);
console.log("unshift:", myArray);
// console output will be shift: [2, 3, 4, 6, 7] Shifted Element: 1

// slice: Returns a shallow copy of a portion of an array into a new array object.
let slicedArray = myArray.slice(2, 5);
console.log("slice:", myArray, "Sliced Array:", slicedArray);
// console output will be slice: [-2, -1, 0, 2, 3, 4, 6, 7] Sliced Array: [0, 2, 3]

// forEach: Executes a provided function once for each array element.
myArray.forEach((element) => {
  console.log(element);
});

// console output 
// -2
// -1
// 0
// 2
// 3
// 4
// 6
// 7

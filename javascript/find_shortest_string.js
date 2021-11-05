function findShortestString(arr) {
  // let shortest = arr[0]
  
  // for (i = 0; i < arr.length; i++) {
  //   if (arr[i].length < shortest.length) {
  //     return shortest = arr[i] 
  //   } 
  // }

  // return shortest

  return arr.reduce((previous, current) => 
    current.length < previous.length ? current : previous
  )
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  console.log("");

  console.log("Expecting: ??")
  console.log("=>", findShortestString([""]))

  // BENCHMARK HERE

//   store the current time in a variable called start time

// loop 1000 times:
//   execute the method using a small input, e.g. three items if input is an Array
//   execute the method using a larger input, e.g. 100 items if input is an Array

// average runtime = (current time - start time) / 2000

const startTime = Date.now();

for (let i = 0; i < 1000; ++i) {
  findShortestString(['flower', 'juniper', 'lily', 'dadelion']);
}

const avgTime = (Date.now() - startTime) / 1000;
console.log(avgTime);
}



module.exports = findShortestString;

// Please add your pseudocode to this file
// Create a variable to hold lowest array element in state.
// Loop through each element in the array, counting the chars in each. Save the total
// in a variable that gets replaced with the new total if it is less than the current total.
// After looping through array, return the variable. 

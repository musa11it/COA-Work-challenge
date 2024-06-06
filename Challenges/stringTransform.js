// Below is the answer to the first challenge

function hasContiguousSubarraySum(arr, target) {
  // Initialize pointers and current sum
  
  let start = 0;
  let currentSum = 0;

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
  
  // Add current element to current sum
  
   currentSum += arr[i];


  
    
  // Shrink subarray if current sum exceeds target
    
  while (currentSum > target) {
      currentSum -= arr[start];
      start++;
    }

  // Check if current sum equals target
  
  if (currentSum === target) {
      return true;
    }
  }

  return false;
}

//Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 12;

if (hasContiguousSubarraySum(arr, target)) {
  console.log("Yes, a contiguous subarray exists that sums up to", target);
} else {
  console.log("No, such a subarray does not exist");
}
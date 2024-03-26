var twoSum = function(numbers, target) {
    //the array is 1 indexed
    // array is sorted in ascending - from smallest to biggest
    // set a left pointer to the first element
    let left = 1;
    // set a right pointer to the last element
    let right = numbers.length;

    //Loop through the array, check if the left and right add to target
    while(numbers[left - 1] + numbers[right - 1] !== target){
        //sum is less than the target, increase the left pointer
        if(numbers[left - 1] + numbers[right - 1] < target){
            left++
        }else{
            right--
        }
    }
    console.log([left, right]);
};

twoSum([2,7,11,15], 9);
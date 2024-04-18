const twoSum = function(nums, target) {

    /*for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; i++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }*/

    //TWO POINTER Approach 

    //first we sort the array
    let sortedArr = nums.slice().sort((a,b) => a - b);

    let left = 0;
    let right = nums.length - 1;
    let num1 = 0, num2 = 0;

    //start the two pointer technique , finish when they meet
    while(left < right){
        //create the sum
        let sum = sortedArr[left] + sortedArr[right];

        if(sum < target){
            left++
        }else if( sum > target){
            right--
        }else{
            num1 = sortedArr[left];
            num2 = sortedArr[right];
            break;
        }
    }

    let result = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == num1) result[0] = i;
        if(nums[i] == num2) result[1] = i;
    }
    console.log(result);
}

twoSum([2,7,11,15], 9)
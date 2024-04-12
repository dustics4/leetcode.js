function threeSum(nums, target){
    let result = [];

    nums.sort((a,b) =>  a - b);

    for(let i = 0; i < nums.length - 2; i++){
        if( i > 0 && nums[i] === nums[i - 1]) continue; //checks if current element i is a duplicate of the previous element, if it is skips to the next iteration using continue
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === target){
                result.push([nums[i], nums[left], nums[right]]);
                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right -1]) right--;
                left++;
                right--;
            }else if (sum < target){
                left++
            }else{
                right--
            }

        }

    }
    console.log(result);
}

threeSum([-1,0,1,2,-1,-4], 0);;
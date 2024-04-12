function threeSum(nums, target){
    let result = [];

    nums.sort((a,b) =>  a - b);

    for(let i = 0; i < nums.length - 2; i++){
        if( i > 0 && nums[i] === nums[i - 1]) continue; //checks if current element i is a duplicate of the previous element, if it is skips to the next iteration using continue
        

    }

}

threeSum([-1,0,1,2,-1,-4], 0);;
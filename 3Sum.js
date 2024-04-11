function threeSum(nums, target){
    let result = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; nums.length; i++){
            for(let k = j + 1; nums.length; i++){
                if(nums[i] + nums[j] + nums[k] === target){
                    result.push(nums[i],nums[j], nums[k]);
                }
            }
        }
    }

    console.log(result)
}

threeSum([-1,0,1,2,-1,-4], 0);;
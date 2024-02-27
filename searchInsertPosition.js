function searchInsert(nums, target){
    let l = 0;
    let r = nums.length - 1;

    while (l <= r){
        let mid = (l + r) / 2;
        if(nums[mid] < target){
            l = mid + 1;
        }else if(nums[mid] > target){
            r = mid - 1;
        }else{
            return mid
        }
    }
    return l;
}

searchInsert([1,3,5,6], 5);

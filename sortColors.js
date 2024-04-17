const sortColors = nums => {
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;

    while(mid <= end){
        if(nums[mid] === 0){
            swap(nums, start , mid)
            mid++
            start++
        }else if(nums[mid] === 2){
            swap(nums, mid , end);
            end--
        }else{
            mid++;
        }
    }

    console.log(nums)
}
const swap = (arr, a, b ) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

sortColors([0,1,0,1,2,2])
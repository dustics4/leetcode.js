const sortColors = nums => {
    let i = 0;

    for(let j = 0; j < nums.length; j++){
        if(nums[j] === 0){
            swap(nums, i , j);
            i++;
        }
    }

    let k = i;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] === 1){
            swap(nums, j , k);
            k++
        }
    }

}
const swap = (arr, a , b) => [arr[a], arr[b] = [arr[b] , arr[a]]];

sortColors([2,0,2,1,1,0]);


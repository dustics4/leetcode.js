const sortColors = nums => {

    //initialize the start, mid and end pointers
    let start = 0;
    let mid = 0;
    let end = nums.length - 1;

    //initiate the 2 pointer technique. loop ends when they meet
    while(mid <= end){
        //if the mid pointer is = 0 , we swap the start index and the mid index pointer
        //we then move the pointers 1 index forward
        if(nums[mid] === 0){
            swap(nums, start , mid)
            mid++
            start++
        //if the mid pointer has hit number 2, we swap the mid index number with the end index number
        }else if(nums[mid] === 2){
            swap(nums, mid , end);
            //the end pointer then goes down 1 index
            end--
        }else{
            //if we hit on 1 number the start index stays, however the mid pointer moves 1 place
            mid++;
        }
    }

    console.log(nums)
}

//swap function
const swap = (arr, a, b ) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

sortColors([0,1,0,1,2,2])
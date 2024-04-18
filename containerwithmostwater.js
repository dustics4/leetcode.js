const maxArea = function(height){
    //set pointers
    let left = 0;
    let right = height.length - 1;
    //set temporary variable for maxArea
    let maxArea = 0;

    //start the two pointer technique
    while(left < right){
        //calculate the area of the container 
        let area = Math.min(height[left],height[right]) * (right - left);

        //maxArea will be the largest area
        maxArea = Math.max(area,maxArea);

        //if the height left is smaller than height right, move left pointer 1 space forward else move right pointer 1 index back in the array
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }

    console.log(maxArea);
}

maxArea([1,8,6,2,5,4,8,3,7]);
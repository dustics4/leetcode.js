var maxSlidingWindow = function(nums, k) {
    let queue = []; //stores the indices
    let res = [];

    //at every window check the max num within the window
    //when you know the max num within the window e.g 3
    //push into temporary sum or array
    // make sure to remove the old one when repeating and adding to new
    //repeat

    for(let i = 0; i < nums.length; i++){
        //Pop the last num in queue while its less than the new num to be added.
        while(queue.length > 0 && queue[queue.length - 1] < nums[i]){
            queue.pop();
        }
        queue.push(nums[i]);

        //if we have checked at least k elements, start pushing to resolution
        if( i >= k - 1){
            //Only push the largest num in queue which will always be the first num
            res.push(queue[0]);
            //move left part of the window over by 1
            //index to be dequeued will be i - k + 1
            // If queue[0] matches the num to be dequeued, dequeue it
            const dequeueIndex = i - k + 1;
            if(queue[0] === nums[i - k + 1]){
                queue.shift();
            }
        }
    }
    console.log(res);

};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
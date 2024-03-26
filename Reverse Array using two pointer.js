let reverseArray = (arr) => {
    let i = 0; //start of index of array
    let j = arr.length - 1; //end index of array

    //condition has to meet for while loop to start
    // i is less than j , run the code
    while(i < j){
        let temp = arr[i];
        arr[i++] = arr[j];
        arr[j--] = temp;
    }
    console.log(arr);
}

const arr = ["h", "e", "l", "l", "o"];

reverseArray(arr)


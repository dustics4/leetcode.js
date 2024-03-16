var countGoodSubstrings = function(s) {
    //create a variable of size 3 for the window
    // create left and right pointer
    //slide the window, start from index 0.
    //move the right pointer to the right of the window
    //update the temporary string
    //left pointer to remove the previous character so that we stay within the 3 size of the window
    // keep repeating until we reach result
    //for each temporary string , we check if it has duplicates
    //if it doesn't have duplicates we would update the final string which would be the result

    let count = 0;
    let stringLength = s.length;

    // Iterate over each character in the string, stopping 2 characters before the end.
    for(let i = 0; i < stringLength - 2; i++){
        let char1 = s.charAt(i); 
        let char2 = s.charAt(i + 1);
        let char3 = s.charAt(i + 2);

        if(char1 !== char2 && char1 !== char3 && char2 !== char3){
            count++;
        }
    }

    console.log(count);

};

countGoodSubstrings("xyzzaz");
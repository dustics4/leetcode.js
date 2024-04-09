const backspaceCompare = function (s,t) {
    //return true if they are both equal
    //when you hit character "#" , it removes the one from left
    //after removing
    //check if new s === t
    //if yes return true , else false

    let i = s.length - 1;
    let j = t.length - 1;
    let sSkipCount = 0;
    let tSkipCount = 0;

    while(i >= 0 || j >= 0){
        if(s[i] === '#'){
            //increase our skip count, which will be used later
            sSkipCount++
            //decrease the pointer by 1, get closer to the start of the string
            i--;
        }else if(sSkipCount > 0 && i >=0){
            sSkipCount--;
            i--;
        }else if(t[j] === '#'){
            tSkipCount++;
            j--;  
        }else if(tSkipCount > 0 && i >=0){
            tSkipCount--;
            j--;
        }else if(s[i] !== t[j]){
           return false ;
        }else{
            i--;
            j--;
        }
    }

    return true;
}

backspaceCompare("ab#c", "ad#c");
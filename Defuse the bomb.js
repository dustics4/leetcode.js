var decrypt = function(code, k) {
    
    let codeLength = code.length;

    if(k === 0){
        return new Array(codeLength).fill(0);
    }

    //Detirmine the direct of the sum based on the sign of K
    let isNegativeK = k < 0;
    if(isNegativeK){
        k = -k; //Make K positive for easier calculations
    }

    //Create a map to store the sum of elements at each index for prefix and suffix
    let sumMap = new Map();

    let prefixSum = 0;
    let suffixSum = 0;

    for(let i = 1; i <= k; i++){
        prefixSum += code[codeLength - i];
        suffixSum += code[i % codeLength];
    }

    //store initial sums in map
    sumMap.set(0, [prefixSum, suffixSum]);

    //calculate and store the prefix and suffix sums for each element
    for(let i = 1; i < codeLength; i++){
        let [previousPrefix, previousSuffix] = sumMap.get(i - 1);

        previousPrefix -= code[(codeLength - k - 1 + i) % codeLength];
        previousPrefix += code[(i - 1) % codeLength];

        previousSuffix -= code[i % codeLength];
        previousSuffix += code[(i + k) % codeLength];

        sumMap.set(i, [previousPrefix, previousSuffix]);
    }

    return code.map((_, index) => sumMap.get(index)[isNegativeK ? 0 : 1])
};

decrypt([5,7,1,4], 3);
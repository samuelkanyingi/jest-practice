function analyzeArray(arr) {
   
    let result ={}
    let sum=0;
    let avg;
    for(let i = 0;i<=arr.length;i++){
        sum+=i
        
    }//end of avg loop
    avg = Math.round(sum / arr.length);

    let min = arr[0];
    for(let i=1;i<arr.length;i++){
        if (min>arr[i]) 
            min= arr[i]
    } // end of min loop
    console.log(min);
    let max = arr[0];
    for(let i=1; i<arr.length;i++){
        if (max < arr[i]) 
            max = arr[i]
    }
    console.log("the max is " + max);
    let length = arr.length;
    return {avg, min, max, length}
}

module.exports=analyzeArray;
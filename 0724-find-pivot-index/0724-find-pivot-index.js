var pivotIndex = function(nums) {
    for(let i=0;i<nums.length;i++){
        let leftSum = nums.slice(0,i).reduce((acc,val)=> acc+=val,0)
        let rightSum = nums.slice(i+1).reduce((acc,val)=> acc+=val,0)
        if(leftSum == rightSum){
            return i
        }
    }
    return -1
};
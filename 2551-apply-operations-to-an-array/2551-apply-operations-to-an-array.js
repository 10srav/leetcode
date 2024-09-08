function applyOperations(nums){
    for(let i = 0;i<nums.length-1;i++){
        if(nums[i]===nums[i+1]){
            nums[i]*=2;
            nums[i+1]=0;

        }
    }
    return nums.filter(x=>x!==0).concat(nums.filter(x=>x===0));
}
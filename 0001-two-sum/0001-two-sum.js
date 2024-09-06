
var twoSum = function(nums, target) {
    const numberToindex={};
    for(i=0;i<nums.length;i++){
        const numberNeeded=target-nums[i];
        if(numberToindex[numberNeeded]!==undefined){
            return[i,numberToindex[numberNeeded]];
            
        }
        numberToindex[nums[i]]=i;
    }
    
};
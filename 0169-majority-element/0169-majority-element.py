class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dic ={}
        for i in range(len(nums)):
            dic[nums[i]]=dic.get(nums[i],0) +1
        res = next((k for k, v in dic.items() if v == max(dic.values())))
        return res
        
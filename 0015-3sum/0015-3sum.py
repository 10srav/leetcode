class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result=set()
        for i in range(len(nums)-2):
            fNum=nums[i]
            j=i+1
            k=len(nums)-1
            while j<k:
                sNum=nums[j]
                tNum=nums[k]
                summ=fNum+sNum+tNum
                if summ>0:
                    k-=1
                elif summ<0:
                    j+=1
                else:
                    result.add((fNum,sNum,tNum))
                    j+=1
                    k-=1
        return list(result)
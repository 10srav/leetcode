class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = defaultdict(list)
        for word in strs:
            words = ''.join(sorted(word))
            map[words].append(word)
        
        return list(map.values())

        
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        p, t = 0, deque(t)
        while p < len(s) and t: 
            if s[p] == t.popleft(): p += 1
        return p == len(s)
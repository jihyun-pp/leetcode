// isomorphic : 동형대응, 1:1 대응인지 
const isIsomorphic = function(s, t) {
    var dict = {};
    for(let i = 0; i < s.length; i++){
        if(dict.hasOwnProperty(s[i]) && dict[s[i]] === t[i]) 
            continue;
        else if(!dict.hasOwnProperty(s[i]) && !Object.values(dict).includes(t[i]))
            dict[s[i]] = t[i];
        else
            return false;
    }
    return true;
};
function isSymmetric(x){
    let str = x.toString();
    let n = str.length;
    if(n%2!==0) return false;
    let half =n/2;
    return str.slice(0,half).split('').reduce((a,b)=>+a + +b) ===
    str.slice(half).split('').reduce((a,b)=>+a + +b);

}
 function countSymmetricIntegers(low,high){
    let count =0;
    for(let x=low;x<=high;x++)
    if(isSymmetric(x)) count++;
    return count;
 }
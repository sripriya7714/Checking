let str="ABCDABCGHIKL"
let obj={}
for(let i of str){
    obj[i]=(obj[i]||0)+1
}
console.log(obj);

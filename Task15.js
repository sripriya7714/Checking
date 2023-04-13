let str="AABBBCCCDCB"
let obj={}
for(let val of str){
    obj[val]=(obj[val]||0)+1

}
console.log(obj);
let value=Object.entries(obj);
console.log(value);

// let final=value.sort((a,b)=>(b[1]-a[1]))[1]
//  console.log(final);
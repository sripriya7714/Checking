let str="HHABCDEEFFGG"
let obj={}
for(let i of str){
    obj[i]=(obj[i]||0)+1
}
console.log(obj);
let value=Object.entries(obj)
console.log(value)
let final=value.sort((a,b)=>(a[1]-b[1]))
console.log(final);

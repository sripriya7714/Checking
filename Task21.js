let str='ABCDABX'
let str1=[];
let arr=[];
for(let i of str){
if(str1.indexOf(i)==-1){
    str1.push(i)
}
else{
    arr.push(i)
}
}
console.log(arr);
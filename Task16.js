let str="AAABCDB"
let arr=[];
for(let val of str){
if(arr.indexOf(val)==-1){
    arr.push(val)
}

}
console.log(arr);
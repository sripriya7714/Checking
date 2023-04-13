let str="hello life make it exciting life amazingthing sophisticated gfcyagydgydhgyhgyhgcyhasgcyhsagyhsagyas"
let str1=str.split(" ")
let temp;
let arr=[];
// console.log(str1[0].length)
for(let i of str1){
    for(let j of str1){
        if(i.length<j.length){
          temp=i;
          i=j;
          j=temp;
          
        }
    } arr.push(i)

    }
    console.log(arr)




// Input : a b c d e f 
// Output: a f c d e b 
let str="abcdef"
let str1=str.split('')
console.log(str1);
 for(let i in str1){
 if(str1[i]==="b"){
   str1[i]="f";
   }
   else if(str1[i]=="f"){
    str1[i]="b"
   }
}
console.log(str1)




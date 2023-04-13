
let str="ABCDEFabc";
let str1=""
for(let i in str){
     if((str[i]>="A")&&(str[i]<="Z")){
      str1+= str[i].toLowerCase();
    }
    if((str[i]>="a")&&(str[i]<="z")){
        console.log(str[i]);
         str1+=str[i].toUpperCase()
    }
}
console.log(str1);


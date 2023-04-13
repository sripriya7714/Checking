let str="ABAAABBBBBC"
let obj={}
let count=0;
for(let i=0;i<str.length;i++){
    for(let j=1;j<str.length;j++){
    if((str[i]==str[j]))
    {
   count++;
   obj[str[i]]=count
 }
    else{
       count=0;
    }
    }
   }
   console.log(obj);
 let value=Object.entries(obj)
 console.log(value)
 let final=value.sort((a,b)=>b[1]-a[1])[0]
 console.log(final);

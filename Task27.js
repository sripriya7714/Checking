let str="ABCDABCDEFGHIJKL"
let str1=[];
let str2=[];
for(let val of str){
if(str1.indexOf(val)===-1){
    str1.push(val)
}
}
console.log(str1)
// let str1=str.split("")
// var max=0;
// var result=[];


    // var letters = str.split("");
    // var max = 0;
    // var result = [];
    // for (var i = 0; i < letters.length; i++) {
    //     var start = i
    //     if (result.indexOf(letters[i]) === -1) {
    //         result.push(letters[i])
    //     } else {
    //         i = i - 1
    //         result = []
    //     }
    //     if (max === 0 || max < result.length) {
    //         max = result.length
    //     }
    // }
    // console.log(max) 

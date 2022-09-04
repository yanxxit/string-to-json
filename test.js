const stringToJSON = require("./index");
// boolean,number,string,date

console.log(stringToJSON("{'a':'a','b':1.2,'c':ture}"))
console.log("多一个逗号", stringToJSON("{a:'1',b:1,c:3,}"))
console.log(stringToJSON("{\"a\":'1','b':1,'c':3}"))
console.log(stringToJSON(`{"a":'1','b':1,'c':3}`))
console.log(stringToJSON("{'a':'1','b':1,'c':{ok:1,test:true,ttt:\"abc\"},dd:12,bb:11, 'd':{f:1,h:2}}"))
console.log(stringToJSON("{'a': { b: { c: { d: 1 } } } }"))
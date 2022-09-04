const jsonlib = require("./index");
// boolean,number,string,date

console.log(jsonlib.stringToJSON("{'a':'a','b':1.2,'c':ture}"))
console.log("多一个逗号", jsonlib.stringToJSON("{a:'1',b:1,c:3,}"))
console.log(jsonlib.stringToJSON("{\"a\":'1','b':1,'c':3}"))
console.log(jsonlib.stringToJSON(`{"a":'1','b':1,'c':3}`))
console.log(jsonlib.stringToJSON("{'a':'1','b':1,'c':{ok:1,test:true,ttt:\"abc\"},dd:12,bb:11, 'd':{f:1,h:2}}"))
console.log(jsonlib.stringToJSON("{'a': { b: { c: { d: 1 } } } }"))
// console.log("修复json数组",lib.stringToJSON("{'a': { b: [1,2,3]} }"));// 暂时不支持
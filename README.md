# str-to-json
对不规范的json数据进行解析

## 
Fixed the JSON string format


## use
```js
const jsonlib = require("str-to-json");

console.log(jsonlib.stringToJSON("{'a':'a','b':1.2,'c':ture}"))
```
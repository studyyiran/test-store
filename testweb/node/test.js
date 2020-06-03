const fs = require("fs");
const path = require("path");

// let template = fs.readFileSync("index.html", {
//     encoding: "utf-8",
// });
let template = '<html><body><div id="app"></div></body></html>'
// 2 split 切分
const arr =template.split('<div id="app">')
console.log(arr)
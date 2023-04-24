// const hello = "Hello World";
// console.log(hello);
const fs = require("fs");
const content = fs.readFileSync("./read.txt", "utf-8");
// console.log(content);

const inputTextContent = `this is what we know about lorems : ${content} \n createdOn : ${Date.now()}`;
fs.writeFileSync("write.txt", inputTextContent);
console.log("File has been written");

const fs = require("fs");

//One level of Async code
// fs.readFile("read.txt", "utf-8", (error, data) => {
//   console.log(data);
// });
//Multiple Level of Async
fs.readFile("readd.txt", "utf-8", (error, data1) => {
  //handling error
  if (error) return console.log("error", error);
  fs.readFile("read2.txt", "utf-8", (error, data2) => {
    console.log(data2);
    fs.writeFile("write.txt", `${data1} \n ${data2}`, "utf-8", (err) => {
      console.log(err);
    });
  });
});
console.log("Loading File...");

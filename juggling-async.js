const http = require("http");
const { url } = require("inspector");
let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

http.get(url, (res) => {
  res.setEncoding("utf8");
  res.on("data", data);
});

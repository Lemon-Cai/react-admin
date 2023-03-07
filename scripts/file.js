var fs = require("fs");
var path = require("path");

const dirPath = path.resolve(__dirname, '../', "tmp/test")

// tmp 目录必须存在
console.log("创建目录 /tmp/test/", path.resolve(__dirname, "./tmp"));

if (!fs.existsSync(dirPath)) {
  try {
    fs.mkdirSync(dirPath, {recursive: true});

  } catch (e) {
    console.log(e);
  }
}


fs.writeFile(path.join(dirPath, "input.txt"), '我是通 过fs.writeFile 写入文件的内容',  function(err) {
  if (err) {
      return console.error(err);
  }
  console.log("数据写入成功！");
  console.log("--------我是分割线-------------")
  console.log("读取写入的数据！");
  fs.readFile(path.join(dirPath, "input.txt"), function (err, data) {
     if (err) {
        return console.error(err);
     }
     console.log("异步读取文件数据: " + data.toString());
  });
});
'use strict'

// 第一次尝试写个node 脚本
// 使用 命令 npm run create 创建一个模板文件
const fs = require('fs')
const path = require('path')
const chalk = require('react-dev-utils/chalk');

// 获取参数
const args = process.argv.splice(2);
// 第一个参数是：需要在什么位置创建文件
const targetPath = args[0];

// 默认在src/Pages 下创建 文件
const defaultTargetPath = 'src/Pages'

const file = `${path.resolve('.')}\\scripts\\template.tpl`

const question = [
  {
    type: "input",
    message: "请输入你要新建的文件名（纯英文，大写开头，驼峰规则）：",
    name: "PageName",
  },
  !targetPath && {
    type: "input",
    message: "请输入你要新建的文件路径（以src开头）：",
    name: "PathName",
  }
].filter(Boolean)

/**
 * ejs 文件配置
 * 
    <% %>流程控制标签
    <%= %>输出标签（原文输出HTML标签）
    <%- %>输出标签（HTML会被浏览器解析）
    <%# %>注释标签
    % 对标记进行转义
 */

import('inquirer').then(res => {
  const inquirer = res.default
  inquirer.prompt(question).then((answer) => {
    console.log('========>>', answer)
    // 获取到模板文件
    const template = readFile(file)
    // 创建文件夹
    let dirPath
    if (targetPath)  {
      if (targetPath.startsWith('src')) {
        dirPath = path.resolve(__dirname, '../', `${targetPath}/${answer.PageName}`)
      } else {
        dirPath = path.resolve(__dirname, '../', `${defaultTargetPath}/${targetPath}/${answer.PageName}`)
      }
    } else {
      if (answer.PathName.startsWith('src')) {
        dirPath = path.resolve(__dirname, '../', `${answer.PathName}/${answer.PageName}`)
      } else {
        dirPath = path.resolve(__dirname, '../', `${defaultTargetPath}/${answer.PathName}/${answer.PageName}`)
      }
    }
    // recursive : 是否以递归的方式创建目录，默认为 false。
    createDir(dirPath, {recursive: true})
    // 创建文件
    let targetFilePath = path.join(dirPath, 'index.js');

    let content = template.replace(/{{PageName}}/g, answer.PageName); // target file content
    writeFile(targetFilePath, content)
  }).catch((err) => {
    
  });
})


// Read file and throw an error if it doesn't exist
function readFile(file, type) {
  if (!fs.existsSync(file)) {
    throw new Error(
      `You specified ${chalk.cyan(
        type
      )} in your env, but the file "${chalk.yellow(file)}" can't be found.`
    );
  }
  return fs.readFileSync(file, {encoding:'utf8', flag:'r'});
}

// 创建文件目录
function createDir (dirPath, options) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, options);  
    console.log('The ' + dirPath + ' folder has been created!');
  }
}

// 写入文件内容
function writeFile (targetFilePath, content) {
  // writeFile async
  if (!fs.existsSync(targetFilePath)) {
    fs.writeFile(targetFilePath, content, (err) => {
        if (err) throw err;
        console.log('The ' + targetFilePath + ' has been created!');
    });
  } else {
    console.error('error!\n' + targetFilePath + ' has already been existed!');
  }
}
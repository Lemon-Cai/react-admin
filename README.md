
## React + vite/webpack + mBox/Redux/umi + TypeScript + dumi

放弃npm，升级使用pnpm
` pnpm create react-app pnpm-cra --template typescript `

浅尝react + vite

初始化git
```
git init
```

添加仓库
```
git add remote origin https://github.com/CalvinP-Cai/react-admin.git
```

提交代码
```
git add .
git commit -m 'init'

git push --set-upstream origin master
```

本地与origin分支同步
```
git fetch -p
git remote prune origin
```

查看所有远程分支
```
git branch -r
```
查看所有本地和远程分支
```
git branch -a
```
删除本地分支
```
git branch -d 分支名称
```
切换分支，如果不存在则创建分支，如果分支不存在则把分支推送到远程
```
git checkout -b your-branch
git push origin your-branch:your-branch
```
创建空分支
```
git checkout --orphan your-branch-name
```


删除git项目下当前登录用户
```
git config --system --unset credential.helper
```

普通cra项目，如果一开始没有使用ts，后续添加ts步骤
  - ` npm i typescript --D `
  - ` npm i @types/node @types/react @types/react-dom @types/jest `
  - ` npx tsc --init ` 会在根目录创建 tsconfig.json
  - 修改 **tsconfig.json** 解析项目模块


项目中集成dumi
该项目初始化由最简单的cra创建，随着业务发展增加上项目组件说明。参考[dumi官网](https://d.umijs.org/guide/faq)
 - 安装配置文件 ` npm i dumi cross-env -D `
 - 增加启动命令
 - 创建 ` .dumirc.ts ` 文件，并增加配置

dumi踩过的坑
  - 创建了 dumi文件夹，在dumi文件夹下创建 docs，发现 无论怎么启动命令 ` npm run docs:start ` 或者 ` npx cross-env PORT=7788 APP_ROOT=dumi dumi dev ` 都无法打印 .dumirc.ts配置文件中打印的console
  - 在docs中新建的文件components/DateRange.md，写入一下内容，再次启动，始终提示 
  ` error - ./docs/components/DateRange.md?type=meta:20:19-33
    Module not found: Error: Can't resolve 'comp' in 'E:\Study\React\init\docs\components' `，
在官方GitHub上也提出这个[问题](https://github.com/umijs/dumi/issues/1534)，官方给出的回答，哎晦涩难懂
```
  # DateRange
    ```tsx
    import React, { useState } from 'react'
    import { DateRange } from 'comp'

    export default function Demo() {
      const [dateRange, setDateRange] = useState()
      // 筛选
      const handleOpenChange = () => {
        console.log(222222)
        onSearch && onSearch()
      }
      // 日期切换
      const handleDateChange = (dates, dateStr) => {
        console.log(11111)
        setDateRange(dates)
      }


      return (
        <DateRange 
          showShortcut
          showDisable
          disableProps = {{
            type: 'd',
            num: 20
          }}
          onOpenChange={handleOpenChange}
          // onDateChange={handleDateChange}
          onChange={handleDateChange}
          value={dateRange}
        />
      )
    }
    ```
```
  - 再次尝试，会不会是因为启动命令中` APP_ROOT=dumi ` 导致的于是把这句去掉，同时修改下配置文件，发现终端中打印的日志有了，但是启动报错如下
  ` error - ./.dumi/tmp/dumi/theme/ContextWrapper.tsx:15:0-88
  Module not found: Error: request argument is not a string
  wait  - [Webpack] Compiling... `

  - 第四次，启动报错日志如下，把配置文件全部注释掉，只留官方文档上给出的配置，加上别名的配置, （我的疏忽包名写错导致）
` node:internal/event_target:916
  process.nextTick(() => { throw err; });
                           ^
[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not he reason "Error: 加载失败: (-1)[E:\Study\React\init\src\components\index.js [".d.ts",".ts",".tsx","/index.d.ts","/index.ts","/index.tsx","",".js",".jsx","/inde
  code: 'ERR_UNHANDLED_REJECTION'
} `
  - 第n次, memo.module.rule('js')这块代码注释
  ```
    ...
    chainWebpack: (memo, { env, webpack, createCSSRule }) => {
      memo.plugins.delete('copy')
      // console.log('memo.resolve.alias', __dirname)
      memo.module
        .rule('js')
        .test(/\.(js|mjs|jsx|ts|tsx)$/)
        // .include.add(path.join(__dirname, '..', 'src'))
        .include.add(path.join(__dirname, 'src'))
        .end()
        .exclude.add(/node_modules/)
        .end()
        .use('babel-loader')
    },
    ...

  ```
  `
    error - ./.dumi/tmp/dumi/theme/ContextWrapper.tsx:15:0-88
    Module not found: Error: request argument is not a string
  `
   - dumi安装后通过prettier格式导致 import顺序自动排序
     在prettierrc中添加配置 
     ```
      pluginSearchDirs: false,
     ```


# pnpm安装依赖
- 全局安装
  ` pnpm install 模块 -w `
- 局部安装
  ` pnpm add 依赖 -D --filter @monorepo/web `
- 指定模块依赖另一个模块并指定版本号
  `pnpm install @monorepo/component@workspace --filter @monorepo/web`
- 不指定版本号
  ` pnpm install @monorepo/component@* --filter @monorepo/web `


TODO:

[ x ] 文档的发布

&#x2612; 项目目录的重构

&#10007; 在项目中添加husky，commitlint

[ x ]在项目中集成umi+dva（@reduxjs/toolkit）

[ x ]pnpm拆包一个版本

[ x ]lerna拆包一个版本


# 项目中集成husky

要在 pnpm 项目中配置 Husky 和 lint-staged，可以按照以下步骤操作：

1. 在项目根目录下运行以下命令安装 husky 和 lint-staged：

   ```
   pnpm install husky lint-staged --save-dev
   ```

2. 在项目根目录下创建`.husky`目录，并在该目录下创建`pre-commit`文件（没有后缀），并添加以下内容：

   ```
   #!/bin/sh
   . "$(dirname "$0")/_/husky.sh"
   ```

   这个文件是 Git 钩子的脚本，用于在提交代码前执行相关的命令。

3. 在项目根目录下创建`.lintstagedrc.js`文件，并添加以下内容：

   ```
   module.exports = {
     "packages/**/src/**/*.{js,jsx}": [
       "eslint --fix",
       "git add"
     ]
   };
   ```

   这个文件用于配置 lint-staged，指定需要在提交代码前执行的命令。上面的配置表示对`packages`目录下所有子项目中的`src`目录下的`.js`和`.jsx`文件进行 ESLint 校验，并自动修复错误。

4. 在每个子项目中，创建一个`.eslintrc.js`文件，并添加 ESLint 的配置。例如：

   ```
   module.exports = {
     env: {
       browser: true,
       es2021: true
     },
     extends: [
       'eslint:recommended',
       'plugin:react/recommended'
     ],
     parserOptions: {
       ecmaFeatures: {
         jsx: true
       },
       ecmaVersion: 12,
       sourceType: 'module'
     },
     plugins: [
       'react'
     ],
     rules: {
       'react/prop-types': 'off'
     }
   };
   ```

   这个文件用于配置 ESLint 规则，可以根据项目需要进行修改。

5. 最后，在项目根目录下运行以下命令设置 Git 钩子：

   ```
   pnpm run prepare
   ```

现在，当你在提交代码时，lint-staged 会自动对指定的文件进行 ESLint 校验，并自动修复错误。如果有错误无法自动修复，提交代码会失败，需要先修复错误后再次提交。

注意，上面的配置中允许有警告和错误。如果你想要禁止警告，可以将 ESLint 规则中的警告改为错误，例如将规则`"no-console": "warn"`改为`"no-console": "error"`。
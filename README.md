
## React + vite + mBox/Redux/umi + TypeScript + dumi
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

删除git项目下当前登录用户
```
git config --system --unset credential.helper
```

普通cra项目，如果一开始没有使用ts，后续添加ts步骤
  - ` npm i typescript --D `
  - ` npm i @types/node @types/react @types/react-dom @types/jest `
  - ` npx tsc --init ` 会在根目录创建 tsconfig.json
  - 修改 **tsconfig.json** 解析项目模块
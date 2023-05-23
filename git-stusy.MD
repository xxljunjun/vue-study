### 两种方式创建分支
+ 一、先在远程创建分支dev,再拉取切换
```
git fetch
git checkout dev
```
+ 二、先在本地创建分支，再推送
```
git checkout -b dev
git push origin dev:dev
```

### 流程
```
git add .
git commit -m '我就是学习git文件'
git push origin dev:dev
```


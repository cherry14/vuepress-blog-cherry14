###
 # @Page: 
 # @Version: 1.0.0
 # @Autor: xumeng
 # @Date: 2020-06-19 16:54:05
 # @LastEditors: Please set LastEditors
 # @LastEditTime: 2020-06-22 12:04:13
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy -s'

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f https://gitee.com/Xumenggit/blog.git master:gh-pages

cd -
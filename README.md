# business-project 前後端全步驟

## step1 create gitHub(choose One)
### 1.GitKraken
```
Init gitHub responsity
```
### 2.GitHub

```
echo "# business_project" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/john87413/business_project.git
git push -u origin master
```
---
## step2 create item
### 1.create three folder
```
admin:後台管理 (Vue create admin)
  用途:管理資料庫的資料，新增改查等等
  前置作業:
  1. npm install -g @vue/cli (已安裝過就不用)
  2. Vue create admin
  3. npm i element-ui -S (如有需要用element)
     3.1 引入
         import element from 'element-ui'
         import 'element-ui/lib/theme-chalk/index.css';
         Vue.use(element);
  4. vue add router

server:前後端串聯 (mkdir server)
  用途:包含所有node.js，提供給admin && web 的所有接口
  前置作業:
    1. mkdir server
    2. npm init -y --> 初始化package.json
    3. 創建入口index.js
    4. 自定義scripts --> "serve": "nodemon index.js"
    5. npm i -g nodemon

web:前端網頁設計 (Vue create web)
  用途:會被瀏覽器搜尋到的頁面，手機端或電腦端
  前置作業:
  1. npm install -g @vue/cli (已安裝過就不用)
  2. Vue create web
```

### 2.gitignore
```
不能被git上去的東西
1.node_modules
```
---

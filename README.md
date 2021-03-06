# business-project 前後端全步驟 // 記得增加nodemon 的dependency

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
    2. npm init -y --> 初始化package.json (-y 可省略問答快速初始化)
    3. 創建入口index.js
    4. 自定義scripts --> 
      "serve": "nodemon index.js",
      "start": "nodemon index.js" (heroku用)
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
## step3 前端工具樣式
### 1.sass-loader
```
  1.npm i -D sass sass-loader
  2.新增一個SCSS folder生出style.scss 還有 _variables.scss
  3.要用任何變量就可以直接這樣
    @import '../../assets/scss/variables.scss';
  4.在main.js improt style.scss
    import "./assets/scss/style.scss"
  5.記得每個樣式都要加點點!!!!!
```

### 2.樣式重製
```
  @import "./variables";

  全部的元素(*)
    1 .加個border-box
    2. 高亮消失(outline)

  html 定義
    1.找尋出現次數最多的字體大小(font-size)
  
  body 定義
    1.設margin 0
    2.設置行高
    3.設置常用字體
    4.可以順便設置background (看設計)

  a 定義
    1.更改默認顏色
    2.text-decoration: none (看情況)

  li 定義
    1.取消默認點點
    2.float: left(看情況)
    3.cursor: pointer(看情況)

  button 定義
    1.取消默認方框
    2.border-radius: 0.5rem;(看情況)
```

### 3.定義常用flex工具
```
  1.定義 display
  2.定義direction
  3.定義flex-grow
  4.定義出變量 jc && ai
  5.將變量做each 
```

### 4.定義常用margin & padding
```
  1.定義出變量 type direction size base-size
  2.size的定義就0.5加上去或更大
  3.將變量做each 定義出 .m-1 .mx-1 .mt-1
```

### 5.定義常用color
```
  1.定義出常用color
  2.將變量做each
```

### 6.定義常用font size && text align
```
  1.定義出常用font-size
  2.將變量做each
  3.each 出 text 的 靠左靠右或置中
```

### 7.定義額外常用樣式
```
  1.寬高 100%
  2.flex 要不要自動換行
  3.字體加粗
```

---
## step4 開始製作前端介面
### 1.更換logo
```
  1.將製作好的Logo 加入public 資料夾裡
  2.將原本的icon 程式碼換成
    <link rel ="shortcut icon" type="image/x-icon" href="./self-logo.png">
```

### 2.加入router
```
  1.vue add router
  2.將app.vue 改成 只有 <router-view/>
  2.創立main.vue (包含 header && routerView && footer)
    header && footer 正常是不會變的
  3.改router.js (自行查看)
    主要將main 加入並添加children 
    之後視情況加入其他path
```

### 3.製作header(這邊只做routerlink介紹)
```
  1.先入所需要的view(在view資料夾裡)
  2.在router.js做path添加(看要children 還是.....)
  3.在header 裡添加router-link
  4.用to="/" 之類的去更換router-view
  5.可以把title 和 menu 分開(程式碼優化)
```

### 4.製作home的swiper
```
  1.npm install vue-awesome-swiper --save
  2.import VueAwesomeSwiper from 'vue-awesome-swiper'
    import 'swiper/dist/css/swiper.css'
    Vue.use(VueAwesomeSwiper, /* { default global options } */)
  3.使用
  4.可以把swiper 和 menu 分開(程式碼優化)
```

### 4.製作home的news
```
  
```

### 5.製作home的drinks
```
  1.<a> 標籤若要當成容器 可以將font-size設為0
    就不會多出一塊
```

---
## router小重點
### 父子router
```
  1.父親不要加name (有時候 還不太確定)
  2.children Path 跟父親一樣時便可以視為默認路由
```
### 默認路由
```
  {
    path: '*', 
    redirect: '/'
  },
```

---
## SCSS小重點
### 每個樣式前面都要加點!!!!
```
  不加點點你會找bug找到死
```

---
## 手機端RWD小重點
### 直接更換html的font-size樣式
```
  @media all and (max-width: 500px) {
    html {
        font-size: 13px;(大小自行斟酌)
    }
  }
```

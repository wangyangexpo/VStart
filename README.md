# VUE 项目脚手架

## 怎么用

`vue create --preset direct:https://git.rajax.me/GITS/VS.git 【your-project】 --clone`

或者

`vue create --preset mrdream24/VS【your-project】`

## 目录结构
```
.
├── README.md
├── .env                    // 环境变量（prod）
├── .env.development        // 环境变量（dev）
├── .env.uat                // 环境变量（uat）
├── babel.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api                  //请求文件夹
│   ├── assets
│   ├── components           // 组件文件夹
│   ├── main.js
│   ├── plugins
│   ├── router.js
│   ├── store.js
│   ├── tools                // 工具函数文件夹
│   └── views                // 页面文件夹
└── vue.config.js
```

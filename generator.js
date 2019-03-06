module.exports = (api, options, rootOptions) => {
  // 安装一些基础公共库
  api.extendPackage({
    scripts: {
      "dev": 'vue-cli-service serve',
      "build:dev": "vue-cli-service build --mode development",
      "build:uat": "vue-cli-service build --mode uat"
    },
    dependencies: {
      "axios": "^0.18.0"
    },
    devDependencies: {
    }
  })

  // 公共基础目录和文件
  api.render('./template')
}

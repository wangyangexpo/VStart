module.exports = (api, options, rootOptions) => {
  // 安装一些基础公共库
  api.extendPackage({
    scripts: {
      dev: 'vue-cli-service serve',
      "build:dev": "vue-cli-service build --mode development",
      "build:uat": "vue-cli-service build --mode uat"
    },
    dependencies: {
      "axios": "^0.18.0"
    },
    devDependencies: {
    }
  });

  // 安装 vuex
  if (options.vuex) {
    api.extendPackage({
      dependencies: {
        vuex: '^3.0.1'
      }
    });

    api.render('./template/vuex');
  }

  // 公共基础目录和文件
  api.render('./template/default');

  // 配置文件  
  api.render({
    './.env': './template/_env',
    './.env.development': './template/_env_development',
    './.env.uat': './template/_env_uat',
    './src/api/index.js': './template/api/index.js',
    './src/tools/index.js': './template/tools/index.js',
    './public/index.html': './template/public/index.html'
  });
}

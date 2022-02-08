/*
 * @Author : vshow
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
 */

const path = require('path');

module.exports = {
  publicPath: '',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://www.ifigure.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/variables.scss", "doui-vue/dist/mixin.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        '@images': '@/assets/images',
        '@locales': '@/assets/locales',
        '@variables.scss': '@/styles/variables.scss'
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.svg$/)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        esModule: false,
        symbolId: 'icon-[name]'
      });
  }
};

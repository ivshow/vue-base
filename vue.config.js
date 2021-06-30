/*
 * @Author : jaydon
 * @Date   : 2020-09-26 12:09
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://g.huxiaodo.com
 */

const path = require('path');
const pxtrem = require('postcss-pxtrem');

module.exports = {
  publicPath: '',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: 'http://ifigure.natapp1.cc',
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
      postcss: {
        plugins: [
          pxtrem({
            viewportWidth: 375,
            unitPrecision: 2,
            minPixelValue: 1
          })
        ]
      },
      sass: {
        prependData: `@import "@/styles/variables.scss";`
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
  }
};

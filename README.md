### 以下内容自动全局导入，可直接使用

<hr/>

1. component: 文件名作为组件名，使用时以 v- 开头

```js
<v-nav-bar :title="$t('title')" @clickBack="onClickBack"></v-nav-bar>

<v-icon name="more"></v-icon>
```

2. vant:

```js
// 组件
<van-button type="primary">主要按钮</van-button>;

// api
this.$toast('提示文案');

...
```

3. vuex:

```js
// 读取
this.vuex_loading;

// 修改
this.$vuex('vuex_loading', true);
```

4. router: `页面必须为 index.vue`

```js
// 默认页面路由: 路径短杠(-)连接
1. 首页：home
2. 首页列表：home-list
3. ...

// 组件中自定义参数
export default {
  meta: {
    path: '自定义页面路径',
    title: '页面title',
    transition: true, // 默认为true
    ...
  },
}
```

5. api:

```js
this.$login();
this.$http.get();
...
```

6. util:

```js
// local-storage
this.$ls();

// dayjs
this.$dayjs();

// cookie
this.$cookie();

// event
this.$event.$on();
this.$event.$emit();

// lodash
this.$map();
this.$find();
this.$cloneDeep();
this.$$set();

// 自定义
this.$customUtil();

...
```

7. scss: 内置 class，变量注入

```css
.v-rela
.v-flex
.v-flex-1
.v-text-left
.v-font-10
.v-m-10
.v-p-10
...
```

```js
// js
this.$theme.black;

// scss
color: $black;
```

8. 自定义 directive:

```js
<component v-click-outside="onClickOutside"></component>
```

9. vue-styled-components:

```js
const Title = styled.div`
  color: ${props => props.color};
`;

<Title color="red"></Title>;
```

10. debug 模式:

```
http://localhost:8080/?debug=true
```

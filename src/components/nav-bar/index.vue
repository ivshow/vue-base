<!--
 * @Author : jaydon
 * @Date   : 2021-06-17 19:41
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <van-nav-bar v-bind="{ ...$attrs, ...$props }" left-arrow @click-left="onClickLeft">
    <template #right>
      <language-switcher></language-switcher>
    </template>
  </van-nav-bar>
</template>

<script>
export default {
  props: {
    leftText: {
      type: String,
      default: '返回'
    }
  },
  methods: {
    onClickLeft() {
      this.$listeners.clickBack ? this.$emit('clickBack') : this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .van-nav-bar__content {
  .van-nav-bar__text,
  .van-icon {
    color: #323233;
  }
}
</style>

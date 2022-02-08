<!--
 * @Author : vshow
 * @Date   : 2021-10-22 22:27
 * @WeChat : i-vshow
 * @Email  : vshow@dooomi.com
 * @Blog   : http://dooomi.com
-->

<template>
  <svg
    :class="`svg-icon icon-${name}`"
    :style="{
      fontSize: size + 'px'
    }"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: [String, Number]
  }
};
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>

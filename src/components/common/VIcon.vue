<template>
  <svg class="icon">
    <use :xlink:href="'icons/list.svg#' + icon" />
  </svg>
</template>

<script>
export default {
  name: 'VIcon',

  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
}
</style>
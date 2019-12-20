<template>
  <button
    class="button is-primary is-large"
    :disabled="disabled"
    @click="clickHandler"
  >
    <!--表記の指定-->
    <span class="btn-text">
      <slot></slot>
    </span>
    <!--Font Awesome Iconの指定-->
    <i
      class="btn-icon"
      :class="[iconType, 'fa-' + icon,]">
    </i>
  </button>
</template>

<script>
  export default {
    props: {
      disabled: Boolean,
      icon: String,
      iconType: String
    },
    methods: {
      /**
       * クリックイベントを親要素に渡す
       */
      clickHandler(e){
        if(this.disabled){
          return;
        }
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-icon{
    padding-left: 30px;
  }
</style>
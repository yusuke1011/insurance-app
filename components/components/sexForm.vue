<template>
  <div class="sex-form">
    <div class="sex-label">性別</div>
    <div class="sex-input">
      <MRadio 
        :options="options"
        name="sexForm"
        @change="updateValue"
        v-model="aa"
      ></MRadio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        aa: '',
        options: [
          {label: '男性', value: 0},
          {label: '女性', value: 1}
        ]
      }
    },
    methods: {
      updateValue(sexValue){
        this.$emit('change', sexValue ? '女性' : '男性')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sex-label {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #1c6596;
    text-align: left;
    padding-left: 20px;
      &::before {
        content: "-";
      }
      &::after {
        content: "-";
      }
  }
  .sex-input {
    height: 80px;
    display: flex;
    font-size: 22px;
    align-items: center;
  }
</style>
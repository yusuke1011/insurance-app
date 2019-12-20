<template>
  <div class="insurance-status-form">
    <div class="insurance-status-label">現在、生命保険に加入されていますか？</div>
    <div class="insurance-status-input">
      <MRadio 
        :options="options"
        name="sexForm"
        @change="updateValue"
      ></MRadio>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [
          {label: 'はい', value: 0},
          {label: 'いいえ', value: 1}
        ]
      }
    },
    methods: {
      updateValue(insuranceStatus){
        this.$emit('getValue', insuranceStatus ? '加入していない' : '加入している')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .insurance-status-label {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #1c6596;
    text-align: left;
    padding-left: 20px;
  }
  .insurance-status-input {
    height: 80px;
    display: flex;
    font-size: 22px;
    align-items: center;
    padding-left: 40px;
  }
</style>
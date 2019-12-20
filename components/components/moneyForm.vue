<template>
  <div class="money-form">
    <label>
      <div>月々の料金</div>
      <div>
        <MInput 
          type="text"
          name="money-form"
          @input="updateValue"
        ></MInput>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    methods: {
      updateValue(selectedYear){
        this.$emit('getValue', selectedYear)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .money-form {
    height: 55px;
    line-height: 55px;
    font-size: 22px;
    padding-right: 20px;
    label {
      display: flex;
      text-align: center;
      div {
        width: 200px;
      }
      div:nth-of-type(2){
        padding-top: 6px;
        width: 300px;
      }
    }
  }
</style>
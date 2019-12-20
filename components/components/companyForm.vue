<template>
  <div class="company-form">
    <label>
      <div>会社名</div>
      <div>
        <MInput 
          type="text"
          name="company-form"
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
  .company-form {
    height: 55px;
    line-height: 55px;
    font-size: 22px;
    padding-right: 20px;
    label {
      display: flex;
      text-align: center;
      div:first-of-type {
        width: 200px;
      }
      div:nth-of-type(2){
        padding-top: 6px;
        width: 300px;
      }
    }
  }
</style>
<template>
  <div class="month-form">
    <label>
      <MSelect 
        :options="monthChoice"
        name="monthForm"
        :default="defaultValue"
        @change="updateValue"
      ></MSelect>
      月
    </label>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        defaultValue: 1,
        monthChoice: [
          {label: '１', value: 1},
          {label: '２', value: 2},
          {label: '３', value: 3},
          {label: '４', value: 4},
          {label: '５', value: 5},
          {label: '６', value: 6},
          {label: '７', value: 7},
          {label: '８', value: 8},
          {label: '９', value: 9},
          {label: '１０', value: 10},
          {label: '１１', value: 11},
          {label: '１２', value: 12}
        ]
      }
    },
    methods: {
      updateValue(selectedMonth){
        this.$emit('getValue', selectedMonth)
      }
    },
    created() {
      this.$emit('getValue', this.defaultValue)
    }
  }
</script>

<style lang="scss" scoped>
  .month-form {
    height: 55px;
    line-height: 55px;
    font-size: 22px;
    padding-right: 20px;
  }
</style>
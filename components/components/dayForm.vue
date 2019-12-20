<template>
  <div class="day-form">
    <label>
      <MSelect 
        :options="dayChoice"
        name="dayForm"
        :default="defaultValue"
        @change="updateValue"
      ></MSelect>
      日
    </label>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        defaultValue: 1,
        dayChoice: [
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
          {label: '１２', value: 12},
          {label: '１３', value: 13},
          {label: '１４', value: 14},
          {label: '１５', value: 15},
          {label: '１６', value: 16},
          {label: '１７', value: 17},
          {label: '１８', value: 18},
          {label: '１９', value: 19},
          {label: '２０', value: 20},
          {label: '２１', value: 21},
          {label: '２２', value: 22},
          {label: '２３', value: 23},
          {label: '２４', value: 24},
          {label: '２５', value: 25},
          {label: '２６', value: 26},
          {label: '２７', value: 27},
          {label: '２８', value: 28},
          {label: '２９', value: 29},
          {label: '３０', value: 30},
          {label: '３１', value: 31}
        ]
      }
    },
    methods: {
      updateValue(selectedYear){
        this.$emit('getValue', selectedYear)
      }
    },
    created(){
      this.$emit('getValue', this.defaultValue)
    }
  }
</script>

<style lang="scss" scoped>
  .day-form {
    height: 55px;
    line-height: 55px;
    font-size: 22px;
    padding-right: 20px;
  }
</style>
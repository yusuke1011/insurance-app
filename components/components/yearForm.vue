<template>
  <div class="year-form">
    <label>
      <MSelect 
        :options="yearChoice"
        name="year-form"
        :default="defaultValue"
        @change="updateValue"
      ></MSelect>
      年
    </label>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        defaultValue: 1990
      }
    },
    computed: {
      //〇〇年の選択肢を生成する
      yearChoice(){
        const date = new Date()
        const nowYear = date.getFullYear()
        const yearChoice = []

        for(let year = 1949; year <= nowYear - 20; year++){
          yearChoice.push({
            label: year + '年（' + this.calcJapaneseYear(year) + '）',
            value: year
          })
        }
        return yearChoice
      }
    },
    methods: {
      //西暦から和暦へ変換する関数
      calcJapaneseYear(year){
        if (year < 1989){
          const convertedYear = year - 1925
          return '昭和' + convertedYear
        }
        else if (year < 2019){
          const convertedYear = year - 1988
          return '平成' + convertedYear
        }
        else {
          const convertedYear = year - 2018
          return '令和' + convertedYear 
        }
      },
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
  .year-form {
    height: 55px;
    line-height: 55px;
    font-size: 22px;
    padding-right: 20px;
  }
</style>
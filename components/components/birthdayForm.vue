<template>
  <div class="birthday-form">
    <div class="birthday-label">生年月日</div>
    <div class="birthday-input">
      <YearForm @getValue="getSelectedYear"></YearForm>
      <MonthForm @getValue="getSelectedMonth"></MonthForm>
      <DayForm @getValue="getSelectedDay"></DayForm>
    </div>
  </div>
</template>

<script>
  import YearForm from '~/components/components/yearForm'
  import MonthForm from '~/components/components/monthForm'
  import DayForm from '~/components/components/dayForm'

  export default {
    components: {
      YearForm,
      MonthForm,
      DayForm
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
      getSelectedYear(selectedYear){
        console.log(selectedYear)
      },
      getSelectedMonth(selectedMonth){
        console.log(selectedMonth)
      },
      getSelectedDay(selectedDay){
        console.log(selectedDay)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .birthday-form{
    padding-top: 20px;
  }
  .birthday-label {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    text-align: left;
    color: #1c6596;
    padding-left: 20px;
      &::before {
        content: "-";
      }
      &::after {
        content: "-";
      }
  }
  .birthday-input {
    height: 80px;
    display: flex;
    align-items: center;
  }
</style>
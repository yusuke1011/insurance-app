<template>
  <header id="header">
    <h1 class="title is-3">Sample App</h1>
      <ul class="header-list">
        <li>ログイン</li>
        <li>新規登録</li>
      </ul>
  </header>
</template>

<script>
  import SexForm from '~/components/components/sexForm'
  import BirthdayForm from '~/components/components/birthdayForm'

  export default {
    components: {
      SexForm,
      BirthdayForm
    },
    data() {
      return {
        selectedSex: ''
      }
    },
    methods: {
      getSelectedSex(selectedSex){
        this.selectedSex = selectedSex      
      },
      sendBasicData() {
        console.log(this.selectedSex)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #header {
    width: 100vw;
    height: 120px;
    background-color: rgb(243, 241, 241);
    border-bottom: solid 1px rgb(99, 99, 99);
    display: flex;
    justify-content: space-between;
    h1 {
      line-height: 120px;
      padding-left: 50px;
    }
  }
  .header-list{
    display: flex;
    justify-content: space-between;
    width: 220px;
    font-size: 20px;
    padding-top: 20px;
    padding-right: 20px;

    li:first-of-type{
      position: relative;
      &::after{
        content: '|';
        position: absolute;
        right: -22px;
        top: -1px;
        color: gray;
      }
    }
  }
</style>
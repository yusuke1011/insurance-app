<template>
  <footer id="footer">
    <div class="footer-top">
    </div>
    <div class="footer-bottom">
      <p class="copyright">Copyright©︎ 2019 Sample Inc. All rights reserved.</p>
    </div>
  </footer>
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
  #footer {
    width: 100vw;
  }
  .footer-top{
    height: 200px;
    background-color: #343a40
  }
  .footer-bottom {
    height: 70px;
    background-color: #212529;
    color: white;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .copyright {
    line-height: 70px;
  }
</style>
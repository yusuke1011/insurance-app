<template>
  <div>
    <div class="basic-form">
      <div class="basic-label">
        <div class="tag is-info">STEP1</div>
        <div><i class="fas fa-address-card"></i> お客様の情報を入力してください</div>
      </div>
      <div class="basic-input">
        <SexForm @change="getSelectedSex"></sexForm>
        <BirthdayForm></BirthdayForm>
      </div>
    </div>
    <MButton class="next-btn" icon="angle-right" iconType="fas" @click="next">次へ進む</MButton>
  </div>
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
      next() {
        console.log(this.selectedSex)
        this.$router.push('/question')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .basic-form {
    border: solid 1px rgb(0, 180, 180);
    border-radius: 5px;
    width: 80vw;
    max-width: 980px;
  }
  .basic-label {
    height: 60px;
    line-height: 60px;
    font-size: 25px;
    display: flex;
    background-color: rgba(0, 180, 180, 0.158);
    border-bottom: solid 1px rgb(0, 180, 180);
    div:first-of-type {
      position: absolute;
      width: 80px;
      height: 30px;
      font-size: 20px;
    }
    div:nth-of-type(2){
      width: 100%;
    }
  }
  .basic-input{
    padding: 20px;
  }
  .next-btn {
    margin-top: 40px;
  }
</style>
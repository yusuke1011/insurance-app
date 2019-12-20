<template>
  <div>
    <div class="question-form">
      <div class="question-label">
        <div class="tag is-info">STEP2</div>
        <div><i class="fas fa-chalkboard-teacher"></i> 以下にお答えください</div>
      </div>
      <div class="question-input">
        <InsuranceStatusForm @getValue="getInsuranceStatus"></InsuranceStatusForm>
        <transition name="fade">
          <InsuranceDetailsForm @getValue="getInsuranceDetails" v-if="isHaveInsurance()"></InsuranceDetailsForm>
        </transition>
        <transition name="fade">
          <SicknessStatusForm @getValue="getSicknessStatus" v-if="isNext"></SicknessStatusForm>
        </transition>
      </div>
    </div>
    <MButton class="back-btn" icon="angle-right" iconType="fas" @click="back()">前へ戻る</MButton>
    <MButton class="next-btn" icon="angle-right" iconType="fas" @click="next()">次へ進む</MButton>
  </div>
</template>

<script>
  import InsuranceStatusForm from '~/components/components/insuranceStatusForm'
  import InsuranceDetailsForm from '~/components/components/insuranceDetailsForm'
  import SicknessStatusForm from '~/components/components/sicknessStatusForm'

  export default {
    components: {
      InsuranceStatusForm,
      InsuranceDetailsForm,
      SicknessStatusForm
    },
    data() {
      return {
        insuranceStatus: '',
        insuranceDetails: {},
        isNext: false
      }
    },
    methods: {
      getInsuranceStatus(insuranceStatus){
        this.insuranceStatus = insuranceStatus      
      },
      isHaveInsurance() {
        this.isNext = this.getIsNext()
        return this.insuranceStatus === '加入している'
      },
      getInsuranceDetails(insuranceDetails) {
        this.insuranceDetails = insuranceDetails
        this.isNext = this.getIsNext()
      },
      getIsNext() {
        return (this.insuranceStatus === '加入していない') || (this.insuranceDetails.company && this.insuranceDetails.insurance && this.insuranceDetails.money)
      },
      next(){
        this.$router.push('/consultation')
      },
      back() {
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .question-form {
    border: solid 1px rgb(0, 180, 180);
    border-radius: 5px;
    width: 80vw;
    max-width: 980px;
  }
  .question-label {
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
  .question-input{
    padding: 20px;
  }
  .next-btn {
    margin-top: 40px;
  }
  .back-btn {
    margin-top: 40px;
    margin-right: 40px;
  }
  //アニメーション
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave {
    opacity: 0
  }
</style>
<template>
  <div class="insurance-status-form">
    <div class="insurance-status-label">どのような生命保険に加入されていますか？</div>
    <div class="insurance-status-input">
      <div>
       <CompanyForm @getValue="getCompanyValue"></CompanyForm>
      </div>
      <div>
       <InsuranceForm @getValue="getInsuranceValue"></InsuranceForm>
      </div>
      <div>
       <MoneyForm @getValue="getMoneyValue"></MoneyForm>
      </div>    
    </div>
  </div>
</template>

<script>
  import CompanyForm from '~/components/components/companyForm'
  import InsuranceForm from '~/components/components/insuranceForm'
  import MoneyForm from '~/components/components/moneyForm'

  export default {
    components: {
      CompanyForm,
      InsuranceForm,
      MoneyForm
    },
    data() {
      return {
        options: [
          {label: 'はい', value: 0},
          {label: 'いいえ', value: 1}
        ],
        insuranceDetailsValue: {}
      }
    },
    methods: {
      getCompanyValue(companyValue){
        this.insuranceDetailsValue.company = companyValue
        this.$emit('getValue', this.insuranceDetailsValue)
      },
      getInsuranceValue(insuranceValue){
        this.insuranceDetailsValue.insurance = insuranceValue
        this.$emit('getValue', this.insuranceDetailsValue)
      },
      getMoneyValue(moneyValue){
        this.insuranceDetailsValue.money = moneyValue
        this.$emit('getValue', this.insuranceDetailsValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .insurance-status-label {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #1c6596;
    text-align: left;
    padding-left: 20px;
  }
  .insurance-status-input {
    font-size: 22px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
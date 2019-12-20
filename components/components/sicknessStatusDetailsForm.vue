<template>
  <div class="insurance-status-form">
    <div class="insurance-status-label"></div>
    <div class="insurance-status-input">
      <div>
       <CompanyForm></CompanyForm>
      </div>
      <div>
       <InsuranceForm></InsuranceForm>
      </div>
      <div>
       <MoneyForm></MoneyForm>
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
        ]
      }
    },
    methods: {
      updateValue(insuranceStatus){
        this.$emit('change', insuranceStatus ? '加入していない' : '加入している')
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
  }
</style>
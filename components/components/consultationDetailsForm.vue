<template>
  <div class="consultation-status-form">
    <div class="consultation-status-label">ご相談内容</div>
    <div class="consultation-status-input">
      <MTextarea
       name="consultationForm"
       :rows="20"
       :cols="0"
      ></MTextarea>
    </div>
  </div>
</template>

<script>
  export default {
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
  .consultation-status-label {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    color: #1c6596;
    text-align: left;
    padding-left: 20px;
    &::before {
        content: "-";
      }
      &::after {
        content: "-";
    }
  }
  .consultation-status-input {
    font-size: 22px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
</style>
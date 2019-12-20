<template>
  <div class="sickness-status-form">
    <div class="sickness-status-label">現在入院中ですか。または、最近3ヵ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</div>
    <div class="sickness-status-input">
      <MRadio 
        :options="options"
        name="sicknessNowStausForm"
        @change="getSicknessNowStatus"
      ></MRadio>
    </div>
    <transition name="fade">
      <div v-if="isNext">
        <div class="sickness-status-label">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか?</div>
        <div class="sickness-status-input">
          <MRadio 
            :options="options"
            name="sicknessPastStausForm"
            @change="getSicknessPastStatus"
          ></MRadio>
        </div>
      </div>
    </transition>
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
        isNext: false
      }
    },
    methods: {
      getSicknessNowStatus(sicknessNowStatus){
        this.isNext = true
        this.$emit('getValue', sicknessNowStatus ? '現在病気なし' : '現在病気あり')
      },
      getSicknessPastStatus(sicknessPastStatus){
        this.$emit('getValue', sicknessPastStatus ? '過去病気なし' : '過去病気あり')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .sickness-status-label {
    font-size: 20px;
    color: #1c6596;
    text-align: left;
    padding-left: 20px;
  }
  .sickness-status-input {
    height: 80px;
    display: flex;
    font-size: 22px;
    align-items: center;
    padding-left: 40px;
  }
  //アニメーション
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave {
    opacity: 0
  }
</style>
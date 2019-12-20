<template>
  <fieldset>
    <template v-for="(option, index) in options">
      <label 
        class="radio"
        :key="index"
      >
        <input
            type="radio"
            :name="name"
            :value="option.value"
            v-model="value"
            @change="updateValue"
        />
        {{option.label}}
      </label>
    </template>
  </fieldset>
</template>

<script>
  export default {
    props: {
      name: {type: String, required: true},
      options: {type: Array, required: true},
      default: Number
    },
    data() {
      return {
        value: this.default
      }
    },
    methods: {
      updateValue(e){
        this.$emit('change', this.value)
      }
    }
  }
</script>
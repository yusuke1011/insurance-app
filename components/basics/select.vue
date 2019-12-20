<template>
  <fieldset class="select">
    <select 
      :name="name"
      v-model="selectedValue" 
      @change="updateValue"
    >
      <template v-for="(option, index) in options">
        <option 
          :key="index"
          :value="option.value"
        >
          {{option.label}}
        </option>
      </template>
    </select>
  </fieldset>
</template>

<script>
  export default {
    props: {
      name: {type: String, required: true},
      options: {type: Array, required: true},
      default: {type: Number, required: true}
    },
    data() {
      return {
        selectedValue: this.default
      }
    },
    methods: {
      updateValue(e){
        this.$emit('change', this.selectedValue)
      }
    }
  }
</script>
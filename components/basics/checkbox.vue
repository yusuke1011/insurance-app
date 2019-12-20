<template>
  <fieldset>
    <template v-for="(option, index) in options">
      <label 
        class="checkbox"
        :key="index"
      >
        <input
          type="checkbox"
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
    data() {
      return {
        value: []
      }
    },
    props: {
      name: {type: String, required: true},
      options: {type: Array, required: true}
    },
    methods: {
      updateValue(e){
        this.$emit('input', this.value)
      }
    }
  }
</script>
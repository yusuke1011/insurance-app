<template>
  <input
    class="input"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="updateValue"
  />
</template>

<script>
  export default {
    props: {
      type: {type: String, required: true},
      name: {type: String, required: true},
      value: String,
      placeholder: String
    },
    methods: {
      /**
       * インプットイベントを親要素に渡す
       */
      updateValue(e){
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
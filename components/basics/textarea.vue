<template>
  <textarea
    class="textarea"
    :rows="rows"
    :cols="cols"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    @input="updateValue"
  ></textarea>
</template>

<script>
  export default {
    props: {
      type: {type: String, required: true},
      name: {type: String, required: true},
      value: String,
      placeholder: String,
      rows: Number,
      cols: Number
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
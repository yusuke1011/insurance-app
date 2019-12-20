<template>
  <section class="container">
    <div>
      <BasicForm/>
    </div>
  </section>
</template>

<script>
import BasicForm from '~/components/containers/basicForm'

export default {
  components: {
    BasicForm
  }
}
</script>

<style>
.container {
  min-height: 71vh;
  padding-top: 200px;
  padding-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


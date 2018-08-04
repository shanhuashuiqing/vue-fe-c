<template>
<div>index page</div>
</template>

<script>
export default {
  name: 'index',
  mounted() {
    this.$api.get(
      'topics',
      null,
      r => {
        console.log(r)
      },
      f => {
        console.log(f)
      }
    )
  }
}
</script>

<style scoped>
</style>

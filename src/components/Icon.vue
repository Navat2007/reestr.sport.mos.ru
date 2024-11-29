<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  }
});
</script>

<template>
  <component :is="src"/>
</template>

<style scoped>

</style>

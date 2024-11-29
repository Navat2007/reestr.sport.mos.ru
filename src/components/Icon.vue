<script setup>
const props = defineProps({
  src: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <component :is="src"/>
</template>

<style scoped>

</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
import EmptyLayout from "@/layouts/EmptyLayout.vue";

export default {
  computed: {
    layout() {
      return this.$route.meta.layout || EmptyLayout;
    }
  }
}
</script>

<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<style scoped>

</style>

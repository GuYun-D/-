<script setup>
import { RouterView } from "vue-router";
import useScalePage from "./hooks/useScalePage";

useScalePage({
  targetX: 1920,
  targetY: 1080,
  targetRatio: 16 / 9,
});
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>

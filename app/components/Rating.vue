<template>
  <div class="size-8 bg-white p-0.5">
    <div :style="{ background: props.color }" class="w-full h-full flex items-center justify-center text-white font-bold font-roboto">
      {{ props.label }}
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})
</script>
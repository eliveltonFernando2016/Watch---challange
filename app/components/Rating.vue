<template>
  <div class="size-8 bg-white p-0.5">
    <div :class="classColor" class="w-full h-full flex items-center justify-center text-white font-bold font-roboto">
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
const classColor = computed(() => 'bg-['+ props.color +']')
</script>
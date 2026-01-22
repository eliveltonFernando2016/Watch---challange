<template>
  <HeaderDesktop v-if="$device.isDesktop" />
  <HeaderMobile v-else />
  <Hero />
  <main>
    <slot />
  </main>
  <Footer />
</template>
<script setup lang="ts">

</script>
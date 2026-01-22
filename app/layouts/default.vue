<template>
  <HeaderDesktop v-if="$device.isDesktop" :items-menu="menuItems" />
  <HeaderMobile v-else :items-menu="menuItems" />
  <Hero />
  <main>
    <slot />
  </main>
  <Footer />
</template>
<script setup lang="ts">
const menuItems = ref<MenuItem[]>([
  {
    label: 'Home',
    link: '/',
    icon: 'ph:house',
  },
  {
    label: 'Live',
    link: '/',
    icon: 'ph:broadcast',
  },
  {
    label: 'Musical Styles',
    link: '',
    icon: 'ph:waveform',
    subTitle: 'Styles:',
    isOpen: false,
    subItems: [
      {
        label: 'Rock',
        link: '/',
      },
      {
        label: 'Pop',
        link: '/',
      },
      {
        label: 'Funk',
        link: '/',
      },
      {
        label: 'MPB',
        link: '/',
      },
      {
        label: 'Jazz',
        link: '/',
      },
      {
        label: 'Trap',
        link: '/',
      },
      {
        label: 'Rap',
        link: '/',
      }
    ]
  },
  {
    label: 'Exclusive Content',
    link: '/',
    icon: 'ph:sparkle',
  }
])
</script>
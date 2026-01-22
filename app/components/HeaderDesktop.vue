<template>
  <nav ref="navRef" class="w-full min-h-16 flex items-center justify-between bg-header-gradient px-14 sticky top-0 z-100000">
    <ul class="flex items-center gap-10">
      <li>
        <NuxtLink to="/">
          <img src="@/assets/img/logo.svg" alt="Logo">
        </NuxtLink>
      </li>
      <li v-for="(item, index) in itemsMenu" :key="index" class="relative" :aria-label="item.label">
        <NuxtLink v-if="item.link !== ''" :to="item.link" class="menu-item">
          <Icon :name="item.icon" />
          {{ item.label }}
        </NuxtLink>
        <button
          v-else
          class="menu-item"
          @click.stop="item.isOpen = !item.isOpen"
        >
          <Icon :name="item.icon" />
          {{ item.label }}
          <Icon name="ph:caret-down" />
        </button>
        <nav
          v-if="item.link === ''"
          :class="item.isOpen ? 'block' : 'hidden'"
          class="absolute bg-[#2B2B2E] text-white w-full mt-5 p-3"
          @click.stop
        >
          <ul class="flex flex-col gap-3">
            <li class="font-roboto font-medium text-base leading-6 tracking-tight" :aria-label="item.subTitle">
              {{ item.subTitle }}
            </li>
            <li v-for="(subItem, i) in item.subItems" :key="i" :aria-label="item.label">
              <NuxtLink :to="subItem.link" class="font-roboto font-medium text-base leading-6 tracking-tight w-full float-left">
                {{ subItem.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </li>
    </ul>
    <button class="flex items-center gap-3" @click="true">
      <span class="float-left flex items-center justify-center size-8 rounded-full bg-primary text-white">
        <Icon name="ph:user" />
      </span>
      <span class="font-roboto font-bold text-secondary text-base leading-5">Peter Parker</span>
      <Icon name="ph:gear" size="16" class="text-white" />
    </button>
  </nav>
</template>
<script setup lang="ts">
const props = defineProps<({itemsMenu: MenuItem[]})>()

const navRef = ref<HTMLElement | null>(null)

const closeAllMenus = () => {
  props.itemsMenu.forEach(item => {
    if (item.isOpen) item.isOpen = false
  })
}

const handleClickOutside = (event: MouseEvent) => {
  if (!navRef.value) return
  if (!navRef.value.contains(event.target as Node)) {
    closeAllMenus()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="w-full min-h-16 flex items-center justify-between bg-header-gradient px-6 sticky top-0 z-100000">
    <NuxtLink to="/">
      <img src="@/assets/img/logo.svg" alt="Logo">
    </NuxtLink>
    <button class="text-white flex items-center justify-center" aria-label="Main menu" @click="openMenu(isOpen)">
      <Icon name="ph:list" size="28" />
    </button>
  </div>
  <div
    :class="[!isOpen ? 'translate-x-full' : 'translate-x-0']"
    class="transition-transform duration-300 w-[90%] h-screen fixed right-0 top-16 bg-dark-gray p-6 z-10001"
  >
    <div class="flex items-center justify-between">
      <h5 class="text-white text-xl">Menu</h5>
      <button @click="openMenu(isOpen)">
        <Icon name="ph:x-bold" :size="28" class="text-white" />
      </button>
    </div>
    <ul class="flex flex-col gap-6 mt-4">
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
          class="bg-[#2B2B2E] text-white w-full mt-5 p-3"
          @click.stop
        >
          <ul class="flex flex-col gap-3">
            <li class="font-medium text-base leading-6 tracking-tight" :aria-label="item.subTitle">
              {{ item.subTitle }}
            </li>
            <li v-for="(subItem, i) in item.subItems" :key="i" :aria-label="item.label">
              <NuxtLink :to="subItem.link" class="font-medium text-base leading-6 tracking-tight w-full float-left">
                {{ subItem.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<({itemsMenu: MenuItem[]})>()

const isOpen = ref<boolean>(false)
const openMenu = (open: boolean) => {
  isOpen.value = !open
}
</script>
<template>
  <footer class="w-full px-6 lg:px-14 my-6">
    <hr class="w-full border border-t-medium-gray mb-5">
    <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-34.5">
      <p class="text-xs leading-5 text-secondary [&_br]:hidden lg:[&_br]:block">
        heck the Parental Guidance Rating © 2024 WarnerMedia Direct Latin America, LLC. All rights reserved. Max is used under license.<br>
        © 2024 Globo Comunicação e Participações S.A. All rights reserved. Big Brother Brasil is used under license. The trademarks GLOBO®, TV GLOBO®, GLOBO NEWS®, CANAL BRASIL®, SPORTV®,<br>
        MULTISHOW®, OFF®, GNT®, BIS®, GLOOBINHO®, GLOOB®, VIVA®, MODO VIAGEM®, PREMIERE®, and COMBATE® are properties of Globo Comunicação e Participações S.A.<br>
        © 2024 NBCUniversal. All rights reserved. The Universal, Studio Universal, and USA Network trademarks are properties of NBCUniversal.<br>
        © 2024 Telecine Programação De Filmes Ltda. All rights reserved. The registered trademarks TELECINE® and MEGAPIX® are properties of Telecine Programação De Filmes Ltda.<br>
        Paramount+ © 2024 Paramount. All rights reserved.
      </p>
      <div class="shrink-0">
        <img src="@/assets/img/logo.svg" alt="Logo" class="w-36 flex lg:justify-self-end">
        <span class="text-secondary text-xs float-left mt-7.5">© 2024 Watch Brasil. All rights reserved</span>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-34.5 mt-10">
      <div class="flex items-center gap-5 lg:gap-8">
        <NuxtLink to="https://youtube.com" external aria-label="Youtube Link" class="text-white hover:text-primary transition-colors">
          <Icon name="ph:youtube-logo" size="34" />
        </NuxtLink>
        <NuxtLink to="https://linkedin.com" external aria-label="Linkedin Link" class="text-white hover:text-primary transition-colors">
          <Icon name="ph:linkedin-logo" size="28" />
        </NuxtLink>
        <NuxtLink to="https://instagram.com" external aria-label="Instagram Link" class="text-white hover:text-primary transition-colors">
          <Icon name="ph:instagram-logo" size="30" />
        </NuxtLink>
        <NuxtLink to="https://facebook.com" external aria-label="Facebook Link" class="text-white hover:text-primary transition-colors">
          <Icon name="ph:facebook-logo" size="30" />
        </NuxtLink>
        <NuxtLink to="https://tiktok.com" external aria-label="Tiktok Link" class="text-white hover:text-primary transition-colors">
          <Icon name="ph:tiktok-logo" size="30" />
        </NuxtLink>
        <NuxtLink to="https://x.com" external aria-label="X Link" class="text-white hover:text-primary transition-colors">
          <Icon name="ph:x-logo" size="30" />
        </NuxtLink>
      </div>
      <div class="flex items-center lg:justify-center gap-5 lg:gap-8">
        <NuxtLink to="https://play.google.com/" external>
          <img src="@/assets/img/Google.svg" alt="Google Play Logo" class="w-33.5">
        </NuxtLink>
        <NuxtLink to="https://apps.apple.com/" external>
          <img src="@/assets/img/Apple.svg" alt="Apple Store Logo" class="w-33.5">
        </NuxtLink>
      </div>
    </div>
    <nav class="mt-10">
      <ul class="font-medium text-base text-secondary flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 *:underline-offset-4 *:hover:underline">
        <li>
          <NuxtLink to="/" aria-label="About Labs Festival">About Labs Festival</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" aria-label="Terms of use and privacy">Terms of use and privacy</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/" aria-label="Send feedback">Send feedback</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>
<script setup lang="ts">

</script>
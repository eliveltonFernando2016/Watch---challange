<template>
  <div
    :style="cardStyle"
    class="rounded-lg border border-dark-gray hover:border-primary transition-all group"
  >
    <span v-if="props.cardType === 'artist'" class="font-bold text-lg leading-5.5 text-white absolute bottom-13.5 text-center w-52">{{ props.name }}</span>
    <template v-else-if="props.cardType === 'musicalStyle'">
      <svg class="absolute right-0 bottom-0" width="110" height="78" viewBox="0 0 110 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M118.312 2.90079C118.405 3.44036 118.371 3.99544 118.212 4.52082L98.4118 69.4681C98.0393 70.5689 97.5089 71.6053 96.8449 72.5455C95.0752 75.051 92.3449 76.8854 89.0785 77.4477C86.699 77.8573 84.3614 77.5338 82.3009 76.6433C81.5332 76.3135 80.8023 75.9008 80.12 75.4244C79.1043 74.7052 78.195 73.8251 77.4385 72.8187L69.7454 62.3549C68.639 60.8489 66.286 61.2518 65.7382 63.0404L61.8611 75.7597C61.4886 76.8605 60.9561 77.8972 60.2941 78.8371C59.8128 79.5159 59.2595 80.1475 58.6462 80.715C57 82.2436 54.9072 83.3297 52.5277 83.7393C49.2613 84.3015 46.0748 83.4856 43.5692 81.716C42.5515 80.9972 41.6422 80.1171 40.8878 79.1103L0.422613 24.0917C0.243686 23.8437 0.103548 23.5613 0.0519496 23.2615L0.0512372 23.2574C-0.275792 21.3575 0.99685 19.5505 2.90088 19.2228L16.6612 16.8542C19.0407 16.4446 21.3782 16.7681 23.4429 17.6579C24.2106 17.9876 24.9395 18.4007 25.6204 18.8816C26.6378 19.5984 27.5467 20.4764 28.3011 21.4832L43.2445 41.8037C44.3554 43.3111 46.7101 42.9058 47.251 41.1141L49.2506 34.4906L37.2315 18.1495C35.7849 16.1763 36.9129 13.3682 39.3255 12.9529L53.214 10.5622C54.3283 10.3704 55.4342 10.3397 56.5073 10.453C58.5757 10.6717 60.5206 11.4225 62.1729 12.5876C63.1902 13.3044 64.0971 14.1827 64.8536 15.1892L79.7969 35.5097C80.9037 37.0178 83.2605 36.6121 83.8035 34.82L85.453 29.3658L91.0948 10.6743C91.7208 8.67214 92.8638 6.86619 94.3944 5.44479C96.0427 3.91585 98.1376 2.82941 100.517 2.41981L114.277 0.0512093C116.179 -0.276182 117.985 1.00093 118.312 2.90079Z" fill="#FAFAFA" fill-opacity="0.1"/>
      </svg>
      <div class="absolute px-4 bottom-8">
        <p class="font-bold text-[32px] text-white">{{ props.name }}</p>
        <span class="font-AxiForma text-2xl leading-9 text-white opacity-60">Festival</span>
      </div>
    </template>
    <template v-else-if="props.cardType === 'live'">
      <div class="w-full h-52 overflow-hidden relative">
        <div class="w-full h-full absolute flex items-end gap-2 pb-3 px-3 opacity-0 bg-live-gradient group-hover:opacity-100 transition-opacity">
          <Rating color="#00A54F" label="L" />
          <button class="button-orange">
            <Icon name="ph:play" />
            Assistir
          </button>
          <button :aria-label="'Mais sobre ' + props.name" class="size-8 rounded-full bg-medium-gray hover:bg-white text-white hover:text-medium-gray flex items-center justify-center transition-colors cursor-pointer">
            <Icon name="ph:plus" size="20" />
          </button>
        </div>
        <img :src="props.img" :alt="props.name" class="object-cover">
      </div>
      <div class="px-4 py-3 flex items-center justify-between">
        <span class="text-sm text-primary">{{ props.name }}</span>
        <div class="text-sm text-[#FF2828] leading-4 flex items-center justify-between gap-2">
          <span class="size-2 rounded-full bg-[#FF2828] float-left animate-pulse" />
          Live
        </div>
      </div>
      <div class="px-4 flex items-center justify-between">
        <span class="text-sm text-secondary leading-4">{{ props.stage }}</span>
        <span class="text-sm text-secondary leading-4">{{ DateFormat(props.duration as Date) }}</span>
      </div>
    </template>
    <template v-else-if="props.cardType === 'exclusiveContent'">
      <svg class="absolute right-0.5 bottom-0.5" width="110" height="78" viewBox="0 0 110 78" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M118.312 2.90079C118.405 3.44036 118.371 3.99544 118.212 4.52082L98.4118 69.4681C98.0393 70.5689 97.5089 71.6053 96.8449 72.5455C95.0752 75.051 92.3449 76.8854 89.0785 77.4477C86.699 77.8573 84.3614 77.5338 82.3009 76.6433C81.5332 76.3135 80.8023 75.9008 80.12 75.4244C79.1043 74.7052 78.195 73.8251 77.4385 72.8187L69.7454 62.3549C68.639 60.8489 66.286 61.2518 65.7382 63.0404L61.8611 75.7597C61.4886 76.8605 60.9561 77.8972 60.2941 78.8371C59.8128 79.5159 59.2595 80.1475 58.6462 80.715C57 82.2436 54.9072 83.3297 52.5277 83.7393C49.2613 84.3015 46.0748 83.4856 43.5692 81.716C42.5515 80.9972 41.6422 80.1171 40.8878 79.1103L0.422613 24.0917C0.243686 23.8437 0.103548 23.5613 0.0519496 23.2615L0.0512372 23.2574C-0.275792 21.3575 0.99685 19.5505 2.90088 19.2228L16.6612 16.8542C19.0407 16.4446 21.3782 16.7681 23.4429 17.6579C24.2106 17.9876 24.9395 18.4007 25.6204 18.8816C26.6378 19.5984 27.5467 20.4764 28.3011 21.4832L43.2445 41.8037C44.3554 43.3111 46.7101 42.9058 47.251 41.1141L49.2506 34.4906L37.2315 18.1495C35.7849 16.1763 36.9129 13.3682 39.3255 12.9529L53.214 10.5622C54.3283 10.3704 55.4342 10.3397 56.5073 10.453C58.5757 10.6717 60.5206 11.4225 62.1729 12.5876C63.1902 13.3044 64.0971 14.1827 64.8536 15.1892L79.7969 35.5097C80.9037 37.0178 83.2605 36.6121 83.8035 34.82L85.453 29.3658L91.0948 10.6743C91.7208 8.67214 92.8638 6.86619 94.3944 5.44479C96.0427 3.91585 98.1376 2.82941 100.517 2.41981L114.277 0.0512093C116.179 -0.276182 117.985 1.00093 118.312 2.90079Z" fill="#FAFAFA" fill-opacity="0.1"/>
      </svg>
      <div class="absolute px-4 bottom-8">
        <p class="font-bold text-[32px] text-white">{{ props.name }}</p>
        <span class="font-AxiForma text-2xl leading-9 text-white opacity-60">Festival</span>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { CSSProperties } from 'vue'

const props = defineProps({
  cardType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
    default: undefined,
  },
  img: {
    type: String,
    required: false,
    default: undefined,
  },
  color: {
    type: [String, Boolean],
    required: false,
    default: false,
  },
  stage: {
    type: [String, Boolean],
    required: false,
    default: false,
  },
  duration: {
    type: [String, Boolean, Date],
    required: false,
    default: false,
  }
})
const cardStyle = computed<CSSProperties>(() => {
  switch (props.cardType) {
    case 'artist':
      return {
        background: props.img ? `linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 97%), url(${props.img})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '18rem',
        width: '13rem'
      }

    case 'musicalStyle':
      return props.color
        ? {
            background: props.color as string,
            height: '13rem',
            overflow: 'hidden'
          }
        : {}

    case 'live':
      return {
        background: '#3D3D3F',
        width: '27.5rem',
        height: '18rem',
        overflow: 'hidden'
      }

    case 'exclusiveContent':
      return {
        overflow: 'hidden',
        width: '27.5rem',
        height: '18rem',
        background: props.img
          ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 97.28%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${props.img}), linear-gradient(336.78deg, #2433C0 22.25%, #4F60FF 124.95%)`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }

    default:
      return {}
  }
})
</script>
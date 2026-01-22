<template>
  <section class="w-full py-3 lg:py-6">
    <h2 class="font-roboto font-bold text-xl lg:text-2xl leading-7 text-secondary px-6 lg:px-14">Line Up</h2>
    <ClientOnly>
      <swiper-container
        :loop="false"
        slides-per-view="auto"
        :space-between="16"
        :centered-slides="false"
        :free-mode="true"
        class="mt-6"
      >
        <swiper-slide v-for="(artist, index) in artists" :key="index" class="w-52!">
          <Card card-type="artist" :name="artist.name" :img="artist.img" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
  <section class="w-full py-3 lg:py-6 pl-0 lg:pl-14 lg:flex items-center justify-between gap-16">
    <div class="shrink-0 px-6 lg:px-0">
      <h2 class="font-roboto font-bold text-lg leading-5.5 text-secondary pb-6">Festival for you</h2>
      <p class="font-roboto text-base leading-5 text-secondary [&_br]:hidden lg:block">
        Explore your favorite<br>
        genres and discover new<br>
        rhythms to love!
      </p>
      <button class="button-orange mt-5">See All</button>
    </div>
    <div class="w-full overflow-hidden mt-6 lg:mt-0">
      <ClientOnly>
        <swiper-container
          :loop="false"
          slides-per-view="auto"
          :space-between="16"
          :centered-slides="false"
          :free-mode="true"
        >
          <swiper-slide v-for="(style, index) in musicalStyles" :key="index" class="w-52!">
            <Card card-type="musicalStyle" :name="style.name" :color="style.color" />
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
  <section class="w-full px-6 lg:px-14 mt-6">
    <div class="bg-white px-4 lg:px-8 py-3 lg:py-6.5">
      <ClientOnly>
        <swiper-container
          effect="fade"
          :autoplay="true"
          :pagination="{ clickable: true }"
          :loop="true"
          :slides-per-view="1"
          :auto-height="true"
        >
          <swiper-slide v-for="(item, index) in marketingCarousel" :key="index">
            <NuxtLink :to="item.link" external target="_blank">
              <img :src="item.img" :alt="item.title" class="w-full">
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
  <section class="w-full py-3 lg:py-6">
    <h2 class="font-roboto font-bold text-xl lg:text-2xl lg:leading-7 text-secondary px-6 lg:px-14">In Live</h2>
    <ClientOnly>
      <swiper-container
        :loop="false"
        slides-per-view="auto"
        :space-between="16"
        :centered-slides="false"
        :free-mode="true"
        class="mt-6"
      >
        <swiper-slide v-for="(live, index) in lives" :key="index" class="w-110!">
          <Card
            card-type="live"
            :img="live.img"
            :stage="live.stage"
            :name="live.artist"
            :duration="live.duration"
          />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
  <section class="w-full py-3 lg:py-6">
    <h2 class="font-roboto font-bold text-xl lg:text-2xl lg:leading-7 text-secondary px-6 lg:px-14">Yesterday Shows</h2>
    <ClientOnly>
      <swiper-container
        :loop="false"
        slides-per-view="auto"
        :space-between="16"
        :centered-slides="false"
        :free-mode="true"
        class="mt-6"
      >
        <swiper-slide v-for="(artist, index) in artists" :key="index" class="w-52!">
          <Card card-type="artist" :name="artist.name" :img="artist.img" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
  <section class="w-full py-3 lg:py-6">
    <h2 class="font-roboto font-bold text-xl lg:text-2xl lg:leading-7 text-secondary px-6 lg:px-14">Exclusive Content</h2>
    <ClientOnly>
      <swiper-container
        :loop="false"
        slides-per-view="auto"
        :space-between="16"
        :centered-slides="false"
        :free-mode="true"
        class="mt-6"
      >
        <swiper-slide v-for="(exclusive, index) in exclusiveContent" :key="index" class="w-110!">
          <Card card-type="exclusiveContent" :name="exclusive.name" :img="exclusive.img" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
  <section class="w-full py-3 lg:py-6">
    <h2 class="font-roboto font-bold text-xl lg:text-2xl lg:leading-7 text-secondary px-6 lg:px-14">Rock Singers</h2>
    <ClientOnly>
      <swiper-container
        :loop="false"
        slides-per-view="auto"
        :space-between="16"
        :centered-slides="false"
        :free-mode="true"
        class="mt-6"
      >
        <swiper-slide v-for="(artist, index) in artists" :key="index" class="w-52!">
          <Card card-type="artist" :name="artist.name" :img="artist.img" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
  <section class="w-full px-6 lg:px-14 my-6">
    <div class="bg-white px-4 lg:px-8 py-3 lg:py-6.5">
      <ClientOnly>
        <swiper-container
            effect="fade"
            :autoplay="true"
            :pagination="{ clickable: true }"
            :loop="true"
            :slides-per-view="1"
            :auto-height="true"
        >
          <swiper-slide v-for="(item, index) in marketingCarousel" :key="index">
            <NuxtLink :to="item.link" external target="_blank">
              <img :src="item.img" :alt="item.title" class="w-full">
            </NuxtLink>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </section>
  <section class="w-full pt-3 lg:pt-6">
    <h2 class="font-roboto font-bold text-xl lg:text-2xl lg:leading-7 text-secondary px-6 lg:px-14">Watch Again</h2>
    <ClientOnly>
      <swiper-container
          :loop="false"
          slides-per-view="auto"
          :space-between="16"
          :centered-slides="false"
          :free-mode="true"
          class="mt-6"
      >
        <swiper-slide v-for="(artist, index) in artists" :key="index" class="w-52!">
          <Card card-type="artist" :name="artist.name" :img="artist.img" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </section>
</template>
<script setup lang="ts">
import { register } from 'swiper/element/bundle'
register()

useHead({
  title: 'Watch Brasil',
  meta: [
    { name: 'description', content: 'Watch Brasil - Challange' }
  ]
})

const artists = ref<Artist[]>([
  {
    name: 'Iron Maiden',
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Bruce_Dickinson_-_The_Mandrake_Project_%2812%29_%2853817871253%29_%28cropped%29.jpg'
  },
  {
    name: 'Alok',
    img: 'https://www.accie.com.br/wp-content/uploads/2018/11/Alok.jpg'
  },
  {
    name: 'Rita Ora',
    img: 'https://br.web.img2.acsta.net/c_310_420/pictures/19/03/18/15/28/3153433.jpg'
  },
  {
    name: 'Dua Lipa',
    img: 'https://m.media-amazon.com/images/M/MV5BYmRjM2RlZjItMDZhNS00MTM2LThiZDUtZDQxMmVjYjQ2ZmM4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
  },
  {
    name: 'Maneskin',
    img: 'https://www.nme.com/wp-content/uploads/2022/05/NME-Ma%CC%8Aneskin-Credit-Fabio-Germinario-7@2160x2700.jpg'
  },
  {
    name: 'Emicida',
    img: 'https://conteudo.imguol.com.br/c/entretenimento/94/2019/11/27/emicida-se-apresenta-no-municipal-e-mostra-que-lugar-do-rap-e-onde-quiser-1574891607486_v2_1x1.jpg'
  },
  {
    name: 'Coldplay',
    img: 'https://vivacoldplay.com/wp-content/uploads/2025/10/chris-brasil-header-768x868.png'
  },
  {
    name: 'Justin Bieber',
    img: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/07/GettyImages-1391722552.jpg?w=1200&h=1200&crop=1'
  },
  {
    name: 'Luísa Souza',
    img: 'https://conteudo.imguol.com.br/c/entretenimento/ea/2022/05/26/luisa-sonza-1653602571140_v2_1x1.jpg'
  },
  {
    name: 'Marshemello',
    img: 'https://imageio.forbes.com/specials-images/imageserve/5be1e2a3a7ea437059163919/0x0.jpg?format=jpg&crop=1999,1999,x0,y0,safe&height=1999&width=1999'
  },
  {
    name: 'Dijavan',
    img: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3266753:1660324254/Djavan-sentado.jpg?f=default&$p$f=f1833d5'
  },
  {
    name: 'Ed Sheeran',
    img: 'https://cdn.britannica.com/17/249617-050-4575AB4C/Ed-Sheeran-performs-Rockefeller-Plaza-Today-Show-New-York-2023.jpg'
  },
  {
    name: 'Avril Lavigne',
    img: 'https://cdn.britannica.com/59/193059-050-219AF2CB/Avril-Lavigne.jpg'
  }
])
const musicalStyles = ref<MusicalStyle[]>([
  {
    name: 'Rock',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(336.78deg, #2433C0 22.25%, #4F60FF 124.95%)'
  },
  {
    name: 'Pop',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(336.78deg, #016500 22.25%, #06DE03 124.95%)'
  },
  {
    name: 'Funk',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(336.78deg, #5E006C 22.25%, #AF01CA 124.95%)'
  },
  {
    name: 'Jazz',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(336.78deg, #BF4900 22.25%, #FF6100 124.95%)'
  },
  {
    name: 'Samba',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(143.04deg, #FF009A -19.45%, #A30062 76.86%)'
  },
  {
    name: 'MPB',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(336.78deg, #7A5000 22.25%, #FFA801 124.95%)'
  },
  {
    name: 'Trap',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(336.78deg, #006A8D 22.25%, #00C0FF 124.95%)'
  },
  {
    name: 'Rap',
    color: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(336.78deg, #A80100 22.25%, #FF0100 124.95%)'
  },
])
const marketingCarousel = ref<Marketing[]>([
  {
    title: 'Heineken Banner',
    img: 'https://www.corberto.com/heineken/img/1.1_banner.jpg',
    link: 'https://www.heinekenbrasil.com.br/#'
  },
  {
    title: 'Lollapalooza Banner',
    img: 'https://cdn.getcrowder.com/images/59fe6ced-f174-4eba-88fe-92be1c4ef1d6-tmbannersinternolollapistabradesco1920x720fmv1.png',
    link: 'https://www.lollapaloozabr.com/'
  },
  {
    title: 'Coca cola Banner',
    img: 'https://i.ytimg.com/vi/pbK4nRKkkao/maxresdefault.jpg',
    link: 'https://coca-cola.com.br'
  }
])
const lives = ref<Live[]>([
  {
    img: 'https://bsbnoticias.com.br/hf-conteudo/uploads/posts/2022/03/69641_14fd8508c5858874e4721c4789d05676.jpg',
    stage: 'Stage Sunset',
    artist: 'Demi Lovato',
    duration: new Date()
  },
  {
    img: 'https://odia.ig.com.br/_midias/jpg/2022/05/10/image-25152296.jpg',
    stage: 'Stage World',
    artist: 'Demi Lovato',
    duration: new Date()
  },
  {
    img: 'https://odia.ig.com.br/_midias/jpg/2022/09/09/ihf_rir22_dia08_sunset_jessiej_arielmartini_9447-26371096.jpg',
    stage: 'Stage Favela',
    artist: 'Demi Lovato',
    duration: new Date()
  },
  {
    img: 'https://brasilalemanhanews.com.br/wp-content/uploads/2025/01/Palco-mundo-Gerdau-scaled-1.jpg',
    stage: 'Stage Supernova',
    artist: 'Demi Lovato',
    duration: new Date()
  },
  {
    img: 'https://files.tecnoblog.net/wp-content/uploads/2019/09/rock-in-rio-palco-mundo-dia.jpg',
    stage: 'Stage Rock Street',
    artist: 'Demi Lovato',
    duration: new Date()
  },
  {
    img: 'https://bsbnoticias.com.br/hf-conteudo/uploads/posts/2022/03/69641_14fd8508c5858874e4721c4789d05676.jpg',
    stage: 'Stage Rock Distinct',
    artist: 'Demi Lovato',
    duration: new Date()
  }
])
const exclusiveContent = ref<ExclusiveContent[]>([
  {
    name: 'Back Stage',
    img: 'https://cdn.getcrowder.com/images/408db2a1-16e4-4847-8a80-ccde666432bf-mirante-ericclapton-005.jpg'
  },
  {
    name: 'Interviews',
    img: 'https://www.vidyard.com/wp-content/uploads/interview-videos-1920x1080-1-1024x576.jpg'
  },
  {
    name: 'Latest News',
    img: 'https://cdn.mos.cms.futurecdn.net/wNNpuBYg6D3By3doSg6eQP.jpg'
  },
  {
    name: 'Last Editions',
    img: 'https://www.aicinema.com.br/wp-content/uploads/2017/02/AIC-2014_Foto-Alessandra-Haro_095-1020x680.jpg'
  }
])
</script>
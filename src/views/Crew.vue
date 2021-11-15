<template lang="pug">
.page.page--crew
  .page__content
    header.page__header
      h1.heading-5 Meet your crew
    .slideshow
      nav.slideshow__nav
        ul
          li(v-for="(slide, i) in slides" :key="`nav-${i}`")
            a(href="#" :class="{ active: activeSlide === i }" @click.prevent="activeSlide = i") {{slide.name}}
      ul.slideshow__content
        li(v-for="(slide, i) in slides" :key="`text-${i}`" :class="{ active: activeSlide === i }")
          article
            h2
              span.heading-4 {{ slide.role }}
              strong.heading-3 {{ slide.name }}
            p {{ slide.bio }}
            .image
              picture(@dragstart.prevent)
                source(:srcset="require(`@/assets/img/${slide.images.webp}`)" type="image/webp")
                img(:src="require(`@/assets/img/${slide.images.png}`)" :alt="slide.name")
</template>

<script>
import { useSlide } from "@/hooks/useSlide";
import data from "@/data.json";

export default {
  name: "Crew",
  setup() {
    const { activeSlide, slides } = useSlide(data.crew);

    return {
      activeSlide,
      slides,
    };
  },
};
</script>

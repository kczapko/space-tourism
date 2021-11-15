<template lang="pug">
.page.page--technology
  .page__content
    header.page__header
      h1.heading-5 Space launch 101
    .slideshow
      nav.slideshow__nav
        ul
          li(v-for="(slide, i) in slides" :key="`nav-${i}`")
            a(href="#" class="heading-4" :class="{ active: activeSlide === i }" @click.prevent="activeSlide = i") {{ i + 1 }}
      ul.slideshow__content
        li(v-for="(slide, i) in slides" :key="`text-${i}`" :class="{ active: activeSlide === i }")
          article
            span.nav-text The Terminology…
            h2.heading-3 {{ slide.name }}
            p {{ slide.description }}
      ul.slideshow__images
        li(v-for="(slide, i) in slides" :key="`image-${i}`" :class="{ active: activeSlide === i }")
          picture(@dragstart.prevent)
            source(media="(max-width: 1024px)" :srcset="require(`@/assets/img/${slide.images.landscape}`)")
            source(media="(min-width: 1025px)" :srcset="require(`@/assets/img/${slide.images.portrait}`)")
            img(:src="require(`@/assets/img/${slide.images.portrait}`)" :alt="slide.name")
</template>

<script>
import { useSlide } from "@/hooks/useSlide";
import data from "@/data.json";

export default {
  name: "Technology",
  setup() {
    const { activeSlide, slides } = useSlide(data.technology);

    return {
      activeSlide,
      slides,
    };
  },
};
</script>

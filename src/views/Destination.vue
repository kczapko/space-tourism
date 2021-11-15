<template lang="pug">
.page.page--destination
  .page__content
    header.page__header
      h1.heading-5 Pick your destination
    .slideshow
      nav.slideshow__nav
        ul
          li(v-for="(slide, i) in slides" :key="`nav-${i}`")
            a(href="#" class="nav-text" :class="{ active: activeSlide === i }" @click.prevent="activeSlide = i") {{slide.name}}
      ul.slideshow__images
        li(v-for="(slide, i) in slides" :key="`image-${i}`" :class="{ active: activeSlide === i }")
          picture(@dragstart.prevent)
            source(:srcset="require(`@/assets/img/${slide.images.webp}`)" type="image/webp")
            img(:src="require(`@/assets/img/${slide.images.png}`)" :alt="slide.name")
      ul.slideshow__content
        li(v-for="(slide, i) in slides" :key="`text-${i}`" :class="{ active: activeSlide === i }")
          article
            h2.heading-2 {{ slide.name }}
            p {{ slide.description }}
            dl
              dt.subheading-2 Avg. distance
              dd.subheading-1 {{ slide.distance }}
              dt.subheading-2 Est. travel time
              dd.subheading-1 {{ slide.travel }}
</template>

<script>
import { useSlide } from "@/hooks/useSlide";
import data from "@/data.json";

export default {
  name: "Destination",
  setup() {
    const { activeSlide, slides } = useSlide(data.destinations);

    return {
      activeSlide,
      slides,
    };
  },
};
</script>

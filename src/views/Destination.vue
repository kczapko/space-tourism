<template lang="pug">
.page.page--destination
  .page__content
    header.page__header
      h1.heading-5 Pick your destination
    .slideshow
      nav.slideshow__nav
        ul
          li(v-for="(slide, i) in slides" :key="`nav-${i}`")
            a(href="#" class="nav-text" :class="{ active: active === i }" @click.prevent="active = i") {{slide.name}}
      ul.slideshow__images
        li(v-for="(slide, i) in slides" :key="`image-${i}`" :class="{ active: active === i }")
          picture
            source(:srcset="slide.images.webp" type="image/webp")
            img(:src="slide.images.png" :alt="slide.name")
      ul.slideshow__content
        li(v-for="(slide, i) in slides" :key="`text-${i}`" :class="{ active: active === i }")
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
export default {
  name: "Destination",
  data() {
    return {
      active: 0,
      slides: [
        {
          name: "Moon",
          images: {
            png: require("@/assets/img/destination/image-moon.png"),
            webp: require("@/assets/img/destination/image-moon.webp"),
          },
          description:
            "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          distance: "384,400 km",
          travel: "3 days",
        },
        {
          name: "Mars",
          images: {
            png: require("@/assets/img/destination/image-mars.png"),
            webp: require("@/assets/img/destination/image-mars.webp"),
          },
          description:
            "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
          distance: "225 mil. km",
          travel: "9 months",
        },
        {
          name: "Europa",
          images: {
            png: require("@/assets/img/destination/image-europa.png"),
            webp: require("@/assets/img/destination/image-europa.webp"),
          },
          description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
          distance: "628 mil. km",
          travel: "3 years",
        },
        {
          name: "Titan",
          images: {
            png: require("@/assets/img/destination/image-titan.png"),
            webp: require("@/assets/img/destination/image-titan.webp"),
          },
          description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
          distance: "1.6 bil. km",
          travel: "7 years",
        },
      ],
    };
  },
};
</script>

<template lang="pug">
.page.page--technology
  .page__content
    header.page__header
      h1.heading-5 Space launch 101
    .slideshow
      nav.slideshow__nav
        ul
          li(v-for="(slide, i) in slides" :key="`nav-${i}`")
            a(href="#" class="heading-4" :class="{ active: active === i }" @click.prevent="active = i") {{ i + 1 }}
      ul.slideshow__content
        li(v-for="(slide, i) in slides" :key="`text-${i}`" :class="{ active: active === i }")
          article
            span.nav-text The Terminology…
            h2.heading-3 {{ slide.name }}
            p {{ slide.description }}
      ul.slideshow__images
        li(v-for="(slide, i) in slides" :key="`image-${i}`" :class="{ active: active === i }")
          picture
            source(media="(max-width: 1024px)" :srcset="slide.images.landscape")
            source(media="(min-width: 1025px)" :srcset="slide.images.portrait")
            img(:src="slide.images.portrait" :alt="slide.name")
</template>

<script>
export default {
  name: "Technology",
  data() {
    return {
      active: 0,
      slides: [
        {
          name: "Launch vehicle",
          images: {
            portrait: require("@/assets/img/technology/image-launch-vehicle-portrait.jpg"),
            landscape: require("@/assets/img/technology/image-launch-vehicle-landscape.jpg"),
          },
          description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        {
          name: "Spaceport",
          images: {
            portrait: require("@/assets/img/technology/image-spaceport-portrait.jpg"),
            landscape: require("@/assets/img/technology/image-spaceport-landscape.jpg"),
          },
          description:
            "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        {
          name: "Space capsule",
          images: {
            portrait: require("@/assets/img/technology/image-space-capsule-portrait.jpg"),
            landscape: require("@/assets/img/technology/image-space-capsule-landscape.jpg"),
          },
          description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
      ],
    };
  },
};
</script>

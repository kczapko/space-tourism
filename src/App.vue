<template lang="pug">
app-header         

main
  router-view(v-slot="{ Component }")
    transition(:css="false" @enter="enter" @leave="leave" mode="out-in" appear)
      component(:is="Component")
</template>

<script>
import { gsap } from "gsap";
import AppHeader from "@/components/Header.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  methods: {
    enter(el, done) {
      if (el.classList.contains("page--home")) {
        gsap.from(el, { opacity: 0, duration: 0.3 });
        gsap.fromTo(
          el.querySelector(".header-home"),
          {
            opacity: 0,
            x: -100,
            duration: 0.5,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
          }
        );
        gsap.from(el.querySelector(".header-home__link"), {
          opacity: 0,
          x: 100,
          duration: 0.5,
          onComplete: done,
        });
      } else {
        gsap.from(el, { opacity: 0, duration: 0.3, onComplete: done });
      }
    },
    leave(el, done) {
      if (el.classList.contains("page--home")) {
        gsap.to(el, { opacity: 0, duration: 0.5 });
        gsap.to(el.querySelector(".header-home"), { opacity: 0, x: -100, duration: 0.5 });
        gsap.to(el.querySelector(".header-home__link"), {
          opacity: 0,
          x: 100,
          duration: 0.5,
          onComplete: done,
        });
      } else {
        gsap.to(el, { opacity: 0, duration: 0.5, onComplete: done });
      }
    },
  },
  watch: {
    "$route.name": {
      handler(newVal, oldVal) {
        document.body.classList.remove(oldVal);
        document.body.classList.add(newVal);
      },
      immediate: true,
    },
  },
};
</script>

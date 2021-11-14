<template lang="pug">
header.header(:class="{ mobile: mobileMenuVisible }")
  router-link(:to="{ name: 'home' }" class="header__logo-link" )
    img.header__logo(src="@/assets/img/shared/logo.svg" alt="Logo")
  button.header__toggle(@click="mobileMenuVisible = !mobileMenuVisible" aria-label="Toggle Menu")
    span
    span
    span
  nav.header__nav
    ul.header__nav-list
      li.header__nav-list-item(v-for="page in pages" :key="page")
        router-link(:to="{ name: page.toLowerCase() }" class="header__nav-link nav-text" @click="mobileMenuVisible = false") {{ page }}
    .header__nav-active(:style="activeStyles")
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeStyles: {},
      pages: ["Home", "Destination", "Crew", "Technology"],
      mobileMenuVisible: false,
    };
  },
  methods: {
    setActiveStyles() {
      const el = document.querySelector(".header__nav-link.router-link-exact-active");
      const elDimensions = el.getBoundingClientRect();
      const navDimensions = el.closest("nav").getBoundingClientRect();

      this.activeStyles = {
        width: `${elDimensions.width}px`,
        transform: `translateX(${elDimensions.x - navDimensions.x}px)`,
      };
    },
  },
  watch: {
    "$route.name": {
      handler() {
        this.setActiveStyles();
      },
      flush: "post",
    },
  },
  mounted() {
    setTimeout(this.setActiveStyles, 250);

    window.addEventListener("resize", this.setActiveStyles);
  },
};
</script>

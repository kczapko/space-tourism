<template lang="pug">
.page.page--home
  .page__content
    header.header-home
      h1
        span.heading-5 So, you want to travel to 
        strong.heading-1 SPACE
      p Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
    router-link(:to="{ name: 'destination' }" class="header-home__link")
      span.heading-4 Explore
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

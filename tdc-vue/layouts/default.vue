<template>
  <div>
    <main class="Site-Container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: "Site",
    },
  },
};
</script>
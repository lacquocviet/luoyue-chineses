<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
    <CtaFloatingButton />
  </div>
</template>

<!-- No global reveal JavaScript.
  Content must be visible by default on every client-side navigation.
  The old IntersectionObserver flow could leave .reveal blocks at opacity: 0
  when Nuxt reused/transitioned pages, which caused blank content until reload.
-->

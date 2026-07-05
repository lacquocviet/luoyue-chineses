<template>
  <div>
    <Navbar />
    <NuxtPage />
    <Footer />
    <CtaFloatingButton />
  </div>
</template>

<script setup lang="ts">
// Scroll reveal effect - observe elements with .reveal class
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
  revealEls.forEach((el) => observer.observe(el))
})
</script>

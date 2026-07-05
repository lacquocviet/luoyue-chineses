<template>
  <main>
    <!-- 1. Hero Section -->
    <HeroSection />

    <!-- 2. Stats Counter -->
    <StatsCounter />

    <!-- 3. Introduction Section -->
    <IntroSection />

    <!-- 4. Why Choose Us -->
    <WhyChooseUs />

    <!-- 5. Course Grid -->
    <CourseGrid />

    <!-- 6. CTA Banner -->
    <CtaBanner />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Luoyue Chinese | Trung tâm tiếng Trung 雒越中文 — HSK, Giao tiếp, Thiếu nhi',
  meta: [
    {
      name: 'description',
      content: 'Luoyue Chinese – Trung tâm đào tạo tiếng Trung hàng đầu tại Việt Nam. Luyện HSK 1–6, tiếng Trung giao tiếp, thiếu nhi, Business Chinese. Cam kết đầu ra, lớp nhỏ, giảng viên giàu kinh nghiệm.',
    },
    { property: 'og:title', content: 'Luoyue Chinese | 雒越中文' },
    { property: 'og:description', content: 'Chinh phục tiếng Trung cùng đội ngũ giảng viên giàu kinh nghiệm. HSK 1–6, giao tiếp, thiếu nhi, business. 1.200+ học viên.' },
  ],
})

// Re-trigger scroll reveal on page load
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
  )
  
  // Trì hoãn một chút để đảm bảo DOM của Nuxt đã render đầy đủ
  setTimeout(() => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el)
      // Nếu phần tử đã nằm trong viewport ngay khi load, kích hoạt luôn
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible')
      }
    })
  }, 100)
})
</script>

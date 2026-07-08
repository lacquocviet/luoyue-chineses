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

// Scroll reveal is handled globally in app.vue via IntersectionObserver.
// No local observer needed — it would conflict with the global one and
// cause the menu navigation bug (content not displaying after click).
</script>

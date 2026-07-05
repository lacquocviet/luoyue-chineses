<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <h1 class="page-hero-title">Lộ trình học <span class="text-primary">tiếng Trung</span></h1>
        <p class="page-hero-subtitle">Từ người mới bắt đầu đến thành thạo — hành trình được thiết kế khoa học</p>
      </div>
    </section>
    <RoadmapTimeline />
    <section class="section" style="text-align: center">
      <div class="container reveal">
        <h2 class="section-title" style="margin-bottom: 12px">Bắt đầu ngay hôm nay?</h2>
        <p class="section-subtitle" style="text-align: center; margin: 0 auto 32px">Nhận tư vấn lộ trình phù hợp miễn phí từ chuyên gia Luoyue Chinese</p>
        <NuxtLink to="/lien-he" class="btn btn-primary">Tư vấn lộ trình miễn phí</NuxtLink>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
useHead({ title: 'Lộ trình học tiếng Trung | Luoyue Chinese', meta: [{ name: 'description', content: 'Lộ trình học tiếng Trung từ sơ cấp đến cao cấp: HSK 1, 2, 3, 4, 5, 6. Thời gian học tập cụ thể, rõ ràng.' }] })
onMounted(() => {
  const obs = new IntersectionObserver((e) => e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') }), { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
})
</script>
<style scoped>
.page-hero { background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary)); padding: 120px 0 64px; color: white; }
.page-hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: white; margin-bottom: 12px; }
.page-hero-subtitle { font-size: 1.1rem; color: rgba(255,255,255,0.75); max-width: 540px; }
</style>

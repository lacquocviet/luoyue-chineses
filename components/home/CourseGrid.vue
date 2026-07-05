<template>
  <section class="section courses-section-glass">
    <!-- Background decorations for glass effect -->
    <div class="glass-bg-deco glass-deco-1" />
    <div class="glass-bg-deco glass-deco-2" />

    <div class="container relative-z">
      <!-- Header -->
      <div class="section-header reveal">
        <div class="badge">📚 Chương trình học</div>
        <h2 class="section-title">Khóa học <span class="text-primary">nổi bật</span></h2>
        <div class="divider" />
        <p class="section-subtitle">
          Từ người mới bắt đầu đến trình độ cao cấp — chúng tôi có khóa học phù hợp với mọi nhu cầu của bạn.
        </p>
      </div>

      <!-- Grid displaying 6 specified courses -->
      <div class="courses-grid">
        <CourseCard
          v-for="(course, i) in featuredCourses"
          :key="course.slug"
          :course="course"
          :style="{ transitionDelay: `${i * 60}ms` }"
          class="reveal"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const featuredCourses = [
  {
    slug: 'hsk-1',
    level: 'HSK 1',
    title: 'Khóa học HSK 1',
    desc: 'Dành cho người mới bắt đầu làm quen với tiếng Trung.',
    duration: '2 tháng',
    sessions: '24 buổi',
    price: '2.800.000₫',
    color: '#4ECDC4',
    emoji: '🌱',
  },
  {
    slug: 'hsk-2',
    level: 'HSK 2',
    title: 'Khóa học HSK 2',
    desc: 'Mở rộng vốn từ và giao tiếp trong các tình huống hằng ngày.',
    duration: '2 tháng',
    sessions: '24 buổi',
    price: '2.800.000₫',
    color: '#45B7D1',
    emoji: '🌿',
  },
  {
    slug: 'hsk-3',
    level: 'HSK 3',
    title: 'Khóa học HSK 3',
    desc: 'Xây dựng nền tảng ngữ pháp và nâng cao khả năng giao tiếp.',
    duration: '3 tháng',
    sessions: '36 buổi',
    price: '3.500.000₫',
    color: '#3498db',
    emoji: '🌳',
  },
  {
    slug: 'hsk-4',
    level: 'HSK 4',
    title: 'Khóa học HSK 4',
    desc: 'Tăng khả năng sử dụng tiếng Trung trong học tập và công việc.',
    duration: '3 tháng',
    sessions: '36 buổi',
    price: '3.500.000₫',
    color: '#9b59b6',
    emoji: '🎓',
  },
  {
    slug: 'business-chinese',
    level: 'Thương mại',
    title: 'Business Chinese',
    desc: 'Dành cho người đi làm, tập trung giao tiếp thương mại, đàm phán, xuất nhập khẩu.',
    duration: '3 tháng',
    sessions: '36 buổi',
    price: '4.000.000₫',
    color: '#e67e22',
    emoji: '💼',
  },
  {
    slug: 'giao-tiep',
    level: 'Giao tiếp',
    title: 'Tiếng Trung Giao tiếp',
    desc: 'Chương trình chú trọng hoàn toàn vào phản xạ nói, phát âm chuẩn tự nhiên như người bản xứ.',
    duration: '2.5 tháng',
    sessions: '30 buổi',
    price: '2.800.000₫',
    color: '#e74c3c',
    emoji: '🗣️',
  },
]

onMounted(() => {
  const obs = new IntersectionObserver((e) => e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') }), { threshold: 0.1 })
  document.querySelectorAll('.courses-section-glass .reveal').forEach((el) => obs.observe(el))
})
</script>

<style scoped>
.courses-section-glass {
  position: relative;
  background: linear-gradient(180deg, #edf2fc 0%, #f8faff 100%);
  overflow: hidden;
}

.glass-bg-deco {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 1;
  opacity: 0.4;
}

.glass-deco-1 {
  width: 400px;
  height: 400px;
  background: rgba(46, 134, 222, 0.15);
  top: 20%;
  right: -100px;
}

.glass-deco-2 {
  width: 300px;
  height: 300px;
  background: rgba(255, 233, 168, 0.2);
  bottom: 10%;
  left: -50px;
}

.relative-z {
  position: relative;
  z-index: 2;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header .section-title {
  margin-top: 12px;
}

.section-header .divider {
  margin: 16px auto 0;
}

.section-header .section-subtitle {
  text-align: center;
  margin-top: 16px;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .courses-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
}

@media (max-width: 768px) {
  .courses-grid { grid-template-columns: 1fr; }
}
</style>

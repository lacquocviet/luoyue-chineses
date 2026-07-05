<template>
  <section id="why-us" class="section why-us-glass">
    <!-- Background elements to enhance glass effect -->
    <div class="glass-bg-deco glass-deco-1" />
    <div class="glass-bg-deco glass-deco-2" />

    <div class="container relative-z">
      <!-- Header -->
      <div class="section-header reveal">
        <div class="badge">✨ Điểm khác biệt</div>
        <h2 class="section-title">Vì sao chọn <span class="text-primary">Luoyue?</span></h2>
        <div class="divider" />
        <p class="section-subtitle">
          Chúng tôi mang đến trải nghiệm học tiếng Trung toàn diện, hiệu quả và thân thiện nhất.
        </p>
      </div>

      <!-- Features grid -->
      <div class="why-grid">
        <div
          v-for="(item, i) in features"
          :key="i"
          class="why-card reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="why-icon-wrap">
            <span class="why-icon-emoji">{{ item.emoji }}</span>
          </div>
          <h3 class="why-card-title">{{ item.title }}</h3>
          <p class="why-card-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    emoji: '🎯',
    title: 'Lộ trình cá nhân hóa',
    desc: 'Lộ trình thiết kế riêng biệt phù hợp với xuất phát điểm, năng lực tiếp thu và mục tiêu của từng học viên.',
  },
  {
    emoji: '👩‍🏫',
    title: 'Giáo viên nhiều kinh nghiệm',
    desc: 'Đội ngũ giảng viên sở hữu chứng chỉ giảng dạy quốc tế, phát âm chuẩn và có nhiều năm kinh nghiệm đứng lớp.',
  },
  {
    emoji: '📚',
    title: 'Giáo trình cập nhật',
    desc: 'Học liệu luôn được tối ưu và cập nhật mới nhất theo chuẩn HSK 9 cấp quốc tế mới.',
  },
  {
    emoji: '🌏',
    title: 'Học Online & Offline',
    desc: 'Mô hình kết hợp linh hoạt trực tuyến và trực tiếp, hỗ trợ ghi lại buổi học để học viên ôn tập mọi lúc.',
  },
  {
    emoji: '📈',
    title: 'Theo dõi tiến độ học tập',
    desc: 'Hệ thống báo cáo học tập định kỳ và thi thử sát sao giúp học viên nhìn rõ sự tiến bộ từng tuần.',
  },
  {
    emoji: '🏆',
    title: 'Cam kết đồng hành',
    desc: 'Đồng hành chặt chẽ 24/7 và cam kết hỗ trợ học lại hoàn toàn miễn phí nếu không đạt kết quả đầu ra.',
  },
]
</script>

<style scoped>
.why-us-glass {
  position: relative;
  background: linear-gradient(180deg, #f8faff 0%, #edf2fc 100%);
  overflow: hidden;
}

.glass-bg-deco {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 1;
  opacity: 0.5;
}

.glass-deco-1 {
  width: 300px;
  height: 300px;
  background: rgba(46, 134, 222, 0.2);
  top: 10%;
  left: -50px;
}

.glass-deco-2 {
  width: 400px;
  height: 400px;
  background: rgba(255, 233, 168, 0.25);
  bottom: 5%;
  right: -100px;
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

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

/* Glassmorphism 3D Water Effect Card */
.why-card {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 20px;
  padding: 36px 30px;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.05),
    inset 0 4px 4px rgba(255, 255, 255, 0.3),
    inset 0 -4px 6px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.why-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.65);
  border-color: rgba(46, 134, 222, 0.35);
  box-shadow: 
    0 20px 40px rgba(46, 134, 222, 0.08),
    inset 0 4px 4px rgba(255, 255, 255, 0.4),
    inset 0 -4px 6px rgba(0, 0, 0, 0.01);
}

.why-icon-wrap {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
}

.why-icon-emoji {
  font-size: 1.75rem;
}

.why-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--color-ink);
}

.why-card-desc {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.65;
}

@media (max-width: 1024px) {
  .why-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .why-grid { grid-template-columns: 1fr; }
}
</style>

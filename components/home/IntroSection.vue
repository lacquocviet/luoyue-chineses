<template>
  <section class="intro-section section">
    <div class="container intro-grid">
      <!-- Left: Introduction Text -->
      <div class="intro-content reveal">
        <h2 class="section-title text-left">Giới thiệu <span class="text-primary">Luoyue Chinese</span></h2>
        <p class="about-p">
          Luoyue Chinese được thành lập với mong muốn giúp người Việt học tiếng Trung một cách bài bản, dễ hiểu và ứng dụng thực tế. Chúng tôi tin rằng học ngôn ngữ không chỉ để thi mà còn để giao tiếp và mở rộng cơ hội nghề nghiệp.
        </p>
        <div class="intro-features">
          <div class="intro-feat-item">
            <span class="feat-icon">🎯</span>
            <div>
              <h4>Học thông minh, nhớ lâu hơn</h4>
              <p>Phương pháp độc quyền rút ngắn 30% thời gian học chữ Hán.</p>
            </div>
          </div>
          <div class="intro-feat-item">
            <span class="feat-icon">🗣️</span>
            <div>
              <h4>Phản xạ giao tiếp tự nhiên</h4>
              <p>Chú trọng tối đa việc luyện nói và chỉnh phát âm chuẩn ngay từ đầu.</p>
            </div>
          </div>
        </div>
        <NuxtLink to="/gioi-thieu" class="btn btn-primary intro-btn">Tìm hiểu thêm về chúng tôi</NuxtLink>
      </div>

      <!-- Right: Class Image -->
      <div class="intro-image-wrap reveal" style="transition-delay: 150ms;">
        <div class="image-border-decoration">
          <img src="/sources/class.png" alt="Lớp học tại Luoyue Chinese" class="intro-img" onerror="this.src='/logo.png'; this.style.objectFit='contain'; this.style.padding='40px'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const obs = new IntersectionObserver((e) => e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') }), { threshold: 0.15 })
  document.querySelectorAll('.intro-section .reveal').forEach((el) => obs.observe(el))
})
</script>

<style scoped>
.intro-section {
  background: white;
  overflow: hidden;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}

.intro-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.text-left {
  text-align: left;
  margin-bottom: 0;
}

.about-p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-ink);
  opacity: 0.85;
}

.intro-features {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 10px 0;
}

.intro-feat-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.feat-icon {
  font-size: 1.5rem;
  background: var(--color-accent);
  padding: 8px;
  border-radius: 12px;
  line-height: 1;
}

.intro-feat-item h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-ink);
  margin-bottom: 4px;
}

.intro-feat-item p {
  font-size: 0.875rem;
  color: var(--color-muted);
  line-height: 1.5;
}

.intro-btn {
  margin-top: 10px;
}

.intro-image-wrap {
  display: flex;
  justify-content: center;
}

.image-border-decoration {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  background: var(--color-accent);
  aspect-ratio: 4/3;
  width: 100%;
  max-width: 480px;
}

.intro-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.intro-img:hover {
  transform: scale(1.05);
}

@media (max-width: 992px) {
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .intro-image-wrap {
    order: -1;
  }
}
</style>

<template>
  <section class="hero">
    <!-- Background with overlay -->
    <div class="hero-bg">
      <div class="hero-overlay" />
      <!-- Animated background shapes -->
      <div class="hero-shape hero-shape-1" />
      <div class="hero-shape hero-shape-2" />
      <div class="hero-shape hero-shape-3" />
    </div>

    <div class="container hero-grid">
      <!-- Left column: Content -->
      <div class="hero-content">
        <!-- Badges row -->
        <div class="hero-badges reveal">
          <span class="badge">
            <span>✓</span> Online & Offline
          </span>
          <span class="badge">
            <span>✓</span> HSK 1–6
          </span>
          <span class="badge">
            <span>✓</span> Business Chinese
          </span>
        </div>

        <!-- H1 -->
        <h1 class="hero-title reveal">
          LUOYUE CHINESE<br />
          <span class="hero-title-main">Học tiếng Trung thông minh,</span><br />
          <span class="hero-title-accent">chinh phục HSK dễ dàng.</span>
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle reveal">
          Lộ trình cá nhân hóa • Giáo viên tận tâm • Cam kết đồng hành
        </p>

        <!-- CTA Buttons -->
        <div class="hero-ctas reveal">
          <NuxtLink to="/lien-he" class="btn btn-primary hero-btn-main">
            <BookOpen :size="20" />
            Đăng ký học
          </NuxtLink>
        </div>
      </div>

      <!-- Right column: Banner -->
      <div class="hero-banner reveal">
        <div class="banner-wrapper">
          <img src="/sources/banner.jpeg" alt="Luoyue Chinese Banner" class="banner-img" onerror="this.src='/logo.png'; this.style.objectFit='contain'; this.style.padding='20px'" />
        </div>
      </div>
    </div>

    <!-- Scroll down indicator -->
    <a href="#stats" class="hero-scroll">
      <ChevronDown :size="24" />
    </a>
  </section>
</template>

<script setup lang="ts">
import { BookOpen, ChevronDown } from '@lucide/vue'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 60px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0f2d6b 0%, #1B4F91 35%, #2E86DE 70%, #4ea3f0 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.hero-shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.08;
  animation: float 8s ease-in-out infinite;
}

.hero-shape-1 {
  width: 600px;
  height: 600px;
  background: var(--color-accent-dark);
  top: -150px;
  right: -100px;
  animation-delay: 0s;
}

.hero-shape-2 {
  width: 400px;
  height: 400px;
  background: white;
  bottom: -80px;
  left: -80px;
  animation-delay: 3s;
}

.hero-shape-3 {
  width: 250px;
  height: 250px;
  background: var(--color-accent);
  top: 40%;
  right: 15%;
  animation-delay: 5s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  33% { transform: translateY(-20px) rotate(5deg); }
  66% { transform: translateY(10px) rotate(-3deg); }
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  align-items: center;
  width: 100%;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-badges .badge {
  background: rgba(255, 233, 168, 0.15);
  border: 1px solid rgba(255, 233, 168, 0.4);
  color: var(--color-accent);
  backdrop-filter: blur(8px);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.25rem);
  font-weight: 900;
  color: white;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.hero-title-main {
  font-size: 0.85em;
  font-weight: 800;
}

.hero-title-accent {
  color: var(--color-accent-dark);
}

.hero-subtitle {
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  border-left: 3px solid var(--color-accent-dark);
  padding-left: 12px;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.hero-btn-main {
  padding: 16px 36px;
  font-size: 1.05rem;
  font-weight: 700;
  box-shadow: 0 8px 32px rgba(255, 233, 168, 0.2);
}

.hero-banner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-wrapper {
  width: 100%;
  max-width: 450px;
  aspect-ratio: 4/3;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  border: 4px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-scroll {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.6);
  animation: bounce 2s ease-in-out infinite;
  z-index: 2;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 48px;
    padding-top: 40px;
  }
  .hero-content {
    align-items: center;
  }
  .hero-subtitle {
    border-left: none;
    padding-left: 0;
  }
}
</style>

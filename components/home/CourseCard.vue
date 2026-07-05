<template>
  <div class="course-card">
    <!-- Top Block with emoji -->
    <div class="course-top-block">
      <div class="course-emoji-wrap">
        <span class="course-emoji">{{ course.emoji }}</span>
      </div>
      <div class="course-badge" :style="{ background: course.color + '20', color: course.color }">
        {{ course.level }}
      </div>
    </div>

    <!-- Content -->
    <div class="course-body">
      <h3 class="course-title">{{ course.title }}</h3>
      <p class="course-desc">{{ course.desc }}</p>

      <!-- Meta info -->
      <div class="course-meta">
        <div class="course-meta-item">
          <Clock :size="14" />
          <span>{{ course.duration }}</span>
        </div>
        <div class="course-meta-item">
          <BookOpen :size="14" />
          <span>{{ course.sessions }}</span>
        </div>
      </div>

      <!-- Price + CTA -->
      <div class="course-footer">
        <div class="course-price">{{ course.price }}</div>
        <NuxtLink :to="`/khoa-hoc/${course.slug}`" class="btn btn-primary course-btn">
          Xem chi tiết
          <ArrowRight :size="16" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, BookOpen, ArrowRight } from '@lucide/vue'

defineProps<{
  course: {
    slug: string
    level: string
    title: string
    desc: string
    duration: string
    sessions: string
    price: string
    color: string
    emoji: string
  }
}>()
</script>

<style scoped>
/* Glassmorphism Card Style with 3D Water effect */
.course-card {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.05),
    inset 0 4px 4px rgba(255, 255, 255, 0.3),
    inset 0 -4px 6px rgba(0, 0, 0, 0.02);
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.course-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: rgba(255, 255, 255, 0.65);
  border-color: rgba(46, 134, 222, 0.35);
  box-shadow: 
    0 20px 40px rgba(46, 134, 222, 0.08),
    inset 0 4px 4px rgba(255, 255, 255, 0.4),
    inset 0 -4px 6px rgba(0, 0, 0, 0.01);
}

.course-top-block {
  padding: 28px 28px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.course-emoji-wrap {
  width: 56px;
  height: 56px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
}

.course-emoji {
  font-size: 1.8rem;
  line-height: 1;
}

.course-badge {
  font-size: 0.8rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 12px;
}

.course-body {
  padding: 16px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
}

.course-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--color-ink);
}

.course-desc {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.6;
  flex: 1;
}

.course-meta {
  display: flex;
  gap: 16px;
}

.course-meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.825rem;
  color: var(--color-muted);
  font-weight: 500;
}

.course-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(0,0,0,0.06);
  padding-top: 20px;
  margin-top: 4px;
}

.course-price {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--color-primary-dark);
}

.course-btn {
  padding: 10px 18px;
  font-size: 0.85rem;
}
</style>

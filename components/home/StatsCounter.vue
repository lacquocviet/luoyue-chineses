<template>
  <section id="stats" class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="stat-item reveal"
          :style="{ transitionDelay: `${i * 100}ms` }"
        >
          <div class="stat-icon">{{ stat.emoji }}</div>
          <div class="stat-number">
            <span class="counter">{{ displayValues[i] }}</span>{{ stat.suffix }}
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const stats = [
  { emoji: '👨‍🎓', number: 1000, suffix: '+', label: 'Học viên' },
  { emoji: '🏆', number: 98, suffix: '%', label: 'Đạt mục tiêu' },
  { emoji: '👨‍🏫', number: 8, suffix: '+', label: 'Giảng viên' },
  { emoji: '📚', number: 20, suffix: '+', label: 'Khóa học' },
  { emoji: '⭐', number: 4.8, suffix: '★', label: 'Đánh giá' },
]

const displayValues = ref(stats.map(() => 0))
let animated = false

function animateCounters() {
  if (animated) return
  animated = true

  stats.forEach((stat, i) => {
    const duration = 1800
    const steps = 60
    const increment = stat.number / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      const rawValue = increment * step
      // Handle float display for rating
      if (stat.number === 4.8) {
        displayValues.value[i] = Number(Math.min(rawValue, stat.number).toFixed(1))
      } else {
        displayValues.value[i] = Math.min(Math.round(rawValue), stat.number)
      }
      if (step >= steps) {
        displayValues.value[i] = stat.number
        clearInterval(timer)
      }
    }, duration / steps)
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
        }
      })
    },
    { threshold: 0.3 }
  )

  const section = document.querySelector('.stats-section')
  if (section) observer.observe(section)
})
</script>

<style scoped>
.stats-section {
  padding: 56px 0;
  background: var(--color-accent);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.stat-number {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 900;
  font-family: var(--font-sans);
  color: var(--color-primary-dark);
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 2px;
}

.counter {
  color: var(--color-primary-dark);
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-ink);
  opacity: 0.9;
}

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; }
}

@media (max-width: 600px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 400px) {
  .stats-grid { grid-template-columns: 1fr; }
}
</style>

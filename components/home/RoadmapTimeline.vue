<template>
  <section class="section bg-primary-light">
    <div class="container">
      <!-- Header -->
      <div class="section-header reveal">
        <div class="badge">🗺️ Lộ trình</div>
        <h2 class="section-title">Lộ trình học <span class="text-primary">tiếng Trung</span></h2>
        <div class="divider" />
        <p class="section-subtitle">
          Từ người mới bắt đầu đến thành thạo — hành trình rõ ràng, có lộ trình cụ thể.
        </p>
      </div>

      <!-- Timeline -->
      <div class="timeline reveal">
        <div
          v-for="(step, i) in steps"
          :key="i"
          class="timeline-item"
        >
          <!-- Connector line (left of step) -->
          <div v-if="i < steps.length - 1" class="timeline-connector" />

          <!-- Step circle -->
          <div class="timeline-step" :style="{ background: step.color }">
            <span class="step-num">{{ i + 1 }}</span>
          </div>

          <!-- Step card -->
          <div class="timeline-card">
            <div class="step-header">
              <span class="step-level chinese">{{ step.chinese }}</span>
              <span class="step-badge" :style="{ background: step.color + '20', color: step.color }">
                {{ step.duration }}
              </span>
            </div>
            <div class="step-label">{{ step.label }}</div>
            <div class="step-desc">{{ step.desc }}</div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="timeline-cta reveal">
        <NuxtLink to="/lo-trinh-hoc" class="btn btn-primary">
          Xem lộ trình chi tiết
          <ArrowRight :size="18" />
        </NuxtLink>
        <NuxtLink to="/lien-he" class="btn btn-outline">
          Tư vấn lộ trình miễn phí
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const steps = [
  {
    label: 'Người mới bắt đầu',
    chinese: '零基础',
    desc: 'Làm quen bảng chữ Pinyin, thanh điệu, số đếm và chào hỏi cơ bản',
    duration: 'Xuất phát',
    color: '#6B7280',
  },
  {
    label: 'HSK 1 — Sơ cấp 1',
    chinese: 'HSK一级',
    desc: '150 từ vựng, câu đơn giản, giao tiếp hàng ngày',
    duration: '2 tháng',
    color: '#4ECDC4',
  },
  {
    label: 'HSK 2 — Sơ cấp 2',
    chinese: 'HSK二级',
    desc: '300 từ, câu phức, mô tả người và vật xung quanh',
    duration: '2 tháng',
    color: '#45B7D1',
  },
  {
    label: 'HSK 3 — Trung cấp 1',
    chinese: 'HSK三级',
    desc: '600 từ, giao tiếp công việc và học tập linh hoạt',
    duration: '3 tháng',
    color: '#2E86DE',
  },
  {
    label: 'HSK 4 — Trung cấp 2',
    chinese: 'HSK四级',
    desc: '1.200 từ, B2 châu Âu, làm việc với đối tác Trung Quốc',
    duration: '3 tháng',
    color: '#1B4F91',
  },
  {
    label: 'HSK 5 — Cao cấp 1',
    chinese: 'HSK五级',
    desc: '2.500 từ, đọc báo, xem phim không cần phụ đề',
    duration: '4 tháng',
    color: '#6C3483',
  },
  {
    label: 'HSK 6 — Thành thạo',
    chinese: 'HSK六级',
    desc: '5.000+ từ, tương đương người bản ngữ, du học, định cư',
    duration: '5 tháng',
    color: '#C0392B',
  },
]
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-header .divider { margin: 16px auto 0; }
.section-header .section-subtitle { text-align: center; margin-top: 16px; }

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
}

.timeline-connector {
  position: absolute;
  left: 27px;
  top: 56px;
  width: 2px;
  height: calc(100% + 4px);
  background: linear-gradient(to bottom, var(--color-primary), var(--color-border));
  z-index: 0;
}

.timeline-step {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  margin-top: 16px;
}

.step-num {
  font-size: 1.1rem;
  font-weight: 900;
  color: white;
}

.timeline-card {
  background: white;
  border-radius: var(--radius-md);
  padding: 20px 24px;
  flex: 1;
  margin-bottom: 16px;
  border: 1.5px solid var(--color-border);
  box-shadow: var(--shadow-card);
  transition: all 0.3s ease;
}

.timeline-card:hover {
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-primary);
  transform: translateX(6px);
}

.step-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
}

.step-level {
  font-size: 0.8rem;
  color: var(--color-muted);
}

.step-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: var(--radius-full);
}

.step-label {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-ink);
  margin-bottom: 6px;
}

.step-desc {
  font-size: 0.85rem;
  color: var(--color-muted);
  line-height: 1.6;
}

.timeline-cta {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 48px;
  flex-wrap: wrap;
}
</style>

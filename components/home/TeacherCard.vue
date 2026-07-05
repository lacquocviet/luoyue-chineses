<template>
  <section class="section">
    <div class="container">
      <!-- Header -->
      <div class="section-header reveal">
        <div class="badge">👨‍🏫 Đội ngũ</div>
        <h2 class="section-title">Đội ngũ <span class="text-primary">giảng viên</span></h2>
        <div class="divider" />
        <p class="section-subtitle">
          Giảng viên giàu kinh nghiệm, nhiệt huyết, đã từng học tập và làm việc tại Trung Quốc.
        </p>
      </div>

      <!-- Teachers grid -->
      <div class="teachers-grid">
        <div
          v-for="(teacher, i) in teachers"
          :key="i"
          class="teacher-card reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <!-- Avatar -->
          <div class="teacher-avatar" :style="{ background: teacher.bgColor }">
            <span class="teacher-initials">{{ teacher.initials }}</span>
            <div class="teacher-flag">{{ teacher.flag }}</div>
          </div>

          <!-- Info -->
          <div class="teacher-info">
            <h3 class="teacher-name">{{ teacher.name }}</h3>
            <p class="teacher-title">{{ teacher.title }}</p>

            <div class="teacher-badges">
              <span v-for="badge in teacher.badges" :key="badge" class="teacher-badge">
                {{ badge }}
              </span>
            </div>

            <div class="teacher-stats">
              <div class="teacher-stat">
                <span class="teacher-stat-num">{{ teacher.students }}</span>
                <span class="teacher-stat-label">Học viên</span>
              </div>
              <div class="teacher-stat">
                <span class="teacher-stat-num">{{ teacher.years }}</span>
                <span class="teacher-stat-label">Năm KN</span>
              </div>
              <div class="teacher-stat">
                <span class="teacher-stat-num">{{ teacher.rating }}</span>
                <span class="teacher-stat-label">⭐ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View all CTA -->
      <div class="teachers-cta reveal">
        <NuxtLink to="/giang-vien" class="btn btn-outline">
          Xem tất cả giảng viên
          <ArrowRight :size="18" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const teachers = [
  {
    name: 'Thầy Nguyễn Minh Trí',
    initials: 'MT',
    title: 'Giảng viên HSK 4–6 & Business Chinese',
    flag: '🇨🇳',
    bgColor: 'linear-gradient(135deg, #2E86DE, #1B4F91)',
    badges: ['HSK 6', 'Thạc sĩ Bắc Kinh', '8 năm KN'],
    students: '320+',
    years: '8',
    rating: '4.9',
  },
  {
    name: 'Cô Trần Thị Lan Anh',
    initials: 'LA',
    title: 'Giảng viên HSK 1–3 & Thiếu nhi',
    flag: '🇨🇳',
    bgColor: 'linear-gradient(135deg, #FF6B6B, #E74C3C)',
    badges: ['HSK 5', 'Tốt nghiệp Thượng Hải', '5 năm KN'],
    students: '250+',
    years: '5',
    rating: '4.8',
  },
  {
    name: 'Thầy Lê Quốc Khánh',
    initials: 'QK',
    title: 'Giảng viên Giao tiếp & Phát âm',
    flag: '🇨🇳',
    bgColor: 'linear-gradient(135deg, #4ECDC4, #45B7D1)',
    badges: ['HSK 5', 'CertTCHN', '6 năm KN'],
    students: '180+',
    years: '6',
    rating: '4.9',
  },
  {
    name: 'Cô Phạm Thanh Hương',
    initials: 'TH',
    title: 'Giảng viên HSK 1–4 & Giao tiếp',
    flag: '🇨🇳',
    bgColor: 'linear-gradient(135deg, #F5C542, #E67E22)',
    badges: ['HSK 5', 'Đại học Ngoại ngữ', '4 năm KN'],
    students: '200+',
    years: '4',
    rating: '4.7',
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

.teachers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.teacher-card {
  background: white;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--color-border);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.teacher-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-6px);
}

.teacher-avatar {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.teacher-initials {
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.teacher-flag {
  position: absolute;
  bottom: 10px;
  right: 12px;
  font-size: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

.teacher-info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.teacher-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--color-ink);
  line-height: 1.3;
}

.teacher-title {
  font-size: 0.8rem;
  color: var(--color-muted);
  line-height: 1.5;
}

.teacher-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.teacher-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 8px;
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  border-radius: var(--radius-full);
}

.teacher-stats {
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--color-border);
}

.teacher-stat {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.teacher-stat-num {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary-dark);
}

.teacher-stat-label {
  font-size: 0.7rem;
  color: var(--color-muted);
}

.teachers-cta {
  text-align: center;
  margin-top: 40px;
}

@media (max-width: 1024px) {
  .teachers-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .teachers-grid { grid-template-columns: 1fr; }
}
</style>

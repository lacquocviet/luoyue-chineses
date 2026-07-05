<template>
  <section class="section bg-surface">
    <div class="container">
      <!-- Header -->
      <div class="section-header reveal">
        <div class="badge">💬 Học viên nói gì</div>
        <h2 class="section-title">Cảm nhận từ <span class="text-primary">học viên</span></h2>
        <div class="divider" />
      </div>

      <!-- Carousel wrapper -->
      <div class="testimonial-wrap reveal">
        <button class="carousel-btn prev" @click="prev" aria-label="Trước">
          <ChevronLeft :size="24" />
        </button>

        <div class="testimonial-viewport">
          <div
            class="testimonial-track"
            :style="{ transform: `translateX(-${current * 100}%)` }"
          >
            <div
              v-for="(item, i) in testimonials"
              :key="i"
              class="testimonial-slide"
            >
              <div class="testimonial-card">
                <!-- Stars -->
                <div class="stars">
                  <Star v-for="s in 5" :key="s" :size="18" fill="currentColor" class="star" />
                </div>

                <!-- Quote -->
                <p class="testimonial-text">"{{ item.text }}"</p>

                <!-- Achievement badge -->
                <div class="achievement">
                  <Trophy :size="16" />
                  {{ item.achievement }}
                </div>

                <!-- Author -->
                <div class="testimonial-author">
                  <div class="author-avatar" :style="{ background: item.avatarColor }">
                    {{ item.initials }}
                  </div>
                  <div class="author-info">
                    <div class="author-name">{{ item.name }}</div>
                    <div class="author-role">{{ item.role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-btn next" @click="next" aria-label="Tiếp">
          <ChevronRight :size="24" />
        </button>
      </div>

      <!-- Dots -->
      <div class="carousel-dots reveal">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          class="dot"
          :class="{ active: i === current }"
          @click="current = i"
          :aria-label="`Slide ${i + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronLeft, ChevronRight, Star, Trophy } from '@lucide/vue'

const testimonials = [
  {
    text: 'Sau 3 tháng học HSK 3 tại Luoyue Chinese, mình đã đỗ với điểm 285/300. Thầy cô dạy rất tận tâm, phương pháp dễ hiểu. Mình đặc biệt thích cách thầy giải thích ngữ pháp — không khô khan chút nào!',
    achievement: '🏆 Đỗ HSK 3 — 285/300',
    name: 'Nguyễn Thị Mai',
    role: 'Sinh viên Đại học Ngoại thương',
    initials: 'NM',
    avatarColor: 'linear-gradient(135deg, #2E86DE, #1B4F91)',
  },
  {
    text: 'Mình học Business Chinese để phục vụ công việc xuất nhập khẩu. Chỉ sau 2 tháng, mình đã có thể email và giao tiếp với đối tác Trung Quốc độc lập. Đây là đầu tư xứng đáng nhất trong sự nghiệp của mình!',
    achievement: '💼 Thăng chức Giám đốc XNK',
    name: 'Trần Văn Hùng',
    role: 'Giám đốc xuất nhập khẩu',
    initials: 'TH',
    avatarColor: 'linear-gradient(135deg, #F5C542, #E67E22)',
  },
  {
    text: 'Con tôi 8 tuổi học tại đây được 6 tháng rồi. Cô giáo dạy rất vui, bé rất thích học. Cứ mỗi buổi học là bé kể chuyện học được gì, tiến bộ thấy rõ từng tuần!',
    achievement: '🌟 Đạt giải Nhì tiếng Trung thiếu nhi cấp quận',
    name: 'Chị Lê Thanh Thảo',
    role: 'Phụ huynh học sinh lớp 3',
    initials: 'TT',
    avatarColor: 'linear-gradient(135deg, #FF6B6B, #E74C3C)',
  },
  {
    text: 'Đã thử nhiều trung tâm nhưng chỉ ở Luoyue Chinese mình mới cảm thấy tiến bộ thực sự. Lớp nhỏ, thầy cô chú ý từng người. Đã đỗ HSK 5 sau 1 năm học — vượt mục tiêu ban đầu!',
    achievement: '🎓 Đỗ HSK 5 — Học bổng du học Trung Quốc',
    name: 'Phạm Quang Đức',
    role: 'Du học sinh Đại học Phúc Đán, Thượng Hải',
    initials: 'QĐ',
    avatarColor: 'linear-gradient(135deg, #6C3483, #4A235A)',
  },
]

const current = ref(0)

function prev() {
  current.value = (current.value - 1 + testimonials.length) % testimonials.length
}
function next() {
  current.value = (current.value + 1) % testimonials.length
}

// Auto-play
let autoplay: ReturnType<typeof setInterval>
onMounted(() => {
  autoplay = setInterval(next, 5000)
})
onUnmounted(() => clearInterval(autoplay))
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.section-header .divider { margin: 16px auto 0; }

.testimonial-wrap {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
}

.carousel-btn {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 1.5px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-primary);
  box-shadow: var(--shadow-card);
  transition: all 0.2s ease;
}

.carousel-btn:hover {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.testimonial-viewport {
  flex: 1;
  overflow: hidden;
  border-radius: var(--radius-lg);
}

.testimonial-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.testimonial-slide {
  min-width: 100%;
  padding: 4px;
}

.testimonial-card {
  background: white;
  border-radius: var(--radius-lg);
  padding: 40px 48px;
  border: 1.5px solid var(--color-border);
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stars {
  display: flex;
  gap: 4px;
}

.star {
  color: var(--color-accent-dark);
}

.testimonial-text {
  font-size: 1.1rem;
  color: var(--color-ink);
  line-height: 1.8;
  font-style: italic;
}

.achievement {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-accent);
  color: var(--color-primary-dark);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: 0.875rem;
  width: fit-content;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 16px;
  border-top: 1px solid var(--color-border);
}

.author-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
}

.author-name {
  font-weight: 700;
  color: var(--color-ink);
}

.author-role {
  font-size: 0.85rem;
  color: var(--color-muted);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-border);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: var(--color-primary);
  transform: scale(1.3);
}

@media (max-width: 640px) {
  .testimonial-card { padding: 28px 20px; }
  .testimonial-text { font-size: 0.95rem; }
  .carousel-btn { width: 40px; height: 40px; }
}
</style>

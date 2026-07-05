<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Lịch khai giảng</span>
        </nav>
        <h1 class="page-hero-title">Lịch <span class="text-primary">khai giảng</span></h1>
        <p class="page-hero-subtitle">Các lớp sắp khai giảng — đăng ký sớm để nhận ưu đãi học phí</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Filter -->
        <div class="schedule-filter reveal">
          <button
            v-for="f in filters"
            :key="f"
            class="filter-tab"
            :class="{ active: activeFilter === f }"
            @click="activeFilter = f"
          >{{ f }}</button>
        </div>

        <!-- Schedule cards -->
        <div class="schedule-grid">
          <div
            v-for="(cls, i) in filteredClasses"
            :key="i"
            class="schedule-card reveal"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <div class="schedule-header" :style="{ background: cls.color }">
              <span class="schedule-level">{{ cls.level }}</span>
              <span class="schedule-type">{{ cls.mode }}</span>
            </div>
            <div class="schedule-body">
              <h3 class="schedule-title">{{ cls.title }}</h3>
              <div class="schedule-details">
                <div class="detail-row">
                  <CalendarDays :size="15" /><span>Khai giảng: <strong>{{ cls.startDate }}</strong></span>
                </div>
                <div class="detail-row">
                  <Clock :size="15" /><span>Lịch học: {{ cls.schedule }}</span>
                </div>
                <div class="detail-row">
                  <Users :size="15" /><span>Còn {{ cls.slots }} chỗ trống</span>
                </div>
                <div class="detail-row">
                  <MapPin :size="15" /><span>{{ cls.location }}</span>
                </div>
              </div>
              <div class="schedule-footer">
                <span class="schedule-price">{{ cls.price }}</span>
                <NuxtLink to="/lien-he" class="btn btn-primary schedule-btn">Đăng ký</NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- No results -->
        <div v-if="filteredClasses.length === 0" class="no-results">
          <span>😅</span>
          <p>Không có lớp nào khớp bộ lọc hiện tại. Vui lòng chọn bộ lọc khác.</p>
        </div>

        <!-- CTA banner -->
        <div class="schedule-cta-box reveal">
          <div class="schedule-cta-text">
            <h3>Không tìm thấy lớp phù hợp?</h3>
            <p>Liên hệ chúng tôi để được tư vấn và sắp xếp lớp học theo lịch của bạn.</p>
          </div>
          <NuxtLink to="/lien-he" class="btn btn-primary">Liên hệ tư vấn</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { CalendarDays, Clock, Users, MapPin } from '@lucide/vue'

useHead({
  title: 'Lịch khai giảng | Luoyue Chinese',
  meta: [{ name: 'description', content: 'Lịch khai giảng các lớp tiếng Trung HSK 1-6, giao tiếp, thiếu nhi, Business Chinese tại Luoyue Chinese. Đăng ký sớm nhận ưu đãi.' }],
})

const classes = [
  { level: 'HSK 1', title: 'HSK 1 — Sơ cấp 1 (Buổi tối)', mode: 'Online', color: '#4ECDC4', startDate: '15/07/2025', schedule: 'Thứ 3, 5 · 19:00–21:00', slots: 8, location: 'Zoom (link gửi sau)', price: '2.800.000₫', category: 'HSK' },
  { level: 'HSK 2', title: 'HSK 2 — Sơ cấp 2 (Cuối tuần)', mode: 'Offline', color: '#45B7D1', startDate: '20/07/2025', schedule: 'Thứ 7, CN · 08:00–10:00', slots: 5, location: 'Cơ sở Q.1, TP.HCM', price: '2.800.000₫', category: 'HSK' },
  { level: 'HSK 3', title: 'HSK 3 — Trung cấp 1 (Buổi sáng)', mode: 'Offline', color: '#2E86DE', startDate: '18/07/2025', schedule: 'Thứ 2, 4, 6 · 07:30–09:00', slots: 3, location: 'Cơ sở Q.3, TP.HCM', price: '3.500.000₫', category: 'HSK' },
  { level: 'HSK 4', title: 'HSK 4 — Trung cấp 2 (Buổi tối)', mode: 'Online', color: '#1B4F91', startDate: '22/07/2025', schedule: 'Thứ 2, 4 · 20:00–22:00', slots: 10, location: 'Zoom (link gửi sau)', price: '3.500.000₫', category: 'HSK' },
  { level: 'Giao tiếp', title: 'Giao tiếp thực tế (Buổi tối)', mode: 'Offline', color: '#F5C542', startDate: '16/07/2025', schedule: 'Thứ 3, 5 · 18:00–19:30', slots: 6, location: 'Cơ sở Q.1, TP.HCM', price: '2.800.000₫', category: 'Giao tiếp' },
  { level: 'Thiếu nhi', title: 'Tiếng Trung thiếu nhi (Cuối tuần)', mode: 'Offline', color: '#FF6B6B', startDate: '19/07/2025', schedule: 'Thứ 7 · 09:00–10:30', slots: 7, location: 'Cơ sở Q.1, TP.HCM', price: '2.500.000₫', category: 'Thiếu nhi' },
  { level: 'Business', title: 'Business Chinese (Buổi tối)', mode: 'Online', color: '#6C3483', startDate: '21/07/2025', schedule: 'Thứ 3, 5 · 20:00–21:30', slots: 9, location: 'Zoom (link gửi sau)', price: '4.000.000₫', category: 'Business' },
  { level: 'HSK 5', title: 'HSK 5 — Cao cấp 1 (Cuối tuần)', mode: 'Offline', color: '#6C3483', startDate: '26/07/2025', schedule: 'Thứ 7, CN · 14:00–16:00', slots: 4, location: 'Cơ sở Q.3, TP.HCM', price: '4.200.000₫', category: 'HSK' },
]

const filters = ['Tất cả', 'HSK', 'Giao tiếp', 'Thiếu nhi', 'Business', 'Online', 'Offline']
const activeFilter = ref('Tất cả')

const filteredClasses = computed(() => {
  if (activeFilter.value === 'Tất cả') return classes
  if (activeFilter.value === 'Online') return classes.filter(c => c.mode === 'Online')
  if (activeFilter.value === 'Offline') return classes.filter(c => c.mode === 'Offline')
  return classes.filter(c => c.category === activeFilter.value)
})

onMounted(() => {
  const obs = new IntersectionObserver((e) => e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') }), { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
})
</script>

<style scoped>
.page-hero { background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary)); padding: 120px 0 64px; color: white; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
.breadcrumb a { color: rgba(255,255,255,0.7); }
.page-hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: white; margin-bottom: 12px; }
.page-hero-subtitle { font-size: 1.1rem; color: rgba(255,255,255,0.75); }

.schedule-filter { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 36px; }
.filter-tab { padding: 8px 18px; border-radius: var(--radius-full); font-size: 0.875rem; font-weight: 600; border: 1.5px solid var(--color-border); background: white; color: var(--color-muted); cursor: pointer; transition: all 0.2s; }
.filter-tab:hover { border-color: var(--color-primary); color: var(--color-primary); }
.filter-tab.active { background: var(--color-primary); border-color: var(--color-primary); color: white; }

.schedule-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-bottom: 40px; }

.schedule-card { background: white; border-radius: var(--radius-md); border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); overflow: hidden; transition: all 0.3s; }
.schedule-card:hover { border-color: var(--color-primary); box-shadow: var(--shadow-card-hover); transform: translateY(-4px); }

.schedule-header { padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; }
.schedule-level { font-size: 1.1rem; font-weight: 900; color: white; }
.schedule-type { font-size: 0.75rem; font-weight: 700; padding: 3px 10px; background: rgba(255,255,255,0.25); color: white; border-radius: var(--radius-full); }

.schedule-body { padding: 20px; display: flex; flex-direction: column; gap: 14px; }
.schedule-title { font-size: 0.95rem; font-weight: 700; color: var(--color-ink); }

.schedule-details { display: flex; flex-direction: column; gap: 8px; }
.detail-row { display: flex; align-items: center; gap: 8px; font-size: 0.82rem; color: var(--color-muted); }
.detail-row svg { flex-shrink: 0; color: var(--color-primary); }
.detail-row strong { color: var(--color-ink); }

.schedule-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid var(--color-border); margin-top: 4px; }
.schedule-price { font-size: 1rem; font-weight: 700; color: var(--color-primary-dark); }
.schedule-btn { padding: 8px 16px; font-size: 0.8rem; }

.no-results { text-align: center; padding: 60px 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.no-results span { font-size: 3rem; }
.no-results p { color: var(--color-muted); }

.schedule-cta-box { background: var(--color-primary-light); border-radius: var(--radius-md); padding: 32px 36px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border: 1.5px solid var(--color-border); }
.schedule-cta-text h3 { font-size: 1.1rem; font-weight: 700; color: var(--color-ink); margin-bottom: 6px; }
.schedule-cta-text p { font-size: 0.875rem; color: var(--color-muted); }

@media (max-width: 1024px) { .schedule-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .schedule-grid { grid-template-columns: 1fr; } .schedule-cta-box { flex-direction: column; text-align: center; } }
</style>

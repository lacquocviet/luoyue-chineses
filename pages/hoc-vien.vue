<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb"><NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Học viên</span></nav>
        <h1 class="page-hero-title">Học viên <span class="text-primary">nói gì?</span></h1>
        <p class="page-hero-subtitle">Hành trình và cảm nhận thực tế của hơn 1.200 học viên Luoyue Chinese</p>
      </div>
    </section>

    <!-- Stats -->
    <StatsCounter />

    <!-- Testimonials -->
    <section class="section">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; margin-bottom: 48px; display: flex; flex-direction: column; align-items: center">
          <div class="badge">💬 Câu chuyện thật</div>
          <h2 class="section-title" style="margin-top: 12px">Hành trình của <span class="text-primary">học viên</span></h2>
          <div class="divider" style="margin: 16px auto 0" />
        </div>

        <div class="stories-grid">
          <article v-for="(story, i) in stories" :key="i" class="story-card reveal" :style="{ transitionDelay: `${i * 80}ms` }">
            <div class="story-header" :style="{ background: story.color }">
              <div class="story-avatar">{{ story.initials }}</div>
              <div class="story-achievement">{{ story.achievement }}</div>
            </div>
            <div class="story-body">
              <div class="stars">
                <span v-for="s in 5" :key="s">⭐</span>
              </div>
              <p class="story-text">"{{ story.text }}"</p>
              <div class="story-author">
                <div class="author-name">{{ story.name }}</div>
                <div class="author-role">{{ story.role }}</div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- HSK Results -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-header reveal" style="text-align: center; margin-bottom: 48px; display: flex; flex-direction: column; align-items: center">
          <div class="badge">🏆 Kết quả thi HSK</div>
          <h2 class="section-title" style="margin-top: 12px">Điểm thi <span class="text-primary">HSK nổi bật</span></h2>
          <div class="divider" style="margin: 16px auto 0" />
        </div>
        <div class="results-grid">
          <div v-for="(r, i) in hskResults" :key="i" class="result-card reveal" :style="{ transitionDelay: `${i * 60}ms` }">
            <div class="result-level" :style="{ color: r.color }">{{ r.level }}</div>
            <div class="result-name">{{ r.name }}</div>
            <div class="result-score">{{ r.score }}<span>/{{ r.total }}</span></div>
            <div class="result-date">{{ r.date }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CtaBanner />
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Học viên nói gì | Luoyue Chinese',
  meta: [{ name: 'description', content: 'Cảm nhận và kết quả thi HSK thực tế của học viên Luoyue Chinese. 98% đỗ HSK, nhiều học viên đạt điểm cao.' }],
})

const stories = [
  { initials: 'NM', color: 'linear-gradient(135deg, #2E86DE, #1B4F91)', achievement: '🏆 HSK 3 — 285/300', text: 'Sau 3 tháng học HSK 3 tại Luoyue Chinese, mình đã đỗ với điểm 285/300. Thầy cô dạy rất tận tâm, phương pháp dễ hiểu. Mình đặc biệt thích cách giải thích ngữ pháp!', name: 'Nguyễn Thị Mai', role: 'Sinh viên ĐH Ngoại thương' },
  { initials: 'TH', color: 'linear-gradient(135deg, #F5C542, #E67E22)', achievement: '💼 Thăng chức Giám đốc XNK', text: 'Mình học Business Chinese để phục vụ công việc xuất nhập khẩu. Chỉ sau 2 tháng, mình đã có thể email và giao tiếp với đối tác Trung Quốc độc lập!', name: 'Trần Văn Hùng', role: 'Giám đốc xuất nhập khẩu' },
  { initials: 'TT', color: 'linear-gradient(135deg, #FF6B6B, #E74C3C)', achievement: '🌟 Giải Nhì tiếng Trung thiếu nhi', text: 'Con tôi 8 tuổi học tại đây được 6 tháng. Cô giáo dạy rất vui, bé rất thích học. Tiến bộ thấy rõ từng tuần!', name: 'Chị Lê Thanh Thảo', role: 'Phụ huynh học sinh lớp 3' },
  { initials: 'QĐ', color: 'linear-gradient(135deg, #6C3483, #4A235A)', achievement: '🎓 HSK 5 — Học bổng du học TQ', text: 'Đã thử nhiều trung tâm nhưng chỉ ở Luoyue Chinese mình mới cảm thấy tiến bộ thực sự. Đỗ HSK 5 sau 1 năm học!', name: 'Phạm Quang Đức', role: 'Du học sinh ĐH Phúc Đán, Thượng Hải' },
  { initials: 'HN', color: 'linear-gradient(135deg, #4ECDC4, #2a9d8f)', achievement: '📊 HSK 4 — 260/300', text: 'Lớp nhỏ giúp tôi được hỏi và luyện tập nhiều hơn. Giáo viên luôn kiên nhẫn giải thích. Rất hài lòng!', name: 'Hoàng Ngọc Lan', role: 'Nhân viên thương mại quốc tế' },
  { initials: 'VK', color: 'linear-gradient(135deg, #45B7D1, #2980b9)', achievement: '🏅 HSK 2 — Điểm xuất sắc', text: 'Từ người không biết gì về tiếng Trung, sau 4 tháng tôi đã có thể giao tiếp cơ bản. Cô giáo tuyệt vời!', name: 'Vũ Thị Kim Ngân', role: 'Giáo viên tiểu học' },
]

const hskResults = [
  { level: 'HSK 1', name: 'Nguyễn Bảo Châu', score: 300, total: 300, date: '06/2025', color: '#4ECDC4' },
  { level: 'HSK 2', name: 'Trần Minh Khang', score: 298, total: 300, date: '06/2025', color: '#45B7D1' },
  { level: 'HSK 3', name: 'Nguyễn Thị Mai', score: 285, total: 300, date: '05/2025', color: '#2E86DE' },
  { level: 'HSK 4', name: 'Hoàng Ngọc Lan', score: 260, total: 300, date: '05/2025', color: '#1B4F91' },
  { level: 'HSK 5', name: 'Phạm Quang Đức', score: 248, total: 300, date: '04/2025', color: '#6C3483' },
  { level: 'HSK 6', name: 'Lê Hữu Phước', score: 232, total: 300, date: '03/2025', color: '#922B21' },
  { level: 'HSK 3', name: 'Võ Thị Ngọc Huyền', score: 278, total: 300, date: '05/2025', color: '#2E86DE' },
  { level: 'HSK 4', name: 'Đặng Văn Tú', score: 255, total: 300, date: '06/2025', color: '#1B4F91' },
]

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
.page-hero-subtitle { font-size: 1.05rem; color: rgba(255,255,255,0.75); }

.stories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.story-card { background: white; border-radius: var(--radius-md); border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); overflow: hidden; transition: all 0.3s; }
.story-card:hover { border-color: var(--color-primary); box-shadow: var(--shadow-card-hover); transform: translateY(-5px); }
.story-header { padding: 24px; display: flex; align-items: center; gap: 16px; }
.story-avatar { width: 52px; height: 52px; border-radius: 50%; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; font-weight: 900; color: white; flex-shrink: 0; border: 2px solid rgba(255,255,255,0.4); }
.story-achievement { font-size: 0.8rem; font-weight: 700; color: white; background: rgba(255,255,255,0.2); padding: 5px 12px; border-radius: var(--radius-full); }
.story-body { padding: 20px; display: flex; flex-direction: column; gap: 12px; }
.stars { font-size: 0.85rem; }
.story-text { font-size: 0.875rem; color: var(--color-muted); line-height: 1.7; font-style: italic; flex: 1; }
.author-name { font-weight: 700; font-size: 0.9rem; color: var(--color-ink); }
.author-role { font-size: 0.78rem; color: var(--color-muted); }

.results-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.result-card { background: white; border-radius: var(--radius-md); padding: 24px 20px; border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); text-align: center; transition: all 0.3s; }
.result-card:hover { border-color: var(--color-primary); box-shadow: var(--shadow-card-hover); transform: translateY(-4px); }
.result-level { font-size: 0.9rem; font-weight: 900; margin-bottom: 6px; }
.result-name { font-size: 0.875rem; font-weight: 600; color: var(--color-ink); margin-bottom: 10px; }
.result-score { font-size: 2rem; font-weight: 900; color: var(--color-primary-dark); line-height: 1; }
.result-score span { font-size: 1rem; color: var(--color-muted); font-weight: 400; }
.result-date { font-size: 0.75rem; color: var(--color-muted); margin-top: 6px; }

@media (max-width: 1024px) { .stories-grid { grid-template-columns: repeat(2, 1fr); } .results-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .stories-grid, .results-grid { grid-template-columns: 1fr; } }
</style>

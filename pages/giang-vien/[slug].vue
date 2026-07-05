<template>
  <main v-if="teacher">
    <section class="teacher-hero" :style="{ background: teacher.bgColor }">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Trang chủ</NuxtLink><span>/</span>
          <NuxtLink to="/giang-vien">Giảng viên</NuxtLink><span>/</span>
          <span>{{ teacher.name }}</span>
        </nav>
        <div class="hero-inner">
          <div class="hero-avatar">{{ teacher.initials }}</div>
          <div class="hero-info">
            <h1 class="hero-name">{{ teacher.name }} {{ teacher.flag }}</h1>
            <p class="hero-title">{{ teacher.title }}</p>
            <div class="hero-badges">
              <span v-for="b in teacher.badges" :key="b" class="hero-badge">{{ b }}</span>
            </div>
            <div class="hero-stats">
              <div class="hero-stat"><span class="num">{{ teacher.students }}</span><span class="lbl">Học viên</span></div>
              <div class="hero-stat"><span class="num">{{ teacher.years }}</span><span class="lbl">Năm kinh nghiệm</span></div>
              <div class="hero-stat"><span class="num">{{ teacher.rating }}</span><span class="lbl">⭐ Đánh giá</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container teacher-content">
        <div class="teacher-main">
          <div class="content-block reveal">
            <h2 class="content-title">Giới thiệu</h2>
            <p class="teacher-bio">{{ teacher.bio }}</p>
          </div>
          <div class="content-block reveal">
            <h2 class="content-title">Chuyên môn & Thành tích</h2>
            <ul class="achievement-list">
              <li v-for="a in teacher.achievements" :key="a">{{ a }}</li>
            </ul>
          </div>
          <div class="content-block reveal">
            <h2 class="content-title">Phương pháp giảng dạy</h2>
            <p class="teacher-bio">{{ teacher.method }}</p>
          </div>
        </div>
        <aside class="teacher-sidebar">
          <ConsultationForm
            :title="`Học với ${teacher.name.split(' ').slice(-1)[0]}`"
            subtitle="Đăng ký tư vấn để được xếp lớp học với giảng viên này"
          />
        </aside>
      </div>
    </section>
  </main>

  <main v-else>
    <section class="section" style="text-align: center; padding: 160px 0">
      <div class="container">
        <h1 style="font-size: 2rem; color: var(--color-muted)">Không tìm thấy giảng viên</h1>
        <NuxtLink to="/giang-vien" class="btn btn-primary" style="margin-top: 24px">Xem tất cả giảng viên</NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const teachersData: Record<string, any> = {
  'nguyen-minh-tri': {
    name: 'Thầy Nguyễn Minh Trí', initials: 'MT', flag: '🇨🇳',
    bgColor: 'linear-gradient(135deg, #1B4F91, #2E86DE)',
    title: 'Giảng viên HSK 4–6 & Business Chinese',
    badges: ['HSK 6', 'Thạc sĩ ĐH Bắc Kinh', '8 năm kinh nghiệm'],
    students: '320+', years: '8', rating: '4.9',
    bio: 'Thầy Nguyễn Minh Trí có hơn 8 năm kinh nghiệm giảng dạy tiếng Trung, trong đó 5 năm học tập và làm việc tại Trung Quốc. Thầy tốt nghiệp Thạc sĩ Ngôn ngữ học Hoa ngữ tại Đại học Bắc Kinh — một trong những trường danh tiếng nhất Trung Quốc.',
    achievements: ['Bằng Thạc sĩ Ngôn ngữ học Hoa ngữ — ĐH Bắc Kinh', 'Chứng chỉ HSK 6 đạt 295/300', 'Đã đào tạo 320+ học viên đỗ HSK', 'Chuyên gia Business Chinese cho các doanh nghiệp FDI', 'Tác giả bộ tài liệu "HSK 5-6 Nhanh & Hiệu Quả" độc quyền Luoyue Chinese'],
    method: 'Thầy Trí sử dụng phương pháp kết hợp ngữ pháp-từ vựng-ngữ cảnh thực tế, giúp học viên không chỉ "thuộc lòng" mà thực sự hiểu và dùng được tiếng Trung trong môi trường làm việc quốc tế.',
  },
  'tran-lan-anh': {
    name: 'Cô Trần Thị Lan Anh', initials: 'LA', flag: '🇨🇳',
    bgColor: 'linear-gradient(135deg, #E74C3C, #FF6B6B)',
    title: 'Giảng viên HSK 1–3 & Thiếu nhi',
    badges: ['HSK 5', 'Tốt nghiệp ĐH Thượng Hải', '5 năm kinh nghiệm'],
    students: '250+', years: '5', rating: '4.8',
    bio: 'Cô Lan Anh tốt nghiệp Đại học Ngoại ngữ Thượng Hải và có 5 năm kinh nghiệm dạy tiếng Trung cho cả người lớn và trẻ em. Cô nổi tiếng với phong cách dạy nhẹ nhàng, kiên nhẫn và hiệu quả.',
    achievements: ['Cử nhân Sư phạm tiếng Hoa — ĐH Ngoại ngữ Thượng Hải', 'Chứng chỉ HSK 5 đạt 280/300', 'Chứng chỉ giảng dạy tiếng Hoa cho trẻ em (CTCSOL)', 'Hơn 250 học viên thiếu nhi đã học cùng cô'],
    method: 'Cô Lan Anh sử dụng phương pháp học qua trải nghiệm — trò chơi, bài hát, câu chuyện. Với người lớn, cô tập trung vào giao tiếp thực tế từ buổi học đầu tiên.',
  },
}

const defaultTeacher = {
  'le-quoc-khanh': { name: 'Thầy Lê Quốc Khánh', initials: 'QK', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #2a9d8f, #4ECDC4)', title: 'Giảng viên Giao tiếp & Phát âm', badges: ['HSK 5', 'CertTCHN', '6 năm KN'], students: '180+', years: '6', rating: '4.9', bio: 'Thầy Khánh chuyên về kỹ năng nói và phát âm tiếng Trung, đã đào tạo nhiều học viên đạt phát âm chuẩn bản ngữ.', achievements: ['Chứng chỉ HSK 5', 'Chứng chỉ CertTCHN giảng viên tiếng Hoa', '6 năm kinh nghiệm'], method: 'Phương pháp focus vào âm thanh, nhịp điệu và ngữ điệu tự nhiên.' },
  'pham-thanh-huong': { name: 'Cô Phạm Thanh Hương', initials: 'TH', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #d4a017, #F5C542)', title: 'Giảng viên HSK 1–4 & Giao tiếp', badges: ['HSK 5', 'ĐH Ngoại ngữ HN', '4 năm KN'], students: '200+', years: '4', rating: '4.7', bio: 'Cô Hương tốt nghiệp Đại học Ngoại ngữ Hà Nội, có 4 năm kinh nghiệm dạy cả online và offline.', achievements: ['Cử nhân tiếng Hoa — ĐH Ngoại ngữ Hà Nội', 'Chứng chỉ HSK 5', '200+ học viên'], method: 'Cô kết hợp lý thuyết ngữ pháp với luyện tập giao tiếp thực tế.' },
}

const allTeachers = { ...teachersData, ...defaultTeacher }
const teacher = computed(() => allTeachers[slug] || null)

useHead({
  title: computed(() => teacher.value ? `${teacher.value.name} | Giảng viên Luoyue Chinese` : 'Giảng viên | Luoyue Chinese'),
})

onMounted(() => {
  const obs = new IntersectionObserver((e) => e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') }), { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
})
</script>

<style scoped>
.teacher-hero { padding: 120px 0 60px; color: white; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 20px; }
.breadcrumb a { color: rgba(255,255,255,0.7); }

.hero-inner { display: flex; align-items: center; gap: 36px; }
.hero-avatar { width: 120px; height: 120px; border-radius: 50%; background: rgba(255,255,255,0.2); border: 3px solid rgba(255,255,255,0.4); display: flex; align-items: center; justify-content: center; font-size: 3rem; font-weight: 900; color: white; flex-shrink: 0; }
.hero-name { font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 900; color: white; margin-bottom: 6px; }
.hero-title { font-size: 1rem; color: rgba(255,255,255,0.8); margin-bottom: 12px; }
.hero-badges { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.hero-badge { font-size: 0.78rem; font-weight: 700; padding: 4px 12px; background: rgba(255,255,255,0.2); color: white; border-radius: var(--radius-full); border: 1px solid rgba(255,255,255,0.3); }
.hero-stats { display: flex; gap: 24px; }
.hero-stat { display: flex; flex-direction: column; gap: 2px; }
.num { font-size: 1.5rem; font-weight: 900; color: var(--color-accent-dark); }
.lbl { font-size: 0.75rem; color: rgba(255,255,255,0.7); }

.teacher-content { display: grid; grid-template-columns: 1fr 360px; gap: 48px; }
.teacher-main { display: flex; flex-direction: column; gap: 36px; }
.content-block {}
.content-title { font-size: 1.2rem; font-weight: 700; color: var(--color-ink); margin-bottom: 14px; padding-bottom: 10px; border-bottom: 2px solid var(--color-border); }
.teacher-bio { font-size: 0.95rem; color: var(--color-muted); line-height: 1.75; }
.achievement-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.achievement-list li { padding: 10px 14px; background: var(--color-primary-light); border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--color-ink); }
.achievement-list li::before { content: '🏆 '; }
.teacher-sidebar { position: sticky; top: 90px; }

@media (max-width: 1024px) { .teacher-content { grid-template-columns: 1fr; } .teacher-sidebar { position: static; } .hero-inner { flex-direction: column; text-align: center; } }
</style>

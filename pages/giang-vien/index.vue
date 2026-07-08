<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Giảng viên</span>
        </nav>
        <h1 class="page-hero-title">Đội ngũ <span class="text-primary">giảng viên</span></h1>
        <p class="page-hero-subtitle">Tất cả giảng viên của Luoyue Chinese đều có bằng cấp, kinh nghiệm thực tiễn và đam mê truyền đạt tiếng Trung</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="teachers-grid">
          <NuxtLink
            v-for="(teacher, i) in teachers"
            :key="teacher.slug"
            :to="`/giang-vien/${teacher.slug}`"
            class="teacher-card reveal"
            :style="{ transitionDelay: `${i * 80}ms` }"
          >
            <div class="teacher-avatar" :style="{ background: teacher.bgColor }">
              <span class="teacher-initials">{{ teacher.initials }}</span>
              <div class="teacher-flag">{{ teacher.flag }}</div>
            </div>
            <div class="teacher-info">
              <h3 class="teacher-name">{{ teacher.name }}</h3>
              <p class="teacher-title-text">{{ teacher.title }}</p>
              <div class="teacher-badges">
                <span v-for="b in teacher.badges" :key="b" class="teacher-badge">{{ b }}</span>
              </div>
              <div class="teacher-stats">
                <div class="teacher-stat">
                  <span class="num">{{ teacher.students }}</span>
                  <span class="lbl">Học viên</span>
                </div>
                <div class="teacher-stat">
                  <span class="num">{{ teacher.years }}</span>
                  <span class="lbl">Năm KN</span>
                </div>
                <div class="teacher-stat">
                  <span class="num">{{ teacher.rating }}</span>
                  <span class="lbl">⭐ Rating</span>
                </div>
              </div>
              <div class="view-profile">Xem hồ sơ →</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="section bg-surface" style="padding: 48px 0">
      <div class="container" style="text-align: center">
        <h2 class="section-title reveal">Muốn trở thành giảng viên của Luoyue Chinese?</h2>
        <p class="section-subtitle reveal" style="text-align: center; margin: 12px auto 32px">Chúng tôi luôn tìm kiếm những giảng viên đam mê và kinh nghiệm.</p>
        <a href="mailto:lacquocviet.editor@gmail.com" class="btn btn-primary reveal">Gửi CV ứng tuyển</a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Đội ngũ giảng viên | Luoyue Chinese',
  meta: [{ name: 'description', content: 'Giảng viên Luoyue Chinese có bằng cấp HSK 5-6, kinh nghiệm tại Trung Quốc, phương pháp giảng dạy hiện đại, gần gũi.' }],
})

const teachers = [
  { slug: 'nguyen-minh-tri', name: 'Thầy Nguyễn Minh Trí', initials: 'MT', title: 'Giảng viên HSK 4–6 & Business Chinese', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #2E86DE, #1B4F91)', badges: ['HSK 6', 'Thạc sĩ Bắc Kinh', '8 năm KN'], students: '320+', years: '8', rating: '4.9' },
  { slug: 'tran-lan-anh', name: 'Cô Trần Thị Lan Anh', initials: 'LA', title: 'Giảng viên HSK 1–3 & Thiếu nhi', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #FF6B6B, #E74C3C)', badges: ['HSK 5', 'Tốt nghiệp Thượng Hải', '5 năm KN'], students: '250+', years: '5', rating: '4.8' },
  { slug: 'le-quoc-khanh', name: 'Thầy Lê Quốc Khánh', initials: 'QK', title: 'Giảng viên Giao tiếp & Phát âm', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #4ECDC4, #45B7D1)', badges: ['HSK 5', 'CertTCHN', '6 năm KN'], students: '180+', years: '6', rating: '4.9' },
  { slug: 'pham-thanh-huong', name: 'Cô Phạm Thanh Hương', initials: 'TH', title: 'Giảng viên HSK 1–4 & Giao tiếp', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #F5C542, #E67E22)', badges: ['HSK 5', 'ĐH Ngoại ngữ', '4 năm KN'], students: '200+', years: '4', rating: '4.7' },
  { slug: 'vo-minh-khoa', name: 'Thầy Võ Minh Khoa', initials: 'MK', title: 'Giảng viên HSK 3–5', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #6C3483, #4A235A)', badges: ['HSK 6', 'Du học Quảng Châu', '7 năm KN'], students: '270+', years: '7', rating: '4.8' },
  { slug: 'nguyen-phuong-linh', name: 'Cô Nguyễn Phương Linh', initials: 'PL', title: 'Giảng viên Business Chinese', flag: '🇨🇳', bgColor: 'linear-gradient(135deg, #45B7D1, #2980b9)', badges: ['HSK 5', 'MBA Thượng Hải', '5 năm KN'], students: '150+', years: '5', rating: '4.9' },
]

</script>

<style scoped>
.page-hero { background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary)); padding: 120px 0 64px; color: white; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
.breadcrumb a { color: rgba(255,255,255,0.7); }
.page-hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: white; margin-bottom: 12px; }
.page-hero-subtitle { font-size: 1.05rem; color: rgba(255,255,255,0.75); max-width: 600px; }

.teachers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

.teacher-card { background: white; border-radius: var(--radius-md); border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); overflow: hidden; transition: all 0.3s; cursor: pointer; }
.teacher-card:hover { border-color: var(--color-primary); box-shadow: var(--shadow-card-hover); transform: translateY(-6px); }

.teacher-avatar { height: 140px; display: flex; align-items: center; justify-content: center; position: relative; }
.teacher-initials { font-size: 3rem; font-weight: 900; color: rgba(255,255,255,0.9); text-shadow: 0 2px 8px rgba(0,0,0,0.2); }
.teacher-flag { position: absolute; bottom: 10px; right: 14px; font-size: 1.5rem; }

.teacher-info { padding: 22px; display: flex; flex-direction: column; gap: 10px; }
.teacher-name { font-size: 1rem; font-weight: 700; color: var(--color-ink); }
.teacher-title-text { font-size: 0.82rem; color: var(--color-muted); }
.teacher-badges { display: flex; flex-wrap: wrap; gap: 6px; }
.teacher-badge { font-size: 0.7rem; font-weight: 600; padding: 3px 8px; background: var(--color-primary-light); color: var(--color-primary-dark); border-radius: var(--radius-full); }
.teacher-stats { display: flex; gap: 16px; padding-top: 12px; border-top: 1px solid var(--color-border); }
.teacher-stat { display: flex; flex-direction: column; gap: 1px; }
.num { font-size: 1rem; font-weight: 700; color: var(--color-primary-dark); }
.lbl { font-size: 0.7rem; color: var(--color-muted); }
.view-profile { font-size: 0.85rem; font-weight: 600; color: var(--color-primary); margin-top: 4px; }

@media (max-width: 1024px) { .teachers-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .teachers-grid { grid-template-columns: 1fr; } }
</style>

<template>
  <main>
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Trang chủ</NuxtLink>
          <span>/</span>
          <span>Giới thiệu</span>
        </nav>
        <h1 class="page-hero-title">Về <span class="text-primary">Luoyue Chinese</span></h1>
        <p class="page-hero-subtitle">
          Hành trình xây dựng trung tâm tiếng Trung uy tín, kết nối tri thức và văn hóa
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="section">
      <div class="container">
        <div class="about-story reveal">
          <div class="about-story-text">
            <div class="badge">📖 Câu chuyện của chúng tôi</div>
            <h2 class="section-title">Luoyue Chinese — <span class="text-primary">雒越中文</span></h2>
            <div class="divider" />
            <p class="about-p">
              Luoyue Chinese (雒越中文 — "Lạc Việt Tiếng Trung") được thành lập với sứ mệnh đơn giản nhưng ý nghĩa:
              <strong>mang tiếng Trung đến gần hơn với người Việt Nam</strong> — không khô khan, không áp lực, không hào phòng.
            </p>
            <p class="about-p">
              Tên "Luoyue" (雒越) lấy cảm hứng từ "Lạc Việt" — tên gọi dân tộc Việt cổ đại, thể hiện sự giao thoa văn hóa
              Việt–Hoa hàng ngàn năm lịch sử. Chúng tôi tin rằng học tiếng Trung không chỉ là học một ngôn ngữ, mà còn là
              kết nối hai nền văn hóa lâu đời.
            </p>
            <p class="about-p">
              Trải qua 5 năm hoạt động, Luoyue Chinese đã đồng hành cùng hơn 1.200 học viên — từ học sinh THPT chuẩn bị
              du học, sinh viên luyện HSK tìm học bổng, đến doanh nghiệp cần tiếng Trung chuyên ngành.
            </p>
          </div>
          <div class="about-story-img">
            <div class="about-img-wrap">
              <img src="/sources/class.png" alt="Lớp học tại Luoyue Chinese" class="about-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
              <div class="about-img-fallback" style="display:none">
                <span class="about-img-emoji">🏫</span>
                <span class="about-img-chinese chinese">雒越中文</span>
                <span class="about-img-label">Trung tâm Luoyue Chinese</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission / Vision / Values -->
    <section class="section bg-surface">
      <div class="container">
        <div class="mvv-grid">
          <div class="mvv-card reveal">
            <div class="mvv-icon">🎯</div>
            <h3>Sứ mệnh</h3>
            <p>Mang tiếng Trung đến gần hơn với người Việt Nam qua phương pháp giảng dạy hiện đại, gần gũi và hiệu quả — giúp mỗi học viên đạt mục tiêu của mình.</p>
          </div>
          <div class="mvv-card reveal" style="transition-delay: 100ms">
            <div class="mvv-icon">🌟</div>
            <h3>Tầm nhìn</h3>
            <p>Trở thành trung tâm đào tạo tiếng Trung hàng đầu Việt Nam — nơi mỗi học viên không chỉ học ngôn ngữ mà còn hiểu văn hóa và mở ra cơ hội mới.</p>
          </div>
          <div class="mvv-card reveal" style="transition-delay: 200ms">
            <div class="mvv-icon">💎</div>
            <h3>Giá trị cốt lõi</h3>
            <ul class="mvv-list">
              <li>✅ Chất lượng giảng dạy luôn đặt lên hàng đầu</li>
              <li>✅ Cam kết trung thực với học viên</li>
              <li>✅ Liên tục cải tiến phương pháp</li>
              <li>✅ Môi trường học tập tích cực, thân thiện</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <StatsCounter />

    <!-- CTA -->
    <section class="section">
      <div class="container" style="text-align: center">
        <h2 class="section-title reveal">Bắt đầu hành trình của bạn</h2>
        <p class="section-subtitle reveal" style="margin: 12px auto 32px; text-align: center">
          Hãy để Luoyue Chinese đồng hành cùng bạn trên con đường chinh phục tiếng Trung.
        </p>
        <div class="reveal" style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap">
          <NuxtLink to="/lien-he" class="btn btn-primary">Đăng ký tư vấn miễn phí</NuxtLink>
          <NuxtLink to="/khoa-hoc" class="btn btn-outline">Xem các khóa học</NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Giới thiệu | Luoyue Chinese 雒越中文',
  meta: [
    { name: 'description', content: 'Câu chuyện, sứ mệnh, tầm nhìn và giá trị cốt lõi của Luoyue Chinese — trung tâm đào tạo tiếng Trung uy tín tại Việt Nam.' },
  ],
})

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  padding: 120px 0 64px;
  color: white;
}
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.6);
  margin-bottom: 16px;
}
.breadcrumb a { color: rgba(255,255,255,0.7); }
.breadcrumb a:hover { color: white; }
.page-hero-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: white;
  margin-bottom: 12px;
}
.page-hero-subtitle {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.75);
  max-width: 540px;
}

.about-story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.about-story-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.about-p {
  color: var(--color-muted);
  line-height: 1.75;
}
.about-story-img {}
.about-img-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
  aspect-ratio: 4/3;
  width: 100%;
}
.about-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}
.about-img:hover {
  transform: scale(1.05);
}
.about-img-fallback {
  background: var(--color-primary-light);
  border-radius: var(--radius-lg);
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border: 2px solid var(--color-border);
  aspect-ratio: 4/3;
}
.about-img-emoji { font-size: 5rem; }
.about-img-chinese { font-size: 2rem; font-weight: 700; color: var(--color-primary); }
.about-img-label { font-size: 0.875rem; color: var(--color-muted); }

.mvv-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.mvv-card {
  background: white;
  border-radius: var(--radius-md);
  padding: 32px 28px;
  border: 1.5px solid var(--color-border);
  box-shadow: var(--shadow-card);
}
.mvv-icon { font-size: 2.5rem; margin-bottom: 14px; }
.mvv-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--color-ink); margin-bottom: 12px; }
.mvv-card p { font-size: 0.875rem; color: var(--color-muted); line-height: 1.7; }
.mvv-list { list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.875rem; color: var(--color-muted); }

@media (max-width: 1024px) {
  .about-story { grid-template-columns: 1fr; }
  .mvv-grid { grid-template-columns: 1fr; }
}
</style>

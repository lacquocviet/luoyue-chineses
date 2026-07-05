<template>
  <main v-if="course">
    <!-- Hero -->
    <section class="course-hero" :style="{ background: `linear-gradient(135deg, ${course.darkColor}, ${course.color})` }">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Trang chủ</NuxtLink><span>/</span>
          <NuxtLink to="/khoa-hoc">Khóa học</NuxtLink><span>/</span>
          <span>{{ course.level }}</span>
        </nav>
        <div class="course-hero-inner">
          <div>
            <span class="course-hero-emoji">{{ course.emoji }}</span>
            <h1 class="course-hero-title">
              {{ course.level }} — {{ course.title }}
              <span class="course-hero-chinese chinese">{{ course.chinese }}</span>
            </h1>
            <p class="course-hero-desc">{{ course.description }}</p>
            <div class="course-hero-meta">
              <span>⏱ {{ course.duration }}</span>
              <span>📚 {{ course.sessions }} buổi</span>
              <span>👥 Max 15 học viên</span>
              <span>💻 Online + Offline</span>
            </div>
          </div>
          <div class="course-hero-price-box">
            <div class="price-label">Học phí</div>
            <div class="price-amount">{{ course.price }}</div>
            <NuxtLink to="/lien-he" class="btn btn-accent">
              Đăng ký ngay
            </NuxtLink>
            <NuxtLink to="/lien-he" class="btn btn-white" style="margin-top: 10px">
              Học thử miễn phí
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="section">
      <div class="container course-content">
        <!-- Main content -->
        <div class="course-main">
          <!-- Overview -->
          <div class="content-block reveal">
            <h2 class="content-title">Tổng quan khóa học</h2>
            <p>{{ course.overview }}</p>
          </div>

          <!-- Who is this for -->
          <div class="content-block reveal">
            <h2 class="content-title">Đối tượng phù hợp</h2>
            <ul class="target-list">
              <li v-for="t in course.targets" :key="t">{{ t }}</li>
            </ul>
          </div>

          <!-- Curriculum -->
          <div class="content-block reveal">
            <h2 class="content-title">Lộ trình học trong khóa</h2>
            <div class="curriculum-list">
              <div v-for="(module, i) in course.curriculum" :key="i" class="curriculum-item">
                <div class="curriculum-num">{{ i + 1 }}</div>
                <div>
                  <div class="curriculum-title">{{ module.title }}</div>
                  <div class="curriculum-desc">{{ module.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ -->
          <div class="content-block reveal">
            <h2 class="content-title">Câu hỏi thường gặp</h2>
            <FaqAccordion :items="course.faqs" />
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="course-sidebar">
          <ConsultationForm
            :title="`Đăng ký khóa ${course.level}`"
            subtitle="Điền thông tin để nhận tư vấn miễn phí và lịch học phù hợp"
          />
        </aside>
      </div>
    </section>
  </main>

  <main v-else>
    <section class="section">
      <div class="container" style="text-align: center; padding: 120px 0">
        <h1 style="font-size: 2rem; color: var(--color-muted)">Không tìm thấy khóa học</h1>
        <NuxtLink to="/khoa-hoc" class="btn btn-primary" style="margin-top: 24px">Xem tất cả khóa học</NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const coursesData: Record<string, any> = {
  'hsk-1': {
    level: 'HSK 1', title: 'Sơ cấp 1', chinese: 'HSK一级', emoji: '🌱',
    color: '#4ECDC4', darkColor: '#2a9d8f',
    price: '2.800.000₫', duration: '2 tháng', sessions: 24,
    description: 'Khóa học HSK 1 dành cho người mới bắt đầu học tiếng Trung từ đầu. Học 150 từ vựng cơ bản, 4 kỹ năng nghe-nói-đọc-viết.',
    overview: 'HSK 1 là nền tảng đầu tiên trên hành trình học tiếng Trung. Sau khóa học, bạn có thể hiểu và dùng các cụm từ quen thuộc và biểu đạt cơ bản, đáp ứng nhu cầu giao tiếp đơn giản.',
    targets: ['Người hoàn toàn mới với tiếng Trung', 'Học sinh THCS–THPT muốn học thêm ngoại ngữ', 'Người muốn giao tiếp cơ bản với người Trung Quốc', 'Doanh nhân cần nền tảng tiếng Trung'],
    curriculum: [
      { title: 'Phát âm & Pinyin', desc: 'Làm quen hệ thống âm thanh tiếng Trung, 4 thanh điệu, cách đọc Pinyin' },
      { title: 'Từ vựng chủ đề Chào hỏi', desc: '你好、谢谢、对不起... 30 từ đầu tiên' },
      { title: 'Số đếm & Thời gian', desc: 'Đếm 1–100, ngày tháng, giờ giấc' },
      { title: 'Gia đình & Nghề nghiệp', desc: 'Từ vựng mô tả gia đình, công việc' },
      { title: 'Ôn tập & Thi thử HSK 1', desc: 'Làm đề thi mô phỏng HSK 1, phân tích lỗi sai' },
    ],
    faqs: [
      { q: 'Không biết gì về tiếng Trung có học được không?', a: 'Hoàn toàn được! HSK 1 được thiết kế cho người bắt đầu từ zero. Không cần nền tảng gì cả.' },
      { q: 'Học xong HSK 1 rồi có thể làm gì?', a: 'Bạn có thể giao tiếp cơ bản với người Trung Quốc, đọc menu nhà hàng, biển hiệu đơn giản, thi chứng chỉ HSK 1 quốc tế.' },
    ],
  },
  'hsk-2': {
    level: 'HSK 2', title: 'Sơ cấp 2', chinese: 'HSK二级', emoji: '🌿',
    color: '#45B7D1', darkColor: '#2980b9',
    price: '2.800.000₫', duration: '2 tháng', sessions: 24,
    description: 'Mở rộng vốn từ lên 300 từ. Có thể giao tiếp về các chủ đề quen thuộc trong cuộc sống.',
    overview: 'HSK 2 giúp bạn tiếp tục mở rộng vốn từ và ngữ pháp, bắt đầu giao tiếp về các tình huống quen thuộc trong cuộc sống hàng ngày.',
    targets: ['Đã hoàn thành HSK 1 hoặc có nền tảng tương đương', 'Người muốn giao tiếp tự tin hơn', 'Chuẩn bị thi chứng chỉ HSK 2'],
    curriculum: [
      { title: 'Ôn tập HSK 1 & Nâng cao', desc: 'Củng cố kiến thức nền, bổ sung từ mới' },
      { title: 'Mua sắm & Di chuyển', desc: 'Đặt xe, hỏi đường, mua hàng' },
      { title: 'Ẩm thực & Sức khoẻ', desc: 'Gọi món, mô tả sức khỏe, đến bệnh viện' },
      { title: 'Ngữ pháp nâng cao', desc: 'Kết cấu câu phức tạp hơn' },
      { title: 'Ôn tập & Thi thử HSK 2', desc: 'Đề thi mô phỏng, kỹ năng làm bài' },
    ],
    faqs: [
      { q: 'Học HSK 2 cần nền tảng gì?', a: 'Bạn cần đã hoàn thành HSK 1 hoặc nắm được khoảng 150 từ vựng và ngữ pháp cơ bản.' },
    ],
  },
  'hsk-3': {
    level: 'HSK 3', title: 'Trung cấp 1', chinese: 'HSK三级', emoji: '🎯',
    color: '#2E86DE', darkColor: '#1B4F91',
    price: '3.500.000₫', duration: '3 tháng', sessions: 36,
    description: '600 từ vựng. Có thể giao tiếp linh hoạt trong cuộc sống, công việc và học tập.',
    overview: 'HSK 3 là ngưỡng trung cấp, nơi bạn bắt đầu giao tiếp thực sự tự nhiên. Sau khóa học, bạn có thể nói chuyện về hầu hết các chủ đề trong cuộc sống.',
    targets: ['Học sinh chuẩn bị du học', 'Người đi làm cần giao tiếp công việc', 'Đã hoàn thành HSK 2'],
    curriculum: [
      { title: 'Từ vựng chủ đề Công việc', desc: 'Môi trường làm việc, họp hành, email' },
      { title: 'Học tập & Giáo dục', desc: 'Từ vựng trường học, thi cử, học thuật' },
      { title: 'Văn hóa & Xã hội', desc: 'Phong tục, lễ tết, xã hội Trung Quốc' },
      { title: 'Ngữ pháp phức tạp', desc: 'Câu điều kiện, bị động, kết quả' },
      { title: 'Luyện đề HSK 3', desc: '4 đề thi mô phỏng đầy đủ 4 kỹ năng' },
    ],
    faqs: [
      { q: 'HSK 3 có dùng được để xin việc không?', a: 'HSK 3 là mức tối thiểu cho nhiều vị trí cần tiếng Trung giao tiếp. Nhiều công ty xuất nhập khẩu yêu cầu HSK 3–4.' },
    ],
  },
}

// Default data for other slugs
const defaultData = {
  'hsk-4': { level: 'HSK 4', title: 'Trung cấp 2', chinese: 'HSK四级', emoji: '💼', color: '#1B4F91', darkColor: '#0f2d6b', price: '3.500.000₫', duration: '3 tháng', sessions: 36, description: '1.200 từ vựng. Tương đương trình độ B2 châu Âu.', overview: 'HSK 4 giúp bạn đạt trình độ trung cấp cao, đủ để làm việc chuyên nghiệp với đối tác Trung Quốc.', targets: ['Đã hoàn thành HSK 3', 'Người làm việc trong môi trường đa quốc gia'], curriculum: [{ title: 'Tiếng Trung chuyên ngành', desc: 'Từ vựng kinh tế, thương mại, pháp luật' }], faqs: [] },
  'hsk-5': { level: 'HSK 5', title: 'Cao cấp 1', chinese: 'HSK五级', emoji: '📰', color: '#6C3483', darkColor: '#4A235A', price: '4.200.000₫', duration: '4 tháng', sessions: 48, description: '2.500 từ vựng. Đọc báo, xem phim không cần phụ đề.', overview: 'HSK 5 đưa bạn lên trình độ cao cấp.', targets: ['Đã hoàn thành HSK 4', 'Chuẩn bị du học'], curriculum: [{ title: 'Đọc báo & Phân tích văn bản', desc: 'Luyện đọc hiểu sâu' }], faqs: [] },
  'hsk-6': { level: 'HSK 6', title: 'Cao cấp 2', chinese: 'HSK六级', emoji: '🎓', color: '#922B21', darkColor: '#641E16', price: '5.000.000₫', duration: '5 tháng', sessions: 60, description: '5.000+ từ vựng. Thành thạo tương đương người bản ngữ.', overview: 'HSK 6 là đỉnh cao — tương đương người bản ngữ.', targets: ['Du học sinh', 'Phiên dịch viên'], curriculum: [{ title: 'Viết luận & Diễn thuyết', desc: 'Kỹ năng viết nâng cao' }], faqs: [] },
  'giao-tiep': { level: 'Giao tiếp', title: 'Tiếng Trung giao tiếp', chinese: '口语交际', emoji: '💬', color: '#F5C542', darkColor: '#d4a017', price: '2.800.000₫', duration: '2 tháng', sessions: 24, description: 'Phát âm chuẩn, giao tiếp tự nhiên mọi tình huống.', overview: 'Khóa học tập trung vào kỹ năng nói và nghe.', targets: ['Người muốn giao tiếp nhanh', 'Dân kinh doanh'], curriculum: [{ title: 'Phát âm & Intonation', desc: 'Chuẩn hóa phát âm, giọng điệu' }], faqs: [] },
  'thieu-nhi': { level: 'Thiếu nhi', title: 'Tiếng Trung thiếu nhi', chinese: '少儿中文', emoji: '🎨', color: '#FF6B6B', darkColor: '#e74c3c', price: '2.500.000₫', duration: '3 tháng', sessions: 36, description: 'Chương trình vui học cho trẻ 5–12 tuổi.', overview: 'Học qua trò chơi và hình ảnh sinh động.', targets: ['Trẻ em 5–12 tuổi', 'Phụ huynh muốn con học ngoại ngữ sớm'], curriculum: [{ title: 'Trò chơi ngôn ngữ', desc: 'Học từ qua game, hình ảnh, bài hát' }], faqs: [] },
  'business-chinese': { level: 'Business', title: 'Business Chinese', chinese: '商务中文', emoji: '🤝', color: '#2E86DE', darkColor: '#1B4F91', price: '4.000.000₫', duration: '3 tháng', sessions: 36, description: 'Tiếng Trung thương mại, xuất nhập khẩu, đàm phán.', overview: 'Khóa học thiết kế riêng cho dân kinh doanh.', targets: ['Doanh nhân', 'Nhân viên xuất nhập khẩu', 'Quản lý làm việc với Trung Quốc'], curriculum: [{ title: 'Email thương mại', desc: 'Viết và đọc email business chuyên nghiệp' }], faqs: [] },
}

const allData = { ...coursesData, ...defaultData }
const course = computed(() => allData[slug] || null)

useHead({
  title: computed(() => course.value ? `${course.value.level} — ${course.value.title} | Luoyue Chinese` : 'Khóa học | Luoyue Chinese'),
  meta: computed(() => course.value ? [{ name: 'description', content: course.value.description }] : []),
})
</script>

<style scoped>
.course-hero {
  padding: 120px 0 60px;
  color: white;
}
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
.breadcrumb a { color: rgba(255,255,255,0.7); }
.course-hero-inner { display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start; }
.course-hero-emoji { font-size: 3rem; display: block; margin-bottom: 12px; }
.course-hero-title { font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 900; color: white; margin-bottom: 12px; display: flex; flex-direction: column; gap: 4px; }
.course-hero-chinese { font-size: 1rem; opacity: 0.7; font-weight: 400; }
.course-hero-desc { font-size: 1.05rem; color: rgba(255,255,255,0.8); max-width: 500px; margin-bottom: 16px; line-height: 1.65; }
.course-hero-meta { display: flex; flex-wrap: wrap; gap: 16px; font-size: 0.875rem; color: rgba(255,255,255,0.7); }
.course-hero-price-box { background: rgba(255,255,255,0.12); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); border-radius: var(--radius-md); padding: 28px; min-width: 220px; display: flex; flex-direction: column; gap: 0; }
.price-label { font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-bottom: 4px; }
.price-amount { font-size: 2rem; font-weight: 900; color: var(--color-accent-dark); margin-bottom: 20px; }

.course-content { display: grid; grid-template-columns: 1fr 360px; gap: 48px; align-items: start; }
.course-main { display: flex; flex-direction: column; gap: 40px; }
.content-block {}
.content-title { font-size: 1.25rem; font-weight: 700; color: var(--color-ink); margin-bottom: 16px; padding-bottom: 10px; border-bottom: 2px solid var(--color-border); }

.target-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.target-list li { padding: 10px 14px; background: var(--color-primary-light); border-radius: var(--radius-sm); font-size: 0.9rem; color: var(--color-ink); }
.target-list li::before { content: '✅ '; }

.curriculum-list { display: flex; flex-direction: column; gap: 12px; }
.curriculum-item { display: flex; gap: 16px; align-items: flex-start; padding: 16px; background: var(--color-surface); border-radius: var(--radius-sm); border: 1px solid var(--color-border); }
.curriculum-num { width: 32px; height: 32px; border-radius: 50%; background: var(--color-primary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem; flex-shrink: 0; }
.curriculum-title { font-weight: 700; color: var(--color-ink); font-size: 0.95rem; margin-bottom: 4px; }
.curriculum-desc { font-size: 0.85rem; color: var(--color-muted); }

.course-sidebar { position: sticky; top: 90px; }

@media (max-width: 1024px) {
  .course-hero-inner { grid-template-columns: 1fr; }
  .course-content { grid-template-columns: 1fr; }
  .course-sidebar { position: static; }
}
</style>

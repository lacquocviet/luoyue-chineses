<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Khóa học</span>
        </nav>
        <h1 class="page-hero-title">Tất cả <span class="text-primary">khóa học</span></h1>
        <p class="page-hero-subtitle">HSK 1–6, giao tiếp, thiếu nhi, Business Chinese — chọn khóa phù hợp với bạn</p>
      </div>
    </section>

    <!-- Filter tabs -->
    <section class="section-sm" style="border-bottom: 1px solid var(--color-border)">
      <div class="container">
        <div class="filter-tabs">
          <button
            v-for="tab in tabs"
            :key="tab.value"
            class="filter-tab"
            :class="{ active: activeTab === tab.value }"
            @click="activeTab = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Courses -->
    <section class="section">
      <div class="container">
        <CourseGrid />
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-surface">
      <div class="container" style="max-width: 800px; margin: 0 auto;">
        <div class="section-header reveal" style="text-align: center; margin-bottom: 40px">
          <h2 class="section-title">Câu hỏi thường gặp về <span class="text-primary">khóa học</span></h2>
          <div class="divider" style="margin: 16px auto 0" />
        </div>
        <FaqAccordion :items="faqs" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Khóa học tiếng Trung | Luoyue Chinese — HSK 1-6, Giao tiếp, Thiếu nhi',
  meta: [
    { name: 'description', content: 'Các khóa học tiếng Trung đa dạng: HSK 1–6, giao tiếp, thiếu nhi, Business Chinese. Giáo trình chuẩn, cam kết đầu ra, lớp nhỏ.' },
  ],
})

const tabs = [
  { label: 'Tất cả', value: 'all' },
  { label: 'HSK', value: 'hsk' },
  { label: 'Giao tiếp', value: 'giao-tiep' },
  { label: 'Thiếu nhi', value: 'thieu-nhi' },
  { label: 'Business', value: 'business' },
]
const activeTab = ref('all')

const faqs = [
  {
    q: 'Tôi cần học bao lâu để đạt HSK 3?',
    a: 'Từ đầu (zero) đến HSK 3 thường mất khoảng 6–8 tháng nếu học đều đặn 2–3 buổi/tuần. Nếu đã có nền tảng sơ cấp, thời gian có thể ngắn hơn.',
  },
  {
    q: 'Tôi có thể học online không?',
    a: 'Có! Luoyue Chinese cung cấp cả hình thức học trực tiếp tại cơ sở và học online qua nền tảng chất lượng cao. Chất lượng giảng dạy tương đương nhau.',
  },
  {
    q: 'Lớp học có bao nhiêu học viên?',
    a: 'Mỗi lớp tối đa 10–15 học viên để đảm bảo mỗi học viên đều được chú ý và có cơ hội luyện tập đầy đủ.',
  },
  {
    q: 'Nếu học xong mà không đạt HSK thì sao?',
    a: 'Luoyue Chinese cam kết: học viên hoàn thành đủ giáo trình mà không đạt HSK theo mục tiêu sẽ được học lại miễn phí tối đa 1 kỳ học.',
  },
  {
    q: 'Tôi có được học thử miễn phí không?',
    a: 'Có! Bạn có thể đăng ký học thử 1 buổi miễn phí để trải nghiệm chất lượng giảng dạy và phong cách của giảng viên trước khi đăng ký chính thức.',
  },
]
</script>

<style scoped>
.page-hero {
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  padding: 120px 0 64px;
  color: white;
}
.breadcrumb {
  display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 16px;
}
.breadcrumb a { color: rgba(255,255,255,0.7); }
.page-hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: white; margin-bottom: 12px; }
.page-hero-subtitle { font-size: 1.1rem; color: rgba(255,255,255,0.75); max-width: 540px; }

.filter-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.filter-tab {
  padding: 8px 20px;
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 600;
  border: 1.5px solid var(--color-border);
  background: white;
  color: var(--color-muted);
  cursor: pointer;
  transition: all 0.2s;
}
.filter-tab:hover { border-color: var(--color-primary); color: var(--color-primary); }
.filter-tab.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
}
</style>

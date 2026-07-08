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
          <!-- Course intro -->
          <div class="content-block reveal">
            <h2 class="content-title">Giới thiệu khóa học</h2>
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

          <!-- Outcomes -->
          <div class="content-block reveal">
            <h2 class="content-title">Mục tiêu đầu ra</h2>
            <ul class="target-list">
              <li v-for="outcome in course.outcomes" :key="outcome">{{ outcome }}</li>
            </ul>
          </div>

          <!-- Teaching method -->
          <div class="content-block reveal">
            <h2 class="content-title">Phương pháp giảng dạy</h2>
            <ul class="target-list">
              <li>Học theo tình huống thực tế, dễ áp dụng ngay.</li>
              <li>Thực hành giao tiếp thường xuyên trong mỗi buổi học.</li>
              <li>Giáo viên sửa phát âm và phản xạ trực tiếp.</li>
              <li>Kiểm tra định kỳ để theo dõi tiến bộ.</li>
              <li>Kết hợp linh hoạt hình thức Online và Offline.</li>
            </ul>
          </div>

          <!-- Course info -->
          <div class="content-block reveal">
            <h2 class="content-title">Thông tin khóa học</h2>
            <div class="course-info-grid">
              <div class="course-info-item">
                <span>Thời lượng</span>
                <strong>{{ course.duration }}</strong>
              </div>
              <div class="course-info-item">
                <span>Hình thức</span>
                <strong>Online / Offline</strong>
              </div>
              <div class="course-info-item">
                <span>Sĩ số</span>
                <strong>Nhóm nhỏ, tối đa 15 học viên</strong>
              </div>
              <div class="course-info-item">
                <span>Khai giảng</span>
                <strong>Hàng tháng</strong>
              </div>
              <div class="course-info-item">
                <span>Giáo trình</span>
                <strong>Giáo trình chuẩn</strong>
              </div>
            </div>
          </div>

          <!-- Student benefits -->
          <div class="content-block reveal">
            <h2 class="content-title">Quyền lợi học viên</h2>
            <ul class="target-list">
              <li>Được cung cấp giáo trình và tài liệu học tập.</li>
              <li>Được tham gia nhóm hỗ trợ học tập.</li>
              <li>Được luyện tập và thi thử định kỳ.</li>
              <li>Được tư vấn lộ trình học phù hợp với mục tiêu cá nhân.</li>
            </ul>
          </div>

          <!-- Learning roadmap -->
          <div class="content-block reveal">
            <h2 class="content-title">Lộ trình học</h2>
            <p class="roadmap-text">HSK 1 → HSK 2 → HSK 3 → HSK 4 → HSK 5 → HSK 6</p>
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

// Handle route param changes properly — use onBeforeRouteUpdate so the
// data loads during the Vue Router navigation lifecycle, BEFORE the page
// transition starts. This avoids a race condition where the watch fires
// mid-transition, causing v-if="course" to flicker to the "not found" state.
import { onBeforeRouteUpdate } from 'vue-router'

const coursesData: Record<string, any> = {
  'hsk-1': {
    level: 'HSK 1', title: 'Sơ cấp 1', chinese: 'HSK一级', emoji: '🌱',
    color: '#4ECDC4', darkColor: '#2a9d8f',
    price: '2.800.000₫', duration: '2 tháng', sessions: 24,
    description: 'Khóa học dành cho người mới bắt đầu, giúp học viên làm quen với tiếng Trung từ bảng phiên âm Pinyin, phát âm chuẩn, từ vựng và ngữ pháp cơ bản.',
    overview: 'Khóa học dành cho người mới bắt đầu, giúp học viên làm quen với tiếng Trung từ bảng phiên âm Pinyin, phát âm chuẩn, từ vựng và ngữ pháp cơ bản.',
    targets: ['Người chưa từng học tiếng Trung', 'Người muốn xây dựng nền tảng vững chắc', 'Học sinh, sinh viên, người đi làm'],
    outcomes: ['Giao tiếp các tình huống đơn giản', 'Đọc hiểu câu ngắn', 'Tự giới thiệu bản thân', 'Đạt trình độ HSK 1'],
    curriculum: [
      { title: 'Pinyin và phát âm chuẩn', desc: 'Làm quen hệ thống âm thanh tiếng Trung, 4 thanh điệu, cách đọc Pinyin' },
      { title: '150 từ vựng HSK 1', desc: 'Học 150 từ vựng cơ bản theo chủ đề' },
      { title: 'Ngữ pháp cơ bản', desc: 'Nắm vững cấu trúc câu đơn giản trong tiếng Trung' },
      { title: 'Hội thoại hằng ngày', desc: 'Luyện hội thoại trong các tình huống giao tiếp hằng ngày' },
      { title: 'Luyện nghe - nói - đọc - viết', desc: 'Rèn luyện toàn diện 4 kỹ năng cơ bản' },
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
    description: 'Mở rộng vốn từ và khả năng giao tiếp, giúp học viên tự tin trao đổi trong cuộc sống hằng ngày.',
    overview: 'Mở rộng vốn từ và khả năng giao tiếp, giúp học viên tự tin trao đổi trong cuộc sống hằng ngày.',
    targets: ['Đã hoàn thành HSK 1', 'Có kiến thức nền tảng'],
    outcomes: ['Giao tiếp các chủ đề quen thuộc', 'Đọc đoạn văn ngắn', 'Luyện nghe tốt hơn ở tốc độ tự nhiên', 'Thi đạt HSK 2'],
    curriculum: [
      { title: '300 từ vựng HSK 2', desc: 'Mở rộng vốn từ lên 300 từ theo chủ đề' },
      { title: 'Ngữ pháp nâng cao', desc: 'Kết cấu câu phức tạp hơn, bổ trợ giao tiếp' },
      { title: 'Hội thoại thực tế', desc: 'Luyện hội thoại trong các tình huống thực tế hằng ngày' },
      { title: 'Luyện nghe tốc độ tự nhiên', desc: 'Nghe và phản xạ với tốc độ nói tự nhiên của người bản ngữ' },
      { title: 'Luyện đề HSK', desc: 'Làm quen với cấu trúc đề thi HSK 2' },
    ],
    faqs: [
      { q: 'Học HSK 2 cần nền tảng gì?', a: 'Bạn cần đã hoàn thành HSK 1 hoặc nắm được khoảng 150 từ vựng và ngữ pháp cơ bản.' },
    ],
  },
  'hsk-3': {
    level: 'HSK 3', title: 'Trung cấp 1', chinese: 'HSK三级', emoji: '🎯',
    color: '#2E86DE', darkColor: '#1B4F91',
    price: '3.500.000₫', duration: '3 tháng', sessions: 36,
    description: 'Xây dựng khả năng sử dụng tiếng Trung độc lập trong học tập và công việc.',
    overview: 'Xây dựng khả năng sử dụng tiếng Trung độc lập trong học tập và công việc.',
    targets: ['Đã học HSK 2'],
    outcomes: ['Giao tiếp khá lưu loát', 'Đọc báo, bài viết đơn giản', 'Viết đoạn văn theo chủ đề', 'Đạt HSK 3'],
    curriculum: [
      { title: '600 từ vựng HSK 3', desc: 'Học 600 từ vựng và mẫu câu trung cấp' },
      { title: 'Mẫu câu phức', desc: 'Sử dụng các mẫu câu phức tạp trong giao tiếp' },
      { title: 'Đọc hiểu', desc: 'Luyện kỹ năng đọc hiểu đoạn văn' },
      { title: 'Viết đoạn văn', desc: 'Luyện viết đoạn văn ngắn theo chủ đề' },
      { title: 'Luyện đề HSK 3', desc: 'Làm đề thi mô phỏng HSK 3 đầy đủ 4 kỹ năng' },
    ],
    faqs: [
      { q: 'HSK 3 có dùng được để xin việc không?', a: 'HSK 3 là mức tối thiểu cho nhiều vị trí cần tiếng Trung giao tiếp. Nhiều công ty xuất nhập khẩu yêu cầu HSK 3–4.' },
    ],
  },
  'hsk-4': { level: 'HSK 4', title: 'Trung cấp 2', chinese: 'HSK四级', emoji: '💼', color: '#1B4F91', darkColor: '#0f2d6b', price: '3.500.000₫', duration: '3 tháng', sessions: 36, description: 'Nâng cao khả năng sử dụng tiếng Trung trong môi trường học tập và làm việc.', overview: 'Nâng cao khả năng sử dụng tiếng Trung trong môi trường học tập và làm việc.', targets: ['Học viên đã có nền tảng HSK 3'], outcomes: ['Giao tiếp tự nhiên', 'Đọc tài liệu thông dụng', 'Viết luận và đọc hiểu nâng cao', 'Đạt HSK 4'], curriculum: [
      { title: '1200 từ vựng HSK 4', desc: 'Mở rộng vốn từ lên 1200 từ' },
      { title: 'Ngữ pháp nâng cao', desc: 'Cấu trúc ngữ pháp phức tạp trong văn nói và viết' },
      { title: 'Viết luận', desc: 'Luyện viết luận ngắn theo chủ đề' },
      { title: 'Nghe hội thoại dài', desc: 'Luyện nghe hội thoại dài với tốc độ tự nhiên' },
      { title: 'Luyện đề chuyên sâu', desc: 'Làm đề thi mô phỏng và phân tích lỗi sai' },
    ], faqs: [] },
  'hsk-5': { level: 'HSK 5', title: 'Cao cấp 1', chinese: 'HSK五级', emoji: '📰', color: '#6C3483', darkColor: '#4A235A', price: '4.200.000₫', duration: '4 tháng', sessions: 48, description: 'Khóa học dành cho học viên hướng tới học tập, làm việc hoặc định cư trong môi trường sử dụng tiếng Trung.', overview: 'Khóa học dành cho học viên hướng tới học tập, làm việc hoặc định cư trong môi trường sử dụng tiếng Trung.', targets: ['Đã hoàn thành HSK 4'], outcomes: ['Đọc báo và tài liệu chuyên ngành', 'Giao tiếp thành thạo', 'Thuyết trình bằng tiếng Trung', 'Đạt HSK 5'], curriculum: [
      { title: '2500 từ vựng HSK 5', desc: 'Học 2500 từ vựng cao cấp' },
      { title: 'Báo chí', desc: 'Đọc và phân tích tin tức, báo chí Trung Quốc' },
      { title: 'Văn học', desc: 'Tiếp cận các tác phẩm văn học Trung Quốc' },
      { title: 'Thuyết trình', desc: 'Luyện kỹ năng thuyết trình bằng tiếng Trung' },
      { title: 'Luyện đề HSK 5', desc: 'Làm đề thi mô phỏng HSK 5' },
    ], faqs: [] },
  'hsk-6': { level: 'HSK 6', title: 'Cao cấp 2', chinese: 'HSK六级', emoji: '🎓', color: '#922B21', darkColor: '#641E16', price: '5.000.000₫', duration: '5 tháng', sessions: 60, description: 'Chương trình cao cấp giúp học viên sử dụng tiếng Trung gần như người bản ngữ trong học tập và công việc.', overview: 'Chương trình cao cấp giúp học viên sử dụng tiếng Trung gần như người bản ngữ trong học tập và công việc.', targets: ['Học viên trình độ HSK 5'], outcomes: ['Sử dụng tiếng Trung thành thạo', 'Đọc hiểu tài liệu học thuật', 'Phân tích văn bản chuyên sâu', 'Đạt HSK 6'], curriculum: [
      { title: '5000+ từ vựng HSK 6', desc: 'Học 5000+ từ vựng cao cấp' },
      { title: 'Phân tích văn bản', desc: 'Phân tích chuyên sâu các văn bản phức tạp' },
      { title: 'Viết học thuật', desc: 'Luyện viết văn phong học thuật' },
      { title: 'Thuyết trình chuyên sâu', desc: 'Thuyết trình các chủ đề chuyên ngành' },
      { title: 'Luyện đề HSK 6', desc: 'Làm đề thi mô phỏng HSK 6' },
    ], faqs: [] },
  'giao-tiep': { level: 'Giao tiếp', title: 'Tiếng Trung giao tiếp', chinese: '口语交际', emoji: '💬', color: '#52b788', darkColor: '#2d6a4f', price: '2.800.000₫', duration: '2 tháng', sessions: 24, description: 'Khóa học tập trung vào kỹ năng giao tiếp trong cuộc sống hằng ngày với phương pháp học thực hành, phản xạ và tình huống thực tế.', overview: 'Khóa học tập trung vào kỹ năng giao tiếp trong cuộc sống hằng ngày với phương pháp học thực hành, phản xạ và tình huống thực tế.', targets: ['Người cần giao tiếp nhanh', 'Người chuẩn bị du lịch', 'Người làm việc với người Trung Quốc', 'Người muốn luyện nói'], outcomes: ['Tự tin giao tiếp', 'Phản xạ nhanh', 'Phát âm chuẩn', 'Ứng dụng ngay sau khóa học'], curriculum: [
      { title: 'Chào hỏi & Làm quen', desc: 'Chào hỏi, tự giới thiệu, hỏi thăm cơ bản' },
      { title: 'Mua sắm & Di chuyển', desc: 'Mua hàng, hỏi giá, đi lại, hỏi đường' },
      { title: 'Ăn uống & Gọi món', desc: 'Gọi món tại nhà hàng, miêu tả món ăn' },
      { title: 'Công sở & Đặt phòng', desc: 'Giao tiếp công sở, đặt phòng khách sạn' },
      { title: 'Phản xạ hội thoại', desc: 'Luyện phản xạ giao tiếp trong tình huống thực tế' },
    ], faqs: [] },
  'thieu-nhi': { level: 'Thiếu nhi', title: 'Tiếng Trung thiếu nhi', chinese: '少儿中文', emoji: '🎨', color: '#FF6B6B', darkColor: '#e74c3c', price: '2.500.000₫', duration: '3 tháng', sessions: 36, description: 'Chương trình thiết kế dành riêng cho trẻ em với phương pháp học thông qua trò chơi, hình ảnh và hoạt động tương tác.', overview: 'Chương trình thiết kế dành riêng cho trẻ em với phương pháp học thông qua trò chơi, hình ảnh và hoạt động tương tác.', targets: ['Trẻ từ 5–12 tuổi', 'Phụ huynh muốn con tiếp cận ngoại ngữ sớm'], outcomes: ['Yêu thích tiếng Trung', 'Phát âm chuẩn', 'Tăng khả năng ghi nhớ', 'Tự tin giao tiếp cơ bản'], curriculum: [
      { title: 'Phát âm cơ bản', desc: 'Làm quen với phát âm tiếng Trung qua hình ảnh và trò chơi' },
      { title: 'Từ vựng theo chủ đề', desc: 'Học từ vựng theo chủ đề: gia đình, động vật, màu sắc' },
      { title: 'Bài hát & Truyện tranh', desc: 'Học tiếng Trung qua bài hát thiếu nhi và truyện tranh' },
      { title: 'Trò chơi ngôn ngữ', desc: 'Tương tác qua các trò chơi giúp ghi nhớ từ vựng' },
      { title: 'Giao tiếp đơn giản', desc: 'Luyện giao tiếp cơ bản trong tình huống hằng ngày' },
    ], faqs: [] },
  'business-chinese': { level: 'Business', title: 'Business Chinese', chinese: '商务中文', emoji: '🤝', color: '#2E86DE', darkColor: '#1B4F91', price: '4.000.000₫', duration: '3 tháng', sessions: 36, description: 'Khóa học dành cho người làm việc trong môi trường doanh nghiệp, tập trung vào giao tiếp, đàm phán và xử lý công việc bằng tiếng Trung.', overview: 'Khóa học dành cho người làm việc trong môi trường doanh nghiệp, tập trung vào giao tiếp, đàm phán và xử lý công việc bằng tiếng Trung.', targets: ['Người đi làm', 'Chủ doanh nghiệp', 'Nhân viên xuất nhập khẩu', 'Sales, Purchasing, Logistics', 'Người làm việc với đối tác Trung Quốc'], outcomes: ['Giao tiếp chuyên nghiệp trong môi trường doanh nghiệp', 'Tự tin làm việc với khách hàng và đối tác Trung Quốc', 'Soạn email, báo giá và tài liệu thương mại bằng tiếng Trung', 'Nâng cao lợi thế nghề nghiệp và cơ hội thăng tiến'], curriculum: [
      { title: 'Email thương mại', desc: 'Viết và đọc email thương mại chuyên nghiệp' },
      { title: 'Họp trực tuyến', desc: 'Kỹ năng tham gia và điều hành họp online bằng tiếng Trung' },
      { title: 'Đàm phán & Báo giá', desc: 'Đàm phán hợp đồng, báo giá và thương lượng' },
      { title: 'Hợp đồng & Thuật ngữ kinh doanh', desc: 'Đọc hiểu hợp đồng, thuật ngữ kinh doanh chuyên ngành' },
      { title: 'Thuyết trình & Văn hóa doanh nghiệp', desc: 'Thuyết trình chuyên nghiệp và văn hóa doanh nghiệp Trung Quốc' },
    ], faqs: [] },
}

const allData = { ...coursesData }
const course = ref<Record<string, any> | null>(null)

function loadCourse(slug: string) {
  course.value = allData[slug] || null
}

// Load on initial mount
loadCourse(route.params.slug as string)

// Reload on route param changes — use onBeforeRouteUpdate to load data
// BEFORE the page transition starts, preventing the v-if="course" flicker.
onBeforeRouteUpdate((to) => {
  loadCourse(to.params.slug as string)
})

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

.course-info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
.course-info-item { display: flex; flex-direction: column; gap: 4px; padding: 14px 16px; background: var(--color-surface); border-radius: var(--radius-sm); border: 1px solid var(--color-border); }
.course-info-item span { font-size: 0.8rem; color: var(--color-muted); font-weight: 500; }
.course-info-item strong { font-size: 0.95rem; color: var(--color-ink); font-weight: 700; }
.roadmap-text { font-size: 1.05rem; font-weight: 700; color: var(--color-primary); line-height: 1.8; }

.course-sidebar { position: sticky; top: 90px; }

@media (max-width: 1024px) {
  .course-hero-inner { grid-template-columns: 1fr; }
  .course-content { grid-template-columns: 1fr; }
  .course-sidebar { position: static; }
}

@media (max-width: 640px) {
  .course-info-grid { grid-template-columns: 1fr; }
}
</style>

<template>
  <main v-if="post">
    <article>
      <!-- Hero -->
      <section class="blog-hero" :style="{ background: post.gradient }">
        <div class="container">
          <nav class="breadcrumb">
            <NuxtLink to="/">Trang chủ</NuxtLink><span>/</span>
            <NuxtLink to="/blog">Blog</NuxtLink><span>/</span>
            <span>{{ post.category }}</span>
          </nav>
          <span class="blog-category-badge">{{ post.category }}</span>
          <h1 class="blog-title">{{ post.title }}</h1>
          <div class="blog-meta">
            <span>📅 {{ post.date }}</span>
            <span>·</span>
            <span>⏱ {{ post.readTime }} phút đọc</span>
            <span>·</span>
            <span>✍️ Luoyue Chinese</span>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="section">
        <div class="container blog-layout">
          <div class="blog-content">
            <div class="blog-body" v-html="post.content" />

            <!-- Tags -->
            <div class="blog-tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>

            <!-- Share -->
            <div class="blog-share">
              <span class="share-label">Chia sẻ:</span>
              <a href="#" class="share-btn fb">Facebook</a>
              <a href="#" class="share-btn zalo">Zalo</a>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="blog-sidebar">
            <ConsultationForm title="Đăng ký tư vấn" subtitle="Nhận tư vấn học tiếng Trung miễn phí từ chuyên gia" />

            <div class="sidebar-related">
              <h3>Bài viết liên quan</h3>
              <NuxtLink to="/blog/hoc-tieng-trung-bao-lau-dat-hsk3" class="related-item">
                📊 Học tiếng Trung bao lâu thì đạt HSK 3?
              </NuxtLink>
              <NuxtLink to="/blog/bi-quyet-nho-han-tu" class="related-item">
                🧠 Bí quyết nhớ Hán tự lâu không quên
              </NuxtLink>
              <NuxtLink to="/blog/tu-vung-kinh-doanh-tieng-trung" class="related-item">
                💼 50 từ vựng tiếng Trung thương mại
              </NuxtLink>
            </div>
          </aside>
        </div>
      </section>
    </article>
  </main>

  <main v-else>
    <section class="section" style="text-align: center; padding: 160px 0">
      <div class="container">
        <h1 style="font-size: 2rem; color: var(--color-muted)">Bài viết không tồn tại</h1>
        <NuxtLink to="/blog" class="btn btn-primary" style="margin-top: 24px">Về trang Blog</NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const posts: Record<string, any> = {
  'hoc-tieng-trung-bao-lau-dat-hsk3': {
    title: 'Học tiếng Trung bao lâu thì đạt HSK 3?',
    category: 'HSK', date: '28/06/2025', readTime: 5,
    gradient: 'linear-gradient(135deg, #EAF4FF 0%, #d0e8ff 100%)',
    tags: ['HSK 3', 'Lộ trình', 'Kinh nghiệm'],
    content: `
      <h2>Tổng quan về thời gian học HSK 3</h2>
      <p>Đây là câu hỏi phổ biến nhất chúng tôi nhận được. Câu trả lời phụ thuộc vào nền tảng ban đầu và cường độ học tập của bạn.</p>
      <h2>Nếu bạn bắt đầu từ đầu (Zero)</h2>
      <p>Từ người chưa biết gì đến HSK 3, thông thường cần <strong>6–8 tháng</strong> nếu học 2–3 buổi/tuần (mỗi buổi 1,5–2 tiếng).</p>
      <ul>
        <li>HSK 1: ~2 tháng (150 từ)</li>
        <li>HSK 2: ~2 tháng (300 từ)</li>
        <li>HSK 3: ~3 tháng (600 từ)</li>
      </ul>
      <h2>Nếu bạn có nền tảng sơ cấp</h2>
      <p>Nếu đã học qua HSK 1 hoặc có vốn tiếng Trung cơ bản, thời gian đạt HSK 3 có thể rút ngắn xuống còn <strong>3–4 tháng</strong>.</p>
      <h2>Yếu tố ảnh hưởng đến tốc độ học</h2>
      <ul>
        <li><strong>Tần suất học:</strong> Học đều đặn 3–4 buổi/tuần nhanh hơn học 1 buổi/tuần đáng kể</li>
        <li><strong>Chất lượng lớp học:</strong> Lớp nhỏ (<15 học viên) cho kết quả tốt hơn lớp đông</li>
        <li><strong>Luyện tập ngoài giờ:</strong> Nghe podcast, xem phim tiếng Trung ngoài giờ học</li>
        <li><strong>Phương pháp giảng dạy:</strong> Giáo viên kinh nghiệm giúp bạn tiến bộ nhanh hơn</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Với lộ trình học tại Luoyue Chinese, chúng tôi cam kết giúp học viên đạt HSK 3 trong vòng <strong>6–8 tháng</strong> từ đầu. Hãy đăng ký tư vấn để nhận lộ trình học phù hợp với bạn!</p>
    `,
  },
  'bi-quyet-nho-han-tu': {
    title: 'Bí quyết nhớ Hán tự lâu không quên',
    category: 'Kinh nghiệm', date: '14/06/2025', readTime: 6,
    gradient: 'linear-gradient(135deg, #E0F7FA, #b2ebf2)',
    tags: ['Hán tự', 'Ghi nhớ', 'Mẹo học'],
    content: `
      <h2>Tại sao Hán tự lại khó nhớ?</h2>
      <p>Hán tự có hình dạng phức tạp và không có mối liên hệ rõ ràng với phát âm như chữ Latin. Đây là lý do nhiều người cảm thấy khó nhớ.</p>
      <h2>5 phương pháp nhớ Hán tự hiệu quả</h2>
      <h3>1. Học theo bộ thủ (Radical)</h3>
      <p>Hán tự được cấu thành từ các bộ phận gọi là "bộ thủ". Học bộ thủ giúp bạn đoán nghĩa và nhớ chữ dễ hơn. Ví dụ: bộ 氵 (thủy) thường liên quan đến nước.</p>
      <h3>2. Dùng trí nhớ liên tưởng</h3>
      <p>Tạo câu chuyện hoặc hình ảnh từ hình dạng của chữ. Ví dụ: chữ 山 (núi) trông giống 3 đỉnh núi.</p>
      <h3>3. Flashcard spaced repetition</h3>
      <p>Dùng app như Anki để ôn tập Hán tự theo thuật toán ghi nhớ gián đoạn — học đúng thời điểm trước khi quên.</p>
      <h3>4. Viết tay thường xuyên</h3>
      <p>Viết tay kích hoạt cơ nhớ khác với đọc. Mỗi ngày viết 5–10 chữ mới nhiều lần.</p>
      <h3>5. Học trong ngữ cảnh</h3>
      <p>Học chữ trong câu thực tế thay vì đơn lẻ. Ví dụ: học "学习" (học tập) trong câu "我在学习中文" sẽ nhớ lâu hơn học riêng từng chữ.</p>
    `,
  },
}

const post = computed(() => posts[slug] || null)

useHead({
  title: computed(() => post.value ? `${post.value.title} | Blog Luoyue Chinese` : 'Blog | Luoyue Chinese'),
  meta: computed(() => post.value ? [{ name: 'description', content: post.value.title }] : []),
})
</script>

<style scoped>
.blog-hero { padding: 140px 0 60px; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--color-muted); margin-bottom: 16px; }
.breadcrumb a { color: var(--color-primary); }
.blog-category-badge { display: inline-block; background: var(--color-primary); color: white; font-size: 0.75rem; font-weight: 700; padding: 5px 12px; border-radius: var(--radius-full); margin-bottom: 14px; }
.blog-title { font-size: clamp(1.75rem, 4vw, 2.8rem); font-weight: 900; color: var(--color-ink); margin-bottom: 16px; line-height: 1.2; }
.blog-meta { display: flex; gap: 8px; font-size: 0.875rem; color: var(--color-muted); flex-wrap: wrap; }

.blog-layout { display: grid; grid-template-columns: 1fr 360px; gap: 48px; }
.blog-content { max-width: 100%; }
:deep(.blog-body h2) { font-size: 1.4rem; font-weight: 700; color: var(--color-ink); margin: 28px 0 14px; padding-bottom: 8px; border-bottom: 2px solid var(--color-border); }
:deep(.blog-body h3) { font-size: 1.1rem; font-weight: 700; color: var(--color-primary-dark); margin: 20px 0 10px; }
:deep(.blog-body p) { font-size: 0.95rem; color: var(--color-muted); line-height: 1.8; margin-bottom: 14px; }
:deep(.blog-body ul), :deep(.blog-body ol) { padding-left: 20px; margin-bottom: 14px; }
:deep(.blog-body li) { font-size: 0.95rem; color: var(--color-muted); line-height: 1.7; margin-bottom: 6px; }
:deep(.blog-body strong) { color: var(--color-ink); }

.blog-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 32px; padding-top: 20px; border-top: 1px solid var(--color-border); }
.tag { padding: 5px 12px; background: var(--color-primary-light); color: var(--color-primary-dark); font-size: 0.78rem; font-weight: 600; border-radius: var(--radius-full); }

.blog-share { display: flex; align-items: center; gap: 10px; margin-top: 20px; }
.share-label { font-size: 0.875rem; font-weight: 600; color: var(--color-muted); }
.share-btn { padding: 7px 16px; border-radius: var(--radius-full); font-size: 0.8rem; font-weight: 700; color: white; }
.fb { background: #1877f2; }
.zalo { background: #0068ff; }

.blog-sidebar { display: flex; flex-direction: column; gap: 24px; position: sticky; top: 90px; }
.sidebar-related { background: white; border-radius: var(--radius-md); padding: 24px; border: 1.5px solid var(--color-border); }
.sidebar-related h3 { font-size: 1rem; font-weight: 700; color: var(--color-ink); margin-bottom: 16px; }
.related-item { display: block; padding: 10px 0; font-size: 0.85rem; color: var(--color-muted); border-bottom: 1px solid var(--color-border); transition: color 0.2s; }
.related-item:last-child { border-bottom: none; }
.related-item:hover { color: var(--color-primary); }

@media (max-width: 1024px) { .blog-layout { grid-template-columns: 1fr; } .blog-sidebar { position: static; } }
</style>

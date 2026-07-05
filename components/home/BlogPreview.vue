<template>
  <section class="section">
    <div class="container">
      <!-- Header -->
      <div class="section-header reveal">
        <div class="badge">📰 Blog</div>
        <h2 class="section-title">Bài viết <span class="text-primary">mới nhất</span></h2>
        <div class="divider" />
        <p class="section-subtitle">Kiến thức tiếng Trung, kinh nghiệm học, văn hóa Trung Quốc.</p>
      </div>

      <!-- Blog grid -->
      <div class="blog-grid">
        <article
          v-for="(post, i) in posts"
          :key="i"
          class="blog-card reveal"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <!-- Image -->
          <div class="blog-image" :style="{ background: post.gradient }">
            <span class="blog-emoji">{{ post.emoji }}</span>
            <span class="blog-category">{{ post.category }}</span>
          </div>

          <!-- Content -->
          <div class="blog-content">
            <div class="blog-meta">
              <span>{{ post.date }}</span>
              <span>·</span>
              <span>{{ post.readTime }} phút đọc</span>
            </div>
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <NuxtLink :to="`/blog/${post.slug}`" class="blog-link">
              Đọc tiếp <ArrowRight :size="16" />
            </NuxtLink>
          </div>
        </article>
      </div>

      <!-- View all -->
      <div class="blog-cta reveal">
        <NuxtLink to="/blog" class="btn btn-outline">
          Xem tất cả bài viết
          <ArrowRight :size="18" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const posts = [
  {
    slug: 'hoc-tieng-trung-bao-lau-dat-hsk3',
    title: 'Học tiếng Trung bao lâu thì đạt HSK 3?',
    excerpt: 'Nhiều học viên thắc mắc cần bao lâu để đạt HSK 3. Bài viết này phân tích lộ trình thực tế dựa trên kinh nghiệm hàng trăm học viên của Luoyue Chinese.',
    category: 'HSK',
    date: '28/06/2025',
    readTime: 5,
    emoji: '📊',
    gradient: 'linear-gradient(135deg, #2E86DE20, #1B4F9130)',
  },
  {
    slug: 'tu-vung-tieng-trung-kinh-doanh',
    title: '50 từ vựng tiếng Trung thương mại cần biết ngay',
    excerpt: 'Danh sách 50 từ vựng thiết yếu cho dân xuất nhập khẩu, kinh doanh với đối tác Trung Quốc. Kèm ví dụ câu thực tế và cách phát âm chuẩn.',
    category: 'Từ vựng',
    date: '20/06/2025',
    readTime: 8,
    emoji: '💼',
    gradient: 'linear-gradient(135deg, #F5C54220, #E67E2230)',
  },
  {
    slug: 'bi-quyet-nho-han-tu-lau-quen',
    title: 'Bí quyết nhớ Hán tự lâu không quên',
    excerpt: 'Phương pháp ghi nhớ Hán tự hiệu quả nhất được giảng viên Luoyue Chinese đúc kết qua nhiều năm dạy học. Áp dụng ngay hôm nay!',
    category: 'Kinh nghiệm',
    date: '14/06/2025',
    readTime: 6,
    emoji: '🧠',
    gradient: 'linear-gradient(135deg, #4ECDC420, #45B7D130)',
  },
]
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
.section-header .section-subtitle { text-align: center; margin-top: 16px; }

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.blog-card {
  background: white;
  border-radius: var(--radius-md);
  border: 1.5px solid var(--color-border);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-card-hover);
  transform: translateY(-5px);
}

.blog-image {
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.blog-emoji {
  font-size: 4rem;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
}

.blog-category {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--color-primary);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-full);
}

.blog-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}

.blog-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--color-muted);
}

.blog-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-ink);
  line-height: 1.4;
}

.blog-excerpt {
  font-size: 0.85rem;
  color: var(--color-muted);
  line-height: 1.6;
  flex: 1;
}

.blog-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  transition: gap 0.2s;
}

.blog-link:hover {
  gap: 10px;
}

.blog-cta {
  text-align: center;
  margin-top: 40px;
}

@media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .blog-grid { grid-template-columns: 1fr; } }
</style>

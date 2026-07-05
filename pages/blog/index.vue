<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb"><NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Blog</span></nav>
        <h1 class="page-hero-title">Blog <span class="text-primary">tiếng Trung</span></h1>
        <p class="page-hero-subtitle">Kiến thức HSK, ngữ pháp, từ vựng, kinh nghiệm học và văn hóa Trung Quốc</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Search + Filter -->
        <div class="blog-toolbar reveal">
          <div class="search-box">
            <Search :size="18" />
            <input v-model="searchQuery" type="text" placeholder="Tìm kiếm bài viết..." id="blog-search" />
          </div>
          <div class="category-tabs">
            <button
              v-for="cat in categories"
              :key="cat"
              class="filter-tab"
              :class="{ active: activeCategory === cat }"
              @click="activeCategory = cat"
            >{{ cat }}</button>
          </div>
        </div>

        <!-- Blog grid -->
        <div v-if="filteredPosts.length > 0" class="blog-grid">
          <article
            v-for="(post, i) in filteredPosts"
            :key="post.slug"
            class="blog-card reveal"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <NuxtLink :to="`/blog/${post.slug}`" class="blog-image" :style="{ background: post.gradient }">
              <span class="blog-emoji">{{ post.emoji }}</span>
              <span class="blog-category-badge">{{ post.category }}</span>
            </NuxtLink>
            <div class="blog-content">
              <div class="blog-meta">
                <span>{{ post.date }}</span><span>·</span><span>{{ post.readTime }} phút</span>
              </div>
              <NuxtLink :to="`/blog/${post.slug}`">
                <h2 class="blog-title">{{ post.title }}</h2>
              </NuxtLink>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <NuxtLink :to="`/blog/${post.slug}`" class="blog-link">
                Đọc tiếp <ArrowRight :size="15" />
              </NuxtLink>
            </div>
          </article>
        </div>

        <div v-else class="no-results">
          <span>🔍</span>
          <p>Không tìm thấy bài viết nào phù hợp. Hãy thử từ khóa khác.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Search, ArrowRight } from '@lucide/vue'

useHead({
  title: 'Blog tiếng Trung | Luoyue Chinese',
  meta: [{ name: 'description', content: 'Blog tiếng Trung Luoyue Chinese: HSK, ngữ pháp, từ vựng, kinh nghiệm học, văn hóa Trung Quốc. Cập nhật đều đặn.' }],
})

const posts = [
  { slug: 'hoc-tieng-trung-bao-lau-dat-hsk3', title: 'Học tiếng Trung bao lâu thì đạt HSK 3?', excerpt: 'Phân tích lộ trình thực tế từ hàng trăm học viên Luoyue Chinese. Từ zero đến HSK 3 mất bao lâu?', category: 'HSK', date: '28/06/2025', readTime: 5, emoji: '📊', gradient: 'linear-gradient(135deg, #EAF4FF, #d0e8ff)' },
  { slug: 'tu-vung-kinh-doanh-tieng-trung', title: '50 từ vựng tiếng Trung thương mại cần biết ngay', excerpt: 'Danh sách 50 từ vựng thiết yếu cho dân xuất nhập khẩu, kinh doanh với đối tác Trung Quốc.', category: 'Từ vựng', date: '20/06/2025', readTime: 8, emoji: '💼', gradient: 'linear-gradient(135deg, #FFF8E1, #ffe0b2)' },
  { slug: 'bi-quyet-nho-han-tu', title: 'Bí quyết nhớ Hán tự lâu không quên', excerpt: 'Phương pháp ghi nhớ Hán tự hiệu quả nhất được đúc kết qua nhiều năm dạy học.', category: 'Kinh nghiệm', date: '14/06/2025', readTime: 6, emoji: '🧠', gradient: 'linear-gradient(135deg, #E0F7FA, #b2ebf2)' },
  { slug: 'du-hoc-trung-quoc-can-biet-gi', title: 'Du học Trung Quốc cần biết những gì?', excerpt: 'Hướng dẫn toàn diện về du học Trung Quốc: học bổng, thủ tục, cuộc sống, chi phí thực tế.', category: 'Du học', date: '05/06/2025', readTime: 12, emoji: '✈️', gradient: 'linear-gradient(135deg, #F3E5F5, #e1bee7)' },
  { slug: 'ngu-phap-ba-ngu-phap-quan-trong-hsk2', title: '5 ngữ pháp quan trọng nhất trong HSK 2', excerpt: 'Nắm vững 5 ngữ pháp này, bạn có thể tự tin làm bài thi HSK 2 phần ngữ pháp.', category: 'Ngữ pháp', date: '28/05/2025', readTime: 7, emoji: '📝', gradient: 'linear-gradient(135deg, #E8F5E9, #c8e6c9)' },
  { slug: 'tet-nguyen-dan-viet-vs-trung-quoc', title: 'Tết Nguyên Đán: điểm khác biệt Việt–Trung', excerpt: 'Khám phá những điểm tương đồng và khác biệt thú vị trong phong tục đón Tết của người Việt và người Hoa.', category: 'Văn hóa', date: '18/05/2025', readTime: 9, emoji: '🏮', gradient: 'linear-gradient(135deg, #FFEBEE, #ffcdd2)' },
]

const categories = ['Tất cả', 'HSK', 'Ngữ pháp', 'Từ vựng', 'Du học', 'Văn hóa', 'Kinh nghiệm']
const activeCategory = ref('Tất cả')
const searchQuery = ref('')

const filteredPosts = computed(() => {
  let result = posts
  if (activeCategory.value !== 'Tất cả') result = result.filter(p => p.category === activeCategory.value)
  if (searchQuery.value) result = result.filter(p => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()))
  return result
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
.page-hero-subtitle { font-size: 1.05rem; color: rgba(255,255,255,0.75); }

.blog-toolbar { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
.search-box { display: flex; align-items: center; gap: 12px; padding: 12px 18px; background: white; border-radius: var(--radius-full); border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); max-width: 480px; color: var(--color-muted); }
.search-box input { border: none; outline: none; font-size: 0.9rem; flex: 1; font-family: var(--font-sans); color: var(--color-ink); }
.category-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-tab { padding: 7px 16px; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 600; border: 1.5px solid var(--color-border); background: white; color: var(--color-muted); cursor: pointer; transition: all 0.2s; }
.filter-tab:hover { border-color: var(--color-primary); color: var(--color-primary); }
.filter-tab.active { background: var(--color-primary); border-color: var(--color-primary); color: white; }

.blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.blog-card { background: white; border-radius: var(--radius-md); border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); overflow: hidden; transition: all 0.3s; display: flex; flex-direction: column; }
.blog-card:hover { border-color: var(--color-primary); box-shadow: var(--shadow-card-hover); transform: translateY(-5px); }
.blog-image { height: 160px; display: flex; align-items: center; justify-content: center; position: relative; }
.blog-emoji { font-size: 4rem; }
.blog-category-badge { position: absolute; top: 12px; left: 12px; background: var(--color-primary); color: white; font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full); }
.blog-content { padding: 22px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
.blog-meta { display: flex; gap: 6px; font-size: 0.78rem; color: var(--color-muted); }
.blog-title { font-size: 1rem; font-weight: 700; color: var(--color-ink); line-height: 1.4; }
.blog-title:hover { color: var(--color-primary); }
.blog-excerpt { font-size: 0.85rem; color: var(--color-muted); line-height: 1.6; flex: 1; }
.blog-link { display: inline-flex; align-items: center; gap: 5px; font-size: 0.875rem; font-weight: 600; color: var(--color-primary); transition: gap 0.2s; }
.blog-link:hover { gap: 10px; }

.no-results { text-align: center; padding: 80px 0; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.no-results span { font-size: 3rem; }
.no-results p { color: var(--color-muted); }

@media (max-width: 1024px) { .blog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .blog-grid { grid-template-columns: 1fr; } }
</style>

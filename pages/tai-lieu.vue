<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb"><NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Tài liệu miễn phí</span></nav>
        <h1 class="page-hero-title">Tài liệu <span class="text-primary">miễn phí</span></h1>
        <p class="page-hero-subtitle">PDF, Flashcard, file nghe, bộ đề HSK — nhập email để nhận link tải ngay</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Tabs -->
        <div class="filter-tabs reveal" style="margin-bottom: 36px">
          <button v-for="tab in tabs" :key="tab" class="filter-tab" :class="{ active: activeTab === tab }" @click="activeTab = tab">{{ tab }}</button>
        </div>

        <!-- Documents grid -->
        <div class="docs-grid">
          <div
            v-for="(doc, i) in filteredDocs"
            :key="i"
            class="doc-card reveal"
            :style="{ transitionDelay: `${i * 60}ms` }"
          >
            <div class="doc-icon-wrap" :style="{ background: doc.color + '20' }">
              <span class="doc-icon" :style="{ color: doc.color }">{{ doc.icon }}</span>
            </div>
            <div class="doc-info">
              <span class="doc-type">{{ doc.type }}</span>
              <h3 class="doc-title">{{ doc.title }}</h3>
              <p class="doc-desc">{{ doc.desc }}</p>
              <div class="doc-meta">
                <span>{{ doc.size }}</span>
                <span>·</span>
                <span>{{ doc.downloads }} lượt tải</span>
              </div>
            </div>
            <button class="btn btn-primary doc-btn" @click="openDownload(doc)">
              Tải miễn phí
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Download Modal -->
    <Teleport to="body">
      <div v-if="downloadModal" class="modal-overlay" @click.self="downloadModal = false">
        <div class="modal-card">
          <button class="modal-close" @click="downloadModal = false">✕</button>
          <h3 class="modal-title">Nhận tài liệu miễn phí</h3>
          <p class="modal-desc">Nhập email để nhận link tải <strong>{{ selectedDoc?.title }}</strong></p>
          <form @submit.prevent="handleDownload" class="modal-form">
            <input v-model="downloadEmail" type="email" placeholder="email@example.com *" required />
            <button type="submit" class="btn btn-primary">Gửi link tải về email</button>
          </form>
          <p v-if="downloadSent" class="success-msg">✅ Link tải đã được gửi! Kiểm tra hộp thư nhé.</p>
          <p class="modal-note">📧 Chúng tôi không spam. Link gửi trong 5 phút.</p>
        </div>
      </div>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Tài liệu miễn phí | Luoyue Chinese',
  meta: [{ name: 'description', content: 'Tải miễn phí tài liệu tiếng Trung: PDF, Flashcard, đề thi HSK, file nghe. Nhập email nhận link tải ngay.' }],
})

const docs = [
  { title: 'Bộ đề thi HSK 1 (Full 10 đề)', type: 'PDF', icon: '📄', color: '#2E86DE', size: '2.4 MB', downloads: '1.234', desc: '10 đề thi HSK 1 mô phỏng đầy đủ 4 kỹ năng, có đáp án chi tiết.', category: 'HSK' },
  { title: 'Bộ đề thi HSK 2 (Full 8 đề)', type: 'PDF', icon: '📄', color: '#45B7D1', size: '3.1 MB', downloads: '987', desc: '8 đề thi HSK 2 chuẩn format mới 2023. Kèm phân tích lỗi sai thường gặp.', category: 'HSK' },
  { title: 'Bộ đề thi HSK 3 (Full 6 đề)', type: 'PDF', icon: '📄', color: '#1B4F91', size: '4.2 MB', downloads: '856', desc: '6 đề thi HSK 3 + audio file nghe MP3, giải thích ngữ pháp chi tiết.', category: 'HSK' },
  { title: 'Flashcard 500 từ HSK 1–2', type: 'Flashcard', icon: '🃏', color: '#4ECDC4', size: '1.8 MB', downloads: '2.100', desc: '500 flashcard từ vựng HSK 1–2 với hình ảnh minh họa và câu ví dụ.', category: 'Flashcard' },
  { title: 'Flashcard 800 từ HSK 3–4', type: 'Flashcard', icon: '🃏', color: '#F5C542', size: '2.6 MB', downloads: '1.456', desc: '800 flashcard HSK 3–4 song ngữ Việt–Trung, có pinyin và âm thanh.', category: 'Flashcard' },
  { title: 'File nghe HSK 1 (Audio MP3)', type: 'Audio', icon: '🎧', color: '#FF6B6B', size: '45 MB', downloads: '1.678', desc: 'Toàn bộ audio file nghe đề thi HSK 1 chất lượng cao, giọng chuẩn bản ngữ.', category: 'Audio' },
  { title: 'Bảng ngữ pháp HSK 1–3 (PDF)', type: 'PDF', icon: '📝', color: '#6C3483', size: '1.2 MB', downloads: '3.245', desc: 'Tổng hợp toàn bộ cấu trúc ngữ pháp HSK 1–3 theo chủ đề, dễ tra cứu.', category: 'Ngữ pháp' },
  { title: 'Checklist 30 ngày học HSK', type: 'PDF', icon: '✅', color: '#2a9d8f', size: '0.8 MB', downloads: '4.512', desc: 'Lộ trình học 30 ngày chi tiết theo ngày, kèm checklist tự đánh giá tiến độ.', category: 'Khác' },
]

const tabs = ['Tất cả', 'HSK', 'Flashcard', 'Audio', 'Ngữ pháp', 'Khác']
const activeTab = ref('Tất cả')
const downloadModal = ref(false)
const selectedDoc = ref<any>(null)
const downloadEmail = ref('')
const downloadSent = ref(false)

const filteredDocs = computed(() => {
  if (activeTab.value === 'Tất cả') return docs
  return docs.filter(d => d.category === activeTab.value)
})

function openDownload(doc: any) {
  selectedDoc.value = doc
  downloadModal.value = true
  downloadSent.value = false
  downloadEmail.value = ''
}

async function handleDownload() {
  await new Promise(r => setTimeout(r, 800))
  downloadSent.value = true
}

</script>

<style scoped>
.page-hero { background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary)); padding: 120px 0 64px; color: white; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
.breadcrumb a { color: rgba(255,255,255,0.7); }
.page-hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: white; margin-bottom: 12px; }
.page-hero-subtitle { font-size: 1.05rem; color: rgba(255,255,255,0.75); }

.filter-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
.filter-tab { padding: 8px 18px; border-radius: var(--radius-full); font-size: 0.875rem; font-weight: 600; border: 1.5px solid var(--color-border); background: white; color: var(--color-muted); cursor: pointer; transition: all 0.2s; }
.filter-tab:hover { border-color: var(--color-primary); color: var(--color-primary); }
.filter-tab.active { background: var(--color-primary); border-color: var(--color-primary); color: white; }

.docs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
.doc-card { background: white; border-radius: var(--radius-md); padding: 24px; border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); display: flex; align-items: center; gap: 20px; transition: all 0.3s; }
.doc-card:hover { border-color: var(--color-primary); box-shadow: var(--shadow-card-hover); transform: translateY(-3px); }
.doc-icon-wrap { width: 64px; height: 64px; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.doc-icon { font-size: 1.75rem; }
.doc-info { flex: 1; min-width: 0; }
.doc-type { font-size: 0.72rem; font-weight: 700; color: var(--color-muted); text-transform: uppercase; letter-spacing: 0.08em; }
.doc-title { font-size: 0.95rem; font-weight: 700; color: var(--color-ink); margin: 4px 0 6px; }
.doc-desc { font-size: 0.8rem; color: var(--color-muted); line-height: 1.5; }
.doc-meta { display: flex; gap: 6px; font-size: 0.75rem; color: var(--color-muted); margin-top: 6px; }
.doc-btn { padding: 9px 16px; font-size: 0.82rem; flex-shrink: 0; white-space: nowrap; }

.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 24px; }
.modal-card { background: white; border-radius: 24px; padding: 40px; max-width: 420px; width: 100%; position: relative; }
.modal-close { position: absolute; top: 16px; right: 16px; background: var(--color-primary-light); border: none; border-radius: 50%; width: 32px; height: 32px; cursor: pointer; font-size: 0.875rem; color: var(--color-primary); }
.modal-title { font-size: 1.3rem; font-weight: 700; color: var(--color-ink); margin-bottom: 8px; }
.modal-desc { font-size: 0.875rem; color: var(--color-muted); margin-bottom: 24px; }
.modal-form { display: flex; flex-direction: column; gap: 12px; }
.modal-form input { padding: 13px 15px; border: 1.5px solid var(--color-border); border-radius: var(--radius-sm); font-size: 0.9rem; font-family: var(--font-sans); outline: none; }
.modal-form input:focus { border-color: var(--color-primary); }
.modal-form .btn { justify-content: center; }
.success-msg { color: #16a34a; font-weight: 600; font-size: 0.875rem; text-align: center; padding: 10px; background: #f0fdf4; border-radius: 8px; margin-top: 8px; }
.modal-note { font-size: 0.78rem; color: var(--color-muted); text-align: center; margin-top: 12px; }

@media (max-width: 1024px) { .docs-grid { grid-template-columns: 1fr; } }
@media (max-width: 640px) { .doc-card { flex-direction: column; align-items: flex-start; } }
</style>

<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb"><NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Hỏi đáp</span></nav>
        <h1 class="page-hero-title">Hỏi đáp <span class="text-primary">thường gặp</span></h1>
        <p class="page-hero-subtitle">Giải đáp mọi thắc mắc về khóa học, học phí, lịch học và chất lượng giảng dạy</p>
      </div>
    </section>

    <section class="section">
      <div class="container faq-layout">
        <div class="faq-main">
          <!-- Category -->
          <div v-for="(group, gi) in faqGroups" :key="gi" class="faq-group reveal" :style="{ transitionDelay: `${gi * 100}ms` }">
            <h2 class="faq-group-title">{{ group.emoji }} {{ group.title }}</h2>
            <FaqAccordion :items="group.items" />
          </div>
        </div>

        <!-- Sidebar CTA -->
        <aside class="faq-sidebar">
          <div class="faq-cta-card">
            <div class="faq-cta-icon">💬</div>
            <h3>Vẫn còn thắc mắc?</h3>
            <p>Liên hệ trực tiếp với chúng tôi để được hỗ trợ nhanh nhất</p>
            <NuxtLink to="/lien-he" class="btn btn-primary" style="justify-content: center; margin-top: 8px">Liên hệ tư vấn</NuxtLink>
            <a href="tel:0989664362" class="btn btn-outline" style="justify-content: center; margin-top: 10px">
              📞 Gọi ngay: 0989664362
            </a>
            <a href="https://zalo.me/0989664362" target="_blank" class="btn" style="background: #0068ff; color: white; justify-content: center; margin-top: 10px">
              Chat Zalo ngay
            </a>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Hỏi đáp | Luoyue Chinese',
  meta: [{ name: 'description', content: 'Câu hỏi thường gặp về khóa học tiếng Trung tại Luoyue Chinese: học phí, lịch học, online/offline, cam kết đầu ra, hoàn tiền.' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Học phí các khóa học là bao nhiêu?', acceptedAnswer: { '@type': 'Answer', text: 'Học phí dao động từ 2.500.000đ đến 5.000.000đ/khóa tùy cấp độ và thời lượng. Xem chi tiết tại trang Khóa học.' } },
      ],
    }),
  }],
})

const faqGroups = [
  {
    emoji: '📚', title: 'Về khóa học',
    items: [
      { q: 'Luoyue Chinese có những khóa học nào?', a: 'Chúng tôi có HSK 1–6 (từ sơ cấp đến cao cấp), Tiếng Trung giao tiếp, Thiếu nhi (5–12 tuổi) và Business Chinese (tiếng Trung thương mại, xuất nhập khẩu).' },
      { q: 'Học xong mỗi cấp độ mất bao lâu?', a: 'HSK 1–2: ~2 tháng/cấp; HSK 3–4: ~3 tháng/cấp; HSK 5: ~4 tháng; HSK 6: ~5 tháng. Tổng từ đầu đến HSK 6 khoảng 17–18 tháng nếu học liên tục.' },
      { q: 'Khóa học có dạy cả 4 kỹ năng không?', a: 'Có! Mỗi khóa học đều bao gồm nghe, nói, đọc, viết theo chuẩn đề thi HSK. Đặc biệt chú trọng kỹ năng nói để học viên tự tin giao tiếp thực tế.' },
      { q: 'Có học thử miễn phí không?', a: 'Có! Bạn có thể đăng ký học thử 1 buổi hoàn toàn miễn phí để trải nghiệm trước khi đăng ký chính thức.' },
    ],
  },
  {
    emoji: '💰', title: 'Học phí & Thanh toán',
    items: [
      { q: 'Học phí các khóa học là bao nhiêu?', a: 'HSK 1–2: 2.800.000₫/khóa; HSK 3–4: 3.500.000₫/khóa; HSK 5: 4.200.000₫/khóa; HSK 6: 5.000.000₫/khóa; Giao tiếp: 2.800.000₫; Thiếu nhi: 2.500.000₫; Business: 4.000.000₫.' },
      { q: 'Có được hoàn học phí không?', a: 'Trong vòng 7 ngày đầu nếu chưa học quá 3 buổi, học viên có thể hoàn tiền 100%. Sau đó không hoàn phí nhưng được bảo lưu học phí tối đa 6 tháng.' },
      { q: 'Có thể trả góp học phí không?', a: 'Có! Học viên có thể chia học phí thành 2 lần: 50% đầu khóa và 50% giữa khóa. Liên hệ để biết thêm chi tiết.' },
    ],
  },
  {
    emoji: '🏫', title: 'Hình thức học',
    items: [
      { q: 'Có thể học online không?', a: 'Có! Luoyue Chinese cung cấp cả học online (qua Zoom/Google Meet) và offline tại cơ sở. Chất lượng giảng dạy tương đương nhau.' },
      { q: 'Lớp học có bao nhiêu học viên?', a: 'Tối đa 10–15 học viên/lớp để đảm bảo chất lượng. Lớp nhỏ giúp học viên được hỏi và luyện tập nhiều hơn.' },
      { q: 'Nếu vắng buổi học thì có học bù không?', a: 'Có. Học viên vắng có thể học bù tại buổi học cùng cấp độ khác hoặc xem lại bản ghi (đối với online) trong vòng 7 ngày.' },
    ],
  },
  {
    emoji: '🏆', title: 'Cam kết & Kết quả',
    items: [
      { q: 'Cam kết đầu ra là như thế nào?', a: 'Học viên hoàn thành đủ số buổi học và điểm chuyên cần >80% mà không đạt HSK theo mục tiêu, sẽ được học lại miễn phí tối đa 1 kỳ học tương đương.' },
      { q: 'Tỷ lệ đỗ HSK thực tế là bao nhiêu?', a: 'Tỷ lệ đỗ HSK của học viên Luoyue Chinese đạt 98% theo thống kê trong 12 tháng gần đây. Nhiều học viên đạt điểm xuất sắc (trên 250/300).' },
      { q: 'Trung tâm có hỗ trợ đăng ký thi HSK không?', a: 'Có! Chúng tôi hỗ trợ hướng dẫn đăng ký thi HSK tại các hội đồng thi uy tín, cung cấp thông tin lịch thi và tài liệu ôn thi miễn phí.' },
    ],
  },
]

</script>

<style scoped>
.page-hero { background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary)); padding: 120px 0 64px; color: white; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 0.85rem; color: rgba(255,255,255,0.6); margin-bottom: 16px; }
.breadcrumb a { color: rgba(255,255,255,0.7); }
.page-hero-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 900; color: white; margin-bottom: 12px; }
.page-hero-subtitle { font-size: 1.05rem; color: rgba(255,255,255,0.75); }

.faq-layout { display: grid; grid-template-columns: 1fr 300px; gap: 56px; align-items: start; }
.faq-main { display: flex; flex-direction: column; gap: 48px; }
.faq-group-title { font-size: 1.25rem; font-weight: 700; color: var(--color-ink); margin-bottom: 20px; }

.faq-sidebar { position: sticky; top: 90px; }
.faq-cta-card { background: white; border-radius: var(--radius-md); padding: 28px; border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: 0; text-align: center; }
.faq-cta-icon { font-size: 3rem; margin-bottom: 12px; }
.faq-cta-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--color-ink); margin-bottom: 8px; }
.faq-cta-card p { font-size: 0.875rem; color: var(--color-muted); margin-bottom: 20px; }

@media (max-width: 1024px) { .faq-layout { grid-template-columns: 1fr; } .faq-sidebar { position: static; } }
</style>

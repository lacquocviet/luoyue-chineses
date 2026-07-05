<template>
  <main>
    <section class="page-hero">
      <div class="container">
        <nav class="breadcrumb"><NuxtLink to="/">Trang chủ</NuxtLink><span>/</span><span>Liên hệ</span></nav>
        <h1 class="page-hero-title">Liên hệ <span class="text-primary">Luoyue Chinese</span></h1>
        <p class="page-hero-subtitle">Chúng tôi sẵn sàng hỗ trợ bạn — đăng ký tư vấn, hỏi về lịch học hay bất kỳ thắc mắc nào</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-layout">
        <!-- Contact info -->
        <div class="contact-info reveal">
          <h2 class="contact-info-title">Thông tin liên hệ</h2>

          <div class="info-cards">
            <a href="tel:0989664362" class="info-card">
              <div class="info-icon">📞</div>
              <div>
                <div class="info-label">Hotline</div>
                <div class="info-value">0989664362</div>
                <div class="info-note">Thứ 2 – CN: 8:00 – 21:00</div>
              </div>
            </a>
            <a href="mailto:lacquocviet.editor@gmail.com" class="info-card">
              <div class="info-icon">✉️</div>
              <div>
                <div class="info-label">Email</div>
                <div class="info-value">lacquocviet.editor@gmail.com</div>
                <div class="info-note">Phản hồi trong 24h</div>
              </div>
            </a>
            <div class="info-card" style="grid-column: 1 / -1;">
              <div class="info-icon">📍</div>
              <div>
                <div class="info-label">Địa chỉ trung tâm</div>
                <div class="info-value">169 Đường Hoàng Mai, Phường Tương Mai, TP.Hà Nội</div>
              </div>
            </div>
          </div>

          <div class="social-quick">
            <a href="https://facebook.com/luoyuechinese" target="_blank" class="quick-btn fb">
              📘 Nhắn Facebook
            </a>
            <a href="https://zalo.me/0989664362" target="_blank" class="quick-btn zalo">
              💬 Chat Zalo
            </a>
          </div>

          <!-- Map -->
          <div class="map-embed">
            <h3 class="map-title">Bản đồ</h3>
            <iframe
              src="https://maps.google.com/maps?q=169%20%C4%91%C6%B0%E1%BB%9Dng%20ho%C3%A0ng%20mai%2C%20t%C6%B0%C6%A1ng%20mai%2C%20h%C3%A0%20n%E1%BB%99i&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style="border:0; border-radius:12px;"
              allowfullscreen
              loading="lazy"
              title="Bản đồ Luoyue Chinese"
            />
          </div>
        </div>

        <!-- Form -->
        <div class="contact-form-wrap reveal">
          <ConsultationForm
            title="Đăng ký tư vấn miễn phí"
            subtitle="Điền thông tin — chuyên gia của chúng tôi sẽ liên hệ trong 24h để tư vấn khóa học phù hợp nhất với bạn."
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Liên hệ | Luoyue Chinese 雒越中文',
  meta: [{ name: 'description', content: 'Liên hệ Luoyue Chinese: hotline 0989664362, email lacquocviet.editor@gmail.com, địa chỉ 169 Hoàng Mai, Tương Mai, Hà Nội.' }],
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
.page-hero-subtitle { font-size: 1.05rem; color: rgba(255,255,255,0.75); max-width: 540px; }

.contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }

.contact-info { display: flex; flex-direction: column; gap: 24px; }
.contact-info-title { font-size: 1.3rem; font-weight: 700; color: var(--color-ink); margin-bottom: 4px; }

.info-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.info-card { background: white; border-radius: var(--radius-md); padding: 18px; border: 1.5px solid var(--color-border); box-shadow: var(--shadow-card); display: flex; align-items: flex-start; gap: 14px; transition: all 0.2s; }
.info-card:hover { border-color: var(--color-primary); box-shadow: var(--shadow-card-hover); }
.info-icon { font-size: 1.5rem; line-height: 1; flex-shrink: 0; }
.info-label { font-size: 0.72rem; font-weight: 700; color: var(--color-muted); text-transform: uppercase; margin-bottom: 4px; }
.info-value { font-size: 0.9rem; font-weight: 700; color: var(--color-ink); }
.info-note { font-size: 0.75rem; color: var(--color-muted); margin-top: 3px; }

.social-quick { display: flex; gap: 12px; }
.quick-btn { flex: 1; padding: 12px; border-radius: var(--radius-md); font-size: 0.875rem; font-weight: 700; color: white; text-align: center; transition: opacity 0.2s; }
.quick-btn:hover { opacity: 0.9; }
.fb { background: #1877f2; }
.zalo { background: #0068ff; }

.map-title { font-size: 1rem; font-weight: 700; color: var(--color-ink); margin-bottom: 12px; }
.map-embed { }

@media (max-width: 1024px) { .contact-layout { grid-template-columns: 1fr; } .info-cards { grid-template-columns: 1fr; } }
</style>

<template>
  <footer class="footer">
    <div class="container">
      <!-- Top grid -->
      <div class="footer-grid">
        <!-- Brand col -->
        <div class="footer-brand">
          <NuxtLink to="/" class="footer-logo">
            <img src="/logo.png" alt="Luoyue Chinese" class="footer-logo-img" />
            <div>
              <div class="footer-logo-name">Luoyue Chinese</div>
              <div class="footer-logo-chinese chinese">雒越中文</div>
            </div>
          </NuxtLink>
          <p class="footer-tagline">
            Chạm vào ánh trăng tri thức —<br />Chinh phục tiếng Trung
          </p>
          <div class="footer-socials">
            <a href="https://www.facebook.com/lacquocviet?locale=vi_VN" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@lacquocviet" target="_blank" rel="noopener" class="social-btn" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.19 8.19 0 004.79 1.53V7.02a4.85 4.85 0 01-1.02-.33z"/></svg>
            </a>
            <a href="https://www.youtube.com/@AudioHay-1008" target="_blank" rel="noopener" class="social-btn" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links col 1 -->
        <div class="footer-col">
          <h3 class="footer-heading">Khóa học</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/khoa-hoc/hsk-1">HSK 1 — Sơ cấp 1</NuxtLink></li>
            <li><NuxtLink to="/khoa-hoc/hsk-2">HSK 2 — Sơ cấp 2</NuxtLink></li>
            <li><NuxtLink to="/khoa-hoc/hsk-3">HSK 3 — Trung cấp 1</NuxtLink></li>
            <li><NuxtLink to="/khoa-hoc/hsk-4">HSK 4 — Trung cấp 2</NuxtLink></li>
            <li><NuxtLink to="/khoa-hoc/hsk-5">HSK 5 — Cao cấp 1</NuxtLink></li>
            <li><NuxtLink to="/khoa-hoc/hsk-6">HSK 6 — Cao cấp 2</NuxtLink></li>
            <li><NuxtLink to="/khoa-hoc/giao-tiep">Giao tiếp</NuxtLink></li>
            <li><NuxtLink to="/khoa-hoc/thieu-nhi">Thiếu nhi</NuxtLink></li>
          </ul>
        </div>

        <!-- Links col 2 -->
        <div class="footer-col">
          <h3 class="footer-heading">Thông tin</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/gioi-thieu">Giới thiệu</NuxtLink></li>
            <li><NuxtLink to="/hoc-vien">Học viên nói gì</NuxtLink></li>
            <li><NuxtLink to="/lo-trinh-hoc">Lộ trình học</NuxtLink></li>
            <li><NuxtLink to="/tai-lieu">Tài liệu miễn phí</NuxtLink></li>
            <li><NuxtLink to="/hoi-dap">Hỏi đáp</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact col -->
        <div class="footer-col">
          <h3 class="footer-heading">Liên hệ</h3>
          <ul class="footer-contact">
            <li>
              <MapPin :size="16" />
              <span>169 Đường Hoàng Mai, Phường Tương Mai, TP.Hà Nội</span>
            </li>
            <li>
              <Phone :size="16" />
              <a href="tel:0989664362">0989 664 362</a>
            </li>
            <li>
              <Mail :size="16" />
              <a href="mailto:lacquocviet.editor@gmail.com">lacquocviet.editor@gmail.com</a>
            </li>
            <li>
              <Clock :size="16" />
              <span>Thứ 2 – CN: 8:00 – 21:00</span>
            </li>
          </ul>
          <!-- Map embed placeholder -->
          <div class="footer-map">
            <iframe
              src="https://maps.google.com/maps?q=169%20%C4%91%C6%B0%E1%BB%9Dng%20ho%C3%A0ng%20mai%2C%20t%C6%B0%C6%A1ng%20mai%2C%20h%C3%A0%20n%E1%BB%99i&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="150"
              style="border:0; border-radius:12px;"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Bản đồ Luoyue Chinese"
            />
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p>© 2025 Luoyue Chinese 雒越中文. Bảo lưu mọi quyền.</p>
        <div class="footer-bottom-links">
          <a href="#">Chính sách bảo mật</a>
          <a href="#">Điều khoản sử dụng</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { MapPin, Phone, Mail, Clock } from '@lucide/vue'
</script>

<style scoped>
.footer {
  background: var(--color-primary-dark);
  color: rgba(255, 255, 255, 0.85);
  padding: 64px 0 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo-img {
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  object-fit: contain;
  border-radius: 8px;
}

.footer-logo-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
}

.footer-logo-chinese {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

.footer-tagline {
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  font-style: italic;
}

.footer-socials {
  display: flex;
  gap: 10px;
}

.social-btn {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s ease;
}

.social-btn:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
}

.footer-col {}

.footer-heading {
  font-size: 0.875rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 16px;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-links a {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--color-accent-dark);
}

.footer-contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-contact li svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-accent-dark);
}

.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.2s;
}

.footer-contact a:hover {
  color: var(--color-accent-dark);
}

.footer-map {
  border-radius: 12px;
  overflow: hidden;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

.footer-bottom-links {
  display: flex;
  gap: 20px;
}

.footer-bottom-links a {
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s;
}

.footer-bottom-links a:hover {
  color: white;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>

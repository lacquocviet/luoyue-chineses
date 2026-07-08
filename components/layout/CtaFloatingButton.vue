<template>
  <!-- Floating CTA buttons -->
  <div class="cta-floating">
    <!-- Zalo -->
    <a
      href="https://zalo.me/0989664362"
      target="_blank"
      rel="noopener"
      class="float-btn zalo-btn"
      aria-label="Chat Zalo"
    >
      <svg class="float-logo-svg" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="52" height="52" rx="10" fill="#0068FF"/>
        <text x="26" y="34" text-anchor="middle" fill="white" font-family="Arial,Helvetica,sans-serif" font-size="18" font-weight="bold">ZALO</text>
      </svg>
      <span class="float-tooltip">Chat Zalo</span>
    </a>
    <!-- Messenger -->
    <a
      href="https://m.me/lacquocviet"
      target="_blank"
      rel="noopener"
      class="float-btn messenger-btn"
      aria-label="Chat Messenger"
    >
      <svg class="float-logo-svg" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="52" height="52" rx="12" fill="#006AFF"/>
        <path d="M26 11C17.72 11 11 17.17 11 24.83c0 4.43 2.01 8.4 5.21 11.05V42l6.46-3.56c1.06.25 2.17.39 3.33.39 8.28 0 15-6.17 15-13.83S34.28 11 26 11z" fill="white"/>
        <path d="M31.5 22l-6 6.5-3.5-3.8L16 28.5l6-6.5 3.48 3.8L31.5 22z" fill="#006AFF"/>
      </svg>
      <span class="float-tooltip">Chat Messenger</span>
    </a>
    <!-- Register -->
    <NuxtLink
      to="/lien-he"
      class="float-btn register-btn"
      aria-label="Đăng ký tư vấn"
    >
      <BookOpen :size="20" />
      <span class="float-tooltip">Đăng ký tư vấn</span>
    </NuxtLink>
  </div>

  <!-- Consultation popup (show after 30 seconds) -->
  <Teleport to="body">
    <div v-if="showPopup" class="popup-overlay" @click.self="showPopup = false">
      <div class="popup-card">
        <button class="popup-close" @click="showPopup = false">
          <X :size="20" />
        </button>
        <div class="popup-badge">🎁 Ưu đãi đặc biệt</div>
        <h3 class="popup-title">Đăng ký học thử MIỄN PHÍ</h3>
        <p class="popup-desc">
          Nhận ngay buổi học thử miễn phí + bộ tài liệu HSK độc quyền trị giá 500,000₫
        </p>
        <form class="popup-form" @submit.prevent="handlePopupSubmit">
          <input v-model="popupForm.name" type="text" placeholder="Họ và tên *" required />
          <input v-model="popupForm.phone" type="tel" placeholder="Số điện thoại *" required />
          <button type="submit" class="btn btn-primary">
            Nhận ưu đãi ngay
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { BookOpen, X } from '@lucide/vue'

const showPopup = ref(false)
const popupForm = reactive({ name: '', phone: '' })
let timer: ReturnType<typeof setTimeout>

onMounted(() => {
  timer = setTimeout(() => {
    showPopup.value = true
  }, 30000)
})

onUnmounted(() => {
  clearTimeout(timer)
})

function handlePopupSubmit() {
  // TODO: send lead to CRM
  alert(`Cảm ơn ${popupForm.name}! Chúng tôi sẽ liên hệ ${popupForm.phone} trong 24h.`)
  showPopup.value = false
}
</script>

<style scoped>
.cta-floating {
  position: fixed;
  right: 24px;
  bottom: 40px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.float-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  position: relative;
}

.float-btn:hover {
  transform: scale(1.1);
}

.zalo-btn,
.messenger-btn {
  background: transparent;
  padding: 0;
}

.float-logo-svg {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: block;
}

.register-btn { background: var(--color-primary); }

.float-tooltip {
  position: absolute;
  right: calc(100% + 10px);
  background: rgba(31, 41, 55, 0.9);
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 6px 10px;
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

.float-btn:hover .float-tooltip {
  opacity: 1;
}

/* Popup */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.popup-card {
  background: white;
  border-radius: 24px;
  padding: 40px 36px;
  max-width: 420px;
  width: 100%;
  position: relative;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.2);
}

.popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--color-primary-light);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-primary);
  transition: background 0.2s;
}

.popup-close:hover {
  background: var(--color-border);
}

.popup-badge {
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-primary-dark);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.popup-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-ink);
  margin-bottom: 10px;
}

.popup-desc {
  font-size: 0.9rem;
  color: var(--color-muted);
  margin-bottom: 24px;
  line-height: 1.6;
}

.popup-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.popup-form input {
  padding: 14px 16px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-family: var(--font-sans);
  outline: none;
  transition: border-color 0.2s;
}

.popup-form input:focus {
  border-color: var(--color-primary);
}

.popup-form .btn {
  justify-content: center;
}
</style>

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
      <MessageCircle :size="26" />
      <span class="float-tooltip">Chat Zalo</span>
    </a>
    <!-- Phone call -->
    <a
      href="tel:0989664362"
      class="float-btn phone-btn"
      aria-label="Gọi ngay"
    >
      <Phone :size="22" />
      <span class="float-tooltip">Gọi ngay</span>
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
import { Phone, BookOpen, X, MessageCircle } from '@lucide/vue'

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

.zalo-btn { background: #0068ff; }
.phone-btn { background: #22c55e; }
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

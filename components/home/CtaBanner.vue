<template>
  <section class="cta-banner">
    <div class="container cta-inner">
      <div class="cta-text reveal">
        <div class="cta-badge">🎁 Ưu đãi giới hạn</div>
        <h2 class="cta-title">
          Sẵn sàng chinh phục tiếng Trung?
        </h2>
        <p class="cta-subtitle">
          Đăng ký học ngay hôm nay.
        </p>
      </div>

      <div class="cta-form reveal">
        <form @submit.prevent="handleSubmit" class="quick-form">
          <input
            v-model="form.name"
            type="text"
            placeholder="Họ và tên của bạn"
            required
            id="cta-name-input"
          />
          <input
            v-model="form.phone"
            type="tel"
            placeholder="Số điện thoại"
            required
            id="cta-phone-input"
          />
          <select v-model="form.course" id="cta-course-select">
            <option value="">Khóa học quan tâm</option>
            <option value="hsk-1-2">HSK 1–2 (Sơ cấp)</option>
            <option value="hsk-3-4">HSK 3–4 (Trung cấp)</option>
            <option value="hsk-5-6">HSK 5–6 (Cao cấp)</option>
            <option value="giao-tiep">Giao tiếp</option>
            <option value="thieu-nhi">Thiếu nhi</option>
            <option value="business">Business Chinese</option>
          </select>
          <button type="submit" class="btn btn-accent cta-submit-btn" id="cta-submit-btn">
            Đăng ký tư vấn miễn phí →
          </button>
        </form>
        <p class="cta-note">
          ✅ Hoàn toàn miễn phí · Không spam · Phản hồi trong 24h
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const form = reactive({ name: '', phone: '', course: '' })

function handleSubmit() {
  // TODO: integrate with CRM (Lark Suite / Google Sheets)
  alert(`Cảm ơn ${form.name}! Chúng tôi sẽ liên hệ ${form.phone} sớm nhất có thể.`)
  form.name = ''
  form.phone = ''
  form.course = ''
}
</script>

<style scoped>
.cta-banner {
  background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.cta-banner::before {
  content: '语';
  font-family: var(--font-chinese);
  position: absolute;
  font-size: 400px;
  color: rgba(255,255,255,0.03);
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;
}

.cta-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.cta-badge {
  display: inline-block;
  background: rgba(255, 233, 168, 0.2);
  border: 1px solid rgba(255, 233, 168, 0.4);
  color: var(--color-accent);
  padding: 6px 16px;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.cta-title {
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 900;
  color: white;
  line-height: 1.2;
  margin-bottom: 16px;
}

.cta-highlight {
  color: var(--color-accent-dark);
}

.cta-subtitle {
  font-size: 1rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.65;
}

.quick-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: var(--radius-md);
  padding: 32px;
}

.quick-form input,
.quick-form select {
  padding: 14px 16px;
  border: 1.5px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.1);
  border-radius: var(--radius-sm);
  color: white;
  font-size: 0.9rem;
  font-family: var(--font-sans);
  outline: none;
  transition: border-color 0.2s;
}

.quick-form input::placeholder { color: rgba(255,255,255,0.5); }
.quick-form select option { color: var(--color-ink); background: white; }

.quick-form input:focus,
.quick-form select:focus {
  border-color: var(--color-accent);
}

.cta-submit-btn {
  justify-content: center;
  font-size: 1rem;
}

.cta-note {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
  text-align: center;
  margin-top: 4px;
}

@media (max-width: 1024px) {
  .cta-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .cta-text { text-align: center; }
}
</style>

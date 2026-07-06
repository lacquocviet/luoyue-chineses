<template>
  <div class="consultation-form">
    <h3 class="form-title">{{ title }}</h3>
    <p class="form-subtitle">{{ subtitle }}</p>

    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="consult-name">Họ và tên *</label>
        <input
          id="consult-name"
          v-model="form.name"
          type="text"
          placeholder="Nguyễn Văn A"
          required
        />
      </div>

      <div class="form-group">
        <label for="consult-phone">Số điện thoại *</label>
        <input
          id="consult-phone"
          v-model="form.phone"
          type="tel"
          placeholder="0989 664 362"
          required
        />
      </div>

      <div class="form-group">
        <label for="consult-email">Email</label>
        <input
          id="consult-email"
          v-model="form.email"
          type="email"
          placeholder="email@example.com"
        />
      </div>

      <div class="form-group">
        <label for="consult-course">Khóa học quan tâm</label>
        <select id="consult-course" v-model="form.course">
          <option value="">— Chọn khóa học —</option>
          <option value="hsk-1">HSK 1 — Sơ cấp 1</option>
          <option value="hsk-2">HSK 2 — Sơ cấp 2</option>
          <option value="hsk-3">HSK 3 — Trung cấp 1</option>
          <option value="hsk-4">HSK 4 — Trung cấp 2</option>
          <option value="hsk-5">HSK 5 — Cao cấp 1</option>
          <option value="hsk-6">HSK 6 — Cao cấp 2</option>
          <option value="giao-tiep">Giao tiếp</option>
          <option value="thieu-nhi">Thiếu nhi</option>
          <option value="business">Business Chinese</option>
        </select>
      </div>

      <div class="form-group">
        <label for="consult-note">Ghi chú / Câu hỏi</label>
        <textarea
          id="consult-note"
          v-model="form.note"
          placeholder="Bạn có câu hỏi gì không? Ví dụ: Bạn đang ở level nào? Muốn đạt mục tiêu gì?"
          rows="3"
        />
      </div>

      <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
        <span v-if="submitting">Đang gửi...</span>
        <span v-else>Gửi đăng ký tư vấn</span>
      </button>
    </form>

    <!-- Success modal -->
    <Teleport to="body">
      <div v-if="showSuccessModal" class="success-overlay" @click.self="closeSuccessModal">
        <div class="success-modal">
          <div class="success-icon">✅</div>
          <h3 class="success-title">Đăng ký thành công!</h3>
          <p class="success-desc">Cảm ơn <strong>{{ form.name }}</strong> đã đăng ký. Chúng tôi sẽ liên hệ qua số <strong>{{ form.phone }}</strong> trong vòng 24h để tư vấn chi tiết.</p>
          <button class="btn btn-primary" @click="closeSuccessModal">Đã hiểu</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

defineProps({
  title: { type: String, default: 'Đăng ký tư vấn miễn phí' },
  subtitle: { type: String, default: 'Điền thông tin bên dưới — chúng tôi sẽ liên hệ hỗ trợ bạn trong 24h.' },
})

const form = reactive({ name: '', phone: '', email: '', course: '', note: '' })
const submitting = ref(false)
const showSuccessModal = ref(false)

function closeSuccessModal() {
  showSuccessModal.value = false
}

async function handleSubmit() {
  submitting.value = true
  // Simulate API call
  await new Promise((r) => setTimeout(r, 1000))
  submitting.value = false
  showSuccessModal.value = true
  // Reset form
  form.name = ''
  form.phone = ''
  form.email = ''
  form.course = ''
  form.note = ''
}
</script>

<style scoped>
.consultation-form {
  background: white;
  border-radius: var(--radius-md);
  padding: 36px;
  border: 1.5px solid var(--color-border);
  box-shadow: var(--shadow-card);
}

.form-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-ink);
  margin-bottom: 6px;
}

.form-subtitle {
  font-size: 0.875rem;
  color: var(--color-muted);
  margin-bottom: 24px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-ink);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 12px 14px;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-family: var(--font-sans);
  color: var(--color-ink);
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(46, 134, 222, 0.1);
}

.submit-btn {
  justify-content: center;
  margin-top: 8px;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
}

.success-msg {
  text-align: center;
  color: #16a34a;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 12px;
  background: #f0fdf4;
  border-radius: var(--radius-sm);
}

.success-overlay {
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

.success-modal {
  background: white;
  border-radius: 24px;
  padding: 48px 40px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.2);
  animation: modal-in 0.3s ease;
}

@keyframes modal-in {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

.success-icon {
  font-size: 3.5rem;
  margin-bottom: 16px;
}

.success-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-ink);
  margin-bottom: 12px;
}

.success-desc {
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.6;
  margin-bottom: 24px;
}
</style>

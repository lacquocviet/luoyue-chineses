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

      <p v-if="submitted" class="success-msg">
        ✅ Đăng ký thành công! Chúng tôi sẽ liên hệ trong 24h.
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, default: 'Đăng ký tư vấn miễn phí' },
  subtitle: { type: String, default: 'Điền thông tin bên dưới — chúng tôi sẽ liên hệ hỗ trợ bạn trong 24h.' },
})

const form = reactive({ name: '', phone: '', email: '', course: '', note: '' })
const submitting = ref(false)
const submitted = ref(false)

async function handleSubmit() {
  submitting.value = true
  // Simulate API call
  await new Promise((r) => setTimeout(r, 1000))
  submitting.value = false
  submitted.value = true
  // Reset after 5 seconds
  setTimeout(() => (submitted.value = false), 5000)
  // TODO: send to Lark Suite / Google Sheets via /api/leads
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
</style>

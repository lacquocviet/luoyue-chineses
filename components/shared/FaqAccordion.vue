<template>
  <div class="faq-accordion">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="faq-item"
      :class="{ open: openIndex === i }"
    >
      <button class="faq-question" @click="toggle(i)">
        <span>{{ item.q }}</span>
        <ChevronDown :size="20" class="faq-icon" />
      </button>
      <div class="faq-answer-wrap">
        <div class="faq-answer">{{ item.a }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronDown } from '@lucide/vue'

defineProps<{
  items: Array<{ q: string; a: string }>
}>()

const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
.faq-accordion {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.faq-item.open {
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(46, 134, 222, 0.1);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  background: white;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-ink);
  font-family: var(--font-sans);
  transition: background 0.2s;
  gap: 16px;
}

.faq-item.open .faq-question {
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
}

.faq-icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: var(--color-muted);
}

.faq-item.open .faq-icon {
  transform: rotate(180deg);
  color: var(--color-primary);
}

.faq-answer-wrap {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.faq-item.open .faq-answer-wrap {
  max-height: 400px;
}

.faq-answer {
  padding: 16px 20px 20px;
  font-size: 0.9rem;
  color: var(--color-muted);
  line-height: 1.7;
  border-top: 1px solid var(--color-border);
}
</style>

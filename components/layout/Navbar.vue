<template>
  <header class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container navbar-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar-logo" @click="menuOpen = false">
        <img src="/logo.png" alt="Luoyue Chinese" class="logo-img" />
        <div class="logo-text">
          <span class="logo-name">Luoyue Chinese</span>
          <span class="logo-chinese chinese">雒越中文</span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="navbar-nav">
        <NuxtLink to="/" class="nav-link">Trang chủ</NuxtLink>
        <NuxtLink to="/gioi-thieu" class="nav-link">Giới thiệu</NuxtLink>
        <div class="nav-dropdown">
          <NuxtLink to="/khoa-hoc" class="nav-link">
            Khóa học
            <ChevronDown :size="16" />
          </NuxtLink>
          <div class="dropdown-menu">
            <NuxtLink to="/khoa-hoc/hsk-1" class="dropdown-item" @click="handleCourseClick">
              <span class="chinese">HSK1</span> — Sơ cấp 1
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/hsk-2" class="dropdown-item" @click="handleCourseClick">
              <span class="chinese">HSK2</span> — Sơ cấp 2
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/hsk-3" class="dropdown-item" @click="handleCourseClick">
              <span class="chinese">HSK3</span> — Trung cấp 1
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/hsk-4" class="dropdown-item" @click="handleCourseClick">
              <span class="chinese">HSK4</span> — Trung cấp 2
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/hsk-5" class="dropdown-item" @click="handleCourseClick">
              <span class="chinese">HSK5</span> — Cao cấp 1
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/hsk-6" class="dropdown-item" @click="handleCourseClick">
              <span class="chinese">HSK6</span> — Cao cấp 2
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/giao-tiep" class="dropdown-item dropdown-accent" @click="handleCourseClick">
              💬 Giao tiếp thực tế
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/thieu-nhi" class="dropdown-item dropdown-accent" @click="handleCourseClick">
              🧒 Thiếu nhi
            </NuxtLink>
            <NuxtLink to="/khoa-hoc/business-chinese" class="dropdown-item dropdown-accent" @click="handleCourseClick">
              💼 Business Chinese
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/lo-trinh-hoc" class="nav-link">Lộ trình</NuxtLink>
        <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
        <NuxtLink to="/lien-he" class="nav-link">Liên hệ</NuxtLink>
      </nav>

      <!-- CTA + Mobile toggle -->
      <div class="navbar-actions">
        <NuxtLink to="/lien-he" class="btn btn-primary nav-cta">
          Đăng ký tư vấn
        </NuxtLink>
        <button class="hamburger" @click="toggleMenu" :aria-label="menuOpen ? 'Đóng menu' : 'Mở menu'">
          <X v-if="menuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" v-show="menuOpen">
      <NuxtLink to="/" class="mobile-link" @click="menuOpen = false">Trang chủ</NuxtLink>
      <NuxtLink to="/gioi-thieu" class="mobile-link" @click="menuOpen = false">Giới thiệu</NuxtLink>
      <div class="mobile-dropdown">
        <button class="mobile-link mobile-dropdown-trigger" @click="mobileCourseOpen = !mobileCourseOpen">
          Khóa học
          <ChevronDown :size="16" :class="{ rotated: mobileCourseOpen }" />
        </button>
        <div class="mobile-dropdown-menu" v-show="mobileCourseOpen">
          <NuxtLink to="/khoa-hoc/hsk-1" class="mobile-dropdown-item" @click="menuOpen = false">HSK1 — Sơ cấp 1</NuxtLink>
          <NuxtLink to="/khoa-hoc/hsk-2" class="mobile-dropdown-item" @click="menuOpen = false">HSK2 — Sơ cấp 2</NuxtLink>
          <NuxtLink to="/khoa-hoc/hsk-3" class="mobile-dropdown-item" @click="menuOpen = false">HSK3 — Trung cấp 1</NuxtLink>
          <NuxtLink to="/khoa-hoc/hsk-4" class="mobile-dropdown-item" @click="menuOpen = false">HSK4 — Trung cấp 2</NuxtLink>
          <NuxtLink to="/khoa-hoc/hsk-5" class="mobile-dropdown-item" @click="menuOpen = false">HSK5 — Cao cấp 1</NuxtLink>
          <NuxtLink to="/khoa-hoc/hsk-6" class="mobile-dropdown-item" @click="menuOpen = false">HSK6 — Cao cấp 2</NuxtLink>
          <NuxtLink to="/khoa-hoc/giao-tiep" class="mobile-dropdown-item" @click="menuOpen = false">💬 Giao tiếp thực tế</NuxtLink>
          <NuxtLink to="/khoa-hoc/thieu-nhi" class="mobile-dropdown-item" @click="menuOpen = false">🧒 Thiếu nhi</NuxtLink>
          <NuxtLink to="/khoa-hoc/business-chinese" class="mobile-dropdown-item" @click="menuOpen = false">💼 Business Chinese</NuxtLink>
        </div>
      </div>
      <NuxtLink to="/lo-trinh-hoc" class="mobile-link" @click="menuOpen = false">Lộ trình học</NuxtLink>
      <NuxtLink to="/hoc-vien" class="mobile-link" @click="menuOpen = false">Học viên</NuxtLink>
      <NuxtLink to="/blog" class="mobile-link" @click="menuOpen = false">Blog</NuxtLink>
      <NuxtLink to="/tai-lieu" class="mobile-link" @click="menuOpen = false">Tài liệu miễn phí</NuxtLink>
      <NuxtLink to="/hoi-dap" class="mobile-link" @click="menuOpen = false">Hỏi đáp</NuxtLink>
      <NuxtLink to="/lien-he" class="mobile-link" @click="menuOpen = false">Liên hệ</NuxtLink>
      <NuxtLink to="/lien-he" class="btn btn-primary mobile-cta" @click="menuOpen = false">
        Đăng ký tư vấn miễn phí
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { Menu, X, ChevronDown } from '@lucide/vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const mobileCourseOpen = ref(false)

function handleCourseClick() {
  menuOpen.value = false
  mobileCourseOpen.value = false
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (!menuOpen.value) mobileCourseOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-nav);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  gap: 24px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.logo-img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
}

.logo-chinese {
  font-size: 0.7rem;
  color: var(--color-muted);
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-ink);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.nav-dropdown {
  position: relative;
}

/* Hover dropdown — pure CSS, no JS timer, zero flicker */
.nav-dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

/* Invisible bridge between trigger and menu so mouse never hits a gap */
.nav-dropdown::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -8px;
  height: 8px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(-8px);
  min-width: 220px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--color-border);
  padding: 8px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
  transition-delay: 0.12s; /* small delay on close prevents flicker */
}

.nav-dropdown:hover .dropdown-menu {
  transition-delay: 0s; /* no delay on open */
}

.dropdown-item {
  display: block;
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 0.875rem;
  color: var(--color-ink);
  transition: all 0.15s ease;
}

.dropdown-item:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.dropdown-accent {
  color: #e07c2e;
  font-weight: 600;
}

.dropdown-accent:hover {
  background: #fef3e7;
  color: #c56a1f;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.nav-cta {
  padding: 10px 20px;
  font-size: 0.875rem;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-ink);
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.hamburger:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  border-top: 1px solid var(--color-border);
  background: white;
}

.mobile-dropdown-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  font-family: inherit;
  cursor: pointer;
}

.mobile-dropdown-trigger .rotated {
  transform: rotate(180deg);
  transition: transform 0.2s ease;
}

.mobile-dropdown-trigger svg {
  transition: transform 0.2s ease;
}

.mobile-dropdown-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px 0 4px 16px;
  border-left: 2px solid var(--color-border);
  margin-left: 4px;
}

.mobile-dropdown-item {
  padding: 10px 16px;
  border-radius: 10px;
  font-size: 0.875rem;
  color: var(--color-muted);
  transition: all 0.2s ease;
}

.mobile-dropdown-item:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.mobile-link {
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 500;
  color: var(--color-ink);
  transition: all 0.2s ease;
}

.mobile-link:hover,
.mobile-link.router-link-active {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

.mobile-cta {
  margin-top: 12px;
  justify-content: center;
  text-align: center;
}

@media (max-width: 1024px) {
  .navbar-nav, .nav-cta {
    display: none;
  }
  .hamburger {
    display: flex;
  }
  .mobile-menu {
    display: flex;
  }
}

@media (max-width: 640px) {
  .logo-text { display: none; }
}
</style>

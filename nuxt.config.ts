// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-05',
  devtools: { enabled: false },

  nitro: {
    preset: 'cloudflare-pages',
    compatibilityDate: '2025-07-05',
    cloudflare: {
      compatibilityFlags: ['nodejs_compat'],
    },
  },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    families: [
      { name: 'Roboto', weights: [400, 500, 700, 900] },
      { name: 'Noto Sans SC', weights: [400, 700] },
    ],
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Luoyue Chinese | Trung tâm tiếng Trung 雒越中文',
      meta: [
        { name: 'description', content: 'Luoyue Chinese - Trung tâm đào tạo tiếng Trung hàng đầu. Luyện HSK, giao tiếp, tiếng Trung thiếu nhi, doanh nghiệp. Cam kết đầu ra, giảng viên giàu kinh nghiệm.' },
        { name: 'keywords', content: 'học tiếng Trung, luyện HSK, tiếng Trung giao tiếp, Luoyue Chinese, trung tâm tiếng Trung' },
        { property: 'og:title', content: 'Luoyue Chinese | 雒越中文' },
        { property: 'og:description', content: 'Chinh phục tiếng Trung cùng đội ngũ giảng viên giàu kinh nghiệm' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
      ],
    },
    // Disable page transitions to avoid route-change timing races that can
    // leave page content hidden until a full reload.
    pageTransition: false,
  },

  css: ['~/assets/css/main.css'],

  typescript: {
    strict: false,
    typeCheck: false,
  },
})
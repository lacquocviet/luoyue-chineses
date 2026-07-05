
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  BlogPreview: typeof import("../../components/home/BlogPreview.vue")['default']
  CourseCard: typeof import("../../components/home/CourseCard.vue")['default']
  CourseGrid: typeof import("../../components/home/CourseGrid.vue")['default']
  CtaBanner: typeof import("../../components/home/CtaBanner.vue")['default']
  HeroSection: typeof import("../../components/home/HeroSection.vue")['default']
  IntroSection: typeof import("../../components/home/IntroSection.vue")['default']
  RoadmapTimeline: typeof import("../../components/home/RoadmapTimeline.vue")['default']
  StatsCounter: typeof import("../../components/home/StatsCounter.vue")['default']
  TeacherCard: typeof import("../../components/home/TeacherCard.vue")['default']
  TestimonialCarousel: typeof import("../../components/home/TestimonialCarousel.vue")['default']
  WhyChooseUs: typeof import("../../components/home/WhyChooseUs.vue")['default']
  CtaFloatingButton: typeof import("../../components/layout/CtaFloatingButton.vue")['default']
  Footer: typeof import("../../components/layout/Footer.vue")['default']
  Navbar: typeof import("../../components/layout/Navbar.vue")['default']
  ConsultationForm: typeof import("../../components/shared/ConsultationForm.vue")['default']
  FaqAccordion: typeof import("../../components/shared/FaqAccordion.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyBlogPreview: LazyComponent<typeof import("../../components/home/BlogPreview.vue")['default']>
  LazyCourseCard: LazyComponent<typeof import("../../components/home/CourseCard.vue")['default']>
  LazyCourseGrid: LazyComponent<typeof import("../../components/home/CourseGrid.vue")['default']>
  LazyCtaBanner: LazyComponent<typeof import("../../components/home/CtaBanner.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/home/HeroSection.vue")['default']>
  LazyIntroSection: LazyComponent<typeof import("../../components/home/IntroSection.vue")['default']>
  LazyRoadmapTimeline: LazyComponent<typeof import("../../components/home/RoadmapTimeline.vue")['default']>
  LazyStatsCounter: LazyComponent<typeof import("../../components/home/StatsCounter.vue")['default']>
  LazyTeacherCard: LazyComponent<typeof import("../../components/home/TeacherCard.vue")['default']>
  LazyTestimonialCarousel: LazyComponent<typeof import("../../components/home/TestimonialCarousel.vue")['default']>
  LazyWhyChooseUs: LazyComponent<typeof import("../../components/home/WhyChooseUs.vue")['default']>
  LazyCtaFloatingButton: LazyComponent<typeof import("../../components/layout/CtaFloatingButton.vue")['default']>
  LazyFooter: LazyComponent<typeof import("../../components/layout/Footer.vue")['default']>
  LazyNavbar: LazyComponent<typeof import("../../components/layout/Navbar.vue")['default']>
  LazyConsultationForm: LazyComponent<typeof import("../../components/shared/ConsultationForm.vue")['default']>
  LazyFaqAccordion: LazyComponent<typeof import("../../components/shared/FaqAccordion.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}

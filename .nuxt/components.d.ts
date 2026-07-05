
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


export const BlogPreview: typeof import("../components/home/BlogPreview.vue")['default']
export const CourseCard: typeof import("../components/home/CourseCard.vue")['default']
export const CourseGrid: typeof import("../components/home/CourseGrid.vue")['default']
export const CtaBanner: typeof import("../components/home/CtaBanner.vue")['default']
export const HeroSection: typeof import("../components/home/HeroSection.vue")['default']
export const IntroSection: typeof import("../components/home/IntroSection.vue")['default']
export const RoadmapTimeline: typeof import("../components/home/RoadmapTimeline.vue")['default']
export const StatsCounter: typeof import("../components/home/StatsCounter.vue")['default']
export const TeacherCard: typeof import("../components/home/TeacherCard.vue")['default']
export const TestimonialCarousel: typeof import("../components/home/TestimonialCarousel.vue")['default']
export const WhyChooseUs: typeof import("../components/home/WhyChooseUs.vue")['default']
export const CtaFloatingButton: typeof import("../components/layout/CtaFloatingButton.vue")['default']
export const Footer: typeof import("../components/layout/Footer.vue")['default']
export const Navbar: typeof import("../components/layout/Navbar.vue")['default']
export const ConsultationForm: typeof import("../components/shared/ConsultationForm.vue")['default']
export const FaqAccordion: typeof import("../components/shared/FaqAccordion.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyBlogPreview: LazyComponent<typeof import("../components/home/BlogPreview.vue")['default']>
export const LazyCourseCard: LazyComponent<typeof import("../components/home/CourseCard.vue")['default']>
export const LazyCourseGrid: LazyComponent<typeof import("../components/home/CourseGrid.vue")['default']>
export const LazyCtaBanner: LazyComponent<typeof import("../components/home/CtaBanner.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/home/HeroSection.vue")['default']>
export const LazyIntroSection: LazyComponent<typeof import("../components/home/IntroSection.vue")['default']>
export const LazyRoadmapTimeline: LazyComponent<typeof import("../components/home/RoadmapTimeline.vue")['default']>
export const LazyStatsCounter: LazyComponent<typeof import("../components/home/StatsCounter.vue")['default']>
export const LazyTeacherCard: LazyComponent<typeof import("../components/home/TeacherCard.vue")['default']>
export const LazyTestimonialCarousel: LazyComponent<typeof import("../components/home/TestimonialCarousel.vue")['default']>
export const LazyWhyChooseUs: LazyComponent<typeof import("../components/home/WhyChooseUs.vue")['default']>
export const LazyCtaFloatingButton: LazyComponent<typeof import("../components/layout/CtaFloatingButton.vue")['default']>
export const LazyFooter: LazyComponent<typeof import("../components/layout/Footer.vue")['default']>
export const LazyNavbar: LazyComponent<typeof import("../components/layout/Navbar.vue")['default']>
export const LazyConsultationForm: LazyComponent<typeof import("../components/shared/ConsultationForm.vue")['default']>
export const LazyFaqAccordion: LazyComponent<typeof import("../components/shared/FaqAccordion.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]

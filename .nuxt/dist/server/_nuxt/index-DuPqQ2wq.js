import { a as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { BookOpen, ChevronDown } from "@lucide/vue";
import { _ as __nuxt_component_1 } from "./StatsCounter-DNh_FCVV.js";
import { _ as _imports_0$1 } from "./_virtual_public-i9ZR27sX.js";
import { _ as __nuxt_component_1$1 } from "./CourseGrid-CLopBHKM.js";
import { _ as __nuxt_component_2$1 } from "./CtaBanner-CBRszzyp.js";
import { u as useHead } from "./v3-B21PnTTm.js";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ofetch/dist/node.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/hookable/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/unctx/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/defu/dist/defu.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ufo/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/@unhead/vue/dist/index.mjs";
const _imports_0 = publicAssetsURL("/sources/banner.jpeg");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-529a9158><div class="hero-bg" data-v-529a9158><div class="hero-overlay" data-v-529a9158></div><div class="hero-shape hero-shape-1" data-v-529a9158></div><div class="hero-shape hero-shape-2" data-v-529a9158></div><div class="hero-shape hero-shape-3" data-v-529a9158></div></div><div class="container hero-grid" data-v-529a9158><div class="hero-content" data-v-529a9158><div class="hero-badges reveal" data-v-529a9158><span class="badge" data-v-529a9158><span data-v-529a9158>✓</span> Online &amp; Offline </span><span class="badge" data-v-529a9158><span data-v-529a9158>✓</span> HSK 1–6 </span><span class="badge" data-v-529a9158><span data-v-529a9158>✓</span> Business Chinese </span></div><h1 class="hero-title reveal" data-v-529a9158> LUOYUE CHINESE<br data-v-529a9158><span class="hero-title-main" data-v-529a9158>Học tiếng Trung thông minh,</span><br data-v-529a9158><span class="hero-title-accent" data-v-529a9158>chinh phục HSK dễ dàng.</span></h1><p class="hero-subtitle reveal" data-v-529a9158> Lộ trình cá nhân hóa • Giáo viên tận tâm • Cam kết đồng hành </p><div class="hero-ctas reveal" data-v-529a9158>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "btn btn-primary hero-btn-main"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(BookOpen), { size: 20 }, null, _parent2, _scopeId));
            _push2(` Đăng ký học `);
          } else {
            return [
              createVNode(unref(BookOpen), { size: 20 }),
              createTextVNode(" Đăng ký học ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hero-banner reveal" data-v-529a9158><div class="banner-wrapper" data-v-529a9158><img${ssrRenderAttr("src", _imports_0)} alt="Luoyue Chinese Banner" class="banner-img" onerror="this.src=&#39;/logo.png&#39;; this.style.objectFit=&#39;contain&#39;; this.style.padding=&#39;20px&#39;" data-v-529a9158></div></div></div><a href="#stats" class="hero-scroll" data-v-529a9158>`);
      _push(ssrRenderComponent(unref(ChevronDown), { size: 24 }, null, _parent));
      _push(`</a></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/HeroSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-529a9158"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "IntroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-section section" }, _attrs))} data-v-968fc4c4><div class="container intro-grid" data-v-968fc4c4><div class="intro-content reveal" data-v-968fc4c4><h2 class="section-title text-left" data-v-968fc4c4>Giới thiệu <span class="text-primary" data-v-968fc4c4>Luoyue Chinese</span></h2><p class="about-p" data-v-968fc4c4> Luoyue Chinese được thành lập với mong muốn giúp người Việt học tiếng Trung một cách bài bản, dễ hiểu và ứng dụng thực tế. Chúng tôi tin rằng học ngôn ngữ không chỉ để thi mà còn để giao tiếp và mở rộng cơ hội nghề nghiệp. </p><div class="intro-features" data-v-968fc4c4><div class="intro-feat-item" data-v-968fc4c4><span class="feat-icon" data-v-968fc4c4>🎯</span><div data-v-968fc4c4><h4 data-v-968fc4c4>Học thông minh, nhớ lâu hơn</h4><p data-v-968fc4c4>Phương pháp độc quyền rút ngắn 30% thời gian học chữ Hán.</p></div></div><div class="intro-feat-item" data-v-968fc4c4><span class="feat-icon" data-v-968fc4c4>🗣️</span><div data-v-968fc4c4><h4 data-v-968fc4c4>Phản xạ giao tiếp tự nhiên</h4><p data-v-968fc4c4>Chú trọng tối đa việc luyện nói và chỉnh phát âm chuẩn ngay từ đầu.</p></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/gioi-thieu",
        class: "btn btn-primary intro-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tìm hiểu thêm về chúng tôi`);
          } else {
            return [
              createTextVNode("Tìm hiểu thêm về chúng tôi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="intro-image-wrap reveal" style="${ssrRenderStyle({ "transition-delay": "150ms" })}" data-v-968fc4c4><div class="image-border-decoration" data-v-968fc4c4><img${ssrRenderAttr("src", _imports_0$1)} alt="Lớp học tại Luoyue Chinese" class="intro-img" onerror="this.src=&#39;/logo.png&#39;; this.style.objectFit=&#39;contain&#39;; this.style.padding=&#39;40px&#39;" data-v-968fc4c4></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/IntroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-968fc4c4"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WhyChooseUs",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        emoji: "🎯",
        title: "Lộ trình cá nhân hóa",
        desc: "Lộ trình thiết kế riêng biệt phù hợp với xuất phát điểm, năng lực tiếp thu và mục tiêu của từng học viên."
      },
      {
        emoji: "👩‍🏫",
        title: "Giáo viên nhiều kinh nghiệm",
        desc: "Đội ngũ giảng viên sở hữu chứng chỉ giảng dạy quốc tế, phát âm chuẩn và có nhiều năm kinh nghiệm đứng lớp."
      },
      {
        emoji: "📚",
        title: "Giáo trình cập nhật",
        desc: "Học liệu luôn được tối ưu và cập nhật mới nhất theo chuẩn HSK 9 cấp quốc tế mới."
      },
      {
        emoji: "🌏",
        title: "Học Online & Offline",
        desc: "Mô hình kết hợp linh hoạt trực tuyến và trực tiếp, hỗ trợ ghi lại buổi học để học viên ôn tập mọi lúc."
      },
      {
        emoji: "📈",
        title: "Theo dõi tiến độ học tập",
        desc: "Hệ thống báo cáo học tập định kỳ và thi thử sát sao giúp học viên nhìn rõ sự tiến bộ từng tuần."
      },
      {
        emoji: "🏆",
        title: "Cam kết đồng hành",
        desc: "Đồng hành chặt chẽ 24/7 và cam kết hỗ trợ học lại hoàn toàn miễn phí nếu không đạt kết quả đầu ra."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "why-us",
        class: "section why-us-glass"
      }, _attrs))} data-v-e99590d1><div class="glass-bg-deco glass-deco-1" data-v-e99590d1></div><div class="glass-bg-deco glass-deco-2" data-v-e99590d1></div><div class="container relative-z" data-v-e99590d1><div class="section-header reveal" data-v-e99590d1><div class="badge" data-v-e99590d1>✨ Điểm khác biệt</div><h2 class="section-title" data-v-e99590d1>Vì sao chọn <span class="text-primary" data-v-e99590d1>Luoyue?</span></h2><div class="divider" data-v-e99590d1></div><p class="section-subtitle" data-v-e99590d1> Chúng tôi mang đến trải nghiệm học tiếng Trung toàn diện, hiệu quả và thân thiện nhất. </p></div><div class="why-grid" data-v-e99590d1><!--[-->`);
      ssrRenderList(features, (item, i) => {
        _push(`<div class="why-card reveal" style="${ssrRenderStyle({ transitionDelay: `${i * 80}ms` })}" data-v-e99590d1><div class="why-icon-wrap" data-v-e99590d1><span class="why-icon-emoji" data-v-e99590d1>${ssrInterpolate(item.emoji)}</span></div><h3 class="why-card-title" data-v-e99590d1>${ssrInterpolate(item.title)}</h3><p class="why-card-desc" data-v-e99590d1>${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/WhyChooseUs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e99590d1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Luoyue Chinese | Trung tâm tiếng Trung 雒越中文 — HSK, Giao tiếp, Thiếu nhi",
      meta: [
        {
          name: "description",
          content: "Luoyue Chinese – Trung tâm đào tạo tiếng Trung hàng đầu tại Việt Nam. Luyện HSK 1–6, tiếng Trung giao tiếp, thiếu nhi, Business Chinese. Cam kết đầu ra, lớp nhỏ, giảng viên giàu kinh nghiệm."
        },
        { property: "og:title", content: "Luoyue Chinese | 雒越中文" },
        { property: "og:description", content: "Chinh phục tiếng Trung cùng đội ngũ giảng viên giàu kinh nghiệm. HSK 1–6, giao tiếp, thiếu nhi, business. 1.200+ học viên." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroSection = __nuxt_component_0;
      const _component_StatsCounter = __nuxt_component_1;
      const _component_IntroSection = __nuxt_component_2;
      const _component_WhyChooseUs = __nuxt_component_3;
      const _component_CourseGrid = __nuxt_component_1$1;
      const _component_CtaBanner = __nuxt_component_2$1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_HeroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_StatsCounter, null, null, _parent));
      _push(ssrRenderComponent(_component_IntroSection, null, null, _parent));
      _push(ssrRenderComponent(_component_WhyChooseUs, null, null, _parent));
      _push(ssrRenderComponent(_component_CourseGrid, null, null, _parent));
      _push(ssrRenderComponent(_component_CtaBanner, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DuPqQ2wq.js.map

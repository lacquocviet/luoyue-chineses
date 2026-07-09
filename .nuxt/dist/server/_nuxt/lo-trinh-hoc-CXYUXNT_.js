import { a as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { ArrowRight } from "@lucide/vue";
import { u as useHead } from "./v3-B21PnTTm.js";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/hookable/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/unctx/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/defu/dist/defu.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ufo/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RoadmapTimeline",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        label: "Người mới bắt đầu",
        chinese: "零基础",
        desc: "Làm quen bảng chữ Pinyin, thanh điệu, số đếm và chào hỏi cơ bản",
        duration: "Xuất phát",
        color: "#6B7280"
      },
      {
        label: "HSK 1 — Sơ cấp 1",
        chinese: "HSK一级",
        desc: "150 từ vựng, câu đơn giản, giao tiếp hàng ngày",
        duration: "2 tháng",
        color: "#4ECDC4"
      },
      {
        label: "HSK 2 — Sơ cấp 2",
        chinese: "HSK二级",
        desc: "300 từ, câu phức, mô tả người và vật xung quanh",
        duration: "2 tháng",
        color: "#45B7D1"
      },
      {
        label: "HSK 3 — Trung cấp 1",
        chinese: "HSK三级",
        desc: "600 từ, giao tiếp công việc và học tập linh hoạt",
        duration: "3 tháng",
        color: "#2E86DE"
      },
      {
        label: "HSK 4 — Trung cấp 2",
        chinese: "HSK四级",
        desc: "1.200 từ, B2 châu Âu, làm việc với đối tác Trung Quốc",
        duration: "3 tháng",
        color: "#1B4F91"
      },
      {
        label: "HSK 5 — Cao cấp 1",
        chinese: "HSK五级",
        desc: "2.500 từ, đọc báo, xem phim không cần phụ đề",
        duration: "4 tháng",
        color: "#6C3483"
      },
      {
        label: "HSK 6 — Thành thạo",
        chinese: "HSK六级",
        desc: "5.000+ từ, tương đương người bản ngữ, du học, định cư",
        duration: "5 tháng",
        color: "#C0392B"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section bg-primary-light" }, _attrs))} data-v-26f5472e><div class="container" data-v-26f5472e><div class="section-header reveal" data-v-26f5472e><div class="badge" data-v-26f5472e>🗺️ Lộ trình</div><h2 class="section-title" data-v-26f5472e>Lộ trình học <span class="text-primary" data-v-26f5472e>tiếng Trung</span></h2><div class="divider" data-v-26f5472e></div><p class="section-subtitle" data-v-26f5472e> Từ người mới bắt đầu đến thành thạo — hành trình rõ ràng, có lộ trình cụ thể. </p></div><div class="timeline reveal" data-v-26f5472e><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="timeline-item" data-v-26f5472e>`);
        if (i < steps.length - 1) {
          _push(`<div class="timeline-connector" data-v-26f5472e></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="timeline-step" style="${ssrRenderStyle({ background: step.color })}" data-v-26f5472e><span class="step-num" data-v-26f5472e>${ssrInterpolate(i + 1)}</span></div><div class="timeline-card" data-v-26f5472e><div class="step-header" data-v-26f5472e><span class="step-level chinese" data-v-26f5472e>${ssrInterpolate(step.chinese)}</span><span class="step-badge" style="${ssrRenderStyle({ background: step.color + "20", color: step.color })}" data-v-26f5472e>${ssrInterpolate(step.duration)}</span></div><div class="step-label" data-v-26f5472e>${ssrInterpolate(step.label)}</div><div class="step-desc" data-v-26f5472e>${ssrInterpolate(step.desc)}</div></div></div>`);
      });
      _push(`<!--]--></div><div class="timeline-cta reveal" data-v-26f5472e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lo-trinh-hoc",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem lộ trình chi tiết `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 18 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Xem lộ trình chi tiết "),
              createVNode(unref(ArrowRight), { size: 18 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tư vấn lộ trình miễn phí `);
          } else {
            return [
              createTextVNode(" Tư vấn lộ trình miễn phí ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/RoadmapTimeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-26f5472e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "lo-trinh-hoc",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Lộ trình học tiếng Trung | Luoyue Chinese", meta: [{ name: "description", content: "Lộ trình học tiếng Trung từ sơ cấp đến cao cấp: HSK 1, 2, 3, 4, 5, 6. Thời gian học tập cụ thể, rõ ràng." }] });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RoadmapTimeline = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-0b31108b><section class="page-hero" data-v-0b31108b><div class="container" data-v-0b31108b><h1 class="page-hero-title" data-v-0b31108b>Lộ trình học <span class="text-primary" data-v-0b31108b>tiếng Trung</span></h1><p class="page-hero-subtitle" data-v-0b31108b>Từ người mới bắt đầu đến thành thạo — hành trình được thiết kế khoa học</p></div></section>`);
      _push(ssrRenderComponent(_component_RoadmapTimeline, null, null, _parent));
      _push(`<section class="section" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-0b31108b><div class="container reveal" data-v-0b31108b><h2 class="section-title" style="${ssrRenderStyle({ "margin-bottom": "12px" })}" data-v-0b31108b>Bắt đầu ngay hôm nay?</h2><p class="section-subtitle" style="${ssrRenderStyle({ "text-align": "center", "margin": "0 auto 32px" })}" data-v-0b31108b>Nhận tư vấn lộ trình phù hợp miễn phí từ chuyên gia Luoyue Chinese</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tư vấn lộ trình miễn phí`);
          } else {
            return [
              createTextVNode("Tư vấn lộ trình miễn phí")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lo-trinh-hoc.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loTrinhHoc = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0b31108b"]]);
export {
  loTrinhHoc as default
};
//# sourceMappingURL=lo-trinh-hoc-CXYUXNT_.js.map

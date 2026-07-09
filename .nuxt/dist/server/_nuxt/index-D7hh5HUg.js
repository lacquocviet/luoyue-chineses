import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./CourseGrid-CLopBHKM.js";
import { _ as __nuxt_component_1$1 } from "./FaqAccordion-BbaBIlX9.js";
import { defineComponent, ref, withCtx, createTextVNode, unref, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { u as useHead } from "./v3-B21PnTTm.js";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/hookable/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/unctx/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/defu/dist/defu.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ufo/dist/index.mjs";
import "@lucide/vue";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Khóa học tiếng Trung | Luoyue Chinese — HSK 1-6, Giao tiếp, Thiếu nhi",
      meta: [
        { name: "description", content: "Các khóa học tiếng Trung đa dạng: HSK 1–6, giao tiếp, thiếu nhi, Business Chinese. Giáo trình chuẩn, cam kết đầu ra, lớp nhỏ." }
      ]
    });
    const tabs = [
      { label: "Tất cả", value: "all" },
      { label: "HSK", value: "hsk" },
      { label: "Giao tiếp", value: "giao-tiep" },
      { label: "Thiếu nhi", value: "thieu-nhi" },
      { label: "Business", value: "business" }
    ];
    const activeTab = ref("all");
    const faqs = [
      {
        q: "Tôi cần học bao lâu để đạt HSK 3?",
        a: "Từ đầu (zero) đến HSK 3 thường mất khoảng 6–8 tháng nếu học đều đặn 2–3 buổi/tuần. Nếu đã có nền tảng sơ cấp, thời gian có thể ngắn hơn."
      },
      {
        q: "Tôi có thể học online không?",
        a: "Có! Luoyue Chinese cung cấp cả hình thức học trực tiếp tại cơ sở và học online qua nền tảng chất lượng cao. Chất lượng giảng dạy tương đương nhau."
      },
      {
        q: "Lớp học có bao nhiêu học viên?",
        a: "Mỗi lớp tối đa 10–15 học viên để đảm bảo mỗi học viên đều được chú ý và có cơ hội luyện tập đầy đủ."
      },
      {
        q: "Nếu học xong mà không đạt HSK thì sao?",
        a: "Luoyue Chinese cam kết: học viên hoàn thành đủ giáo trình mà không đạt HSK theo mục tiêu sẽ được học lại miễn phí tối đa 1 kỳ học."
      },
      {
        q: "Tôi có được học thử miễn phí không?",
        a: "Có! Bạn có thể đăng ký học thử 1 buổi miễn phí để trải nghiệm chất lượng giảng dạy và phong cách của giảng viên trước khi đăng ký chính thức."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_CourseGrid = __nuxt_component_1;
      const _component_FaqAccordion = __nuxt_component_1$1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-d24f890f><section class="page-hero" data-v-d24f890f><div class="container" data-v-d24f890f><nav class="breadcrumb" data-v-d24f890f>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Trang chủ`);
          } else {
            return [
              createTextVNode("Trang chủ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span data-v-d24f890f>/</span><span data-v-d24f890f>Khóa học</span></nav><h1 class="page-hero-title" data-v-d24f890f>Tất cả <span class="text-primary" data-v-d24f890f>khóa học</span></h1><p class="page-hero-subtitle" data-v-d24f890f>HSK 1–6, giao tiếp, thiếu nhi, Business Chinese — chọn khóa phù hợp với bạn</p></div></section><section class="section-sm" style="${ssrRenderStyle({ "border-bottom": "1px solid var(--color-border)" })}" data-v-d24f890f><div class="container" data-v-d24f890f><div class="filter-tabs" data-v-d24f890f><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeTab) === tab.value }, "filter-tab"])}" data-v-d24f890f>${ssrInterpolate(tab.label)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="section" data-v-d24f890f><div class="container" data-v-d24f890f>`);
      _push(ssrRenderComponent(_component_CourseGrid, null, null, _parent));
      _push(`</div></section><section class="section bg-surface" data-v-d24f890f><div class="container" style="${ssrRenderStyle({ "max-width": "800px", "margin": "0 auto" })}" data-v-d24f890f><div class="section-header reveal" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "40px" })}" data-v-d24f890f><h2 class="section-title" data-v-d24f890f>Câu hỏi thường gặp về <span class="text-primary" data-v-d24f890f>khóa học</span></h2><div class="divider" style="${ssrRenderStyle({ "margin": "16px auto 0" })}" data-v-d24f890f></div></div>`);
      _push(ssrRenderComponent(_component_FaqAccordion, { items: faqs }, null, _parent));
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/khoa-hoc/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d24f890f"]]);
export {
  index as default
};
//# sourceMappingURL=index-D7hh5HUg.js.map

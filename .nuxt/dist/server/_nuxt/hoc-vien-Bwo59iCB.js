import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./StatsCounter-DNh_FCVV.js";
import { _ as __nuxt_component_2 } from "./CtaBanner-CBRszzyp.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
  __name: "hoc-vien",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Học viên nói gì | Luoyue Chinese",
      meta: [{ name: "description", content: "Cảm nhận và kết quả thi HSK thực tế của học viên Luoyue Chinese. 98% đỗ HSK, nhiều học viên đạt điểm cao." }]
    });
    const stories = [
      { initials: "NM", color: "linear-gradient(135deg, #2E86DE, #1B4F91)", achievement: "🏆 HSK 3 — 285/300", text: "Sau 3 tháng học HSK 3 tại Luoyue Chinese, mình đã đỗ với điểm 285/300. Thầy cô dạy rất tận tâm, phương pháp dễ hiểu. Mình đặc biệt thích cách giải thích ngữ pháp!", name: "Nguyễn Thị Mai", role: "Sinh viên ĐH Ngoại thương" },
      { initials: "TH", color: "linear-gradient(135deg, #F5C542, #E67E22)", achievement: "💼 Thăng chức Giám đốc XNK", text: "Mình học Business Chinese để phục vụ công việc xuất nhập khẩu. Chỉ sau 2 tháng, mình đã có thể email và giao tiếp với đối tác Trung Quốc độc lập!", name: "Trần Văn Hùng", role: "Giám đốc xuất nhập khẩu" },
      { initials: "TT", color: "linear-gradient(135deg, #FF6B6B, #E74C3C)", achievement: "🌟 Giải Nhì tiếng Trung thiếu nhi", text: "Con tôi 8 tuổi học tại đây được 6 tháng. Cô giáo dạy rất vui, bé rất thích học. Tiến bộ thấy rõ từng tuần!", name: "Chị Lê Thanh Thảo", role: "Phụ huynh học sinh lớp 3" },
      { initials: "QĐ", color: "linear-gradient(135deg, #6C3483, #4A235A)", achievement: "🎓 HSK 5 — Học bổng du học TQ", text: "Đã thử nhiều trung tâm nhưng chỉ ở Luoyue Chinese mình mới cảm thấy tiến bộ thực sự. Đỗ HSK 5 sau 1 năm học!", name: "Phạm Quang Đức", role: "Du học sinh ĐH Phúc Đán, Thượng Hải" },
      { initials: "HN", color: "linear-gradient(135deg, #4ECDC4, #2a9d8f)", achievement: "📊 HSK 4 — 260/300", text: "Lớp nhỏ giúp tôi được hỏi và luyện tập nhiều hơn. Giáo viên luôn kiên nhẫn giải thích. Rất hài lòng!", name: "Hoàng Ngọc Lan", role: "Nhân viên thương mại quốc tế" },
      { initials: "VK", color: "linear-gradient(135deg, #45B7D1, #2980b9)", achievement: "🏅 HSK 2 — Điểm xuất sắc", text: "Từ người không biết gì về tiếng Trung, sau 4 tháng tôi đã có thể giao tiếp cơ bản. Cô giáo tuyệt vời!", name: "Vũ Thị Kim Ngân", role: "Giáo viên tiểu học" }
    ];
    const hskResults = [
      { level: "HSK 1", name: "Nguyễn Bảo Châu", score: 300, total: 300, date: "06/2025", color: "#4ECDC4" },
      { level: "HSK 2", name: "Trần Minh Khang", score: 298, total: 300, date: "06/2025", color: "#45B7D1" },
      { level: "HSK 3", name: "Nguyễn Thị Mai", score: 285, total: 300, date: "05/2025", color: "#2E86DE" },
      { level: "HSK 4", name: "Hoàng Ngọc Lan", score: 260, total: 300, date: "05/2025", color: "#1B4F91" },
      { level: "HSK 5", name: "Phạm Quang Đức", score: 248, total: 300, date: "04/2025", color: "#6C3483" },
      { level: "HSK 6", name: "Lê Hữu Phước", score: 232, total: 300, date: "03/2025", color: "#922B21" },
      { level: "HSK 3", name: "Võ Thị Ngọc Huyền", score: 278, total: 300, date: "05/2025", color: "#2E86DE" },
      { level: "HSK 4", name: "Đặng Văn Tú", score: 255, total: 300, date: "06/2025", color: "#1B4F91" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_StatsCounter = __nuxt_component_1;
      const _component_CtaBanner = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-98390b4b><section class="page-hero" data-v-98390b4b><div class="container" data-v-98390b4b><nav class="breadcrumb" data-v-98390b4b>`);
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
      _push(`<span data-v-98390b4b>/</span><span data-v-98390b4b>Học viên</span></nav><h1 class="page-hero-title" data-v-98390b4b>Học viên <span class="text-primary" data-v-98390b4b>nói gì?</span></h1><p class="page-hero-subtitle" data-v-98390b4b>Hành trình và cảm nhận thực tế của hơn 1.200 học viên Luoyue Chinese</p></div></section>`);
      _push(ssrRenderComponent(_component_StatsCounter, null, null, _parent));
      _push(`<section class="section" data-v-98390b4b><div class="container" data-v-98390b4b><div class="section-header reveal" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "48px", "display": "flex", "flex-direction": "column", "align-items": "center" })}" data-v-98390b4b><div class="badge" data-v-98390b4b>💬 Câu chuyện thật</div><h2 class="section-title" style="${ssrRenderStyle({ "margin-top": "12px" })}" data-v-98390b4b>Hành trình của <span class="text-primary" data-v-98390b4b>học viên</span></h2><div class="divider" style="${ssrRenderStyle({ "margin": "16px auto 0" })}" data-v-98390b4b></div></div><div class="stories-grid" data-v-98390b4b><!--[-->`);
      ssrRenderList(stories, (story, i) => {
        _push(`<article class="story-card reveal" style="${ssrRenderStyle({ transitionDelay: `${i * 80}ms` })}" data-v-98390b4b><div class="story-header" style="${ssrRenderStyle({ background: story.color })}" data-v-98390b4b><div class="story-avatar" data-v-98390b4b>${ssrInterpolate(story.initials)}</div><div class="story-achievement" data-v-98390b4b>${ssrInterpolate(story.achievement)}</div></div><div class="story-body" data-v-98390b4b><div class="stars" data-v-98390b4b><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(`<span data-v-98390b4b>⭐</span>`);
        });
        _push(`<!--]--></div><p class="story-text" data-v-98390b4b>&quot;${ssrInterpolate(story.text)}&quot;</p><div class="story-author" data-v-98390b4b><div class="author-name" data-v-98390b4b>${ssrInterpolate(story.name)}</div><div class="author-role" data-v-98390b4b>${ssrInterpolate(story.role)}</div></div></div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="section bg-surface" data-v-98390b4b><div class="container" data-v-98390b4b><div class="section-header reveal" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "48px", "display": "flex", "flex-direction": "column", "align-items": "center" })}" data-v-98390b4b><div class="badge" data-v-98390b4b>🏆 Kết quả thi HSK</div><h2 class="section-title" style="${ssrRenderStyle({ "margin-top": "12px" })}" data-v-98390b4b>Điểm thi <span class="text-primary" data-v-98390b4b>HSK nổi bật</span></h2><div class="divider" style="${ssrRenderStyle({ "margin": "16px auto 0" })}" data-v-98390b4b></div></div><div class="results-grid" data-v-98390b4b><!--[-->`);
      ssrRenderList(hskResults, (r, i) => {
        _push(`<div class="result-card reveal" style="${ssrRenderStyle({ transitionDelay: `${i * 60}ms` })}" data-v-98390b4b><div class="result-level" style="${ssrRenderStyle({ color: r.color })}" data-v-98390b4b>${ssrInterpolate(r.level)}</div><div class="result-name" data-v-98390b4b>${ssrInterpolate(r.name)}</div><div class="result-score" data-v-98390b4b>${ssrInterpolate(r.score)}<span data-v-98390b4b>/${ssrInterpolate(r.total)}</span></div><div class="result-date" data-v-98390b4b>${ssrInterpolate(r.date)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_CtaBanner, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hoc-vien.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hocVien = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-98390b4b"]]);
export {
  hocVien as default
};
//# sourceMappingURL=hoc-vien-Bwo59iCB.js.map

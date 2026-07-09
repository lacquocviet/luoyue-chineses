import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, computed, withCtx, createTextVNode, unref, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderTeleport, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "tai-lieu",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Tài liệu miễn phí | Luoyue Chinese",
      meta: [{ name: "description", content: "Tải miễn phí tài liệu tiếng Trung: PDF, Flashcard, đề thi HSK, file nghe. Nhập email nhận link tải ngay." }]
    });
    const docs = [
      { title: "Bộ đề thi HSK 1 (Full 10 đề)", type: "PDF", icon: "📄", color: "#2E86DE", size: "2.4 MB", downloads: "1.234", desc: "10 đề thi HSK 1 mô phỏng đầy đủ 4 kỹ năng, có đáp án chi tiết.", category: "HSK" },
      { title: "Bộ đề thi HSK 2 (Full 8 đề)", type: "PDF", icon: "📄", color: "#45B7D1", size: "3.1 MB", downloads: "987", desc: "8 đề thi HSK 2 chuẩn format mới 2023. Kèm phân tích lỗi sai thường gặp.", category: "HSK" },
      { title: "Bộ đề thi HSK 3 (Full 6 đề)", type: "PDF", icon: "📄", color: "#1B4F91", size: "4.2 MB", downloads: "856", desc: "6 đề thi HSK 3 + audio file nghe MP3, giải thích ngữ pháp chi tiết.", category: "HSK" },
      { title: "Flashcard 500 từ HSK 1–2", type: "Flashcard", icon: "🃏", color: "#4ECDC4", size: "1.8 MB", downloads: "2.100", desc: "500 flashcard từ vựng HSK 1–2 với hình ảnh minh họa và câu ví dụ.", category: "Flashcard" },
      { title: "Flashcard 800 từ HSK 3–4", type: "Flashcard", icon: "🃏", color: "#F5C542", size: "2.6 MB", downloads: "1.456", desc: "800 flashcard HSK 3–4 song ngữ Việt–Trung, có pinyin và âm thanh.", category: "Flashcard" },
      { title: "File nghe HSK 1 (Audio MP3)", type: "Audio", icon: "🎧", color: "#FF6B6B", size: "45 MB", downloads: "1.678", desc: "Toàn bộ audio file nghe đề thi HSK 1 chất lượng cao, giọng chuẩn bản ngữ.", category: "Audio" },
      { title: "Bảng ngữ pháp HSK 1–3 (PDF)", type: "PDF", icon: "📝", color: "#6C3483", size: "1.2 MB", downloads: "3.245", desc: "Tổng hợp toàn bộ cấu trúc ngữ pháp HSK 1–3 theo chủ đề, dễ tra cứu.", category: "Ngữ pháp" },
      { title: "Checklist 30 ngày học HSK", type: "PDF", icon: "✅", color: "#2a9d8f", size: "0.8 MB", downloads: "4.512", desc: "Lộ trình học 30 ngày chi tiết theo ngày, kèm checklist tự đánh giá tiến độ.", category: "Khác" }
    ];
    const tabs = ["Tất cả", "HSK", "Flashcard", "Audio", "Ngữ pháp", "Khác"];
    const activeTab = ref("Tất cả");
    const downloadModal = ref(false);
    const selectedDoc = ref(null);
    const downloadEmail = ref("");
    const downloadSent = ref(false);
    const filteredDocs = computed(() => {
      if (activeTab.value === "Tất cả") return docs;
      return docs.filter((d) => d.category === activeTab.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-be565115><section class="page-hero" data-v-be565115><div class="container" data-v-be565115><nav class="breadcrumb" data-v-be565115>`);
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
      _push(`<span data-v-be565115>/</span><span data-v-be565115>Tài liệu miễn phí</span></nav><h1 class="page-hero-title" data-v-be565115>Tài liệu <span class="text-primary" data-v-be565115>miễn phí</span></h1><p class="page-hero-subtitle" data-v-be565115>PDF, Flashcard, file nghe, bộ đề HSK — nhập email để nhận link tải ngay</p></div></section><section class="section" data-v-be565115><div class="container" data-v-be565115><div class="filter-tabs reveal" style="${ssrRenderStyle({ "margin-bottom": "36px" })}" data-v-be565115><!--[-->`);
      ssrRenderList(tabs, (tab) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeTab) === tab }, "filter-tab"])}" data-v-be565115>${ssrInterpolate(tab)}</button>`);
      });
      _push(`<!--]--></div><div class="docs-grid" data-v-be565115><!--[-->`);
      ssrRenderList(unref(filteredDocs), (doc, i) => {
        _push(`<div class="doc-card reveal" style="${ssrRenderStyle({ transitionDelay: `${i * 60}ms` })}" data-v-be565115><div class="doc-icon-wrap" style="${ssrRenderStyle({ background: doc.color + "20" })}" data-v-be565115><span class="doc-icon" style="${ssrRenderStyle({ color: doc.color })}" data-v-be565115>${ssrInterpolate(doc.icon)}</span></div><div class="doc-info" data-v-be565115><span class="doc-type" data-v-be565115>${ssrInterpolate(doc.type)}</span><h3 class="doc-title" data-v-be565115>${ssrInterpolate(doc.title)}</h3><p class="doc-desc" data-v-be565115>${ssrInterpolate(doc.desc)}</p><div class="doc-meta" data-v-be565115><span data-v-be565115>${ssrInterpolate(doc.size)}</span><span data-v-be565115>·</span><span data-v-be565115>${ssrInterpolate(doc.downloads)} lượt tải</span></div></div><button class="btn btn-primary doc-btn" data-v-be565115> Tải miễn phí </button></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(downloadModal)) {
          _push2(`<div class="modal-overlay" data-v-be565115><div class="modal-card" data-v-be565115><button class="modal-close" data-v-be565115>✕</button><h3 class="modal-title" data-v-be565115>Nhận tài liệu miễn phí</h3><p class="modal-desc" data-v-be565115>Nhập email để nhận link tải <strong data-v-be565115>${ssrInterpolate(unref(selectedDoc)?.title)}</strong></p><form class="modal-form" data-v-be565115><input${ssrRenderAttr("value", unref(downloadEmail))} type="email" placeholder="email@example.com *" required data-v-be565115><button type="submit" class="btn btn-primary" data-v-be565115>Gửi link tải về email</button></form>`);
          if (unref(downloadSent)) {
            _push2(`<p class="success-msg" data-v-be565115>✅ Link tải đã được gửi! Kiểm tra hộp thư nhé.</p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<p class="modal-note" data-v-be565115>📧 Chúng tôi không spam. Link gửi trong 5 phút.</p></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tai-lieu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const taiLieu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-be565115"]]);
export {
  taiLieu as default
};
//# sourceMappingURL=tai-lieu-DOFjjRIr.js.map

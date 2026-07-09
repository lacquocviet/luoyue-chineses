import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, computed, withCtx, createTextVNode, unref, createVNode, toDisplayString, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { Search, ArrowRight } from "@lucide/vue";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Blog tiếng Trung | Luoyue Chinese",
      meta: [{ name: "description", content: "Blog tiếng Trung Luoyue Chinese: HSK, ngữ pháp, từ vựng, kinh nghiệm học, văn hóa Trung Quốc. Cập nhật đều đặn." }]
    });
    const posts = [
      { slug: "hoc-tieng-trung-bao-lau-dat-hsk3", title: "Học tiếng Trung bao lâu thì đạt HSK 3?", excerpt: "Phân tích lộ trình thực tế từ hàng trăm học viên Luoyue Chinese. Từ zero đến HSK 3 mất bao lâu?", category: "HSK", date: "28/06/2025", readTime: 5, emoji: "📊", gradient: "linear-gradient(135deg, #EAF4FF, #d0e8ff)" },
      { slug: "tu-vung-kinh-doanh-tieng-trung", title: "50 từ vựng tiếng Trung thương mại cần biết ngay", excerpt: "Danh sách 50 từ vựng thiết yếu cho dân xuất nhập khẩu, kinh doanh với đối tác Trung Quốc.", category: "Từ vựng", date: "20/06/2025", readTime: 8, emoji: "💼", gradient: "linear-gradient(135deg, #FFF8E1, #ffe0b2)" },
      { slug: "bi-quyet-nho-han-tu", title: "Bí quyết nhớ Hán tự lâu không quên", excerpt: "Phương pháp ghi nhớ Hán tự hiệu quả nhất được đúc kết qua nhiều năm dạy học.", category: "Kinh nghiệm", date: "14/06/2025", readTime: 6, emoji: "🧠", gradient: "linear-gradient(135deg, #E0F7FA, #b2ebf2)" },
      { slug: "du-hoc-trung-quoc-can-biet-gi", title: "Du học Trung Quốc cần biết những gì?", excerpt: "Hướng dẫn toàn diện về du học Trung Quốc: học bổng, thủ tục, cuộc sống, chi phí thực tế.", category: "Du học", date: "05/06/2025", readTime: 12, emoji: "✈️", gradient: "linear-gradient(135deg, #F3E5F5, #e1bee7)" },
      { slug: "ngu-phap-ba-ngu-phap-quan-trong-hsk2", title: "5 ngữ pháp quan trọng nhất trong HSK 2", excerpt: "Nắm vững 5 ngữ pháp này, bạn có thể tự tin làm bài thi HSK 2 phần ngữ pháp.", category: "Ngữ pháp", date: "28/05/2025", readTime: 7, emoji: "📝", gradient: "linear-gradient(135deg, #E8F5E9, #c8e6c9)" },
      { slug: "tet-nguyen-dan-viet-vs-trung-quoc", title: "Tết Nguyên Đán: điểm khác biệt Việt–Trung", excerpt: "Khám phá những điểm tương đồng và khác biệt thú vị trong phong tục đón Tết của người Việt và người Hoa.", category: "Văn hóa", date: "18/05/2025", readTime: 9, emoji: "🏮", gradient: "linear-gradient(135deg, #FFEBEE, #ffcdd2)" }
    ];
    const categories = ["Tất cả", "HSK", "Ngữ pháp", "Từ vựng", "Du học", "Văn hóa", "Kinh nghiệm"];
    const activeCategory = ref("Tất cả");
    const searchQuery = ref("");
    const filteredPosts = computed(() => {
      let result = posts;
      if (activeCategory.value !== "Tất cả") result = result.filter((p) => p.category === activeCategory.value);
      if (searchQuery.value) result = result.filter((p) => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()));
      return result;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-494f25ad><section class="page-hero" data-v-494f25ad><div class="container" data-v-494f25ad><nav class="breadcrumb" data-v-494f25ad>`);
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
      _push(`<span data-v-494f25ad>/</span><span data-v-494f25ad>Blog</span></nav><h1 class="page-hero-title" data-v-494f25ad>Blog <span class="text-primary" data-v-494f25ad>tiếng Trung</span></h1><p class="page-hero-subtitle" data-v-494f25ad>Kiến thức HSK, ngữ pháp, từ vựng, kinh nghiệm học và văn hóa Trung Quốc</p></div></section><section class="section" data-v-494f25ad><div class="container" data-v-494f25ad><div class="blog-toolbar reveal" data-v-494f25ad><div class="search-box" data-v-494f25ad>`);
      _push(ssrRenderComponent(unref(Search), { size: 18 }, null, _parent));
      _push(`<input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Tìm kiếm bài viết..." id="blog-search" data-v-494f25ad></div><div class="category-tabs" data-v-494f25ad><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeCategory) === cat }, "filter-tab"])}" data-v-494f25ad>${ssrInterpolate(cat)}</button>`);
      });
      _push(`<!--]--></div></div>`);
      if (unref(filteredPosts).length > 0) {
        _push(`<div class="blog-grid" data-v-494f25ad><!--[-->`);
        ssrRenderList(unref(filteredPosts), (post, i) => {
          _push(`<article class="blog-card reveal" style="${ssrRenderStyle({ transitionDelay: `${i * 60}ms` })}" data-v-494f25ad>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blog/${post.slug}`,
            class: "blog-image",
            style: { background: post.gradient }
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="blog-emoji" data-v-494f25ad${_scopeId}>${ssrInterpolate(post.emoji)}</span><span class="blog-category-badge" data-v-494f25ad${_scopeId}>${ssrInterpolate(post.category)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "blog-emoji" }, toDisplayString(post.emoji), 1),
                  createVNode("span", { class: "blog-category-badge" }, toDisplayString(post.category), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="blog-content" data-v-494f25ad><div class="blog-meta" data-v-494f25ad><span data-v-494f25ad>${ssrInterpolate(post.date)}</span><span data-v-494f25ad>·</span><span data-v-494f25ad>${ssrInterpolate(post.readTime)} phút</span></div>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blog/${post.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<h2 class="blog-title" data-v-494f25ad${_scopeId}>${ssrInterpolate(post.title)}</h2>`);
              } else {
                return [
                  createVNode("h2", { class: "blog-title" }, toDisplayString(post.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="blog-excerpt" data-v-494f25ad>${ssrInterpolate(post.excerpt)}</p>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/blog/${post.slug}`,
            class: "blog-link"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Đọc tiếp `);
                _push2(ssrRenderComponent(unref(ArrowRight), { size: 15 }, null, _parent2, _scopeId));
              } else {
                return [
                  createTextVNode(" Đọc tiếp "),
                  createVNode(unref(ArrowRight), { size: 15 })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="no-results" data-v-494f25ad><span data-v-494f25ad>🔍</span><p data-v-494f25ad>Không tìm thấy bài viết nào phù hợp. Hãy thử từ khóa khác.</p></div>`);
      }
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-494f25ad"]]);
export {
  index as default
};
//# sourceMappingURL=index-CMmZCIDF.js.map

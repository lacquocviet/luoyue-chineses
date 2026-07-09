import { u as useRoute, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./ConsultationForm-MS54mwMU.js";
import { defineComponent, computed, unref, withCtx, createTextVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const posts = {
      "hoc-tieng-trung-bao-lau-dat-hsk3": {
        title: "Học tiếng Trung bao lâu thì đạt HSK 3?",
        category: "HSK",
        date: "28/06/2025",
        readTime: 5,
        gradient: "linear-gradient(135deg, #EAF4FF 0%, #d0e8ff 100%)",
        tags: ["HSK 3", "Lộ trình", "Kinh nghiệm"],
        content: `
      <h2>Tổng quan về thời gian học HSK 3</h2>
      <p>Đây là câu hỏi phổ biến nhất chúng tôi nhận được. Câu trả lời phụ thuộc vào nền tảng ban đầu và cường độ học tập của bạn.</p>
      <h2>Nếu bạn bắt đầu từ đầu (Zero)</h2>
      <p>Từ người chưa biết gì đến HSK 3, thông thường cần <strong>6–8 tháng</strong> nếu học 2–3 buổi/tuần (mỗi buổi 1,5–2 tiếng).</p>
      <ul>
        <li>HSK 1: ~2 tháng (150 từ)</li>
        <li>HSK 2: ~2 tháng (300 từ)</li>
        <li>HSK 3: ~3 tháng (600 từ)</li>
      </ul>
      <h2>Nếu bạn có nền tảng sơ cấp</h2>
      <p>Nếu đã học qua HSK 1 hoặc có vốn tiếng Trung cơ bản, thời gian đạt HSK 3 có thể rút ngắn xuống còn <strong>3–4 tháng</strong>.</p>
      <h2>Yếu tố ảnh hưởng đến tốc độ học</h2>
      <ul>
        <li><strong>Tần suất học:</strong> Học đều đặn 3–4 buổi/tuần nhanh hơn học 1 buổi/tuần đáng kể</li>
        <li><strong>Chất lượng lớp học:</strong> Lớp nhỏ (<15 học viên) cho kết quả tốt hơn lớp đông</li>
        <li><strong>Luyện tập ngoài giờ:</strong> Nghe podcast, xem phim tiếng Trung ngoài giờ học</li>
        <li><strong>Phương pháp giảng dạy:</strong> Giáo viên kinh nghiệm giúp bạn tiến bộ nhanh hơn</li>
      </ul>
      <h2>Kết luận</h2>
      <p>Với lộ trình học tại Luoyue Chinese, chúng tôi cam kết giúp học viên đạt HSK 3 trong vòng <strong>6–8 tháng</strong> từ đầu. Hãy đăng ký tư vấn để nhận lộ trình học phù hợp với bạn!</p>
    `
      },
      "bi-quyet-nho-han-tu": {
        title: "Bí quyết nhớ Hán tự lâu không quên",
        category: "Kinh nghiệm",
        date: "14/06/2025",
        readTime: 6,
        gradient: "linear-gradient(135deg, #E0F7FA, #b2ebf2)",
        tags: ["Hán tự", "Ghi nhớ", "Mẹo học"],
        content: `
      <h2>Tại sao Hán tự lại khó nhớ?</h2>
      <p>Hán tự có hình dạng phức tạp và không có mối liên hệ rõ ràng với phát âm như chữ Latin. Đây là lý do nhiều người cảm thấy khó nhớ.</p>
      <h2>5 phương pháp nhớ Hán tự hiệu quả</h2>
      <h3>1. Học theo bộ thủ (Radical)</h3>
      <p>Hán tự được cấu thành từ các bộ phận gọi là "bộ thủ". Học bộ thủ giúp bạn đoán nghĩa và nhớ chữ dễ hơn. Ví dụ: bộ 氵 (thủy) thường liên quan đến nước.</p>
      <h3>2. Dùng trí nhớ liên tưởng</h3>
      <p>Tạo câu chuyện hoặc hình ảnh từ hình dạng của chữ. Ví dụ: chữ 山 (núi) trông giống 3 đỉnh núi.</p>
      <h3>3. Flashcard spaced repetition</h3>
      <p>Dùng app như Anki để ôn tập Hán tự theo thuật toán ghi nhớ gián đoạn — học đúng thời điểm trước khi quên.</p>
      <h3>4. Viết tay thường xuyên</h3>
      <p>Viết tay kích hoạt cơ nhớ khác với đọc. Mỗi ngày viết 5–10 chữ mới nhiều lần.</p>
      <h3>5. Học trong ngữ cảnh</h3>
      <p>Học chữ trong câu thực tế thay vì đơn lẻ. Ví dụ: học "学习" (học tập) trong câu "我在学习中文" sẽ nhớ lâu hơn học riêng từng chữ.</p>
    `
      }
    };
    const post = computed(() => posts[slug] || null);
    useHead({
      title: computed(() => post.value ? `${post.value.title} | Blog Luoyue Chinese` : "Blog | Luoyue Chinese"),
      meta: computed(() => post.value ? [{ name: "description", content: post.value.title }] : [])
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ConsultationForm = __nuxt_component_1;
      if (unref(post)) {
        _push(`<main${ssrRenderAttrs(_attrs)} data-v-8789c001><article data-v-8789c001><section class="blog-hero" style="${ssrRenderStyle({ background: unref(post).gradient })}" data-v-8789c001><div class="container" data-v-8789c001><nav class="breadcrumb" data-v-8789c001>`);
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
        _push(`<span data-v-8789c001>/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Blog`);
            } else {
              return [
                createTextVNode("Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span data-v-8789c001>/</span><span data-v-8789c001>${ssrInterpolate(unref(post).category)}</span></nav><span class="blog-category-badge" data-v-8789c001>${ssrInterpolate(unref(post).category)}</span><h1 class="blog-title" data-v-8789c001>${ssrInterpolate(unref(post).title)}</h1><div class="blog-meta" data-v-8789c001><span data-v-8789c001>📅 ${ssrInterpolate(unref(post).date)}</span><span data-v-8789c001>·</span><span data-v-8789c001>⏱ ${ssrInterpolate(unref(post).readTime)} phút đọc</span><span data-v-8789c001>·</span><span data-v-8789c001>✍️ Luoyue Chinese</span></div></div></section><section class="section" data-v-8789c001><div class="container blog-layout" data-v-8789c001><div class="blog-content" data-v-8789c001><div class="blog-body" data-v-8789c001>${unref(post).content ?? ""}</div><div class="blog-tags" data-v-8789c001><!--[-->`);
        ssrRenderList(unref(post).tags, (tag) => {
          _push(`<span class="tag" data-v-8789c001>${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div><div class="blog-share" data-v-8789c001><span class="share-label" data-v-8789c001>Chia sẻ:</span><a href="#" class="share-btn fb" data-v-8789c001>Facebook</a><a href="#" class="share-btn zalo" data-v-8789c001>Zalo</a></div></div><aside class="blog-sidebar" data-v-8789c001>`);
        _push(ssrRenderComponent(_component_ConsultationForm, {
          title: "Đăng ký tư vấn",
          subtitle: "Nhận tư vấn học tiếng Trung miễn phí từ chuyên gia"
        }, null, _parent));
        _push(`<div class="sidebar-related" data-v-8789c001><h3 data-v-8789c001>Bài viết liên quan</h3>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/hoc-tieng-trung-bao-lau-dat-hsk3",
          class: "related-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 📊 Học tiếng Trung bao lâu thì đạt HSK 3? `);
            } else {
              return [
                createTextVNode(" 📊 Học tiếng Trung bao lâu thì đạt HSK 3? ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/bi-quyet-nho-han-tu",
          class: "related-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 🧠 Bí quyết nhớ Hán tự lâu không quên `);
            } else {
              return [
                createTextVNode(" 🧠 Bí quyết nhớ Hán tự lâu không quên ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog/tu-vung-kinh-doanh-tieng-trung",
          class: "related-item"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 💼 50 từ vựng tiếng Trung thương mại `);
            } else {
              return [
                createTextVNode(" 💼 50 từ vựng tiếng Trung thương mại ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></aside></div></section></article></main>`);
      } else {
        _push(`<main${ssrRenderAttrs(_attrs)} data-v-8789c001><section class="section" style="${ssrRenderStyle({ "text-align": "center", "padding": "160px 0" })}" data-v-8789c001><div class="container" data-v-8789c001><h1 style="${ssrRenderStyle({ "font-size": "2rem", "color": "var(--color-muted)" })}" data-v-8789c001>Bài viết không tồn tại</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/blog",
          class: "btn btn-primary",
          style: { "margin-top": "24px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Về trang Blog`);
            } else {
              return [
                createTextVNode("Về trang Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section></main>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8789c001"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-Dc-sf5zp.js.map

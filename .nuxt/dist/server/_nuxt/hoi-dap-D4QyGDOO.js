import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./FaqAccordion-BbaBIlX9.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
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
  __name: "hoi-dap",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Hỏi đáp | Luoyue Chinese",
      meta: [{ name: "description", content: "Câu hỏi thường gặp về khóa học tiếng Trung tại Luoyue Chinese: học phí, lịch học, online/offline, cam kết đầu ra, hoàn tiền." }],
      script: [{
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Học phí các khóa học là bao nhiêu?", acceptedAnswer: { "@type": "Answer", text: "Học phí dao động từ 2.500.000đ đến 5.000.000đ/khóa tùy cấp độ và thời lượng. Xem chi tiết tại trang Khóa học." } }
          ]
        })
      }]
    });
    const faqGroups = [
      {
        emoji: "📚",
        title: "Về khóa học",
        items: [
          { q: "Luoyue Chinese có những khóa học nào?", a: "Chúng tôi có HSK 1–6 (từ sơ cấp đến cao cấp), Tiếng Trung giao tiếp, Thiếu nhi (5–12 tuổi) và Business Chinese (tiếng Trung thương mại, xuất nhập khẩu)." },
          { q: "Học xong mỗi cấp độ mất bao lâu?", a: "HSK 1–2: ~2 tháng/cấp; HSK 3–4: ~3 tháng/cấp; HSK 5: ~4 tháng; HSK 6: ~5 tháng. Tổng từ đầu đến HSK 6 khoảng 17–18 tháng nếu học liên tục." },
          { q: "Khóa học có dạy cả 4 kỹ năng không?", a: "Có! Mỗi khóa học đều bao gồm nghe, nói, đọc, viết theo chuẩn đề thi HSK. Đặc biệt chú trọng kỹ năng nói để học viên tự tin giao tiếp thực tế." },
          { q: "Có học thử miễn phí không?", a: "Có! Bạn có thể đăng ký học thử 1 buổi hoàn toàn miễn phí để trải nghiệm trước khi đăng ký chính thức." }
        ]
      },
      {
        emoji: "💰",
        title: "Học phí & Thanh toán",
        items: [
          { q: "Học phí các khóa học là bao nhiêu?", a: "HSK 1–2: 2.800.000₫/khóa; HSK 3–4: 3.500.000₫/khóa; HSK 5: 4.200.000₫/khóa; HSK 6: 5.000.000₫/khóa; Giao tiếp: 2.800.000₫; Thiếu nhi: 2.500.000₫; Business: 4.000.000₫." },
          { q: "Có được hoàn học phí không?", a: "Trong vòng 7 ngày đầu nếu chưa học quá 3 buổi, học viên có thể hoàn tiền 100%. Sau đó không hoàn phí nhưng được bảo lưu học phí tối đa 6 tháng." },
          { q: "Có thể trả góp học phí không?", a: "Có! Học viên có thể chia học phí thành 2 lần: 50% đầu khóa và 50% giữa khóa. Liên hệ để biết thêm chi tiết." }
        ]
      },
      {
        emoji: "🏫",
        title: "Hình thức học",
        items: [
          { q: "Có thể học online không?", a: "Có! Luoyue Chinese cung cấp cả học online (qua Zoom/Google Meet) và offline tại cơ sở. Chất lượng giảng dạy tương đương nhau." },
          { q: "Lớp học có bao nhiêu học viên?", a: "Tối đa 10–15 học viên/lớp để đảm bảo chất lượng. Lớp nhỏ giúp học viên được hỏi và luyện tập nhiều hơn." },
          { q: "Nếu vắng buổi học thì có học bù không?", a: "Có. Học viên vắng có thể học bù tại buổi học cùng cấp độ khác hoặc xem lại bản ghi (đối với online) trong vòng 7 ngày." }
        ]
      },
      {
        emoji: "🏆",
        title: "Cam kết & Kết quả",
        items: [
          { q: "Cam kết đầu ra là như thế nào?", a: "Học viên hoàn thành đủ số buổi học và điểm chuyên cần >80% mà không đạt HSK theo mục tiêu, sẽ được học lại miễn phí tối đa 1 kỳ học tương đương." },
          { q: "Tỷ lệ đỗ HSK thực tế là bao nhiêu?", a: "Tỷ lệ đỗ HSK của học viên Luoyue Chinese đạt 98% theo thống kê trong 12 tháng gần đây. Nhiều học viên đạt điểm xuất sắc (trên 250/300)." },
          { q: "Trung tâm có hỗ trợ đăng ký thi HSK không?", a: "Có! Chúng tôi hỗ trợ hướng dẫn đăng ký thi HSK tại các hội đồng thi uy tín, cung cấp thông tin lịch thi và tài liệu ôn thi miễn phí." }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FaqAccordion = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-bc199c9e><section class="page-hero" data-v-bc199c9e><div class="container" data-v-bc199c9e><nav class="breadcrumb" data-v-bc199c9e>`);
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
      _push(`<span data-v-bc199c9e>/</span><span data-v-bc199c9e>Hỏi đáp</span></nav><h1 class="page-hero-title" data-v-bc199c9e>Hỏi đáp <span class="text-primary" data-v-bc199c9e>thường gặp</span></h1><p class="page-hero-subtitle" data-v-bc199c9e>Giải đáp mọi thắc mắc về khóa học, học phí, lịch học và chất lượng giảng dạy</p></div></section><section class="section" data-v-bc199c9e><div class="container faq-layout" data-v-bc199c9e><div class="faq-main" data-v-bc199c9e><!--[-->`);
      ssrRenderList(faqGroups, (group, gi) => {
        _push(`<div class="faq-group reveal" style="${ssrRenderStyle({ transitionDelay: `${gi * 100}ms` })}" data-v-bc199c9e><h2 class="faq-group-title" data-v-bc199c9e>${ssrInterpolate(group.emoji)} ${ssrInterpolate(group.title)}</h2>`);
        _push(ssrRenderComponent(_component_FaqAccordion, {
          items: group.items
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><aside class="faq-sidebar" data-v-bc199c9e><div class="faq-cta-card" data-v-bc199c9e><div class="faq-cta-icon" data-v-bc199c9e>💬</div><h3 data-v-bc199c9e>Vẫn còn thắc mắc?</h3><p data-v-bc199c9e>Liên hệ trực tiếp với chúng tôi để được hỗ trợ nhanh nhất</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "btn btn-primary",
        style: { "justify-content": "center", "margin-top": "8px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Liên hệ tư vấn`);
          } else {
            return [
              createTextVNode("Liên hệ tư vấn")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="tel:0989664362" class="btn btn-outline" style="${ssrRenderStyle({ "justify-content": "center", "margin-top": "10px" })}" data-v-bc199c9e> 📞 Gọi ngay: 0989664362 </a><a href="https://zalo.me/0989664362" target="_blank" class="btn" style="${ssrRenderStyle({ "background": "#0068ff", "color": "white", "justify-content": "center", "margin-top": "10px" })}" data-v-bc199c9e> Chat Zalo ngay </a></div></aside></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hoi-dap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hoiDap = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc199c9e"]]);
export {
  hoiDap as default
};
//# sourceMappingURL=hoi-dap-D4QyGDOO.js.map

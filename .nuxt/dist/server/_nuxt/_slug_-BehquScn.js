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
    const teachersData = {
      "nguyen-minh-tri": {
        name: "Thầy Nguyễn Minh Trí",
        initials: "MT",
        flag: "🇨🇳",
        bgColor: "linear-gradient(135deg, #1B4F91, #2E86DE)",
        title: "Giảng viên HSK 4–6 & Business Chinese",
        badges: ["HSK 6", "Thạc sĩ ĐH Bắc Kinh", "8 năm kinh nghiệm"],
        students: "320+",
        years: "8",
        rating: "4.9",
        bio: "Thầy Nguyễn Minh Trí có hơn 8 năm kinh nghiệm giảng dạy tiếng Trung, trong đó 5 năm học tập và làm việc tại Trung Quốc. Thầy tốt nghiệp Thạc sĩ Ngôn ngữ học Hoa ngữ tại Đại học Bắc Kinh — một trong những trường danh tiếng nhất Trung Quốc.",
        achievements: ["Bằng Thạc sĩ Ngôn ngữ học Hoa ngữ — ĐH Bắc Kinh", "Chứng chỉ HSK 6 đạt 295/300", "Đã đào tạo 320+ học viên đỗ HSK", "Chuyên gia Business Chinese cho các doanh nghiệp FDI", 'Tác giả bộ tài liệu "HSK 5-6 Nhanh & Hiệu Quả" độc quyền Luoyue Chinese'],
        method: 'Thầy Trí sử dụng phương pháp kết hợp ngữ pháp-từ vựng-ngữ cảnh thực tế, giúp học viên không chỉ "thuộc lòng" mà thực sự hiểu và dùng được tiếng Trung trong môi trường làm việc quốc tế.'
      },
      "tran-lan-anh": {
        name: "Cô Trần Thị Lan Anh",
        initials: "LA",
        flag: "🇨🇳",
        bgColor: "linear-gradient(135deg, #E74C3C, #FF6B6B)",
        title: "Giảng viên HSK 1–3 & Thiếu nhi",
        badges: ["HSK 5", "Tốt nghiệp ĐH Thượng Hải", "5 năm kinh nghiệm"],
        students: "250+",
        years: "5",
        rating: "4.8",
        bio: "Cô Lan Anh tốt nghiệp Đại học Ngoại ngữ Thượng Hải và có 5 năm kinh nghiệm dạy tiếng Trung cho cả người lớn và trẻ em. Cô nổi tiếng với phong cách dạy nhẹ nhàng, kiên nhẫn và hiệu quả.",
        achievements: ["Cử nhân Sư phạm tiếng Hoa — ĐH Ngoại ngữ Thượng Hải", "Chứng chỉ HSK 5 đạt 280/300", "Chứng chỉ giảng dạy tiếng Hoa cho trẻ em (CTCSOL)", "Hơn 250 học viên thiếu nhi đã học cùng cô"],
        method: "Cô Lan Anh sử dụng phương pháp học qua trải nghiệm — trò chơi, bài hát, câu chuyện. Với người lớn, cô tập trung vào giao tiếp thực tế từ buổi học đầu tiên."
      }
    };
    const defaultTeacher = {
      "le-quoc-khanh": { name: "Thầy Lê Quốc Khánh", initials: "QK", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #2a9d8f, #4ECDC4)", title: "Giảng viên Giao tiếp & Phát âm", badges: ["HSK 5", "CertTCHN", "6 năm KN"], students: "180+", years: "6", rating: "4.9", bio: "Thầy Khánh chuyên về kỹ năng nói và phát âm tiếng Trung, đã đào tạo nhiều học viên đạt phát âm chuẩn bản ngữ.", achievements: ["Chứng chỉ HSK 5", "Chứng chỉ CertTCHN giảng viên tiếng Hoa", "6 năm kinh nghiệm"], method: "Phương pháp focus vào âm thanh, nhịp điệu và ngữ điệu tự nhiên." },
      "pham-thanh-huong": { name: "Cô Phạm Thanh Hương", initials: "TH", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #d4a017, #F5C542)", title: "Giảng viên HSK 1–4 & Giao tiếp", badges: ["HSK 5", "ĐH Ngoại ngữ HN", "4 năm KN"], students: "200+", years: "4", rating: "4.7", bio: "Cô Hương tốt nghiệp Đại học Ngoại ngữ Hà Nội, có 4 năm kinh nghiệm dạy cả online và offline.", achievements: ["Cử nhân tiếng Hoa — ĐH Ngoại ngữ Hà Nội", "Chứng chỉ HSK 5", "200+ học viên"], method: "Cô kết hợp lý thuyết ngữ pháp với luyện tập giao tiếp thực tế." }
    };
    const allTeachers = { ...teachersData, ...defaultTeacher };
    const teacher = computed(() => allTeachers[slug] || null);
    useHead({
      title: computed(() => teacher.value ? `${teacher.value.name} | Giảng viên Luoyue Chinese` : "Giảng viên | Luoyue Chinese")
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ConsultationForm = __nuxt_component_1;
      if (unref(teacher)) {
        _push(`<main${ssrRenderAttrs(_attrs)} data-v-06c31e9b><section class="teacher-hero" style="${ssrRenderStyle({ background: unref(teacher).bgColor })}" data-v-06c31e9b><div class="container" data-v-06c31e9b><nav class="breadcrumb" data-v-06c31e9b>`);
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
        _push(`<span data-v-06c31e9b>/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/giang-vien" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Giảng viên`);
            } else {
              return [
                createTextVNode("Giảng viên")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span data-v-06c31e9b>/</span><span data-v-06c31e9b>${ssrInterpolate(unref(teacher).name)}</span></nav><div class="hero-inner" data-v-06c31e9b><div class="hero-avatar" data-v-06c31e9b>${ssrInterpolate(unref(teacher).initials)}</div><div class="hero-info" data-v-06c31e9b><h1 class="hero-name" data-v-06c31e9b>${ssrInterpolate(unref(teacher).name)} ${ssrInterpolate(unref(teacher).flag)}</h1><p class="hero-title" data-v-06c31e9b>${ssrInterpolate(unref(teacher).title)}</p><div class="hero-badges" data-v-06c31e9b><!--[-->`);
        ssrRenderList(unref(teacher).badges, (b) => {
          _push(`<span class="hero-badge" data-v-06c31e9b>${ssrInterpolate(b)}</span>`);
        });
        _push(`<!--]--></div><div class="hero-stats" data-v-06c31e9b><div class="hero-stat" data-v-06c31e9b><span class="num" data-v-06c31e9b>${ssrInterpolate(unref(teacher).students)}</span><span class="lbl" data-v-06c31e9b>Học viên</span></div><div class="hero-stat" data-v-06c31e9b><span class="num" data-v-06c31e9b>${ssrInterpolate(unref(teacher).years)}</span><span class="lbl" data-v-06c31e9b>Năm kinh nghiệm</span></div><div class="hero-stat" data-v-06c31e9b><span class="num" data-v-06c31e9b>${ssrInterpolate(unref(teacher).rating)}</span><span class="lbl" data-v-06c31e9b>⭐ Đánh giá</span></div></div></div></div></div></section><section class="section" data-v-06c31e9b><div class="container teacher-content" data-v-06c31e9b><div class="teacher-main" data-v-06c31e9b><div class="content-block reveal" data-v-06c31e9b><h2 class="content-title" data-v-06c31e9b>Giới thiệu</h2><p class="teacher-bio" data-v-06c31e9b>${ssrInterpolate(unref(teacher).bio)}</p></div><div class="content-block reveal" data-v-06c31e9b><h2 class="content-title" data-v-06c31e9b>Chuyên môn &amp; Thành tích</h2><ul class="achievement-list" data-v-06c31e9b><!--[-->`);
        ssrRenderList(unref(teacher).achievements, (a) => {
          _push(`<li data-v-06c31e9b>${ssrInterpolate(a)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="content-block reveal" data-v-06c31e9b><h2 class="content-title" data-v-06c31e9b>Phương pháp giảng dạy</h2><p class="teacher-bio" data-v-06c31e9b>${ssrInterpolate(unref(teacher).method)}</p></div></div><aside class="teacher-sidebar" data-v-06c31e9b>`);
        _push(ssrRenderComponent(_component_ConsultationForm, {
          title: `Học với ${unref(teacher).name.split(" ").slice(-1)[0]}`,
          subtitle: "Đăng ký tư vấn để được xếp lớp học với giảng viên này"
        }, null, _parent));
        _push(`</aside></div></section></main>`);
      } else {
        _push(`<main${ssrRenderAttrs(_attrs)} data-v-06c31e9b><section class="section" style="${ssrRenderStyle({ "text-align": "center", "padding": "160px 0" })}" data-v-06c31e9b><div class="container" data-v-06c31e9b><h1 style="${ssrRenderStyle({ "font-size": "2rem", "color": "var(--color-muted)" })}" data-v-06c31e9b>Không tìm thấy giảng viên</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/giang-vien",
          class: "btn btn-primary",
          style: { "margin-top": "24px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Xem tất cả giảng viên`);
            } else {
              return [
                createTextVNode("Xem tất cả giảng viên")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/giang-vien/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-06c31e9b"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-BehquScn.js.map

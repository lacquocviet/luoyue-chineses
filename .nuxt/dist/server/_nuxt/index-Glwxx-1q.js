import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Đội ngũ giảng viên | Luoyue Chinese",
      meta: [{ name: "description", content: "Giảng viên Luoyue Chinese có bằng cấp HSK 5-6, kinh nghiệm tại Trung Quốc, phương pháp giảng dạy hiện đại, gần gũi." }]
    });
    const teachers = [
      { slug: "nguyen-minh-tri", name: "Thầy Nguyễn Minh Trí", initials: "MT", title: "Giảng viên HSK 4–6 & Business Chinese", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #2E86DE, #1B4F91)", badges: ["HSK 6", "Thạc sĩ Bắc Kinh", "8 năm KN"], students: "320+", years: "8", rating: "4.9" },
      { slug: "tran-lan-anh", name: "Cô Trần Thị Lan Anh", initials: "LA", title: "Giảng viên HSK 1–3 & Thiếu nhi", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #FF6B6B, #E74C3C)", badges: ["HSK 5", "Tốt nghiệp Thượng Hải", "5 năm KN"], students: "250+", years: "5", rating: "4.8" },
      { slug: "le-quoc-khanh", name: "Thầy Lê Quốc Khánh", initials: "QK", title: "Giảng viên Giao tiếp & Phát âm", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #4ECDC4, #45B7D1)", badges: ["HSK 5", "CertTCHN", "6 năm KN"], students: "180+", years: "6", rating: "4.9" },
      { slug: "pham-thanh-huong", name: "Cô Phạm Thanh Hương", initials: "TH", title: "Giảng viên HSK 1–4 & Giao tiếp", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #F5C542, #E67E22)", badges: ["HSK 5", "ĐH Ngoại ngữ", "4 năm KN"], students: "200+", years: "4", rating: "4.7" },
      { slug: "vo-minh-khoa", name: "Thầy Võ Minh Khoa", initials: "MK", title: "Giảng viên HSK 3–5", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #6C3483, #4A235A)", badges: ["HSK 6", "Du học Quảng Châu", "7 năm KN"], students: "270+", years: "7", rating: "4.8" },
      { slug: "nguyen-phuong-linh", name: "Cô Nguyễn Phương Linh", initials: "PL", title: "Giảng viên Business Chinese", flag: "🇨🇳", bgColor: "linear-gradient(135deg, #45B7D1, #2980b9)", badges: ["HSK 5", "MBA Thượng Hải", "5 năm KN"], students: "150+", years: "5", rating: "4.9" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-610bfa83><section class="page-hero" data-v-610bfa83><div class="container" data-v-610bfa83><nav class="breadcrumb" data-v-610bfa83>`);
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
      _push(`<span data-v-610bfa83>/</span><span data-v-610bfa83>Giảng viên</span></nav><h1 class="page-hero-title" data-v-610bfa83>Đội ngũ <span class="text-primary" data-v-610bfa83>giảng viên</span></h1><p class="page-hero-subtitle" data-v-610bfa83>Tất cả giảng viên của Luoyue Chinese đều có bằng cấp, kinh nghiệm thực tiễn và đam mê truyền đạt tiếng Trung</p></div></section><section class="section" data-v-610bfa83><div class="container" data-v-610bfa83><div class="teachers-grid" data-v-610bfa83><!--[-->`);
      ssrRenderList(teachers, (teacher, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: teacher.slug,
          to: `/giang-vien/${teacher.slug}`,
          class: "teacher-card reveal",
          style: { transitionDelay: `${i * 80}ms` }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="teacher-avatar" style="${ssrRenderStyle({ background: teacher.bgColor })}" data-v-610bfa83${_scopeId}><span class="teacher-initials" data-v-610bfa83${_scopeId}>${ssrInterpolate(teacher.initials)}</span><div class="teacher-flag" data-v-610bfa83${_scopeId}>${ssrInterpolate(teacher.flag)}</div></div><div class="teacher-info" data-v-610bfa83${_scopeId}><h3 class="teacher-name" data-v-610bfa83${_scopeId}>${ssrInterpolate(teacher.name)}</h3><p class="teacher-title-text" data-v-610bfa83${_scopeId}>${ssrInterpolate(teacher.title)}</p><div class="teacher-badges" data-v-610bfa83${_scopeId}><!--[-->`);
              ssrRenderList(teacher.badges, (b) => {
                _push2(`<span class="teacher-badge" data-v-610bfa83${_scopeId}>${ssrInterpolate(b)}</span>`);
              });
              _push2(`<!--]--></div><div class="teacher-stats" data-v-610bfa83${_scopeId}><div class="teacher-stat" data-v-610bfa83${_scopeId}><span class="num" data-v-610bfa83${_scopeId}>${ssrInterpolate(teacher.students)}</span><span class="lbl" data-v-610bfa83${_scopeId}>Học viên</span></div><div class="teacher-stat" data-v-610bfa83${_scopeId}><span class="num" data-v-610bfa83${_scopeId}>${ssrInterpolate(teacher.years)}</span><span class="lbl" data-v-610bfa83${_scopeId}>Năm KN</span></div><div class="teacher-stat" data-v-610bfa83${_scopeId}><span class="num" data-v-610bfa83${_scopeId}>${ssrInterpolate(teacher.rating)}</span><span class="lbl" data-v-610bfa83${_scopeId}>⭐ Rating</span></div></div><div class="view-profile" data-v-610bfa83${_scopeId}>Xem hồ sơ →</div></div>`);
            } else {
              return [
                createVNode("div", {
                  class: "teacher-avatar",
                  style: { background: teacher.bgColor }
                }, [
                  createVNode("span", { class: "teacher-initials" }, toDisplayString(teacher.initials), 1),
                  createVNode("div", { class: "teacher-flag" }, toDisplayString(teacher.flag), 1)
                ], 4),
                createVNode("div", { class: "teacher-info" }, [
                  createVNode("h3", { class: "teacher-name" }, toDisplayString(teacher.name), 1),
                  createVNode("p", { class: "teacher-title-text" }, toDisplayString(teacher.title), 1),
                  createVNode("div", { class: "teacher-badges" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(teacher.badges, (b) => {
                      return openBlock(), createBlock("span", {
                        key: b,
                        class: "teacher-badge"
                      }, toDisplayString(b), 1);
                    }), 128))
                  ]),
                  createVNode("div", { class: "teacher-stats" }, [
                    createVNode("div", { class: "teacher-stat" }, [
                      createVNode("span", { class: "num" }, toDisplayString(teacher.students), 1),
                      createVNode("span", { class: "lbl" }, "Học viên")
                    ]),
                    createVNode("div", { class: "teacher-stat" }, [
                      createVNode("span", { class: "num" }, toDisplayString(teacher.years), 1),
                      createVNode("span", { class: "lbl" }, "Năm KN")
                    ]),
                    createVNode("div", { class: "teacher-stat" }, [
                      createVNode("span", { class: "num" }, toDisplayString(teacher.rating), 1),
                      createVNode("span", { class: "lbl" }, "⭐ Rating")
                    ])
                  ]),
                  createVNode("div", { class: "view-profile" }, "Xem hồ sơ →")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="section bg-surface" style="${ssrRenderStyle({ "padding": "48px 0" })}" data-v-610bfa83><div class="container" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-610bfa83><h2 class="section-title reveal" data-v-610bfa83>Muốn trở thành giảng viên của Luoyue Chinese?</h2><p class="section-subtitle reveal" style="${ssrRenderStyle({ "text-align": "center", "margin": "12px auto 32px" })}" data-v-610bfa83>Chúng tôi luôn tìm kiếm những giảng viên đam mê và kinh nghiệm.</p><a href="mailto:lacquocviet.editor@gmail.com" class="btn btn-primary reveal" data-v-610bfa83>Gửi CV ứng tuyển</a></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/giang-vien/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-610bfa83"]]);
export {
  index as default
};
//# sourceMappingURL=index-Glwxx-1q.js.map

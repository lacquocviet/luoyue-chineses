import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, ref, computed, withCtx, createTextVNode, unref, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { CalendarDays, Clock, Users, MapPin } from "@lucide/vue";
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
  __name: "lich-khai-giang",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Lịch khai giảng | Luoyue Chinese",
      meta: [{ name: "description", content: "Lịch khai giảng các lớp tiếng Trung HSK 1-6, giao tiếp, thiếu nhi, Business Chinese tại Luoyue Chinese. Đăng ký sớm nhận ưu đãi." }]
    });
    const classes = [
      { level: "HSK 1", title: "HSK 1 — Sơ cấp 1 (Buổi tối)", mode: "Online", color: "#4ECDC4", startDate: "15/07/2025", schedule: "Thứ 3, 5 · 19:00–21:00", slots: 8, location: "Zoom (link gửi sau)", price: "2.800.000₫", category: "HSK" },
      { level: "HSK 2", title: "HSK 2 — Sơ cấp 2 (Cuối tuần)", mode: "Offline", color: "#45B7D1", startDate: "20/07/2025", schedule: "Thứ 7, CN · 08:00–10:00", slots: 5, location: "Cơ sở Q.1, TP.HCM", price: "2.800.000₫", category: "HSK" },
      { level: "HSK 3", title: "HSK 3 — Trung cấp 1 (Buổi sáng)", mode: "Offline", color: "#2E86DE", startDate: "18/07/2025", schedule: "Thứ 2, 4, 6 · 07:30–09:00", slots: 3, location: "Cơ sở Q.3, TP.HCM", price: "3.500.000₫", category: "HSK" },
      { level: "HSK 4", title: "HSK 4 — Trung cấp 2 (Buổi tối)", mode: "Online", color: "#1B4F91", startDate: "22/07/2025", schedule: "Thứ 2, 4 · 20:00–22:00", slots: 10, location: "Zoom (link gửi sau)", price: "3.500.000₫", category: "HSK" },
      { level: "Giao tiếp", title: "Giao tiếp thực tế (Buổi tối)", mode: "Offline", color: "#F5C542", startDate: "16/07/2025", schedule: "Thứ 3, 5 · 18:00–19:30", slots: 6, location: "Cơ sở Q.1, TP.HCM", price: "2.800.000₫", category: "Giao tiếp" },
      { level: "Thiếu nhi", title: "Tiếng Trung thiếu nhi (Cuối tuần)", mode: "Offline", color: "#FF6B6B", startDate: "19/07/2025", schedule: "Thứ 7 · 09:00–10:30", slots: 7, location: "Cơ sở Q.1, TP.HCM", price: "2.500.000₫", category: "Thiếu nhi" },
      { level: "Business", title: "Business Chinese (Buổi tối)", mode: "Online", color: "#6C3483", startDate: "21/07/2025", schedule: "Thứ 3, 5 · 20:00–21:30", slots: 9, location: "Zoom (link gửi sau)", price: "4.000.000₫", category: "Business" },
      { level: "HSK 5", title: "HSK 5 — Cao cấp 1 (Cuối tuần)", mode: "Offline", color: "#6C3483", startDate: "26/07/2025", schedule: "Thứ 7, CN · 14:00–16:00", slots: 4, location: "Cơ sở Q.3, TP.HCM", price: "4.200.000₫", category: "HSK" }
    ];
    const filters = ["Tất cả", "HSK", "Giao tiếp", "Thiếu nhi", "Business", "Online", "Offline"];
    const activeFilter = ref("Tất cả");
    const filteredClasses = computed(() => {
      if (activeFilter.value === "Tất cả") return classes;
      if (activeFilter.value === "Online") return classes.filter((c) => c.mode === "Online");
      if (activeFilter.value === "Offline") return classes.filter((c) => c.mode === "Offline");
      return classes.filter((c) => c.category === activeFilter.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-e752336f><section class="page-hero" data-v-e752336f><div class="container" data-v-e752336f><nav class="breadcrumb" data-v-e752336f>`);
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
      _push(`<span data-v-e752336f>/</span><span data-v-e752336f>Lịch khai giảng</span></nav><h1 class="page-hero-title" data-v-e752336f>Lịch <span class="text-primary" data-v-e752336f>khai giảng</span></h1><p class="page-hero-subtitle" data-v-e752336f>Các lớp sắp khai giảng — đăng ký sớm để nhận ưu đãi học phí</p></div></section><section class="section" data-v-e752336f><div class="container" data-v-e752336f><div class="schedule-filter reveal" data-v-e752336f><!--[-->`);
      ssrRenderList(filters, (f) => {
        _push(`<button class="${ssrRenderClass([{ active: unref(activeFilter) === f }, "filter-tab"])}" data-v-e752336f>${ssrInterpolate(f)}</button>`);
      });
      _push(`<!--]--></div><div class="schedule-grid" data-v-e752336f><!--[-->`);
      ssrRenderList(unref(filteredClasses), (cls, i) => {
        _push(`<div class="schedule-card reveal" style="${ssrRenderStyle({ transitionDelay: `${i * 60}ms` })}" data-v-e752336f><div class="schedule-header" style="${ssrRenderStyle({ background: cls.color })}" data-v-e752336f><span class="schedule-level" data-v-e752336f>${ssrInterpolate(cls.level)}</span><span class="schedule-type" data-v-e752336f>${ssrInterpolate(cls.mode)}</span></div><div class="schedule-body" data-v-e752336f><h3 class="schedule-title" data-v-e752336f>${ssrInterpolate(cls.title)}</h3><div class="schedule-details" data-v-e752336f><div class="detail-row" data-v-e752336f>`);
        _push(ssrRenderComponent(unref(CalendarDays), { size: 15 }, null, _parent));
        _push(`<span data-v-e752336f>Khai giảng: <strong data-v-e752336f>${ssrInterpolate(cls.startDate)}</strong></span></div><div class="detail-row" data-v-e752336f>`);
        _push(ssrRenderComponent(unref(Clock), { size: 15 }, null, _parent));
        _push(`<span data-v-e752336f>Lịch học: ${ssrInterpolate(cls.schedule)}</span></div><div class="detail-row" data-v-e752336f>`);
        _push(ssrRenderComponent(unref(Users), { size: 15 }, null, _parent));
        _push(`<span data-v-e752336f>Còn ${ssrInterpolate(cls.slots)} chỗ trống</span></div><div class="detail-row" data-v-e752336f>`);
        _push(ssrRenderComponent(unref(MapPin), { size: 15 }, null, _parent));
        _push(`<span data-v-e752336f>${ssrInterpolate(cls.location)}</span></div></div><div class="schedule-footer" data-v-e752336f><span class="schedule-price" data-v-e752336f>${ssrInterpolate(cls.price)}</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lien-he",
          class: "btn btn-primary schedule-btn"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Đăng ký`);
            } else {
              return [
                createTextVNode("Đăng ký")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (unref(filteredClasses).length === 0) {
        _push(`<div class="no-results" data-v-e752336f><span data-v-e752336f>😅</span><p data-v-e752336f>Không có lớp nào khớp bộ lọc hiện tại. Vui lòng chọn bộ lọc khác.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="schedule-cta-box reveal" data-v-e752336f><div class="schedule-cta-text" data-v-e752336f><h3 data-v-e752336f>Không tìm thấy lớp phù hợp?</h3><p data-v-e752336f>Liên hệ chúng tôi để được tư vấn và sắp xếp lớp học theo lịch của bạn.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "btn btn-primary"
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
      _push(`</div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lich-khai-giang.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lichKhaiGiang = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e752336f"]]);
export {
  lichKhaiGiang as default
};
//# sourceMappingURL=lich-khai-giang-BUB7NTfe.js.map

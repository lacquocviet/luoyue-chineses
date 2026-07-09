import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./ConsultationForm-MS54mwMU.js";
import { defineComponent, withCtx, createTextVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
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
  __name: "lien-he",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Liên hệ | Luoyue Chinese 雒越中文",
      meta: [{ name: "description", content: "Liên hệ Luoyue Chinese: hotline 0989664362, email lacquocviet.editor@gmail.com, địa chỉ 169 Hoàng Mai, Tương Mai, Hà Nội." }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ConsultationForm = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)} data-v-8800b141><section class="page-hero" data-v-8800b141><div class="container" data-v-8800b141><nav class="breadcrumb" data-v-8800b141>`);
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
      _push(`<span data-v-8800b141>/</span><span data-v-8800b141>Liên hệ</span></nav><h1 class="page-hero-title" data-v-8800b141>Liên hệ <span class="text-primary" data-v-8800b141>Luoyue Chinese</span></h1><p class="page-hero-subtitle" data-v-8800b141>Chúng tôi sẵn sàng hỗ trợ bạn — đăng ký tư vấn, hỏi về lịch học hay bất kỳ thắc mắc nào</p></div></section><section class="section" data-v-8800b141><div class="container contact-layout" data-v-8800b141><div class="contact-info reveal" data-v-8800b141><h2 class="contact-info-title" data-v-8800b141>Thông tin liên hệ</h2><div class="info-cards" data-v-8800b141><a href="tel:0989664362" class="info-card" data-v-8800b141><div class="info-icon" data-v-8800b141>📞</div><div data-v-8800b141><div class="info-label" data-v-8800b141>Hotline</div><div class="info-value" data-v-8800b141>0989664362</div><div class="info-note" data-v-8800b141>Thứ 2 – CN: 8:00 – 21:00</div></div></a><a href="mailto:lacquocviet.editor@gmail.com" class="info-card" data-v-8800b141><div class="info-icon" data-v-8800b141>✉️</div><div data-v-8800b141><div class="info-label" data-v-8800b141>Email</div><div class="info-value" data-v-8800b141>lacquocviet.editor@gmail.com</div><div class="info-note" data-v-8800b141>Phản hồi trong 24h</div></div></a><div class="info-card" style="${ssrRenderStyle({ "grid-column": "1 / -1" })}" data-v-8800b141><div class="info-icon" data-v-8800b141>📍</div><div data-v-8800b141><div class="info-label" data-v-8800b141>Địa chỉ trung tâm</div><div class="info-value" data-v-8800b141>169 Đường Hoàng Mai, Phường Tương Mai, TP.Hà Nội</div></div></div></div><div class="social-quick" data-v-8800b141><a href="https://www.facebook.com/lacquocviet?locale=vi_VN" target="_blank" class="quick-btn fb" data-v-8800b141> 📘 Nhắn Facebook </a><a href="https://zalo.me/0989664362" target="_blank" class="quick-btn zalo" data-v-8800b141> 💬 Chat Zalo </a></div><div class="map-embed" data-v-8800b141><h3 class="map-title" data-v-8800b141>Bản đồ</h3><iframe src="https://maps.google.com/maps?q=169%20%C4%91%C6%B0%E1%BB%9Dng%20ho%C3%A0ng%20mai%2C%20t%C6%B0%C6%A1ng%20mai%2C%20h%C3%A0%20n%E1%BB%99i&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="280" style="${ssrRenderStyle({ "border": "0", "border-radius": "12px" })}" allowfullscreen loading="lazy" title="Bản đồ Luoyue Chinese" data-v-8800b141></iframe></div></div><div class="contact-form-wrap reveal" data-v-8800b141>`);
      _push(ssrRenderComponent(_component_ConsultationForm, {
        title: "Đăng ký tư vấn miễn phí",
        subtitle: "Điền thông tin — chuyên gia của chúng tôi sẽ liên hệ trong 24h để tư vấn khóa học phù hợp nhất với bạn."
      }, null, _parent));
      _push(`</div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lien-he.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lienHe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8800b141"]]);
export {
  lienHe as default
};
//# sourceMappingURL=lien-he-Ct8-W-Sq.js.map

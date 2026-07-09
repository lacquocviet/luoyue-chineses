import { defineComponent, reactive, ref, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderTeleport, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CtaBanner",
  __ssrInlineRender: true,
  setup(__props) {
    const form = reactive({ name: "", phone: "", course: "" });
    const showSuccessModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        if (showSuccessModal.value) {
          _push2(`<div class="success-overlay" data-v-4b19b5b4><div class="success-modal" data-v-4b19b5b4><div class="success-icon" data-v-4b19b5b4>✅</div><h3 class="success-title" data-v-4b19b5b4>Đăng ký thành công!</h3><p class="success-desc" data-v-4b19b5b4>Cảm ơn <strong data-v-4b19b5b4>${ssrInterpolate(form.name)}</strong> đã đăng ký. Chúng tôi sẽ liên hệ qua số <strong data-v-4b19b5b4>${ssrInterpolate(form.phone)}</strong> trong vòng 24h để tư vấn chi tiết.</p><button class="btn btn-accent" data-v-4b19b5b4>Đã hiểu</button></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<section class="cta-banner" data-v-4b19b5b4><div class="container cta-inner" data-v-4b19b5b4><div class="cta-text reveal" data-v-4b19b5b4><div class="cta-badge" data-v-4b19b5b4>🎁 Ưu đãi giới hạn</div><h2 class="cta-title" data-v-4b19b5b4> Sẵn sàng chinh phục tiếng Trung? </h2><p class="cta-subtitle" data-v-4b19b5b4> Đăng ký học ngay hôm nay. </p></div><div class="cta-form reveal" data-v-4b19b5b4><form class="quick-form" data-v-4b19b5b4><input${ssrRenderAttr("value", form.name)} type="text" placeholder="Họ và tên của bạn" required id="cta-name-input" data-v-4b19b5b4><input${ssrRenderAttr("value", form.phone)} type="tel" placeholder="Số điện thoại" required id="cta-phone-input" data-v-4b19b5b4><select id="cta-course-select" data-v-4b19b5b4><option value="" data-v-4b19b5b4${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "") : ssrLooseEqual(form.course, "")) ? " selected" : ""}>Khóa học quan tâm</option><option value="hsk-1-2" data-v-4b19b5b4${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-1-2") : ssrLooseEqual(form.course, "hsk-1-2")) ? " selected" : ""}>HSK 1–2 (Sơ cấp)</option><option value="hsk-3-4" data-v-4b19b5b4${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-3-4") : ssrLooseEqual(form.course, "hsk-3-4")) ? " selected" : ""}>HSK 3–4 (Trung cấp)</option><option value="hsk-5-6" data-v-4b19b5b4${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-5-6") : ssrLooseEqual(form.course, "hsk-5-6")) ? " selected" : ""}>HSK 5–6 (Cao cấp)</option><option value="giao-tiep" data-v-4b19b5b4${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "giao-tiep") : ssrLooseEqual(form.course, "giao-tiep")) ? " selected" : ""}>Giao tiếp</option><option value="thieu-nhi" data-v-4b19b5b4${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "thieu-nhi") : ssrLooseEqual(form.course, "thieu-nhi")) ? " selected" : ""}>Thiếu nhi</option><option value="business" data-v-4b19b5b4${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "business") : ssrLooseEqual(form.course, "business")) ? " selected" : ""}>Business Chinese</option></select><button type="submit" class="btn btn-accent cta-submit-btn" id="cta-submit-btn" data-v-4b19b5b4> Đăng ký tư vấn miễn phí → </button></form><p class="cta-note" data-v-4b19b5b4> ✅ Hoàn toàn miễn phí · Không spam · Phản hồi trong 24h </p></div></div></section><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/CtaBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4b19b5b4"]]);
export {
  __nuxt_component_2 as _
};
//# sourceMappingURL=CtaBanner-CBRszzyp.js.map

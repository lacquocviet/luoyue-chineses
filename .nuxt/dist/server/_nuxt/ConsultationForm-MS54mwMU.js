import { defineComponent, reactive, ref, mergeProps, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderTeleport } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ConsultationForm",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "Đăng ký tư vấn miễn phí" },
    subtitle: { type: String, default: "Điền thông tin bên dưới — chúng tôi sẽ liên hệ hỗ trợ bạn trong 24h." }
  },
  setup(__props) {
    const form = reactive({ name: "", phone: "", email: "", course: "", note: "" });
    const submitting = ref(false);
    const showSuccessModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "consultation-form" }, _attrs))} data-v-61690cce><h3 class="form-title" data-v-61690cce>${ssrInterpolate(__props.title)}</h3><p class="form-subtitle" data-v-61690cce>${ssrInterpolate(__props.subtitle)}</p><form class="form" data-v-61690cce><div class="form-group" data-v-61690cce><label for="consult-name" data-v-61690cce>Họ và tên *</label><input id="consult-name"${ssrRenderAttr("value", form.name)} type="text" placeholder="Nguyễn Văn A" required data-v-61690cce></div><div class="form-group" data-v-61690cce><label for="consult-phone" data-v-61690cce>Số điện thoại *</label><input id="consult-phone"${ssrRenderAttr("value", form.phone)} type="tel" placeholder="0989 664 362" required data-v-61690cce></div><div class="form-group" data-v-61690cce><label for="consult-email" data-v-61690cce>Email</label><input id="consult-email"${ssrRenderAttr("value", form.email)} type="email" placeholder="email@example.com" data-v-61690cce></div><div class="form-group" data-v-61690cce><label for="consult-course" data-v-61690cce>Khóa học quan tâm</label><select id="consult-course" data-v-61690cce><option value="" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "") : ssrLooseEqual(form.course, "")) ? " selected" : ""}>— Chọn khóa học —</option><option value="hsk-1" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-1") : ssrLooseEqual(form.course, "hsk-1")) ? " selected" : ""}>HSK 1 — Sơ cấp 1</option><option value="hsk-2" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-2") : ssrLooseEqual(form.course, "hsk-2")) ? " selected" : ""}>HSK 2 — Sơ cấp 2</option><option value="hsk-3" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-3") : ssrLooseEqual(form.course, "hsk-3")) ? " selected" : ""}>HSK 3 — Trung cấp 1</option><option value="hsk-4" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-4") : ssrLooseEqual(form.course, "hsk-4")) ? " selected" : ""}>HSK 4 — Trung cấp 2</option><option value="hsk-5" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-5") : ssrLooseEqual(form.course, "hsk-5")) ? " selected" : ""}>HSK 5 — Cao cấp 1</option><option value="hsk-6" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "hsk-6") : ssrLooseEqual(form.course, "hsk-6")) ? " selected" : ""}>HSK 6 — Cao cấp 2</option><option value="giao-tiep" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "giao-tiep") : ssrLooseEqual(form.course, "giao-tiep")) ? " selected" : ""}>Giao tiếp</option><option value="thieu-nhi" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "thieu-nhi") : ssrLooseEqual(form.course, "thieu-nhi")) ? " selected" : ""}>Thiếu nhi</option><option value="business" data-v-61690cce${ssrIncludeBooleanAttr(Array.isArray(form.course) ? ssrLooseContain(form.course, "business") : ssrLooseEqual(form.course, "business")) ? " selected" : ""}>Business Chinese</option></select></div><div class="form-group" data-v-61690cce><label for="consult-note" data-v-61690cce>Ghi chú / Câu hỏi</label><textarea id="consult-note" placeholder="Bạn có câu hỏi gì không? Ví dụ: Bạn đang ở level nào? Muốn đạt mục tiêu gì?" rows="3" data-v-61690cce>${ssrInterpolate(form.note)}</textarea></div><button type="submit" class="btn btn-primary submit-btn"${ssrIncludeBooleanAttr(submitting.value) ? " disabled" : ""} data-v-61690cce>`);
      if (submitting.value) {
        _push(`<span data-v-61690cce>Đang gửi...</span>`);
      } else {
        _push(`<span data-v-61690cce>Gửi đăng ký tư vấn</span>`);
      }
      _push(`</button></form>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (showSuccessModal.value) {
          _push2(`<div class="success-overlay" data-v-61690cce><div class="success-modal" data-v-61690cce><div class="success-icon" data-v-61690cce>✅</div><h3 class="success-title" data-v-61690cce>Đăng ký thành công!</h3><p class="success-desc" data-v-61690cce>Cảm ơn <strong data-v-61690cce>${ssrInterpolate(form.name)}</strong> đã đăng ký. Chúng tôi sẽ liên hệ qua số <strong data-v-61690cce>${ssrInterpolate(form.phone)}</strong> trong vòng 24h để tư vấn chi tiết.</p><button class="btn btn-primary" data-v-61690cce>Đã hiểu</button></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/ConsultationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61690cce"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=ConsultationForm-MS54mwMU.js.map

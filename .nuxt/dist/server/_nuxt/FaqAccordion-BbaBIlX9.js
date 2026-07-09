import { defineComponent, ref, mergeProps, unref, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { ChevronDown } from "@lucide/vue";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FaqAccordion",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const openIndex = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "faq-accordion" }, _attrs))} data-v-a67bfe44><!--[-->`);
      ssrRenderList(__props.items, (item, i) => {
        _push(`<div class="${ssrRenderClass([{ open: unref(openIndex) === i }, "faq-item"])}" data-v-a67bfe44><button class="faq-question" data-v-a67bfe44><span data-v-a67bfe44>${ssrInterpolate(item.q)}</span>`);
        _push(ssrRenderComponent(unref(ChevronDown), {
          size: 20,
          class: "faq-icon"
        }, null, _parent));
        _push(`</button><div class="faq-answer-wrap" data-v-a67bfe44><div class="faq-answer" data-v-a67bfe44>${ssrInterpolate(item.a)}</div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/FaqAccordion.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a67bfe44"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=FaqAccordion-BbaBIlX9.js.map

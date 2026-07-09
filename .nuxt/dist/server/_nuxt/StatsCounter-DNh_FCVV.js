import { defineComponent, ref, mergeProps, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/hookable/dist/index.mjs";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatsCounter",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { emoji: "👨‍🎓", number: 1e3, suffix: "+", label: "Học viên" },
      { emoji: "🏆", number: 98, suffix: "%", label: "Đạt mục tiêu" },
      { emoji: "👨‍🏫", number: 8, suffix: "+", label: "Giảng viên" },
      { emoji: "📚", number: 20, suffix: "+", label: "Khóa học" },
      { emoji: "⭐", number: 4.8, suffix: "★", label: "Đánh giá" }
    ];
    const displayValues = ref(stats.map(() => 0));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "stats",
        class: "stats-section"
      }, _attrs))} data-v-8b9e83c7><div class="container" data-v-8b9e83c7><div class="stats-grid" data-v-8b9e83c7><!--[-->`);
      ssrRenderList(stats, (stat, i) => {
        _push(`<div class="stat-item reveal" style="${ssrRenderStyle({ transitionDelay: `${i * 100}ms` })}" data-v-8b9e83c7><div class="stat-icon" data-v-8b9e83c7>${ssrInterpolate(stat.emoji)}</div><div class="stat-number" data-v-8b9e83c7><span class="counter" data-v-8b9e83c7>${ssrInterpolate(displayValues.value[i])}</span>${ssrInterpolate(stat.suffix)}</div><div class="stat-label" data-v-8b9e83c7>${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/StatsCounter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b9e83c7"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=StatsCounter-DNh_FCVV.js.map

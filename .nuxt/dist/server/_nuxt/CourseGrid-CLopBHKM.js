import { a as __nuxt_component_0$1, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Clock, BookOpen, ArrowRight } from "@lucide/vue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CourseCard",
  __ssrInlineRender: true,
  props: {
    course: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "course-card" }, _attrs))} data-v-35d98fe6><div class="course-top-block" data-v-35d98fe6><div class="course-emoji-wrap" data-v-35d98fe6><span class="course-emoji" data-v-35d98fe6>${ssrInterpolate(__props.course.emoji)}</span></div><div class="course-badge" style="${ssrRenderStyle({ background: __props.course.color + "20", color: __props.course.color })}" data-v-35d98fe6>${ssrInterpolate(__props.course.level)}</div></div><div class="course-body" data-v-35d98fe6><h3 class="course-title" data-v-35d98fe6>${ssrInterpolate(__props.course.title)}</h3><p class="course-desc" data-v-35d98fe6>${ssrInterpolate(__props.course.desc)}</p><div class="course-meta" data-v-35d98fe6><div class="course-meta-item" data-v-35d98fe6>`);
      _push(ssrRenderComponent(unref(Clock), { size: 14 }, null, _parent));
      _push(`<span data-v-35d98fe6>${ssrInterpolate(__props.course.duration)}</span></div><div class="course-meta-item" data-v-35d98fe6>`);
      _push(ssrRenderComponent(unref(BookOpen), { size: 14 }, null, _parent));
      _push(`<span data-v-35d98fe6>${ssrInterpolate(__props.course.sessions)}</span></div></div><div class="course-footer" data-v-35d98fe6><div class="course-price" data-v-35d98fe6>${ssrInterpolate(__props.course.price)}</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/khoa-hoc/${__props.course.slug}`,
        class: "btn btn-primary course-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Xem chi tiết `);
            _push2(ssrRenderComponent(unref(ArrowRight), { size: 16 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Xem chi tiết "),
              createVNode(unref(ArrowRight), { size: 16 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/CourseCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-35d98fe6"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CourseGrid",
  __ssrInlineRender: true,
  setup(__props) {
    const featuredCourses = [
      {
        slug: "hsk-1",
        level: "HSK 1",
        title: "Khóa học HSK 1",
        desc: "Dành cho người mới bắt đầu làm quen với tiếng Trung.",
        duration: "2 tháng",
        sessions: "24 buổi",
        price: "2.800.000₫",
        color: "#4ECDC4",
        emoji: "🌱"
      },
      {
        slug: "hsk-2",
        level: "HSK 2",
        title: "Khóa học HSK 2",
        desc: "Mở rộng vốn từ và giao tiếp trong các tình huống hằng ngày.",
        duration: "2 tháng",
        sessions: "24 buổi",
        price: "2.800.000₫",
        color: "#45B7D1",
        emoji: "🌿"
      },
      {
        slug: "hsk-3",
        level: "HSK 3",
        title: "Khóa học HSK 3",
        desc: "Xây dựng nền tảng ngữ pháp và nâng cao khả năng giao tiếp.",
        duration: "3 tháng",
        sessions: "36 buổi",
        price: "3.500.000₫",
        color: "#3498db",
        emoji: "🌳"
      },
      {
        slug: "hsk-4",
        level: "HSK 4",
        title: "Khóa học HSK 4",
        desc: "Tăng khả năng sử dụng tiếng Trung trong học tập và công việc.",
        duration: "3 tháng",
        sessions: "36 buổi",
        price: "3.500.000₫",
        color: "#9b59b6",
        emoji: "🎓"
      },
      {
        slug: "business-chinese",
        level: "Thương mại",
        title: "Business Chinese",
        desc: "Dành cho người đi làm, tập trung giao tiếp thương mại, đàm phán, xuất nhập khẩu.",
        duration: "3 tháng",
        sessions: "36 buổi",
        price: "4.000.000₫",
        color: "#e67e22",
        emoji: "💼"
      },
      {
        slug: "giao-tiep",
        level: "Giao tiếp",
        title: "Tiếng Trung Giao tiếp",
        desc: "Chương trình chú trọng hoàn toàn vào phản xạ nói, phát âm chuẩn tự nhiên như người bản xứ.",
        duration: "2.5 tháng",
        sessions: "30 buổi",
        price: "2.800.000₫",
        color: "#e74c3c",
        emoji: "🗣️"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CourseCard = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "section courses-section-glass" }, _attrs))} data-v-2be3f604><div class="glass-bg-deco glass-deco-1" data-v-2be3f604></div><div class="glass-bg-deco glass-deco-2" data-v-2be3f604></div><div class="container relative-z" data-v-2be3f604><div class="section-header reveal" data-v-2be3f604><div class="badge" data-v-2be3f604>📚 Chương trình học</div><h2 class="section-title" data-v-2be3f604>Khóa học <span class="text-primary" data-v-2be3f604>nổi bật</span></h2><div class="divider" data-v-2be3f604></div><p class="section-subtitle" data-v-2be3f604> Từ người mới bắt đầu đến trình độ cao cấp — chúng tôi có khóa học phù hợp với mọi nhu cầu của bạn. </p></div><div class="courses-grid" data-v-2be3f604><!--[-->`);
      ssrRenderList(featuredCourses, (course, i) => {
        _push(ssrRenderComponent(_component_CourseCard, {
          key: course.slug,
          course,
          style: { transitionDelay: `${i * 60}ms` },
          class: "reveal"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/CourseGrid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2be3f604"]]);
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=CourseGrid-CLopBHKM.js.map

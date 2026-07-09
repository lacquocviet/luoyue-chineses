import { u as useRoute, a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_1 } from "./FaqAccordion-BbaBIlX9.js";
import { _ as __nuxt_component_1$1 } from "./ConsultationForm-MS54mwMU.js";
import { defineComponent, ref, computed, unref, withCtx, createTextVNode, useSSRContext } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { onBeforeRouteUpdate } from "vue-router";
import { u as useHead } from "./v3-B21PnTTm.js";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/hookable/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/unctx/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/h3/dist/index.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/defu/dist/defu.mjs";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ufo/dist/index.mjs";
import "@lucide/vue";
import "/Volumes/DATA/DEV/luoyue-chinese/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const coursesData = {
      "hsk-1": {
        level: "HSK 1",
        title: "Sơ cấp 1",
        chinese: "HSK一级",
        emoji: "🌱",
        color: "#4ECDC4",
        darkColor: "#2a9d8f",
        price: "2.800.000₫",
        duration: "2 tháng",
        sessions: 24,
        description: "Khóa học dành cho người mới bắt đầu, giúp học viên làm quen với tiếng Trung từ bảng phiên âm Pinyin, phát âm chuẩn, từ vựng và ngữ pháp cơ bản.",
        overview: "Khóa học dành cho người mới bắt đầu, giúp học viên làm quen với tiếng Trung từ bảng phiên âm Pinyin, phát âm chuẩn, từ vựng và ngữ pháp cơ bản.",
        targets: ["Người chưa từng học tiếng Trung", "Người muốn xây dựng nền tảng vững chắc", "Học sinh, sinh viên, người đi làm"],
        outcomes: ["Giao tiếp các tình huống đơn giản", "Đọc hiểu câu ngắn", "Tự giới thiệu bản thân", "Đạt trình độ HSK 1"],
        curriculum: [
          { title: "Pinyin và phát âm chuẩn", desc: "Làm quen hệ thống âm thanh tiếng Trung, 4 thanh điệu, cách đọc Pinyin" },
          { title: "150 từ vựng HSK 1", desc: "Học 150 từ vựng cơ bản theo chủ đề" },
          { title: "Ngữ pháp cơ bản", desc: "Nắm vững cấu trúc câu đơn giản trong tiếng Trung" },
          { title: "Hội thoại hằng ngày", desc: "Luyện hội thoại trong các tình huống giao tiếp hằng ngày" },
          { title: "Luyện nghe - nói - đọc - viết", desc: "Rèn luyện toàn diện 4 kỹ năng cơ bản" }
        ],
        faqs: [
          { q: "Không biết gì về tiếng Trung có học được không?", a: "Hoàn toàn được! HSK 1 được thiết kế cho người bắt đầu từ zero. Không cần nền tảng gì cả." },
          { q: "Học xong HSK 1 rồi có thể làm gì?", a: "Bạn có thể giao tiếp cơ bản với người Trung Quốc, đọc menu nhà hàng, biển hiệu đơn giản, thi chứng chỉ HSK 1 quốc tế." }
        ]
      },
      "hsk-2": {
        level: "HSK 2",
        title: "Sơ cấp 2",
        chinese: "HSK二级",
        emoji: "🌿",
        color: "#45B7D1",
        darkColor: "#2980b9",
        price: "2.800.000₫",
        duration: "2 tháng",
        sessions: 24,
        description: "Mở rộng vốn từ và khả năng giao tiếp, giúp học viên tự tin trao đổi trong cuộc sống hằng ngày.",
        overview: "Mở rộng vốn từ và khả năng giao tiếp, giúp học viên tự tin trao đổi trong cuộc sống hằng ngày.",
        targets: ["Đã hoàn thành HSK 1", "Có kiến thức nền tảng"],
        outcomes: ["Giao tiếp các chủ đề quen thuộc", "Đọc đoạn văn ngắn", "Luyện nghe tốt hơn ở tốc độ tự nhiên", "Thi đạt HSK 2"],
        curriculum: [
          { title: "300 từ vựng HSK 2", desc: "Mở rộng vốn từ lên 300 từ theo chủ đề" },
          { title: "Ngữ pháp nâng cao", desc: "Kết cấu câu phức tạp hơn, bổ trợ giao tiếp" },
          { title: "Hội thoại thực tế", desc: "Luyện hội thoại trong các tình huống thực tế hằng ngày" },
          { title: "Luyện nghe tốc độ tự nhiên", desc: "Nghe và phản xạ với tốc độ nói tự nhiên của người bản ngữ" },
          { title: "Luyện đề HSK", desc: "Làm quen với cấu trúc đề thi HSK 2" }
        ],
        faqs: [
          { q: "Học HSK 2 cần nền tảng gì?", a: "Bạn cần đã hoàn thành HSK 1 hoặc nắm được khoảng 150 từ vựng và ngữ pháp cơ bản." }
        ]
      },
      "hsk-3": {
        level: "HSK 3",
        title: "Trung cấp 1",
        chinese: "HSK三级",
        emoji: "🎯",
        color: "#2E86DE",
        darkColor: "#1B4F91",
        price: "3.500.000₫",
        duration: "3 tháng",
        sessions: 36,
        description: "Xây dựng khả năng sử dụng tiếng Trung độc lập trong học tập và công việc.",
        overview: "Xây dựng khả năng sử dụng tiếng Trung độc lập trong học tập và công việc.",
        targets: ["Đã học HSK 2"],
        outcomes: ["Giao tiếp khá lưu loát", "Đọc báo, bài viết đơn giản", "Viết đoạn văn theo chủ đề", "Đạt HSK 3"],
        curriculum: [
          { title: "600 từ vựng HSK 3", desc: "Học 600 từ vựng và mẫu câu trung cấp" },
          { title: "Mẫu câu phức", desc: "Sử dụng các mẫu câu phức tạp trong giao tiếp" },
          { title: "Đọc hiểu", desc: "Luyện kỹ năng đọc hiểu đoạn văn" },
          { title: "Viết đoạn văn", desc: "Luyện viết đoạn văn ngắn theo chủ đề" },
          { title: "Luyện đề HSK 3", desc: "Làm đề thi mô phỏng HSK 3 đầy đủ 4 kỹ năng" }
        ],
        faqs: [
          { q: "HSK 3 có dùng được để xin việc không?", a: "HSK 3 là mức tối thiểu cho nhiều vị trí cần tiếng Trung giao tiếp. Nhiều công ty xuất nhập khẩu yêu cầu HSK 3–4." }
        ]
      },
      "hsk-4": { level: "HSK 4", title: "Trung cấp 2", chinese: "HSK四级", emoji: "💼", color: "#1B4F91", darkColor: "#0f2d6b", price: "3.500.000₫", duration: "3 tháng", sessions: 36, description: "Nâng cao khả năng sử dụng tiếng Trung trong môi trường học tập và làm việc.", overview: "Nâng cao khả năng sử dụng tiếng Trung trong môi trường học tập và làm việc.", targets: ["Học viên đã có nền tảng HSK 3"], outcomes: ["Giao tiếp tự nhiên", "Đọc tài liệu thông dụng", "Viết luận và đọc hiểu nâng cao", "Đạt HSK 4"], curriculum: [
        { title: "1200 từ vựng HSK 4", desc: "Mở rộng vốn từ lên 1200 từ" },
        { title: "Ngữ pháp nâng cao", desc: "Cấu trúc ngữ pháp phức tạp trong văn nói và viết" },
        { title: "Viết luận", desc: "Luyện viết luận ngắn theo chủ đề" },
        { title: "Nghe hội thoại dài", desc: "Luyện nghe hội thoại dài với tốc độ tự nhiên" },
        { title: "Luyện đề chuyên sâu", desc: "Làm đề thi mô phỏng và phân tích lỗi sai" }
      ], faqs: [] },
      "hsk-5": { level: "HSK 5", title: "Cao cấp 1", chinese: "HSK五级", emoji: "📰", color: "#6C3483", darkColor: "#4A235A", price: "4.200.000₫", duration: "4 tháng", sessions: 48, description: "Khóa học dành cho học viên hướng tới học tập, làm việc hoặc định cư trong môi trường sử dụng tiếng Trung.", overview: "Khóa học dành cho học viên hướng tới học tập, làm việc hoặc định cư trong môi trường sử dụng tiếng Trung.", targets: ["Đã hoàn thành HSK 4"], outcomes: ["Đọc báo và tài liệu chuyên ngành", "Giao tiếp thành thạo", "Thuyết trình bằng tiếng Trung", "Đạt HSK 5"], curriculum: [
        { title: "2500 từ vựng HSK 5", desc: "Học 2500 từ vựng cao cấp" },
        { title: "Báo chí", desc: "Đọc và phân tích tin tức, báo chí Trung Quốc" },
        { title: "Văn học", desc: "Tiếp cận các tác phẩm văn học Trung Quốc" },
        { title: "Thuyết trình", desc: "Luyện kỹ năng thuyết trình bằng tiếng Trung" },
        { title: "Luyện đề HSK 5", desc: "Làm đề thi mô phỏng HSK 5" }
      ], faqs: [] },
      "hsk-6": { level: "HSK 6", title: "Cao cấp 2", chinese: "HSK六级", emoji: "🎓", color: "#922B21", darkColor: "#641E16", price: "5.000.000₫", duration: "5 tháng", sessions: 60, description: "Chương trình cao cấp giúp học viên sử dụng tiếng Trung gần như người bản ngữ trong học tập và công việc.", overview: "Chương trình cao cấp giúp học viên sử dụng tiếng Trung gần như người bản ngữ trong học tập và công việc.", targets: ["Học viên trình độ HSK 5"], outcomes: ["Sử dụng tiếng Trung thành thạo", "Đọc hiểu tài liệu học thuật", "Phân tích văn bản chuyên sâu", "Đạt HSK 6"], curriculum: [
        { title: "5000+ từ vựng HSK 6", desc: "Học 5000+ từ vựng cao cấp" },
        { title: "Phân tích văn bản", desc: "Phân tích chuyên sâu các văn bản phức tạp" },
        { title: "Viết học thuật", desc: "Luyện viết văn phong học thuật" },
        { title: "Thuyết trình chuyên sâu", desc: "Thuyết trình các chủ đề chuyên ngành" },
        { title: "Luyện đề HSK 6", desc: "Làm đề thi mô phỏng HSK 6" }
      ], faqs: [] },
      "giao-tiep": { level: "Giao tiếp", title: "Tiếng Trung giao tiếp", chinese: "口语交际", emoji: "💬", color: "#52b788", darkColor: "#2d6a4f", price: "2.800.000₫", duration: "2 tháng", sessions: 24, description: "Khóa học tập trung vào kỹ năng giao tiếp trong cuộc sống hằng ngày với phương pháp học thực hành, phản xạ và tình huống thực tế.", overview: "Khóa học tập trung vào kỹ năng giao tiếp trong cuộc sống hằng ngày với phương pháp học thực hành, phản xạ và tình huống thực tế.", targets: ["Người cần giao tiếp nhanh", "Người chuẩn bị du lịch", "Người làm việc với người Trung Quốc", "Người muốn luyện nói"], outcomes: ["Tự tin giao tiếp", "Phản xạ nhanh", "Phát âm chuẩn", "Ứng dụng ngay sau khóa học"], curriculum: [
        { title: "Chào hỏi & Làm quen", desc: "Chào hỏi, tự giới thiệu, hỏi thăm cơ bản" },
        { title: "Mua sắm & Di chuyển", desc: "Mua hàng, hỏi giá, đi lại, hỏi đường" },
        { title: "Ăn uống & Gọi món", desc: "Gọi món tại nhà hàng, miêu tả món ăn" },
        { title: "Công sở & Đặt phòng", desc: "Giao tiếp công sở, đặt phòng khách sạn" },
        { title: "Phản xạ hội thoại", desc: "Luyện phản xạ giao tiếp trong tình huống thực tế" }
      ], faqs: [] },
      "thieu-nhi": { level: "Thiếu nhi", title: "Tiếng Trung thiếu nhi", chinese: "少儿中文", emoji: "🎨", color: "#FF6B6B", darkColor: "#e74c3c", price: "2.500.000₫", duration: "3 tháng", sessions: 36, description: "Chương trình thiết kế dành riêng cho trẻ em với phương pháp học thông qua trò chơi, hình ảnh và hoạt động tương tác.", overview: "Chương trình thiết kế dành riêng cho trẻ em với phương pháp học thông qua trò chơi, hình ảnh và hoạt động tương tác.", targets: ["Trẻ từ 5–12 tuổi", "Phụ huynh muốn con tiếp cận ngoại ngữ sớm"], outcomes: ["Yêu thích tiếng Trung", "Phát âm chuẩn", "Tăng khả năng ghi nhớ", "Tự tin giao tiếp cơ bản"], curriculum: [
        { title: "Phát âm cơ bản", desc: "Làm quen với phát âm tiếng Trung qua hình ảnh và trò chơi" },
        { title: "Từ vựng theo chủ đề", desc: "Học từ vựng theo chủ đề: gia đình, động vật, màu sắc" },
        { title: "Bài hát & Truyện tranh", desc: "Học tiếng Trung qua bài hát thiếu nhi và truyện tranh" },
        { title: "Trò chơi ngôn ngữ", desc: "Tương tác qua các trò chơi giúp ghi nhớ từ vựng" },
        { title: "Giao tiếp đơn giản", desc: "Luyện giao tiếp cơ bản trong tình huống hằng ngày" }
      ], faqs: [] },
      "business-chinese": { level: "Business", title: "Business Chinese", chinese: "商务中文", emoji: "🤝", color: "#2E86DE", darkColor: "#1B4F91", price: "4.000.000₫", duration: "3 tháng", sessions: 36, description: "Khóa học dành cho người làm việc trong môi trường doanh nghiệp, tập trung vào giao tiếp, đàm phán và xử lý công việc bằng tiếng Trung.", overview: "Khóa học dành cho người làm việc trong môi trường doanh nghiệp, tập trung vào giao tiếp, đàm phán và xử lý công việc bằng tiếng Trung.", targets: ["Người đi làm", "Chủ doanh nghiệp", "Nhân viên xuất nhập khẩu", "Sales, Purchasing, Logistics", "Người làm việc với đối tác Trung Quốc"], outcomes: ["Giao tiếp chuyên nghiệp trong môi trường doanh nghiệp", "Tự tin làm việc với khách hàng và đối tác Trung Quốc", "Soạn email, báo giá và tài liệu thương mại bằng tiếng Trung", "Nâng cao lợi thế nghề nghiệp và cơ hội thăng tiến"], curriculum: [
        { title: "Email thương mại", desc: "Viết và đọc email thương mại chuyên nghiệp" },
        { title: "Họp trực tuyến", desc: "Kỹ năng tham gia và điều hành họp online bằng tiếng Trung" },
        { title: "Đàm phán & Báo giá", desc: "Đàm phán hợp đồng, báo giá và thương lượng" },
        { title: "Hợp đồng & Thuật ngữ kinh doanh", desc: "Đọc hiểu hợp đồng, thuật ngữ kinh doanh chuyên ngành" },
        { title: "Thuyết trình & Văn hóa doanh nghiệp", desc: "Thuyết trình chuyên nghiệp và văn hóa doanh nghiệp Trung Quốc" }
      ], faqs: [] }
    };
    const allData = { ...coursesData };
    const course = ref(null);
    function loadCourse(slug) {
      course.value = allData[slug] || null;
    }
    loadCourse(route.params.slug);
    onBeforeRouteUpdate((to) => {
      loadCourse(to.params.slug);
    });
    useHead({
      title: computed(() => course.value ? `${course.value.level} — ${course.value.title} | Luoyue Chinese` : "Khóa học | Luoyue Chinese"),
      meta: computed(() => course.value ? [{ name: "description", content: course.value.description }] : [])
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FaqAccordion = __nuxt_component_1;
      const _component_ConsultationForm = __nuxt_component_1$1;
      if (unref(course)) {
        _push(`<main${ssrRenderAttrs(_attrs)} data-v-4574ce3d><section class="course-hero" style="${ssrRenderStyle({ background: `linear-gradient(135deg, ${unref(course).darkColor}, ${unref(course).color})` })}" data-v-4574ce3d><div class="container" data-v-4574ce3d><nav class="breadcrumb" data-v-4574ce3d>`);
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
        _push(`<span data-v-4574ce3d>/</span>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Khóa học`);
            } else {
              return [
                createTextVNode("Khóa học")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<span data-v-4574ce3d>/</span><span data-v-4574ce3d>${ssrInterpolate(unref(course).level)}</span></nav><div class="course-hero-inner" data-v-4574ce3d><div data-v-4574ce3d><span class="course-hero-emoji" data-v-4574ce3d>${ssrInterpolate(unref(course).emoji)}</span><h1 class="course-hero-title" data-v-4574ce3d>${ssrInterpolate(unref(course).level)} — ${ssrInterpolate(unref(course).title)} <span class="course-hero-chinese chinese" data-v-4574ce3d>${ssrInterpolate(unref(course).chinese)}</span></h1><p class="course-hero-desc" data-v-4574ce3d>${ssrInterpolate(unref(course).description)}</p><div class="course-hero-meta" data-v-4574ce3d><span data-v-4574ce3d>⏱ ${ssrInterpolate(unref(course).duration)}</span><span data-v-4574ce3d>📚 ${ssrInterpolate(unref(course).sessions)} buổi</span><span data-v-4574ce3d>👥 Max 15 học viên</span><span data-v-4574ce3d>💻 Online + Offline</span></div></div><div class="course-hero-price-box" data-v-4574ce3d><div class="price-label" data-v-4574ce3d>Học phí</div><div class="price-amount" data-v-4574ce3d>${ssrInterpolate(unref(course).price)}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lien-he",
          class: "btn btn-accent"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Đăng ký ngay `);
            } else {
              return [
                createTextVNode(" Đăng ký ngay ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/lien-he",
          class: "btn btn-white",
          style: { "margin-top": "10px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Học thử miễn phí `);
            } else {
              return [
                createTextVNode(" Học thử miễn phí ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></section><section class="section" data-v-4574ce3d><div class="container course-content" data-v-4574ce3d><div class="course-main" data-v-4574ce3d><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Giới thiệu khóa học</h2><p data-v-4574ce3d>${ssrInterpolate(unref(course).overview)}</p></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Đối tượng phù hợp</h2><ul class="target-list" data-v-4574ce3d><!--[-->`);
        ssrRenderList(unref(course).targets, (t) => {
          _push(`<li data-v-4574ce3d>${ssrInterpolate(t)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Lộ trình học trong khóa</h2><div class="curriculum-list" data-v-4574ce3d><!--[-->`);
        ssrRenderList(unref(course).curriculum, (module, i) => {
          _push(`<div class="curriculum-item" data-v-4574ce3d><div class="curriculum-num" data-v-4574ce3d>${ssrInterpolate(i + 1)}</div><div data-v-4574ce3d><div class="curriculum-title" data-v-4574ce3d>${ssrInterpolate(module.title)}</div><div class="curriculum-desc" data-v-4574ce3d>${ssrInterpolate(module.desc)}</div></div></div>`);
        });
        _push(`<!--]--></div></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Mục tiêu đầu ra</h2><ul class="target-list" data-v-4574ce3d><!--[-->`);
        ssrRenderList(unref(course).outcomes, (outcome) => {
          _push(`<li data-v-4574ce3d>${ssrInterpolate(outcome)}</li>`);
        });
        _push(`<!--]--></ul></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Phương pháp giảng dạy</h2><ul class="target-list" data-v-4574ce3d><li data-v-4574ce3d>Học theo tình huống thực tế, dễ áp dụng ngay.</li><li data-v-4574ce3d>Thực hành giao tiếp thường xuyên trong mỗi buổi học.</li><li data-v-4574ce3d>Giáo viên sửa phát âm và phản xạ trực tiếp.</li><li data-v-4574ce3d>Kiểm tra định kỳ để theo dõi tiến bộ.</li><li data-v-4574ce3d>Kết hợp linh hoạt hình thức Online và Offline.</li></ul></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Thông tin khóa học</h2><div class="course-info-grid" data-v-4574ce3d><div class="course-info-item" data-v-4574ce3d><span data-v-4574ce3d>Thời lượng</span><strong data-v-4574ce3d>${ssrInterpolate(unref(course).duration)}</strong></div><div class="course-info-item" data-v-4574ce3d><span data-v-4574ce3d>Hình thức</span><strong data-v-4574ce3d>Online / Offline</strong></div><div class="course-info-item" data-v-4574ce3d><span data-v-4574ce3d>Sĩ số</span><strong data-v-4574ce3d>Nhóm nhỏ, tối đa 15 học viên</strong></div><div class="course-info-item" data-v-4574ce3d><span data-v-4574ce3d>Khai giảng</span><strong data-v-4574ce3d>Hàng tháng</strong></div><div class="course-info-item" data-v-4574ce3d><span data-v-4574ce3d>Giáo trình</span><strong data-v-4574ce3d>Giáo trình chuẩn</strong></div></div></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Quyền lợi học viên</h2><ul class="target-list" data-v-4574ce3d><li data-v-4574ce3d>Được cung cấp giáo trình và tài liệu học tập.</li><li data-v-4574ce3d>Được tham gia nhóm hỗ trợ học tập.</li><li data-v-4574ce3d>Được luyện tập và thi thử định kỳ.</li><li data-v-4574ce3d>Được tư vấn lộ trình học phù hợp với mục tiêu cá nhân.</li></ul></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Lộ trình học</h2><p class="roadmap-text" data-v-4574ce3d>HSK 1 → HSK 2 → HSK 3 → HSK 4 → HSK 5 → HSK 6</p></div><div class="content-block reveal" data-v-4574ce3d><h2 class="content-title" data-v-4574ce3d>Câu hỏi thường gặp</h2>`);
        _push(ssrRenderComponent(_component_FaqAccordion, {
          items: unref(course).faqs
        }, null, _parent));
        _push(`</div></div><aside class="course-sidebar" data-v-4574ce3d>`);
        _push(ssrRenderComponent(_component_ConsultationForm, {
          title: `Đăng ký khóa ${unref(course).level}`,
          subtitle: "Điền thông tin để nhận tư vấn miễn phí và lịch học phù hợp"
        }, null, _parent));
        _push(`</aside></div></section></main>`);
      } else {
        _push(`<main${ssrRenderAttrs(_attrs)} data-v-4574ce3d><section class="section" data-v-4574ce3d><div class="container" style="${ssrRenderStyle({ "text-align": "center", "padding": "120px 0" })}" data-v-4574ce3d><h1 style="${ssrRenderStyle({ "font-size": "2rem", "color": "var(--color-muted)" })}" data-v-4574ce3d>Không tìm thấy khóa học</h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/khoa-hoc",
          class: "btn btn-primary",
          style: { "margin-top": "24px" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Xem tất cả khóa học`);
            } else {
              return [
                createTextVNode("Xem tất cả khóa học")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/khoa-hoc/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4574ce3d"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-7fexfDbM.js.map

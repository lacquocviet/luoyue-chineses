import { shallowReactive, reactive, effectScope, getCurrentScope, hasInjectionContext, getCurrentInstance, inject, toRef, shallowRef, isReadonly, isRef, isShallow, isReactive, toRaw, defineComponent, h, resolveComponent, computed, unref, ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext, provide, Suspense, Fragment, defineAsyncComponent, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, createApp } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/vue/index.mjs";
import { $fetch } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ofetch/dist/node.mjs";
import { baseURL, publicAssetsURL } from "#internal/nuxt/paths";
import { createHooks } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/hookable/dist/index.mjs";
import { getContext, executeAsync } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/unctx/dist/index.mjs";
import { sanitizeStatusCode, createError as createError$1 } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/h3/dist/index.mjs";
import { START_LOCATION, createMemoryHistory, createRouter, RouterView } from "vue-router";
import { defu } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/defu/dist/defu.mjs";
import { hasProtocol, joinURL, parseURL, encodePath, decodePath, withQuery, isScriptProtocol, parseQuery, withTrailingSlash, withoutTrailingSlash } from "/Volumes/DATA/DEV/luoyue-chinese/node_modules/ufo/dist/index.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrRenderTeleport, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { ChevronDown, X, Menu, MapPin, Phone, Mail, Clock, BookOpen } from "@lucide/vue";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.8";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
import.meta.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const HTML_ATTR_UNSAFE_RE = /[&"'<>]/g;
const HTML_ATTR_ENCODE_MAP = {
  "&": "%26",
  '"': "%22",
  "'": "%27",
  "<": "%3C",
  ">": "%3E"
};
function encodeForHtmlAttr(value) {
  return value.replace(HTML_ATTR_UNSAFE_RE, (c) => HTML_ATTR_ENCODE_MAP[c]);
}
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedHeader = encodeURL(location2, isExternalHost);
        const encodedLoc = encodeForHtmlAttr(encodedHeader);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    const pathname = url.pathname.replace(/^\/{2,}/, "/");
    return pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function freezeHead(head) {
  const realPush = head.push;
  head.push = () => ({ dispose: () => {
  }, patch: () => {
  }, _poll: () => {
  } });
  return () => {
    head.push = realPush;
  };
}
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    if (nuxtApp.ssrContext.islandContext) {
      const unfreeze = freezeHead(head);
      nuxtApp.hooks.hookOnce("app:created", unfreeze);
    }
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const matcher = (m, p) => {
  return [];
};
const _routeRulesMatcher = (path) => defu({}, ...matcher("", typeof path === "string" ? path.toLowerCase() : path).map((r) => r.data).reverse());
const routeRulesMatcher = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher(path.toLowerCase());
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
const _routes = [
  {
    name: "index",
    path: "/",
    component: () => import("./_nuxt/index-DuPqQ2wq.js")
  },
  {
    name: "hoi-dap",
    path: "/hoi-dap",
    component: () => import("./_nuxt/hoi-dap-D4QyGDOO.js")
  },
  {
    name: "lien-he",
    path: "/lien-he",
    component: () => import("./_nuxt/lien-he-Ct8-W-Sq.js")
  },
  {
    name: "hoc-vien",
    path: "/hoc-vien",
    component: () => import("./_nuxt/hoc-vien-Bwo59iCB.js")
  },
  {
    name: "tai-lieu",
    path: "/tai-lieu",
    component: () => import("./_nuxt/tai-lieu-DOFjjRIr.js")
  },
  {
    name: "blog",
    path: "/blog",
    component: () => import("./_nuxt/index-CMmZCIDF.js")
  },
  {
    name: "gioi-thieu",
    path: "/gioi-thieu",
    component: () => import("./_nuxt/gioi-thieu-Rmsl19eX.js")
  },
  {
    name: "blog-slug",
    path: "/blog/:slug()",
    component: () => import("./_nuxt/_slug_-Dc-sf5zp.js")
  },
  {
    name: "lo-trinh-hoc",
    path: "/lo-trinh-hoc",
    component: () => import("./_nuxt/lo-trinh-hoc-CXYUXNT_.js")
  },
  {
    name: "khoa-hoc",
    path: "/khoa-hoc",
    component: () => import("./_nuxt/index-D7hh5HUg.js")
  },
  {
    name: "khoa-hoc-slug",
    path: "/khoa-hoc/:slug()",
    component: () => import("./_nuxt/_slug_-7fexfDbM.js")
  },
  {
    name: "lich-khai-giang",
    path: "/lich-khai-giang",
    component: () => import("./_nuxt/lich-khai-giang-BUB7NTfe.js")
  },
  {
    name: "giang-vien",
    path: "/giang-vien",
    component: () => import("./_nuxt/index-Glwxx-1q.js")
  },
  {
    name: "giang-vien-slug",
    path: "/giang-vien/:slug()",
    component: () => import("./_nuxt/_slug_-BehquScn.js")
  }
];
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    if (from === START_LOCATION) {
      return _calculatePosition(to, from, savedPosition, hashScrollBehaviour);
    }
    return new Promise((resolve) => {
      const doScroll = () => {
        requestAnimationFrame(() => resolve(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      };
      nuxtApp.hooks.hookOnce("page:loading:end", () => {
        const transitionPromise = nuxtApp["~transitionPromise"];
        if (transitionPromise) {
          transitionPromise.then(doScroll);
        } else {
          doScroll();
        }
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isChangingPage(to, from) ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
Object.assign(/* @__PURE__ */ Object.create(null), {});
const pageIslandRoutes = Object.assign(/* @__PURE__ */ Object.create(null), {});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      const lastTo = to.matched.at(-1)?.components?.default;
      const lastFrom = from.matched.at(-1)?.components?.default;
      if (lastTo === lastFrom) {
        syncCurrentRoute();
        return;
      }
      if (to.matched.length < from.matched.length && to.matched.every((m, i) => m.components?.default === from.matched[i]?.components?.default)) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const error = /* @__PURE__ */ useError();
    const isServerPage = nuxtApp.ssrContext?.islandContext?.name?.startsWith("page_");
    if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    const hasDeferredRoute = false;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext && !isServerPage) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext || isServerPage) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    if (isServerPage) {
      router.beforeResolve((to) => {
        const expected = pageIslandRoutes[nuxtApp.ssrContext.islandContext.name];
        const actual = to.matched.find((m) => m.components?.default?.__nuxt_island)?.components?.default;
        if (!expected || expected !== actual?.__nuxt_island) {
          nuxtApp.ssrContext["~renderResponse"] = {
            statusCode: 400,
            statusMessage: "Invalid island request path"
          };
          return false;
        }
      });
    }
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0 && !error.value) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        if (hasDeferredRoute) ;
        else {
          await router.replace({
            ...resolvedInitialRoute,
            force: true
          });
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4
];
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
function sanitizeExternalHref(value) {
  let candidate = value.replace(/[\u0000-\u001f\s]+/g, "");
  while (candidate.toLowerCase().startsWith("view-source:")) {
    candidate = candidate.slice("view-source:".length);
  }
  const colon = candidate.indexOf(":");
  if (colon > 0 && isScriptProtocol(candidate.slice(0, colon + 1))) {
    return null;
  }
  return value;
}
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function isHashLinkWithoutHashMode(link) {
    return typeof link === "string" && link.startsWith("#");
  }
  function resolveTrailingSlashBehavior(to, resolve, trailingSlash) {
    const effectiveTrailingSlash = trailingSlash ?? options.trailingSlash;
    if (!to || effectiveTrailingSlash !== "append" && effectiveTrailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, effectiveTrailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, effectiveTrailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    const router = useRouter();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const hasTarget = computed(() => !!unref(props.target) && unref(props.target) !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (unref(props.external)) {
        return true;
      }
      const path = unref(props.to) || unref(props.href) || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = unref(props.to) || unref(props.href) || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve, unref(props.trailingSlash));
    });
    const link = isExternal.value ? void 0 : useBuiltinLink?.({ ...props, to, viewTransition: unref(props.viewTransition) });
    const href = computed(() => {
      const effectiveTrailingSlash = unref(props.trailingSlash) ?? options.trailingSlash;
      if (!to.value || isAbsoluteUrl.value || isHashLinkWithoutHashMode(to.value)) {
        const raw = to.value;
        return typeof raw === "string" ? sanitizeExternalHref(raw) : raw;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        const safe = typeof href2 === "string" ? sanitizeExternalHref(href2) : href2;
        return safe === null ? null : applyTrailingSlashBehavior(safe, effectiveTrailingSlash);
      }
      if (typeof to.value === "object") {
        return router.resolve(to.value)?.href ?? null;
      }
      return applyTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), effectiveTrailingSlash);
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: link?.isActive ?? computed(() => to.value === router.currentRoute.value.path),
      isExactActive: link?.isExactActive ?? computed(() => to.value === router.currentRoute.value.path),
      route: link?.route ?? computed(() => router.resolve(to.value)),
      async navigate(_e) {
        if (href.value === null) {
          return;
        }
        await navigateTo(href.value, { replace: unref(props.replace), external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Behavior
      trailingSlash: {
        type: String,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      shallowRef(false);
      const el = void 0;
      const elRef = void 0;
      async function prefetch(nuxtApp = useNuxtApp()) {
        {
          return;
        }
      }
      return () => {
        if (!isExternal.value && !hasTarget.value && !isHashLinkWithoutHashMode(to.value)) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", {
          ref: el,
          href: href.value || null,
          // converts `""` to `null` to prevent the attribute from being added as empty (`href=""`)
          rel,
          target,
          onClick: async (event) => {
            if (isExternal.value || hasTarget.value) {
              return;
            }
            event.preventDefault();
            try {
              const encodedHref = encodeRoutePath(href.value ?? "");
              return await (props.replace ? router.replace(encodedHref) : router.push(encodedHref));
            } finally {
            }
          }
        }, slots.default?.());
      };
    }
  });
}
const __nuxt_component_0$1 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
const _imports_0$1 = publicAssetsURL("/logo.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isScrolled = ref(false);
    const menuOpen = ref(false);
    const courseDropdownOpen = ref(false);
    const mobileCourseOpen = ref(false);
    let dropdownCloseTimer = null;
    function closeCourseDropdown() {
      if (dropdownCloseTimer) clearTimeout(dropdownCloseTimer);
      dropdownCloseTimer = setTimeout(() => {
        courseDropdownOpen.value = false;
      }, 120);
    }
    function handleCourseClick() {
      if (dropdownCloseTimer) clearTimeout(dropdownCloseTimer);
      courseDropdownOpen.value = false;
      menuOpen.value = false;
      mobileCourseOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["navbar", { scrolled: isScrolled.value, "menu-open": menuOpen.value }]
      }, _attrs))} data-v-4049cc79><div class="container navbar-inner" data-v-4049cc79>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "navbar-logo",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Luoyue Chinese" class="logo-img" data-v-4049cc79${_scopeId}><div class="logo-text" data-v-4049cc79${_scopeId}><span class="logo-name" data-v-4049cc79${_scopeId}>Luoyue Chinese</span><span class="logo-chinese chinese" data-v-4049cc79${_scopeId}>雒越中文</span></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Luoyue Chinese",
                class: "logo-img"
              }),
              createVNode("div", { class: "logo-text" }, [
                createVNode("span", { class: "logo-name" }, "Luoyue Chinese"),
                createVNode("span", { class: "logo-chinese chinese" }, "雒越中文")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="navbar-nav" data-v-4049cc79>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-link"
      }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/gioi-thieu",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Giới thiệu`);
          } else {
            return [
              createTextVNode("Giới thiệu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="${ssrRenderClass([{ open: courseDropdownOpen.value }, "nav-dropdown"])}" data-v-4049cc79>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc",
        class: "nav-link",
        onClick: closeCourseDropdown
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Khóa học `);
            _push2(ssrRenderComponent(unref(ChevronDown), { size: 16 }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Khóa học "),
              createVNode(unref(ChevronDown), { size: 16 })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="dropdown-menu" data-v-4049cc79>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-1",
        class: "dropdown-item",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="chinese" data-v-4049cc79${_scopeId}>HSK1</span> — Sơ cấp 1 `);
          } else {
            return [
              createVNode("span", { class: "chinese" }, "HSK1"),
              createTextVNode(" — Sơ cấp 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-2",
        class: "dropdown-item",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="chinese" data-v-4049cc79${_scopeId}>HSK2</span> — Sơ cấp 2 `);
          } else {
            return [
              createVNode("span", { class: "chinese" }, "HSK2"),
              createTextVNode(" — Sơ cấp 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-3",
        class: "dropdown-item",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="chinese" data-v-4049cc79${_scopeId}>HSK3</span> — Trung cấp 1 `);
          } else {
            return [
              createVNode("span", { class: "chinese" }, "HSK3"),
              createTextVNode(" — Trung cấp 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-4",
        class: "dropdown-item",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="chinese" data-v-4049cc79${_scopeId}>HSK4</span> — Trung cấp 2 `);
          } else {
            return [
              createVNode("span", { class: "chinese" }, "HSK4"),
              createTextVNode(" — Trung cấp 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-5",
        class: "dropdown-item",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="chinese" data-v-4049cc79${_scopeId}>HSK5</span> — Cao cấp 1 `);
          } else {
            return [
              createVNode("span", { class: "chinese" }, "HSK5"),
              createTextVNode(" — Cao cấp 1 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-6",
        class: "dropdown-item",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="chinese" data-v-4049cc79${_scopeId}>HSK6</span> — Cao cấp 2 `);
          } else {
            return [
              createVNode("span", { class: "chinese" }, "HSK6"),
              createTextVNode(" — Cao cấp 2 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/giao-tiep",
        class: "dropdown-item dropdown-accent",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 💬 Giao tiếp thực tế `);
          } else {
            return [
              createTextVNode(" 💬 Giao tiếp thực tế ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/thieu-nhi",
        class: "dropdown-item dropdown-accent",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 🧒 Thiếu nhi `);
          } else {
            return [
              createTextVNode(" 🧒 Thiếu nhi ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/business-chinese",
        class: "dropdown-item dropdown-accent",
        onClick: handleCourseClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 💼 Business Chinese `);
          } else {
            return [
              createTextVNode(" 💼 Business Chinese ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lo-trinh-hoc",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lộ trình`);
          } else {
            return [
              createTextVNode("Lộ trình")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "nav-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Liên hệ`);
          } else {
            return [
              createTextVNode("Liên hệ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="navbar-actions" data-v-4049cc79>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "btn btn-primary nav-cta"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đăng ký tư vấn `);
          } else {
            return [
              createTextVNode(" Đăng ký tư vấn ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="hamburger"${ssrRenderAttr("aria-label", menuOpen.value ? "Đóng menu" : "Mở menu")} data-v-4049cc79>`);
      if (menuOpen.value) {
        _push(ssrRenderComponent(unref(X), { size: 24 }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Menu), { size: 24 }, null, _parent));
      }
      _push(`</button></div></div><div class="mobile-menu" style="${ssrRenderStyle(menuOpen.value ? null : { display: "none" })}" data-v-4049cc79>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/gioi-thieu",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Giới thiệu`);
          } else {
            return [
              createTextVNode("Giới thiệu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mobile-dropdown" data-v-4049cc79><button class="mobile-link mobile-dropdown-trigger" data-v-4049cc79> Khóa học `);
      _push(ssrRenderComponent(unref(ChevronDown), {
        size: 16,
        class: { rotated: mobileCourseOpen.value }
      }, null, _parent));
      _push(`</button><div class="mobile-dropdown-menu" style="${ssrRenderStyle(mobileCourseOpen.value ? null : { display: "none" })}" data-v-4049cc79>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-1",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK1 — Sơ cấp 1`);
          } else {
            return [
              createTextVNode("HSK1 — Sơ cấp 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-2",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK2 — Sơ cấp 2`);
          } else {
            return [
              createTextVNode("HSK2 — Sơ cấp 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-3",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK3 — Trung cấp 1`);
          } else {
            return [
              createTextVNode("HSK3 — Trung cấp 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-4",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK4 — Trung cấp 2`);
          } else {
            return [
              createTextVNode("HSK4 — Trung cấp 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-5",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK5 — Cao cấp 1`);
          } else {
            return [
              createTextVNode("HSK5 — Cao cấp 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/hsk-6",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK6 — Cao cấp 2`);
          } else {
            return [
              createTextVNode("HSK6 — Cao cấp 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/giao-tiep",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`💬 Giao tiếp thực tế`);
          } else {
            return [
              createTextVNode("💬 Giao tiếp thực tế")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/thieu-nhi",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`🧒 Thiếu nhi`);
          } else {
            return [
              createTextVNode("🧒 Thiếu nhi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/khoa-hoc/business-chinese",
        class: "mobile-dropdown-item",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`💼 Business Chinese`);
          } else {
            return [
              createTextVNode("💼 Business Chinese")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lo-trinh-hoc",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lộ trình học`);
          } else {
            return [
              createTextVNode("Lộ trình học")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/hoc-vien",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Học viên`);
          } else {
            return [
              createTextVNode("Học viên")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tai-lieu",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tài liệu miễn phí`);
          } else {
            return [
              createTextVNode("Tài liệu miễn phí")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/hoi-dap",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Hỏi đáp`);
          } else {
            return [
              createTextVNode("Hỏi đáp")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "mobile-link",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Liên hệ`);
          } else {
            return [
              createTextVNode("Liên hệ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "btn btn-primary mobile-cta",
        onClick: ($event) => menuOpen.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Đăng ký tư vấn miễn phí `);
          } else {
            return [
              createTextVNode(" Đăng ký tư vấn miễn phí ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Navbar.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-4049cc79"]]);
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-8eacbd3d><div class="container" data-v-8eacbd3d><div class="footer-grid" data-v-8eacbd3d><div class="footer-brand" data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "footer-logo"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="Luoyue Chinese" class="footer-logo-img" data-v-8eacbd3d${_scopeId}><div data-v-8eacbd3d${_scopeId}><div class="footer-logo-name" data-v-8eacbd3d${_scopeId}>Luoyue Chinese</div><div class="footer-logo-chinese chinese" data-v-8eacbd3d${_scopeId}>雒越中文</div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "Luoyue Chinese",
                class: "footer-logo-img"
              }),
              createVNode("div", null, [
                createVNode("div", { class: "footer-logo-name" }, "Luoyue Chinese"),
                createVNode("div", { class: "footer-logo-chinese chinese" }, "雒越中文")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="footer-tagline" data-v-8eacbd3d> Chạm vào ánh trăng tri thức —<br data-v-8eacbd3d>Chinh phục tiếng Trung </p><div class="footer-socials" data-v-8eacbd3d><a href="https://www.facebook.com/lacquocviet?locale=vi_VN" target="_blank" rel="noopener" class="social-btn" aria-label="Facebook" data-v-8eacbd3d><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-v-8eacbd3d><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" data-v-8eacbd3d></path></svg></a><a href="https://www.tiktok.com/@lacquocviet" target="_blank" rel="noopener" class="social-btn" aria-label="TikTok" data-v-8eacbd3d><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-v-8eacbd3d><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.94a8.19 8.19 0 004.79 1.53V7.02a4.85 4.85 0 01-1.02-.33z" data-v-8eacbd3d></path></svg></a><a href="https://www.youtube.com/@AudioHay-1008" target="_blank" rel="noopener" class="social-btn" aria-label="YouTube" data-v-8eacbd3d><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" data-v-8eacbd3d><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" data-v-8eacbd3d></path></svg></a></div></div><div class="footer-col" data-v-8eacbd3d><h3 class="footer-heading" data-v-8eacbd3d>Khóa học</h3><ul class="footer-links" data-v-8eacbd3d><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/hsk-1" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK 1 — Sơ cấp 1`);
          } else {
            return [
              createTextVNode("HSK 1 — Sơ cấp 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/hsk-2" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK 2 — Sơ cấp 2`);
          } else {
            return [
              createTextVNode("HSK 2 — Sơ cấp 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/hsk-3" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK 3 — Trung cấp 1`);
          } else {
            return [
              createTextVNode("HSK 3 — Trung cấp 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/hsk-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK 4 — Trung cấp 2`);
          } else {
            return [
              createTextVNode("HSK 4 — Trung cấp 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/hsk-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK 5 — Cao cấp 1`);
          } else {
            return [
              createTextVNode("HSK 5 — Cao cấp 1")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/hsk-6" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`HSK 6 — Cao cấp 2`);
          } else {
            return [
              createTextVNode("HSK 6 — Cao cấp 2")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/giao-tiep" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Giao tiếp`);
          } else {
            return [
              createTextVNode("Giao tiếp")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/khoa-hoc/thieu-nhi" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Thiếu nhi`);
          } else {
            return [
              createTextVNode("Thiếu nhi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="footer-col" data-v-8eacbd3d><h3 class="footer-heading" data-v-8eacbd3d>Thông tin</h3><ul class="footer-links" data-v-8eacbd3d><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/gioi-thieu" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Giới thiệu`);
          } else {
            return [
              createTextVNode("Giới thiệu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/hoc-vien" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Học viên nói gì`);
          } else {
            return [
              createTextVNode("Học viên nói gì")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/lo-trinh-hoc" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lộ trình học`);
          } else {
            return [
              createTextVNode("Lộ trình học")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/tai-lieu" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tài liệu miễn phí`);
          } else {
            return [
              createTextVNode("Tài liệu miễn phí")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/hoi-dap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Hỏi đáp`);
          } else {
            return [
              createTextVNode("Hỏi đáp")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="footer-col" data-v-8eacbd3d><h3 class="footer-heading" data-v-8eacbd3d>Liên hệ</h3><ul class="footer-contact" data-v-8eacbd3d><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(unref(MapPin), { size: 16 }, null, _parent));
      _push(`<span data-v-8eacbd3d>169 Đường Hoàng Mai, Phường Tương Mai, TP.Hà Nội</span></li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(unref(Phone), { size: 16 }, null, _parent));
      _push(`<a href="tel:0989664362" data-v-8eacbd3d>0989 664 362</a></li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(unref(Mail), { size: 16 }, null, _parent));
      _push(`<a href="mailto:lacquocviet.editor@gmail.com" data-v-8eacbd3d>lacquocviet.editor@gmail.com</a></li><li data-v-8eacbd3d>`);
      _push(ssrRenderComponent(unref(Clock), { size: 16 }, null, _parent));
      _push(`<span data-v-8eacbd3d>Thứ 2 – CN: 8:00 – 21:00</span></li></ul><div class="footer-map" data-v-8eacbd3d><iframe src="https://maps.google.com/maps?q=169%20%C4%91%C6%B0%E1%BB%9Dng%20ho%C3%A0ng%20mai%2C%20t%C6%B0%C6%A1ng%20mai%2C%20h%C3%A0%20n%E1%BB%99i&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" width="100%" height="150" style="${ssrRenderStyle({ "border": "0", "border-radius": "12px" })}" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Bản đồ Luoyue Chinese" data-v-8eacbd3d></iframe></div></div></div><div class="footer-bottom" data-v-8eacbd3d><p data-v-8eacbd3d>© 2025 Luoyue Chinese 雒越中文. Bảo lưu mọi quyền.</p><div class="footer-bottom-links" data-v-8eacbd3d><a href="#" data-v-8eacbd3d>Chính sách bảo mật</a><a href="#" data-v-8eacbd3d>Điều khoản sử dụng</a></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8eacbd3d"]]);
const _imports_0 = publicAssetsURL("/sources/logozalo.png");
const _imports_1 = publicAssetsURL("/sources/logomessenger.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CtaFloatingButton",
  __ssrInlineRender: true,
  setup(__props) {
    const showPopup = ref(false);
    const popupForm = reactive({ name: "", phone: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><div class="cta-floating" data-v-f3de2091><a href="https://zalo.me/0989664362" target="_blank" rel="noopener" class="float-btn zalo-btn" aria-label="Chat Zalo" data-v-f3de2091><img${ssrRenderAttr("src", _imports_0)} alt="Zalo" class="float-logo" data-v-f3de2091><span class="float-tooltip" data-v-f3de2091>Chat Zalo</span></a><a href="https://m.me/lacquocviet" target="_blank" rel="noopener" class="float-btn messenger-btn" aria-label="Chat Messenger" data-v-f3de2091><img${ssrRenderAttr("src", _imports_1)} alt="Messenger" class="float-logo" data-v-f3de2091><span class="float-tooltip" data-v-f3de2091>Chat Messenger</span></a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/lien-he",
        class: "float-btn register-btn",
        "aria-label": "Đăng ký tư vấn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(BookOpen), { size: 20 }, null, _parent2, _scopeId));
            _push2(`<span class="float-tooltip" data-v-f3de2091${_scopeId}>Đăng ký tư vấn</span>`);
          } else {
            return [
              createVNode(unref(BookOpen), { size: 20 }),
              createVNode("span", { class: "float-tooltip" }, "Đăng ký tư vấn")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(showPopup)) {
          _push2(`<div class="popup-overlay" data-v-f3de2091><div class="popup-card" data-v-f3de2091><button class="popup-close" data-v-f3de2091>`);
          _push2(ssrRenderComponent(unref(X), { size: 20 }, null, _parent));
          _push2(`</button><div class="popup-badge" data-v-f3de2091>🎁 Ưu đãi đặc biệt</div><h3 class="popup-title" data-v-f3de2091>Đăng ký học thử MIỄN PHÍ</h3><p class="popup-desc" data-v-f3de2091> Nhận ngay buổi học thử miễn phí + bộ tài liệu HSK độc quyền trị giá 500,000₫ </p><form class="popup-form" data-v-f3de2091><input${ssrRenderAttr("value", unref(popupForm).name)} type="text" placeholder="Họ và tên *" required data-v-f3de2091><input${ssrRenderAttr("value", unref(popupForm).phone)} type="tel" placeholder="Số điện thoại *" required data-v-f3de2091><button type="submit" class="btn btn-primary" data-v-f3de2091> Nhận ưu đãi ngay </button></form></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/CtaFloatingButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-f3de2091"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    const nuxtApp = useNuxtApp();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            entry2.target.classList.add("visible");
            observer.unobserve(entry2.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -5% 0px" }
    );
    function observeRevealElements() {
      const revealEls = (void 0).querySelectorAll(".reveal, .reveal-left, .reveal-right");
      requestAnimationFrame(() => {
        revealEls.forEach((el) => {
          if (el.getBoundingClientRect().top < (void 0).innerHeight * 0.95) {
            el.classList.add("visible");
            return;
          }
          observer.observe(el);
        });
      });
    }
    nuxtApp.hook("page:finish", () => {
      observeRevealElements();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      const _component_CtaFloatingButton = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_CtaFloatingButton, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-DtjDNqJ1.js"));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-BT58XGZE.js"));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup", []);
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    function invokeAppErrorHandler(err, target, info) {
      const errorHandler = nuxtApp.vueApp.config.errorHandler;
      if (errorHandler && !errorHandler.__nuxt_default) {
        try {
          errorHandler(err, target, info);
        } catch (handlerError) {
          console.error("[nuxt] Error in `app.config.errorHandler`", handlerError);
        }
      }
    }
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        invokeAppErrorHandler(err, target, info);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));
export {
  _export_sfc as _,
  __nuxt_component_0$1 as a,
  entry_default as default,
  tryUseNuxtApp as t,
  useRoute as u
};
//# sourceMappingURL=server.mjs.map

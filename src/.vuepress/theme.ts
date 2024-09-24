import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://tsaitou.org",

  author: {
    name: "Tsaitou7361",
    url: "https://inno.cloudns.ch"
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/favicon.ico",

  darkmode: "toggle",

  // 儲存庫設定
  // repo: "Tsaitou7361/tsaitou7361.github.io",

  docsDir: "src",

  // 頂部欄
  navbar,

  // 側邊欄
  sidebar,

  // 頁尾
  footer: "Tsaitou7361",
  displayFooter: false,

  // 作者的資訊
  blog: {
    name: "Tsaitou7361",
    avatar: "/logo.png",
    description: "一個熱愛開發的高中生",
    intro: "/about/",
    medias: {
      Discord: "/discord/",
      Email: "mailto:kyle.liu.0618@gmail.com",
      // Facebook: "https://example.com",
      GitHub: "https://github.com/tsaitou7361",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      Instagram: "https://instagram.com/tsaitou._.7361",
      // Threads: {
      //   icon: "/icons/threads.png",
      //   link: "https://threads.net/@tsaitou._.7361"
      // },
      // Reddit: "https://example.com",
      // Steam: "https://example.com",
      Twitter: "https://x.com/Tsaitou7361",
      Youtube: "https://youtube.com/@Tsaitou",
      // VuePressThemeHope: {
      //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
      //   link: "https://theme-hope.vuejs.press",
      // },
    },
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["7361"],
    },
  },

  // 多语言配置
  // metaLocales: {
  //   editLink: "在 GitHub 上編輯",
  // },

  // 這很吃效能
  // hotReload: true,

  // 在这里配置主题提供的插件
  plugins: {
    blog: true,

    // 使用前需要先安裝 @waline/client
    // demo
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    readingTime: false,

    searchPro: {
      locales: {
        "/": {
          placeholder: "搜尋",
          search: "搜尋"
        }
      }
    },

    // 此處開啟了很多不一定有用的功能，請自己取捨。
    mdEnhance: {
      alert: true,
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});

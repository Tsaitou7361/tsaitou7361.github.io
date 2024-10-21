import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-TW",
  title: "tsaitou.org",
  description: "Tsaitou7361 的個人網站",
  port: 80,

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  head: [
    [ "link", { rel: 'icon', href: '/favicon.ico' }],
    [ "meta", { name: 'theme-color', content: '#3ed2f3' }],
    [ "link", { rel: "preconnect", href: "https://fonts.googleapis.com" } ],
    [ "link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" } ],
    [ "link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Noto+Sans+Mono:wght@100..900&family=Noto+Sans+SC:wght@100..900&family=Noto+Sans+TC:wght@100..900&display=swap"
    }],
  ],

  locales: {
    "/": {
      lang: "zh-TW"
    }
  }
});

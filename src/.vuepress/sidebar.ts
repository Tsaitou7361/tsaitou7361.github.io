import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  {
    text: "首頁",
    link: "/",
    icon: "house",
    children: [
      {
        text: "關於我",
        link: "/about/",
        icon: "circle-info"
      }
    ]
  },
]);

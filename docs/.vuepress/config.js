import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { prismjsPlugin } from '@vuepress/plugin-prismjs'
import { resolve } from 'path'
export default defineUserConfig({
  lang: "en-US",
  base: "/docs/",
  dest: resolve(__dirname, '../../public/docs'),
  title: "Ziora CMS",
  description: "The Laravel & Vue.js Drag-and-Drop Pagebuilder",

  plugins: [
    prismjsPlugin({
      theme: 'one-light',
    }),
  ],
  
  theme: defaultTheme({
    logo: "../images/logo-icon.svg",
    navbar: [
      {
        text: "Home",
        link: "https://zioracms.com",
      },
       {
        text: "Get started",
        link: "/",
      },
      // "/",
    ],

    sidebar: [
      {
        text: "Get started",
        link: "/get-started",
      },
      {
        text: "Using the builder",
        link: "/builder",
      },
      {
        text: "Developer guide",
        link: "/developer",
      },
      {
        text: "Changelog",
        link: "/changelog",
      },
    ]
  }),

  bundler: viteBundler(),
});

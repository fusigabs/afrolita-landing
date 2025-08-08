export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/fusigabs/Herd/zioracms-landing/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Get Started"} }],
  ["/builder.html", { loader: () => import(/* webpackChunkName: "builder.html" */"/Users/fusigabs/Herd/zioracms-landing/docs/.vuepress/.temp/pages/builder.html.js"), meta: {"title":"Working with the site builder"} }],
  ["/changelog.html", { loader: () => import(/* webpackChunkName: "changelog.html" */"/Users/fusigabs/Herd/zioracms-landing/docs/.vuepress/.temp/pages/changelog.html.js"), meta: {"title":"Changelog"} }],
  ["/developer.html", { loader: () => import(/* webpackChunkName: "developer.html" */"/Users/fusigabs/Herd/zioracms-landing/docs/.vuepress/.temp/pages/developer.html.js"), meta: {"title":"Developing"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/fusigabs/Herd/zioracms-landing/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/roles-and-permissions.html", { loader: () => import(/* webpackChunkName: "roles-and-permissions.html" */"/Users/fusigabs/Herd/zioracms-landing/docs/.vuepress/.temp/pages/roles-and-permissions.html.js"), meta: {"title":"Roles and Permissions"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/fusigabs/Herd/zioracms-landing/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

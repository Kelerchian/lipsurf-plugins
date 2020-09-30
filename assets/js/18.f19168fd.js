(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"architecture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),e("blockquote",[e("p",[t._v("The fact that even the core LipSurf functionality is written as plugins should attest to the power of LipSurf's extensibility.")])]),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("LipSurf "),e("RouterLink",{attrs:{to:"/api-reference/plugin.html"}},[t._v("Plugins")]),t._v(" add global or site-level voice functionality.")],1),t._v(" "),e("p",[t._v("Every LipSurf "),e("RouterLink",{attrs:{to:"/api-reference/command.html"}},[t._v("Command")]),t._v(" must be a member of a "),e("RouterLink",{attrs:{to:"/api-reference/plugin.html"}},[t._v("Plugin")]),t._v(".")],1),t._v(" "),e("p",[t._v("Each website has its idiosyncrasies and many can benefit from custom commands. LipSurf functionality does not begin and end with the what it comes installed with. A subset of plugins come installed by default (plugins for the browser, Google, Reddit etc.) and additional plugins can be installed by users from within the extension. Plugins abstract the commands so they can stay separate from the extensions foundation — evolving fluidly with website updates.")]),t._v(" "),e("p",[t._v("Lastly, of course plugins "),e("a",{attrs:{href:"https://github.com/lipsurf/plugins",target:"_blank",rel:"noopener noreferrer"}},[t._v("can be shared"),e("OutboundLink")],1),t._v(" easily with the community or kept private if desired.")]),t._v(" "),e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("ul",[e("li",[t._v("If you want to write power commands for a website you use, you can write a plugin for that.")]),t._v(" "),e("li",[t._v("If you want to use an internal web-based company tool with LipSurf, you can write a plugin for that.")]),t._v(" "),e("li",[t._v("If you find that annotations are broken on a certain website you frequent, you can submit a PR to upgrade just the Navigation plugin which is separate from the core codebase.")]),t._v(" "),e("li",[t._v("If you want to give users of your own site voice command functionality, you can write a plugin for your site.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("Plugins are usually for a specific site (such as the Reddit plugin for upvoting, going to subreddits, viewing comments etc.) but they can also be for a specific set of functionality — like making all LipSurf tags in kanji so you can save screen space and practice Japanese reading.")]),t._v(" "),e("p",[t._v('Plugins should aim to: "Do one thing, and do it well." ™')])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Plugins must meet a high minimum standard of quality before being accepted as community plugins for the general public.")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"anatomy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anatomy"}},[t._v("#")]),t._v(" Anatomy")]),t._v(" "),e("p",[t._v("Plugins are JavaScript objects that extend a "),e("RouterLink",{attrs:{to:"/api-reference/plugin.html#pluginbase"}},[t._v("PluginBase")]),t._v(" object and adhere to an "),e("RouterLink",{attrs:{to:"/api-reference/plugin.html"}},[e("code",[t._v("Plugin")])]),t._v(" contract. It is recommended to write in "),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1),t._v(" to have more confidence that your plugin is implemented correctly.")],1),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),e("p",[t._v("All relevant examples will be given in TypeScript.")])]),t._v(" "),e("p",[t._v("Here is an example of a simple, complete plugin:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="lipsurf-types/extension"/>')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" PluginBase"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" IPluginBase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IPluginBase "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" IPlugin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("PluginBase"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    niceName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Gmail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    match"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^https:\\/\\/mail\\.google\\.com/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    commands"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Compose Mail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        description"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Open the new email composition form in Gmail.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        global"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        match"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compose mail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'write new mail'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("pageFn")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            window"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://mail.google.com/mail/?view=cm&fs=1'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(this.webpackJsonpjokes=this.webpackJsonpjokes||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(4),s=n.n(i),r=(n(9),n(2)),a=(n(10),n(11),n(0)),j=function(e){var t=e.item,n=e.getJoke,c=e.setJoke;return Object(a.jsx)("button",{onClick:function(){n(t,c)},className:"random-category",children:t})},u=(n(13),function(e){var t=e.logo;return Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"menu",children:[Object(a.jsx)("img",{src:t,alt:"logo"}),Object(a.jsx)("div",{className:"logo-text",children:"Chuck Norris"})]})})}),h=(n(14),function(e){var t=e.joke;return Object(a.jsx)("div",{className:"block-joke",children:Object(a.jsx)("p",{children:t})})}),l=function(e,t){fetch("https://api.chucknorris.io/jokes/random?category=".concat(e)).then((function(e){return e.json()})).then((function(e){t(e.value)}))};var f=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),s=Object(r.a)(i,2),f=s[0],b=s[1],d=Object(c.useState)(""),O=Object(r.a)(d,2),k=O[0],m=O[1];return Object(c.useEffect)((function(){var e;e=m,fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){e(t.icon_url)})),function(e){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){e(t.value)}))}(o),function(e){fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(t){e(t)}))}(b)}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u,{logo:k}),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)("div",{className:"main-text",children:Object(a.jsx)("h1",{children:"Categories"})}),Object(a.jsx)("div",{className:"categories",children:f?f.map((function(e,t){return Object(a.jsx)(j,{getJoke:l,setJoke:o,item:e},t)})):""}),Object(a.jsx)("div",{className:"chuck-jokes",children:Object(a.jsx)(h,{joke:n})})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),o(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),b()}],[[15,1,2]]]);
//# sourceMappingURL=main.349c2e93.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),i=(n(13),n(1)),u=(n(15),function(e){var t=e.words,n=e.repeatTime,a=void 0===n?1e8:n,c=e.wordTime,r=void 0===c?700:c,u=e.time,s=o.a.useState(""),l=Object(i.a)(s,2),m=l[0],d=(l[1],o.a.useState("")),f=Object(i.a)(d,2),w=f[0],E=f[1],g=o.a.useCallback(function(e,t,n){t<e.length?(console.log(e.substring(0,t+1)),E(e.substring(0,t+1)),setTimeout(function(){g(e,t+1,n)},100)):"function"===typeof n&&setTimeout(n,r)},[r]),b=o.a.useCallback(function(e,t){void 0!==t[e]&&e<t[e].length&&g(t[e],0,function(){b(e+1,t)})},[g,a]);return o.a.useEffect(function(){setTimeout(function(){b(0,t)},u)},[b,t]),o.a.createElement("code",{className:"banner-text"},m,w,o.a.createElement("span",{className:"banner-cursor"}))}),s=function(){return o.a.createElement("div",{style:{padding:"10px"}},o.a.createElement(u,{words:["\u041f\u0440\u0438\u0432\u0435\u0442, \u041e\u043b\u0435\u0433!"]}),o.a.createElement(u,{words:["\u041d\u0430\u0434\u0435\u044e\u0441\u044c \u0442\u044b \u0432 \u043e\u0442\u043b\u0438\u0447\u043d\u043e\u043c"],time:2e3}),o.a.createElement(u,{words:["\u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0434\u0443\u0445\u0430!"],time:5e3}),o.a.createElement(u,{words:["\u0418 \u0441\u043a\u043e\u0440\u043e \u043f\u0435\u0440\u0435\u0439\u0434\u0435\u0448\u044c \u043a"],time:8e3}),o.a.createElement(u,{words:["\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u044d\u0442\u0430\u043f\u0443!"],time:11e3}),o.a.createElement(u,{words:["\u041e\u0431\u043d\u044f\u043b \u0438 \u043d\u0435 \u043f\u0440\u0438\u043f\u043e\u0434\u043d\u044f\u043b!"],time:15e3}))},l=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,18)).then(function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(s,null))),l()},4:function(e,t,n){e.exports=n(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.25b9297a.chunk.js.map
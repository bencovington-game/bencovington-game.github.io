(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{17:function(n,e,t){n.exports=t.p+"static/media/logo.ee7cd8ed.svg"},20:function(n,e,t){n.exports=t.p+"static/media/Monstralia.59a4e8d6.png"},26:function(n,e,t){n.exports=t(56)},46:function(n,e,t){},52:function(n,e,t){},55:function(n,e,t){n.exports=t.p+"static/media/background.88f5c281.svg"},56:function(n,e,t){"use strict";t.r(e);var i={};t.r(i),t.d(i,"register",(function(){return f})),t.d(i,"unregister",(function(){return g}));var o=t(0),r=t.n(o),a=t(4),c=t.n(a),l=t(16),s=t(12),u=t.n(s);t(17),t(46);var d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(n){if("serviceWorker"in navigator){if(new URL("/webpage",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/webpage","/service-worker.js");d?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):v(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):v(e,n)}))}}function v(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}function g(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}var p=t(2),h=t(18),m=t(19),b=t(25),w=t(24);function k(){var n=Object(p.a)(["\n            margin: 0px;\n            padding: 0px;\n            position: fixed;\n            left: 0;\n            top: 2vmin;\n            width: 100vw;\n            height: 10vmin;\n            /* top: 50%; */\n            /* left: calc(50% - 25%/2); */\n            /* background: red; */\n            display: flex;\n            justify-content: center;\n            vertical-align: middle;\n            /* transform: translate(-50%, -50%); */\n            & > li {\n                /* background: yellow; */\n                height: 10vmin;\n                width: 10vmin;\n                margin: 1vmin, 0px, 1, 0px;\n                /* top: 12.5%; */\n                position: relative;\n                display: inline-block;\n                /* display: inline-block; */\n                /* vertical-align: middle;   */\n            }\n            & > .slick-active{\n                /* top: 3.5%; */\n            }\n            & > .slick-active > ","{\n                /* left: -1.1vw; */\n                /* width: 100%; */\n                height: 10vmin;\n                top: 0vmin;\n                filter: opacity(1);\n            };\n        "]);return k=function(){return n},n}function x(){var n=Object(p.a)(["\n            display: inline-block;\n            background: white;\n            padding: 0px;\n            margin: 0px;\n            position: relative;\n            /* left: -.85vw; */\n            /* width: 80%; */\n            top: 1vmin;\n            height: 8vmin;\n            border-radius: 20%;\n            box-shadow: 0px 0px 1vmin var(--slate);\n            filter: grayscale(1) invert(.3) opacity(.8) brightness(1.5);\n            :hover{\n                /* width: 2.5vw; */\n                /* transform: translate(-50%, -50%); */\n                /* filter: grayscale(0) invert(0); */\n                filter: opacity(1);\n            };\n            /* border: solid black; */\n        "]);return x=function(){return n},n}function y(){var n=Object(p.a)(["\n            position: fixed;\n            height: 10%;\n            width: 5%;\n            top: 50%;\n            ::before {\n                font-size: 12vmin;\n                line-height: 15%;\n                position: fixed;\n                color: silver;\n                top: 50%;\n            };\n            &.slick-prev {\n                left: 1vmin;\n                ::before {\n                    left: 0;\n                }\n            };\n            &.slick-next {\n                right: 1vmin;\n                ::before {\n                    right: 0;\n                }\n            };\n            :hover::before {\n                opacity: 1;\n            };\n        "]);return y=function(){return n},n}function j(){var n=Object(p.a)([""]);return j=function(){return n},n}function O(){var n=Object(p.a)(["\n            top: calc(50% - 80vh/2);\n            left: calc(50% - 80vw/2);\n            position: absolute;\n            /* background: salmon; */\n            display: block;\n            height: 80vh;\n            width: 80vw;\n            padding: 0;\n        "]);return O=function(){return n},n}function E(){var n=Object(p.a)(["\n            *, *::before, *::after{\n                margin: 0px;\n                padding: 0px;\n                outline: none;\n            }\n            --slate: #333;\n        "]);return E=function(){return n},n}var S=function(n){Object(b.a)(t,n);var e=Object(w.a)(t);function t(){return Object(h.a)(this,t),e.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var n=l.a.div.attrs((function(n){return{}}))(E()),e=Object(l.a)(n)(O()),t=Object(l.a)(n)(j()),i=Object(l.a)(n)(y()),o=l.a.img(x()),a=l.a.ul(k(),o),c={appendDots:function(n){return r.a.createElement(a,null,n)},customPaging:function(n){return r.a.createElement(o,{src:T(n)})},accessibility:!0,slide:r.a.createElement(t,null),speed:750,slidesToShow:1,slidesToScroll:1,touchThreshold:10,focusOnSelect:!0,centerPadding:"0px",centerMode:!0,initialSlide:1,infinite:!0,dots:!0,dotsClass:"slick-dots",arrows:!0,prevArrow:r.a.createElement(i,null),nextArrow:r.a.createElement(i,null)};return r.a.createElement(e,null,r.a.createElement(u.a,c,P))}}]),t}(r.a.Component),W=t(20);function C(){var n=Object(p.a)(["\n    display: flex; \n    height: 100%;\n    /* border: solid black; */\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    font-size: 12vmin;\n    color: #555;\n"]);return C=function(){return n},n}function U(){var n=Object(p.a)(["\n    display: block;\n    /* height: 80vh; */\n    height: 80vh;\n    /* background: silver; */\n"]);return U=function(){return n},n}var A=["https://drive.google.com/uc?id=1geiV1riN3qDFYC35GbTL-GwaU7_hCsVb","https://drive.google.com/uc?id=15hsdngexVWnj4--NCo8sxP2mNjxUsaHs",t.n(W).a,"https://drive.google.com/uc?id=1OjAS9WPTfNU7MuUmkvynY2OXSxChMUkb","https://drive.google.com/uc?id=1znvxnh14Ck4xeOX7nLkUfk1dtZnSagdb"];function T(n){return A[n]}var M=l.a.div(U()),N=l.a.div(C()),P=["Bio","Home","Monstralia","RogueLike One","Suit Yourself"].map((function(n,e){return r.a.createElement(M,{"data-index":e,key:e},r.a.createElement(N,null,n))}));t(14),t(52),t(53),t(54),t(55);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),i.unregister()}},[[26,1,2]]]);
//# sourceMappingURL=main.5d410d88.chunk.js.map
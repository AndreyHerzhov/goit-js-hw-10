!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,p=Math.max,v=Math.min,y=function(){return s.Date.now()};function b(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=b(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=u.test(t);return f||c.test(t)?a(t.slice(2),f?2:8):r.test(t)?NaN:+t}t=function(n,t,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function m(t){var e=o,r=i;return o=i=void 0,f=t,u=n.apply(r,e)}function h(n){return f=n,c=setTimeout(w,t),l?m(n):u}function j(n){var e=n-a;return void 0===a||e>=t||e<0||s&&n-f>=r}function w(){var n=y();if(j(n))return O(n);c=setTimeout(w,function(n){var e=t-(n-a);return s?v(e,r-(n-f)):e}(n))}function O(n){return c=void 0,d&&o?m(n):(o=i=void 0,u)}function T(){var n=y(),e=j(n);if(o=arguments,i=this,a=n,e){if(void 0===c)return h(a);if(s)return c=setTimeout(w,t),m(a)}return void 0===c&&(c=setTimeout(w,t)),u}return t=g(t)||0,b(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(g(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),T.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},T.flush=function(){return void 0===c?u:O(y())},T};var m={input:document.querySelector("#search-box"),countryInfo:document.querySelector(".country-info"),list:document.querySelector(".country-list")};m.input.addEventListener("input",n(t)((function(n){(t=n.target.value,e="".concat("https://restcountries.com/v3.1","/name/").concat(t),fetch(e).then((function(n){return n.json()}))).then((function(n){if(!(n.length>1)){var t,e,o,i,r,u,c,a,f=(t=n[0],e=t.flags.svg,o=t.name.official,i=t.capital,r=t.population,u=t.languages,c=Object.values(u),a=i.join(""),' \n  <div class="card">\n\n      <div class="wrapper">\n          <img src="'.concat(e,'" alt="" class="flag" width=10px>\n          <h1 class="country">').concat(o,' </h1>\n      </div>\n      \n      <p class="capital">Capital: ').concat(a,'</p>\n      <p class="population">Population: ').concat(r,'</p>\n      <p class="language">Language: ').concat(c,"</p>\n  </div>\n   "));h(f),console.log(f)}}));var t,e}),300));var h=function(n){m.countryInfo.insertAdjacentHTML("beforeend",n)}}();
//# sourceMappingURL=index.ad450ac8.js.map

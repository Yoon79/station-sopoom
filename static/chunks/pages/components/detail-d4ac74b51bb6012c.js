(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{3222:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/detail",function(){return n(2606)}])},1551:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,o=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(t=n.next()).done)&&(o.push(t.value),!r||o.length!==r);l=!0);}catch(i){c=!0,a=i}finally{try{l||null==n.return||n.return()}finally{if(c)throw a}}return o}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var o,l=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1003),i=n(880),s=n(9246);var u={};function f(e,r,n,t){if(e&&c.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var p=function(e){var r,n=!1!==e.prefetch,t=i.useRouter(),o=l.default.useMemo((function(){var r=a(c.resolveHref(t,e.href,!0),2),n=r[0],o=r[1];return{href:n,as:e.as?c.resolveHref(t,e.as):o||n}}),[t,e.href,e.as]),p=o.href,d=o.as,h=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof h&&(h=l.default.createElement("a",null,h));var x=(r=l.default.Children.only(h))&&"object"===typeof r&&r.ref,j=a(s.useIntersection({rootMargin:"200px"}),2),w=j[0],_=j[1],b=l.default.useCallback((function(e){w(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,w]);l.default.useEffect((function(){var e=_&&n&&c.isLocalURL(p),r="undefined"!==typeof v?v:t&&t.locale,a=u[p+"%"+d+(r?"%"+r:"")];e&&!a&&f(t,p,d,{locale:r})}),[d,p,_,v,n,t]);var E={ref:b,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,o,l,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),r[a?"replace":"push"](n,t,{shallow:o,locale:i,scroll:l}))}(e,t,p,d,m,g,y,v)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(p)&&f(t,p,d,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var N="undefined"!==typeof v?v:t&&t.locale,L=t&&t.isLocaleDomain&&c.getDomainLocale(d,N,t&&t.locales,t&&t.domainLocales);E.href=L||c.addBasePath(c.addLocale(d,N,t&&t.defaultLocale))}return l.default.cloneElement(r,E)};r.default=p},2606:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return c}});var t=n(5893),a=n(5675),o=n(1664),l=[{name:"human_catnip_club hoody",imageSrc:"/hoodyA.png",href:"/pictures/hoodyA.png"},{name:"tuesday_jazz_club hoody",imageSrc:"/hoodyB.png",href:"/pictures/hoodyB.png"},{name:"santa_cat iPhone case",description:"",imageSrc:"/phonecase.png",href:"/pictures/phonecase.png"},{name:"2023 calendar A ver.",imageSrc:"/calendarA.jpg",href:"/pictures/calendarA.jpg"},{name:"2023 calendar B ver.",imageSrc:"/calendarB1.jpg",href:"/pictures/calendarB1.jpg"},{name:"2023 calendar C ver.",imageSrc:"/calendarB2.jpg",href:"/pictures/calendarB2.jpg"}];function c(){return(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 ",children:[(0,t.jsx)("h4",{className:"font-mono font-bold text-gray-800 text-xl",children:"Collections"}),(0,t.jsx)("div",{className:"mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6",children:l.map((function(e){return(0,t.jsxs)("div",{className:"group relative",children:[(0,t.jsx)("div",{className:"relative w-full h-80 rounded-lg cursor-pointer overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1",children:(0,t.jsx)(o.default,{href:e.href,children:(0,t.jsx)("a",{children:(0,t.jsx)(a.default,{src:e.imageSrc,alt:"",width:"700",height:"650"})})},e.name)}),(0,t.jsx)("div",{className:"mb-4 mt-2 ",children:(0,t.jsx)("span",{className:"font-mono text-justify text-sm italic text-gray-600",children:e.name})})]},e.name)}))})]})})})})}},1664:function(e,r,n){e.exports=n(1551)}},function(e){e.O(0,[675,774,888,179],(function(){return r=3222,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
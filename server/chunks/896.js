"use strict";
exports.id = 896;
exports.ids = [896];
exports.modules = {

/***/ 1896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1480);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Map({ latitude , longitude  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const mapScript = document.createElement("script");
        mapScript.async = true;
        mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
        // mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=c54994f9665b63d2088c1229128b9355&autoload=false`;
        document.head.appendChild(mapScript);
        const onLoadKakaoMap = ()=>{
            window.kakao.maps.load(()=>{
                const container = document.getElementById("map");
                const options = {
                    center: new window.kakao.maps.LatLng(latitude, longitude)
                };
                const map = new window.kakao.maps.Map(container, options);
                const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);
            });
        };
        mapScript.addEventListener("load", onLoadKakaoMap);
        return ()=>mapScript.removeEventListener("load", onLoadKakaoMap);
    }, [
        latitude,
        longitude
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MapContainer, {
        id: "map"
    });
}
const MapContainer = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  aspect-ratio: 320 / 220;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ })

};
;
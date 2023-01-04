"use strict";
exports.id = 606;
exports.ids = [606];
exports.modules = {

/***/ 2606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);



const callouts = [
    {
        name: "human_catnip_club hoody",
        imageSrc: "/hoodyA.png",
        href: "/pictures/hoodyA.png"
    },
    {
        name: "tuesday_jazz_club hoody",
        imageSrc: "/hoodyB.png",
        href: "/pictures/hoodyB.png"
    },
    {
        name: "santa_cat iPhone case",
        description: "",
        imageSrc: "/phonecase.png",
        href: "/pictures/phonecase.png"
    },
    {
        name: "2023 calendar A ver.",
        imageSrc: "/calendarA.jpg",
        href: "/pictures/calendarA.jpg"
    },
    {
        name: "2023 calendar B ver.",
        imageSrc: "/calendarB1.jpg",
        href: "/pictures/calendarB1.jpg"
    },
    {
        name: "2023 calendar C ver.",
        imageSrc: "/calendarB2.jpg",
        href: "/pictures/calendarB2.jpg"
    }, 
];
function Main() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "font-mono font-bold text-gray-800 text-xl",
                            children: "Collections"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6",
                            children: callouts.map((callout)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "group relative",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative w-full h-80 rounded-lg cursor-pointer overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                href: callout.href,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                        src: callout.imageSrc,
                                                        alt: "",
                                                        width: "700",
                                                        height: "650"
                                                    })
                                                })
                                            }, callout.name)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mb-4 mt-2 ",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "font-mono text-justify text-sm italic text-gray-600",
                                                children: callout.name
                                            })
                                        })
                                    ]
                                }, callout.name)
                            )
                        })
                    ]
                })
            })
        })
    });
};


/***/ })

};
;
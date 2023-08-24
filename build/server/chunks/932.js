exports.id = 932;
exports.ids = [932];
exports.modules = {

/***/ 8935:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9648))

/***/ }),

/***/ 5312:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9571, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 9648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_EventsLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/Hero.jsx
var Hero = __webpack_require__(4745);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(2307);
// EXTERNAL MODULE: ./components/Line.jsx
var Line = __webpack_require__(4269);
;// CONCATENATED MODULE: ./components/WindowDimension.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
const useWindowDimensions = ()=>{
    const [windowDimensions, setWindowDimensions] = (0,react_.useState)({
        width: undefined,
        height: undefined
    });
    (0,react_.useEffect)(()=>{
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowDimensions;
};
/* harmony default export */ const WindowDimension = (useWindowDimensions);

// EXTERNAL MODULE: ./components/ContactCard.jsx
var ContactCard = __webpack_require__(880);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/EventsLayout.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const EventsLayout = ({ primaryTitle, heroTitle, secondaryTitle, contentHeading, contentParagraph, imgSrc, contactHeader })=>{
    const [textFunction, setTextFunction] = (0,react_.useState)(addBreak());
    const { width } = WindowDimension();
    function addBreak(textValue) {
        const text = textValue ? textValue.replace(/\./g, ".<br/>") : contentHeading.replace(/\./g, ".<br/>");
        return {
            __html: text
        };
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero["default"], {
                primary: heroTitle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "font-primary gradient-text text-center lg:text-[30px] text-[22px]",
                        children: primaryTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "font-primary text-[#908d8b] text-center lg:text-[18px] italic text-[16px]",
                        children: secondaryTitle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Line/* default */.Z, {
                        style: "my-5"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "gradient flex lg:flex-row flex-col-reverse items-center justify-center gap-[2vw] py-[8vw] ",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mx-[8vw]",
                        children: [
                            width >= 768 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: `text-[50px] lg:text-left text-center font-primary text-white italic `,
                                dangerouslySetInnerHTML: textFunction
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                                className: "text-[40px] lg:text-left text-center font-primary text-white italic ",
                                children: [
                                    " ",
                                    contentHeading,
                                    " "
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "max-w-[450px]  text-white  ",
                                children: [
                                    " ",
                                    contentParagraph,
                                    " "
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: imgSrc,
                            className: "lg:max-w-[450px] max-w-[350px] ",
                            alt: "image",
                            width: 350,
                            height: 350
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `lg:text-[30px] text-[25px] text-center font-primary gradient-text mx-3 mt-[3vw] mb-[1vw] `,
                dangerouslySetInnerHTML: addBreak(contactHeader)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Line/* default */.Z, {
                style: "mb-5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactCard["default"], {})
        ]
    });
};
/* harmony default export */ const components_EventsLayout = (EventsLayout);


/***/ }),

/***/ 8664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`F:\Websites\Arch Event Next\complete-project\components\EventsLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;
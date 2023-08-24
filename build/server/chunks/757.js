exports.id = 757;
exports.ids = [757];
exports.modules = {

/***/ 5365:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23))

/***/ }),

/***/ 9397:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23))

/***/ }),

/***/ 4745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1061);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SocialIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1079);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4269);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2307);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



// import image from '/public/logo.png'





const Hero = ({ primary, secondary })=>{
    const wordsArray = [
        "Wedding",
        "Party",
        "Decor",
        "Birthday",
        "Events"
    ];
    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [fadeDirection, setFadeDirection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [player, setPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("opacity-0 z-[-100] transition-all");
    const [drop, setDrop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("hidden");
    function dropDown() {
        drop === "hidden" ? setDrop("flex") : setDrop("hidden");
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPlayer(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
            src: "/heroVideo.mp4",
            autoPlay: true,
            loop: true,
            muted: true,
            className: "absolute top-0 w-full h-[60vh] lg:h-[100vh]  object-cover z-[-10] brightness-50 "
        }));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const interval = setInterval(()=>{
            setFadeDirection(-1); // Start fading out
            setTimeout(()=>{
                setCurrentIndex((prevIndex)=>(prevIndex + 1) % wordsArray.length);
                setFadeDirection(1); // Start fading in
            }, 1000); // Wait for the fade-out transition to complete before changing the word
        }, 3000); // Total interval = fade-in time + fade-out time + transition time
        return ()=>clearInterval(interval);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "relative lg:min-h-[100vh] min-h-[60vh] mb-[4vw] ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: "flex  justify-between py-2 ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[5px] h-[5px]"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: "/logo.png",
                                width: 200,
                                height: 200,
                                alt: "Arch Events",
                                className: "cursor-pointer"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_7__/* .CgMenuRightAlt */ .Z8b, {
                            className: "my-5 cursor-pointer mr-3 text-[#908D8B]",
                            size: 25,
                            onClick: ()=>setMenu("opacity-1 z-[100] transition-all")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: `fixed top-0 left-0 bottom-0 right-0 w-[100vw] h-[100vh] ${menu} bg-white `,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "flex  justify-between py-2 ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[5px] h-[5px]"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: "/logo.png",
                                        width: 200,
                                        height: 200,
                                        alt: "Arch Events",
                                        className: "cursor-pointer"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_cg__WEBPACK_IMPORTED_MODULE_7__/* .CgMenuRightAlt */ .Z8b, {
                                    className: "my-5 cursor-pointer mr-7 text-[#2C94AD] ",
                                    size: 25,
                                    onClick: ()=>setMenu("opacity-0 z-[-100] transition-all")
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "flex items-center justify-around flex-col h-[80vh] ",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                                    className: "flex items-center justify-center flex-col ",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center justify-center sm:flex-row flex-col my-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/",
                                                    className: "sm:mx-8 text-[25px] my-4 gradient-text",
                                                    children: "Home"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-center justify-center relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            onClick: dropDown,
                                                            className: "sm:mx-8 cursor-pointer text-[25px] my-4 gradient-text",
                                                            children: "Services"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: `flex-col text-center absolute top-[8vh] w-[150px] p-2 rounded-lg hover: gradient text-white font-medium ${drop}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    href: "/wedding",
                                                                    className: "my-1 hover:bg-white rounded-md hover:text-[#2C94AD] transition-all",
                                                                    children: "Wedding"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    href: "/social-gathering",
                                                                    className: "my-1 hover:bg-white rounded-md hover:text-[#2C94AD] transition-all",
                                                                    children: "Social Gathering"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    href: "/corporates",
                                                                    className: "my-1 hover:bg-white rounded-md hover:text-[#2C94AD]  transition-all",
                                                                    children: " Corporates "
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/about",
                                                    className: "sm:mx-8 text-[25px] my-4 gradient-text",
                                                    children: "About"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/contact",
                                                    className: "sm:mx-8 text-[25px] my-4 gradient-text",
                                                    children: "Contact"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialIcons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            margin: "my-5"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Line__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                }),
                player,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: "flex flex-col items-center justify-around my-[15vw] ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-white text-[25px] sm:text-[27px] lg:text-[38px] font-primary ",
                                    children: [
                                        "  ",
                                        primary
                                    ]
                                }),
                                secondary === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: ` font-primary text-white text-[25px] sm:text-[27px] lg:text-[38px] italic fade-word ${fadeDirection === 1 ? "fade-in" : "fade-out"}`,
                                    children: wordsArray[currentIndex]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Line__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            style: "my-[5vh] md:my-[8vh] "
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 4269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Line = ({ style })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `h-[150px] w-[1px] bg-[#908d8b] mx-auto ${style}`
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Line);


/***/ }),

/***/ 1079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2307);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5816);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3500);





const SocialIcons = ({ margin })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `flex items-center justify-center ${margin}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineInstagram */ .Bpw, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineFacebook */ .Wjh, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineYoutube */ .RLq, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__/* .AiFillTwitterSquare */ .JMB, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__/* .FaTiktok */ .nTm, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIcons);


/***/ }),

/***/ 6577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(7633);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(1436);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(2215);
;// CONCATENATED MODULE: ./components/SocialIcons.jsx





const SocialIcons = ({ margin })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `flex items-center justify-center ${margin}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineInstagram */.Bpw, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineFacebook */.Wjh, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiOutlineYoutube */.RLq, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* AiFillTwitterSquare */.JMB, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaTiktok */.nTm, {
                size: 30,
                className: "mx-1 cursor-pointer text-[#2C94AD]"
            })
        ]
    });
};
/* harmony default export */ const components_SocialIcons = (SocialIcons);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Footer.jsx





const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "my-5 py-2 ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-around",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/logo.png",
                            width: 180,
                            height: 0,
                            alt: "image",
                            className: "w-[180px] "
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hidden md:flex items-center justify-center ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "mx-2 font-primary text-[#908d8b]",
                                    children: "HOME"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/social-gathering",
                                    className: "mx-2 font-primary text-[#908d8b]",
                                    children: "SERVICES"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    className: "mx-2 font-primary text-[#908d8b]",
                                    children: "ABOUT"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    className: "mx-2 font-primary text-[#908d8b]",
                                    children: "CONTACT"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_SocialIcons, {})
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "mx-10"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "text-[#908d8b] my-2 text-center ",
                    children: "All Rights Reserved. Arch Events 2023"
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./app/layout.js



const metadata = {
    title: "Arch Events",
    description: "Arch Events has a flair for providing customizable design, planning & production services that are Uniquely You, Uniquely Dubai."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    href: "https://db.onlinewebfonts.com/c/709edcea1f8e218d264c1a4dc0d36d0e?family=FreightBig+W03+Semibold",
                    rel: "stylesheet"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const loading = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-[100vw] h-[100vh] flex items-center justify-center ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            src: "/logo.png",
            width: 150,
            height: 150,
            className: "w-[150px] animate-pulse",
            alt: "image"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loading);


/***/ }),

/***/ 4998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/png","sizes":"424x424"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "icon.png")

    return [{
      ...imageData,
      url: imageUrl + "?9ce0b653a90d1b22",
    }]
  });

/***/ }),

/***/ 7633:
/***/ (() => {



/***/ }),

/***/ 2307:
/***/ (() => {



/***/ })

};
;
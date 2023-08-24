"use strict";
exports.id = 880;
exports.ids = [880];
exports.modules = {

/***/ 880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocialIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1079);
/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2307);
/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const ContactCard = ()=>{
    const [fname, setFName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lname, setLName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("block");
    const emailFunction = async ()=>{
        const requestBody = {
            fname: `${fname}`,
            lname: `${lname}`,
            email: `${email}`,
            phone: `${phone}`,
            description: `${description}`
        };
        const response = await fetch("https://eventsbyarch.ae/api/mail-me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        if (data.success === true) {
            setData(data);
            setTimeout(()=>{
                setStyle("hidden");
            }, 3000);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center flex-col justify-center sm:flex-row my-[5vw] relative ",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-[#BFE2DB]  h-[320px] w-[320px] sm:h-[450px] mx-[5rem] sm:w-[450px] rounded-full text-center gradient-border  z-[100] border-4 border-[#2C94AD] flex items-center flex-col justify-center relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: " font-primary text-[#005B71] font-bold text-[25px] ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: "GET IN TOUCH"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "my-5 text-[#005B71] text-[18px] font-regular ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Phone :  +971 56 493 9726 | +971 55 893 9726"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Email :  rachna@eventsbyarch.ae"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Address :  Al Quoz, Dubai, UAE"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialIcons__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        src: "/profile.png",
                        alt: "image",
                        fill: true,
                        className: "sm:w-[400px] overflow-hidden w-[200px] absolute top-[20%]  sm:top-[10%] left-[20%] sm:left-[10%] z-[-1] opacity-50 select-none  "
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center flex-col mx-[5rem] sm:bg-transparent bg-[#bfe2db] px-2 py-4 my-4 rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-[30px] sm:text-left text-center text-[#005B71]",
                        children: "DROP US A NOTE."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:block grid place-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3]  bg-transparent ",
                                placeholder: "First Name",
                                onChange: (e)=>{
                                    setFName(e.target.value);
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent ",
                                placeholder: "Last Name",
                                onChange: (e)=>{
                                    setLName(e.target.value);
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:block grid place-items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent",
                                placeholder: "Phone",
                                onChange: (e)=>{
                                    setPhone(e.target.value);
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                className: "outline-none border-b-[3px]  text-[#005B71] text-[18px] mx-1 border-[#74C3E3] bg-transparent",
                                placeholder: "Email",
                                onChange: (e)=>{
                                    setEmail(e.target.value);
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                        name: "content",
                        className: "outline-none border-b-[3px] text-[#005B71] text-[18px] mx-1 border-[#74C3E3]  bg-transparent",
                        cols: "30",
                        rows: "1",
                        onChange: (e)=>{
                            setDescription(e.target.value);
                        },
                        placeholder: "Send us a couple of line about your event!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "py-5 px-1 lg:px-auto ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onClick: emailFunction,
                            className: "border-b-[3px] cursor-pointer border-[#74C3E3] text-[#908d8b] ",
                            type: "submit",
                            value: " Send "
                        })
                    })
                ]
            }),
            data && data.success === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `fixed bottom-[200px] shadow-2xl left-[30vw] lg:left-[47%] gradient px-4 py-2 text-white rounded-md font-medium ${style}`,
                children: "Mail Sent Successfully!"
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactCard);


/***/ })

};
;
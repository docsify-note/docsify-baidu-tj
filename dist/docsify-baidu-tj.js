(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DocsifyBaiduTj"] = factory();
	else
		root["DocsifyBaiduTj"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/baidu-tj.js
function install (hook, vm) {
    hook.mounted(function () {
        if(!window.$docsify.baiduTjId){
            console.warn("[docsify-baidu-tj] baiduTjId not config")
            return ;
        }
        var id = window.$docsify.baiduTjId;
        var host = window.location.host;
        if(host.startsWith("localhost") || host.startsWith("127.0.0.1")){
            console.warn("[docsify-baidu-tj] local ip not collect")
            return ;
        }
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?"+id;
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        console.info(id)
        console.info("docsify-baidu-tj init success!")
    })
  }
;// CONCATENATED MODULE: ./src/index.js


if (!window.$docsify) {
  window.$docsify = {}
}

window.$docsify.plugins = (window.$docsify.plugins || []).concat(install)
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5qqEh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "54f1c6afa2a37aa4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3rz9v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadSocket", ()=>loadSocket);
parcelHelpers.export(exports, "mouseVisor", ()=>mouseVisor);
var _cookie = require("../cookie");
var _htmlElement = require("./htmlElement");
var _render = require("./render");
var _changeName = require("./changeName");
var _darkMode = require("./darkMode");
let socket;
let code;
function loadSocket() {
    code = (0, _cookie.getCookie)("code");
    socket = new WebSocket(`wss://edu.strada.one/websockets?${code}`);
}
loadSocket();
socket.onopen = function() {
    if (!code) {
        (0, _htmlElement.htmlElement).modalAuth.classList.add("active");
        clearCookie();
    } else {
        fetch("https://edu.strada.one/api/messages/", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${code}`
            }
        }).then((response)=>response.json()).then((obj)=>{
            localStorage.setItem("message", JSON.stringify(obj));
            mouseVisor();
            (0, _darkMode.darkModeLogic)();
        }).catch((error)=>{
            console.log(error);
            alert(error);
            clearCookie();
        });
        fetch("https://edu.strada.one/api/user/me ", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${code}`,
                "Accept": "application/json",
                "Content-Type": "application/json;charset=utf-8"
            }
        }).then((response)=>response.json()).then((obj)=>{
            (0, _cookie.setCookie)("myName", obj.name);
        }).catch((error)=>alert(error));
    }
};
socket.onmessage = function(event) {
    const thisMessage = JSON.parse(event.data);
    (0, _render.renderMessage)(thisMessage.user.email, thisMessage.user.name, thisMessage.text, thisMessage.createdAt, true);
};
socket.onclose = function(event) {
    if (event.wasClean) alert(`[close] \u{421}\u{43E}\u{435}\u{434}\u{438}\u{43D}\u{435}\u{43D}\u{438}\u{435} \u{437}\u{430}\u{43A}\u{440}\u{44B}\u{442}\u{43E} \u{447}\u{438}\u{441}\u{442}\u{43E}, \u{43A}\u{43E}\u{434}=${event.code} \u{43F}\u{440}\u{438}\u{447}\u{438}\u{43D}\u{430}=${event.reason}`);
    else alert("[close] \u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0440\u0432\u0430\u043D\u043E");
};
socket.onerror = function(error) {
    alert(error);
};
(0, _htmlElement.htmlElement).exit.addEventListener("click", function() {
    clearCookie();
    location.reload();
});
function openModalAndAddListener() {
    (0, _htmlElement.htmlElement).modalEnter.classList.add("active");
    (0, _htmlElement.htmlElement).enter.addEventListener("click", saveCodeCookie);
}
function saveCodeCookie(e) {
    e.preventDefault();
    let codeEnter;
    if ((0, _htmlElement.htmlElement).codeEnter instanceof HTMLInputElement) codeEnter = (0, _htmlElement.htmlElement).codeEnter.value;
    (0, _cookie.setCookie)("code", codeEnter);
    (0, _htmlElement.htmlElement).modalEnter.classList.remove("active");
    (0, _changeName.openModalChangeName)();
}
function sendConfirmationCodeEmail() {
    if ((0, _htmlElement.htmlElement).email instanceof HTMLInputElement) (0, _cookie.setCookie)("myEmail", (0, _htmlElement.htmlElement).email.value);
    if ((0, _htmlElement.htmlElement).getCodeButton instanceof HTMLButtonElement) (0, _htmlElement.htmlElement).getCodeButton.disabled = true;
    const email = {
        "email": (0, _cookie.getCookie)("myEmail")
    };
    const strBody = JSON.stringify(email);
    fetch("https://edu.strada.one/api/user", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8"
        },
        body: strBody
    }).then((response)=>response.json()).then((obj)=>{
        (0, _htmlElement.htmlElement).modalSettingActive.classList.remove("active");
        (0, _htmlElement.htmlElement).modalAuth.classList.remove("active");
        (0, _htmlElement.htmlElement).modalEnter.classList.remove("active");
        openModalAndAddListener();
    }).catch((error)=>alert(error));
}
function inpSendChatHandler(e) {
    e.preventDefault();
    const message = (0, _htmlElement.htmlElement).postInp.value;
    if (message === "") {
        alert("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C!");
        return;
    }
    socket.send(JSON.stringify({
        text: message
    }));
    (0, _htmlElement.htmlElement).postInp.value = "";
}
function mouseVisor() {
    if ((0, _htmlElement.htmlElement).window.scrollHeight - -(0, _htmlElement.htmlElement).window.scrollTop - (0, _htmlElement.htmlElement).window.clientHeight <= 0) (0, _render.renderChat)();
}
function clearCookie() {
    (0, _cookie.deleteCookie)("myName");
    (0, _cookie.deleteCookie)("myEmail");
    (0, _cookie.deleteCookie)("code");
}
function dateSettingHandler(event) {
    event.preventDefault();
    let date = event.target[0].value;
    const messageAllTo = document.querySelectorAll(".to");
    const messageAllMe = document.querySelectorAll(".me");
    for (let value of messageAllMe)value.remove();
    for (let value of messageAllTo)value.remove();
    (0, _cookie.setCookie)("thisDate", date);
    mouseVisor();
    console.log("dateSettingHandler FINISH");
}
(0, _htmlElement.htmlElement).window.addEventListener("scroll", mouseVisor);
(0, _htmlElement.htmlElement).postBut.addEventListener("click", inpSendChatHandler);
(0, _htmlElement.htmlElement).getCodeButton.addEventListener("click", sendConfirmationCodeEmail);
(0, _htmlElement.htmlElement).modalButtons.addEventListener("click", (0, _changeName.openModalChangeName));
(0, _htmlElement.htmlElement).butName.addEventListener("click", (0, _changeName.submitUserName));
(0, _htmlElement.htmlElement).darkModeButton.addEventListener("click", (0, _darkMode.darkModeButtonHandler));
(0, _htmlElement.htmlElement).dateSettingForm.addEventListener("submit", dateSettingHandler);
for (let element of (0, _htmlElement.htmlElement).closeButtons)element.addEventListener("click", function(e) {
    e.preventDefault();
    (0, _htmlElement.htmlElement).modalSettingActive.classList.remove("active");
    (0, _htmlElement.htmlElement).modalAuth.classList.remove("active");
    (0, _htmlElement.htmlElement).modalEnter.classList.remove("active");
    loadSocket();
});

},{"../cookie":"7KFrp","./htmlElement":"cpdmS","./render":"1kFK5","./changeName":"eHrQ3","./darkMode":"3XL9q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KFrp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getCookie", ()=>getCookie);
parcelHelpers.export(exports, "setCookie", ()=>setCookie);
parcelHelpers.export(exports, "deleteCookie", ()=>deleteCookie);
function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function setCookie(name, value, options = {}) {
    options = {
        path: "/",
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };
    if (options.expires instanceof Date) options.expires = options.expires.toUTCString();
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for(let optionKey in options){
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) updatedCookie += "=" + optionValue;
    }
    document.cookie = updatedCookie;
}
function deleteCookie(name) {
    setCookie(name, "", {
        "max-age": -1
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"cpdmS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "htmlElement", ()=>htmlElement);
const htmlElement = {
    butName: document.querySelector(".butName"),
    codeEnter: document.querySelector(".codeEnter"),
    enter: document.querySelector(".enter"),
    temp: document.querySelector(".temp"),
    modalEnter: document.querySelector(".modalEnter"),
    modalAuth: document.querySelector(".modalAuth"),
    modalButtons: document.querySelector(".setting"),
    closeButtons: document.querySelectorAll(".modalCross"),
    darkModeButton: document.querySelector(".darkModeButton"),
    inpName: document.querySelector(".inpName"),
    getCodeButton: document.querySelector(".code"),
    email: document.querySelector(".codeInp"),
    modalSettingActive: document.querySelector(".modalSetting"),
    exit: document.querySelector(".exit"),
    window: document.querySelector(".wrapper"),
    postBut: document.querySelector(".post").querySelector("button"),
    postInp: document.querySelector(".post").querySelector("input"),
    dateSettingForm: document.querySelector(".dateSetting").querySelector("form"),
    dateSettingInput: document.querySelector(".dateSetting").querySelector("input")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kFK5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderChat", ()=>renderChat);
parcelHelpers.export(exports, "renderMessage", ()=>renderMessage);
var _htmlElement = require("./htmlElement");
var _cookie = require("../cookie");
var _formatDate = require("./formatDate");
let n = 0;
let shouldLoad = true;
function renderChat() {
    if (!shouldLoad) return;
    let objMessage = JSON.parse(localStorage.getItem("message")).messages;
    console.log((0, _cookie.getCookie)("thisDate"));
    if ((0, _cookie.getCookie)("thisDate") !== undefined) {
        const messageAllTo = document.querySelectorAll(".to");
        const messageAllMe = document.querySelectorAll(".me");
        for (let value of messageAllMe)value.remove();
        for (let value of messageAllTo)value.remove();
        for (let value of objMessage)if ((0, _formatDate.formatDate)(value.createdAt, "y-m-d") === (0, _cookie.getCookie)("thisDate")) renderMessage(value.user.email, value.user.name, value.text, value.createdAt, false);
    } else {
        let j = 0;
        const slicedArray = objMessage.slice(0 + n, 20 + n);
        console.log(slicedArray);
        for (let value of slicedArray){
            j++;
            renderMessage(value.user.email, value.user.name, value.text, value.createdAt, false);
            if (j == 20) n = n + 20;
            if (n == 280) {
                alert("\u0412\u0441\u044F \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u0430");
                shouldLoad = false;
            }
        }
    }
}
function renderMessage(email, name, message, date, oneMessage) {
    const window = document.querySelector(".window");
    let temp = (0, _htmlElement.htmlElement).temp;
    let boolean = false;
    const elem = document.createElement("div");
    if (email === (0, _cookie.getCookie)("myEmail")) {
        elem.classList.add("me");
        boolean = true;
        if ((0, _cookie.getCookie)("darkThemeBoolean") == "true") elem.dataset.darkmode = "night";
    } else {
        elem.classList.add("to");
        if ((0, _cookie.getCookie)("darkThemeBoolean") == "true") elem.dataset.darkmode = "night";
    }
    if (temp instanceof HTMLTemplateElement) elem.append(temp.content.cloneNode(true));
    elem.querySelector(".text").innerHTML = `${name}: ${message}`;
    elem.querySelector(".time").textContent = `${(0, _formatDate.formatDate)(date, "h:m")}`;
    if (oneMessage) window.prepend(elem);
    else window.append(elem);
}

},{"./htmlElement":"cpdmS","../cookie":"7KFrp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./formatDate":"3wnJw"}],"3wnJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
function formatDate(date, format) {
    if (format === "h:m") {
        const dateHours = new Date(date).getHours();
        const dateMinutes = new Date(date).getMinutes();
        const dateMinutesFormate = dateMinutes < 10 ? `0` + dateMinutes : dateMinutes;
        const time = `${dateHours}:${dateMinutesFormate}`;
        return time;
    } else if (format === "y-m-d") {
        const dateDay = new Date(date).getDate() < 10 ? `0${+new Date(date).getDate()}` : new Date(date).getDate();
        const dateMounth = new Date(date).getDate() < 10 ? `0${+new Date(date).getMonth() + 1}` : new Date(date).getDate();
        const dateFullYear = new Date(date).getFullYear();
        const time = `${dateFullYear}-${dateMounth}-${dateDay}`;
        console.log(time);
        return time;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHrQ3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openModalChangeName", ()=>openModalChangeName);
parcelHelpers.export(exports, "submitUserName", ()=>submitUserName);
var _htmlElement = require("./htmlElement");
var _cookie = require("../cookie");
var _main = require("./main");
function openModalChangeName() {
    (0, _htmlElement.htmlElement).modalSettingActive.classList.add("active");
    if ((0, _htmlElement.htmlElement).inpName instanceof HTMLInputElement) (0, _htmlElement.htmlElement).inpName.value = (0, _cookie.getCookie)("myName") || "";
}
function submitUserName(e) {
    e.preventDefault();
    let userName;
    if ((0, _htmlElement.htmlElement).inpName instanceof HTMLInputElement) userName = {
        name: (0, _htmlElement.htmlElement).inpName.value
    };
    const useNameJson = JSON.stringify(userName);
    fetch("https://edu.strada.one/api/user", {
        method: "PATCH",
        headers: {
            "Authorization": `Bearer ${(0, _cookie.getCookie)("code")}`,
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8"
        },
        body: useNameJson
    }).then((response)=>response.json()).then((obj)=>{
        if ((0, _htmlElement.htmlElement).butName.previousSibling.previousSibling instanceof HTMLInputElement) (0, _cookie.setCookie)("myName", (0, _htmlElement.htmlElement).butName.previousSibling.previousSibling.value);
        (0, _htmlElement.htmlElement).modalSettingActive.classList.remove("active");
        (0, _main.mouseVisor)();
    }).catch((error)=>alert(error));
}

},{"./htmlElement":"cpdmS","../cookie":"7KFrp","./main":"3rz9v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XL9q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "darkModeLogic", ()=>darkModeLogic);
parcelHelpers.export(exports, "darkModeButtonHandler", ()=>darkModeButtonHandler);
var _cookie = require("../cookie");
function darkModeReRender(booleanDark) {
    const htmlElementDarkMode = {
        modalSettingActive: document.querySelector(".modalSetting"),
        modalEnter: document.querySelector(".modalEnter"),
        modalAuth: document.querySelector(".modalAuth"),
        darkModeButton: document.querySelector(".darkModeButton"),
        bodyElement: document.querySelector("body"),
        chatElement: document.querySelector(".chat"),
        windowElement: document.querySelector(".window"),
        postElement: document.querySelector(".post"),
        meElement: document.querySelectorAll(".me"),
        toElement: document.querySelectorAll(".to"),
        timeElement: document.querySelectorAll(".time"),
        modalEnterInpElement: document.querySelector(".modalEnter").querySelector("input"),
        modalAuthInpElement: document.querySelector(".modalAuth").querySelector("input"),
        modalSettingActiveInpElement: document.querySelector(".modalSetting").querySelector("input"),
        modalEnterButElement: document.querySelector(".modalEnter").querySelector("button"),
        modalAuthButElement: document.querySelector(".modalAuth").querySelector("button"),
        modalSettingActiveButElement: document.querySelector(".modalSetting").querySelector("button"),
        buttonAll: document.querySelectorAll("button"),
        inputAll: document.querySelectorAll("input")
    };
    let element;
    let color = booleanDark === "true" ? "night" : "white";
    for(element in htmlElementDarkMode){
        if (NodeList.prototype.isPrototypeOf(htmlElementDarkMode[element])) for (let value of htmlElementDarkMode[element])value.dataset.darkmode = color;
        else htmlElementDarkMode[element].dataset.darkmode = color;
    }
}
function darkModeLogic() {
    let thisDark = (0, _cookie.getCookie)("darkThemeBoolean") === "true" ? "true" : "false";
    darkModeReRender(thisDark);
}
function darkModeButtonHandler() {
    let thisDark = (0, _cookie.getCookie)("darkThemeBoolean");
    if (thisDark === "true") (0, _cookie.setCookie)("darkThemeBoolean", "false");
    else (0, _cookie.setCookie)("darkThemeBoolean", "true");
    darkModeLogic();
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../cookie":"7KFrp"}]},["5qqEh","3rz9v"], "3rz9v", "parcelRequire94c2")

//# sourceMappingURL=index.a2a37aa4.js.map

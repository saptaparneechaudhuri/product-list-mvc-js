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
})({"hycaY":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
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
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
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

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _dessertsView = require("./views/dessertsView");
var _dessertsViewDefault = parcelHelpers.interopDefault(_dessertsView);
var _cartView = require("./views/cartView");
var _cartViewDefault = parcelHelpers.interopDefault(_cartView);
var _oderView = require("./views/oderView");
var _oderViewDefault = parcelHelpers.interopDefault(_oderView);
if (module.hot) module.hot.accept();
// let parentElement = document.querySelector(".recipe-item");
// let btn = document.querySelector(".btn-white");
// // console.log(btn);
// btn.addEventListener("click", function (e) {
//   // chsnge the styles here
//   //   btn.classList.add("hide");
//   const parent = e.target.closest(".recipe-item");
//   parent.querySelector(".btn-red").classList.remove("hide");
//   parent.querySelector(".initial-btn").classList.add("hide");
//   parent.querySelector(".image-box").classList.add("selected");
// });
const controlShowDesserts = async function() {
    try {
        // load desserts
        // await loadDesserts();
        // render html
        (0, _dessertsViewDefault.default).render((0, _model.state).desserts);
    } catch (err) {
        console.log(err);
    }
};
const controlCart = async function() {
    try {
        console.log("cart reloaded");
        // await loadCart();
        // render cart
        (0, _cartViewDefault.default).render((0, _model.state).cart);
    } catch (err) {
        console.log(err);
    }
};
const controlAddToCart = async function(itemData) {
    try {
        if ((0, _model.state).cart.length > 0) {
            const itemPresent = (0, _model.state).cart.find((item)=>{
                return item.name === itemData.name;
            });
            if (itemPresent) {
                console.log("true");
                return;
            }
        }
        await (0, _model.incrementDesserts)(itemData);
        // await addToCart(itemData);
        (0, _model.addToCart)(itemData);
        // update views
        (0, _cartViewDefault.default).render((0, _model.state).cart);
    } catch (err) {
        console.log(err);
    }
};
const controlIncrementItem = async function(itemName) {
    try {
        if ((0, _model.state).cart.length > 0) {
            const itemPresent = (0, _model.state).cart.find((item)=>{
                return item.name === itemName;
            });
            if (itemPresent) {
                (0, _model.incrementItemCart)(itemPresent);
                await (0, _model.incrementDesserts)(itemPresent);
                // await loadCart();
                // render
                (0, _cartViewDefault.default).render((0, _model.state).cart);
            }
        }
    } catch (err) {
        console.log(err);
    }
};
const controlDecrementItem = async function(itemName) {
    try {
        if ((0, _model.state).cart.length > 0) {
            const itemPresent = (0, _model.state).cart.find((item)=>{
                return item.name === itemName;
            });
            if (!itemPresent) return;
            await (0, _model.decrementDesserts)(itemPresent);
            // await decrementItemCart(itemPresent);
            (0, _model.decrementItemCart)(itemPresent);
            if (itemPresent.number === 0) (0, _model.deleteCart)(itemPresent.itemId);
            (0, _dessertsViewDefault.default).render((0, _model.state).desserts);
            (0, _cartViewDefault.default).render((0, _model.state).cart);
        // render
        // await loadCart();
        }
    } catch (err) {
        console.log(err);
    }
};
const controlDeleteCart = async function(itemId) {
    try {
        // await deleteCart(itemId);
        (0, _model.deleteCart)(itemId);
        // await loadCart();
        //render
        (0, _model.removeDessertItem)(itemId);
        (0, _dessertsViewDefault.default).render((0, _model.state).desserts);
        (0, _cartViewDefault.default).render((0, _model.state).cart);
    } catch (err) {
        console.log(err);
    }
};
const controlFinalOrder = function() {
    // render final order view
    (0, _oderViewDefault.default).render((0, _model.state).cart);
};
const controlStartNew = async function() {
    try {
        (0, _model.state).cart = [];
        (0, _model.removeDesserts)();
        // remove number from desserts using api
        (0, _dessertsViewDefault.default).render((0, _model.state).desserts);
        (0, _cartViewDefault.default).render((0, _model.state).cart);
    } catch (err) {
        console.log(err);
    }
};
const controlDeleteItem = function(itemId) {
    (0, _model.deleteCart)(itemId);
    (0, _model.removeDessertItem)(itemId);
    console.log((0, _model.state).desserts);
    (0, _dessertsViewDefault.default).render((0, _model.state).desserts);
    (0, _cartViewDefault.default).render((0, _model.state).cart);
};
function init() {
    (0, _dessertsViewDefault.default).addHandlerRender(controlShowDesserts);
    (0, _dessertsViewDefault.default).addHandlerAddToCart(controlAddToCart);
    (0, _dessertsViewDefault.default).addHandlerIncrement(controlIncrementItem);
    (0, _dessertsViewDefault.default).addHandlerDecrement(controlDecrementItem, controlDeleteCart);
    // dessertsView.addHandlerRemoveCartItem(controlDeleteCart);
    (0, _cartViewDefault.default).addHandlerRender(controlCart);
    // cartView.addHandlerDeleteCart(controlDeleteCart);
    (0, _cartViewDefault.default).addHandlerConfirmOrder(controlFinalOrder);
    (0, _cartViewDefault.default).addHanlderRemoveItem(controlDeleteItem);
    (0, _oderViewDefault.default).addHandlerRender(controlFinalOrder);
    (0, _oderViewDefault.default).addHandlerConfirm(controlStartNew);
}
init();

},{"./model":"Y4A21","./views/dessertsView":"d1hu2","./views/cartView":"IaDwG","./views/oderView":"b2FU8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadDesserts", ()=>loadDesserts);
parcelHelpers.export(exports, "incrementDesserts", ()=>incrementDesserts);
parcelHelpers.export(exports, "decrementDesserts", ()=>decrementDesserts);
parcelHelpers.export(exports, "removeDesserts", ()=>removeDesserts);
parcelHelpers.export(exports, "removeDessertItem", ()=>removeDessertItem);
parcelHelpers.export(exports, "addToCart", ()=>addToCart);
parcelHelpers.export(exports, "incrementItemCart", ()=>incrementItemCart);
parcelHelpers.export(exports, "decrementItemCart", ()=>decrementItemCart);
parcelHelpers.export(exports, "calculateTotalPrice", ()=>calculateTotalPrice);
parcelHelpers.export(exports, "deleteCart", ()=>deleteCart);
const state = {
    desserts: [
        {
            id: "1",
            name: "Waffle",
            title: "Waffle with Berries",
            price: 6.5,
            image: "https://i.imgur.com/LemIhRb.jpeg",
            number: 0
        },
        {
            id: "2",
            name: "Cr\xe8me Br\xfbl\xe9e",
            title: "Vanilla Bean Cr\xe8me Br\xfbl\xe9e",
            price: 7,
            image: "https://i.imgur.com/1iOr8AB.jpeg",
            number: 0
        },
        {
            id: "3",
            name: "Macaron",
            title: "Macaron Mix of Five",
            price: 8,
            image: "https://i.imgur.com/wniAhZU.jpeg",
            number: 0
        },
        {
            id: "4",
            name: "Tiramisu",
            title: "Classic Tiramisu",
            price: 5.5,
            image: "https://i.imgur.com/Z5n07UG.jpeg",
            number: 0
        },
        {
            id: "5",
            name: "Baklava",
            title: "Pistachio Baklava",
            price: 4,
            image: "https://i.imgur.com/lUOQR5k.jpeg",
            number: 0
        },
        {
            id: "6",
            name: "Pie",
            title: "Lemon Meringue Pie",
            price: 5,
            image: "https://i.imgur.com/Cfak6qV.jpeg",
            number: 0
        },
        {
            id: "7",
            name: "Cake",
            title: "Red Velvet Cake",
            price: 4.5,
            image: "https://i.imgur.com/ZFZr3cd.jpeg",
            number: 0
        },
        {
            id: "8",
            name: "Brownie",
            title: "Salted Caramel Brownie",
            price: 4.5,
            image: "https://i.imgur.com/tdwo36O.jpeg",
            number: 0
        },
        {
            id: "9",
            name: "Panna Cotta",
            title: "Vanilla Panna Cotta",
            price: 6.5,
            image: "https://i.imgur.com/RkvcVJa.jpeg",
            number: 0
        }
    ],
    cart: [],
    totalPrice: 0
};
const loadDesserts = async function() {};
const incrementDesserts = async function(itemData) {
    try {
        const itemIndex = state.desserts.findIndex((item)=>item.id === itemData.itemId);
        // const response = await fetch(
        //   `http://localhost:8000/desserts/${itemData.itemId}`,
        //   {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ number: +state.desserts[itemIndex].number + 1 }),
        //   }
        // );
        // const data = await response.json();
        // state.desserts[itemIndex] = { ...data };
        state.desserts[itemIndex].number = +state.desserts[itemIndex].number + 1;
    } catch (err) {
        console.log(err);
    }
};
const decrementDesserts = async function(itemData) {
    try {
        const itemIndex = state.desserts.findIndex((item)=>item.id === itemData.itemId);
        // const response = await fetch(
        //   `http://localhost:8000/desserts/${itemData.itemId}`,
        //   {
        //     method: "PATCH",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //       number: Math.max(+state.desserts[itemIndex].number - 1, 0),
        //     }),
        //   }
        // );
        // const data = await response.json();
        // state.desserts[itemIndex] = { ...data };
        state.desserts[itemIndex].number = +state.desserts[itemIndex].number - 1;
    } catch (err) {
        console.log(err);
    }
};
const removeDesserts = function() {
    state.desserts = state.desserts.map((item)=>{
        return {
            ...item,
            number: 0
        };
    });
};
const removeDessertItem = function(itemId) {
    const itemIndex = state.desserts.findIndex((item)=>item.id === itemId);
    state.desserts[itemIndex].number = 0;
};
const addToCart = function(itemData) {
    state.cart = [
        ...state.cart,
        itemData
    ];
};
const incrementItemCart = function(itemData) {
    const itemIndex = state.cart.findIndex((item)=>item.itemId === itemData.itemId);
    state.cart[itemIndex].number = +itemData.number + 1;
};
const decrementItemCart = function(itemData) {
    const itemIndex = state.cart.findIndex((item)=>item.itemId === itemData.itemId);
    // itemData.number = itemData.number - 1;
    // if (+itemData.number === 0) {
    //   deleteCart(itemData.itemId);
    // }
    state.cart[itemIndex].number = Math.max(+itemData.number - 1, 0);
};
const calculateTotalPrice = function() {
    // calculate total
    state.totalPrice = state.cart.reduce((acc, currVal)=>{
        return acc + +currVal.price * +currVal.number;
    }, 0);
};
const deleteCart = function(itemId) {
    console.log("delete", state.cart);
    const newCart = state.cart.filter((item)=>item.itemId !== itemId && +item.number > 0);
    state.cart = [
        ...newCart
    ];
    console.log("after delete", state.cart);
};

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

},{}],"d1hu2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconAddToCartSvg = require("../../images/icon-add-to-cart.svg");
var _iconAddToCartSvgDefault = parcelHelpers.interopDefault(_iconAddToCartSvg);
var _iconIncrementQuantitySvg = require("../../images/icon-increment-quantity.svg");
var _iconIncrementQuantitySvgDefault = parcelHelpers.interopDefault(_iconIncrementQuantitySvg);
var _iconDecrementQuantitySvg = require("../../images/icon-decrement-quantity.svg");
var _iconDecrementQuantitySvgDefault = parcelHelpers.interopDefault(_iconDecrementQuantitySvg);
var _iconRemoveItemSvg = require("../../images/icon-remove-item.svg");
var _iconRemoveItemSvgDefault = parcelHelpers.interopDefault(_iconRemoveItemSvg);
class DessertsView {
    _parentElement = document.querySelector("#recipe-container");
    _btnRed = document.querySelector(".btn-red");
    _data;
    render(data) {
        this._data = data;
        const markUp = this._generateMarkup();
        // console.log(typeof markUp);
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    addHandlerAddToCart(handler) {
        // const btnWhite = document.querySelector(".btn-white");
        this._parentElement.addEventListener("click", function(e) {
            //   console.log(e.target.closest(".initial-btn"));
            const recipeItem = e.target.closest(".recipe-item");
            const btn = e.target.closest(".btn-white");
            //   console.log(btn);
            const btnInitial = btn.querySelector(".initial-btn");
            const btnClicked = btn.querySelector(".btn-clicked");
            const imageBoxSelected = btn.closest(".image-box");
            //   const btnValue = recipeItem.querySelector(".btn-value");
            //   const number = recipeItem.dataset.number;
            //   recipeItem.dataset.number = +number + 1;
            //   btnValue.textContent = +recipeItem.dataset.number;
            btnInitial.classList.add("hide");
            btnClicked.classList.remove("hide");
            imageBoxSelected.classList.add("selected");
            //   const itemData = recipeItem.dataset.name;
            const itemData = {
                name: recipeItem.dataset.name,
                number: +recipeItem.dataset.number,
                price: recipeItem.dataset.price,
                itemId: recipeItem.dataset.id,
                image: recipeItem.dataset.image
            };
            handler(itemData);
        });
    }
    addHandlerIncrement(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btnIncrement = e.target.closest(".increment");
            const recipeItem = e.target.closest(".recipe-item");
            const btnValue = recipeItem.querySelector(".btn-value");
            if (!btnIncrement) return;
            const itemName = btnIncrement.dataset.name;
            const number = recipeItem.dataset.number;
            console.log(number);
            // change the value displayed on buttons
            btnValue.textContent = +number + 1;
            recipeItem.dataset.number = +number + 1;
            handler(itemName);
        });
    }
    addHandlerDecrement(handler1, hanlder2) {
        this._parentElement.addEventListener("click", function(e) {
            const btnDecrement = e.target.closest(".decrement");
            const recipeItem = e.target.closest(".recipe-item");
            const itemId = recipeItem.dataset.id;
            const btnValue = recipeItem.querySelector(".btn-value");
            if (!btnDecrement) return;
            const itemName = recipeItem.dataset.name;
            const number = recipeItem.dataset.number;
            // change the value displayed on buttons
            if (+number > 0) {
                btnValue.textContent = +number - 1;
                recipeItem.dataset.number = +number - 1;
                handler1(itemName);
            }
            if (+number === 0) hanlder2(itemId);
        });
    }
    addHandlerRemoveCartItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const recipeItem = e.target.closest(".recipe-item");
            const itemId = recipeItem.dataset.id;
            const number = recipeItem.dataset.number - 1;
            console.log(number);
            if (+number === 0) handler(itemId);
        });
    }
    addHandlerRender(handler) {
        // load desserts as page loads
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        // console.log(this._data);
        // return this._data
        //   .map((item, index) => this._generateMarkupPreview(item, index))
        //   .join("");
        return this._data.map((item)=>{
            if (item.number > 0) return this._generateMarkupSelected(item);
            else return this._generateMarkupPreview(item);
        }).join("");
    }
    _generateMarkupPreview(item) {
        // console.log(`item-${index + 1}`);
        return `
           <div class="h-fit overflow-hidden recipe-item"  data-name=${item.name} data-number=${item.number + 1} data-price=${item.price} data-id=${item.id}  data-image=${item.image}>
            <div class="relative rounded-lg mb-8 image-box">
              <img
              src=${item.image}
                alt=${item.name}
                referrerpolicy="no-referrer"
                class="object-cover rounded-lg"
              />
              <div class="btn btn-white">
                <div class="initial-btn flex w-full">
                  <img src=${0, _iconAddToCartSvgDefault.default} alt="cart" />
                  Add to cart
                </div>

                <div class="btn-clicked btn-red hide">
                  <div class="btn-circle decrement" data-name=${item.name}>
                    <img
                      src=${0, _iconDecrementQuantitySvgDefault.default}
                      alt="cart"
                      class="hover:stroke-primary-red"
                    />
                  </div>
                  <div class="btn-value" >${+item.number + 1}</div>
                  <div class="btn-circle increment" data-name=${item.name}>
                    <img
                      src=${0, _iconIncrementQuantitySvgDefault.default}
                      alt="cart"
                    />
                  </div>
                </div>
              </div>
             
            </div>

            <div class="bg-rosey-100">
              <p class="text-rosey-300 text-xs">${item.name}</p>
              <p class="text-sm text-rosey-900 font-medium">
                ${item.title}
              </p>
              <p class="text-primary-red text-base font-medium">$${item.price}</p>
            </div>
          </div>
        </div>
    `;
    }
    _generateMarkupSelected(item) {
        // console.log(`item-${index + 1}`);
        return `
           <div class="h-fit overflow-hidden recipe-item"  data-name=${item.name} data-number=${Math.max(+item.number, 1)} data-price=${item.price} data-id=${item.id}>
            <div class="relative rounded-lg mb-8 image-box selected">
              <img
              src=${item.image}
                alt=${item.name}
                referrerpolicy="no-referrer"
                class="object-cover rounded-lg"
              />
              <div class="btn btn-white">
                <div class="initial-btn flex w-full hide">
                  <img src=${0, _iconAddToCartSvgDefault.default} alt="cart" />
                  Add to cart
                </div>

                <div class="btn-clicked btn-red">
                  <div class="btn-circle decrement" data-name=${item.name}>
                    <img
                      src=${0, _iconDecrementQuantitySvgDefault.default}
                      alt="cart"
                      class="hover:stroke-primary-red"
                    />
                  </div>
                  <div class="btn-value" >${Math.max(+item.number, 1)}</div>
                  <div class="btn-circle increment" data-name=${item.name}>
                    <img
                      src=${0, _iconIncrementQuantitySvgDefault.default}
                      alt="cart"
                    />
                  </div>
                </div>
              </div>
             
            </div>

            <div class="bg-rosey-100">
              <p class="text-rosey-300 text-xs">${item.name}</p>
              <p class="text-sm text-rosey-900 font-medium">
                ${item.title}
              </p>
              <p class="text-primary-red text-base font-medium">$${item.price}</p>
            </div>
          </div>
        </div>
    `;
    }
}
exports.default = new DessertsView();

},{"../../images/icon-add-to-cart.svg":"cvFcz","../../images/icon-increment-quantity.svg":"e8CZO","../../images/icon-decrement-quantity.svg":"drdpn","../../images/icon-remove-item.svg":"bu2yC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cvFcz":[function(require,module,exports) {
module.exports = require("df8ae804d959fed0").getBundleURL("hWUTQ") + "icon-add-to-cart.070d8600.svg" + "?" + Date.now();

},{"df8ae804d959fed0":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"e8CZO":[function(require,module,exports) {
module.exports = require("d5b183fbd3a80ba1").getBundleURL("hWUTQ") + "icon-increment-quantity.3cba64fe.svg" + "?" + Date.now();

},{"d5b183fbd3a80ba1":"lgJ39"}],"drdpn":[function(require,module,exports) {
module.exports = require("27ef5d7f279a5038").getBundleURL("hWUTQ") + "icon-decrement-quantity.071a9e84.svg" + "?" + Date.now();

},{"27ef5d7f279a5038":"lgJ39"}],"bu2yC":[function(require,module,exports) {
module.exports = require("f0661e425cf5a0c8").getBundleURL("hWUTQ") + "icon-remove-item.2abe700b.svg" + "?" + Date.now();

},{"f0661e425cf5a0c8":"lgJ39"}],"IaDwG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _illustrationEmptyCartSvg = require("../../images/illustration-empty-cart.svg");
var _illustrationEmptyCartSvgDefault = parcelHelpers.interopDefault(_illustrationEmptyCartSvg);
var _iconRemoveItemSvg = require("../../images/icon-remove-item.svg");
var _iconRemoveItemSvgDefault = parcelHelpers.interopDefault(_iconRemoveItemSvg);
var _iconCarbonNeutralSvg = require("../../images/icon-carbon-neutral.svg");
var _iconCarbonNeutralSvgDefault = parcelHelpers.interopDefault(_iconCarbonNeutralSvg);
class CartView {
    _parentElement = document.querySelector("#cart");
    _emptyCart = document.querySelector(".empty-cart");
    _fullCart = document.querySelector(".full-cart");
    _data;
    _totalItems = 0;
    _totalPrice = 0;
    render(data) {
        this._data = data;
        // console.log(this._data.length);
        let markUp = "";
        if (!data || Array.isArray(data) && data.length === 0) {
            this._totalItems = 0;
            // render empty cart div
            markUp = this._renderEmptyCart();
        } else if (this._data.length > 0) {
            // console.log("i am in else of cartview");
            this._totalItems = this._data.reduce((acc, currVal)=>{
                return acc + +currVal.number;
            }, 0);
            this._totalPrice = this._data.reduce((acc, currVal)=>{
                return acc + +currVal.price * +currVal.number;
            }, 0);
            markUp = this._renderCart();
        }
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markUp);
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    addHandlerRender(handler) {
        // load cart as page loads
        window.addEventListener("load", handler);
    }
    addHandlerConfirmOrder(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btnOrder = e.target.closest(".btn-order");
            if (!btnOrder) return;
            const mainElement = btnOrder.closest("#main-container");
            const body = mainElement.closest("#root");
            const modal = body.querySelector("#modal");
            // display the modal and blur the background
            mainElement.classList.add("blur-bg");
            modal.classList.remove("hide");
            handler();
        });
    }
    // addHandlerDeleteCart(handler) {
    //   const cartItem = this._parentElement.querySelector(".cart-item");
    //   const number = cartItem.dataset.number;
    //   const itemId = cartItem.dataset.item;
    //   if (+number === 0) {
    //     handler(itemId);
    //   }
    // }
    addHanlderRemoveItem(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const cartItem = e.target.closest(".cart-item");
            if (!cartItem) return;
            const itemId = cartItem.dataset.item;
            handler(itemId);
        });
    }
    _renderEmptyCart() {
        return `
    <div>
     <h1 class="text-primary-red font-bold text-xl mb-8">
          Your Cart <span>(${this._totalItems})</span>
        </h1>
     <div class="mx-auto text-center empty-cart">
          <img
            src=${0, _illustrationEmptyCartSvgDefault.default}
            alt="empty"
            class="mx-auto mb-5"
          />
          <p class="text-rosey-500 font-semibold">
            Your added items will appear here
          </p>
        </div>
    </div>
       
    `;
    }
    _renderCart() {
        return `
        <div>
            <h1 class="text-primary-red font-bold text-xl mb-8">
          Your Cart <span>(${this._totalItems})</span>
        </h1>
       
        <div class="full-cart">

        ${this._data.length > 0 && this._data.map((item)=>{
            return this._renderCartItem(item);
        }).join("")}
         </div>
         <div class="flex justify-between mt-5 mb-5 order-total">
         <span class="text-rosey-500 font-medium text-base"
              >Order Total</span
            >
            <span class="text-rosey-900 font-bold text-lg">$${this._totalPrice.toFixed(2)}</span>
          </div>
          <div
            class="p-4 bg-rosey-100 rounded-lg flex gap-2 items-center justify-center mb-5"
          >
            <img
              src=${0, _iconCarbonNeutralSvgDefault.default}
              alt="carbon neutral"
            />
            <p class="text-sm text-rosey-400">
              This is a <b>carbon-neutral</b> delivery
            </p>
          </div>

          <button class="btn-order">Confirm order</button>
        </div> 

        
        `;
    }
    _renderCartItem(item) {
        return `
         <div
            class="cart-item flex justify-between items-center pb-4 border-b-2 border-rosey-100" data-number=${item.number} data-item=${item.itemId}
          >
            <div>
              <h2 class="text-rosey-900 font-medium mb-2">${item.name}</h2>
              <div>
                <span class="text-primary-red font-medium text-base mr-2"
                  >${item.number}x</span
                >
                <span class="text-rosey-400 text-sm mr-1">
                  <span class="text-sm">@</span>
                  <span>$${(+item.price).toFixed(2)}</span>
                </span>
                <span class="text-rosey-500 font-semibold text-sm">${(+item.number * +item.price).toFixed(2)}</span>
              </div>
            </div>
            <div class="border-2 rounded-full p-1 border-rosey-300 cursor-pointer remove-icon" data-id=${item.itemId}>
              <img src=${0, _iconRemoveItemSvgDefault.default} alt="remove" />
            </div>
          </div>
           
        
    `;
    }
}
exports.default = new CartView();

},{"../../images/illustration-empty-cart.svg":"4hKDw","../../images/icon-remove-item.svg":"bu2yC","../../images/icon-carbon-neutral.svg":"gLjpJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4hKDw":[function(require,module,exports) {
module.exports = require("6ccffd205529b47e").getBundleURL("hWUTQ") + "illustration-empty-cart.8ad1d947.svg" + "?" + Date.now();

},{"6ccffd205529b47e":"lgJ39"}],"gLjpJ":[function(require,module,exports) {
module.exports = require("da7077cf3e3c8823").getBundleURL("hWUTQ") + "icon-carbon-neutral.a9e1a91f.svg" + "?" + Date.now();

},{"da7077cf3e3c8823":"lgJ39"}],"b2FU8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconCarbonNeutralSvg = require("../../images/icon-carbon-neutral.svg");
var _iconCarbonNeutralSvgDefault = parcelHelpers.interopDefault(_iconCarbonNeutralSvg);
var _iconOrderConfirmedSvg = require("../../images/icon-order-confirmed.svg");
var _iconOrderConfirmedSvgDefault = parcelHelpers.interopDefault(_iconOrderConfirmedSvg);
class OrderView {
    _parentElement = document.querySelector("#modal");
    _data;
    _totalPrice = 0;
    render(data) {
        // console.log(this._parentElement);
        this._data = data;
        if (this._data.length > 0) {
            this._totalPrice = this._data.reduce((acc, currVal)=>{
                return acc + +currVal.price * +currVal.number;
            }, 0);
            const markUp = this._generateMarkup();
            this._clear();
            this._parentElement.insertAdjacentHTML("afterbegin", markUp);
        }
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    addHandlerRender(handler) {
        // load cart as page loads
        window.addEventListener("load", handler);
    }
    addHandlerConfirm(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btnConfirm = e.target.closest(".btn-confirm");
            const parent = btnConfirm.closest("#modal");
            const body = btnConfirm.closest("#root");
            const mainContainer = body.querySelector("#main-container");
            // hide the modal and remove background blur
            parent.classList.add("hide");
            mainContainer.classList.remove("blur-bg");
            handler();
        });
    }
    _generateMarkup() {
        return `
        <img
        class="mb-2"
        src=${0, _iconOrderConfirmedSvgDefault.default}
        alt="order confirmed"
      />
      <h1 class="text-rosey-900 font-bold text-xl">Order Confirmed</h1>
      <p class="text-rosey-300 text-sm mb-4">We hope you enjoy your food!</p>
      <div class="bg-rosey-100 h-fit w-full p-2 mb-4">

      ${this._data.map((item)=>{
            return this._generateItem(item);
        }).join("")}

       <div class="flex justify-between">
          <span class="text-rosey-500 font-medium text-sm">Order Total</span>
          <span class="text-rosey-900 font-bold text-base">$${this._totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button class="btn-order btn-confirm">Start New Order</button>





    `;
    }
    _generateItem(item) {
        return `
        <div
          class="flex justify-between items-center mb-4 border-b-2 border-rosey-300 p-2"
        >
          <div class="flex gap-2">
            <img src=${item.image} alt=${item.name} class="w-10 h-10" />
            <div>
              <h2 class="text-rosey-900 font-medium text-sm">${item.name}</h2>
              <div>
                <span class="text-primary-red font-medium text-sm mr-2"
                  >${item.number}x</span
                >
                <span class="text-rosey-400 text-sm mr-1">
                  <span class="text-sm">@</span>
                  <span>$${(+item.price).toFixed(2)}</span>
                </span>
              </div>
            </div>
          </div>
          <span class="text-rosey-500 font-semibold text-sm">$${(+item.number * +item.price).toFixed(2)} </span>
        </div>
    `;
    }
}
exports.default = new OrderView();

},{"../../images/icon-carbon-neutral.svg":"gLjpJ","../../images/icon-order-confirmed.svg":"6ZIc9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ZIc9":[function(require,module,exports) {
module.exports = require("83cdbb68fffee1dd").getBundleURL("hWUTQ") + "icon-order-confirmed.a5e7c734.svg" + "?" + Date.now();

},{"83cdbb68fffee1dd":"lgJ39"}]},["hycaY","aenu9"], "aenu9", "parcelRequireb14b")

//# sourceMappingURL=index.e37f48ea.js.map

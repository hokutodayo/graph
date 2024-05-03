/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

/*!
* sweetalert2 v11.10.8
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _assertClassBrand(e, t, n) {
    if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
    throw new TypeError("Private element is not present on this object");
  }
  function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
  }
  function _classPrivateFieldGet2(s, a) {
    return s.get(_assertClassBrand(s, a));
  }
  function _classPrivateFieldSet2(s, a, r) {
    return s.set(_assertClassBrand(s, a), r), r;
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get.bind();
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }

  var RESTORE_FOCUS_TIMEOUT = 100;

  /** @type {GlobalState} */
  var globalState = {};
  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement instanceof HTMLElement) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  };

  /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */
  var restoreActiveElement = function restoreActiveElement(returnFocus) {
    return new Promise(function (resolve) {
      if (!returnFocus) {
        return resolve();
      }
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      window.scrollTo(x, y);
    });
  };

  var swalPrefix = 'swal2-';

  /**
   * @typedef
   * { | 'container'
   *   | 'shown'
   *   | 'height-auto'
   *   | 'iosfix'
   *   | 'popup'
   *   | 'modal'
   *   | 'no-backdrop'
   *   | 'no-transition'
   *   | 'toast'
   *   | 'toast-shown'
   *   | 'show'
   *   | 'hide'
   *   | 'close'
   *   | 'title'
   *   | 'html-container'
   *   | 'actions'
   *   | 'confirm'
   *   | 'deny'
   *   | 'cancel'
   *   | 'default-outline'
   *   | 'footer'
   *   | 'icon'
   *   | 'icon-content'
   *   | 'image'
   *   | 'input'
   *   | 'file'
   *   | 'range'
   *   | 'select'
   *   | 'radio'
   *   | 'checkbox'
   *   | 'label'
   *   | 'textarea'
   *   | 'inputerror'
   *   | 'input-label'
   *   | 'validation-message'
   *   | 'progress-steps'
   *   | 'active-progress-step'
   *   | 'progress-step'
   *   | 'progress-step-line'
   *   | 'loader'
   *   | 'loading'
   *   | 'styled'
   *   | 'top'
   *   | 'top-start'
   *   | 'top-end'
   *   | 'top-left'
   *   | 'top-right'
   *   | 'center'
   *   | 'center-start'
   *   | 'center-end'
   *   | 'center-left'
   *   | 'center-right'
   *   | 'bottom'
   *   | 'bottom-start'
   *   | 'bottom-end'
   *   | 'bottom-left'
   *   | 'bottom-right'
   *   | 'grow-row'
   *   | 'grow-column'
   *   | 'grow-fullscreen'
   *   | 'rtl'
   *   | 'timer-progress-bar'
   *   | 'timer-progress-bar-container'
   *   | 'scrollbar-measure'
   *   | 'icon-success'
   *   | 'icon-warning'
   *   | 'icon-info'
   *   | 'icon-question'
   *   | 'icon-error'
   * } SwalClass
   * @typedef {Record<SwalClass, string>} SwalClasses
   */

  /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */

  /** @type {SwalClass[]} */
  var classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
  var swalClasses = classNames.reduce(function (acc, className) {
    acc[className] = swalPrefix + className;
    return acc;
  }, /** @type {SwalClasses} */{});

  /** @type {SwalIcon[]} */
  var icons = ['success', 'warning', 'info', 'question', 'error'];
  var iconTypes = icons.reduce(function (acc, icon) {
    acc[icon] = swalPrefix + icon;
    return acc;
  }, /** @type {SwalIcons} */{});

  var consolePrefix = 'SweetAlert2:';

  /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */
  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */
  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };

  /**
   * Standardize console errors
   *
   * @param {string} message
   */
  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };

  /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */
  var previousWarnOnceMessages = [];

  /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */
  var warnOnce = function warnOnce(message) {
    if (!previousWarnOnceMessages.includes(message)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };

  /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string} useInstead
   */
  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };

  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */
  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };

  /**
   * @param {any} arg
   * @returns {Promise<any>}
   */
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };

  /**
   * @param {any} arg
   * @returns {boolean}
   */
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */
  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };

  /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */
  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getIcon = function getIcon() {
    return elementByClass(swalClasses.icon);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getIconContent = function getIconContent() {
    return elementByClass(swalClasses['icon-content']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getConfirmButton = function getConfirmButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getCancelButton = function getCancelButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };

  /**
   * @returns {HTMLButtonElement | null}
   */
  var getDenyButton = function getDenyButton() {
    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };

  /**
   * @returns {HTMLElement | null}
   */
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  };

  // https://github.com/jkup/focusable/blob/master/index.js
  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  /**
   * @returns {HTMLElement[]}
   */
  var getFocusableElements = function getFocusableElements() {
    var popup = getPopup();
    if (!popup) {
      return [];
    }
    /** @type {NodeListOf<HTMLElement>} */
    var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
    var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
    // sort according to tabindex
    .sort(function (a, b) {
      var tabindexA = parseInt(a.getAttribute('tabindex') || '0');
      var tabindexB = parseInt(b.getAttribute('tabindex') || '0');
      if (tabindexA > tabindexB) {
        return 1;
      } else if (tabindexA < tabindexB) {
        return -1;
      }
      return 0;
    });

    /** @type {NodeListOf<HTMLElement>} */
    var otherFocusableElements = popup.querySelectorAll(focusable);
    var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function (el) {
      return isVisible$1(el);
    });
  };

  /**
   * @returns {boolean}
   */
  var isModal = function isModal() {
    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
  };

  /**
   * @returns {boolean}
   */
  var isToast = function isToast() {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    return hasClass(popup, swalClasses.toast);
  };

  /**
   * @returns {boolean}
   */
  var isLoading = function isLoading() {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    return popup.hasAttribute('data-loading');
  };

  /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */
  var setInnerHtml = function setInnerHtml(elem, html) {
    elem.textContent = '';
    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      var head = parsed.querySelector('head');
      head && Array.from(head.childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      var body = parsed.querySelector('body');
      body && Array.from(body.childNodes).forEach(function (child) {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }
    var classList = className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }
    return true;
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */
  var removeCustomClasses = function removeCustomClasses(elem, params) {
    Array.from(elem.classList).forEach(function (className) {
      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
        elem.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */
  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);
    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
        return;
      }
      addClass(elem, params.customClass[className]);
    }
  };

  /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */
  var getInput$1 = function getInput(popup, inputClass) {
    if (!inputClass) {
      return null;
    }
    switch (inputClass) {
      case 'select':
      case 'textarea':
      case 'file':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
      case 'checkbox':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
      case 'radio':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
      case 'range':
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
      default:
        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */
  var focusInput = function focusInput(input) {
    input.focus();

    // place cursor at end of text in text input
    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }
    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }
    classList.forEach(function (className) {
      if (Array.isArray(target)) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };

  /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };

  /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */
  var getDirectChildByClass = function getDirectChildByClass(elem, className) {
    var children = Array.from(elem.children);
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      if (child instanceof HTMLElement && hasClass(child, className)) {
        return child;
      }
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }
    if (value || parseInt(value) === 0) {
      elem.style.setProperty(property, typeof value === 'number' ? "".concat(value, "px") : value);
    } else {
      elem.style.removeProperty(property);
    }
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem && (elem.style.display = display);
  };

  /**
   * @param {HTMLElement | null} elem
   */
  var hide = function hide(elem) {
    elem && (elem.style.display = 'none');
  };

  /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */
  var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
    if (!elem) {
      return;
    }
    new MutationObserver(function () {
      toggle(elem, elem.innerHTML, display);
    }).observe(elem, {
      childList: true,
      subtree: true
    });
  };

  /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */
  var setStyle = function setStyle(parent, selector, property, value) {
    /** @type {HTMLElement | null} */
    var el = parent.querySelector(selector);
    if (el) {
      el.style.setProperty(property, value);
    }
  };

  /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */
  var toggle = function toggle(elem, condition) {
    var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
    condition ? show(elem, display) : hide(elem);
  };

  /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */
  var isVisible$1 = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };

  /**
   * @returns {boolean}
   */
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
  };

  /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  };

  /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */
  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };

  /**
   * @param {number} timer
   * @param {boolean} reset
   */
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    if (isVisible$1(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }
      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    if (!timerProgressBar) {
      return;
    }
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  /**
   * Detect Node env
   *
   * @returns {boolean}
   */
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" id=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\" id=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" id=\"").concat(swalClasses.checkbox, "\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\" id=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  /**
   * @returns {boolean}
   */
  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();
    if (!oldContainer) {
      return false;
    }
    oldContainer.remove();
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };
  var resetValidationMessage$1 = function resetValidationMessage() {
    globalState.currentInstance.resetValidationMessage();
  };
  var addInputChangeListeners = function addInputChangeListeners() {
    var popup = getPopup();
    var input = getDirectChildByClass(popup, swalClasses.input);
    var file = getDirectChildByClass(popup, swalClasses.file);
    /** @type {HTMLInputElement} */
    var range = popup.querySelector(".".concat(swalClasses.range, " input"));
    /** @type {HTMLOutputElement} */
    var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
    var select = getDirectChildByClass(popup, swalClasses.select);
    /** @type {HTMLInputElement} */
    var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getDirectChildByClass(popup, swalClasses.textarea);
    input.oninput = resetValidationMessage$1;
    file.onchange = resetValidationMessage$1;
    select.onchange = resetValidationMessage$1;
    checkbox.onchange = resetValidationMessage$1;
    textarea.oninput = resetValidationMessage$1;
    range.oninput = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
    range.onchange = function () {
      resetValidationMessage$1();
      rangeOutput.value = range.value;
    };
  };

  /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */
  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  /**
   * @param {HTMLElement} targetElement
   */
  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };

  /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */
  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }
    var container = document.createElement('div');
    container.className = swalClasses.container;
    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }
    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */
  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param);
    }

    // Object
    else if (_typeof(param) === 'object') {
      handleObject(param, target);
    }

    // Plain string
    else if (param) {
      setInnerHtml(target, param);
    }
  };

  /**
   * @param {any} param
   * @param {HTMLElement} target
   */
  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param);
    }

    // For other objects use their string representation
    else {
      setInnerHtml(target, param.toString());
    }
  };

  /**
   * @param {HTMLElement} target
   * @param {any} elem
   */
  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';
    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  /**
   * @returns {'webkitAnimationEnd' | 'animationend' | false}
   */
  var animationEndEvent = function () {
    // Prevent run in Node env
    if (isNodeEnv()) {
      return false;
    }
    var testEl = document.createElement('div');

    // Chrome, Safari and Opera
    if (typeof testEl.style.webkitAnimation !== 'undefined') {
      return 'webkitAnimationEnd';
    }

    // Standard syntax
    if (typeof testEl.style.animation !== 'undefined') {
      return 'animationend';
    }
    return false;
  }();

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    if (!actions || !loader) {
      return;
    }

    // Actions (buttons) wrapper
    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } else {
      show(actions);
    }

    // Custom class
    applyCustomClass(actions, params, 'actions');

    // Render all the buttons
    renderButtons(actions, loader, params);

    // Loader
    setInnerHtml(loader, params.loaderHtml || '');
    applyCustomClass(loader, params, 'loader');
  };

  /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */
  function renderButtons(actions, loader, params) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();
    if (!confirmButton || !denyButton || !cancelButton) {
      return;
    }

    // Render buttons
    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    if (params.reverseButtons) {
      if (params.toast) {
        actions.insertBefore(cancelButton, confirmButton);
        actions.insertBefore(denyButton, confirmButton);
      } else {
        actions.insertBefore(cancelButton, loader);
        actions.insertBefore(denyButton, loader);
        actions.insertBefore(confirmButton, loader);
      }
    }
  }

  /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */
  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      return;
    }
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

    // Buttons background colors
    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
      addClass(confirmButton, swalClasses['default-outline']);
    }
    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
      addClass(denyButton, swalClasses['default-outline']);
    }
    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
      addClass(cancelButton, swalClasses['default-outline']);
    }
  }

  /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */
  function renderButton(button, buttonType, params) {
    var buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
    toggle(button, params["show".concat(buttonName, "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || ''); // Set caption text
    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")] || ''); // ARIA label

    // Add buttons custom classes
    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
  }

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    if (!closeButton) {
      return;
    }
    setInnerHtml(closeButton, params.closeButtonHtml || '');

    // Custom class
    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();
    if (!container) {
      return;
    }
    handleBackdropParam(container, params.backdrop);
    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow);

    // Custom class
    applyCustomClass(container, params, 'container');
  };

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */
  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */
  function handlePositionParam(container, position) {
    if (!position) {
      return;
    }
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */
  function handleGrowParam(container, grow) {
    if (!grow) {
      return;
    }
    addClass(container, swalClasses["grow-".concat(grow)]);
  }

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateProps = {
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  /** @type {InputClass[]} */
  var inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderInput = function renderInput(instance, params) {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputClasses.forEach(function (inputClass) {
      var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
      if (!inputContainer) {
        return;
      }

      // set attributes
      setAttributes(inputClass, params.inputAttributes);

      // set class
      inputContainer.className = swalClasses[inputClass];
      if (rerender) {
        hide(inputContainer);
      }
    });
    if (params.input) {
      if (rerender) {
        showInput(params);
      }
      // set custom class
      setCustomClass(params);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var showInput = function showInput(params) {
    if (!params.input) {
      return;
    }
    if (!renderInputType[params.input]) {
      error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(' | '), ", got \"").concat(params.input, "\""));
      return;
    }
    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(inputContainer);

    // input autofocus
    if (params.inputAutoFocus) {
      setTimeout(function () {
        focusInput(input);
      });
    }
  };

  /**
   * @param {HTMLInputElement} input
   */
  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;
      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
        input.removeAttribute(attrName);
      }
    }
  };

  /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */
  var setAttributes = function setAttributes(inputClass, inputAttributes) {
    var input = getInput$1(getPopup(), inputClass);
    if (!input) {
      return;
    }
    removeAttributes(input);
    for (var attr in inputAttributes) {
      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);
    if (_typeof(params.customClass) === 'object') {
      addClass(inputContainer, params.customClass.input);
    }
  };

  /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */
  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */
  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      if (_typeof(params.customClass) === 'object') {
        addClass(label, params.customClass.inputLabel);
      }
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  /**
   * @param {SweetAlertOptions['input']} inputType
   * @returns {HTMLElement}
   */
  var getInputContainer = function getInputContainer(inputType) {
    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
  };

  /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */
  var checkAndSetInputValue = function checkAndSetInputValue(input, inputValue) {
    if (['string', 'number'].includes(_typeof(inputValue))) {
      input.value = "".concat(inputValue);
    } else if (!isPromise(inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(inputValue), "\""));
    }
  };

  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
  var renderInputType = {};

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = function (input, params) {
    checkAndSetInputValue(input, params.inputValue);
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    checkAndSetInputValue(rangeInput, params.inputValue);
    rangeInput.type = params.input;
    checkAndSetInputValue(rangeOutput, params.inputValue);
    setInputLabel(rangeInput, range, params);
    return range;
  };

  /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */
  renderInputType.select = function (select, params) {
    select.textContent = '';
    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }
    setInputLabel(select, select, params);
    return select;
  };

  /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */
  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */
  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput$1(getPopup(), 'checkbox');
    checkbox.value = '1';
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkbox;
  };

  /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */
  renderInputType.textarea = function (textarea, params) {
    checkAndSetInputValue(textarea, params.inputValue);
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    /**
     * @param {HTMLElement} el
     * @returns {number}
     */
    var getMargin = function getMargin(el) {
      return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
    };

    // https://github.com/sweetalert2/sweetalert2/issues/2291
    setTimeout(function () {
      // https://github.com/sweetalert2/sweetalert2/issues/1699
      if ('MutationObserver' in window) {
        var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
        var textareaResizeHandler = function textareaResizeHandler() {
          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
          if (!document.body.contains(textarea)) {
            return;
          }
          var textareaWidth = textarea.offsetWidth + getMargin(textarea);
          if (textareaWidth > initialPopupWidth) {
            getPopup().style.width = "".concat(textareaWidth, "px");
          } else {
            applyNumericalStyle(getPopup(), 'width', params.width);
          }
        };
        new MutationObserver(textareaResizeHandler).observe(textarea, {
          attributes: true,
          attributeFilter: ['style']
        });
      }
    });
    return textarea;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderContent = function renderContent(instance, params) {
    var htmlContainer = getHtmlContainer();
    if (!htmlContainer) {
      return;
    }
    showWhenInnerHtmlPresent(htmlContainer);
    applyCustomClass(htmlContainer, params, 'htmlContainer');

    // Content as HTML
    if (params.html) {
      parseHtmlToContainer(params.html, htmlContainer);
      show(htmlContainer, 'block');
    }

    // Content as plain text
    else if (params.text) {
      htmlContainer.textContent = params.text;
      show(htmlContainer, 'block');
    }

    // No content
    else {
      hide(htmlContainer);
    }
    renderInput(instance, params);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    if (!footer) {
      return;
    }
    showWhenInnerHtmlPresent(footer);
    toggle(footer, params.footer, 'block');
    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    }

    // Custom class
    applyCustomClass(footer, params, 'footer');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance);
    var icon = getIcon();
    if (!icon) {
      return;
    }

    // if the given icon already rendered, apply the styling without re-rendering the icon
    if (innerParams && params.icon === innerParams.icon) {
      // Custom or default content
      setContent(icon, params);
      applyStyles(icon, params);
      return;
    }
    if (!params.icon && !params.iconHtml) {
      hide(icon);
      return;
    }
    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
      hide(icon);
      return;
    }
    show(icon);

    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);

    // Animate icon
    addClass(icon, params.showClass && params.showClass.icon);
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var applyStyles = function applyStyles(icon, params) {
    for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        iconType = _Object$entries$_i[0],
        iconClassName = _Object$entries$_i[1];
      if (params.icon !== iconType) {
        removeClass(icon, iconClassName);
      }
    }
    addClass(icon, params.icon && iconTypes[params.icon]);

    // Icon color
    setColor(icon, params);

    // Success icon background color
    adjustSuccessIconBackgroundColor();

    // Custom class
    applyCustomClass(icon, params, 'icon');
  };

  // Adjust success icon background color to match the popup background color
  var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor() {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    /** @type {NodeListOf<HTMLElement>} */
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };
  var successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
  var errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var setContent = function setContent(icon, params) {
    if (!params.icon && !params.iconHtml) {
      return;
    }
    var oldContent = icon.innerHTML;
    var newContent = '';
    if (params.iconHtml) {
      newContent = iconContent(params.iconHtml);
    } else if (params.icon === 'success') {
      newContent = successIconHtml;
      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
    } else if (params.icon === 'error') {
      newContent = errorIconHtml;
    } else if (params.icon) {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      newContent = iconContent(defaultIconHtml[params.icon]);
    }
    if (oldContent.trim() !== newContent.trim()) {
      setInnerHtml(icon, newContent);
    }
  };

  /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */
  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }
    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;
    for (var _i2 = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i2 < _arr.length; _i2++) {
      var sel = _arr[_i2];
      setStyle(icon, sel, 'background-color', params.iconColor);
    }
    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
  };

  /**
   * @param {string} content
   * @returns {string}
   */
  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderImage = function renderImage(instance, params) {
    var image = getImage();
    if (!image) {
      return;
    }
    if (!params.imageUrl) {
      hide(image);
      return;
    }
    show(image, '');

    // Src, alt
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt || '');

    // Width, height
    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight);

    // Class
    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderPopup = function renderPopup(instance, params) {
    var container = getContainer();
    var popup = getPopup();
    if (!container || !popup) {
      return;
    }

    // Width
    // https://github.com/sweetalert2/sweetalert2/issues/2170
    if (params.toast) {
      applyNumericalStyle(container, 'width', params.width);
      popup.style.width = '100%';
      var loader = getLoader();
      loader && popup.insertBefore(loader, getIcon());
    } else {
      applyNumericalStyle(popup, 'width', params.width);
    }

    // Padding
    applyNumericalStyle(popup, 'padding', params.padding);

    // Color
    if (params.color) {
      popup.style.color = params.color;
    }

    // Background
    if (params.background) {
      popup.style.background = params.background;
    }
    hide(getValidationMessage());

    // Classes
    addClasses$1(popup, params);
  };

  /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  var addClasses$1 = function addClasses(popup, params) {
    var showClass = params.showClass || {};
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');
    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    }

    // Custom class
    applyCustomClass(popup, params, 'popup');
    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    }

    // Icon class (#1842)
    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();
    if (!progressStepsContainer) {
      return;
    }
    var progressSteps = params.progressSteps,
      currentProgressStep = params.currentProgressStep;
    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
      hide(progressStepsContainer);
      return;
    }
    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    if (currentProgressStep >= progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);
      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }
      if (index !== progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */
  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */
  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);
    if (params.progressStepsDistance) {
      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
    }
    return lineEl;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    if (!title) {
      return;
    }
    showWhenInnerHtmlPresent(title);
    toggle(title, params.title || params.titleText, 'block');
    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }
    if (params.titleText) {
      title.innerText = params.titleText;
    }

    // Custom class
    applyCustomClass(title, params, 'title');
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderProgressSteps(instance, params);
    renderIcon(instance, params);
    renderImage(instance, params);
    renderTitle(instance, params);
    renderCloseButton(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);
    var popup = getPopup();
    if (typeof params.didRender === 'function' && popup) {
      params.didRender(popup);
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */
  var isVisible = function isVisible() {
    return isVisible$1(getPopup());
  };

  /*
   * Global function to click 'Confirm' button
   */
  var clickConfirm = function clickConfirm() {
    var _dom$getConfirmButton;
    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
  };

  /*
   * Global function to click 'Deny' button
   */
  var clickDeny = function clickDeny() {
    var _dom$getDenyButton;
    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
  };

  /*
   * Global function to click 'Cancel' button
   */
  var clickCancel = function clickCancel() {
    var _dom$getCancelButton;
    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
  };

  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

  /** @type {Record<DismissReason, DismissReason>} */
  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  /**
   * @param {GlobalState} globalState
   */
  var removeKeydownHandler = function removeKeydownHandler(globalState) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */
  var addKeydownHandler = function addKeydownHandler(globalState, innerParams, dismissWith) {
    removeKeydownHandler(globalState);
    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(innerParams, e, dismissWith);
      };
      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  };

  /**
   * @param {number} index
   * @param {number} increment
   */
  var setFocus = function setFocus(index, increment) {
    var _dom$getPopup;
    var focusableElements = getFocusableElements();
    // search for visible elements and select the next possible match
    if (focusableElements.length) {
      index = index + increment;

      // rollover to first item
      if (index === focusableElements.length) {
        index = 0;

        // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }
      focusableElements[index].focus();
      return;
    }
    // no visible focusable elements, focus the popup
    (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */
  var keydownHandler = function keydownHandler(innerParams, event, dismissWith) {
    if (!innerParams) {
      return; // This instance has already been destroyed
    }

    // Ignore keydown during IME composition
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
    // https://github.com/sweetalert2/sweetalert2/issues/720
    // https://github.com/sweetalert2/sweetalert2/issues/2406
    if (event.isComposing || event.keyCode === 229) {
      return;
    }
    if (innerParams.stopKeydownPropagation) {
      event.stopPropagation();
    }

    // ENTER
    if (event.key === 'Enter') {
      handleEnter(event, innerParams);
    }

    // TAB
    else if (event.key === 'Tab') {
      handleTab(event);
    }

    // ARROWS - switch focus between buttons
    else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
      handleArrows(event.key);
    }

    // ESC
    else if (event.key === 'Escape') {
      handleEsc(event, innerParams, dismissWith);
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */
  var handleEnter = function handleEnter(event, innerParams) {
    // https://github.com/sweetalert2/sweetalert2/issues/2386
    if (!callIfFunction(innerParams.allowEnterKey)) {
      return;
    }
    var input = getInput$1(getPopup(), innerParams.input);
    if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
      if (['textarea', 'file'].includes(innerParams.input)) {
        return; // do not submit
      }
      clickConfirm();
      event.preventDefault();
    }
  };

  /**
   * @param {KeyboardEvent} event
   */
  var handleTab = function handleTab(event) {
    var targetElement = event.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;
    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    // Cycle to the next button
    if (!event.shiftKey) {
      setFocus(btnIndex, 1);
    }

    // Cycle to the prev button
    else {
      setFocus(btnIndex, -1);
    }
    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * @param {string} key
   */
  var handleArrows = function handleArrows(key) {
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();
    if (!actions || !confirmButton || !denyButton || !cancelButton) {
      return;
    }
    /** @type HTMLElement[] */
    var buttons = [confirmButton, denyButton, cancelButton];
    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
      return;
    }
    var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement;
    if (!buttonToFocus) {
      return;
    }
    for (var i = 0; i < actions.children.length; i++) {
      buttonToFocus = buttonToFocus[sibling];
      if (!buttonToFocus) {
        return;
      }
      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
        break;
      }
    }
    if (buttonToFocus instanceof HTMLButtonElement) {
      buttonToFocus.focus();
    }
  };

  /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  var handleEsc = function handleEsc(event, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      event.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */

  var privateMethods = {
    swalPromiseResolve: new WeakMap(),
    swalPromiseReject: new WeakMap()
  };

  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var container = getContainer();
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.contains(container)) {
        return;
      }
      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
      }
      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  // @ts-ignore
  var isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

  /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */
  var iOSfix = function iOSfix() {
    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
    }
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */
  var lockBodyScroll = function lockBodyScroll() {
    var container = getContainer();
    if (!container) {
      return;
    }
    /** @type {boolean} */
    var preventTouchMove;
    /**
     * @param {TouchEvent} event
     */
    container.ontouchstart = function (event) {
      preventTouchMove = shouldPreventTouchMove(event);
    };
    /**
     * @param {TouchEvent} event
     */
    container.ontouchmove = function (event) {
      if (preventTouchMove) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
  };

  /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();
    var htmlContainer = getHtmlContainer();
    if (!container || !htmlContainer) {
      return false;
    }
    if (isStylus(event) || isZoom(event)) {
      return false;
    }
    if (target === container) {
      return true;
    }
    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
    // #1603
    target.tagName !== 'TEXTAREA' &&
    // #2266
    !(isScrollable(htmlContainer) &&
    // #1944
    htmlContainer.contains(target))) {
      return true;
    }
    return false;
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */
  var isStylus = function isStylus(event) {
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */
  var isZoom = function isZoom(event) {
    return event.touches && event.touches.length > 1;
  };
  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */
  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */
  var previousBodyPadding = null;

  /**
   * @param {string} initialBodyOverflow
   */
  var replaceScrollbarWithPadding = function replaceScrollbarWithPadding(initialBodyOverflow) {
    // for queues, do not do this more than once
    if (previousBodyPadding !== null) {
      return;
    }
    // if the body has overflow
    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
    ) {
      // add padding so the content doesn't shift after removal of scrollbar
      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding() {
    if (previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
      previousBodyPadding = null;
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  function removePopupAndResetState(instance, container, returnFocus, didClose) {
    if (isToast()) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement(returnFocus).then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      removeKeydownHandler(globalState);
    }

    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
    // for some reason removing the container in Safari will scroll the document to bottom
    if (isSafariOrIOS) {
      container.setAttribute('style', 'display:none !important');
      container.removeAttribute('class');
      container.innerHTML = '';
    } else {
      container.remove();
    }
    if (isModal()) {
      undoReplaceScrollbarWithPadding();
      undoIOSfix();
      unsetAriaHidden();
    }
    removeBodyClasses();
  }

  /**
   * Remove SweetAlert2 classes from body
   */
  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
  }

  /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */
  function close(resolveValue) {
    resolveValue = prepareResolveValue(resolveValue);
    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    var didClose = triggerClosePopup(this);
    if (this.isAwaitingPromise) {
      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
      if (!resolveValue.isDismissed) {
        handleAwaitingPromise(this);
        swalPromiseResolve(resolveValue);
      }
    } else if (didClose) {
      // Resolve Swal promise
      swalPromiseResolve(resolveValue);
    }
  }
  var triggerClosePopup = function triggerClosePopup(instance) {
    var popup = getPopup();
    if (!popup) {
      return false;
    }
    var innerParams = privateProps.innerParams.get(instance);
    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return false;
    }
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(instance, popup, innerParams);
    return true;
  };

  /**
   * @param {any} error
   */
  function rejectPromise(error) {
    var rejectPromise = privateMethods.swalPromiseReject.get(this);
    handleAwaitingPromise(this);
    if (rejectPromise) {
      // Reject Swal promise
      rejectPromise(error);
    }
  }

  /**
   * @param {SweetAlert} instance
   */
  var handleAwaitingPromise = function handleAwaitingPromise(instance) {
    if (instance.isAwaitingPromise) {
      delete instance.isAwaitingPromise;
      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
      if (!privateProps.innerParams.get(instance)) {
        instance._destroy();
      }
    }
  };

  /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */
  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }
    return Object.assign({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */
  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer();
    // If animation is supported, animate
    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    if (typeof innerParams.willClose === 'function') {
      innerParams.willClose(popup);
    }
    if (animationIsSupported) {
      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */
  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
    if (!animationEndEvent) {
      return;
    }
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */
  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose.bind(instance.params)();
      }
      // instance might have been destroyed already
      if (instance._destroy) {
        instance._destroy();
      }
    });
  };

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();
    if (!popup) {
      new Swal(); // eslint-disable-line no-new
    }
    popup = getPopup();
    if (!popup) {
      return;
    }
    var loader = getLoader();
    if (isToast()) {
      hide(getIcon());
    } else {
      replaceButton(popup, buttonToReplace);
    }
    show(loader);
    popup.setAttribute('data-loading', 'true');
    popup.setAttribute('aria-busy', 'true');
    popup.focus();
  };

  /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */
  var replaceButton = function replaceButton(popup, buttonToReplace) {
    var actions = getActions();
    var loader = getLoader();
    if (!actions || !loader) {
      return;
    }
    if (!buttonToReplace && isVisible$1(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }
    show(actions);
    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
      actions.insertBefore(loader, buttonToReplace);
    }
    addClass([popup, actions], swalClasses.loading);
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(function (i) {
      return i === params.input;
    }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      showLoading(getConfirmButton());
      handleInputValue(instance, params);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();
    if (!input) {
      return null;
    }
    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);
      case 'radio':
        return getRadioValue(input);
      case 'file':
        return getFileValue(input);
      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */
  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */
  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */
  var getFileValue = function getFileValue(input) {
    return input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputOptions = function handleInputOptions(instance, params) {
    var popup = getPopup();
    if (!popup) {
      return;
    }
    /**
     * @param {Record<string, any>} inputOptions
     */
    var processInputOptions = function processInputOptions(inputOptions) {
      if (params.input === 'select') {
        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
      } else if (params.input === 'radio') {
        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
      }
    };
    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading(getConfirmButton());
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */
  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    if (!input) {
      return;
    }
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateSelectOptions(popup, inputOptions, params) {
    var select = getDirectChildByClass(popup, swalClasses.select);
    if (!select) {
      return;
    }
    /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */
    var renderOption = function renderOption(parent, optionLabel, optionValue) {
      var option = document.createElement('option');
      option.value = optionValue;
      setInnerHtml(option, optionLabel);
      option.selected = isSelected(optionValue, params.inputValue);
      parent.appendChild(option);
    };
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      // <optgroup> spec:
      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
      // check whether this is a <optgroup>
      if (Array.isArray(optionLabel)) {
        // if it is an array, then it is an <optgroup>
        var optgroup = document.createElement('optgroup');
        optgroup.label = optionValue;
        optgroup.disabled = false; // not configurable for now
        select.appendChild(optgroup);
        optionLabel.forEach(function (o) {
          return renderOption(optgroup, o[1], o[0]);
        });
      } else {
        // case of <option>
        renderOption(select, optionLabel, optionValue);
      }
    });
    select.focus();
  }

  /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */
  function populateRadioOptions(popup, inputOptions, params) {
    var radio = getDirectChildByClass(popup, swalClasses.radio);
    if (!radio) {
      return;
    }
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;
      if (isSelected(radioValue, params.inputValue)) {
        radioInput.checked = true;
      }
      var label = document.createElement('span');
      setInnerHtml(label, radioLabel);
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');
    if (radios.length) {
      radios[0].focus();
    }
  }

  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */
  var formatInputOptions = function formatInputOptions(inputOptions) {
    /** @type {InputOptionFlattened[]} */
    var result = [];
    if (inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];
        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }
        result.push([key, valueFormatted]);
      });
    }
    return result;
  };

  /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */
  var isSelected = function isSelected(optionValue, inputValue) {
    return !!inputValue && inputValue.toString() === optionValue.toString();
  };

  var _this = undefined;

  /**
   * @param {SweetAlert} instance
   */
  var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, 'confirm');
    } else {
      confirm(instance, true);
    }
  };

  /**
   * @param {SweetAlert} instance
   */
  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableButtons();
    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, 'deny');
    } else {
      deny(instance, false);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */
  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type) {
    var innerParams = privateProps.innerParams.get(instance);
    if (!innerParams.input) {
      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
      return;
    }
    var input = instance.getInput();
    var inputValue = getInputValue(instance, innerParams);
    if (innerParams.inputValidator) {
      handleInputValidator(instance, inputValue, type);
    } else if (input && !input.checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */
  var handleInputValidator = function handleInputValidator(instance, inputValue, type) {
    var innerParams = privateProps.innerParams.get(instance);
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();
      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else if (type === 'deny') {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    });
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var deny = function deny(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);
    if (innerParams.showLoaderOnDeny) {
      showLoading(getDenyButton());
    }
    if (innerParams.preDeny) {
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          instance.close({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      instance.close({
        isDenied: true,
        value: value
      });
    }
  };

  /**
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var succeedWith = function succeedWith(instance, value) {
    instance.close({
      isConfirmed: true,
      value: value
    });
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */
  var rejectWith = function rejectWith(instance, error) {
    instance.rejectPromise(error);
  };

  /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */
  var confirm = function confirm(instance, value) {
    var innerParams = privateProps.innerParams.get(instance || _this);
    if (innerParams.showLoaderOnConfirm) {
      showLoading();
    }
    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
          handleAwaitingPromise(instance);
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      })["catch"](function (error) {
        return rejectWith(instance || _this, error);
      });
    } else {
      succeedWith(instance, value);
    }
  };

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */
  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      return;
    }
    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    if (isToast()) {
      if (innerParams.icon) {
        show(getIcon());
      }
    } else {
      showRelatedButton(domCache);
    }
    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }
  var showRelatedButton = function showRelatedButton(domCache) {
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }
  };

  /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */
  function getInput() {
    var innerParams = privateProps.innerParams.get(this);
    var domCache = privateProps.domCache.get(this);
    if (!domCache) {
      return null;
    }
    return getInput$1(domCache.popup, innerParams.input);
  }

  /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */
  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */
  function setInputDisabled(input, disabled) {
    var popup = getPopup();
    if (!popup || !input) {
      return;
    }
    if (input.type === 'radio') {
      /** @type {NodeListOf<HTMLInputElement>} */
      var radios = popup.querySelectorAll("[name=\"".concat(swalClasses.radio, "\"]"));
      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  /**
   * Enable all the buttons
   * @this {SweetAlert}
   */
  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }

  /**
   * Disable all the buttons
   * @this {SweetAlert}
   */
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }

  /**
   * Enable the input field
   * @this {SweetAlert}
   */
  function enableInput() {
    setInputDisabled(this.getInput(), false);
  }

  /**
   * Disable the input field
   * @this {SweetAlert}
   */
  function disableInput() {
    setInputDisabled(this.getInput(), true);
  }

  /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */
  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];
    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }
    show(domCache.validationMessage);
    var input = this.getInput();
    if (input) {
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  }

  /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */
  function resetValidationMessage() {
    var domCache = privateProps.domCache.get(this);
    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }
    var input = this.getInput();
    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
      removeClass(input, swalClasses.inputerror);
    }
  }

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    color: undefined,
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    returnFocus: true,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    showLoaderOnDeny: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoFocus: true,
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    willOpen: undefined,
    didOpen: undefined,
    didRender: undefined,
    willClose: undefined,
    didClose: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

  /** @type {Record<string, string>} */
  var deprecatedParams = {};
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

  /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };

  /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */
  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };

  /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */
  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  /**
   * @param {string} param
   */
  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  /**
   * @param {string} param
   */
  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.includes(param)) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  /**
   * @param {string} param
   */
  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    var isDeprecated = isDeprecatedParameter(param);
    if (isDeprecated) {
      warnAboutDeprecation(param, isDeprecated);
    }
  };

  /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */
  var showWarningsForParams = function showWarningsForParams(params) {
    if (params.backdrop === false && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }
    for (var param in params) {
      checkIfParamIsValid(param);
      if (params.toast) {
        checkIfToastParamIsValid(param);
      }
      checkIfParamIsDeprecated(param);
    }
  };

  /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */
  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);
    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
      return;
    }
    var validUpdatableParams = filterValidParams(params);
    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: Object.assign({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  var filterValidParams = function filterValidParams(params) {
    var validUpdatableParams = {};
    Object.keys(params).forEach(function (param) {
      if (isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: ".concat(param));
      }
    });
    return validUpdatableParams;
  };

  /**
   * Dispose the current SweetAlert2 instance
   */
  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);
    if (!innerParams) {
      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
      return; // This instance has already been destroyed
    }

    // Check if there is another Swal closing
    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    }
    disposeSwal(this);
  }

  /**
   * @param {SweetAlert} instance
   */
  var disposeSwal = function disposeSwal(instance) {
    disposeWeakMaps(instance);
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params;
    // Unset globalState props so GC will dispose globalState (#1569)
    delete globalState.keydownHandler;
    delete globalState.keydownTarget;
    // Unset currentInstance
    delete globalState.currentInstance;
  };

  /**
   * @param {SweetAlert} instance
   */
  var disposeWeakMaps = function disposeWeakMaps(instance) {
    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
    if (instance.isAwaitingPromise) {
      unsetWeakMaps(privateProps, instance);
      instance.isAwaitingPromise = true;
    } else {
      unsetWeakMaps(privateMethods, instance);
      unsetWeakMaps(privateProps, instance);
      delete instance.isAwaitingPromise;
      // Unset instance methods
      delete instance.disableButtons;
      delete instance.enableButtons;
      delete instance.getInput;
      delete instance.disableInput;
      delete instance.enableInput;
      delete instance.hideLoading;
      delete instance.disableLoading;
      delete instance.showValidationMessage;
      delete instance.resetValidationMessage;
      delete instance.close;
      delete instance.closePopup;
      delete instance.closeModal;
      delete instance.closeToast;
      delete instance.rejectPromise;
      delete instance.update;
      delete instance._destroy;
    }
  };

  /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */
  var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
    for (var i in obj) {
      obj[i]["delete"](instance);
    }
  };

  var instanceMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    _destroy: _destroy,
    close: close,
    closeModal: close,
    closePopup: close,
    closeToast: close,
    disableButtons: disableButtons,
    disableInput: disableInput,
    disableLoading: hideLoading,
    enableButtons: enableButtons,
    enableInput: enableInput,
    getInput: getInput,
    handleAwaitingPromise: handleAwaitingPromise,
    hideLoading: hideLoading,
    rejectPromise: rejectPromise,
    resetValidationMessage: resetValidationMessage,
    showValidationMessage: showValidationMessage,
    update: update
  });

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handlePopupClick = function handlePopupClick(innerParams, domCache, dismissWith) {
    if (innerParams.toast) {
      handleToastClick(innerParams, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache);

      // Ignore click events that had mousedown on the container but mouseup on the popup
      handleContainerMousedown(domCache);
      handleModalClick(innerParams, domCache, dismissWith);
    }
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handleToastClick = function handleToastClick(innerParams, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
        return;
      }
      dismissWith(DismissReason.close);
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  var isAnyButtonShown = function isAnyButtonShown(innerParams) {
    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
  };
  var ignoreOutsideClick = false;

  /**
   * @param {DomCache} domCache
   */
  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = function () {};
        // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup
        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {DomCache} domCache
   */
  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function (e) {
      // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
      if (e.target === domCache.container) {
        e.preventDefault();
      }
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = function () {};
        // We also need to check if the mouseup target is a child of the popup
        if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */
  var handleModalClick = function handleModalClick(innerParams, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }
      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };
  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };
  var argsToParams = function argsToParams(args) {
    var params = {};
    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      Object.assign(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];
        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }
    return params;
  };

  /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */
  function fire() {
    var Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      function MixinSwal() {
        _classCallCheck(this, MixinSwal);
        return _callSuper(this, MixinSwal, arguments);
      }
      _inherits(MixinSwal, _this);
      return _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, priorityMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
        }
      }]);
    }(this); // @ts-ignore
    return MixinSwal;
  }

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */
  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };

  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };

  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */
  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };

  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */
  var increaseTimer = function increaseTimer(ms) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(ms);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };

  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */
  var isTimerRunning = function isTimerRunning() {
    return !!(globalState.timeout && globalState.timeout.isRunning());
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};

  /**
   * @param {string} attr
   */
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;
    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }
  var bodyClickListener = function bodyClickListener(event) {
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);
        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var staticMethods = /*#__PURE__*/Object.freeze({
    __proto__: null,
    argsToParams: argsToParams,
    bindClickHandler: bindClickHandler,
    clickCancel: clickCancel,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    enableLoading: showLoading,
    fire: fire,
    getActions: getActions,
    getCancelButton: getCancelButton,
    getCloseButton: getCloseButton,
    getConfirmButton: getConfirmButton,
    getContainer: getContainer,
    getDenyButton: getDenyButton,
    getFocusableElements: getFocusableElements,
    getFooter: getFooter,
    getHtmlContainer: getHtmlContainer,
    getIcon: getIcon,
    getIconContent: getIconContent,
    getImage: getImage,
    getInputLabel: getInputLabel,
    getLoader: getLoader,
    getPopup: getPopup,
    getProgressSteps: getProgressSteps,
    getTimerLeft: getTimerLeft,
    getTimerProgressBar: getTimerProgressBar,
    getTitle: getTitle,
    getValidationMessage: getValidationMessage,
    increaseTimer: increaseTimer,
    isDeprecatedParameter: isDeprecatedParameter,
    isLoading: isLoading,
    isTimerRunning: isTimerRunning,
    isUpdatableParameter: isUpdatableParameter,
    isValidParameter: isValidParameter,
    isVisible: isVisible,
    mixin: mixin,
    resumeTimer: resumeTimer,
    showLoading: showLoading,
    stopTimer: stopTimer,
    toggleTimer: toggleTimer
  });

  var Timer = /*#__PURE__*/function () {
    /**
     * @param {Function} callback
     * @param {number} delay
     */
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);
      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    /**
     * @returns {number}
     */
    return _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }
        return this.remaining;
      }

      /**
       * @returns {number}
       */
    }, {
      key: "stop",
      value: function stop() {
        if (this.started && this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date().getTime() - this.started.getTime();
        }
        return this.remaining;
      }

      /**
       * @param {number} n
       * @returns {number}
       */
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;
        if (running) {
          this.stop();
        }
        this.remaining += n;
        if (running) {
          this.start();
        }
        return this.remaining;
      }

      /**
       * @returns {number}
       */
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }
        return this.remaining;
      }

      /**
       * @returns {boolean}
       */
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);
  }();

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

  /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */
  var getTemplateParams = function getTemplateParams(params) {
    /** @type {HTMLTemplateElement} */
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
    if (!template) {
      return {};
    }
    /** @type {DocumentFragment} */
    var templateContent = template.content;
    showWarningsForElements(templateContent);
    var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
    swalParams.forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      if (typeof defaultParams[paramName] === 'boolean') {
        result[paramName] = value !== 'false';
      } else if (_typeof(defaultParams[paramName]) === 'object') {
        result[paramName] = JSON.parse(value);
      } else {
        result[paramName] = value;
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalFunctionParams = function getSwalFunctionParams(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
    swalFunctions.forEach(function (param) {
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');
      result[paramName] = new Function("return ".concat(value))();
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    /** @type {HTMLElement[]} */
    var swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
    swalButtons.forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }
      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var image = templateContent.querySelector('swal-image');
    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }
      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }
      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }
      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var icon = templateContent.querySelector('swal-icon');
    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);
      if (icon.hasAttribute('type')) {
        /** @type {SweetAlertIcon} */
        // @ts-ignore
        result.icon = icon.getAttribute('type');
      }
      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }
      result.iconHtml = icon.innerHTML;
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @returns {SweetAlertOptions}
   */
  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    /** @type {HTMLElement} */
    var input = templateContent.querySelector('swal-input');
    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      /** @type {SweetAlertInput} */
      // @ts-ignore
      result.input = input.getAttribute('type') || 'text';
      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }
      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }
      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }
    /** @type {HTMLElement[]} */
    var inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
    if (inputOptions.length) {
      result.inputOptions = {};
      inputOptions.forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {SweetAlertOptions}
   */
  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};
    for (var i in paramNames) {
      var paramName = paramNames[i];
      /** @type {HTMLElement} */
      var tag = templateContent.querySelector(paramName);
      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
      }
    }
    return result;
  };

  /**
   * @param {DocumentFragment} templateContent
   */
  var showWarningsForElements = function showWarningsForElements(templateContent) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    Array.from(templateContent.children).forEach(function (el) {
      var tagName = el.tagName.toLowerCase();
      if (!allowedElements.includes(tagName)) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */
  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    Array.from(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;

  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */
  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();
    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    }
    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses(container, popup, params);

    // scrolling is 'hidden' until animation is done, after that 'auto'
    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);
    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }
    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    }
    removeClass(container, swalClasses['no-transition']);
  };

  /**
   * @param {AnimationEvent} event
   */
  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();
    if (event.target !== popup || !animationEndEvent) {
      return;
    }
    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */
  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */
  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      replaceScrollbarWithPadding(initialBodyOverflow);
    }

    // sweetalert2/issues/1247
    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */
  var addClasses = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop);
    if (params.animation) {
      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
      popup.style.setProperty('opacity', '0', 'important');
      show(popup, 'grid');
      setTimeout(function () {
        // Animate popup right after showing it
        addClass(popup, params.showClass.popup);
        // and remove the opacity workaround
        popup.style.removeProperty('opacity');
      }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
    } else {
      show(popup, 'grid');
    }
    addClass([document.documentElement, document.body], swalClasses.shown);
    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var defaultInputValidators = {
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  /**
   * @param {SweetAlertOptions} params
   */
  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (params.inputValidator) {
      return;
    }
    if (params.input === 'email') {
      params.inputValidator = defaultInputValidators['email'];
    }
    if (params.input === 'url') {
      params.inputValidator = defaultInputValidators['url'];
    }
  }

  /**
   * @param {SweetAlertOptions} params
   */
  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }

  /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */
  function setParameters(params) {
    setDefaultInputValidators(params);

    // showLoaderOnConfirm && preConfirm
    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    }
    validateCustomTargetElement(params);

    // Replace newlines with <br> in title
    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }
    init(params);
  }

  /** @type {SweetAlert} */
  var currentInstance;
  var _promise = /*#__PURE__*/new WeakMap();
  var SweetAlert = /*#__PURE__*/function () {
    /**
     * @param {...any} args
     * @this {SweetAlert}
     */
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);
      /**
       * @type {Promise<SweetAlertResult>}
       */
      _classPrivateFieldInitSpec(this, _promise, void 0);
      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      }
      currentInstance = this;

      // @ts-ignore
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var outerParams = Object.freeze(this.constructor.argsToParams(args));

      /** @type {Readonly<SweetAlertOptions>} */
      this.params = outerParams;

      /** @type {boolean} */
      this.isAwaitingPromise = false;
      _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
    }
    return _createClass(SweetAlert, [{
      key: "_main",
      value: function _main(userParams) {
        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        showWarningsForParams(Object.assign({}, mixinParams, userParams));
        if (globalState.currentInstance) {
          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
          var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
          globalState.currentInstance._destroy();
          if (!isAwaitingPromise) {
            swalPromiseResolve({
              isDismissed: true
            });
          }
          if (isModal()) {
            unsetAriaHidden();
          }
        }
        globalState.currentInstance = currentInstance;
        var innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams);

        // clear the previous timer
        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        }

        // clear the restore focus timeout
        clearTimeout(globalState.restoreFocusTimeout);
        var domCache = populateDomCache(currentInstance);
        render(currentInstance, innerParams);
        privateProps.innerParams.set(currentInstance, innerParams);
        return swalPromise(currentInstance, domCache, innerParams);
      }

      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
    }, {
      key: "then",
      value: function then(onFulfilled) {
        return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        return _classPrivateFieldGet2(_promise, this)["finally"](onFinally);
      }
    }]);
  }();

  /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */
  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve, reject) {
      // functions to handle all closings/dismissals
      /**
       * @param {DismissReason} dismiss
       */
      var dismissWith = function dismissWith(dismiss) {
        instance.close({
          isDismissed: true,
          dismiss: dismiss
        });
      };
      privateMethods.swalPromiseResolve.set(instance, resolve);
      privateMethods.swalPromiseReject.set(instance, reject);
      domCache.confirmButton.onclick = function () {
        handleConfirmButtonClick(instance);
      };
      domCache.denyButton.onclick = function () {
        handleDenyButtonClick(instance);
      };
      domCache.cancelButton.onclick = function () {
        handleCancelButtonClick(instance, dismissWith);
      };
      domCache.closeButton.onclick = function () {
        dismissWith(DismissReason.close);
      };
      handlePopupClick(innerParams, domCache, dismissWith);
      addKeydownHandler(globalState, innerParams, dismissWith);
      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams);

      // Scroll container to top on open (#1247, #1946)
      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */
  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);
    var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
    if (params.animation === false) {
      params.showClass = {
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }
    return params;
  };

  /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */
  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */
  var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);
    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
        setTimeout(function () {
          if (globalState.timeout && globalState.timeout.running) {
            // timer can be already stopped or unset at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */
  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }
    if (!callIfFunction(innerParams.allowEnterKey)) {
      blurActiveElement();
      return;
    }
    if (!focusButton(domCache, innerParams)) {
      setFocus(-1, 1);
    }
  };

  /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */
  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }
    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }
    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }
    return false;
  };
  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  // Dear russian users visiting russian sites. Let's have fun.
  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
    var now = new Date();
    var initiationDate = localStorage.getItem('swal-initiation');
    if (!initiationDate) {
      localStorage.setItem('swal-initiation', "".concat(now));
    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
      setTimeout(function () {
        document.body.style.pointerEvents = 'none';
        var ukrainianAnthem = document.createElement('audio');
        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(function () {
          ukrainianAnthem.play()["catch"](function () {
            // ignore
          });
        }, 2500);
      }, 500);
    }
  }

  // Assign instance methods from src/instanceMethods/*.js to prototype
  SweetAlert.prototype.disableButtons = disableButtons;
  SweetAlert.prototype.enableButtons = enableButtons;
  SweetAlert.prototype.getInput = getInput;
  SweetAlert.prototype.disableInput = disableInput;
  SweetAlert.prototype.enableInput = enableInput;
  SweetAlert.prototype.hideLoading = hideLoading;
  SweetAlert.prototype.disableLoading = hideLoading;
  SweetAlert.prototype.showValidationMessage = showValidationMessage;
  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
  SweetAlert.prototype.close = close;
  SweetAlert.prototype.closePopup = close;
  SweetAlert.prototype.closeModal = close;
  SweetAlert.prototype.closeToast = close;
  SweetAlert.prototype.rejectPromise = rejectPromise;
  SweetAlert.prototype.update = update;
  SweetAlert.prototype._destroy = _destroy;

  // Assign static methods from src/staticMethods/*.js to constructor
  Object.assign(SweetAlert, staticMethods);

  // Proxy to instance methods to constructor, for now, for backwards compatibility
  Object.keys(instanceMethods).forEach(function (key) {
    /**
     * @param {...any} args
     * @returns {any | undefined}
     */
    SweetAlert[key] = function () {
      if (currentInstance && currentInstance[key]) {
        var _currentInstance;
        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
      return null;
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '11.10.8';

  var Swal = SweetAlert;
  // @ts-ignore
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}");

/***/ }),

/***/ "./src/DegreeSequence .ts":
/*!********************************!*\
  !*** ./src/DegreeSequence .ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DegreeSequence: () => (/* binding */ DegreeSequence)
/* harmony export */ });
// ============================================================================
// 次数配列クラス
// ============================================================================
class DegreeSequence {
    constructor() {
        this.sequence = [];
    }
    // 次数配列形式の文字列取得
    getArrayString() {
        return this.sequence.join(", ");
    }
    // ランレングス圧縮形式の文字列取得
    getRunLengthString() {
        return this.convertToRunLength(this.sequence);
    }
    // 入力文字から配列にセットする
    setVertices(vertices) {
        this.sequence = vertices.map((vertex) => vertex.getDegree());
        this.sequence.sort((a, b) => b - a);
    }
    // 入力文字から配列にセットする
    setValue(value) {
        let cleanedValue = value
            .replace(/([,*])\1+/g, "$1") // 連続するカンマやアスタリスクを一つにする
            .replace(/[,*]$/, ""); // 最後のカンマやアスタリスクを削除
        // 文字列を配列に変換
        if (cleanedValue.includes("*")) {
            this.sequence = this.runLengthStringToSequence(cleanedValue);
        }
        else {
            this.sequence = this.arrayStringToSequence(cleanedValue);
        }
        // ソート
        this.sequence.sort((a, b) => b - a);
    }
    // ランレングス圧縮形式の文字列を配列に変換
    runLengthStringToSequence(input) {
        if (!input)
            return [];
        return input.split(",").reduce((acc, part) => {
            const [value, count] = part.split("*").map(Number);
            if (count !== 0) {
                // 数が0でない場合のみ追加
                for (let i = 0; i < count; i++) {
                    acc.push(value);
                }
            }
            return acc;
        }, []);
    }
    // 次数配列形式の文字列を配列に変換
    arrayStringToSequence(input) {
        return input
            .split(",")
            .filter((item) => item !== "")
            .map(Number);
    }
    // ランレングス圧縮形式の文字列に変換
    convertToRunLength(sequence) {
        if (sequence.length === 0)
            return "";
        // 降順にソート
        sequence.sort((a, b) => b - a);
        let result = [];
        let current = sequence[0];
        let count = 1;
        for (let i = 1; i < this.sequence.length; i++) {
            if (this.sequence[i] === current) {
                count++;
            }
            else {
                result.push(`${current}*${count}`);
                current = this.sequence[i];
                count = 1;
            }
        }
        // 最後の要素を追加
        result.push(`${current}*${count}`);
        return result.join(", ");
    }
    // 極大平面グラフかどうかを検証
    isMaximalPlanarGraph() {
        if (!this.isValidDegreeSequence()) {
            return false;
        }
        const n = this.sequence.length;
        const totalDegree = this.sequence.reduce((sum, degree) => sum + degree, 0);
        const expectedEdges = 3 * n - 6;
        if (n < 3)
            return false;
        if (totalDegree !== 2 * expectedEdges)
            return false;
        return true;
    }
    // ハベル・ハキミの定理を用いて次数配列がグラフになるかチェック
    isValidDegreeSequence() {
        let degrees = [...this.sequence].sort((a, b) => b - a);
        while (degrees.length > 0 && degrees[0] > 0) {
            let first = degrees.shift();
            if (first > degrees.length) {
                return false;
            }
            for (let i = 0; i < first; i++) {
                degrees[i]--;
                if (degrees[i] < 0) {
                    return false;
                }
            }
            degrees = degrees.sort((a, b) => b - a);
        }
        return degrees.every((degree) => degree === 0);
    }
}


/***/ }),

/***/ "./src/GraphManager.ts":
/*!*****************************!*\
  !*** ./src/GraphManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphManager: () => (/* binding */ GraphManager)
/* harmony export */ });
/* harmony import */ var _DegreeSequence___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DegreeSequence  */ "./src/DegreeSequence .ts");
/* harmony import */ var _object_Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/Control */ "./src/object/Control.ts");
/* harmony import */ var _object_Edge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object/Edge */ "./src/object/Edge.ts");
/* harmony import */ var _object_Vertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object/Vertex */ "./src/object/Vertex.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");





// ============================================================================
// グラフクラス
// ============================================================================
class GraphManager {
    constructor(canvas, updateDegreeSequence, updateInfo) {
        this.MAX_CANVAS_WIDTH = 20000;
        this.MAX_CANVAS_HEIGHT = 10000;
        // グリッド表示状態
        this.showGrid = true;
        // 力指向モード
        this.forceDirectMode = true;
        // マウス位置
        this.mouse = { x: 0, y: 0 };
        // オブジェクト管理
        this.vertices = [];
        this.edges = [];
        // オブジェクト操作
        this.selectedVertex = null;
        this.selectedEdge = null;
        this.draggingPoint = null;
        this.activeEdge = null;
        // ズーム機能関連
        this.origin = { x: 0, y: 0 };
        this.scale = 1;
        this.zoomLevels = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.75, 2.0, 2.5, 3.0, 3.5, 4.0];
        this.currentZoomIndex = 10; // 初期値 100%
        // パン機能
        this.isDragging = false;
        this.lastPos = { x: 0, y: 0 };
        // 頂点情報表示
        this.showIndex = false;
        this.showDegree = false;
        // ============================================================================
        // 力指向アルゴリズム
        // ============================================================================
        this.intervalId = null;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.degrees = new _DegreeSequence___WEBPACK_IMPORTED_MODULE_0__.DegreeSequence();
        this.updateDegreeSequence = updateDegreeSequence;
        this.updateInfo = updateInfo;
        this.setupEvents();
        this.resizeCanvas();
    }
    // ============================================================================
    // イベント処理
    // ============================================================================
    // イベント登録
    setupEvents() {
        this.canvas.addEventListener("dblclick", this.handleDoubleClick.bind(this));
        this.canvas.addEventListener("mousemove", this.handleMouseMove.bind(this));
        this.canvas.addEventListener("mouseout", this.handleMouseOut.bind(this));
        this.canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.canvas.addEventListener("mouseup", this.handleMouseUp.bind(this));
        this.canvas.addEventListener("contextmenu", this.handleContextMenu.bind(this));
        this.canvas.addEventListener("wheel", this.handleWheel.bind(this));
        window.addEventListener("resize", this.resizeCanvas.bind(this));
        this.changeForceDirectMode(this.forceDirectMode);
    }
    // ダブルクリック
    handleDoubleClick(e) {
        this.mouse = this.getMousePosition(e);
        this.addVertex(this.mouse.x, this.mouse.y);
        this.drawGraph();
    }
    // マウスムーブ
    handleMouseMove(e) {
        this.mouse = this.getMousePosition(e);
        // 頂点か制御点の移動
        if (this.draggingPoint) {
            this.draggingPoint.x = this.mouse.x;
            this.draggingPoint.y = this.mouse.y;
            this.canvas.style.cursor = "move";
        }
        // キャンバスの移動
        else if (this.isDragging) {
            const dx = e.clientX - this.lastPos.x;
            const dy = e.clientY - this.lastPos.y;
            this.origin.x += dx;
            this.origin.y += dy;
            // 移動制限
            this.limitCanvasPan();
            this.lastPos.x = e.clientX;
            this.lastPos.y = e.clientY;
        }
        // 頂点選択済みの場合
        else if (this.selectedVertex) {
            this.canvas.style.cursor = "crosshair";
        }
        else {
            // 辺の近くの場合
            const edge = _utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
            edge && (this.activeEdge = edge);
            // 頂点か制御点の近くの場合
            const point = _utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findPointAt(this.mouse.x, this.mouse.y, this.vertices, this.edges);
            this.canvas.style.cursor = point ? "move" : "default";
        }
        this.drawGraph();
    }
    // マウスアウト
    handleMouseOut(e) {
        this.canvas.style.cursor = "default";
        this.handleMouseUp(e);
    }
    // マウスダウン
    handleMouseDown(e) {
        // 左クリック以外は処理なし
        if (e.button !== _utils__WEBPACK_IMPORTED_MODULE_4__.MouseButton.Left) {
            return;
        }
        this.mouse = this.getMousePosition(e);
        const vertex = _utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
        const edge = _utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
        const control = _utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findControlAt(this.mouse.x, this.mouse.y, this.edges);
        // 判定のため一時退避
        const tempSelectedVertex = this.selectedVertex;
        // 選択状態の初期化
        this.initSelected();
        // 頂点の場合
        if (vertex) {
            if (tempSelectedVertex) {
                // 選択済み頂点と、異なる頂点が取得できた場合
                if (tempSelectedVertex !== vertex) {
                    this.addEdge(tempSelectedVertex, vertex);
                }
            }
            // 頂点を選択済みにする
            vertex.isSelected = true;
            this.selectedVertex = vertex;
            // カーソルを選択用に変更
            this.canvas.style.cursor = "crosshair";
            // ドラッグ開始
            this.draggingPoint = vertex;
        }
        // 制御点の場合
        else if (control) {
            // ドラッグ開始
            this.draggingPoint = control;
        }
        // 辺の場合
        else if (edge) {
            // 辺を選択済みにする
            this.selectedEdge = edge;
            this.selectedEdge.isSelected = true;
        }
        // キャンバスの選択
        else {
            this.isDragging = true;
            this.lastPos.x = e.clientX;
            this.lastPos.y = e.clientY;
        }
        this.drawGraph();
    }
    // マウスアップ
    handleMouseUp(e) {
        if (this.draggingPoint instanceof _object_Control__WEBPACK_IMPORTED_MODULE_1__.Control) {
            // バウンディングボックスの再算出
        }
        this.draggingPoint = null;
        this.isDragging = false;
        this.drawGraph();
    }
    // 右クリック
    handleContextMenu(e) {
        e.preventDefault();
        this.mouse = this.getMousePosition(e);
        const vertex = _utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findVertexAt(this.mouse.x, this.mouse.y, this.vertices);
        const edge = _utils__WEBPACK_IMPORTED_MODULE_4__.Utils.findEdgeAt(this.mouse.x, this.mouse.y, this.edges);
        // 選択状態の初期化
        this.initSelected();
        // 削除処理
        if (vertex) {
            // 頂点を削除
            this.deleteVertex(vertex);
        }
        else if (edge) {
            // 辺を削除
            this.deleteEdge(edge);
        }
        this.drawGraph();
    }
    // マウスホイール
    handleWheel(e) {
        e.preventDefault();
        this.mouse = this.getMousePosition(e);
        // ズームレベルの更新
        if (e.deltaY < 0) {
            // ズームイン
            this.currentZoomIndex = Math.min(this.currentZoomIndex + 1, this.zoomLevels.length - 1);
        }
        else {
            // ズームアウト
            this.currentZoomIndex = Math.max(this.currentZoomIndex - 1, 0);
        }
        // 新しいスケールを取得し、スケールが変更されたか確認
        const newScale = this.zoomLevels[this.currentZoomIndex];
        if (newScale !== this.scale) {
            // マウス位置をズームイン、ズームアウトする
            // scaleのキャンバスのマウス位置の割合と、newScaleのキャンバスのマウス位置の割合が同じため下記の式が成り立つ
            // (mouse + origin / scale) / (canvas / scale) = (mouse + newOrigin / newScale) / (canvas / newScale)
            // これを newOrigin について解くと、次の通りになる
            this.origin.x = this.mouse.x * (this.scale - newScale) + this.origin.x;
            this.origin.y = this.mouse.y * (this.scale - newScale) + this.origin.y;
            this.scale = newScale;
            // 移動制限
            this.limitCanvasPan();
        }
        this.drawGraph();
    }
    // ============================================================================
    // 処理関数
    // ============================================================================
    // マウス位置を取得する
    getMousePosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - this.origin.x) / this.scale;
        const y = (e.clientY - rect.top - this.origin.y) / this.scale;
        return { x, y };
    }
    // 選択状態を初期化する
    initSelected() {
        this.selectedVertex && (this.selectedVertex.isSelected = false);
        this.selectedVertex = null;
        this.selectedEdge && (this.selectedEdge.isSelected = false);
        this.selectedEdge = null;
        this.canvas.style.cursor = "default";
    }
    // 頂点を追加する
    addVertex(x, y) {
        const vertex = new _object_Vertex__WEBPACK_IMPORTED_MODULE_3__.Vertex(x, y);
        this.vertices.push(vertex);
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices);
        return vertex;
    }
    // 頂点を削除する
    deleteVertex(vertex) {
        // 頂点を削除
        this.vertices.splice(this.vertices.indexOf(vertex), 1);
        // 頂点に接続された辺を取得
        const deleteEdges = this.edges.filter((edge) => edge.from === vertex || edge.to === vertex);
        // 辺を削除
        deleteEdges.forEach((edge) => {
            this.deleteEdge(edge);
        });
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices);
    }
    // 辺を追加する
    addEdge(from, to) {
        // 異なる２頂点か？
        if (from && to && from !== to) {
            // 重複辺を取得
            const duplicateEdge = this.edges.find((edge) => (edge.from === from && edge.to === to) || (edge.from === to && edge.to === from));
            // 重複辺は削除
            if (duplicateEdge) {
                this.deleteEdge(duplicateEdge);
            }
            // 新しい辺を追加
            const edge = new _object_Edge__WEBPACK_IMPORTED_MODULE_2__.Edge(from, to);
            this.edges.push(edge);
            // 次数配列の更新
            this.updateDegreeSequence(this.vertices);
            return edge;
        }
        return null;
    }
    // 辺を削除する
    deleteEdge(edge) {
        // 辺に接続している頂点から、辺を削除
        edge.from.deleteEdge(edge);
        edge.to.deleteEdge(edge);
        // 辺オブジェクト配列から、辺を削除
        this.edges = this.edges.filter((tempEdge) => tempEdge !== edge);
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices);
    }
    // キャンバスの移動制限
    limitCanvasPan() {
        const maxX = this.MAX_CANVAS_WIDTH * this.scale - this.canvas.width;
        const maxY = this.MAX_CANVAS_HEIGHT * this.scale - this.canvas.height;
        this.origin.x = this.origin.x + maxX < 0 ? -maxX : this.origin.x;
        this.origin.y = this.origin.y + maxY < 0 ? -maxY : this.origin.y;
        this.origin.x = 0 < this.origin.x ? 0 : this.origin.x;
        this.origin.y = 0 < this.origin.y ? 0 : this.origin.y;
    }
    // リサイズ
    resizeCanvas() {
        this.canvas.width = window.innerWidth * 0.8;
        this.canvas.height = window.innerHeight - 90;
        // 中心を初期描画位置にする
        this.origin.x = (this.MAX_CANVAS_WIDTH - this.canvas.width / this.scale) / 2;
        this.origin.y = (this.MAX_CANVAS_HEIGHT - this.canvas.height / this.scale) / 2;
        // 座標をピクセルに変換し、値をマイナス変換をする（originの仕様）
        this.origin.x = -this.origin.x * this.scale;
        this.origin.y = -this.origin.y * this.scale;
        this.drawGraph();
    }
    // グラフの初期化
    initGraph() {
        this.vertices = [];
        this.edges = [];
        this.initSelected();
        this.scale = 1;
        this.currentZoomIndex = 10;
        this.draggingPoint = null;
        this.activeEdge = null;
        this.isDragging = false;
        this.lastPos = { x: 0, y: 0 };
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices);
        this.resizeCanvas();
    }
    // 頂点情報の表示切り替え
    drawVertexInfo(showIndex, showDegree) {
        this.showIndex = showIndex;
        this.showDegree = showDegree;
        this.drawGraph();
    }
    // 辺をすべて直線にする
    straightenEdges() {
        for (let edge of this.edges) {
            edge.straightenEdge();
        }
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices);
        this.drawGraph();
    }
    // ============================================================================
    // 描画処理
    // ============================================================================
    // グリッドの描画
    drawGrid() {
        if (!this.showGrid) {
            return;
        }
        const gridSize = 100;
        const gridCountX = Math.ceil(this.MAX_CANVAS_WIDTH / gridSize);
        const gridCountY = Math.ceil(this.MAX_CANVAS_HEIGHT / gridSize);
        this.ctx.save();
        this.ctx.strokeStyle = "#e0e0e0";
        this.ctx.lineWidth = 1;
        // グリッド線を描画
        for (let i = 0; i <= gridCountX; i++) {
            const x = i * gridSize;
            this.ctx.beginPath();
            this.ctx.moveTo(x, 0);
            this.ctx.lineTo(x, this.MAX_CANVAS_HEIGHT);
            this.ctx.stroke();
        }
        for (let j = 0; j <= gridCountY; j++) {
            const y = j * gridSize;
            this.ctx.beginPath();
            this.ctx.moveTo(0, y);
            this.ctx.lineTo(this.MAX_CANVAS_WIDTH, y);
            this.ctx.stroke();
        }
        this.ctx.restore();
    }
    // グラフ描画
    drawGraph() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save();
        this.ctx.translate(this.origin.x, this.origin.y);
        this.ctx.scale(this.scale, this.scale);
        // グリッドの描画
        this.drawGrid();
        // 力指向モードによって辺の描画を切り替える
        if (this.forceDirectMode) {
            // 辺の描画
            this.edges.forEach((edge) => edge.draw(this.ctx));
        }
        else {
            // 辺の描画
            this.edges.forEach((edge) => edge.drawBezier(this.ctx));
            // 制御点の描画
            this.activeEdge && this.activeEdge.control.draw(this.ctx);
            this.draggingPoint instanceof _object_Control__WEBPACK_IMPORTED_MODULE_1__.Control && this.draggingPoint.draw(this.ctx);
        }
        // 頂点の描画
        this.vertices.forEach((vertex, index) => vertex.draw(this.ctx, this.showIndex, index, this.showDegree));
        this.ctx.restore();
        // 画面上の情報更新
        this.updateInfo({
            vertexCount: this.vertices.length,
            edgeCount: this.edges.length,
        });
        // 情報表示（倍率と座標）
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.font = "16px Sans-serif";
        const zoomText = `倍率: ${this.scale.toFixed(2)}x  座標: (${this.mouse.x.toFixed(0)}, ${this.mouse.y.toFixed(0)})`;
        const zoomTextWidth = this.ctx.measureText(zoomText).width;
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, this.canvas.height - 30, zoomTextWidth + 20, 30);
        this.ctx.fillStyle = "black";
        this.ctx.fillText(zoomText, 10, this.canvas.height - 10);
        this.ctx.restore();
    }
    // 力指向モードのON/OFF
    changeForceDirectMode(forceDirectMode) {
        this.forceDirectMode = forceDirectMode;
        if (this.forceDirectMode) {
            this.intervalId = setInterval(() => {
                this.updateForceDirectedLayout();
            }, 100);
        }
        else if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    // 力指向レイアウトの更新
    updateForceDirectedLayout() {
        // 斥力
        const repulsionConstant = 30000;
        // 引力
        const attractionConstant = 10000;
        const maxDisplacement = 50;
        const minDistance = 10;
        // 初期変位を0で設定
        let displacements = this.vertices.map(() => ({ x: 0, y: 0 }));
        // 斥力
        this.vertices.forEach((from, i) => {
            this.vertices.forEach((to, j) => {
                if (i !== j) {
                    const dx = from.x - to.x;
                    const dy = from.y - to.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    distance = Math.max(distance, minDistance);
                    const force = repulsionConstant / (distance * distance);
                    displacements[i].x += (dx / distance) * force;
                    displacements[i].y += (dy / distance) * force;
                }
            });
        });
        // 引力
        this.edges.forEach((edge) => {
            const fromIndex = this.vertices.indexOf(edge.from);
            const toIndex = this.vertices.indexOf(edge.to);
            const dx = edge.from.x - edge.to.x;
            const dy = edge.from.y - edge.to.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = (distance * distance) / attractionConstant;
            displacements[fromIndex].x -= (dx / distance) * force;
            displacements[fromIndex].y -= (dy / distance) * force;
            displacements[toIndex].x += (dx / distance) * force;
            displacements[toIndex].y += (dy / distance) * force;
        });
        // 移動座標設定
        displacements.forEach((displacement, index) => {
            const scalar = Math.sqrt(displacement.x * displacement.x + displacement.y * displacement.y);
            if (scalar > 0) {
                const limitedDispX = (displacement.x / scalar) * Math.min(scalar, maxDisplacement);
                const limitedDispY = (displacement.y / scalar) * Math.min(scalar, maxDisplacement);
                this.vertices[index].x += Math.round(limitedDispX);
                this.vertices[index].y += Math.round(limitedDispY);
            }
        });
        this.drawGraph();
    }
    // ============================================================================
    // エクスポート／インポート処理
    // ============================================================================
    // グラフの状態をJSONとしてエクスポート
    exportToJson() {
        const exportData = {
            vertices: this.vertices.map((vertex, index) => ({
                id: index,
                x: vertex.x,
                y: vertex.y,
            })),
            edges: this.edges.map((edge) => ({
                from: this.vertices.indexOf(edge.from),
                to: this.vertices.indexOf(edge.to),
                control: {
                    x: edge.control.x,
                    y: edge.control.y,
                },
            })),
        };
        return JSON.stringify(exportData);
    }
    // JSONからグラフの状態をインポート
    importFromJson(jsonString) {
        const importData = JSON.parse(jsonString);
        this.vertices = importData.vertices.map((vData) => new _object_Vertex__WEBPACK_IMPORTED_MODULE_3__.Vertex(vData.x, vData.y));
        this.edges = importData.edges.map((eData) => {
            const fromVertex = this.vertices[eData.from];
            const toVertex = this.vertices[eData.to];
            const edge = new _object_Edge__WEBPACK_IMPORTED_MODULE_2__.Edge(fromVertex, toVertex);
            edge.control.x = eData.control.x;
            edge.control.y = eData.control.y;
            return edge;
        });
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices);
        this.drawGraph();
    }
}


/***/ }),

/***/ "./src/object/Control.ts":
/*!*******************************!*\
  !*** ./src/object/Control.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Control: () => (/* binding */ Control)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/object/Point.ts");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");


// ============================================================================
// 制御点クラス
// ============================================================================
class Control extends _Point__WEBPACK_IMPORTED_MODULE_0__.Point {
    constructor(from, to, edge) {
        super(0, 0);
        this.from = from;
        this.to = to;
        this.edge = edge;
        // 中点の座標にする
        this.init();
    }
    // 初期化
    init() {
        this.x = (this.from.x + this.to.x) / 2;
        this.y = (this.from.y + this.to.y) / 2 - Control.ADJUST_VIEW;
    }
    // 計算用の制御点座標（ペジェ曲線算出用）
    getCalcPosition() {
        const controlX = this.x;
        const controlY = this.y + Control.ADJUST_VIEW;
        const midpointX = (this.from.x + this.to.x) / 2;
        const midpointY = (this.from.y + this.to.y) / 2;
        const x = midpointX + Control.IMPACT_FACTOR * (controlX - midpointX);
        const y = midpointY + Control.IMPACT_FACTOR * (controlY - midpointY);
        return new _Position__WEBPACK_IMPORTED_MODULE_1__.Position(x, y);
    }
    // 描画
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
// 制御点移動の影響倍率
Control.IMPACT_FACTOR = 3;
// 制御点の表示位置調整
Control.ADJUST_VIEW = 20;


/***/ }),

/***/ "./src/object/Edge.ts":
/*!****************************!*\
  !*** ./src/object/Edge.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Edge: () => (/* binding */ Edge)
/* harmony export */ });
/* harmony import */ var _Control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Control */ "./src/object/Control.ts");
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");


// ============================================================================
// 辺クラス
// ============================================================================
class Edge {
    constructor(from, to) {
        this.from = from;
        this.to = to;
        this.control = new _Control__WEBPACK_IMPORTED_MODULE_0__.Control(from, to, this);
        this.isSelected = false;
        // 頂点に辺を追加する
        this.from.addEdge(this);
        this.to.addEdge(this);
    }
    // 辺を直線にする
    straightenEdge() {
        this.control.init();
    }
    // 範囲内か
    isNear(mouseX, mouseY, tolerance = 10) {
        const calcPosition = this.control.getCalcPosition();
        // ベジェ曲線を分割して近似
        const segment = 10;
        for (let i = 0; i < segment; i++) {
            const t1 = i / segment;
            const t2 = (i + 1) / segment;
            const p1 = this.getBezierPosition(t1, calcPosition);
            const p2 = this.getBezierPosition(t2, calcPosition);
            if (this.pointToSegmentDistance(mouseX, mouseY, p1.x, p1.y, p2.x, p2.y) < tolerance) {
                return true;
            }
        }
        return false;
    }
    // ペジェ曲線の分割点
    getBezierPosition(t, calcPosition) {
        const x = (1 - t) * (1 - t) * this.from.x + 2 * (1 - t) * t * calcPosition.x + t * t * this.to.x;
        const y = (1 - t) * (1 - t) * this.from.y + 2 * (1 - t) * t * calcPosition.y + t * t * this.to.y;
        return new _Position__WEBPACK_IMPORTED_MODULE_1__.Position(x, y);
    }
    // 点と直線の距離
    pointToSegmentDistance(px, py, x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        if (dx === 0 && dy === 0) {
            return Math.sqrt(Math.pow((px - x1), 2) + Math.pow((py - y1), 2));
        }
        const t = ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy);
        const tClamped = Math.max(0, Math.min(1, t));
        const nearestX = x1 + tClamped * dx;
        const nearestY = y1 + tClamped * dy;
        return Math.sqrt(Math.pow((px - nearestX), 2) + Math.pow((py - nearestY), 2));
    }
    // 描画
    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        ctx.lineTo(this.to.x, this.to.y);
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
        this.control.init();
    }
    // 描画（ペジェ曲線）
    drawBezier(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.from.x, this.from.y);
        // 二次ベジェ曲線
        const calcPosition = this.control.getCalcPosition();
        ctx.quadraticCurveTo(calcPosition.x, calcPosition.y, this.to.x, this.to.y);
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
        if (this.isSelected) {
            this.control.draw(ctx);
        }
    }
}


/***/ }),

/***/ "./src/object/Point.ts":
/*!*****************************!*\
  !*** ./src/object/Point.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Point: () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var _Position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Position */ "./src/object/Position.ts");

// ============================================================================
// 点クラス
// ============================================================================
class Point extends _Position__WEBPACK_IMPORTED_MODULE_0__.Position {
    constructor(x, y) {
        super(x, y);
        this.radius = 4;
    }
    // 範囲内か
    isNear(x, y) {
        return Math.hypot(this.x - x, this.y - y) < this.radius * 2;
    }
}


/***/ }),

/***/ "./src/object/Position.ts":
/*!********************************!*\
  !*** ./src/object/Position.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Position: () => (/* binding */ Position)
/* harmony export */ });
// ============================================================================
// 位置クラス
// ============================================================================
class Position {
    constructor(x, y) {
        this.x = Math.round(x);
        this.y = Math.round(y);
    }
}


/***/ }),

/***/ "./src/object/Vertex.ts":
/*!******************************!*\
  !*** ./src/object/Vertex.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vertex: () => (/* binding */ Vertex)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/object/Point.ts");

// ============================================================================
// 頂点クラス
// ============================================================================
class Vertex extends _Point__WEBPACK_IMPORTED_MODULE_0__.Point {
    constructor(x, y) {
        super(x, y);
        this.radius = 10;
        this.isSelected = false;
        this.edges = [];
    }
    // 辺を追加
    addEdge(edge) {
        this.edges.push(edge);
    }
    // 辺を削除
    deleteEdge(edge) {
        this.edges = this.edges.filter((tempEdge) => tempEdge !== edge);
    }
    // 次数取得
    getDegree() {
        return this.edges.length;
    }
    // 描画
    draw(ctx, showIndex, index, showDegree) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "rgba(255, 100, 150, 1)";
        ctx.fill();
        ctx.strokeStyle = this.isSelected ? "red" : "rgba(135, 206, 250, 0.85)";
        ctx.lineWidth = 4;
        ctx.stroke();
        // 頂点情報の表示
        ctx.fillStyle = "black";
        ctx.font = "12px Sans-serif";
        if (showIndex) {
            ctx.fillText(`Index: ${index + 1}`, this.x + this.radius + 5, this.y - this.radius - 5);
        }
        if (showDegree) {
            ctx.fillText(`Degree: ${this.getDegree()}`, this.x + this.radius + 5, this.y - this.radius + 15);
        }
    }
}


/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MouseButton: () => (/* binding */ MouseButton),
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

// ============================================================================
// 列挙体
// ============================================================================
// マウスボタンの列挙体
var MouseButton;
(function (MouseButton) {
    MouseButton[MouseButton["Left"] = 0] = "Left";
    MouseButton[MouseButton["Middle"] = 1] = "Middle";
    MouseButton[MouseButton["Right"] = 2] = "Right";
})(MouseButton || (MouseButton = {}));
// ============================================================================
// ユーティリティクラス
// ============================================================================
class Utils {
    // 確認ダイアログを表示してアクションを実行
    static confirmAction(message, action) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "確認",
            text: message,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "はい、実行します",
            cancelButtonText: "いいえ",
        }).then((result) => {
            if (result.isConfirmed) {
                action();
            }
        });
    }
    // 位置に近い点を取得する
    static findPointAt(x, y, vertices, edges) {
        // 頂点を検索
        let point = Utils.findVertexAt(x, y, vertices);
        // 見つからない場合
        if (point == null) {
            // 制御点を検索
            point = Utils.findControlAt(x, y, edges);
        }
        return point;
    }
    // 位置に近い頂点を取得する
    static findVertexAt(x, y, vertices) {
        const foundVertex = vertices.find((vertex) => vertex.isNear(x, y));
        return foundVertex ? foundVertex : null;
    }
    // 位置に近い制御点を取得する
    static findControlAt(x, y, edges) {
        const foundControl = edges.find((edge) => edge.control.isNear(x, y));
        return foundControl ? foundControl.control : null;
    }
    // 位置に近い辺を取得する
    static findEdgeAt(x, y, edges) {
        const foundEdge = edges.find((edge) => edge.isNear(x, y));
        return foundEdge ? foundEdge : null;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GraphManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphManager */ "./src/GraphManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");



// ============================================================================
// HTML項目関連処理
// ============================================================================
document.addEventListener("DOMContentLoaded", setup);
function setup() {
    // ============================================================================
    // 次数配列
    // ============================================================================
    const toggleButton = document.getElementById("formatToggle");
    const degreesInput = document.getElementById("degreeSequenceInput");
    const applyButton = document.getElementById("applyDegreeSequence");
    toggleButton.addEventListener("click", toggleFormat);
    degreesInput.addEventListener("input", inputDegreeSequence);
    degreesInput.addEventListener("blur", blurDegreeSequence);
    applyButton.addEventListener("click", applyDegreeSequence);
    // トグルボタンの状態: 初期値は「次数配列」とする
    let isDegreeArray = true;
    // トグルボタンが切り替わった時の処理
    function toggleFormat(e) {
        isDegreeArray = !isDegreeArray;
        if (isDegreeArray) {
            toggleButton.textContent = "次数配列";
            degreesInput.placeholder = "例: 4,4,4,3,3";
            degreesInput.value = graphManager.degrees.getArrayString();
        }
        else {
            toggleButton.textContent = "ランレングス圧縮";
            degreesInput.placeholder = "例: 4*3,3*2";
            degreesInput.value = graphManager.degrees.getRunLengthString();
        }
    }
    // 次数配列入力欄に入力した時の処理
    function inputDegreeSequence(e) {
        if (isDegreeArray) {
            // 数字、カンマを許容
            const cleanedValue = degreesInput.value.replace(/[^0-9,]/g, "");
            degreesInput.value = cleanedValue;
        }
        else {
            // 数字、カンマ、アスタリスクを許容
            const cleanedValue = degreesInput.value.replace(/[^0-9,*]/g, "");
            degreesInput.value = cleanedValue;
        }
    }
    // 次数配列入力欄のロストフォーカス時の処理
    function blurDegreeSequence(e) {
        graphManager.degrees.setValue(degreesInput.value);
        // 値の設定
        if (isDegreeArray) {
            degreesInput.value = graphManager.degrees.getArrayString();
        }
        else {
            degreesInput.value = graphManager.degrees.getRunLengthString();
        }
        // 極大平面グラフの検証
        if (!graphManager.degrees.isMaximalPlanarGraph()) {
            degreesInput.classList.add("is-invalid");
            degreesInput.classList.remove("is-valid");
            applyButton.disabled = true;
        }
        else {
            degreesInput.classList.remove("is-invalid");
            degreesInput.classList.add("is-valid");
            applyButton.disabled = false;
        }
    }
    // 適用ボタンが押された時の処理
    function applyDegreeSequence(e) {
        const input = document.querySelector(".form-control");
        const inputValue = input.value;
        console.log("入力された数式:", inputValue);
        // ここに数式を解析してグラフを描画するロジックを追加
    }
    // 次数配列の更新
    function updateDegreeSequence(vertices) {
        graphManager.degrees.setVertices(vertices);
        if (isDegreeArray) {
            degreesInput.value = graphManager.degrees.getArrayString();
        }
        else {
            degreesInput.value = graphManager.degrees.getRunLengthString();
        }
    }
    // ============================================================================
    // プロパティエリア
    // ============================================================================
    const initGraphButton = document.getElementById("initGraphButton");
    const vertexDisplay = document.getElementById("vertexDisplay");
    const edgeDisplay = document.getElementById("edgeDisplay");
    const isMaxGraphDisplay = document.getElementById("isMaxGraphDisplay");
    const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay");
    const showIndexCheckbox = document.getElementById("showIndexCheckbox");
    const showDegreeCheckbox = document.getElementById("showDegreeCheckbox");
    const changeForceDirectModeButton = document.getElementById("changeForceDirectModeButton");
    const straightenEdgesButton = document.getElementById("straightenEdgesButton");
    initGraphButton.addEventListener("click", initGraph);
    showIndexCheckbox.addEventListener("change", showIndex);
    showDegreeCheckbox.addEventListener("change", showDegree);
    changeForceDirectModeButton.addEventListener("click", changeForceDirectMode);
    straightenEdgesButton.addEventListener("click", straightenEdges);
    // グラフの初期化
    function initGraph(e) {
        _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.confirmAction("グラフが初期化されますがよろしいですか？", () => {
            graphManager.initGraph();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("実行完了!", "グラフが初期化されました。", "success");
        });
    }
    // オブジェクト情報の更新
    function updateInfo(info) {
        vertexDisplay.textContent = `頂点の数: ${info.vertexCount}`;
        edgeDisplay.textContent = `辺の数: ${info.edgeCount}`;
        if (info.vertexCount < 3) {
            isMaxGraphDisplay.textContent = " - ";
            maxGraphEdgeDisplay.textContent = " - ";
            return;
        }
        // 極大平面グラフ判定（ 3V - E = 6 ）
        const result = 3 * info.vertexCount - info.edgeCount;
        if (result > 6) {
            isMaxGraphDisplay.textContent = `極大平面グラフか: NO`;
            maxGraphEdgeDisplay.textContent = `辺の数が ${result - 6} 足りません`;
        }
        else if (result == 6) {
            isMaxGraphDisplay.textContent = `極大平面グラフか: YES`;
            maxGraphEdgeDisplay.textContent = ` - `;
        }
        else {
            isMaxGraphDisplay.textContent = `極大平面グラフか: 非平面`;
            maxGraphEdgeDisplay.textContent = `辺の数が ${6 - result} 多いです`;
        }
    }
    // 頂点番号を表示
    function showIndex(e) {
        graphManager.drawVertexInfo(showIndexCheckbox.checked, showDegreeCheckbox.checked);
    }
    // 次数を表示
    function showDegree(e) {
        graphManager.drawVertexInfo(showIndexCheckbox.checked, showDegreeCheckbox.checked);
    }
    let forceDirectMode = true;
    // 力指向モードを切り替える
    function changeForceDirectMode(e) {
        forceDirectMode = !forceDirectMode;
        graphManager.changeForceDirectMode(forceDirectMode);
        if (forceDirectMode) {
            changeForceDirectModeButton.textContent = "ペジェ曲線モードにする";
            straightenEdgesButton.disabled = true;
        }
        else {
            changeForceDirectModeButton.textContent = "力指向モードにする";
            straightenEdgesButton.disabled = false;
        }
    }
    // すべての辺を直線にする
    function straightenEdges(e) {
        _utils__WEBPACK_IMPORTED_MODULE_2__.Utils.confirmAction("すべての辺が直線になりますがよろしいですか？", () => {
            graphManager.straightenEdges();
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("実行完了!", "すべての辺が直線になりました。", "success");
        });
    }
    // ============================================================================
    // エクスポート／インポート処理
    // ============================================================================
    const exportButton = document.getElementById("exportButton");
    const importButton = document.getElementById("importButton");
    const importFileInput = document.getElementById("importFileInput");
    exportButton.addEventListener("click", exportJson);
    importButton.addEventListener("click", uploadJson);
    importFileInput.addEventListener("change", importJson);
    // エクスポートボタンが押下されたら、エクスポートする
    function exportJson(e) {
        // データ取得
        const jsonData = graphManager.exportToJson();
        // ファイル名
        const date = new Date();
        const timestamp = date.getFullYear().toString() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + "_" + ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
        const filename = `graph-data_${timestamp}.json`;
        // ダウンロードURL
        const blob = new Blob([jsonData], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        // リンクをプログラム的にクリックしてダウンロードを実行
        a.click();
        document.body.removeChild(a);
        // 作成したURLを解放
        URL.revokeObjectURL(url);
    }
    // ボタンがクリックされたら、ファイル入力をトリガーする
    function uploadJson() {
        importFileInput.click();
    }
    // ファイルが入力されたら、インポートする
    function importJson(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const content = event.target.result;
                // 読み込んだJSONデータでグラフをインポート
                graphManager.importFromJson(content);
                // ファイル入力をリセット
                importFileInput.value = "";
            };
            reader.readAsText(file);
        }
    }
    // ============================================================================
    // メイン処理
    // ============================================================================
    const canvas = document.getElementById("graphCanvas");
    const graphManager = new _GraphManager__WEBPACK_IMPORTED_MODULE_1__.GraphManager(canvas, updateDegreeSequence, updateInfo);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsQ0FDMEc7QUFDNUcsQ0FBQyx1QkFBdUI7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGO0FBQzNGLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWSxrRUFBa0U7QUFDeEYsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7O0FBRWpDO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxlQUFlLDJCQUEyQjtBQUMxQzs7QUFFQTtBQUNBLGVBQWUsdURBQXVEO0FBQ3RFLGVBQWUsMEJBQTBCO0FBQ3pDOztBQUVBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsYUFBYSxhQUFhLElBQUk7O0FBRWpDLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsYUFBYSxXQUFXLElBQUk7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsS0FBSztBQUNsQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxL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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsYUFBYTtBQUMxQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsYUFBYTtBQUMxQixhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVTtBQUNqRDtBQUNBLDRDQUE0QywwQkFBMEI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdURBQVk7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5hbGwuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL0RlZ3JlZVNlcXVlbmNlIC50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvR3JhcGhNYW5hZ2VyLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9vYmplY3QvQ29udHJvbC50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvb2JqZWN0L0VkZ2UudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL29iamVjdC9Qb2ludC50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvb2JqZWN0L1Bvc2l0aW9uLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9vYmplY3QvVmVydGV4LnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy91dGlscy50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BsYW5hci1ncmFwaC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4qIHN3ZWV0YWxlcnQyIHYxMS4xMC44XG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5Td2VldGFsZXJ0MiA9IGZhY3RvcnkoKSk7XG59KSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gX2Fzc2VydENsYXNzQnJhbmQoZSwgdCwgbikge1xuICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUgPyBlID09PSB0IDogZS5oYXModCkpIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHQgOiBuO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGVsZW1lbnQgaXMgbm90IHByZXNlbnQgb24gdGhpcyBvYmplY3RcIik7XG4gIH1cbiAgZnVuY3Rpb24gX2NhbGxTdXBlcih0LCBvLCBlKSB7XG4gICAgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTtcbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRHZXQyKHMsIGEpIHtcbiAgICByZXR1cm4gcy5nZXQoX2Fzc2VydENsYXNzQnJhbmQocywgYSkpO1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZFNldDIocywgYSwgcikge1xuICAgIHJldHVybiBzLnNldChfYXNzZXJ0Q2xhc3NCcmFuZChzLCBhKSwgciksIHI7XG4gIH1cbiAgZnVuY3Rpb24gX2NvbnN0cnVjdCh0LCBlLCByKSB7XG4gICAgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgdmFyIG8gPSBbbnVsbF07XG4gICAgby5wdXNoLmFwcGx5KG8sIGUpO1xuICAgIHZhciBwID0gbmV3ICh0LmJpbmQuYXBwbHkodCwgbykpKCk7XG4gICAgcmV0dXJuIHIgJiYgX3NldFByb3RvdHlwZU9mKHAsIHIucHJvdG90eXBlKSwgcDtcbiAgfVxuICBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgdCA9ICFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgfSBjYXRjaCAodCkge31cbiAgICByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gISF0O1xuICAgIH0pKCk7XG4gIH1cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGwpIHtcbiAgICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICAgIGlmIChudWxsICE9IHQpIHtcbiAgICAgIHZhciBlLFxuICAgICAgICBuLFxuICAgICAgICBpLFxuICAgICAgICB1LFxuICAgICAgICBhID0gW10sXG4gICAgICAgIGYgPSAhMCxcbiAgICAgICAgbyA9ICExO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkge1xuICAgICAgICAgIGlmIChPYmplY3QodCkgIT09IHQpIHJldHVybjtcbiAgICAgICAgICBmID0gITE7XG4gICAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTtcbiAgICAgIH0gY2F0Y2ggKHIpIHtcbiAgICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdC5yZXR1cm4gJiYgKHUgPSB0LnJldHVybigpLCBPYmplY3QodSkgIT09IHUpKSByZXR1cm47XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikge1xuICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiB0IHx8ICF0KSByZXR1cm4gdDtcbiAgICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgICB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTtcbiAgICAgIGlmIChcIm9iamVjdFwiICE9IHR5cGVvZiBpKSByZXR1cm4gaTtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7XG4gICAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gICAgcmV0dXJuIFwic3ltYm9sXCIgPT0gdHlwZW9mIGkgPyBpIDogaSArIFwiXCI7XG4gIH1cbiAgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvO1xuICAgIH0gOiBmdW5jdGlvbiAobykge1xuICAgICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gICAgfSwgX3R5cGVvZihvKTtcbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIF90b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cbiAgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgaWYgKHN1cGVyQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG4gIH1cbiAgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gICAgfTtcbiAgICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xuICB9XG4gIGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgICByZXR1cm4gbztcbiAgICB9O1xuICAgIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG4gIH1cbiAgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gICAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgICByZXR1cm4gY2FsbDtcbiAgICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICAgIH1cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbiAgfVxuICBmdW5jdGlvbiBfc3VwZXJQcm9wQmFzZShvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgICAgaWYgKG9iamVjdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cbiAgZnVuY3Rpb24gX2dldCgpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICAgIF9nZXQgPSBSZWZsZWN0LmdldC5iaW5kKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYmFzZSwgcHJvcGVydHkpO1xuICAgICAgICBpZiAoZGVzYy5nZXQpIHtcbiAgICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IHJlY2VpdmVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBfZ2V0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cbiAgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTtcbiAgfVxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cbiAgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG4gIH1cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG4gIH1cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSBhcnIyW2ldID0gYXJyW2ldO1xuICAgIHJldHVybiBhcnIyO1xuICB9XG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuICBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cbiAgZnVuY3Rpb24gX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24ob2JqLCBwcml2YXRlQ29sbGVjdGlvbikge1xuICAgIGlmIChwcml2YXRlQ29sbGVjdGlvbi5oYXMob2JqKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBpbml0aWFsaXplIHRoZSBzYW1lIHByaXZhdGUgZWxlbWVudHMgdHdpY2Ugb24gYW4gb2JqZWN0XCIpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyhvYmosIHByaXZhdGVNYXAsIHZhbHVlKSB7XG4gICAgX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24ob2JqLCBwcml2YXRlTWFwKTtcbiAgICBwcml2YXRlTWFwLnNldChvYmosIHZhbHVlKTtcbiAgfVxuXG4gIHZhciBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQgPSAxMDA7XG5cbiAgLyoqIEB0eXBlIHtHbG9iYWxTdGF0ZX0gKi9cbiAgdmFyIGdsb2JhbFN0YXRlID0ge307XG4gIHZhciBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVzdG9yZSBwcmV2aW91cyBhY3RpdmUgKGZvY3VzZWQpIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSByZXR1cm5Gb2N1c1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIHZhciByZXN0b3JlQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIHJlc3RvcmVBY3RpdmVFbGVtZW50KHJldHVybkZvY3VzKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBpZiAoIXJldHVybkZvY3VzKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgICAgdmFyIHkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICAgIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQoKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgUkVTVE9SRV9GT0NVU19USU1FT1VUKTsgLy8gaXNzdWVzLzkwMFxuXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcblxuICAvKipcbiAgICogQHR5cGVkZWZcbiAgICogeyB8ICdjb250YWluZXInXG4gICAqICAgfCAnc2hvd24nXG4gICAqICAgfCAnaGVpZ2h0LWF1dG8nXG4gICAqICAgfCAnaW9zZml4J1xuICAgKiAgIHwgJ3BvcHVwJ1xuICAgKiAgIHwgJ21vZGFsJ1xuICAgKiAgIHwgJ25vLWJhY2tkcm9wJ1xuICAgKiAgIHwgJ25vLXRyYW5zaXRpb24nXG4gICAqICAgfCAndG9hc3QnXG4gICAqICAgfCAndG9hc3Qtc2hvd24nXG4gICAqICAgfCAnc2hvdydcbiAgICogICB8ICdoaWRlJ1xuICAgKiAgIHwgJ2Nsb3NlJ1xuICAgKiAgIHwgJ3RpdGxlJ1xuICAgKiAgIHwgJ2h0bWwtY29udGFpbmVyJ1xuICAgKiAgIHwgJ2FjdGlvbnMnXG4gICAqICAgfCAnY29uZmlybSdcbiAgICogICB8ICdkZW55J1xuICAgKiAgIHwgJ2NhbmNlbCdcbiAgICogICB8ICdkZWZhdWx0LW91dGxpbmUnXG4gICAqICAgfCAnZm9vdGVyJ1xuICAgKiAgIHwgJ2ljb24nXG4gICAqICAgfCAnaWNvbi1jb250ZW50J1xuICAgKiAgIHwgJ2ltYWdlJ1xuICAgKiAgIHwgJ2lucHV0J1xuICAgKiAgIHwgJ2ZpbGUnXG4gICAqICAgfCAncmFuZ2UnXG4gICAqICAgfCAnc2VsZWN0J1xuICAgKiAgIHwgJ3JhZGlvJ1xuICAgKiAgIHwgJ2NoZWNrYm94J1xuICAgKiAgIHwgJ2xhYmVsJ1xuICAgKiAgIHwgJ3RleHRhcmVhJ1xuICAgKiAgIHwgJ2lucHV0ZXJyb3InXG4gICAqICAgfCAnaW5wdXQtbGFiZWwnXG4gICAqICAgfCAndmFsaWRhdGlvbi1tZXNzYWdlJ1xuICAgKiAgIHwgJ3Byb2dyZXNzLXN0ZXBzJ1xuICAgKiAgIHwgJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJ1xuICAgKiAgIHwgJ3Byb2dyZXNzLXN0ZXAnXG4gICAqICAgfCAncHJvZ3Jlc3Mtc3RlcC1saW5lJ1xuICAgKiAgIHwgJ2xvYWRlcidcbiAgICogICB8ICdsb2FkaW5nJ1xuICAgKiAgIHwgJ3N0eWxlZCdcbiAgICogICB8ICd0b3AnXG4gICAqICAgfCAndG9wLXN0YXJ0J1xuICAgKiAgIHwgJ3RvcC1lbmQnXG4gICAqICAgfCAndG9wLWxlZnQnXG4gICAqICAgfCAndG9wLXJpZ2h0J1xuICAgKiAgIHwgJ2NlbnRlcidcbiAgICogICB8ICdjZW50ZXItc3RhcnQnXG4gICAqICAgfCAnY2VudGVyLWVuZCdcbiAgICogICB8ICdjZW50ZXItbGVmdCdcbiAgICogICB8ICdjZW50ZXItcmlnaHQnXG4gICAqICAgfCAnYm90dG9tJ1xuICAgKiAgIHwgJ2JvdHRvbS1zdGFydCdcbiAgICogICB8ICdib3R0b20tZW5kJ1xuICAgKiAgIHwgJ2JvdHRvbS1sZWZ0J1xuICAgKiAgIHwgJ2JvdHRvbS1yaWdodCdcbiAgICogICB8ICdncm93LXJvdydcbiAgICogICB8ICdncm93LWNvbHVtbidcbiAgICogICB8ICdncm93LWZ1bGxzY3JlZW4nXG4gICAqICAgfCAncnRsJ1xuICAgKiAgIHwgJ3RpbWVyLXByb2dyZXNzLWJhcidcbiAgICogICB8ICd0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyJ1xuICAgKiAgIHwgJ3Njcm9sbGJhci1tZWFzdXJlJ1xuICAgKiAgIHwgJ2ljb24tc3VjY2VzcydcbiAgICogICB8ICdpY29uLXdhcm5pbmcnXG4gICAqICAgfCAnaWNvbi1pbmZvJ1xuICAgKiAgIHwgJ2ljb24tcXVlc3Rpb24nXG4gICAqICAgfCAnaWNvbi1lcnJvcidcbiAgICogfSBTd2FsQ2xhc3NcbiAgICogQHR5cGVkZWYge1JlY29yZDxTd2FsQ2xhc3MsIHN0cmluZz59IFN3YWxDbGFzc2VzXG4gICAqL1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7J3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2luZm8nIHwgJ3F1ZXN0aW9uJyB8ICdlcnJvcid9IFN3YWxJY29uXG4gICAqIEB0eXBlZGVmIHtSZWNvcmQ8U3dhbEljb24sIHN0cmluZz59IFN3YWxJY29uc1xuICAgKi9cblxuICAvKiogQHR5cGUge1N3YWxDbGFzc1tdfSAqL1xuICB2YXIgY2xhc3NOYW1lcyA9IFsnY29udGFpbmVyJywgJ3Nob3duJywgJ2hlaWdodC1hdXRvJywgJ2lvc2ZpeCcsICdwb3B1cCcsICdtb2RhbCcsICduby1iYWNrZHJvcCcsICduby10cmFuc2l0aW9uJywgJ3RvYXN0JywgJ3RvYXN0LXNob3duJywgJ3Nob3cnLCAnaGlkZScsICdjbG9zZScsICd0aXRsZScsICdodG1sLWNvbnRhaW5lcicsICdhY3Rpb25zJywgJ2NvbmZpcm0nLCAnZGVueScsICdjYW5jZWwnLCAnZGVmYXVsdC1vdXRsaW5lJywgJ2Zvb3RlcicsICdpY29uJywgJ2ljb24tY29udGVudCcsICdpbWFnZScsICdpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICdsYWJlbCcsICd0ZXh0YXJlYScsICdpbnB1dGVycm9yJywgJ2lucHV0LWxhYmVsJywgJ3ZhbGlkYXRpb24tbWVzc2FnZScsICdwcm9ncmVzcy1zdGVwcycsICdhY3RpdmUtcHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwJywgJ3Byb2dyZXNzLXN0ZXAtbGluZScsICdsb2FkZXInLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLXN0YXJ0JywgJ2NlbnRlci1lbmQnLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJywgJ3J0bCcsICd0aW1lci1wcm9ncmVzcy1iYXInLCAndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicsICdzY3JvbGxiYXItbWVhc3VyZScsICdpY29uLXN1Y2Nlc3MnLCAnaWNvbi13YXJuaW5nJywgJ2ljb24taW5mbycsICdpY29uLXF1ZXN0aW9uJywgJ2ljb24tZXJyb3InXTtcbiAgdmFyIHN3YWxDbGFzc2VzID0gY2xhc3NOYW1lcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgY2xhc3NOYW1lKSB7XG4gICAgYWNjW2NsYXNzTmFtZV0gPSBzd2FsUHJlZml4ICsgY2xhc3NOYW1lO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIC8qKiBAdHlwZSB7U3dhbENsYXNzZXN9ICove30pO1xuXG4gIC8qKiBAdHlwZSB7U3dhbEljb25bXX0gKi9cbiAgdmFyIGljb25zID0gWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddO1xuICB2YXIgaWNvblR5cGVzID0gaWNvbnMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGljb24pIHtcbiAgICBhY2NbaWNvbl0gPSBzd2FsUHJlZml4ICsgaWNvbjtcbiAgICByZXR1cm4gYWNjO1xuICB9LCAvKiogQHR5cGUge1N3YWxJY29uc30gKi97fSk7XG5cbiAgdmFyIGNvbnNvbGVQcmVmaXggPSAnU3dlZXRBbGVydDI6JztcblxuICAvKipcbiAgICogQ2FwaXRhbGl6ZSB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgc3RyaW5nXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHZhciBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhbmRhcmRpemUgY29uc29sZSB3YXJuaW5nc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdfSBtZXNzYWdlXG4gICAqL1xuICB2YXIgd2FybiA9IGZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KF90eXBlb2YobWVzc2FnZSkgPT09ICdvYmplY3QnID8gbWVzc2FnZS5qb2luKCcgJykgOiBtZXNzYWdlKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0YW5kYXJkaXplIGNvbnNvbGUgZXJyb3JzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqL1xuICB2YXIgZXJyb3IgPSBmdW5jdGlvbiBlcnJvcihtZXNzYWdlKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ1tdfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdmFyIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAqL1xuICB2YXIgd2Fybk9uY2UgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gICAgaWYgKCFwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMuaW5jbHVkZXMobWVzc2FnZSkpIHtcbiAgICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgd2FybihtZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgYSBvbmUtdGltZSBjb25zb2xlIHdhcm5pbmcgYWJvdXQgZGVwcmVjYXRlZCBwYXJhbXMvbWV0aG9kc1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVwcmVjYXRlZFBhcmFtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VJbnN0ZWFkXG4gICAqL1xuICB2YXIgd2FybkFib3V0RGVwcmVjYXRpb24gPSBmdW5jdGlvbiB3YXJuQWJvdXREZXByZWNhdGlvbihkZXByZWNhdGVkUGFyYW0sIHVzZUluc3RlYWQpIHtcbiAgICB3YXJuT25jZShcIlxcXCJcIi5jb25jYXQoZGVwcmVjYXRlZFBhcmFtLCBcIlxcXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHJlbGVhc2UuIFBsZWFzZSB1c2UgXFxcIlwiKS5jb25jYXQodXNlSW5zdGVhZCwgXCJcXFwiIGluc3RlYWQuXCIpKTtcbiAgfTtcblxuICAvKipcbiAgICogSWYgYGFyZ2AgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCAod2l0aCBubyBhcmd1bWVudHMgb3IgY29udGV4dCkgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICAgKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9uIHwgYW55fSBhcmdcbiAgICogQHJldHVybnMge2FueX1cbiAgICovXG4gIHZhciBjYWxsSWZGdW5jdGlvbiA9IGZ1bmN0aW9uIGNhbGxJZkZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nID8gYXJnKCkgOiBhcmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBhcmdcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaGFzVG9Qcm9taXNlRm4gPSBmdW5jdGlvbiBoYXNUb1Byb21pc2VGbihhcmcpIHtcbiAgICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcudG9Qcm9taXNlID09PSAnZnVuY3Rpb24nO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gYXJnXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICB2YXIgYXNQcm9taXNlID0gZnVuY3Rpb24gYXNQcm9taXNlKGFyZykge1xuICAgIHJldHVybiBoYXNUb1Byb21pc2VGbihhcmcpID8gYXJnLnRvUHJvbWlzZSgpIDogUHJvbWlzZS5yZXNvbHZlKGFyZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBhcmdcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKGFyZykge1xuICAgIHJldHVybiBhcmcgJiYgUHJvbWlzZS5yZXNvbHZlKGFyZykgPT09IGFyZztcbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgcG9wdXAgY29udGFpbmVyIHdoaWNoIGNvbnRhaW5zIHRoZSBiYWNrZHJvcCBhbmQgdGhlIHBvcHVwIGl0c2VsZi5cbiAgICpcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRDb250YWluZXIgPSBmdW5jdGlvbiBnZXRDb250YWluZXIoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY29udGFpbmVyKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclN0cmluZ1xuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGVsZW1lbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBlbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoY2xhc3NOYW1lKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0UG9wdXAgPSBmdW5jdGlvbiBnZXRQb3B1cCgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldEljb24gPSBmdW5jdGlvbiBnZXRJY29uKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pY29uKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRJY29uQ29udGVudCA9IGZ1bmN0aW9uIGdldEljb25Db250ZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnRpdGxlKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRIdG1sQ29udGFpbmVyID0gZnVuY3Rpb24gZ2V0SHRtbENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmltYWdlKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcygpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbmZpcm0pKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiBnZXRDYW5jZWxCdXR0b24oKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldERlbnlCdXR0b24gPSBmdW5jdGlvbiBnZXREZW55QnV0dG9uKCkge1xuICAgIHJldHVybiAvKiogQHR5cGUge0hUTUxCdXR0b25FbGVtZW50fSAqL2VsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5kZW55KSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0SW5wdXRMYWJlbCA9IGZ1bmN0aW9uIGdldElucHV0TGFiZWwoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydpbnB1dC1sYWJlbCddKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRMb2FkZXIgPSBmdW5jdGlvbiBnZXRMb2FkZXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5sb2FkZXIpKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYWN0aW9ucyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gZ2V0Rm9vdGVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5mb290ZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldFRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiBnZXRUaW1lclByb2dyZXNzQmFyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldENsb3NlQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2xvc2VCdXR0b24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNsb3NlKTtcbiAgfTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vamt1cC9mb2N1c2FibGUvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAgdmFyIGZvY3VzYWJsZSA9IFwiXFxuICBhW2hyZWZdLFxcbiAgYXJlYVtocmVmXSxcXG4gIGlucHV0Om5vdChbZGlzYWJsZWRdKSxcXG4gIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXFxuICB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksXFxuICBidXR0b246bm90KFtkaXNhYmxlZF0pLFxcbiAgaWZyYW1lLFxcbiAgb2JqZWN0LFxcbiAgZW1iZWQsXFxuICBbdGFiaW5kZXg9XFxcIjBcXFwiXSxcXG4gIFtjb250ZW50ZWRpdGFibGVdLFxcbiAgYXVkaW9bY29udHJvbHNdLFxcbiAgdmlkZW9bY29udHJvbHNdLFxcbiAgc3VtbWFyeVxcblwiO1xuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50W119XG4gICAqL1xuICB2YXIgZ2V0Rm9jdXNhYmxlRWxlbWVudHMgPSBmdW5jdGlvbiBnZXRGb2N1c2FibGVFbGVtZW50cygpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pn0gKi9cbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJyk7XG4gICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4U29ydGVkID0gQXJyYXkuZnJvbShmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleClcbiAgICAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgdGFiaW5kZXhBID0gcGFyc2VJbnQoYS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgJzAnKTtcbiAgICAgIHZhciB0YWJpbmRleEIgPSBwYXJzZUludChiLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAnMCcpO1xuICAgICAgaWYgKHRhYmluZGV4QSA+IHRhYmluZGV4Qikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH0gZWxzZSBpZiAodGFiaW5kZXhBIDwgdGFiaW5kZXhCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLyoqIEB0eXBlIHtOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pn0gKi9cbiAgICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoZm9jdXNhYmxlKTtcbiAgICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50c0ZpbHRlcmVkID0gQXJyYXkuZnJvbShvdGhlckZvY3VzYWJsZUVsZW1lbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnO1xuICAgIH0pO1xuICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkobmV3IFNldChmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleFNvcnRlZC5jb25jYXQob3RoZXJGb2N1c2FibGVFbGVtZW50c0ZpbHRlcmVkKSkpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBpc1Zpc2libGUkMShlbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzTW9kYWwgPSBmdW5jdGlvbiBpc01vZGFsKCkge1xuICAgIHJldHVybiBoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5zaG93bikgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKSAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1RvYXN0ID0gZnVuY3Rpb24gaXNUb2FzdCgpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy50b2FzdCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBvcHVwLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNlY3VyZWx5IHNldCBpbm5lckhUTUwgb2YgYW4gZWxlbWVudFxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE5MjZcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gaHRtbFxuICAgKi9cbiAgdmFyIHNldElubmVySHRtbCA9IGZ1bmN0aW9uIHNldElubmVySHRtbChlbGVtLCBodG1sKSB7XG4gICAgZWxlbS50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmIChodG1sKSB7XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG4gICAgICB2YXIgaGVhZCA9IHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgICBoZWFkICYmIEFycmF5LmZyb20oaGVhZC5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGJvZHkgPSBwYXJzZWQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgYm9keSAmJiBBcnJheS5mcm9tKGJvZHkuY2hpbGROb2RlcykuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCB8fCBjaGlsZCBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpIHtcbiAgICAgICAgICBlbGVtLmFwcGVuZENoaWxkKGNoaWxkLmNsb25lTm9kZSh0cnVlKSk7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjUwN1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBjbGFzc0xpc3QgPSBjbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNsYXNzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKCFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc0xpc3RbaV0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKSB7XG4gICAgQXJyYXkuZnJvbShlbGVtLmNsYXNzTGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoIU9iamVjdC52YWx1ZXMoc3dhbENsYXNzZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiYgIU9iamVjdC52YWx1ZXMoaWNvblR5cGVzKS5pbmNsdWRlcyhjbGFzc05hbWUpICYmICFPYmplY3QudmFsdWVzKHBhcmFtcy5zaG93Q2xhc3MgfHwge30pLmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICovXG4gIHZhciBhcHBseUN1c3RvbUNsYXNzID0gZnVuY3Rpb24gYXBwbHlDdXN0b21DbGFzcyhlbGVtLCBwYXJhbXMsIGNsYXNzTmFtZSkge1xuICAgIHJlbW92ZUN1c3RvbUNsYXNzZXMoZWxlbSwgcGFyYW1zKTtcbiAgICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzICYmIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSB7XG4gICAgICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0uZm9yRWFjaCkge1xuICAgICAgICB3YXJuKFwiSW52YWxpZCB0eXBlIG9mIGN1c3RvbUNsYXNzLlwiLmNvbmNhdChjbGFzc05hbWUsIFwiISBFeHBlY3RlZCBzdHJpbmcgb3IgaXRlcmFibGUgb2JqZWN0LCBnb3QgXFxcIlwiKS5jb25jYXQoX3R5cGVvZihwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSksIFwiXFxcIlwiKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFkZENsYXNzKGVsZW0sIHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7aW1wb3J0KCcuL3JlbmRlcmVycy9yZW5kZXJJbnB1dCcpLklucHV0Q2xhc3MgfCBTd2VldEFsZXJ0SW5wdXR9IGlucHV0Q2xhc3NcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldElucHV0JDEgPSBmdW5jdGlvbiBnZXRJbnB1dChwb3B1cCwgaW5wdXRDbGFzcykge1xuICAgIGlmICghaW5wdXRDbGFzcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN3aXRjaCAoaW5wdXRDbGFzcykge1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiID4gLlwiKS5jb25jYXQoc3dhbENsYXNzZXNbaW5wdXRDbGFzc10pKTtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiA+IC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgPiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Y2hlY2tlZFwiKSkgfHwgcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiID4gLlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmZpcnN0LWNoaWxkXCIpKTtcbiAgICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiA+IC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiID4gLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW5wdXQpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudH0gaW5wdXRcbiAgICovXG4gIHZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICAgIGlucHV0LmZvY3VzKCk7XG5cbiAgICAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuICAgIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNDU5MTVcbiAgICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICBpbnB1dC52YWx1ZSA9IHZhbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdIHwgbnVsbH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW10gfCByZWFkb25seSBzdHJpbmdbXSB8IHVuZGVmaW5lZH0gY2xhc3NMaXN0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZGl0aW9uXG4gICAqL1xuICB2YXIgdG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgY29uZGl0aW9uKSB7XG4gICAgaWYgKCF0YXJnZXQgfHwgIWNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsYXNzTGlzdCA9IGNsYXNzTGlzdC5zcGxpdCgvXFxzKy8pLmZpbHRlcihCb29sZWFuKTtcbiAgICB9XG4gICAgY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgIGNvbmRpdGlvbiA/IGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZGl0aW9uID8gdGFyZ2V0LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBIVE1MRWxlbWVudFtdIHwgbnVsbH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW10gfCByZWFkb25seSBzdHJpbmdbXSB8IHVuZGVmaW5lZH0gY2xhc3NMaXN0XG4gICAqL1xuICB2YXIgYWRkQ2xhc3MgPSBmdW5jdGlvbiBhZGRDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICAgIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCB0cnVlKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgdW5kZWZpbmVkfSBjbGFzc0xpc3RcbiAgICovXG4gIHZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGZhbHNlKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGRpcmVjdCBjaGlsZCBvZiBhbiBlbGVtZW50IGJ5IGNsYXNzIG5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MgPSBmdW5jdGlvbiBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtLmNoaWxkcmVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGhhc0NsYXNzKGNoaWxkLCBjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICovXG4gIHZhciBhcHBseU51bWVyaWNhbFN0eWxlID0gZnVuY3Rpb24gYXBwbHlOdW1lcmljYWxTdHlsZShlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IFwiXCIuY29uY2F0KHBhcnNlSW50KHZhbHVlKSkpIHtcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgfHwgcGFyc2VJbnQodmFsdWUpID09PSAwKSB7XG4gICAgICBlbGVtLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQodmFsdWUsIFwicHhcIikgOiB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bGx9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlcbiAgICovXG4gIHZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gICAgdmFyIGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdmbGV4JztcbiAgICBlbGVtICYmIChlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bGx9IGVsZW1cbiAgICovXG4gIHZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gICAgZWxlbSAmJiAoZWxlbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG51bGx9IGVsZW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlcbiAgICovXG4gIHZhciBzaG93V2hlbklubmVySHRtbFByZXNlbnQgPSBmdW5jdGlvbiBzaG93V2hlbklubmVySHRtbFByZXNlbnQoZWxlbSkge1xuICAgIHZhciBkaXNwbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnYmxvY2snO1xuICAgIGlmICghZWxlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICB0b2dnbGUoZWxlbSwgZWxlbS5pbm5lckhUTUwsIGRpc3BsYXkpO1xuICAgIH0pLm9ic2VydmUoZWxlbSwge1xuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgc3VidHJlZTogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eVxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICovXG4gIHZhciBzZXRTdHlsZSA9IGZ1bmN0aW9uIHNldFN0eWxlKHBhcmVudCwgc2VsZWN0b3IsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnQgfCBudWxsfSAqL1xuICAgIHZhciBlbCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBpZiAoZWwpIHtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KHByb3BlcnR5LCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7YW55fSBjb25kaXRpb25cbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpc3BsYXlcbiAgICovXG4gIHZhciB0b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoZWxlbSwgY29uZGl0aW9uKSB7XG4gICAgdmFyIGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6ICdmbGV4JztcbiAgICBjb25kaXRpb24gPyBzaG93KGVsZW0sIGRpc3BsYXkpIDogaGlkZShlbGVtKTtcbiAgfTtcblxuICAvKipcbiAgICogYm9ycm93ZWQgZnJvbSBqcXVlcnkgJChlbGVtKS5pcygnOnZpc2libGUnKSBpbXBsZW1lbnRhdGlvblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVsbH0gZWxlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1Zpc2libGUkMSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgcmV0dXJuICEhKGVsZW0gJiYgKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBhbGxCdXR0b25zQXJlSGlkZGVuID0gZnVuY3Rpb24gYWxsQnV0dG9uc0FyZUhpZGRlbigpIHtcbiAgICByZXR1cm4gIWlzVmlzaWJsZSQxKGdldENvbmZpcm1CdXR0b24oKSkgJiYgIWlzVmlzaWJsZSQxKGdldERlbnlCdXR0b24oKSkgJiYgIWlzVmlzaWJsZSQxKGdldENhbmNlbEJ1dHRvbigpKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1Njcm9sbGFibGUgPSBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWxlbSkge1xuICAgIHJldHVybiAhIShlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KTtcbiAgfTtcblxuICAvKipcbiAgICogYm9ycm93ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYzNTIxMTlcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBoYXNDc3NBbmltYXRpb24gPSBmdW5jdGlvbiBoYXNDc3NBbmltYXRpb24oZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHZhciBhbmltRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2FuaW1hdGlvbi1kdXJhdGlvbicpIHx8ICcwJyk7XG4gICAgdmFyIHRyYW5zRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICAgIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXNldFxuICAgKi9cbiAgdmFyIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyID0gZnVuY3Rpb24gYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIodGltZXIpIHtcbiAgICB2YXIgcmVzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIGlmICghdGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNWaXNpYmxlJDEodGltZXJQcm9ncmVzc0JhcikpIHtcbiAgICAgIGlmIChyZXNldCkge1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSAnbm9uZSc7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS50cmFuc2l0aW9uID0gXCJ3aWR0aCBcIi5jb25jYXQodGltZXIgLyAxMDAwLCBcInMgbGluZWFyXCIpO1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH07XG4gIHZhciBzdG9wVGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIHN0b3BUaW1lclByb2dyZXNzQmFyKCkge1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyID0gZ2V0VGltZXJQcm9ncmVzc0JhcigpO1xuICAgIGlmICghdGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZXJQcm9ncmVzc0JhcldpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGltZXJQcm9ncmVzc0Jhcikud2lkdGgpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24nKTtcbiAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyRnVsbFdpZHRoID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGltZXJQcm9ncmVzc0Jhcikud2lkdGgpO1xuICAgIHZhciB0aW1lclByb2dyZXNzQmFyUGVyY2VudCA9IHRpbWVyUHJvZ3Jlc3NCYXJXaWR0aCAvIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggKiAxMDA7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50LCBcIiVcIik7XG4gIH07XG5cbiAgLyoqXG4gICAqIERldGVjdCBOb2RlIGVudlxuICAgKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc05vZGVFbnYgPSBmdW5jdGlvbiBpc05vZGVFbnYoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG4gIH07XG5cbiAgdmFyIHN3ZWV0SFRNTCA9IFwiXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddLCBcIlxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcbiAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jbG9zZSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDx1bCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSwgXCJcXFwiPjwvdWw+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIlxcXCI+PC9kaXY+XFxuICAgPGltZyBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbWFnZSwgXCJcXFwiIC8+XFxuICAgPGgyIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIj48L2gyPlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10sIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDxpbnB1dCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0LCBcIlxcXCIgLz5cXG4gICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZmlsZSwgXCJcXFwiIC8+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCJcXFwiPlxcbiAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiAvPlxcbiAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICA8L2Rpdj5cXG4gICA8c2VsZWN0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiPjwvc2VsZWN0PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIj48L2Rpdj5cXG4gICA8bGFiZWwgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIj5cXG4gICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIiAvPlxcbiAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubGFiZWwsIFwiXFxcIj48L3NwYW4+XFxuICAgPC9sYWJlbD5cXG4gICA8dGV4dGFyZWEgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGV4dGFyZWEsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiPjwvdGV4dGFyZWE+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiXFxcIj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubG9hZGVyLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmRlbnksIFwiXFxcIj48L2J1dHRvbj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jYW5jZWwsIFwiXFxcIj48L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmZvb3RlciwgXCJcXFwiPjwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInXSwgXCJcXFwiPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyJ10sIFwiXFxcIj48L2Rpdj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuXCIpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgcmVzZXRPbGRDb250YWluZXIgPSBmdW5jdGlvbiByZXNldE9sZENvbnRhaW5lcigpIHtcbiAgICB2YXIgb2xkQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgaWYgKCFvbGRDb250YWluZXIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2xkQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1snaGFzLWNvbHVtbiddXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHZhciByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEgPSBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG4gIH07XG4gIHZhciBhZGRJbnB1dENoYW5nZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgdmFyIGlucHV0ID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gICAgdmFyIGZpbGUgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICAgIC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbiAgICB2YXIgcmFuZ2UgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuICAgIC8qKiBAdHlwZSB7SFRNTE91dHB1dEVsZW1lbnR9ICovXG4gICAgdmFyIHJhbmdlT3V0cHV0ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIG91dHB1dFwiKSk7XG4gICAgdmFyIHNlbGVjdCA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICAvKiogQHR5cGUge0hUTUxJbnB1dEVsZW1lbnR9ICovXG4gICAgdmFyIGNoZWNrYm94ID0gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcbiAgICB2YXIgdGV4dGFyZWEgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRleHRhcmVhKTtcbiAgICBpbnB1dC5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIGZpbGUub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlJDE7XG4gICAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIGNoZWNrYm94Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxO1xuICAgIHRleHRhcmVhLm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlJDE7XG4gICAgcmFuZ2Uub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpO1xuICAgICAgcmFuZ2VPdXRwdXQudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgICB9O1xuICAgIHJhbmdlLm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxKCk7XG4gICAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICB2YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICAgIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgc2V0dXBBY2Nlc3NpYmlsaXR5ID0gZnVuY3Rpb24gc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcykge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdyb2xlJywgcGFyYW1zLnRvYXN0ID8gJ2FsZXJ0JyA6ICdkaWFsb2cnKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBhcmFtcy50b2FzdCA/ICdwb2xpdGUnIDogJ2Fzc2VydGl2ZScpO1xuICAgIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0RWxlbWVudFxuICAgKi9cbiAgdmFyIHNldHVwUlRMID0gZnVuY3Rpb24gc2V0dXBSVEwodGFyZ2V0RWxlbWVudCkge1xuICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRFbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICBhZGRDbGFzcyhnZXRDb250YWluZXIoKSwgc3dhbENsYXNzZXMucnRsKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCBtb2RhbCArIGJhY2tkcm9wICsgbm8td2FyIG1lc3NhZ2UgZm9yIFJ1c3NpYW5zIHRvIERPTVxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdChwYXJhbXMpIHtcbiAgICAvLyBDbGVhbiB1cCB0aGUgb2xkIHBvcHVwIGNvbnRhaW5lciBpZiBpdCBleGlzdHNcbiAgICB2YXIgb2xkQ29udGFpbmVyRXhpc3RlZCA9IHJlc2V0T2xkQ29udGFpbmVyKCk7XG4gICAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcbiAgICBpZiAob2xkQ29udGFpbmVyRXhpc3RlZCkge1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1snbm8tdHJhbnNpdGlvbiddKTtcbiAgICB9XG4gICAgc2V0SW5uZXJIdG1sKGNvbnRhaW5lciwgc3dlZXRIVE1MKTtcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGdldFRhcmdldChwYXJhbXMudGFyZ2V0KTtcbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcyk7XG4gICAgc2V0dXBSVEwodGFyZ2V0RWxlbWVudCk7XG4gICAgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IG9iamVjdCB8IHN0cmluZ30gcGFyYW1cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqL1xuICB2YXIgcGFyc2VIdG1sVG9Db250YWluZXIgPSBmdW5jdGlvbiBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbSwgdGFyZ2V0KSB7XG4gICAgLy8gRE9NIGVsZW1lbnRcbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHBhcmFtKTtcbiAgICB9XG5cbiAgICAvLyBPYmplY3RcbiAgICBlbHNlIGlmIChfdHlwZW9mKHBhcmFtKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGhhbmRsZU9iamVjdChwYXJhbSwgdGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvLyBQbGFpbiBzdHJpbmdcbiAgICBlbHNlIGlmIChwYXJhbSkge1xuICAgICAgc2V0SW5uZXJIdG1sKHRhcmdldCwgcGFyYW0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IHBhcmFtXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhcmdldFxuICAgKi9cbiAgdmFyIGhhbmRsZU9iamVjdCA9IGZ1bmN0aW9uIGhhbmRsZU9iamVjdChwYXJhbSwgdGFyZ2V0KSB7XG4gICAgLy8gSlF1ZXJ5IGVsZW1lbnQocylcbiAgICBpZiAocGFyYW0uanF1ZXJ5KSB7XG4gICAgICBoYW5kbGVKcXVlcnlFbGVtKHRhcmdldCwgcGFyYW0pO1xuICAgIH1cblxuICAgIC8vIEZvciBvdGhlciBvYmplY3RzIHVzZSB0aGVpciBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICBlbHNlIHtcbiAgICAgIHNldElubmVySHRtbCh0YXJnZXQsIHBhcmFtLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqIEBwYXJhbSB7YW55fSBlbGVtXG4gICAqL1xuICB2YXIgaGFuZGxlSnF1ZXJ5RWxlbSA9IGZ1bmN0aW9uIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBlbGVtKSB7XG4gICAgdGFyZ2V0LnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKDAgaW4gZWxlbSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IChpIGluIGVsZW0pOyBpKyspIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW1baV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKGVsZW0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHsnd2Via2l0QW5pbWF0aW9uRW5kJyB8ICdhbmltYXRpb25lbmQnIHwgZmFsc2V9XG4gICAqL1xuICB2YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy8gQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhXG4gICAgaWYgKHR5cGVvZiB0ZXN0RWwuc3R5bGUud2Via2l0QW5pbWF0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuICd3ZWJraXRBbmltYXRpb25FbmQnO1xuICAgIH1cblxuICAgIC8vIFN0YW5kYXJkIHN5bnRheFxuICAgIGlmICh0eXBlb2YgdGVzdEVsLnN0eWxlLmFuaW1hdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiAnYW5pbWF0aW9uZW5kJztcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgcmVuZGVyQWN0aW9ucyA9IGZ1bmN0aW9uIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIoKTtcbiAgICBpZiAoIWFjdGlvbnMgfHwgIWxvYWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcbiAgICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dEZW55QnV0dG9uICYmICFwYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgaGlkZShhY3Rpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hvdyhhY3Rpb25zKTtcbiAgICB9XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKGFjdGlvbnMsIHBhcmFtcywgJ2FjdGlvbnMnKTtcblxuICAgIC8vIFJlbmRlciBhbGwgdGhlIGJ1dHRvbnNcbiAgICByZW5kZXJCdXR0b25zKGFjdGlvbnMsIGxvYWRlciwgcGFyYW1zKTtcblxuICAgIC8vIExvYWRlclxuICAgIHNldElubmVySHRtbChsb2FkZXIsIHBhcmFtcy5sb2FkZXJIdG1sIHx8ICcnKTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGxvYWRlciwgcGFyYW1zLCAnbG9hZGVyJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGFjdGlvbnNcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbG9hZGVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcmVuZGVyQnV0dG9ucyhhY3Rpb25zLCBsb2FkZXIsIHBhcmFtcykge1xuICAgIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIHZhciBkZW55QnV0dG9uID0gZ2V0RGVueUJ1dHRvbigpO1xuICAgIHZhciBjYW5jZWxCdXR0b24gPSBnZXRDYW5jZWxCdXR0b24oKTtcbiAgICBpZiAoIWNvbmZpcm1CdXR0b24gfHwgIWRlbnlCdXR0b24gfHwgIWNhbmNlbEJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJlbmRlciBidXR0b25zXG4gICAgcmVuZGVyQnV0dG9uKGNvbmZpcm1CdXR0b24sICdjb25maXJtJywgcGFyYW1zKTtcbiAgICByZW5kZXJCdXR0b24oZGVueUJ1dHRvbiwgJ2RlbnknLCBwYXJhbXMpO1xuICAgIHJlbmRlckJ1dHRvbihjYW5jZWxCdXR0b24sICdjYW5jZWwnLCBwYXJhbXMpO1xuICAgIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKTtcbiAgICBpZiAocGFyYW1zLnJldmVyc2VCdXR0b25zKSB7XG4gICAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNhbmNlbEJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGRlbnlCdXR0b24sIGNvbmZpcm1CdXR0b24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBsb2FkZXIpO1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShkZW55QnV0dG9uLCBsb2FkZXIpO1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjb25maXJtQnV0dG9uLCBsb2FkZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb25maXJtQnV0dG9uXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGRlbnlCdXR0b25cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2FuY2VsQnV0dG9uXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgICAgcmVtb3ZlQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuXG4gICAgLy8gQnV0dG9ucyBiYWNrZ3JvdW5kIGNvbG9yc1xuICAgIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gICAgICBhZGRDbGFzcyhjb25maXJtQnV0dG9uLCBzd2FsQ2xhc3Nlc1snZGVmYXVsdC1vdXRsaW5lJ10pO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmRlbnlCdXR0b25Db2xvcikge1xuICAgICAgZGVueUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuZGVueUJ1dHRvbkNvbG9yO1xuICAgICAgYWRkQ2xhc3MoZGVueUJ1dHRvbiwgc3dhbENsYXNzZXNbJ2RlZmF1bHQtb3V0bGluZSddKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcikge1xuICAgICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgICAgIGFkZENsYXNzKGNhbmNlbEJ1dHRvbiwgc3dhbENsYXNzZXNbJ2RlZmF1bHQtb3V0bGluZSddKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYnV0dG9uXG4gICAqIEBwYXJhbSB7J2NvbmZpcm0nIHwgJ2RlbnknIHwgJ2NhbmNlbCd9IGJ1dHRvblR5cGVcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJCdXR0b24oYnV0dG9uLCBidXR0b25UeXBlLCBwYXJhbXMpIHtcbiAgICB2YXIgYnV0dG9uTmFtZSA9IC8qKiBAdHlwZSB7J0NvbmZpcm0nIHwgJ0RlbnknIHwgJ0NhbmNlbCd9ICovY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGJ1dHRvblR5cGUpO1xuICAgIHRvZ2dsZShidXR0b24sIHBhcmFtc1tcInNob3dcIi5jb25jYXQoYnV0dG9uTmFtZSwgXCJCdXR0b25cIildLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgc2V0SW5uZXJIdG1sKGJ1dHRvbiwgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uVGV4dFwiKV0gfHwgJycpOyAvLyBTZXQgY2FwdGlvbiB0ZXh0XG4gICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtc1tcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvbkFyaWFMYWJlbFwiKV0gfHwgJycpOyAvLyBBUklBIGxhYmVsXG5cbiAgICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tidXR0b25UeXBlXTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGJ1dHRvbiwgcGFyYW1zLCBcIlwiLmNvbmNhdChidXR0b25UeXBlLCBcIkJ1dHRvblwiKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpO1xuICAgIGlmICghY2xvc2VCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0SW5uZXJIdG1sKGNsb3NlQnV0dG9uLCBwYXJhbXMuY2xvc2VCdXR0b25IdG1sIHx8ICcnKTtcblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoY2xvc2VCdXR0b24sIHBhcmFtcywgJ2Nsb3NlQnV0dG9uJyk7XG4gICAgdG9nZ2xlKGNsb3NlQnV0dG9uLCBwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2xvc2VCdXR0b25BcmlhTGFiZWwgfHwgJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlckNvbnRhaW5lciA9IGZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBwYXJhbXMuYmFja2Ryb3ApO1xuICAgIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwYXJhbXMucG9zaXRpb24pO1xuICAgIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIHBhcmFtcy5ncm93KTtcblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMsICdjb250YWluZXInKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ2JhY2tkcm9wJ119IGJhY2tkcm9wXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgYmFja2Ryb3ApIHtcbiAgICBpZiAodHlwZW9mIGJhY2tkcm9wID09PSAnc3RyaW5nJykge1xuICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZHJvcDtcbiAgICB9IGVsc2UgaWYgKCFiYWNrZHJvcCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnNbJ3Bvc2l0aW9uJ119IHBvc2l0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcG9zaXRpb24pIHtcbiAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twb3NpdGlvbl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpO1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snZ3JvdyddfSBncm93XG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBncm93KSB7XG4gICAgaWYgKCFncm93KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbXCJncm93LVwiLmNvbmNhdChncm93KV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICAgKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAgICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gICAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gICAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAgICovXG5cbiAgdmFyIHByaXZhdGVQcm9wcyA9IHtcbiAgICBpbm5lclBhcmFtczogbmV3IFdlYWtNYXAoKSxcbiAgICBkb21DYWNoZTogbmV3IFdlYWtNYXAoKVxuICB9O1xuXG4gIC8qKiBAdHlwZSB7SW5wdXRDbGFzc1tdfSAqL1xuICB2YXIgaW5wdXRDbGFzc2VzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlcklucHV0ID0gZnVuY3Rpb24gcmVuZGVySW5wdXQoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICB2YXIgcmVyZW5kZXIgPSAhaW5uZXJQYXJhbXMgfHwgcGFyYW1zLmlucHV0ICE9PSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgICBpbnB1dENsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRDbGFzcykge1xuICAgICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlc1tpbnB1dENsYXNzXSk7XG4gICAgICBpZiAoIWlucHV0Q29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gc2V0IGF0dHJpYnV0ZXNcbiAgICAgIHNldEF0dHJpYnV0ZXMoaW5wdXRDbGFzcywgcGFyYW1zLmlucHV0QXR0cmlidXRlcyk7XG5cbiAgICAgIC8vIHNldCBjbGFzc1xuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbaW5wdXRDbGFzc107XG4gICAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgICAgaGlkZShpbnB1dENvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHBhcmFtcy5pbnB1dCkge1xuICAgICAgaWYgKHJlcmVuZGVyKSB7XG4gICAgICAgIHNob3dJbnB1dChwYXJhbXMpO1xuICAgICAgfVxuICAgICAgLy8gc2V0IGN1c3RvbSBjbGFzc1xuICAgICAgc2V0Q3VzdG9tQ2xhc3MocGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHNob3dJbnB1dCA9IGZ1bmN0aW9uIHNob3dJbnB1dChwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcy5pbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKSB7XG4gICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXCIuY29uY2F0KE9iamVjdC5rZXlzKHJlbmRlcklucHV0VHlwZSkuam9pbignIHwgJyksIFwiLCBnb3QgXFxcIlwiKS5jb25jYXQocGFyYW1zLmlucHV0LCBcIlxcXCJcIikpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRJbnB1dENvbnRhaW5lcihwYXJhbXMuaW5wdXQpO1xuICAgIHZhciBpbnB1dCA9IHJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKGlucHV0Q29udGFpbmVyLCBwYXJhbXMpO1xuICAgIHNob3coaW5wdXRDb250YWluZXIpO1xuXG4gICAgLy8gaW5wdXQgYXV0b2ZvY3VzXG4gICAgaWYgKHBhcmFtcy5pbnB1dEF1dG9Gb2N1cykge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqL1xuICB2YXIgcmVtb3ZlQXR0cmlidXRlcyA9IGZ1bmN0aW9uIHJlbW92ZUF0dHJpYnV0ZXMoaW5wdXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbaV0ubmFtZTtcbiAgICAgIGlmICghWydpZCcsICd0eXBlJywgJ3ZhbHVlJywgJ3N0eWxlJ10uaW5jbHVkZXMoYXR0ck5hbWUpKSB7XG4gICAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lucHV0Q2xhc3N9IGlucHV0Q2xhc3NcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snaW5wdXRBdHRyaWJ1dGVzJ119IGlucHV0QXR0cmlidXRlc1xuICAgKi9cbiAgdmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGlucHV0Q2xhc3MsIGlucHV0QXR0cmlidXRlcykge1xuICAgIHZhciBpbnB1dCA9IGdldElucHV0JDEoZ2V0UG9wdXAoKSwgaW5wdXRDbGFzcyk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVzKGlucHV0KTtcbiAgICBmb3IgKHZhciBhdHRyIGluIGlucHV0QXR0cmlidXRlcykge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBzZXRDdXN0b21DbGFzcyA9IGZ1bmN0aW9uIHNldEN1c3RvbUNsYXNzKHBhcmFtcykge1xuICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dCk7XG4gICAgaWYgKF90eXBlb2YocGFyYW1zLmN1c3RvbUNsYXNzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXQpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgc2V0SW5wdXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcykge1xuICAgIGlmICghaW5wdXQucGxhY2Vob2xkZXIgfHwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0lucHV0fSBpbnB1dFxuICAgKiBAcGFyYW0ge0lucHV0fSBwcmVwZW5kVG9cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgc2V0SW5wdXRMYWJlbCA9IGZ1bmN0aW9uIHNldElucHV0TGFiZWwoaW5wdXQsIHByZXBlbmRUbywgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dExhYmVsKSB7XG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgdmFyIGxhYmVsQ2xhc3MgPSBzd2FsQ2xhc3Nlc1snaW5wdXQtbGFiZWwnXTtcbiAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgaW5wdXQuaWQpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gbGFiZWxDbGFzcztcbiAgICAgIGlmIChfdHlwZW9mKHBhcmFtcy5jdXN0b21DbGFzcykgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGFkZENsYXNzKGxhYmVsLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXRMYWJlbCk7XG4gICAgICB9XG4gICAgICBsYWJlbC5pbm5lclRleHQgPSBwYXJhbXMuaW5wdXRMYWJlbDtcbiAgICAgIHByZXBlbmRUby5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbGFiZWwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snaW5wdXQnXX0gaW5wdXRUeXBlXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHZhciBnZXRJbnB1dENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldElucHV0Q29udGFpbmVyKGlucHV0VHlwZSkge1xuICAgIHJldHVybiBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MoZ2V0UG9wdXAoKSwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSB8fCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IEhUTUxPdXRwdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snaW5wdXRWYWx1ZSddfSBpbnB1dFZhbHVlXG4gICAqL1xuICB2YXIgY2hlY2tBbmRTZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gY2hlY2tBbmRTZXRJbnB1dFZhbHVlKGlucHV0LCBpbnB1dFZhbHVlKSB7XG4gICAgaWYgKFsnc3RyaW5nJywgJ251bWJlciddLmluY2x1ZGVzKF90eXBlb2YoaW5wdXRWYWx1ZSkpKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCIuY29uY2F0KGlucHV0VmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoIWlzUHJvbWlzZShpbnB1dFZhbHVlKSkge1xuICAgICAgd2FybihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiwgXFxcIm51bWJlclxcXCIgb3IgXFxcIlByb21pc2VcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChfdHlwZW9mKGlucHV0VmFsdWUpLCBcIlxcXCJcIikpO1xuICAgIH1cbiAgfTtcblxuICAvKiogQHR5cGUge1JlY29yZDxTd2VldEFsZXJ0SW5wdXQsIChpbnB1dDogSW5wdXQgfCBIVE1MRWxlbWVudCwgcGFyYW1zOiBTd2VldEFsZXJ0T3B0aW9ucykgPT4gSW5wdXQ+fSAqL1xuICB2YXIgcmVuZGVySW5wdXRUeXBlID0ge307XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnRleHQgPSByZW5kZXJJbnB1dFR5cGUuZW1haWwgPSByZW5kZXJJbnB1dFR5cGUucGFzc3dvcmQgPSByZW5kZXJJbnB1dFR5cGUubnVtYmVyID0gcmVuZGVySW5wdXRUeXBlLnRlbCA9IHJlbmRlcklucHV0VHlwZS51cmwgPSByZW5kZXJJbnB1dFR5cGUuc2VhcmNoID0gcmVuZGVySW5wdXRUeXBlLmRhdGUgPSByZW5kZXJJbnB1dFR5cGVbJ2RhdGV0aW1lLWxvY2FsJ10gPSByZW5kZXJJbnB1dFR5cGUudGltZSA9IHJlbmRlcklucHV0VHlwZS53ZWVrID0gcmVuZGVySW5wdXRUeXBlLm1vbnRoID0gZnVuY3Rpb24gKGlucHV0LCBwYXJhbXMpIHtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUoaW5wdXQsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBzZXRJbnB1dExhYmVsKGlucHV0LCBpbnB1dCwgcGFyYW1zKTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpO1xuICAgIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5maWxlID0gZnVuY3Rpb24gKGlucHV0LCBwYXJhbXMpIHtcbiAgICBzZXRJbnB1dExhYmVsKGlucHV0LCBpbnB1dCwgcGFyYW1zKTtcbiAgICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSByYW5nZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUucmFuZ2UgPSBmdW5jdGlvbiAocmFuZ2UsIHBhcmFtcykge1xuICAgIHZhciByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICB2YXIgcmFuZ2VPdXRwdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKTtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUocmFuZ2VJbnB1dCwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHJhbmdlSW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICBjaGVja0FuZFNldElucHV0VmFsdWUocmFuZ2VPdXRwdXQsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICBzZXRJbnB1dExhYmVsKHJhbmdlSW5wdXQsIHJhbmdlLCBwYXJhbXMpO1xuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MU2VsZWN0RWxlbWVudH0gc2VsZWN0XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTFNlbGVjdEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKHNlbGVjdCwgcGFyYW1zKSB7XG4gICAgc2VsZWN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgICB2YXIgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIHNldElubmVySHRtbChwbGFjZWhvbGRlciwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpO1xuICAgICAgcGxhY2Vob2xkZXIudmFsdWUgPSAnJztcbiAgICAgIHBsYWNlaG9sZGVyLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG4gICAgfVxuICAgIHNldElucHV0TGFiZWwoc2VsZWN0LCBzZWxlY3QsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlbGVjdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSByYWRpb1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5yYWRpbyA9IGZ1bmN0aW9uIChyYWRpbykge1xuICAgIHJhZGlvLnRleHRDb250ZW50ID0gJyc7XG4gICAgcmV0dXJuIHJhZGlvO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxMYWJlbEVsZW1lbnR9IGNoZWNrYm94Q29udGFpbmVyXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5jaGVja2JveCA9IGZ1bmN0aW9uIChjaGVja2JveENvbnRhaW5lciwgcGFyYW1zKSB7XG4gICAgdmFyIGNoZWNrYm94ID0gZ2V0SW5wdXQkMShnZXRQb3B1cCgpLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC52YWx1ZSA9ICcxJztcbiAgICBjaGVja2JveC5jaGVja2VkID0gQm9vbGVhbihwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgdmFyIGxhYmVsID0gY2hlY2tib3hDb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgIHNldElubmVySHRtbChsYWJlbCwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpO1xuICAgIHJldHVybiBjaGVja2JveDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MVGV4dEFyZWFFbGVtZW50fSB0ZXh0YXJlYVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxUZXh0QXJlYUVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUudGV4dGFyZWEgPSBmdW5jdGlvbiAodGV4dGFyZWEsIHBhcmFtcykge1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZSh0ZXh0YXJlYSwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIodGV4dGFyZWEsIHBhcmFtcyk7XG4gICAgc2V0SW5wdXRMYWJlbCh0ZXh0YXJlYSwgdGV4dGFyZWEsIHBhcmFtcyk7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgdmFyIGdldE1hcmdpbiA9IGZ1bmN0aW9uIGdldE1hcmdpbihlbCkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW5MZWZ0KSArIHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKS5tYXJnaW5SaWdodCk7XG4gICAgfTtcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjI5MVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8xNjk5XG4gICAgICBpZiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICB2YXIgaW5pdGlhbFBvcHVwV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShnZXRQb3B1cCgpKS53aWR0aCk7XG4gICAgICAgIHZhciB0ZXh0YXJlYVJlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiB0ZXh0YXJlYVJlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGV4YXJlYSBpcyBzdGlsbCBpbiBkb2N1bWVudCAoaS5lLiBwb3B1cCB3YXNuJ3QgY2xvc2VkIGluIHRoZSBtZWFudGltZSlcbiAgICAgICAgICBpZiAoIWRvY3VtZW50LmJvZHkuY29udGFpbnModGV4dGFyZWEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB0ZXh0YXJlYVdpZHRoID0gdGV4dGFyZWEub2Zmc2V0V2lkdGggKyBnZXRNYXJnaW4odGV4dGFyZWEpO1xuICAgICAgICAgIGlmICh0ZXh0YXJlYVdpZHRoID4gaW5pdGlhbFBvcHVwV2lkdGgpIHtcbiAgICAgICAgICAgIGdldFBvcHVwKCkuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdCh0ZXh0YXJlYVdpZHRoLCBcInB4XCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcHBseU51bWVyaWNhbFN0eWxlKGdldFBvcHVwKCksICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcih0ZXh0YXJlYVJlc2l6ZUhhbmRsZXIpLm9ic2VydmUodGV4dGFyZWEsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGF0dHJpYnV0ZUZpbHRlcjogWydzdHlsZSddXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0ZXh0YXJlYTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGh0bWxDb250YWluZXIgPSBnZXRIdG1sQ29udGFpbmVyKCk7XG4gICAgaWYgKCFodG1sQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3dXaGVuSW5uZXJIdG1sUHJlc2VudChodG1sQ29udGFpbmVyKTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGh0bWxDb250YWluZXIsIHBhcmFtcywgJ2h0bWxDb250YWluZXInKTtcblxuICAgIC8vIENvbnRlbnQgYXMgSFRNTFxuICAgIGlmIChwYXJhbXMuaHRtbCkge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmh0bWwsIGh0bWxDb250YWluZXIpO1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTtcbiAgICB9XG5cbiAgICAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgICBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgICAgaHRtbENvbnRhaW5lci50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgICAgc2hvdyhodG1sQ29udGFpbmVyLCAnYmxvY2snKTtcbiAgICB9XG5cbiAgICAvLyBObyBjb250ZW50XG4gICAgZWxzZSB7XG4gICAgICBoaWRlKGh0bWxDb250YWluZXIpO1xuICAgIH1cbiAgICByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJGb290ZXIgPSBmdW5jdGlvbiByZW5kZXJGb290ZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBmb290ZXIgPSBnZXRGb290ZXIoKTtcbiAgICBpZiAoIWZvb3Rlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93V2hlbklubmVySHRtbFByZXNlbnQoZm9vdGVyKTtcbiAgICB0b2dnbGUoZm9vdGVyLCBwYXJhbXMuZm9vdGVyLCAnYmxvY2snKTtcbiAgICBpZiAocGFyYW1zLmZvb3Rlcikge1xuICAgICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTtcbiAgICB9XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKGZvb3RlciwgcGFyYW1zLCAnZm9vdGVyJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgcmVuZGVySWNvbiA9IGZ1bmN0aW9uIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIHZhciBpY29uID0gZ2V0SWNvbigpO1xuICAgIGlmICghaWNvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGlmIHRoZSBnaXZlbiBpY29uIGFscmVhZHkgcmVuZGVyZWQsIGFwcGx5IHRoZSBzdHlsaW5nIHdpdGhvdXQgcmUtcmVuZGVyaW5nIHRoZSBpY29uXG4gICAgaWYgKGlubmVyUGFyYW1zICYmIHBhcmFtcy5pY29uID09PSBpbm5lclBhcmFtcy5pY29uKSB7XG4gICAgICAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG4gICAgICBzZXRDb250ZW50KGljb24sIHBhcmFtcyk7XG4gICAgICBhcHBseVN0eWxlcyhpY29uLCBwYXJhbXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5pY29uICYmICFwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIGhpZGUoaWNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXMuaWNvbiAmJiBPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLmljb24pID09PSAtMSkge1xuICAgICAgZXJyb3IoXCJVbmtub3duIGljb24hIEV4cGVjdGVkIFxcXCJzdWNjZXNzXFxcIiwgXFxcImVycm9yXFxcIiwgXFxcIndhcm5pbmdcXFwiLCBcXFwiaW5mb1xcXCIgb3IgXFxcInF1ZXN0aW9uXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLmljb24sIFwiXFxcIlwiKSk7XG4gICAgICBoaWRlKGljb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93KGljb24pO1xuXG4gICAgLy8gQ3VzdG9tIG9yIGRlZmF1bHQgY29udGVudFxuICAgIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKTtcbiAgICBhcHBseVN0eWxlcyhpY29uLCBwYXJhbXMpO1xuXG4gICAgLy8gQW5pbWF0ZSBpY29uXG4gICAgYWRkQ2xhc3MoaWNvbiwgcGFyYW1zLnNob3dDbGFzcyAmJiBwYXJhbXMuc2hvd0NsYXNzLmljb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpY29uXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIGFwcGx5U3R5bGVzID0gZnVuY3Rpb24gYXBwbHlTdHlsZXMoaWNvbiwgcGFyYW1zKSB7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfT2JqZWN0JGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhpY29uVHlwZXMpOyBfaSA8IF9PYmplY3QkZW50cmllcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfT2JqZWN0JGVudHJpZXMkX2kgPSBfc2xpY2VkVG9BcnJheShfT2JqZWN0JGVudHJpZXNbX2ldLCAyKSxcbiAgICAgICAgaWNvblR5cGUgPSBfT2JqZWN0JGVudHJpZXMkX2lbMF0sXG4gICAgICAgIGljb25DbGFzc05hbWUgPSBfT2JqZWN0JGVudHJpZXMkX2lbMV07XG4gICAgICBpZiAocGFyYW1zLmljb24gIT09IGljb25UeXBlKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKGljb24sIGljb25DbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuaWNvbiAmJiBpY29uVHlwZXNbcGFyYW1zLmljb25dKTtcblxuICAgIC8vIEljb24gY29sb3JcbiAgICBzZXRDb2xvcihpY29uLCBwYXJhbXMpO1xuXG4gICAgLy8gU3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3JcbiAgICBhZGp1c3RTdWNjZXNzSWNvbkJhY2tncm91bmRDb2xvcigpO1xuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhpY29uLCBwYXJhbXMsICdpY29uJyk7XG4gIH07XG5cbiAgLy8gQWRqdXN0IHN1Y2Nlc3MgaWNvbiBiYWNrZ3JvdW5kIGNvbG9yIHRvIG1hdGNoIHRoZSBwb3B1cCBiYWNrZ3JvdW5kIGNvbG9yXG4gIHZhciBhZGp1c3RTdWNjZXNzSWNvbkJhY2tncm91bmRDb2xvciA9IGZ1bmN0aW9uIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dyb3VuZENvbG9yKCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcG9wdXBCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwb3B1cCkuZ2V0UHJvcGVydHlWYWx1ZSgnYmFja2dyb3VuZC1jb2xvcicpO1xuICAgIC8qKiBAdHlwZSB7Tm9kZUxpc3RPZjxIVE1MRWxlbWVudD59ICovXG4gICAgdmFyIHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3VjY2Vzc0ljb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgc3VjY2Vzc0ljb25QYXJ0c1tpXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwb3B1cEJhY2tncm91bmRDb2xvcjtcbiAgICB9XG4gIH07XG4gIHZhciBzdWNjZXNzSWNvbkh0bWwgPSBcIlxcbiAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcXFwiPjwvZGl2PlxcbiAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXFxcIj48L3NwYW4+XFxuICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLXJpbmdcXFwiPjwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWZpeFxcXCI+PC9kaXY+XFxuICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcXFwiPjwvZGl2PlxcblwiO1xuICB2YXIgZXJyb3JJY29uSHRtbCA9IFwiXFxuICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrXFxcIj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLWxlZnRcXFwiPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+XFxuICA8L3NwYW4+XFxuXCI7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGljb25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgc2V0Q29udGVudCA9IGZ1bmN0aW9uIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMuaWNvbiAmJiAhcGFyYW1zLmljb25IdG1sKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBvbGRDb250ZW50ID0gaWNvbi5pbm5lckhUTUw7XG4gICAgdmFyIG5ld0NvbnRlbnQgPSAnJztcbiAgICBpZiAocGFyYW1zLmljb25IdG1sKSB7XG4gICAgICBuZXdDb250ZW50ID0gaWNvbkNvbnRlbnQocGFyYW1zLmljb25IdG1sKTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtcy5pY29uID09PSAnc3VjY2VzcycpIHtcbiAgICAgIG5ld0NvbnRlbnQgPSBzdWNjZXNzSWNvbkh0bWw7XG4gICAgICBvbGRDb250ZW50ID0gb2xkQ29udGVudC5yZXBsYWNlKC8gc3R5bGU9XCIuKj9cIi9nLCAnJyk7IC8vIHVuZG8gYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ3JvdW5kQ29sb3IoKVxuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdlcnJvcicpIHtcbiAgICAgIG5ld0NvbnRlbnQgPSBlcnJvckljb25IdG1sO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24pIHtcbiAgICAgIHZhciBkZWZhdWx0SWNvbkh0bWwgPSB7XG4gICAgICAgIHF1ZXN0aW9uOiAnPycsXG4gICAgICAgIHdhcm5pbmc6ICchJyxcbiAgICAgICAgaW5mbzogJ2knXG4gICAgICB9O1xuICAgICAgbmV3Q29udGVudCA9IGljb25Db250ZW50KGRlZmF1bHRJY29uSHRtbFtwYXJhbXMuaWNvbl0pO1xuICAgIH1cbiAgICBpZiAob2xkQ29udGVudC50cmltKCkgIT09IG5ld0NvbnRlbnQudHJpbSgpKSB7XG4gICAgICBzZXRJbm5lckh0bWwoaWNvbiwgbmV3Q29udGVudCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpY29uXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHNldENvbG9yID0gZnVuY3Rpb24gc2V0Q29sb3IoaWNvbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMuaWNvbkNvbG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGljb24uc3R5bGUuY29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuICAgIGljb24uc3R5bGUuYm9yZGVyQ29sb3IgPSBwYXJhbXMuaWNvbkNvbG9yO1xuICAgIGZvciAodmFyIF9pMiA9IDAsIF9hcnIgPSBbJy5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwJywgJy5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZycsICcuc3dhbDIteC1tYXJrLWxpbmUtbGVmdCcsICcuc3dhbDIteC1tYXJrLWxpbmUtcmlnaHQnXTsgX2kyIDwgX2Fyci5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgc2VsID0gX2FycltfaTJdO1xuICAgICAgc2V0U3R5bGUoaWNvbiwgc2VsLCAnYmFja2dyb3VuZC1jb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpO1xuICAgIH1cbiAgICBzZXRTdHlsZShpY29uLCAnLnN3YWwyLXN1Y2Nlc3MtcmluZycsICdib3JkZXItY29sb3InLCBwYXJhbXMuaWNvbkNvbG9yKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHZhciBpY29uQ29udGVudCA9IGZ1bmN0aW9uIGljb25Db250ZW50KGNvbnRlbnQpIHtcbiAgICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXNbJ2ljb24tY29udGVudCddLCBcIlxcXCI+XCIpLmNvbmNhdChjb250ZW50LCBcIjwvZGl2PlwiKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJJbWFnZSA9IGZ1bmN0aW9uIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaW1hZ2UgPSBnZXRJbWFnZSgpO1xuICAgIGlmICghaW1hZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICAgIGhpZGUoaW1hZ2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93KGltYWdlLCAnJyk7XG5cbiAgICAvLyBTcmMsIGFsdFxuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGFyYW1zLmltYWdlVXJsKTtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIHBhcmFtcy5pbWFnZUFsdCB8fCAnJyk7XG5cbiAgICAvLyBXaWR0aCwgaGVpZ2h0XG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ3dpZHRoJywgcGFyYW1zLmltYWdlV2lkdGgpO1xuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICdoZWlnaHQnLCBwYXJhbXMuaW1hZ2VIZWlnaHQpO1xuXG4gICAgLy8gQ2xhc3NcbiAgICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGltYWdlLCBwYXJhbXMsICdpbWFnZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlclBvcHVwID0gZnVuY3Rpb24gcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghY29udGFpbmVyIHx8ICFwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFdpZHRoXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yMTcwXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShjb250YWluZXIsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgICBwb3B1cC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIoKTtcbiAgICAgIGxvYWRlciAmJiBwb3B1cC5pbnNlcnRCZWZvcmUobG9hZGVyLCBnZXRJY29uKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAncGFkZGluZycsIHBhcmFtcy5wYWRkaW5nKTtcblxuICAgIC8vIENvbG9yXG4gICAgaWYgKHBhcmFtcy5jb2xvcikge1xuICAgICAgcG9wdXAuc3R5bGUuY29sb3IgPSBwYXJhbXMuY29sb3I7XG4gICAgfVxuXG4gICAgLy8gQmFja2dyb3VuZFxuICAgIGlmIChwYXJhbXMuYmFja2dyb3VuZCkge1xuICAgICAgcG9wdXAuc3R5bGUuYmFja2dyb3VuZCA9IHBhcmFtcy5iYWNrZ3JvdW5kO1xuICAgIH1cbiAgICBoaWRlKGdldFZhbGlkYXRpb25NZXNzYWdlKCkpO1xuXG4gICAgLy8gQ2xhc3Nlc1xuICAgIGFkZENsYXNzZXMkMShwb3B1cCwgcGFyYW1zKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgYWRkQ2xhc3NlcyQxID0gZnVuY3Rpb24gYWRkQ2xhc3Nlcyhwb3B1cCwgcGFyYW1zKSB7XG4gICAgdmFyIHNob3dDbGFzcyA9IHBhcmFtcy5zaG93Q2xhc3MgfHwge307XG4gICAgLy8gRGVmYXVsdCBDbGFzcyArIHNob3dDbGFzcyB3aGVuIHVwZGF0aW5nIFN3YWwudXBkYXRlKHt9KVxuICAgIHBvcHVwLmNsYXNzTmFtZSA9IFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiBcIikuY29uY2F0KGlzVmlzaWJsZSQxKHBvcHVwKSA/IHNob3dDbGFzcy5wb3B1cCA6ICcnKTtcbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRvYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLm1vZGFsKTtcbiAgICB9XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKHBvcHVwLCBwYXJhbXMsICdwb3B1cCcpO1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5jdXN0b21DbGFzcyk7XG4gICAgfVxuXG4gICAgLy8gSWNvbiBjbGFzcyAoIzE4NDIpXG4gICAgaWYgKHBhcmFtcy5pY29uKSB7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXNbXCJpY29uLVwiLmNvbmNhdChwYXJhbXMuaWNvbildKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyID0gZ2V0UHJvZ3Jlc3NTdGVwcygpO1xuICAgIGlmICghcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcHJvZ3Jlc3NTdGVwcyA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLFxuICAgICAgY3VycmVudFByb2dyZXNzU3RlcCA9IHBhcmFtcy5jdXJyZW50UHJvZ3Jlc3NTdGVwO1xuICAgIGlmICghcHJvZ3Jlc3NTdGVwcyB8fCBwcm9ncmVzc1N0ZXBzLmxlbmd0aCA9PT0gMCB8fCBjdXJyZW50UHJvZ3Jlc3NTdGVwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGhpZGUocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICAgIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgICB3YXJuKCdJbnZhbGlkIGN1cnJlbnRQcm9ncmVzc1N0ZXAgcGFyYW1ldGVyLCBpdCBzaG91bGQgYmUgbGVzcyB0aGFuIHByb2dyZXNzU3RlcHMubGVuZ3RoICcgKyAnKGN1cnJlbnRQcm9ncmVzc1N0ZXAgbGlrZSBKUyBhcnJheXMgc3RhcnRzIGZyb20gMCknKTtcbiAgICB9XG4gICAgcHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgICAgdmFyIHN0ZXBFbCA9IGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpO1xuICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50UHJvZ3Jlc3NTdGVwKSB7XG4gICAgICAgIGFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJ10pO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICE9PSBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdmFyIGxpbmVFbCA9IGNyZWF0ZUxpbmVFbGVtZW50KHBhcmFtcyk7XG4gICAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZUVsKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0ZXBcbiAgICogQHJldHVybnMge0hUTUxMSUVsZW1lbnR9XG4gICAqL1xuICB2YXIgY3JlYXRlU3RlcEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVTdGVwRWxlbWVudChzdGVwKSB7XG4gICAgdmFyIHN0ZXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcCddKTtcbiAgICBzZXRJbm5lckh0bWwoc3RlcEVsLCBzdGVwKTtcbiAgICByZXR1cm4gc3RlcEVsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxMSUVsZW1lbnR9XG4gICAqL1xuICB2YXIgY3JlYXRlTGluZUVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMaW5lRWxlbWVudChwYXJhbXMpIHtcbiAgICB2YXIgbGluZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhsaW5lRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwLWxpbmUnXSk7XG4gICAgaWYgKHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpIHtcbiAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUobGluZUVsLCAnd2lkdGgnLCBwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKTtcbiAgICB9XG4gICAgcmV0dXJuIGxpbmVFbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJUaXRsZSA9IGZ1bmN0aW9uIHJlbmRlclRpdGxlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgdGl0bGUgPSBnZXRUaXRsZSgpO1xuICAgIGlmICghdGl0bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvd1doZW5Jbm5lckh0bWxQcmVzZW50KHRpdGxlKTtcbiAgICB0b2dnbGUodGl0bGUsIHBhcmFtcy50aXRsZSB8fCBwYXJhbXMudGl0bGVUZXh0LCAnYmxvY2snKTtcbiAgICBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy50aXRsZVRleHQpIHtcbiAgICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyh0aXRsZSwgcGFyYW1zLCAndGl0bGUnKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJQcm9ncmVzc1N0ZXBzKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICh0eXBlb2YgcGFyYW1zLmRpZFJlbmRlciA9PT0gJ2Z1bmN0aW9uJyAmJiBwb3B1cCkge1xuICAgICAgcGFyYW1zLmRpZFJlbmRlcihwb3B1cCk7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgU3dlZXRBbGVydDIgcG9wdXAgaXMgc2hvd25cbiAgICovXG4gIHZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIGlzVmlzaWJsZSQxKGdldFBvcHVwKCkpO1xuICB9O1xuXG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gICAqL1xuICB2YXIgY2xpY2tDb25maXJtID0gZnVuY3Rpb24gY2xpY2tDb25maXJtKCkge1xuICAgIHZhciBfZG9tJGdldENvbmZpcm1CdXR0b247XG4gICAgcmV0dXJuIChfZG9tJGdldENvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCkpID09PSBudWxsIHx8IF9kb20kZ2V0Q29uZmlybUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvbSRnZXRDb25maXJtQnV0dG9uLmNsaWNrKCk7XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdEZW55JyBidXR0b25cbiAgICovXG4gIHZhciBjbGlja0RlbnkgPSBmdW5jdGlvbiBjbGlja0RlbnkoKSB7XG4gICAgdmFyIF9kb20kZ2V0RGVueUJ1dHRvbjtcbiAgICByZXR1cm4gKF9kb20kZ2V0RGVueUJ1dHRvbiA9IGdldERlbnlCdXR0b24oKSkgPT09IG51bGwgfHwgX2RvbSRnZXREZW55QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9tJGdldERlbnlCdXR0b24uY2xpY2soKTtcbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NhbmNlbCcgYnV0dG9uXG4gICAqL1xuICB2YXIgY2xpY2tDYW5jZWwgPSBmdW5jdGlvbiBjbGlja0NhbmNlbCgpIHtcbiAgICB2YXIgX2RvbSRnZXRDYW5jZWxCdXR0b247XG4gICAgcmV0dXJuIChfZG9tJGdldENhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpKSA9PT0gbnVsbCB8fCBfZG9tJGdldENhbmNlbEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RvbSRnZXRDYW5jZWxCdXR0b24uY2xpY2soKTtcbiAgfTtcblxuICAvKiogQHR5cGVkZWYgeydjYW5jZWwnIHwgJ2JhY2tkcm9wJyB8ICdjbG9zZScgfCAnZXNjJyB8ICd0aW1lcid9IERpc21pc3NSZWFzb24gKi9cblxuICAvKiogQHR5cGUge1JlY29yZDxEaXNtaXNzUmVhc29uLCBEaXNtaXNzUmVhc29uPn0gKi9cbiAgdmFyIERpc21pc3NSZWFzb24gPSBPYmplY3QuZnJlZXplKHtcbiAgICBjYW5jZWw6ICdjYW5jZWwnLFxuICAgIGJhY2tkcm9wOiAnYmFja2Ryb3AnLFxuICAgIGNsb3NlOiAnY2xvc2UnLFxuICAgIGVzYzogJ2VzYycsXG4gICAgdGltZXI6ICd0aW1lcidcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7R2xvYmFsU3RhdGV9IGdsb2JhbFN0YXRlXG4gICAqL1xuICB2YXIgcmVtb3ZlS2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiByZW1vdmVLZXlkb3duSGFuZGxlcihnbG9iYWxTdGF0ZSkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0ICYmIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyLCB7XG4gICAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICAgIH0pO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtHbG9iYWxTdGF0ZX0gZ2xvYmFsU3RhdGVcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHBhcmFtIHsqfSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgdmFyIGFkZEtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gYWRkS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkge1xuICAgIHJlbW92ZUtleWRvd25IYW5kbGVyKGdsb2JhbFN0YXRlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBrZXlkb3duSGFuZGxlcihpbm5lclBhcmFtcywgZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgfTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlID8gd2luZG93IDogZ2V0UG9wdXAoKTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5jcmVtZW50XG4gICAqL1xuICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbmRleCwgaW5jcmVtZW50KSB7XG4gICAgdmFyIF9kb20kZ2V0UG9wdXA7XG4gICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuICAgIGlmIChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gaW5kZXggKyBpbmNyZW1lbnQ7XG5cbiAgICAgIC8vIHJvbGxvdmVyIHRvIGZpcnN0IGl0ZW1cbiAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGluZGV4ID0gMDtcblxuICAgICAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIGluZGV4ID0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XS5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBubyB2aXNpYmxlIGZvY3VzYWJsZSBlbGVtZW50cywgZm9jdXMgdGhlIHBvcHVwXG4gICAgKF9kb20kZ2V0UG9wdXAgPSBnZXRQb3B1cCgpKSA9PT0gbnVsbCB8fCBfZG9tJGdldFBvcHVwID09PSB2b2lkIDAgfHwgX2RvbSRnZXRQb3B1cC5mb2N1cygpO1xuICB9O1xuICB2YXIgYXJyb3dLZXlzTmV4dEJ1dHRvbiA9IFsnQXJyb3dSaWdodCcsICdBcnJvd0Rvd24nXTtcbiAgdmFyIGFycm93S2V5c1ByZXZpb3VzQnV0dG9uID0gWydBcnJvd0xlZnQnLCAnQXJyb3dVcCddO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihpbm5lclBhcmFtcywgZXZlbnQsIGRpc21pc3NXaXRoKSB7XG4gICAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgICAgcmV0dXJuOyAvLyBUaGlzIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gICAgfVxuXG4gICAgLy8gSWdub3JlIGtleWRvd24gZHVyaW5nIElNRSBjb21wb3NpdGlvblxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9rZXlkb3duX2V2ZW50I2lnbm9yaW5nX2tleWRvd25fZHVyaW5nX2ltZV9jb21wb3NpdGlvblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvNzIwXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNDA2XG4gICAgaWYgKGV2ZW50LmlzQ29tcG9zaW5nIHx8IGV2ZW50LmtleUNvZGUgPT09IDIyOSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5uZXJQYXJhbXMuc3RvcEtleWRvd25Qcm9wYWdhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gRU5URVJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBoYW5kbGVFbnRlcihldmVudCwgaW5uZXJQYXJhbXMpO1xuICAgIH1cblxuICAgIC8vIFRBQlxuICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGhhbmRsZVRhYihldmVudCk7XG4gICAgfVxuXG4gICAgLy8gQVJST1dTIC0gc3dpdGNoIGZvY3VzIGJldHdlZW4gYnV0dG9uc1xuICAgIGVsc2UgaWYgKFtdLmNvbmNhdChhcnJvd0tleXNOZXh0QnV0dG9uLCBhcnJvd0tleXNQcmV2aW91c0J1dHRvbikuaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgaGFuZGxlQXJyb3dzKGV2ZW50LmtleSk7XG4gICAgfVxuXG4gICAgLy8gRVNDXG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgaGFuZGxlRXNjKGV2ZW50LCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgdmFyIGhhbmRsZUVudGVyID0gZnVuY3Rpb24gaGFuZGxlRW50ZXIoZXZlbnQsIGlubmVyUGFyYW1zKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yMzg2XG4gICAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW5wdXQgPSBnZXRJbnB1dCQxKGdldFBvcHVwKCksIGlubmVyUGFyYW1zLmlucHV0KTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICYmIGlucHV0ICYmIGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGV2ZW50LnRhcmdldC5vdXRlckhUTUwgPT09IGlucHV0Lm91dGVySFRNTCkge1xuICAgICAgaWYgKFsndGV4dGFyZWEnLCAnZmlsZSddLmluY2x1ZGVzKGlubmVyUGFyYW1zLmlucHV0KSkge1xuICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBzdWJtaXRcbiAgICAgIH1cbiAgICAgIGNsaWNrQ29uZmlybSgpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICovXG4gIHZhciBoYW5kbGVUYWIgPSBmdW5jdGlvbiBoYW5kbGVUYWIoZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgIHZhciBidG5JbmRleCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09PSBmb2N1c2FibGVFbGVtZW50c1tpXSkge1xuICAgICAgICBidG5JbmRleCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGJ1dHRvblxuICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAxKTtcbiAgICB9XG5cbiAgICAvLyBDeWNsZSB0byB0aGUgcHJldiBidXR0b25cbiAgICBlbHNlIHtcbiAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgfVxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICovXG4gIHZhciBoYW5kbGVBcnJvd3MgPSBmdW5jdGlvbiBoYW5kbGVBcnJvd3Moa2V5KSB7XG4gICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgdmFyIGRlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCk7XG4gICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICAgIGlmICghYWN0aW9ucyB8fCAhY29uZmlybUJ1dHRvbiB8fCAhZGVueUJ1dHRvbiB8fCAhY2FuY2VsQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKiBAdHlwZSBIVE1MRWxlbWVudFtdICovXG4gICAgdmFyIGJ1dHRvbnMgPSBbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXTtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmICFidXR0b25zLmluY2x1ZGVzKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBzaWJsaW5nID0gYXJyb3dLZXlzTmV4dEJ1dHRvbi5pbmNsdWRlcyhrZXkpID8gJ25leHRFbGVtZW50U2libGluZycgOiAncHJldmlvdXNFbGVtZW50U2libGluZyc7XG4gICAgdmFyIGJ1dHRvblRvRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmICghYnV0dG9uVG9Gb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbnMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1dHRvblRvRm9jdXMgPSBidXR0b25Ub0ZvY3VzW3NpYmxpbmddO1xuICAgICAgaWYgKCFidXR0b25Ub0ZvY3VzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChidXR0b25Ub0ZvY3VzIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgJiYgaXNWaXNpYmxlJDEoYnV0dG9uVG9Gb2N1cykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChidXR0b25Ub0ZvY3VzIGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgICAgIGJ1dHRvblRvRm9jdXMuZm9jdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIHZhciBoYW5kbGVFc2MgPSBmdW5jdGlvbiBoYW5kbGVFc2MoZXZlbnQsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCkge1xuICAgIGlmIChjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VzY2FwZUtleSkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmVzYyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGlzIG1vZHVsZSBjb250YWlucyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAgICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gICAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gICAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICAgKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICAgKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gICAqL1xuXG4gIHZhciBwcml2YXRlTWV0aG9kcyA9IHtcbiAgICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKCksXG4gICAgc3dhbFByb21pc2VSZWplY3Q6IG5ldyBXZWFrTWFwKClcbiAgfTtcblxuICAvLyBGcm9tIGh0dHBzOi8vZGV2ZWxvcGVyLnBhY2llbGxvZ3JvdXAuY29tL2Jsb2cvMjAxOC8wNi90aGUtY3VycmVudC1zdGF0ZS1vZi1tb2RhbC1kaWFsb2ctYWNjZXNzaWJpbGl0eS9cbiAgLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4gIC8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4gIC8vIHJlYWRlcuKAmXMgbGlzdCBvZiBlbGVtZW50cyAoaGVhZGluZ3MsIGZvcm0gY29udHJvbHMsIGxhbmRtYXJrcywgZXRjLikgaW4gdGhlIGRvY3VtZW50LlxuXG4gIHZhciBzZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gc2V0QXJpYUhpZGRlbigpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgdmFyIGJvZHlDaGlsZHJlbiA9IEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoY29udGFpbmVyKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSB8fCAnJyk7XG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcbiAgfTtcbiAgdmFyIHVuc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHVuc2V0QXJpYUhpZGRlbigpIHtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykgfHwgJycpO1xuICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBAdHMtaWdub3JlXG4gIHZhciBpc1NhZmFyaU9ySU9TID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISF3aW5kb3cuR2VzdHVyZUV2ZW50OyAvLyB0cnVlIGZvciBTYWZhcmkgZGVza3RvcCArIGFsbCBpT1MgYnJvd3NlcnMgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzcwNTg1Mzk0XG5cbiAgLyoqXG4gICAqIEZpeCBpT1Mgc2Nyb2xsaW5nXG4gICAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5NjI2MzAyXG4gICAqL1xuICB2YXIgaU9TZml4ID0gZnVuY3Rpb24gaU9TZml4KCkge1xuICAgIGlmIChpc1NhZmFyaU9ySU9TICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IFwiXCIuY29uY2F0KG9mZnNldCAqIC0xLCBcInB4XCIpO1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICAgIGxvY2tCb2R5U2Nyb2xsKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzEyNDZcbiAgICovXG4gIHZhciBsb2NrQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGxvY2tCb2R5U2Nyb2xsKCkge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXG4gICAgdmFyIHByZXZlbnRUb3VjaE1vdmU7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNvbnRhaW5lci5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHByZXZlbnRUb3VjaE1vdmUgPSBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlKGV2ZW50KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICAgKi9cbiAgICBjb250YWluZXIub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChwcmV2ZW50VG91Y2hNb3ZlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7VG91Y2hFdmVudH0gZXZlbnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgc2hvdWxkUHJldmVudFRvdWNoTW92ZSA9IGZ1bmN0aW9uIHNob3VsZFByZXZlbnRUb3VjaE1vdmUoZXZlbnQpIHtcbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgaHRtbENvbnRhaW5lciA9IGdldEh0bWxDb250YWluZXIoKTtcbiAgICBpZiAoIWNvbnRhaW5lciB8fCAhaHRtbENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoaXNTdHlsdXMoZXZlbnQpIHx8IGlzWm9vbShldmVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRhcmdldCA9PT0gY29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFpc1Njcm9sbGFibGUoY29udGFpbmVyKSAmJiB0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAmJlxuICAgIC8vICMxNjAzXG4gICAgdGFyZ2V0LnRhZ05hbWUgIT09ICdURVhUQVJFQScgJiZcbiAgICAvLyAjMjI2NlxuICAgICEoaXNTY3JvbGxhYmxlKGh0bWxDb250YWluZXIpICYmXG4gICAgLy8gIzE5NDRcbiAgICBodG1sQ29udGFpbmVyLmNvbnRhaW5zKHRhcmdldCkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE3ODZcbiAgICpcbiAgICogQHBhcmFtIHsqfSBldmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1N0eWx1cyA9IGZ1bmN0aW9uIGlzU3R5bHVzKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggJiYgZXZlbnQudG91Y2hlc1swXS50b3VjaFR5cGUgPT09ICdzdHlsdXMnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE4OTFcbiAgICpcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1pvb20gPSBmdW5jdGlvbiBpc1pvb20oZXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCA+IDE7XG4gIH07XG4gIHZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgICAgdmFyIG9mZnNldCA9IHBhcnNlSW50KGRvY3VtZW50LmJvZHkuc3R5bGUudG9wLCAxMCk7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gb2Zmc2V0ICogLTE7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL3NyYy9tb2RhbC5qc1xuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgdmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICAgIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzY3JvbGxEaXYuY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbJ3Njcm9sbGJhci1tZWFzdXJlJ107XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JvbGxEaXYpO1xuICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1lbWJlciBzdGF0ZSBpbiBjYXNlcyB3aGVyZSBvcGVuaW5nIGFuZCBoYW5kbGluZyBhIG1vZGFsIHdpbGwgZmlkZGxlIHdpdGggaXQuXG4gICAqIEB0eXBlIHtudW1iZXIgfCBudWxsfVxuICAgKi9cbiAgdmFyIHByZXZpb3VzQm9keVBhZGRpbmcgPSBudWxsO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5pdGlhbEJvZHlPdmVyZmxvd1xuICAgKi9cbiAgdmFyIHJlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyA9IGZ1bmN0aW9uIHJlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyhpbml0aWFsQm9keU92ZXJmbG93KSB7XG4gICAgLy8gZm9yIHF1ZXVlcywgZG8gbm90IGRvIHRoaXMgbW9yZSB0aGFuIG9uY2VcbiAgICBpZiAocHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgYm9keSBoYXMgb3ZlcmZsb3dcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgaW5pdGlhbEJvZHlPdmVyZmxvdyA9PT0gJ3Njcm9sbCcgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNjYzXG4gICAgKSB7XG4gICAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgICBwcmV2aW91c0JvZHlQYWRkaW5nID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZy1yaWdodCcpKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCJcIi5jb25jYXQocHJldmlvdXNCb2R5UGFkZGluZyArIG1lYXN1cmVTY3JvbGxiYXIoKSwgXCJweFwiKTtcbiAgICB9XG4gIH07XG4gIHZhciB1bmRvUmVwbGFjZVNjcm9sbGJhcldpdGhQYWRkaW5nID0gZnVuY3Rpb24gdW5kb1JlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZygpIHtcbiAgICBpZiAocHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChwcmV2aW91c0JvZHlQYWRkaW5nLCBcInB4XCIpO1xuICAgICAgcHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJldHVybkZvY3VzXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpZENsb3NlXG4gICAqL1xuICBmdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSB7XG4gICAgaWYgKGlzVG9hc3QoKSkge1xuICAgICAgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZShpbnN0YW5jZSwgZGlkQ2xvc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN0b3JlQWN0aXZlRWxlbWVudChyZXR1cm5Gb2N1cykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSk7XG4gICAgICB9KTtcbiAgICAgIHJlbW92ZUtleWRvd25IYW5kbGVyKGdsb2JhbFN0YXRlKTtcbiAgICB9XG5cbiAgICAvLyB3b3JrYXJvdW5kIGZvciBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIwODhcbiAgICAvLyBmb3Igc29tZSByZWFzb24gcmVtb3ZpbmcgdGhlIGNvbnRhaW5lciBpbiBTYWZhcmkgd2lsbCBzY3JvbGwgdGhlIGRvY3VtZW50IHRvIGJvdHRvbVxuICAgIGlmIChpc1NhZmFyaU9ySU9TKSB7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5Om5vbmUgIWltcG9ydGFudCcpO1xuICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICB1bmRvUmVwbGFjZVNjcm9sbGJhcldpdGhQYWRkaW5nKCk7XG4gICAgICB1bmRvSU9TZml4KCk7XG4gICAgICB1bnNldEFyaWFIaWRkZW4oKTtcbiAgICB9XG4gICAgcmVtb3ZlQm9keUNsYXNzZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgU3dlZXRBbGVydDIgY2xhc3NlcyBmcm9tIGJvZHlcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZUJvZHlDbGFzc2VzKCkge1xuICAgIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXMuc2hvd24sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ11dKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnN0YW5jZSBtZXRob2QgdG8gY2xvc2Ugc3dlZXRBbGVydFxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gcmVzb2x2ZVZhbHVlXG4gICAqL1xuICBmdW5jdGlvbiBjbG9zZShyZXNvbHZlVmFsdWUpIHtcbiAgICByZXNvbHZlVmFsdWUgPSBwcmVwYXJlUmVzb2x2ZVZhbHVlKHJlc29sdmVWYWx1ZSk7XG4gICAgdmFyIHN3YWxQcm9taXNlUmVzb2x2ZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQodGhpcyk7XG4gICAgdmFyIGRpZENsb3NlID0gdHJpZ2dlckNsb3NlUG9wdXAodGhpcyk7XG4gICAgaWYgKHRoaXMuaXNBd2FpdGluZ1Byb21pc2UpIHtcbiAgICAgIC8vIEEgc3dhbCBhd2FpdGluZyBmb3IgYSBwcm9taXNlIChhZnRlciBhIGNsaWNrIG9uIENvbmZpcm0gb3IgRGVueSkgY2Fubm90IGJlIGRpc21pc3NlZCBhbnltb3JlICMyMzM1XG4gICAgICBpZiAoIXJlc29sdmVWYWx1ZS5pc0Rpc21pc3NlZCkge1xuICAgICAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UodGhpcyk7XG4gICAgICAgIHN3YWxQcm9taXNlUmVzb2x2ZShyZXNvbHZlVmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlkQ2xvc2UpIHtcbiAgICAgIC8vIFJlc29sdmUgU3dhbCBwcm9taXNlXG4gICAgICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRyaWdnZXJDbG9zZVBvcHVwID0gZnVuY3Rpb24gdHJpZ2dlckNsb3NlUG9wdXAoaW5zdGFuY2UpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaWYgKCFpbm5lclBhcmFtcyB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuc2hvd0NsYXNzLnBvcHVwKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKTtcbiAgICB2YXIgYmFja2Ryb3AgPSBnZXRDb250YWluZXIoKTtcbiAgICByZW1vdmVDbGFzcyhiYWNrZHJvcCwgaW5uZXJQYXJhbXMuc2hvd0NsYXNzLmJhY2tkcm9wKTtcbiAgICBhZGRDbGFzcyhiYWNrZHJvcCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLmJhY2tkcm9wKTtcbiAgICBoYW5kbGVQb3B1cEFuaW1hdGlvbihpbnN0YW5jZSwgcG9wdXAsIGlubmVyUGFyYW1zKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGVycm9yXG4gICAqL1xuICBmdW5jdGlvbiByZWplY3RQcm9taXNlKGVycm9yKSB7XG4gICAgdmFyIHJlamVjdFByb21pc2UgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlamVjdC5nZXQodGhpcyk7XG4gICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKHRoaXMpO1xuICAgIGlmIChyZWplY3RQcm9taXNlKSB7XG4gICAgICAvLyBSZWplY3QgU3dhbCBwcm9taXNlXG4gICAgICByZWplY3RQcm9taXNlKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgdmFyIGhhbmRsZUF3YWl0aW5nUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZUF3YWl0aW5nUHJvbWlzZShpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlO1xuICAgICAgLy8gVGhlIGluc3RhbmNlIG1pZ2h0IGhhdmUgYmVlbiBwcmV2aW91c2x5IHBhcnRseSBkZXN0cm95ZWQsIHdlIG11c3QgcmVzdW1lIHRoZSBkZXN0cm95IHByb2Nlc3MgaW4gdGhpcyBjYXNlICMyMzM1XG4gICAgICBpZiAoIXByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpKSB7XG4gICAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gcmVzb2x2ZVZhbHVlXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0UmVzdWx0fVxuICAgKi9cbiAgdmFyIHByZXBhcmVSZXNvbHZlVmFsdWUgPSBmdW5jdGlvbiBwcmVwYXJlUmVzb2x2ZVZhbHVlKHJlc29sdmVWYWx1ZSkge1xuICAgIC8vIFdoZW4gdXNlciBjYWxscyBTd2FsLmNsb3NlKClcbiAgICBpZiAodHlwZW9mIHJlc29sdmVWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzQ29uZmlybWVkOiBmYWxzZSxcbiAgICAgICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgICAgICBpc0Rpc21pc3NlZDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe1xuICAgICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgaXNEZW5pZWQ6IGZhbHNlLFxuICAgICAgaXNEaXNtaXNzZWQ6IGZhbHNlXG4gICAgfSwgcmVzb2x2ZVZhbHVlKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgdmFyIGhhbmRsZVBvcHVwQW5pbWF0aW9uID0gZnVuY3Rpb24gaGFuZGxlUG9wdXBBbmltYXRpb24oaW5zdGFuY2UsIHBvcHVwLCBpbm5lclBhcmFtcykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG4gICAgdmFyIGFuaW1hdGlvbklzU3VwcG9ydGVkID0gYW5pbWF0aW9uRW5kRXZlbnQgJiYgaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKTtcbiAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLndpbGxDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJQYXJhbXMud2lsbENsb3NlKHBvcHVwKTtcbiAgICB9XG4gICAgaWYgKGFuaW1hdGlvbklzU3VwcG9ydGVkKSB7XG4gICAgICBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIGlubmVyUGFyYW1zLnJldHVybkZvY3VzLCBpbm5lclBhcmFtcy5kaWRDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcmVtb3ZlIGltbWVkaWF0ZWx5XG4gICAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoaW5zdGFuY2UsIGNvbnRhaW5lciwgaW5uZXJQYXJhbXMucmV0dXJuRm9jdXMsIGlubmVyUGFyYW1zLmRpZENsb3NlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmV0dXJuRm9jdXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlkQ2xvc2VcbiAgICovXG4gIHZhciBhbmltYXRlUG9wdXAgPSBmdW5jdGlvbiBhbmltYXRlUG9wdXAoaW5zdGFuY2UsIHBvcHVwLCBjb250YWluZXIsIHJldHVybkZvY3VzLCBkaWRDbG9zZSkge1xuICAgIGlmICghYW5pbWF0aW9uRW5kRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrID0gcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlLmJpbmQobnVsbCwgaW5zdGFuY2UsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKTtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCkge1xuICAgICAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKTtcbiAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaWRDbG9zZVxuICAgKi9cbiAgdmFyIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UgPSBmdW5jdGlvbiB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSkge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHR5cGVvZiBkaWRDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaWRDbG9zZS5iaW5kKGluc3RhbmNlLnBhcmFtcykoKTtcbiAgICAgIH1cbiAgICAgIC8vIGluc3RhbmNlIG1pZ2h0IGhhdmUgYmVlbiBkZXN0cm95ZWQgYWxyZWFkeVxuICAgICAgaWYgKGluc3RhbmNlLl9kZXN0cm95KSB7XG4gICAgICAgIGluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3dzIGxvYWRlciAoc3Bpbm5lciksIHRoaXMgaXMgdXNlZnVsIHdpdGggQUpBWCByZXF1ZXN0cy5cbiAgICogQnkgZGVmYXVsdCB0aGUgbG9hZGVyIGJlIHNob3duIGluc3RlYWQgb2YgdGhlIFwiQ29uZmlybVwiIGJ1dHRvbi5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9IFtidXR0b25Ub1JlcGxhY2VdXG4gICAqL1xuICB2YXIgc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiBzaG93TG9hZGluZyhidXR0b25Ub1JlcGxhY2UpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIG5ldyBTd2FsKCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgfVxuICAgIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIoKTtcbiAgICBpZiAoaXNUb2FzdCgpKSB7XG4gICAgICBoaWRlKGdldEljb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcGxhY2VCdXR0b24ocG9wdXAsIGJ1dHRvblRvUmVwbGFjZSk7XG4gICAgfVxuICAgIHNob3cobG9hZGVyKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycsICd0cnVlJyk7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWJ1c3knLCAndHJ1ZScpO1xuICAgIHBvcHVwLmZvY3VzKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfSBbYnV0dG9uVG9SZXBsYWNlXVxuICAgKi9cbiAgdmFyIHJlcGxhY2VCdXR0b24gPSBmdW5jdGlvbiByZXBsYWNlQnV0dG9uKHBvcHVwLCBidXR0b25Ub1JlcGxhY2UpIHtcbiAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICB2YXIgbG9hZGVyID0gZ2V0TG9hZGVyKCk7XG4gICAgaWYgKCFhY3Rpb25zIHx8ICFsb2FkZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFidXR0b25Ub1JlcGxhY2UgJiYgaXNWaXNpYmxlJDEoZ2V0Q29uZmlybUJ1dHRvbigpKSkge1xuICAgICAgYnV0dG9uVG9SZXBsYWNlID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICAgIH1cbiAgICBzaG93KGFjdGlvbnMpO1xuICAgIGlmIChidXR0b25Ub1JlcGxhY2UpIHtcbiAgICAgIGhpZGUoYnV0dG9uVG9SZXBsYWNlKTtcbiAgICAgIGxvYWRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLXRvLXJlcGxhY2UnLCBidXR0b25Ub1JlcGxhY2UuY2xhc3NOYW1lKTtcbiAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGxvYWRlciwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICB9XG4gICAgYWRkQ2xhc3MoW3BvcHVwLCBhY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgcGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChbJ3RleHQnLCAnZW1haWwnLCAnbnVtYmVyJywgJ3RlbCcsICd0ZXh0YXJlYSddLnNvbWUoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBpID09PSBwYXJhbXMuaW5wdXQ7XG4gICAgfSkgJiYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dFZhbHVlKSB8fCBpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0Q29uZmlybUJ1dHRvbigpKTtcbiAgICAgIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0SW5wdXRWYWx1ZX1cbiAgICovXG4gIHZhciBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpO1xuICAgIGlmICghaW5wdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzd2l0Y2ggKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgIHJldHVybiBnZXRDaGVja2JveFZhbHVlKGlucHV0KTtcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgcmV0dXJuIGdldFJhZGlvVmFsdWUoaW5wdXQpO1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBnZXRGaWxlVmFsdWUoaW5wdXQpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIHZhciBnZXRDaGVja2JveFZhbHVlID0gZnVuY3Rpb24gZ2V0Q2hlY2tib3hWYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gMSA6IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHJldHVybnMge3N0cmluZyB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0UmFkaW9WYWx1ZSA9IGZ1bmN0aW9uIGdldFJhZGlvVmFsdWUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcmV0dXJucyB7RmlsZUxpc3QgfCBGaWxlIHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRGaWxlVmFsdWUgPSBmdW5jdGlvbiBnZXRGaWxlVmFsdWUoaW5wdXQpIHtcbiAgICByZXR1cm4gaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXMubGVuZ3RoID8gaW5wdXQuZ2V0QXR0cmlidXRlKCdtdWx0aXBsZScpICE9PSBudWxsID8gaW5wdXQuZmlsZXMgOiBpbnB1dC5maWxlc1swXSA6IG51bGw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgaGFuZGxlSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRPcHRpb25zKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBpbnB1dE9wdGlvbnNcbiAgICAgKi9cbiAgICB2YXIgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0Jykge1xuICAgICAgICBwb3B1bGF0ZVNlbGVjdE9wdGlvbnMocG9wdXAsIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIGlmIChwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgICAgcG9wdWxhdGVSYWRpb09wdGlvbnMocG9wdXAsIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpLCBwYXJhbXMpO1xuICAgICAgfVxuICAgIH07XG4gICAgaWYgKGhhc1RvUHJvbWlzZUZuKHBhcmFtcy5pbnB1dE9wdGlvbnMpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgICAgc2hvd0xvYWRpbmcoZ2V0Q29uZmlybUJ1dHRvbigpKTtcbiAgICAgIGFzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKS50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzc0lucHV0T3B0aW9ucyhwYXJhbXMuaW5wdXRPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgXCIuY29uY2F0KF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgaGFuZGxlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoaWRlKGlucHV0KTtcbiAgICBhc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpLnRoZW4oZnVuY3Rpb24gKGlucHV0VmFsdWUpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0ID09PSAnbnVtYmVyJyA/IFwiXCIuY29uY2F0KHBhcnNlRmxvYXQoaW5wdXRWYWx1ZSkgfHwgMCkgOiBcIlwiLmNvbmNhdChpbnB1dFZhbHVlKTtcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBlcnJvcihcIkVycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogXCIuY29uY2F0KGVycikpO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHNob3coaW5wdXQpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX0gaW5wdXRPcHRpb25zXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcG9wdWxhdGVTZWxlY3RPcHRpb25zKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIHZhciBzZWxlY3QgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgaWYgKCFzZWxlY3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbkxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvblZhbHVlXG4gICAgICovXG4gICAgdmFyIHJlbmRlck9wdGlvbiA9IGZ1bmN0aW9uIHJlbmRlck9wdGlvbihwYXJlbnQsIG9wdGlvbkxhYmVsLCBvcHRpb25WYWx1ZSkge1xuICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICBzZXRJbm5lckh0bWwob3B0aW9uLCBvcHRpb25MYWJlbCk7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9O1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgdmFyIG9wdGlvblZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICB2YXIgb3B0aW9uTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgIC8vIDxvcHRncm91cD4gc3BlYzpcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9odG1sNDAxL2ludGVyYWN0L2Zvcm1zLmh0bWwjaC0xNy42XG4gICAgICAvLyBcIi4uLmFsbCBPUFRHUk9VUCBlbGVtZW50cyBtdXN0IGJlIHNwZWNpZmllZCBkaXJlY3RseSB3aXRoaW4gYSBTRUxFQ1QgZWxlbWVudCAoaS5lLiwgZ3JvdXBzIG1heSBub3QgYmUgbmVzdGVkKS4uLlwiXG4gICAgICAvLyBjaGVjayB3aGV0aGVyIHRoaXMgaXMgYSA8b3B0Z3JvdXA+XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25MYWJlbCkpIHtcbiAgICAgICAgLy8gaWYgaXQgaXMgYW4gYXJyYXksIHRoZW4gaXQgaXMgYW4gPG9wdGdyb3VwPlxuICAgICAgICB2YXIgb3B0Z3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xuICAgICAgICBvcHRncm91cC5sYWJlbCA9IG9wdGlvblZhbHVlO1xuICAgICAgICBvcHRncm91cC5kaXNhYmxlZCA9IGZhbHNlOyAvLyBub3QgY29uZmlndXJhYmxlIGZvciBub3dcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGdyb3VwKTtcbiAgICAgICAgb3B0aW9uTGFiZWwuZm9yRWFjaChmdW5jdGlvbiAobykge1xuICAgICAgICAgIHJldHVybiByZW5kZXJPcHRpb24ob3B0Z3JvdXAsIG9bMV0sIG9bMF0pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNhc2Ugb2YgPG9wdGlvbj5cbiAgICAgICAgcmVuZGVyT3B0aW9uKHNlbGVjdCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWxlY3QuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge0lucHV0T3B0aW9uRmxhdHRlbmVkW119IGlucHV0T3B0aW9uc1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHBvcHVsYXRlUmFkaW9PcHRpb25zKHBvcHVwLCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIHZhciByYWRpbyA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgIGlmICghcmFkaW8pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICB2YXIgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgdmFyIHJhZGlvTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgIHZhciByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHZhciByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcbiAgICAgIGlmIChpc1NlbGVjdGVkKHJhZGlvVmFsdWUsIHBhcmFtcy5pbnB1dFZhbHVlKSkge1xuICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc2V0SW5uZXJIdG1sKGxhYmVsLCByYWRpb0xhYmVsKTtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmxhYmVsO1xuICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsRWxlbWVudCk7XG4gICAgfSk7XG4gICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgaWYgKHJhZGlvcy5sZW5ndGgpIHtcbiAgICAgIHJhZGlvc1swXS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gICAqXG4gICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gaW5wdXRPcHRpb25zXG4gICAqIEB0eXBlZGVmIHtzdHJpbmdbXX0gSW5wdXRPcHRpb25GbGF0dGVuZWRcbiAgICogQHJldHVybnMge0lucHV0T3B0aW9uRmxhdHRlbmVkW119XG4gICAqL1xuICB2YXIgZm9ybWF0SW5wdXRPcHRpb25zID0gZnVuY3Rpb24gZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucykge1xuICAgIC8qKiBAdHlwZSB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX0gKi9cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgaWYgKGlucHV0T3B0aW9ucyBpbnN0YW5jZW9mIE1hcCkge1xuICAgICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlRm9ybWF0dGVkID0gdmFsdWU7XG4gICAgICAgIGlmIChfdHlwZW9mKHZhbHVlRm9ybWF0dGVkKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjYXNlIG9mIDxvcHRncm91cD5cbiAgICAgICAgICB2YWx1ZUZvcm1hdHRlZCA9IGZvcm1hdElucHV0T3B0aW9ucyh2YWx1ZUZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVGb3JtYXR0ZWRdKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWVGb3JtYXR0ZWQgPSBpbnB1dE9wdGlvbnNba2V5XTtcbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZUZvcm1hdHRlZF0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25WYWx1ZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRJbnB1dFZhbHVlfSBpbnB1dFZhbHVlXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzU2VsZWN0ZWQgPSBmdW5jdGlvbiBpc1NlbGVjdGVkKG9wdGlvblZhbHVlLCBpbnB1dFZhbHVlKSB7XG4gICAgcmV0dXJuICEhaW5wdXRWYWx1ZSAmJiBpbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCk7XG4gIH07XG5cbiAgdmFyIF90aGlzID0gdW5kZWZpbmVkO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqL1xuICB2YXIgaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrKGluc3RhbmNlKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsICdjb25maXJtJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgdmFyIGhhbmRsZURlbnlCdXR0b25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZURlbnlCdXR0b25DbGljayhpbnN0YW5jZSkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgaWYgKGlubmVyUGFyYW1zLnJldHVybklucHV0VmFsdWVPbkRlbnkpIHtcbiAgICAgIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsICdkZW55Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbnkoaW5zdGFuY2UsIGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIHZhciBoYW5kbGVDYW5jZWxCdXR0b25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrKGluc3RhbmNlLCBkaXNtaXNzV2l0aCkge1xuICAgIGluc3RhbmNlLmRpc2FibGVCdXR0b25zKCk7XG4gICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jYW5jZWwpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7J2NvbmZpcm0nIHwgJ2RlbnknfSB0eXBlXG4gICAqL1xuICB2YXIgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dCA9IGZ1bmN0aW9uIGhhbmRsZUNvbmZpcm1PckRlbnlXaXRoSW5wdXQoaW5zdGFuY2UsIHR5cGUpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBlcnJvcihcIlRoZSBcXFwiaW5wdXRcXFwiIHBhcmFtZXRlciBpcyBuZWVkZWQgdG8gYmUgc2V0IHdoZW4gdXNpbmcgcmV0dXJuSW5wdXRWYWx1ZU9uXCIuY29uY2F0KGNhcGl0YWxpemVGaXJzdExldHRlcih0eXBlKSkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpO1xuICAgIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgaGFuZGxlSW5wdXRWYWxpZGF0b3IoaW5zdGFuY2UsIGlucHV0VmFsdWUsIHR5cGUpO1xuICAgIH0gZWxzZSBpZiAoaW5wdXQgJiYgIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgaW5zdGFuY2UuZW5hYmxlQnV0dG9ucygpO1xuICAgICAgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlIHx8IGlucHV0LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZW55Jykge1xuICAgICAgZGVueShpbnN0YW5jZSwgaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRJbnB1dFZhbHVlfSBpbnB1dFZhbHVlXG4gICAqIEBwYXJhbSB7J2NvbmZpcm0nIHwgJ2RlbnknfSB0eXBlXG4gICAqL1xuICB2YXIgaGFuZGxlSW5wdXRWYWxpZGF0b3IgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dFZhbGlkYXRvcihpbnN0YW5jZSwgaW5wdXRWYWx1ZSwgdHlwZSkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGluc3RhbmNlLmRpc2FibGVJbnB1dCgpO1xuICAgIHZhciB2YWxpZGF0aW9uUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFzUHJvbWlzZShpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcihpbnB1dFZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSkpO1xuICAgIH0pO1xuICAgIHZhbGlkYXRpb25Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBpbnN0YW5jZS5lbmFibGVCdXR0b25zKCk7XG4gICAgICBpbnN0YW5jZS5lbmFibGVJbnB1dCgpO1xuICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdkZW55Jykge1xuICAgICAgICBkZW55KGluc3RhbmNlLCBpbnB1dFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbmZpcm0oaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKi9cbiAgdmFyIGRlbnkgPSBmdW5jdGlvbiBkZW55KGluc3RhbmNlLCB2YWx1ZSkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgX3RoaXMpO1xuICAgIGlmIChpbm5lclBhcmFtcy5zaG93TG9hZGVyT25EZW55KSB7XG4gICAgICBzaG93TG9hZGluZyhnZXREZW55QnV0dG9uKCkpO1xuICAgIH1cbiAgICBpZiAoaW5uZXJQYXJhbXMucHJlRGVueSkge1xuICAgICAgaW5zdGFuY2UuaXNBd2FpdGluZ1Byb21pc2UgPSB0cnVlOyAvLyBGbGFnZ2luZyB0aGUgaW5zdGFuY2UgYXMgYXdhaXRpbmcgYSBwcm9taXNlIHNvIGl0J3Mgb3duIHByb21pc2UncyByZWplY3QvcmVzb2x2ZSBtZXRob2RzIGRvZXNuJ3QgZ2V0IGRlc3Ryb3llZCB1bnRpbCB0aGUgcmVzdWx0IGZyb20gdGhpcyBwcmVEZW55J3MgcHJvbWlzZSBpcyByZWNlaXZlZFxuICAgICAgdmFyIHByZURlbnlQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhc1Byb21pc2UoaW5uZXJQYXJhbXMucHJlRGVueSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpKTtcbiAgICAgIH0pO1xuICAgICAgcHJlRGVueVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlRGVueVZhbHVlKSB7XG4gICAgICAgIGlmIChwcmVEZW55VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UoaW5zdGFuY2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGluc3RhbmNlLmNsb3NlKHtcbiAgICAgICAgICAgIGlzRGVuaWVkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IHR5cGVvZiBwcmVEZW55VmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVEZW55VmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdFdpdGgoaW5zdGFuY2UgfHwgX3RoaXMsIGVycm9yKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSh7XG4gICAgICAgIGlzRGVuaWVkOiB0cnVlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICovXG4gIHZhciBzdWNjZWVkV2l0aCA9IGZ1bmN0aW9uIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSkge1xuICAgIGluc3RhbmNlLmNsb3NlKHtcbiAgICAgIGlzQ29uZmlybWVkOiB0cnVlLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yXG4gICAqL1xuICB2YXIgcmVqZWN0V2l0aCA9IGZ1bmN0aW9uIHJlamVjdFdpdGgoaW5zdGFuY2UsIGVycm9yKSB7XG4gICAgaW5zdGFuY2UucmVqZWN0UHJvbWlzZShlcnJvcik7XG4gIH07XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqL1xuICB2YXIgY29uZmlybSA9IGZ1bmN0aW9uIGNvbmZpcm0oaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCBfdGhpcyk7XG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgIHNob3dMb2FkaW5nKCk7XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICBpbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG4gICAgICBpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSA9IHRydWU7IC8vIEZsYWdnaW5nIHRoZSBpbnN0YW5jZSBhcyBhd2FpdGluZyBhIHByb21pc2Ugc28gaXQncyBvd24gcHJvbWlzZSdzIHJlamVjdC9yZXNvbHZlIG1ldGhvZHMgZG9lc24ndCBnZXQgZGVzdHJveWVkIHVudGlsIHRoZSByZXN1bHQgZnJvbSB0aGlzIHByZUNvbmZpcm0ncyBwcm9taXNlIGlzIHJlY2VpdmVkXG4gICAgICB2YXIgcHJlQ29uZmlybVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFzUHJvbWlzZShpbm5lclBhcmFtcy5wcmVDb25maXJtKHZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSkpO1xuICAgICAgfSk7XG4gICAgICBwcmVDb25maXJtUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVDb25maXJtVmFsdWUpIHtcbiAgICAgICAgaWYgKGlzVmlzaWJsZSQxKGdldFZhbGlkYXRpb25NZXNzYWdlKCkpIHx8IHByZUNvbmZpcm1WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIGhhbmRsZUF3YWl0aW5nUHJvbWlzZShpbnN0YW5jZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHR5cGVvZiBwcmVDb25maXJtVmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVDb25maXJtVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aChpbnN0YW5jZSB8fCBfdGhpcywgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1Y2NlZWRXaXRoKGluc3RhbmNlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBIaWRlcyBsb2FkZXIgYW5kIHNob3dzIGJhY2sgdGhlIGJ1dHRvbiB3aGljaCB3YXMgaGlkZGVuIGJ5IC5zaG93TG9hZGluZygpXG4gICAqL1xuICBmdW5jdGlvbiBoaWRlTG9hZGluZygpIHtcbiAgICAvLyBkbyBub3RoaW5nIGlmIHBvcHVwIGlzIGNsb3NlZFxuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIGhpZGUoZG9tQ2FjaGUubG9hZGVyKTtcbiAgICBpZiAoaXNUb2FzdCgpKSB7XG4gICAgICBpZiAoaW5uZXJQYXJhbXMuaWNvbikge1xuICAgICAgICBzaG93KGdldEljb24oKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dSZWxhdGVkQnV0dG9uKGRvbUNhY2hlKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoW2RvbUNhY2hlLnBvcHVwLCBkb21DYWNoZS5hY3Rpb25zXSwgc3dhbENsYXNzZXMubG9hZGluZyk7XG4gICAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWJ1c3knKTtcbiAgICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBkb21DYWNoZS5kZW55QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbiAgdmFyIHNob3dSZWxhdGVkQnV0dG9uID0gZnVuY3Rpb24gc2hvd1JlbGF0ZWRCdXR0b24oZG9tQ2FjaGUpIHtcbiAgICB2YXIgYnV0dG9uVG9SZXBsYWNlID0gZG9tQ2FjaGUucG9wdXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShkb21DYWNoZS5sb2FkZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWJ1dHRvbi10by1yZXBsYWNlJykpO1xuICAgIGlmIChidXR0b25Ub1JlcGxhY2UubGVuZ3RoKSB7XG4gICAgICBzaG93KGJ1dHRvblRvUmVwbGFjZVswXSwgJ2lubGluZS1ibG9jaycpO1xuICAgIH0gZWxzZSBpZiAoYWxsQnV0dG9uc0FyZUhpZGRlbigpKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLmFjdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgaW5wdXQgRE9NIG5vZGUsIHRoaXMgbWV0aG9kIHdvcmtzIHdpdGggaW5wdXQgcGFyYW1ldGVyLlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgaWYgKCFkb21DYWNoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBnZXRJbnB1dCQxKGRvbUNhY2hlLnBvcHVwLCBpbm5lclBhcmFtcy5pbnB1dCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBidXR0b25zXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWRcbiAgICovXG4gIGZ1bmN0aW9uIHNldEJ1dHRvbnNEaXNhYmxlZChpbnN0YW5jZSwgYnV0dG9ucywgZGlzYWJsZWQpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KGluc3RhbmNlKTtcbiAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuICAgICAgZG9tQ2FjaGVbYnV0dG9uXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudCB8IG51bGx9IGlucHV0XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWRcbiAgICovXG4gIGZ1bmN0aW9uIHNldElucHV0RGlzYWJsZWQoaW5wdXQsIGRpc2FibGVkKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwIHx8ICFpbnB1dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgLyoqIEB0eXBlIHtOb2RlTGlzdE9mPEhUTUxJbnB1dEVsZW1lbnQ+fSAqL1xuICAgICAgdmFyIHJhZGlvcyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZT1cXFwiXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIlxcXCJdXCIpKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJhZGlvc1tpXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgYWxsIHRoZSBidXR0b25zXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2RlbnlCdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIGFsbCB0aGUgYnV0dG9uc1xuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKCkge1xuICAgIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuICAgIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCBmYWxzZSk7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZSB0aGUgaW5wdXQgZmllbGRcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiBkaXNhYmxlSW5wdXQoKSB7XG4gICAgc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGVycm9yKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICB2YXIgcGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBzZXRJbm5lckh0bWwoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UsIGVycm9yKTtcbiAgICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ107XG4gICAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcyAmJiBwYXJhbXMuY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGFkZENsYXNzKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLCBwYXJhbXMuY3VzdG9tQ2xhc3MudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgICBzaG93KGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcsICd0cnVlJyk7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgYmxvY2sgd2l0aCB2YWxpZGF0aW9uIG1lc3NhZ2VcbiAgICpcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgaWYgKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9XG4gICAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScpO1xuICAgICAgcmVtb3ZlQ2xhc3MoaW5wdXQsIHN3YWxDbGFzc2VzLmlucHV0ZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBkZWZhdWx0UGFyYW1zID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICB0aXRsZVRleHQ6ICcnLFxuICAgIHRleHQ6ICcnLFxuICAgIGh0bWw6ICcnLFxuICAgIGZvb3RlcjogJycsXG4gICAgaWNvbjogdW5kZWZpbmVkLFxuICAgIGljb25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGljb25IdG1sOiB1bmRlZmluZWQsXG4gICAgdGVtcGxhdGU6IHVuZGVmaW5lZCxcbiAgICB0b2FzdDogZmFsc2UsXG4gICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgIHNob3dDbGFzczoge1xuICAgICAgcG9wdXA6ICdzd2FsMi1zaG93JyxcbiAgICAgIGJhY2tkcm9wOiAnc3dhbDItYmFja2Ryb3Atc2hvdycsXG4gICAgICBpY29uOiAnc3dhbDItaWNvbi1zaG93J1xuICAgIH0sXG4gICAgaGlkZUNsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLWhpZGUnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1oaWRlJyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLWhpZGUnXG4gICAgfSxcbiAgICBjdXN0b21DbGFzczoge30sXG4gICAgdGFyZ2V0OiAnYm9keScsXG4gICAgY29sb3I6IHVuZGVmaW5lZCxcbiAgICBiYWNrZHJvcDogdHJ1ZSxcbiAgICBoZWlnaHRBdXRvOiB0cnVlLFxuICAgIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICAgIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICAgIGFsbG93RW50ZXJLZXk6IHRydWUsXG4gICAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAgICBrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiBmYWxzZSxcbiAgICBzaG93Q29uZmlybUJ1dHRvbjogdHJ1ZSxcbiAgICBzaG93RGVueUJ1dHRvbjogZmFsc2UsXG4gICAgc2hvd0NhbmNlbEJ1dHRvbjogZmFsc2UsXG4gICAgcHJlQ29uZmlybTogdW5kZWZpbmVkLFxuICAgIHByZURlbnk6IHVuZGVmaW5lZCxcbiAgICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgICBjb25maXJtQnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgICBjb25maXJtQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBkZW55QnV0dG9uVGV4dDogJ05vJyxcbiAgICBkZW55QnV0dG9uQXJpYUxhYmVsOiAnJyxcbiAgICBkZW55QnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBjYW5jZWxCdXR0b25UZXh0OiAnQ2FuY2VsJyxcbiAgICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNhbmNlbEJ1dHRvbkNvbG9yOiB1bmRlZmluZWQsXG4gICAgYnV0dG9uc1N0eWxpbmc6IHRydWUsXG4gICAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICAgIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgICBmb2N1c0Rlbnk6IGZhbHNlLFxuICAgIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgICByZXR1cm5Gb2N1czogdHJ1ZSxcbiAgICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICAgIGNsb3NlQnV0dG9uSHRtbDogJyZ0aW1lczsnLFxuICAgIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnQ2xvc2UgdGhpcyBkaWFsb2cnLFxuICAgIGxvYWRlckh0bWw6ICcnLFxuICAgIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICAgIHNob3dMb2FkZXJPbkRlbnk6IGZhbHNlLFxuICAgIGltYWdlVXJsOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VXaWR0aDogdW5kZWZpbmVkLFxuICAgIGltYWdlSGVpZ2h0OiB1bmRlZmluZWQsXG4gICAgaW1hZ2VBbHQ6ICcnLFxuICAgIHRpbWVyOiB1bmRlZmluZWQsXG4gICAgdGltZXJQcm9ncmVzc0JhcjogZmFsc2UsXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICBwYWRkaW5nOiB1bmRlZmluZWQsXG4gICAgYmFja2dyb3VuZDogdW5kZWZpbmVkLFxuICAgIGlucHV0OiB1bmRlZmluZWQsXG4gICAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gICAgaW5wdXRMYWJlbDogJycsXG4gICAgaW5wdXRWYWx1ZTogJycsXG4gICAgaW5wdXRPcHRpb25zOiB7fSxcbiAgICBpbnB1dEF1dG9Gb2N1czogdHJ1ZSxcbiAgICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICAgIGlucHV0QXR0cmlidXRlczoge30sXG4gICAgaW5wdXRWYWxpZGF0b3I6IHVuZGVmaW5lZCxcbiAgICByZXR1cm5JbnB1dFZhbHVlT25EZW55OiBmYWxzZSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogdW5kZWZpbmVkLFxuICAgIGdyb3c6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgICBjdXJyZW50UHJvZ3Jlc3NTdGVwOiB1bmRlZmluZWQsXG4gICAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiB1bmRlZmluZWQsXG4gICAgd2lsbE9wZW46IHVuZGVmaW5lZCxcbiAgICBkaWRPcGVuOiB1bmRlZmluZWQsXG4gICAgZGlkUmVuZGVyOiB1bmRlZmluZWQsXG4gICAgd2lsbENsb3NlOiB1bmRlZmluZWQsXG4gICAgZGlkQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBkaWREZXN0cm95OiB1bmRlZmluZWQsXG4gICAgc2Nyb2xsYmFyUGFkZGluZzogdHJ1ZVxuICB9O1xuICB2YXIgdXBkYXRhYmxlUGFyYW1zID0gWydhbGxvd0VzY2FwZUtleScsICdhbGxvd091dHNpZGVDbGljaycsICdiYWNrZ3JvdW5kJywgJ2J1dHRvbnNTdHlsaW5nJywgJ2NhbmNlbEJ1dHRvbkFyaWFMYWJlbCcsICdjYW5jZWxCdXR0b25Db2xvcicsICdjYW5jZWxCdXR0b25UZXh0JywgJ2Nsb3NlQnV0dG9uQXJpYUxhYmVsJywgJ2Nsb3NlQnV0dG9uSHRtbCcsICdjb2xvcicsICdjb25maXJtQnV0dG9uQXJpYUxhYmVsJywgJ2NvbmZpcm1CdXR0b25Db2xvcicsICdjb25maXJtQnV0dG9uVGV4dCcsICdjdXJyZW50UHJvZ3Jlc3NTdGVwJywgJ2N1c3RvbUNsYXNzJywgJ2RlbnlCdXR0b25BcmlhTGFiZWwnLCAnZGVueUJ1dHRvbkNvbG9yJywgJ2RlbnlCdXR0b25UZXh0JywgJ2RpZENsb3NlJywgJ2RpZERlc3Ryb3knLCAnZm9vdGVyJywgJ2hpZGVDbGFzcycsICdodG1sJywgJ2ljb24nLCAnaWNvbkNvbG9yJywgJ2ljb25IdG1sJywgJ2ltYWdlQWx0JywgJ2ltYWdlSGVpZ2h0JywgJ2ltYWdlVXJsJywgJ2ltYWdlV2lkdGgnLCAncHJlQ29uZmlybScsICdwcmVEZW55JywgJ3Byb2dyZXNzU3RlcHMnLCAncmV0dXJuRm9jdXMnLCAncmV2ZXJzZUJ1dHRvbnMnLCAnc2hvd0NhbmNlbEJ1dHRvbicsICdzaG93Q2xvc2VCdXR0b24nLCAnc2hvd0NvbmZpcm1CdXR0b24nLCAnc2hvd0RlbnlCdXR0b24nLCAndGV4dCcsICd0aXRsZScsICd0aXRsZVRleHQnLCAnd2lsbENsb3NlJ107XG5cbiAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+fSAqL1xuICB2YXIgZGVwcmVjYXRlZFBhcmFtcyA9IHt9O1xuICB2YXIgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2FsbG93RW50ZXJLZXknLCAnYmFja2Ryb3AnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzRGVueScsICdmb2N1c0NhbmNlbCcsICdyZXR1cm5Gb2N1cycsICdoZWlnaHRBdXRvJywgJ2tleWRvd25MaXN0ZW5lckNhcHR1cmUnXTtcblxuICAvKipcbiAgICogSXMgdmFsaWQgcGFyYW1ldGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbU5hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkZWZhdWx0UGFyYW1zLCBwYXJhbU5hbWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXIgZm9yIFN3YWwudXBkYXRlKCkgbWV0aG9kXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbU5hbWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNVcGRhdGFibGVQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gdXBkYXRhYmxlUGFyYW1zLmluZGV4T2YocGFyYW1OYW1lKSAhPT0gLTE7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbU5hbWVcbiAgICogQHJldHVybnMge3N0cmluZyB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIGRlcHJlY2F0ZWRQYXJhbXNbcGFyYW1OYW1lXTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gICAqL1xuICB2YXIgY2hlY2tJZlBhcmFtSXNWYWxpZCA9IGZ1bmN0aW9uIGNoZWNrSWZQYXJhbUlzVmFsaWQocGFyYW0pIHtcbiAgICBpZiAoIWlzVmFsaWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB3YXJuKFwiVW5rbm93biBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiXCIpKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbVxuICAgKi9cbiAgdmFyIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZCA9IGZ1bmN0aW9uIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZChwYXJhbSkge1xuICAgIGlmICh0b2FzdEluY29tcGF0aWJsZVBhcmFtcy5pbmNsdWRlcyhwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0b2FzdHNcIikpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gICAqL1xuICB2YXIgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkID0gZnVuY3Rpb24gY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkKHBhcmFtKSB7XG4gICAgdmFyIGlzRGVwcmVjYXRlZCA9IGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSk7XG4gICAgaWYgKGlzRGVwcmVjYXRlZCkge1xuICAgICAgd2FybkFib3V0RGVwcmVjYXRpb24ocGFyYW0sIGlzRGVwcmVjYXRlZCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93IHJlbGV2YW50IHdhcm5pbmdzIGZvciBnaXZlbiBwYXJhbXNcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgc2hvd1dhcm5pbmdzRm9yUGFyYW1zID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHBhcmFtcykge1xuICAgIGlmIChwYXJhbXMuYmFja2Ryb3AgPT09IGZhbHNlICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgICAgd2FybignXCJhbGxvd091dHNpZGVDbGlja1wiIHBhcmFtZXRlciByZXF1aXJlcyBgYmFja2Ryb3BgIHBhcmFtZXRlciB0byBiZSBzZXQgdG8gYHRydWVgJyk7XG4gICAgfVxuICAgIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSk7XG4gICAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICAgIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZChwYXJhbSk7XG4gICAgICB9XG4gICAgICBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlcyBwb3B1cCBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZShwYXJhbXMpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgaWYgKCFwb3B1cCB8fCBoYXNDbGFzcyhwb3B1cCwgaW5uZXJQYXJhbXMuaGlkZUNsYXNzLnBvcHVwKSkge1xuICAgICAgd2FybihcIllvdSdyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjbG9zZWQgb3IgY2xvc2luZyBwb3B1cCwgdGhhdCB3b24ndCB3b3JrLiBVc2UgdGhlIHVwZGF0ZSgpIG1ldGhvZCBpbiBwcmVDb25maXJtIHBhcmFtZXRlciBvciBzaG93IGEgbmV3IHBvcHVwLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHZhbGlkVXBkYXRhYmxlUGFyYW1zID0gZmlsdGVyVmFsaWRQYXJhbXMocGFyYW1zKTtcbiAgICB2YXIgdXBkYXRlZFBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGlubmVyUGFyYW1zLCB2YWxpZFVwZGF0YWJsZVBhcmFtcyk7XG4gICAgcmVuZGVyKHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICAgIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHZhbHVlOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnBhcmFtcywgcGFyYW1zKSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIHZhciBmaWx0ZXJWYWxpZFBhcmFtcyA9IGZ1bmN0aW9uIGZpbHRlclZhbGlkUGFyYW1zKHBhcmFtcykge1xuICAgIHZhciB2YWxpZFVwZGF0YWJsZVBhcmFtcyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIGlmIChpc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgICAgdmFsaWRVcGRhdGFibGVQYXJhbXNbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdhcm4oXCJJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFwiLmNvbmNhdChwYXJhbSkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWxpZFVwZGF0YWJsZVBhcmFtcztcbiAgfTtcblxuICAvKipcbiAgICogRGlzcG9zZSB0aGUgY3VycmVudCBTd2VldEFsZXJ0MiBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gX2Rlc3Ryb3koKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgIGlmICghaW5uZXJQYXJhbXMpIHtcbiAgICAgIGRpc3Bvc2VXZWFrTWFwcyh0aGlzKTsgLy8gVGhlIFdlYWtNYXBzIG1pZ2h0IGhhdmUgYmVlbiBwYXJ0bHkgZGVzdHJveWVkLCB3ZSBtdXN0IHJlY2FsbCBpdCB0byBkaXNwb3NlIGFueSByZW1haW5pbmcgV2Vha01hcHMgIzIzMzVcbiAgICAgIHJldHVybjsgLy8gVGhpcyBpbnN0YW5jZSBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZFxuICAgIH1cblxuICAgIC8vIENoZWNrIGlmIHRoZXJlIGlzIGFub3RoZXIgU3dhbCBjbG9zaW5nXG4gICAgaWYgKGRvbUNhY2hlLnBvcHVwICYmIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaykge1xuICAgICAgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKCk7XG4gICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGlubmVyUGFyYW1zLmRpZERlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlubmVyUGFyYW1zLmRpZERlc3Ryb3koKTtcbiAgICB9XG4gICAgZGlzcG9zZVN3YWwodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgdmFyIGRpc3Bvc2VTd2FsID0gZnVuY3Rpb24gZGlzcG9zZVN3YWwoaW5zdGFuY2UpIHtcbiAgICBkaXNwb3NlV2Vha01hcHMoaW5zdGFuY2UpO1xuICAgIC8vIFVuc2V0IHRoaXMucGFyYW1zIHNvIEdDIHdpbGwgZGlzcG9zZSBpdCAoIzE1NjkpXG4gICAgZGVsZXRlIGluc3RhbmNlLnBhcmFtcztcbiAgICAvLyBVbnNldCBnbG9iYWxTdGF0ZSBwcm9wcyBzbyBHQyB3aWxsIGRpc3Bvc2UgZ2xvYmFsU3RhdGUgKCMxNTY5KVxuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlcjtcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldDtcbiAgICAvLyBVbnNldCBjdXJyZW50SW5zdGFuY2VcbiAgICBkZWxldGUgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqL1xuICB2YXIgZGlzcG9zZVdlYWtNYXBzID0gZnVuY3Rpb24gZGlzcG9zZVdlYWtNYXBzKGluc3RhbmNlKSB7XG4gICAgLy8gSWYgdGhlIGN1cnJlbnQgaW5zdGFuY2UgaXMgYXdhaXRpbmcgYSBwcm9taXNlIHJlc3VsdCwgd2Uga2VlcCB0aGUgcHJpdmF0ZU1ldGhvZHMgdG8gY2FsbCB0aGVtIG9uY2UgdGhlIHByb21pc2UgcmVzdWx0IGlzIHJldHJpZXZlZCAjMjMzNVxuICAgIGlmIChpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgdW5zZXRXZWFrTWFwcyhwcml2YXRlUHJvcHMsIGluc3RhbmNlKTtcbiAgICAgIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5zZXRXZWFrTWFwcyhwcml2YXRlTWV0aG9kcywgaW5zdGFuY2UpO1xuICAgICAgdW5zZXRXZWFrTWFwcyhwcml2YXRlUHJvcHMsIGluc3RhbmNlKTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZTtcbiAgICAgIC8vIFVuc2V0IGluc3RhbmNlIG1ldGhvZHNcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucztcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5lbmFibGVCdXR0b25zO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmdldElucHV0O1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmRpc2FibGVJbnB1dDtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5lbmFibGVJbnB1dDtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5oaWRlTG9hZGluZztcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5kaXNhYmxlTG9hZGluZztcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICBkZWxldGUgaW5zdGFuY2UucmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5jbG9zZTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5jbG9zZVBvcHVwO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmNsb3NlTW9kYWw7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuY2xvc2VUb2FzdDtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5yZWplY3RQcm9taXNlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLnVwZGF0ZTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5fZGVzdHJveTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKi9cbiAgdmFyIHVuc2V0V2Vha01hcHMgPSBmdW5jdGlvbiB1bnNldFdlYWtNYXBzKG9iaiwgaW5zdGFuY2UpIHtcbiAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgb2JqW2ldW1wiZGVsZXRlXCJdKGluc3RhbmNlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGluc3RhbmNlTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgX2Rlc3Ryb3k6IF9kZXN0cm95LFxuICAgIGNsb3NlOiBjbG9zZSxcbiAgICBjbG9zZU1vZGFsOiBjbG9zZSxcbiAgICBjbG9zZVBvcHVwOiBjbG9zZSxcbiAgICBjbG9zZVRvYXN0OiBjbG9zZSxcbiAgICBkaXNhYmxlQnV0dG9uczogZGlzYWJsZUJ1dHRvbnMsXG4gICAgZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG4gICAgZGlzYWJsZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuICAgIGVuYWJsZUJ1dHRvbnM6IGVuYWJsZUJ1dHRvbnMsXG4gICAgZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuICAgIGdldElucHV0OiBnZXRJbnB1dCxcbiAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2U6IGhhbmRsZUF3YWl0aW5nUHJvbWlzZSxcbiAgICBoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgcmVqZWN0UHJvbWlzZTogcmVqZWN0UHJvbWlzZSxcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlOiByZXNldFZhbGlkYXRpb25NZXNzYWdlLFxuICAgIHNob3dWYWxpZGF0aW9uTWVzc2FnZTogc2hvd1ZhbGlkYXRpb25NZXNzYWdlLFxuICAgIHVwZGF0ZTogdXBkYXRlXG4gIH0pO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgdmFyIGhhbmRsZVBvcHVwQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVQb3B1cENsaWNrKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGhhbmRsZVRvYXN0Q2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuICAgICAgaGFuZGxlTW9kYWxNb3VzZWRvd24oZG9tQ2FjaGUpO1xuXG4gICAgICAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgY29udGFpbmVyIGJ1dCBtb3VzZXVwIG9uIHRoZSBwb3B1cFxuICAgICAgaGFuZGxlQ29udGFpbmVyTW91c2Vkb3duKGRvbUNhY2hlKTtcbiAgICAgIGhhbmRsZU1vZGFsQ2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgdmFyIGhhbmRsZVRvYXN0Q2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVUb2FzdENsaWNrKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgICAvLyBDbG9zaW5nIHRvYXN0IGJ5IGludGVybmFsIGNsaWNrXG4gICAgZG9tQ2FjaGUucG9wdXAub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpbm5lclBhcmFtcyAmJiAoaXNBbnlCdXR0b25TaG93bihpbm5lclBhcmFtcykgfHwgaW5uZXJQYXJhbXMudGltZXIgfHwgaW5uZXJQYXJhbXMuaW5wdXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzQW55QnV0dG9uU2hvd24gPSBmdW5jdGlvbiBpc0FueUJ1dHRvblNob3duKGlubmVyUGFyYW1zKSB7XG4gICAgcmV0dXJuICEhKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dEZW55QnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKTtcbiAgfTtcbiAgdmFyIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKi9cbiAgdmFyIGhhbmRsZU1vZGFsTW91c2Vkb3duID0gZnVuY3Rpb24gaGFuZGxlTW9kYWxNb3VzZWRvd24oZG9tQ2FjaGUpIHtcbiAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIC8vIFdlIG9ubHkgY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgYmVjYXVzZSB1c3VhbGx5IGl0IGRvZXNuJ3RcbiAgICAgICAgLy8gaGF2ZSBhbnkgb3RoZXIgZGlyZWN0IGNoaWxkcmVuIGFzaWRlIG9mIHRoZSBwb3B1cFxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb21DYWNoZX0gZG9tQ2FjaGVcbiAgICovXG4gIHZhciBoYW5kbGVDb250YWluZXJNb3VzZWRvd24gPSBmdW5jdGlvbiBoYW5kbGVDb250YWluZXJNb3VzZWRvd24oZG9tQ2FjaGUpIHtcbiAgICBkb21DYWNoZS5jb250YWluZXIub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gcHJldmVudCB0aGUgbW9kYWwgdGV4dCBmcm9tIGJlaW5nIHNlbGVjdGVkIG9uIGRvdWJsZSBjbGljayBvbiB0aGUgY29udGFpbmVyIChhbGxvd091dHNpZGVDbGljazogZmFsc2UpXG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLnBvcHVwIHx8IGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZG9tQ2FjaGUucG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgdmFyIGhhbmRsZU1vZGFsQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVNb2RhbENsaWNrKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpIHtcbiAgICBkb21DYWNoZS5jb250YWluZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lciAmJiBjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd091dHNpZGVDbGljaykpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaXNKcXVlcnlFbGVtZW50ID0gZnVuY3Rpb24gaXNKcXVlcnlFbGVtZW50KGVsZW0pIHtcbiAgICByZXR1cm4gX3R5cGVvZihlbGVtKSA9PT0gJ29iamVjdCcgJiYgZWxlbS5qcXVlcnk7XG4gIH07XG4gIHZhciBpc0VsZW1lbnQgPSBmdW5jdGlvbiBpc0VsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtIGluc3RhbmNlb2YgRWxlbWVudCB8fCBpc0pxdWVyeUVsZW1lbnQoZWxlbSk7XG4gIH07XG4gIHZhciBhcmdzVG9QYXJhbXMgPSBmdW5jdGlvbiBhcmdzVG9QYXJhbXMoYXJncykge1xuICAgIHZhciBwYXJhbXMgPSB7fTtcbiAgICBpZiAoX3R5cGVvZihhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiYgIWlzRWxlbWVudChhcmdzWzBdKSkge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXJhbXMsIGFyZ3NbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAnaWNvbiddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHZhciBhcmcgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8IGlzRWxlbWVudChhcmcpKSB7XG4gICAgICAgICAgcGFyYW1zW25hbWVdID0gYXJnO1xuICAgICAgICB9IGVsc2UgaWYgKGFyZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KG5hbWUsIFwiISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiBvciBcXFwiRWxlbWVudFxcXCIsIGdvdCBcIikuY29uY2F0KF90eXBlb2YoYXJnKSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfTtcblxuICAvKipcbiAgICogTWFpbiBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFN3ZWV0QWxlcnQyIHBvcHVwXG4gICAqXG4gICAqIEBwYXJhbSAgey4uLlN3ZWV0QWxlcnRPcHRpb25zfSBhcmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFN3ZWV0QWxlcnRSZXN1bHQ+fVxuICAgKi9cbiAgZnVuY3Rpb24gZmlyZSgpIHtcbiAgICB2YXIgU3dhbCA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXRoaXMtYWxpYXNcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuICAgIHJldHVybiBfY29uc3RydWN0KFN3YWwsIGFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZXh0ZW5kZWQgdmVyc2lvbiBvZiBgU3dhbGAgY29udGFpbmluZyBgcGFyYW1zYCBhcyBkZWZhdWx0cy5cbiAgICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqIEJlZm9yZTpcbiAgICogY29uc3QgdGV4dFByb21wdE9wdGlvbnMgPSB7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfVxuICAgKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gICAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nIH0pXG4gICAqXG4gICAqIEFmdGVyOlxuICAgKiBjb25zdCBUZXh0UHJvbXB0ID0gU3dhbC5taXhpbih7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfSlcbiAgICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JylcbiAgICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycpXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IG1peGluUGFyYW1zXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gbWl4aW4obWl4aW5QYXJhbXMpIHtcbiAgICB2YXIgTWl4aW5Td2FsID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfdGhpcykge1xuICAgICAgZnVuY3Rpb24gTWl4aW5Td2FsKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcbiAgICAgICAgcmV0dXJuIF9jYWxsU3VwZXIodGhpcywgTWl4aW5Td2FsLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgX2luaGVyaXRzKE1peGluU3dhbCwgX3RoaXMpO1xuICAgICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gX21haW4ocGFyYW1zLCBwcmlvcml0eU1peGluUGFyYW1zKSB7XG4gICAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgcGFyYW1zLCBPYmplY3QuYXNzaWduKHt9LCBtaXhpblBhcmFtcywgcHJpb3JpdHlNaXhpblBhcmFtcykpO1xuICAgICAgICB9XG4gICAgICB9XSk7XG4gICAgfSh0aGlzKTsgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBNaXhpblN3YWw7XG4gIH1cblxuICAvKipcbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gICAqIE90aGVyd2lzZSwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXIgfCB1bmRlZmluZWR9XG4gICAqL1xuICB2YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFN0b3AgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciBzdG9wVGltZXIgPSBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHN0b3BUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciByZXN1bWVUaW1lciA9IGZ1bmN0aW9uIHJlc3VtZVRpbWVyKCkge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICB2YXIgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5zdGFydCgpO1xuICAgICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIocmVtYWluaW5nKTtcbiAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciB0b2dnbGVUaW1lciA9IGZ1bmN0aW9uIHRvZ2dsZVRpbWVyKCkge1xuICAgIHZhciB0aW1lciA9IGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgcmV0dXJuIHRpbWVyICYmICh0aW1lci5ydW5uaW5nID8gc3RvcFRpbWVyKCkgOiByZXN1bWVUaW1lcigpKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5jcmVhc2UgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiBhbiB1cGRhdGVkIHRpbWVyLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbXNcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciBpbmNyZWFzZVRpbWVyID0gZnVuY3Rpb24gaW5jcmVhc2VUaW1lcihtcykge1xuICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICB2YXIgcmVtYWluaW5nID0gZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShtcyk7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcsIHRydWUpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gICAqIG9yIGZhbHNlIGlmIHRpbWVyIGlzIHBhdXNlZCBvciBzdG9wcGVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzVGltZXJSdW5uaW5nID0gZnVuY3Rpb24gaXNUaW1lclJ1bm5pbmcoKSB7XG4gICAgcmV0dXJuICEhKGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5pc1J1bm5pbmcoKSk7XG4gIH07XG5cbiAgdmFyIGJvZHlDbGlja0xpc3RlbmVyQWRkZWQgPSBmYWxzZTtcbiAgdmFyIGNsaWNrSGFuZGxlcnMgPSB7fTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGF0dHJcbiAgICovXG4gIGZ1bmN0aW9uIGJpbmRDbGlja0hhbmRsZXIoKSB7XG4gICAgdmFyIGF0dHIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdkYXRhLXN3YWwtdGVtcGxhdGUnO1xuICAgIGNsaWNrSGFuZGxlcnNbYXR0cl0gPSB0aGlzO1xuICAgIGlmICghYm9keUNsaWNrTGlzdGVuZXJBZGRlZCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvZHlDbGlja0xpc3RlbmVyKTtcbiAgICAgIGJvZHlDbGlja0xpc3RlbmVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICB2YXIgYm9keUNsaWNrTGlzdGVuZXIgPSBmdW5jdGlvbiBib2R5Q2xpY2tMaXN0ZW5lcihldmVudCkge1xuICAgIGZvciAodmFyIGVsID0gZXZlbnQudGFyZ2V0OyBlbCAmJiBlbCAhPT0gZG9jdW1lbnQ7IGVsID0gZWwucGFyZW50Tm9kZSkge1xuICAgICAgZm9yICh2YXIgYXR0ciBpbiBjbGlja0hhbmRsZXJzKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IGVsLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICAgICAgY2xpY2tIYW5kbGVyc1thdHRyXS5maXJlKHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgc3RhdGljTWV0aG9kcyA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGwsXG4gICAgYXJnc1RvUGFyYW1zOiBhcmdzVG9QYXJhbXMsXG4gICAgYmluZENsaWNrSGFuZGxlcjogYmluZENsaWNrSGFuZGxlcixcbiAgICBjbGlja0NhbmNlbDogY2xpY2tDYW5jZWwsXG4gICAgY2xpY2tDb25maXJtOiBjbGlja0NvbmZpcm0sXG4gICAgY2xpY2tEZW55OiBjbGlja0RlbnksXG4gICAgZW5hYmxlTG9hZGluZzogc2hvd0xvYWRpbmcsXG4gICAgZmlyZTogZmlyZSxcbiAgICBnZXRBY3Rpb25zOiBnZXRBY3Rpb25zLFxuICAgIGdldENhbmNlbEJ1dHRvbjogZ2V0Q2FuY2VsQnV0dG9uLFxuICAgIGdldENsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbixcbiAgICBnZXRDb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uLFxuICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgIGdldERlbnlCdXR0b246IGdldERlbnlCdXR0b24sXG4gICAgZ2V0Rm9jdXNhYmxlRWxlbWVudHM6IGdldEZvY3VzYWJsZUVsZW1lbnRzLFxuICAgIGdldEZvb3RlcjogZ2V0Rm9vdGVyLFxuICAgIGdldEh0bWxDb250YWluZXI6IGdldEh0bWxDb250YWluZXIsXG4gICAgZ2V0SWNvbjogZ2V0SWNvbixcbiAgICBnZXRJY29uQ29udGVudDogZ2V0SWNvbkNvbnRlbnQsXG4gICAgZ2V0SW1hZ2U6IGdldEltYWdlLFxuICAgIGdldElucHV0TGFiZWw6IGdldElucHV0TGFiZWwsXG4gICAgZ2V0TG9hZGVyOiBnZXRMb2FkZXIsXG4gICAgZ2V0UG9wdXA6IGdldFBvcHVwLFxuICAgIGdldFByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMsXG4gICAgZ2V0VGltZXJMZWZ0OiBnZXRUaW1lckxlZnQsXG4gICAgZ2V0VGltZXJQcm9ncmVzc0JhcjogZ2V0VGltZXJQcm9ncmVzc0JhcixcbiAgICBnZXRUaXRsZTogZ2V0VGl0bGUsXG4gICAgZ2V0VmFsaWRhdGlvbk1lc3NhZ2U6IGdldFZhbGlkYXRpb25NZXNzYWdlLFxuICAgIGluY3JlYXNlVGltZXI6IGluY3JlYXNlVGltZXIsXG4gICAgaXNEZXByZWNhdGVkUGFyYW1ldGVyOiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIsXG4gICAgaXNMb2FkaW5nOiBpc0xvYWRpbmcsXG4gICAgaXNUaW1lclJ1bm5pbmc6IGlzVGltZXJSdW5uaW5nLFxuICAgIGlzVXBkYXRhYmxlUGFyYW1ldGVyOiBpc1VwZGF0YWJsZVBhcmFtZXRlcixcbiAgICBpc1ZhbGlkUGFyYW1ldGVyOiBpc1ZhbGlkUGFyYW1ldGVyLFxuICAgIGlzVmlzaWJsZTogaXNWaXNpYmxlLFxuICAgIG1peGluOiBtaXhpbixcbiAgICByZXN1bWVUaW1lcjogcmVzdW1lVGltZXIsXG4gICAgc2hvd0xvYWRpbmc6IHNob3dMb2FkaW5nLFxuICAgIHN0b3BUaW1lcjogc3RvcFRpbWVyLFxuICAgIHRvZ2dsZVRpbWVyOiB0b2dnbGVUaW1lclxuICB9KTtcblxuICB2YXIgVGltZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5XG4gICAgICovXG4gICAgZnVuY3Rpb24gVGltZXIoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXIpO1xuICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgdGhpcy5yZW1haW5pbmcgPSBkZWxheTtcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhUaW1lciwgW3tcbiAgICAgIGtleTogXCJzdGFydFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGUoKTtcbiAgICAgICAgICB0aGlzLmlkID0gc2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLCB0aGlzLnJlbWFpbmluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwic3RvcFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0ZWQgJiYgdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaWQpO1xuICAgICAgICAgIHRoaXMucmVtYWluaW5nIC09IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydGVkLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5cbiAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaW5jcmVhc2VcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpbmNyZWFzZShuKSB7XG4gICAgICAgIHZhciBydW5uaW5nID0gdGhpcy5ydW5uaW5nO1xuICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtYWluaW5nICs9IG47XG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAgICovXG4gICAgfSwge1xuICAgICAga2V5OiBcImdldFRpbWVyTGVmdFwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpbWVyTGVmdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiaXNSdW5uaW5nXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ydW5uaW5nO1xuICAgICAgfVxuICAgIH1dKTtcbiAgfSgpO1xuXG4gIHZhciBzd2FsU3RyaW5nUGFyYW1zID0gWydzd2FsLXRpdGxlJywgJ3N3YWwtaHRtbCcsICdzd2FsLWZvb3RlciddO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGdldFRlbXBsYXRlUGFyYW1zID0gZnVuY3Rpb24gZ2V0VGVtcGxhdGVQYXJhbXMocGFyYW1zKSB7XG4gICAgLyoqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fSAqL1xuICAgIHZhciB0ZW1wbGF0ZSA9IHR5cGVvZiBwYXJhbXMudGVtcGxhdGUgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGVtcGxhdGUpIDogcGFyYW1zLnRlbXBsYXRlO1xuICAgIGlmICghdGVtcGxhdGUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgLyoqIEB0eXBlIHtEb2N1bWVudEZyYWdtZW50fSAqL1xuICAgIHZhciB0ZW1wbGF0ZUNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50O1xuICAgIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzKHRlbXBsYXRlQ29udGVudCk7XG4gICAgdmFyIHJlc3VsdCA9IE9iamVjdC5hc3NpZ24oZ2V0U3dhbFBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsRnVuY3Rpb25QYXJhbXModGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEJ1dHRvbnModGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEltYWdlKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxJY29uKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxJbnB1dCh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsU3RyaW5nUGFyYW1zKHRlbXBsYXRlQ29udGVudCwgc3dhbFN0cmluZ1BhcmFtcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIHZhciBnZXRTd2FsUGFyYW1zID0gZnVuY3Rpb24gZ2V0U3dhbFBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xuICAgIHZhciBzd2FsUGFyYW1zID0gQXJyYXkuZnJvbSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1wYXJhbScpKTtcbiAgICBzd2FsUGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKHBhcmFtLCBbJ25hbWUnLCAndmFsdWUnXSk7XG4gICAgICB2YXIgcGFyYW1OYW1lID0gcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICB2YXIgdmFsdWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICBpZiAodHlwZW9mIGRlZmF1bHRQYXJhbXNbcGFyYW1OYW1lXSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gdmFsdWUgIT09ICdmYWxzZSc7XG4gICAgICB9IGVsc2UgaWYgKF90eXBlb2YoZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmVzdWx0W3BhcmFtTmFtZV0gPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGdldFN3YWxGdW5jdGlvblBhcmFtcyA9IGZ1bmN0aW9uIGdldFN3YWxGdW5jdGlvblBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudFtdfSAqL1xuICAgIHZhciBzd2FsRnVuY3Rpb25zID0gQXJyYXkuZnJvbSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1mdW5jdGlvbi1wYXJhbScpKTtcbiAgICBzd2FsRnVuY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICB2YXIgcGFyYW1OYW1lID0gcGFyYW0uZ2V0QXR0cmlidXRlKCduYW1lJyk7XG4gICAgICB2YXIgdmFsdWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IG5ldyBGdW5jdGlvbihcInJldHVybiBcIi5jb25jYXQodmFsdWUpKSgpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIHZhciBnZXRTd2FsQnV0dG9ucyA9IGZ1bmN0aW9uIGdldFN3YWxCdXR0b25zKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgdmFyIHN3YWxCdXR0b25zID0gQXJyYXkuZnJvbSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1idXR0b24nKSk7XG4gICAgc3dhbEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGJ1dHRvbiwgWyd0eXBlJywgJ2NvbG9yJywgJ2FyaWEtbGFiZWwnXSk7XG4gICAgICB2YXIgdHlwZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgIHJlc3VsdFtcIlwiLmNvbmNhdCh0eXBlLCBcIkJ1dHRvblRleHRcIildID0gYnV0dG9uLmlubmVySFRNTDtcbiAgICAgIHJlc3VsdFtcInNob3dcIi5jb25jYXQoY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpLCBcIkJ1dHRvblwiKV0gPSB0cnVlO1xuICAgICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgICAgcmVzdWx0W1wiXCIuY29uY2F0KHR5cGUsIFwiQnV0dG9uQ29sb3JcIildID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICAgIH1cbiAgICAgIGlmIChidXR0b24uaGFzQXR0cmlidXRlKCdhcmlhLWxhYmVsJykpIHtcbiAgICAgICAgcmVzdWx0W1wiXCIuY29uY2F0KHR5cGUsIFwiQnV0dG9uQXJpYUxhYmVsXCIpXSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICB2YXIgZ2V0U3dhbEltYWdlID0gZnVuY3Rpb24gZ2V0U3dhbEltYWdlKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xuICAgIHZhciBpbWFnZSA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWltYWdlJyk7XG4gICAgaWYgKGltYWdlKSB7XG4gICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGltYWdlLCBbJ3NyYycsICd3aWR0aCcsICdoZWlnaHQnLCAnYWx0J10pO1xuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnc3JjJykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlVXJsID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ3dpZHRoJykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlV2lkdGggPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdoZWlnaHQnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VIZWlnaHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnYWx0JykpIHtcbiAgICAgICAgcmVzdWx0LmltYWdlQWx0ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdhbHQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGdldFN3YWxJY29uID0gZnVuY3Rpb24gZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgdmFyIGljb24gPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pY29uJyk7XG4gICAgaWYgKGljb24pIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaWNvbiwgWyd0eXBlJywgJ2NvbG9yJ10pO1xuICAgICAgaWYgKGljb24uaGFzQXR0cmlidXRlKCd0eXBlJykpIHtcbiAgICAgICAgLyoqIEB0eXBlIHtTd2VldEFsZXJ0SWNvbn0gKi9cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXN1bHQuaWNvbiA9IGljb24uZ2V0QXR0cmlidXRlKCd0eXBlJyk7XG4gICAgICB9XG4gICAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcbiAgICAgICAgcmVzdWx0Lmljb25Db2xvciA9IGljb24uZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgICAgfVxuICAgICAgcmVzdWx0Lmljb25IdG1sID0gaWNvbi5pbm5lckhUTUw7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIHZhciBnZXRTd2FsSW5wdXQgPSBmdW5jdGlvbiBnZXRTd2FsSW5wdXQodGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgdmFyIGlucHV0ID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW5wdXQnKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW5wdXQsIFsndHlwZScsICdsYWJlbCcsICdwbGFjZWhvbGRlcicsICd2YWx1ZSddKTtcbiAgICAgIC8qKiBAdHlwZSB7U3dlZXRBbGVydElucHV0fSAqL1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmVzdWx0LmlucHV0ID0gaW5wdXQuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgJ3RleHQnO1xuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgnbGFiZWwnKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRMYWJlbCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnbGFiZWwnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0UGxhY2Vob2xkZXIgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dFZhbHVlID0gaW5wdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgdmFyIGlucHV0T3B0aW9ucyA9IEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N3YWwtaW5wdXQtb3B0aW9uJykpO1xuICAgIGlmIChpbnB1dE9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQuaW5wdXRPcHRpb25zID0ge307XG4gICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMob3B0aW9uLCBbJ3ZhbHVlJ10pO1xuICAgICAgICB2YXIgb3B0aW9uVmFsdWUgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICB2YXIgb3B0aW9uTmFtZSA9IG9wdGlvbi5pbm5lckhUTUw7XG4gICAgICAgIHJlc3VsdC5pbnB1dE9wdGlvbnNbb3B0aW9uVmFsdWVdID0gb3B0aW9uTmFtZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBwYXJhbU5hbWVzXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIHZhciBnZXRTd2FsU3RyaW5nUGFyYW1zID0gZnVuY3Rpb24gZ2V0U3dhbFN0cmluZ1BhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQsIHBhcmFtTmFtZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgZm9yICh2YXIgaSBpbiBwYXJhbU5hbWVzKSB7XG4gICAgICB2YXIgcGFyYW1OYW1lID0gcGFyYW1OYW1lc1tpXTtcbiAgICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgICB2YXIgdGFnID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1OYW1lKTtcbiAgICAgIGlmICh0YWcpIHtcbiAgICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyh0YWcsIFtdKTtcbiAgICAgICAgcmVzdWx0W3BhcmFtTmFtZS5yZXBsYWNlKC9ec3dhbC0vLCAnJyldID0gdGFnLmlubmVySFRNTC50cmltKCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqL1xuICB2YXIgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JFbGVtZW50cyh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgYWxsb3dlZEVsZW1lbnRzID0gc3dhbFN0cmluZ1BhcmFtcy5jb25jYXQoWydzd2FsLXBhcmFtJywgJ3N3YWwtZnVuY3Rpb24tcGFyYW0nLCAnc3dhbC1idXR0b24nLCAnc3dhbC1pbWFnZScsICdzd2FsLWljb24nLCAnc3dhbC1pbnB1dCcsICdzd2FsLWlucHV0LW9wdGlvbiddKTtcbiAgICBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHZhciB0YWdOYW1lID0gZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKCFhbGxvd2VkRWxlbWVudHMuaW5jbHVkZXModGFnTmFtZSkpIHtcbiAgICAgICAgd2FybihcIlVucmVjb2duaXplZCBlbGVtZW50IDxcIi5jb25jYXQodGFnTmFtZSwgXCI+XCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gYWxsb3dlZEF0dHJpYnV0ZXNcbiAgICovXG4gIHZhciBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzID0gZnVuY3Rpb24gc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhlbCwgYWxsb3dlZEF0dHJpYnV0ZXMpIHtcbiAgICBBcnJheS5mcm9tKGVsLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlLm5hbWUpID09PSAtMSkge1xuICAgICAgICB3YXJuKFtcIlVucmVjb2duaXplZCBhdHRyaWJ1dGUgXFxcIlwiLmNvbmNhdChhdHRyaWJ1dGUubmFtZSwgXCJcXFwiIG9uIDxcIikuY29uY2F0KGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSwgXCI+LlwiKSwgXCJcIi5jb25jYXQoYWxsb3dlZEF0dHJpYnV0ZXMubGVuZ3RoID8gXCJBbGxvd2VkIGF0dHJpYnV0ZXMgYXJlOiBcIi5jb25jYXQoYWxsb3dlZEF0dHJpYnV0ZXMuam9pbignLCAnKSkgOiAnVG8gc2V0IHRoZSB2YWx1ZSwgdXNlIEhUTUwgd2l0aGluIHRoZSBlbGVtZW50LicpXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIFNIT1dfQ0xBU1NfVElNRU9VVCA9IDEwO1xuXG4gIC8qKlxuICAgKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBvcGVuUG9wdXAgPSBmdW5jdGlvbiBvcGVuUG9wdXAocGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMud2lsbE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBhcmFtcy53aWxsT3Blbihwb3B1cCk7XG4gICAgfVxuICAgIHZhciBib2R5U3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgdmFyIGluaXRpYWxCb2R5T3ZlcmZsb3cgPSBib2R5U3R5bGVzLm92ZXJmbG93WTtcbiAgICBhZGRDbGFzc2VzKGNvbnRhaW5lciwgcG9wdXAsIHBhcmFtcyk7XG5cbiAgICAvLyBzY3JvbGxpbmcgaXMgJ2hpZGRlbicgdW50aWwgYW5pbWF0aW9uIGlzIGRvbmUsIGFmdGVyIHRoYXQgJ2F1dG8nXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5KGNvbnRhaW5lciwgcG9wdXApO1xuICAgIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCk7XG4gICAgaWYgKGlzTW9kYWwoKSkge1xuICAgICAgZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgcGFyYW1zLnNjcm9sbGJhclBhZGRpbmcsIGluaXRpYWxCb2R5T3ZlcmZsb3cpO1xuICAgICAgc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cbiAgICBpZiAoIWlzVG9hc3QoKSAmJiAhZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHBhcmFtcy5kaWRPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5kaWRPcGVuKHBvcHVwKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0FuaW1hdGlvbkV2ZW50fSBldmVudFxuICAgKi9cbiAgdmFyIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQgPSBmdW5jdGlvbiBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKGV2ZW50KSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBwb3B1cCB8fCAhYW5pbWF0aW9uRW5kRXZlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpO1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKi9cbiAgdmFyIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkgPSBmdW5jdGlvbiBzZXRTY3JvbGxpbmdWaXNpYmlsaXR5KGNvbnRhaW5lciwgcG9wdXApIHtcbiAgICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKSkge1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSBzY3JvbGxiYXJQYWRkaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbml0aWFsQm9keU92ZXJmbG93XG4gICAqL1xuICB2YXIgZml4U2Nyb2xsQ29udGFpbmVyID0gZnVuY3Rpb24gZml4U2Nyb2xsQ29udGFpbmVyKGNvbnRhaW5lciwgc2Nyb2xsYmFyUGFkZGluZywgaW5pdGlhbEJvZHlPdmVyZmxvdykge1xuICAgIGlPU2ZpeCgpO1xuICAgIGlmIChzY3JvbGxiYXJQYWRkaW5nICYmIGluaXRpYWxCb2R5T3ZlcmZsb3cgIT09ICdoaWRkZW4nKSB7XG4gICAgICByZXBsYWNlU2Nyb2xsYmFyV2l0aFBhZGRpbmcoaW5pdGlhbEJvZHlPdmVyZmxvdyk7XG4gICAgfVxuXG4gICAgLy8gc3dlZXRhbGVydDIvaXNzdWVzLzEyNDdcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgYWRkQ2xhc3NlcyA9IGZ1bmN0aW9uIGFkZENsYXNzZXMoY29udGFpbmVyLCBwb3B1cCwgcGFyYW1zKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMuc2hvd0NsYXNzLmJhY2tkcm9wKTtcbiAgICBpZiAocGFyYW1zLmFuaW1hdGlvbikge1xuICAgICAgLy8gdGhpcyB3b3JrYXJvdW5kIHdpdGggb3BhY2l0eSBpcyBuZWVkZWQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjA1OVxuICAgICAgcG9wdXAuc3R5bGUuc2V0UHJvcGVydHkoJ29wYWNpdHknLCAnMCcsICdpbXBvcnRhbnQnKTtcbiAgICAgIHNob3cocG9wdXAsICdncmlkJyk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQW5pbWF0ZSBwb3B1cCByaWdodCBhZnRlciBzaG93aW5nIGl0XG4gICAgICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuc2hvd0NsYXNzLnBvcHVwKTtcbiAgICAgICAgLy8gYW5kIHJlbW92ZSB0aGUgb3BhY2l0eSB3b3JrYXJvdW5kXG4gICAgICAgIHBvcHVwLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvcGFjaXR5Jyk7XG4gICAgICB9LCBTSE9XX0NMQVNTX1RJTUVPVVQpOyAvLyAxMG1zIGluIG9yZGVyIHRvIGZpeCAjMjA2MlxuICAgIH0gZWxzZSB7XG4gICAgICBzaG93KHBvcHVwLCAnZ3JpZCcpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXMuc2hvd24pO1xuICAgIGlmIChwYXJhbXMuaGVpZ2h0QXV0byAmJiBwYXJhbXMuYmFja2Ryb3AgJiYgIXBhcmFtcy50b2FzdCkge1xuICAgICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsaWRhdGlvbk1lc3NhZ2VdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nIHwgdm9pZD59XG4gICAgICovXG4gICAgZW1haWw6IGZ1bmN0aW9uIGVtYWlsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIHJldHVybiAvXlthLXpBLVowLTkuK18nLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dKyQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3ZhbGlkYXRpb25NZXNzYWdlXVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZyB8IHZvaWQ+fVxuICAgICAqL1xuICAgIHVybDogZnVuY3Rpb24gdXJsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUgd2l0aCBhIHNtYWxsIGNoYW5nZSBmcm9tICMxMzA2IGFuZCAjMjAxM1xuICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsxLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlIHx8ICdJbnZhbGlkIFVSTCcpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcykge1xuICAgIC8vIFVzZSBkZWZhdWx0IGBpbnB1dFZhbGlkYXRvcmAgZm9yIHN1cHBvcnRlZCBpbnB1dCB0eXBlcyBpZiBub3QgcHJvdmlkZWRcbiAgICBpZiAocGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdlbWFpbCcpIHtcbiAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNbJ2VtYWlsJ107XG4gICAgfVxuICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICd1cmwnKSB7XG4gICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzWyd1cmwnXTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiB2YWxpZGF0ZUN1c3RvbVRhcmdldEVsZW1lbnQocGFyYW1zKSB7XG4gICAgLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgaXMgdmFsaWRcbiAgICBpZiAoIXBhcmFtcy50YXJnZXQgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLnRhcmdldC5hcHBlbmRDaGlsZCkge1xuICAgICAgd2FybignVGFyZ2V0IHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJib2R5XCInKTtcbiAgICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgICBzZXREZWZhdWx0SW5wdXRWYWxpZGF0b3JzKHBhcmFtcyk7XG5cbiAgICAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cbiAgICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICB3YXJuKCdzaG93TG9hZGVyT25Db25maXJtIGlzIHNldCB0byB0cnVlLCBidXQgcHJlQ29uZmlybSBpcyBub3QgZGVmaW5lZC5cXG4nICsgJ3Nob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG4nICsgJ2h0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3QnKTtcbiAgICB9XG4gICAgdmFsaWRhdGVDdXN0b21UYXJnZXRFbGVtZW50KHBhcmFtcyk7XG5cbiAgICAvLyBSZXBsYWNlIG5ld2xpbmVzIHdpdGggPGJyPiBpbiB0aXRsZVxuICAgIGlmICh0eXBlb2YgcGFyYW1zLnRpdGxlID09PSAnc3RyaW5nJykge1xuICAgICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKTtcbiAgICB9XG4gICAgaW5pdChwYXJhbXMpO1xuICB9XG5cbiAgLyoqIEB0eXBlIHtTd2VldEFsZXJ0fSAqL1xuICB2YXIgY3VycmVudEluc3RhbmNlO1xuICB2YXIgX3Byb21pc2UgPSAvKiNfX1BVUkVfXyovbmV3IFdlYWtNYXAoKTtcbiAgdmFyIFN3ZWV0QWxlcnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Li4uYW55fSBhcmdzXG4gICAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAgICovXG4gICAgZnVuY3Rpb24gU3dlZXRBbGVydCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTd2VldEFsZXJ0KTtcbiAgICAgIC8qKlxuICAgICAgICogQHR5cGUge1Byb21pc2U8U3dlZXRBbGVydFJlc3VsdD59XG4gICAgICAgKi9cbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKHRoaXMsIF9wcm9taXNlLCB2b2lkIDApO1xuICAgICAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cbiAgICAgIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuXG4gICAgICAvKiogQHR5cGUge1JlYWRvbmx5PFN3ZWV0QWxlcnRPcHRpb25zPn0gKi9cbiAgICAgIHRoaXMucGFyYW1zID0gb3V0ZXJQYXJhbXM7XG5cbiAgICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICAgIHRoaXMuaXNBd2FpdGluZ1Byb21pc2UgPSBmYWxzZTtcbiAgICAgIF9jbGFzc1ByaXZhdGVGaWVsZFNldDIoX3Byb21pc2UsIHRoaXMsIHRoaXMuX21haW4oY3VycmVudEluc3RhbmNlLnBhcmFtcykpO1xuICAgIH1cbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKFN3ZWV0QWxlcnQsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbih1c2VyUGFyYW1zKSB7XG4gICAgICAgIHZhciBtaXhpblBhcmFtcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICAgIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhPYmplY3QuYXNzaWduKHt9LCBtaXhpblBhcmFtcywgdXNlclBhcmFtcykpO1xuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlKSB7XG4gICAgICAgICAgdmFyIHN3YWxQcm9taXNlUmVzb2x2ZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5nZXQoZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlKTtcbiAgICAgICAgICB2YXIgaXNBd2FpdGluZ1Byb21pc2UgPSBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuaXNBd2FpdGluZ1Byb21pc2U7XG4gICAgICAgICAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlLl9kZXN0cm95KCk7XG4gICAgICAgICAgaWYgKCFpc0F3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgICAgICAgc3dhbFByb21pc2VSZXNvbHZlKHtcbiAgICAgICAgICAgICAgaXNEaXNtaXNzZWQ6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICAgICAgICB1bnNldEFyaWFIaWRkZW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlO1xuICAgICAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcmVwYXJlUGFyYW1zKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKTtcbiAgICAgICAgc2V0UGFyYW1ldGVycyhpbm5lclBhcmFtcyk7XG4gICAgICAgIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0aW1lclxuICAgICAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuICAgICAgICBjbGVhclRpbWVvdXQoZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCk7XG4gICAgICAgIHZhciBkb21DYWNoZSA9IHBvcHVsYXRlRG9tQ2FjaGUoY3VycmVudEluc3RhbmNlKTtcbiAgICAgICAgcmVuZGVyKGN1cnJlbnRJbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KGN1cnJlbnRJbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgICByZXR1cm4gc3dhbFByb21pc2UoY3VycmVudEluc3RhbmNlLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBgY2F0Y2hgIGNhbm5vdCBiZSB0aGUgbmFtZSBvZiBhIG1vZHVsZSBleHBvcnQsIHNvIHdlIGRlZmluZSBvdXIgdGhlbmFibGUgbWV0aG9kcyBoZXJlIGluc3RlYWRcbiAgICB9LCB7XG4gICAgICBrZXk6IFwidGhlblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldDIoX3Byb21pc2UsIHRoaXMpLnRoZW4ob25GdWxmaWxsZWQpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJmaW5hbGx5XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gX2ZpbmFsbHkob25GaW5hbGx5KSB7XG4gICAgICAgIHJldHVybiBfY2xhc3NQcml2YXRlRmllbGRHZXQyKF9wcm9taXNlLCB0aGlzKVtcImZpbmFsbHlcIl0ob25GaW5hbGx5KTtcbiAgICAgIH1cbiAgICB9XSk7XG4gIH0oKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHZhciBzd2FsUHJvbWlzZSA9IGZ1bmN0aW9uIHN3YWxQcm9taXNlKGluc3RhbmNlLCBkb21DYWNoZSwgaW5uZXJQYXJhbXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgLy8gZnVuY3Rpb25zIHRvIGhhbmRsZSBhbGwgY2xvc2luZ3MvZGlzbWlzc2Fsc1xuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge0Rpc21pc3NSZWFzb259IGRpc21pc3NcbiAgICAgICAqL1xuICAgICAgdmFyIGRpc21pc3NXaXRoID0gZnVuY3Rpb24gZGlzbWlzc1dpdGgoZGlzbWlzcykge1xuICAgICAgICBpbnN0YW5jZS5jbG9zZSh7XG4gICAgICAgICAgaXNEaXNtaXNzZWQ6IHRydWUsXG4gICAgICAgICAgZGlzbWlzczogZGlzbWlzc1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlc29sdmUuc2V0KGluc3RhbmNlLCByZXNvbHZlKTtcbiAgICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVqZWN0LnNldChpbnN0YW5jZSwgcmVqZWN0KTtcbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlQ29uZmlybUJ1dHRvbkNsaWNrKGluc3RhbmNlKTtcbiAgICAgIH07XG4gICAgICBkb21DYWNoZS5kZW55QnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhhbmRsZURlbnlCdXR0b25DbGljayhpbnN0YW5jZSk7XG4gICAgICB9O1xuICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrKGluc3RhbmNlLCBkaXNtaXNzV2l0aCk7XG4gICAgICB9O1xuICAgICAgZG9tQ2FjaGUuY2xvc2VCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuICAgICAgaGFuZGxlUG9wdXBDbGljayhpbm5lclBhcmFtcywgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgICAgIGFkZEtleWRvd25IYW5kbGVyKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgICAgaGFuZGxlSW5wdXRPcHRpb25zQW5kVmFsdWUoaW5zdGFuY2UsIGlubmVyUGFyYW1zKTtcbiAgICAgIG9wZW5Qb3B1cChpbm5lclBhcmFtcyk7XG4gICAgICBzZXR1cFRpbWVyKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpO1xuICAgICAgaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcyk7XG5cbiAgICAgIC8vIFNjcm9sbCBjb250YWluZXIgdG8gdG9wIG9uIG9wZW4gKCMxMjQ3LCAjMTk0NilcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21DYWNoZS5jb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSB1c2VyUGFyYW1zXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IG1peGluUGFyYW1zXG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIHZhciBwcmVwYXJlUGFyYW1zID0gZnVuY3Rpb24gcHJlcGFyZVBhcmFtcyh1c2VyUGFyYW1zLCBtaXhpblBhcmFtcykge1xuICAgIHZhciB0ZW1wbGF0ZVBhcmFtcyA9IGdldFRlbXBsYXRlUGFyYW1zKHVzZXJQYXJhbXMpO1xuICAgIHZhciBwYXJhbXMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLCBtaXhpblBhcmFtcywgdGVtcGxhdGVQYXJhbXMsIHVzZXJQYXJhbXMpOyAvLyBwcmVjZWRlbmNlIGlzIGRlc2NyaWJlZCBpbiAjMjEzMVxuICAgIHBhcmFtcy5zaG93Q2xhc3MgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UGFyYW1zLnNob3dDbGFzcywgcGFyYW1zLnNob3dDbGFzcyk7XG4gICAgcGFyYW1zLmhpZGVDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuaGlkZUNsYXNzLCBwYXJhbXMuaGlkZUNsYXNzKTtcbiAgICBpZiAocGFyYW1zLmFuaW1hdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgIHBhcmFtcy5zaG93Q2xhc3MgPSB7XG4gICAgICAgIGJhY2tkcm9wOiAnc3dhbDItbm9hbmltYXRpb24nXG4gICAgICB9O1xuICAgICAgcGFyYW1zLmhpZGVDbGFzcyA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEByZXR1cm5zIHtEb21DYWNoZX1cbiAgICovXG4gIHZhciBwb3B1bGF0ZURvbUNhY2hlID0gZnVuY3Rpb24gcG9wdWxhdGVEb21DYWNoZShpbnN0YW5jZSkge1xuICAgIHZhciBkb21DYWNoZSA9IHtcbiAgICAgIHBvcHVwOiBnZXRQb3B1cCgpLFxuICAgICAgY29udGFpbmVyOiBnZXRDb250YWluZXIoKSxcbiAgICAgIGFjdGlvbnM6IGdldEFjdGlvbnMoKSxcbiAgICAgIGNvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24oKSxcbiAgICAgIGRlbnlCdXR0b246IGdldERlbnlCdXR0b24oKSxcbiAgICAgIGNhbmNlbEJ1dHRvbjogZ2V0Q2FuY2VsQnV0dG9uKCksXG4gICAgICBsb2FkZXI6IGdldExvYWRlcigpLFxuICAgICAgY2xvc2VCdXR0b246IGdldENsb3NlQnV0dG9uKCksXG4gICAgICB2YWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxcbiAgICAgIHByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMoKVxuICAgIH07XG4gICAgcHJpdmF0ZVByb3BzLmRvbUNhY2hlLnNldChpbnN0YW5jZSwgZG9tQ2FjaGUpO1xuICAgIHJldHVybiBkb21DYWNoZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtHbG9iYWxTdGF0ZX0gZ2xvYmFsU3RhdGVcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIHZhciBzZXR1cFRpbWVyID0gZnVuY3Rpb24gc2V0dXBUaW1lcihnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgaGlkZSh0aW1lclByb2dyZXNzQmFyKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMudGltZXIpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQgPSBuZXcgVGltZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNtaXNzV2l0aCgndGltZXInKTtcbiAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgICB9LCBpbm5lclBhcmFtcy50aW1lcik7XG4gICAgICBpZiAoaW5uZXJQYXJhbXMudGltZXJQcm9ncmVzc0Jhcikge1xuICAgICAgICBzaG93KHRpbWVyUHJvZ3Jlc3NCYXIpO1xuICAgICAgICBhcHBseUN1c3RvbUNsYXNzKHRpbWVyUHJvZ3Jlc3NCYXIsIGlubmVyUGFyYW1zLCAndGltZXJQcm9ncmVzc0JhcicpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LnJ1bm5pbmcpIHtcbiAgICAgICAgICAgIC8vIHRpbWVyIGNhbiBiZSBhbHJlYWR5IHN0b3BwZWQgb3IgdW5zZXQgYXQgdGhpcyBwb2ludFxuICAgICAgICAgICAgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIoaW5uZXJQYXJhbXMudGltZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKi9cbiAgdmFyIGluaXRGb2N1cyA9IGZ1bmN0aW9uIGluaXRGb2N1cyhkb21DYWNoZSwgaW5uZXJQYXJhbXMpIHtcbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjYWxsSWZGdW5jdGlvbihpbm5lclBhcmFtcy5hbGxvd0VudGVyS2V5KSkge1xuICAgICAgYmx1ckFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFmb2N1c0J1dHRvbihkb21DYWNoZSwgaW5uZXJQYXJhbXMpKSB7XG4gICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBmb2N1c0J1dHRvbiA9IGZ1bmN0aW9uIGZvY3VzQnV0dG9uKGRvbUNhY2hlLCBpbm5lclBhcmFtcykge1xuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0RlbnkgJiYgaXNWaXNpYmxlJDEoZG9tQ2FjaGUuZGVueUJ1dHRvbikpIHtcbiAgICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwgJiYgaXNWaXNpYmxlJDEoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ29uZmlybSAmJiBpc1Zpc2libGUkMShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgdmFyIGJsdXJBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gYmx1ckFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiB0eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gRGVhciBydXNzaWFuIHVzZXJzIHZpc2l0aW5nIHJ1c3NpYW4gc2l0ZXMuIExldCdzIGhhdmUgZnVuLlxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgL15ydVxcYi8udGVzdChuYXZpZ2F0b3IubGFuZ3VhZ2UpICYmIGxvY2F0aW9uLmhvc3QubWF0Y2goL1xcLihydXxzdXxieXx4bi0tcDFhaSkkLykpIHtcbiAgICB2YXIgbm93ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgaW5pdGlhdGlvbkRhdGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3dhbC1pbml0aWF0aW9uJyk7XG4gICAgaWYgKCFpbml0aWF0aW9uRGF0ZSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N3YWwtaW5pdGlhdGlvbicsIFwiXCIuY29uY2F0KG5vdykpO1xuICAgIH0gZWxzZSBpZiAoKG5vdy5nZXRUaW1lKCkgLSBEYXRlLnBhcnNlKGluaXRpYXRpb25EYXRlKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkgPiAzKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB2YXIgdWtyYWluaWFuQW50aGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICAgICAgdWtyYWluaWFuQW50aGVtLnNyYyA9ICdodHRwczovL2ZsYWctZ2ltbi5ydS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wOS9Va3JhaW5hLm1wMyc7XG4gICAgICAgIHVrcmFpbmlhbkFudGhlbS5sb29wID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1a3JhaW5pYW5BbnRoZW0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB1a3JhaW5pYW5BbnRoZW0ucGxheSgpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sIDI1MDApO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZGlzYWJsZUJ1dHRvbnMgPSBkaXNhYmxlQnV0dG9ucztcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZW5hYmxlQnV0dG9ucyA9IGVuYWJsZUJ1dHRvbnM7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmdldElucHV0ID0gZ2V0SW5wdXQ7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmRpc2FibGVJbnB1dCA9IGRpc2FibGVJbnB1dDtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZW5hYmxlSW5wdXQgPSBlbmFibGVJbnB1dDtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuaGlkZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZGlzYWJsZUxvYWRpbmcgPSBoaWRlTG9hZGluZztcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuc2hvd1ZhbGlkYXRpb25NZXNzYWdlID0gc2hvd1ZhbGlkYXRpb25NZXNzYWdlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuY2xvc2UgPSBjbG9zZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuY2xvc2VQb3B1cCA9IGNsb3NlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5jbG9zZU1vZGFsID0gY2xvc2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmNsb3NlVG9hc3QgPSBjbG9zZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUucmVqZWN0UHJvbWlzZSA9IHJlamVjdFByb21pc2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBfZGVzdHJveTtcblxuICAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG4gIE9iamVjdC5hc3NpZ24oU3dlZXRBbGVydCwgc3RhdGljTWV0aG9kcyk7XG5cbiAgLy8gUHJveHkgdG8gaW5zdGFuY2UgbWV0aG9kcyB0byBjb25zdHJ1Y3RvciwgZm9yIG5vdywgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gIE9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5hbnl9IGFyZ3NcbiAgICAgKiBAcmV0dXJucyB7YW55IHwgdW5kZWZpbmVkfVxuICAgICAqL1xuICAgIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjdXJyZW50SW5zdGFuY2UgJiYgY3VycmVudEluc3RhbmNlW2tleV0pIHtcbiAgICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG4gICAgICAgIHJldHVybiAoX2N1cnJlbnRJbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZSlba2V5XS5hcHBseShfY3VycmVudEluc3RhbmNlLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfSk7XG4gIFN3ZWV0QWxlcnQuRGlzbWlzc1JlYXNvbiA9IERpc21pc3NSZWFzb247XG4gIFN3ZWV0QWxlcnQudmVyc2lvbiA9ICcxMS4xMC44JztcblxuICB2YXIgU3dhbCA9IFN3ZWV0QWxlcnQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgU3dhbFtcImRlZmF1bHRcIl0gPSBTd2FsO1xuXG4gIHJldHVybiBTd2FsO1xuXG59KSk7XG5pZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuU3dlZXRhbGVydDIpe3RoaXMuc3dhbCA9IHRoaXMuc3dlZXRBbGVydCA9IHRoaXMuU3dhbCA9IHRoaXMuU3dlZXRBbGVydCA9IHRoaXMuU3dlZXRhbGVydDJ9XG5cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7aWYoZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobiksbi5zdHlsZVNoZWV0KW4uc3R5bGVTaGVldC5kaXNhYmxlZHx8KG4uc3R5bGVTaGVldC5jc3NUZXh0PXQpO2Vsc2UgdHJ5e24uaW5uZXJIVE1MPXR9Y2F0Y2goZSl7bi5pbm5lclRleHQ9dH19KGRvY3VtZW50LFwiLnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0e2JveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLWNvbHVtbjoxLzQgIWltcG9ydGFudDtncmlkLXJvdzoxLzQgIWltcG9ydGFudDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWluLWNvbnRlbnQgYXV0byBtaW4tY29udGVudDtwYWRkaW5nOjFlbTtvdmVyZmxvdy15OmhpZGRlbjtiYWNrZ3JvdW5kOiNmZmY7Ym94LXNoYWRvdzowIDAgMXB4IHJnYmEoMCwwLDAsLjA3NSksMCAxcHggMnB4IHJnYmEoMCwwLDAsLjA3NSksMXB4IDJweCA0cHggcmdiYSgwLDAsMCwuMDc1KSwxcHggM3B4IDhweCByZ2JhKDAsMCwwLC4wNzUpLDJweCA0cHggMTZweCByZ2JhKDAsMCwwLC4wNzUpO3BvaW50ZXItZXZlbnRzOmFsbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Q+KntncmlkLWNvbHVtbjoyfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdGl0bGV7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246aW5pdGlhbH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmd7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWlucHV0e2hlaWdodDoyZW07bWFyZ2luOi41ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZXtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItZm9vdGVye21hcmdpbjouNWVtIDAgMDtwYWRkaW5nOi41ZW0gMCAwO2ZvbnQtc2l6ZTouOGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY2xvc2V7Z3JpZC1jb2x1bW46My8zO2dyaWQtcm93OjEvOTk7YWxpZ24tc2VsZjpjZW50ZXI7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTttYXJnaW46MDtmb250LXNpemU6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaHRtbC1jb250YWluZXJ7bWFyZ2luOi41ZW0gMWVtO3BhZGRpbmc6MDtvdmVyZmxvdzppbml0aWFsO2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjppbml0aWFsfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaHRtbC1jb250YWluZXI6ZW1wdHl7cGFkZGluZzowfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGVye2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46LjI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29ue2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDoyZW07bWluLXdpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjowIC41ZW0gMCAwfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbiAuc3dhbDItaWNvbi1jb250ZW50e2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjEuOGVtO2ZvbnQtd2VpZ2h0OmJvbGR9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17dG9wOi44NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25ze2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O2hlaWdodDphdXRvO21hcmdpbjowO21hcmdpbi10b3A6LjVlbTtwYWRkaW5nOjAgLjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZHttYXJnaW46LjI1ZW0gLjVlbTtwYWRkaW5nOi40ZW0gLjZlbTtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Nn0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEuNmVtO2hlaWdodDozZW07Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0wLjhlbTtsZWZ0Oi0wLjVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtLW9yaWdpbjoyZW0gMmVtO2JvcmRlci1yYWRpdXM6NGVtIDAgMCA0ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotMC4yNWVtO2xlZnQ6LjkzNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3thbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1zaG93e2FuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItaGlkZXthbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHN9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpe2Rpc3BsYXk6Z3JpZDtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwNjA7aW5zZXQ6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXFwidG9wLXN0YXJ0ICAgICB0b3AgICAgICAgICAgICB0b3AtZW5kXFxcIiBcXFwiY2VudGVyLXN0YXJ0ICBjZW50ZXIgICAgICAgICBjZW50ZXItZW5kXFxcIiBcXFwiYm90dG9tLXN0YXJ0ICBib3R0b20tY2VudGVyICBib3R0b20tZW5kXFxcIjtncmlkLXRlbXBsYXRlLXJvd3M6bWlubWF4KG1pbi1jb250ZW50LCBhdXRvKSBtaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pIG1pbm1heChtaW4tY29udGVudCwgYXV0byk7aGVpZ2h0OjEwMCU7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3cteDpoaWRkZW47dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xczstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYmFja2Ryb3Atc2hvdyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItbm9hbmltYXRpb257YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC40KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYmFja2Ryb3AtaGlkZXtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCkgIWltcG9ydGFudH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLXN0YXJ0LGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1jZW50ZXItc3RhcnQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbS1zdGFydHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KDAsIDFmcikgYXV0byBhdXRvfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3AsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9te2dyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIG1pbm1heCgwLCAxZnIpIGF1dG99ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1lbmQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1lbmQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbS1lbmR7Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gYXV0byBtaW5tYXgoMCwgMWZyKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLXN0YXJ0Pi5zd2FsMi1wb3B1cHthbGlnbi1zZWxmOnN0YXJ0fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3A+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjI7cGxhY2Utc2VsZjpzdGFydCBjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1lbmQ+LnN3YWwyLXBvcHVwLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3AtcmlnaHQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjM7cGxhY2Utc2VsZjpzdGFydCBlbmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1zdGFydD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1sZWZ0Pi5zd2FsMi1wb3B1cHtncmlkLXJvdzoyO2FsaWduLXNlbGY6Y2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1jZW50ZXI+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjI7Z3JpZC1yb3c6MjtwbGFjZS1zZWxmOmNlbnRlciBjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1lbmQ+LnN3YWwyLXBvcHVwLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1jZW50ZXItcmlnaHQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjM7Z3JpZC1yb3c6MjtwbGFjZS1zZWxmOmNlbnRlciBlbmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbS1zdGFydD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbS1sZWZ0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoxO2dyaWQtcm93OjM7YWxpZ24tc2VsZjplbmR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbT4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtncmlkLXJvdzozO3BsYWNlLXNlbGY6ZW5kIGNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWJvdHRvbS1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztncmlkLXJvdzozO3BsYWNlLXNlbGY6ZW5kIGVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLXBvcHVwLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjEvNDt3aWR0aDoxMDAlfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ncm93LWNvbHVtbj4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItcG9wdXB7Z3JpZC1yb3c6MS80O2FsaWduLXNlbGY6c3RyZXRjaH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItbm8tdHJhbnNpdGlvbnt0cmFuc2l0aW9uOm5vbmUgIWltcG9ydGFudH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1wb3B1cCl7ZGlzcGxheTpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWlubWF4KDAsIDEwMCUpO3dpZHRoOjMyZW07bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowIDAgMS4yNWVtO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6I2ZmZjtjb2xvcjojNTQ1NDU0O2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcG9wdXApOmZvY3Vze291dGxpbmU6bm9uZX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1wb3B1cCkuc3dhbDItbG9hZGluZ3tvdmVyZmxvdy15OmhpZGRlbn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaDI6d2hlcmUoLnN3YWwyLXRpdGxlKXtwb3NpdGlvbjpyZWxhdGl2ZTttYXgtd2lkdGg6MTAwJTttYXJnaW46MDtwYWRkaW5nOi44ZW0gMWVtIDA7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS44NzVlbTtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06bm9uZTt3b3JkLXdyYXA6YnJlYWstd29yZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1hY3Rpb25zKXtkaXNwbGF5OmZsZXg7ei1pbmRleDoxO2JveC1zaXppbmc6Ym9yZGVyLWJveDtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDphdXRvO21hcmdpbjoxLjI1ZW0gYXV0byAwO3BhZGRpbmc6MH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1hY3Rpb25zKTpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWRbZGlzYWJsZWRde29wYWNpdHk6LjR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItYWN0aW9ucyk6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmhvdmVye2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4xKSwgcmdiYSgwLCAwLCAwLCAwLjEpKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1hY3Rpb25zKTpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6YWN0aXZle2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwLjIpKX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1sb2FkZXIpe2Rpc3BsYXk6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoyLjJlbTtoZWlnaHQ6Mi4yZW07bWFyZ2luOjAgMS44NzVlbTthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2JvcmRlci13aWR0aDouMjVlbTtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjojMjc3OGM0IHJnYmEoMCwwLDAsMCkgIzI3NzhjNCByZ2JhKDAsMCwwLDApfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCl7bWFyZ2luOi4zMTI1ZW07cGFkZGluZzouNjI1ZW0gMS4xZW07dHJhbnNpdGlvbjpib3gtc2hhZG93IC4xcztib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDAsMCwwLDApO2ZvbnQtd2VpZ2h0OjUwMH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm17Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojNzA2NmUwO2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm06Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMTIsMTAyLDIyNCwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1kZW55e2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6I2RjMzc0MTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1kZW55OmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMjIwLDU1LDY1LC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNhbmNlbHtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiM2ZTc4ODE7Y29sb3I6I2ZmZjtmb250LXNpemU6MWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCkuc3dhbDItY2FuY2VsOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTEwLDEyMCwxMjksLjUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCkuc3dhbDItZGVmYXVsdC1vdXRsaW5lOmZvY3Vze2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6Zm9jdXN7b3V0bGluZTpub25lfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItZm9vdGVyKXttYXJnaW46MWVtIDAgMDtwYWRkaW5nOjFlbSAxZW0gMDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjFlbTt0ZXh0LWFsaWduOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7Z3JpZC1jb2x1bW46YXV0byAhaW1wb3J0YW50O292ZXJmbG93OmhpZGRlbjtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHh9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyKXt3aWR0aDoxMDAlO2hlaWdodDouMjVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjIpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbWc6d2hlcmUoLnN3YWwyLWltYWdlKXttYXgtd2lkdGg6MTAwJTttYXJnaW46MmVtIGF1dG8gMWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKXt6LWluZGV4OjI7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MS4yZW07aGVpZ2h0OjEuMmVtO21hcmdpbi10b3A6MDttYXJnaW4tcmlnaHQ6MDttYXJnaW4tYm90dG9tOi0xLjJlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246Y29sb3IgLjFzLGJveC1zaGFkb3cgLjFzO2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtjb2xvcjojY2NjO2ZvbnQtZmFtaWx5Om1vbm9zcGFjZTtmb250LXNpemU6Mi41ZW07Y3Vyc29yOnBvaW50ZXI7anVzdGlmeS1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1jbG9zZSk6aG92ZXJ7dHJhbnNmb3JtOm5vbmU7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2NvbG9yOiNmMjc0NzR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItY2xvc2UpOmZvY3Vze291dGxpbmU6bm9uZTtib3gtc2hhZG93Omluc2V0IDAgMCAwIDNweCByZ2JhKDEwMCwxNTAsMjAwLC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1jbG9zZSk6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1odG1sLWNvbnRhaW5lcnt6LWluZGV4OjE7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIDEuNmVtIC4zZW07cGFkZGluZzowO292ZXJmbG93OmF1dG87Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbTtmb250LXdlaWdodDpub3JtYWw7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtYWxpZ246Y2VudGVyO3dvcmQtd3JhcDpicmVhay13b3JkO3dvcmQtYnJlYWs6YnJlYWstd29yZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBzZWxlY3Q6d2hlcmUoLnN3YWwyLXNlbGVjdCksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItcmFkaW8pLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBsYWJlbDp3aGVyZSguc3dhbDItY2hlY2tib3gpe21hcmdpbjoxZW0gMmVtIDNweH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpe2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDphdXRvO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIC4xcyxib3gtc2hhZG93IC4xcztib3JkZXI6MXB4IHNvbGlkICNkOWQ5ZDk7Ym9yZGVyLXJhZGl1czouMTg3NWVtO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNiksMCAwIDAgM3B4IHJnYmEoMCwwLDAsMCk7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KS5zd2FsMi1pbnB1dGVycm9yLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItZmlsZSkuc3dhbDItaW5wdXRlcnJvcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKS5zd2FsMi1pbnB1dGVycm9ye2JvcmRlci1jb2xvcjojZjI3NDc0ICFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQgIWltcG9ydGFudH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KTpmb2N1cyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpOmZvY3VzLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpOmZvY3Vze2JvcmRlcjoxcHggc29saWQgI2I0ZGJlZDtvdXRsaW5lOm5vbmU7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpLDAgMCAwIDNweCByZ2JhKDEwMCwxNTAsMjAwLC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWlucHV0KTo6cGxhY2Vob2xkZXIsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKTo6cGxhY2Vob2xkZXIsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHRleHRhcmVhOndoZXJlKC5zd2FsMi10ZXh0YXJlYSk6OnBsYWNlaG9sZGVye2NvbG9yOiNjY2N9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZXttYXJnaW46MWVtIDJlbSAzcHg7YmFja2dyb3VuZDojZmZmfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6ODAlfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2Ugb3V0cHV0e3dpZHRoOjIwJTtjb2xvcjppbmhlcml0O2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdlIGlucHV0LGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2Ugb3V0cHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MDtmb250LXNpemU6MS4xMjVlbTtsaW5lLWhlaWdodDoyLjYyNWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItaW5wdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowIC43NWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItZmlsZXt3aWR0aDo3NSU7bWFyZ2luLXJpZ2h0OmF1dG87bWFyZ2luLWxlZnQ6YXV0bztiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Zm9udC1zaXplOjEuMTI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi10ZXh0YXJlYXtoZWlnaHQ6Ni43NWVtO3BhZGRpbmc6Ljc1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYWRpbyxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWNoZWNrYm94e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2JhY2tncm91bmQ6I2ZmZjtjb2xvcjppbmhlcml0fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFkaW8gbGFiZWwsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1jaGVja2JveCBsYWJlbHttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxLjEyNWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFkaW8gaW5wdXQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1jaGVja2JveCBpbnB1dHtmbGV4LXNocmluazowO21hcmdpbjowIC40ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGxhYmVsOndoZXJlKC5zd2FsMi1pbnB1dC1sYWJlbCl7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjFlbSBhdXRvIDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlKXthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIDAgMDtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZjBmMGYwO2NvbG9yOiM2NjY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGRpdjp3aGVyZSguc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlKTo6YmVmb3Jle2NvbnRlbnQ6XFxcIiFcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBze2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjttYXgtd2lkdGg6MTAwJTttYXJnaW46MS4yNWVtIGF1dG87cGFkZGluZzowO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtmb250LXdlaWdodDo2MDB9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwe3otaW5kZXg6MjA7ZmxleC1zaHJpbms6MDt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjJlbTtiYWNrZ3JvdW5kOiMyNzc4YzQ7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiMyNzc4YzR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiNhZGQ4ZTY7Y29sb3I6I2ZmZn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7YmFja2dyb3VuZDojYWRkOGU2fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXt6LWluZGV4OjEwO2ZsZXgtc2hyaW5rOjA7d2lkdGg6Mi41ZW07aGVpZ2h0Oi40ZW07bWFyZ2luOjAgLTFweDtiYWNrZ3JvdW5kOiMyNzc4YzR9ZGl2OndoZXJlKC5zd2FsMi1pY29uKXtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NWVtO2hlaWdodDo1ZW07bWFyZ2luOjIuNWVtIGF1dG8gLjZlbTtib3JkZXI6MC4yNWVtIHNvbGlkIHJnYmEoMCwwLDAsMCk7Ym9yZGVyLXJhZGl1czo1MCU7Ym9yZGVyLWNvbG9yOiMwMDA7Zm9udC1mYW1pbHk6aW5oZXJpdDtsaW5lLWhlaWdodDo1ZW07Y3Vyc29yOmRlZmF1bHQ7dXNlci1zZWxlY3Q6bm9uZX1kaXY6d2hlcmUoLnN3YWwyLWljb24pIC5zd2FsMi1pY29uLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6My43NWVtfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQ7Y29sb3I6I2YyNzQ3NH1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yIC5zd2FsMi14LW1hcmt7cG9zaXRpb246cmVsYXRpdmU7ZmxleC1ncm93OjF9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyLjMxMjVlbTt3aWR0aDoyLjkzNzVlbTtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzR9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDoxLjA2MjVlbTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6MWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yLnN3YWwyLWljb24tc2hvdyAuc3dhbDIteC1tYXJre2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi13YXJuaW5ne2JvcmRlci1jb2xvcjojZmFjZWE4O2NvbG9yOiNmOGJiODZ9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi13YXJuaW5nLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXdhcm5pbmcuc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtaS1tYXJrIC41c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWluZm97Ym9yZGVyLWNvbG9yOiM5ZGUwZjY7Y29sb3I6IzNmYzNlZX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWluZm8uc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItaW5mby5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1pLW1hcmsgLjhzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb257Ym9yZGVyLWNvbG9yOiNjOWRhZTE7Y29sb3I6Izg3YWRiZH1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXF1ZXN0aW9uLnN3YWwyLWljb24tc2hvd3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXF1ZXN0aW9uLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXF1ZXN0aW9uLW1hcmsgLjhzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2Vzc3tib3JkZXItY29sb3I6I2E1ZGM4Njtjb2xvcjojYTVkYzg2fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6My43NWVtO2hlaWdodDo3LjVlbTtib3JkZXItcmFkaXVzOjUwJX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XXt0b3A6LTAuNDM3NWVtO2xlZnQ6LTIuMDYzNWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm0tb3JpZ2luOjMuNzVlbSAzLjc1ZW07Ym9yZGVyLXJhZGl1czo3LjVlbSAwIDAgNy41ZW19ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotMC42ODc1ZW07bGVmdDoxLjg3NWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm0tb3JpZ2luOjAgMy43NWVtO2JvcmRlci1yYWRpdXM6MCA3LjVlbSA3LjVlbSAwfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6Mjt0b3A6LTAuMjVlbTtsZWZ0Oi0wLjI1ZW07Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTt0b3A6LjVlbTtsZWZ0OjEuNjI1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6NS42MjVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MjtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNhNWRjODZ9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW07dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9bG9uZ117dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLXRpcHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzLnN3YWwyLWljb24tc2hvdyAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHR7YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbn1bY2xhc3NePXN3YWwyXXstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6cmdiYSgwLDAsMCwwKX0uc3dhbDItc2hvd3thbmltYXRpb246c3dhbDItc2hvdyAuM3N9LnN3YWwyLWhpZGV7YW5pbWF0aW9uOnN3YWwyLWhpZGUgLjE1cyBmb3J3YXJkc30uc3dhbDItbm9hbmltYXRpb257dHJhbnNpdGlvbjpub25lfS5zd2FsMi1zY3JvbGxiYXItbWVhc3VyZXtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTk5OTlweDt3aWR0aDo1MHB4O2hlaWdodDo1MHB4O292ZXJmbG93OnNjcm9sbH0uc3dhbDItcnRsIC5zd2FsMi1jbG9zZXttYXJnaW4tcmlnaHQ6aW5pdGlhbDttYXJnaW4tbGVmdDowfS5zd2FsMi1ydGwgLnN3YWwyLXRpbWVyLXByb2dyZXNzLWJhcntyaWdodDowO2xlZnQ6YXV0b31Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3d7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwLjMxMjVlbSkgcm90YXRlWigyZGVnKX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAle3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOi41NjI1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDouMTI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOi42MjVlbTtsZWZ0Oi0wLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDoxLjYyNWVtO3JpZ2h0OjEuMzc1ZW07d2lkdGg6MH02NSV7dG9wOjEuMjVlbTtyaWdodDouOTM3NWVtO3dpZHRoOjB9ODQle3RvcDouOTM3NWVtO3JpZ2h0OjA7d2lkdGg6MS4xMjVlbX0xMDAle3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX19QGtleWZyYW1lcyBzd2FsMi1zaG93ezAle3RyYW5zZm9ybTpzY2FsZSgwLjcpfTQ1JXt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAle3RyYW5zZm9ybTpzY2FsZSgwLjk1KX0xMDAle3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzd2FsMi1oaWRlezAle3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06c2NhbGUoMC41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0wLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44MTI1ZW07d2lkdGg6MS41NjI1ZW19fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUle3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSgwLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtO3RyYW5zZm9ybTpzY2FsZSgwLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotMC4zNzVlbTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwZGVnKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXF1ZXN0aW9uLW1hcmt7MCV7dHJhbnNmb3JtOnJvdGF0ZVkoLTM2MGRlZyl9MTAwJXt0cmFuc2Zvcm06cm90YXRlWSgwKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWktbWFya3swJXt0cmFuc2Zvcm06cm90YXRlWig0NWRlZyk7b3BhY2l0eTowfTI1JXt0cmFuc2Zvcm06cm90YXRlWigtMjVkZWcpO29wYWNpdHk6LjR9NTAle3RyYW5zZm9ybTpyb3RhdGVaKDE1ZGVnKTtvcGFjaXR5Oi44fTc1JXt0cmFuc2Zvcm06cm90YXRlWigtNWRlZyk7b3BhY2l0eToxfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZVgoMCk7b3BhY2l0eToxfX1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93OmhpZGRlbn1ib2R5LnN3YWwyLWhlaWdodC1hdXRve2hlaWdodDphdXRvICFpbXBvcnRhbnR9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50O3BvaW50ZXItZXZlbnRzOm5vbmV9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1wb3B1cHtwb2ludGVyLWV2ZW50czphbGx9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItY29udGFpbmVyIC5zd2FsMi1tb2RhbHtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpfUBtZWRpYSBwcmludHtib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93LXk6c2Nyb2xsICFpbXBvcnRhbnR9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKT5bYXJpYS1oaWRkZW49dHJ1ZV17ZGlzcGxheTpub25lfWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgLnN3YWwyLWNvbnRhaW5lcntwb3NpdGlvbjpzdGF0aWMgIWltcG9ydGFudH19Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVye2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDozNjBweDttYXgtd2lkdGg6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMCk7cG9pbnRlci1ldmVudHM6bm9uZX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9we2luc2V0OjAgYXV0byBhdXRvIDUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e2luc2V0OjAgMCBhdXRvIGF1dG99Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1zdGFydCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnR7aW5zZXQ6MCBhdXRvIGF1dG8gMH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdHtpbnNldDo1MCUgYXV0byBhdXRvIDA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlcntpbnNldDo1MCUgYXV0byBhdXRvIDUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsIC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7aW5zZXQ6NTAlIDAgYXV0byBhdXRvO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0e2luc2V0OmF1dG8gYXV0byAwIDB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXtpbnNldDphdXRvIGF1dG8gMCA1MCU7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHtpbnNldDphdXRvIDAgMCBhdXRvfVwiKTsiLCIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDmrKHmlbDphY3liJfjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBEZWdyZWVTZXF1ZW5jZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSBbXTtcbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX5b2i5byP44Gu5paH5a2X5YiX5Y+W5b6XXG4gICAgZ2V0QXJyYXlTdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlLmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgLy8g44Op44Oz44Os44Oz44Kw44K55Zyn57iu5b2i5byP44Gu5paH5a2X5YiX5Y+W5b6XXG4gICAgZ2V0UnVuTGVuZ3RoU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0VG9SdW5MZW5ndGgodGhpcy5zZXF1ZW5jZSk7XG4gICAgfVxuICAgIC8vIOWFpeWKm+aWh+Wtl+OBi+OCiemFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xuICAgIHNldFZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgICAgIHRoaXMuc2VxdWVuY2UgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmdldERlZ3JlZSgpKTtcbiAgICAgICAgdGhpcy5zZXF1ZW5jZS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gICAgfVxuICAgIC8vIOWFpeWKm+aWh+Wtl+OBi+OCiemFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIGxldCBjbGVhbmVkVmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgLnJlcGxhY2UoLyhbLCpdKVxcMSsvZywgXCIkMVwiKSAvLyDpgKPntprjgZnjgovjgqvjg7Pjg57jgoTjgqLjgrnjgr/jg6rjgrnjgq/jgpLkuIDjgaTjgavjgZnjgotcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bLCpdJC8sIFwiXCIpOyAvLyDmnIDlvozjga7jgqvjg7Pjg57jgoTjgqLjgrnjgr/jg6rjgrnjgq/jgpLliYrpmaRcbiAgICAgICAgLy8g5paH5a2X5YiX44KS6YWN5YiX44Gr5aSJ5o+bXG4gICAgICAgIGlmIChjbGVhbmVkVmFsdWUuaW5jbHVkZXMoXCIqXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5ydW5MZW5ndGhTdHJpbmdUb1NlcXVlbmNlKGNsZWFuZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlcXVlbmNlID0gdGhpcy5hcnJheVN0cmluZ1RvU2VxdWVuY2UoY2xlYW5lZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgr3jg7zjg4hcbiAgICAgICAgdGhpcy5zZXF1ZW5jZS5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG4gICAgfVxuICAgIC8vIOODqeODs+ODrOODs+OCsOOCueWcp+e4ruW9ouW8j+OBruaWh+Wtl+WIl+OCkumFjeWIl+OBq+WkieaPm1xuICAgIHJ1bkxlbmd0aFN0cmluZ1RvU2VxdWVuY2UoaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnNwbGl0KFwiLFwiKS5yZWR1Y2UoKGFjYywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCBjb3VudF0gPSBwYXJ0LnNwbGl0KFwiKlwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgIGlmIChjb3VudCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaVsOOBjDDjgafjgarjgYTloLTlkIjjga7jgb/ov73liqBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX5b2i5byP44Gu5paH5a2X5YiX44KS6YWN5YiX44Gr5aSJ5o+bXG4gICAgYXJyYXlTdHJpbmdUb1NlcXVlbmNlKGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dFxuICAgICAgICAgICAgLnNwbGl0KFwiLFwiKVxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gXCJcIilcbiAgICAgICAgICAgIC5tYXAoTnVtYmVyKTtcbiAgICB9XG4gICAgLy8g44Op44Oz44Os44Oz44Kw44K55Zyn57iu5b2i5byP44Gu5paH5a2X5YiX44Gr5aSJ5o+bXG4gICAgY29udmVydFRvUnVuTGVuZ3RoKHNlcXVlbmNlKSB7XG4gICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgLy8g6ZmN6aCG44Gr44K944O844OIXG4gICAgICAgIHNlcXVlbmNlLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudCA9IHNlcXVlbmNlWzBdO1xuICAgICAgICBsZXQgY291bnQgPSAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc2VxdWVuY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcXVlbmNlW2ldID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke2N1cnJlbnR9KiR7Y291bnR9YCk7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IHRoaXMuc2VxdWVuY2VbaV07XG4gICAgICAgICAgICAgICAgY291bnQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOacgOW+jOOBruimgee0oOOCkui/veWKoFxuICAgICAgICByZXN1bHQucHVzaChgJHtjdXJyZW50fSoke2NvdW50fWApO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgLy8g5qW15aSn5bmz6Z2i44Kw44Op44OV44GL44Gp44GG44GL44KS5qSc6Ki8XG4gICAgaXNNYXhpbWFsUGxhbmFyR3JhcGgoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkRGVncmVlU2VxdWVuY2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLnNlcXVlbmNlLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG90YWxEZWdyZWUgPSB0aGlzLnNlcXVlbmNlLnJlZHVjZSgoc3VtLCBkZWdyZWUpID0+IHN1bSArIGRlZ3JlZSwgMCk7XG4gICAgICAgIGNvbnN0IGV4cGVjdGVkRWRnZXMgPSAzICogbiAtIDY7XG4gICAgICAgIGlmIChuIDwgMylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHRvdGFsRGVncmVlICE9PSAyICogZXhwZWN0ZWRFZGdlcylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIOODj+ODmeODq+ODu+ODj+OCreODn+OBruWumueQhuOCkueUqOOBhOOBpuasoeaVsOmFjeWIl+OBjOOCsOODqeODleOBq+OBquOCi+OBi+ODgeOCp+ODg+OCr1xuICAgIGlzVmFsaWREZWdyZWVTZXF1ZW5jZSgpIHtcbiAgICAgICAgbGV0IGRlZ3JlZXMgPSBbLi4udGhpcy5zZXF1ZW5jZV0uc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuICAgICAgICB3aGlsZSAoZGVncmVlcy5sZW5ndGggPiAwICYmIGRlZ3JlZXNbMF0gPiAwKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3QgPSBkZWdyZWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoZmlyc3QgPiBkZWdyZWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3Q7IGkrKykge1xuICAgICAgICAgICAgICAgIGRlZ3JlZXNbaV0tLTtcbiAgICAgICAgICAgICAgICBpZiAoZGVncmVlc1tpXSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZ3JlZXMgPSBkZWdyZWVzLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVncmVlcy5ldmVyeSgoZGVncmVlKSA9PiBkZWdyZWUgPT09IDApO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERlZ3JlZVNlcXVlbmNlIH0gZnJvbSBcIi4vRGVncmVlU2VxdWVuY2UgXCI7XG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSBcIi4vb2JqZWN0L0NvbnRyb2xcIjtcbmltcG9ydCB7IEVkZ2UgfSBmcm9tIFwiLi9vYmplY3QvRWRnZVwiO1xuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSBcIi4vb2JqZWN0L1ZlcnRleFwiO1xuaW1wb3J0IHsgTW91c2VCdXR0b24sIFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOOCsOODqeODleOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIEdyYXBoTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCB1cGRhdGVEZWdyZWVTZXF1ZW5jZSwgdXBkYXRlSW5mbykge1xuICAgICAgICB0aGlzLk1BWF9DQU5WQVNfV0lEVEggPSAyMDAwMDtcbiAgICAgICAgdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCA9IDEwMDAwO1xuICAgICAgICAvLyDjgrDjg6rjg4Pjg4nooajnpLrnirbmhYtcbiAgICAgICAgdGhpcy5zaG93R3JpZCA9IHRydWU7XG4gICAgICAgIC8vIOWKm+aMh+WQkeODouODvOODiVxuICAgICAgICB0aGlzLmZvcmNlRGlyZWN0TW9kZSA9IHRydWU7XG4gICAgICAgIC8vIOODnuOCpuOCueS9jee9rlxuICAgICAgICB0aGlzLm1vdXNlID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIC8vIOOCquODluOCuOOCp+OCr+ODiOeuoeeQhlxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcbiAgICAgICAgLy8g44Kq44OW44K444Kn44Kv44OI5pON5L2cXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWZXJ0ZXggPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlRWRnZSA9IG51bGw7XG4gICAgICAgIC8vIOOCuuODvOODoOapn+iDvemWoumAo1xuICAgICAgICB0aGlzLm9yaWdpbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy56b29tTGV2ZWxzID0gWzAuMSwgMC4yLCAwLjMsIDAuNCwgMC41LCAwLjYsIDAuNywgMC44LCAwLjksIDEuMCwgMS4xLCAxLjIsIDEuMywgMS40LCAxLjUsIDEuNzUsIDIuMCwgMi41LCAzLjAsIDMuNSwgNC4wXTtcbiAgICAgICAgdGhpcy5jdXJyZW50Wm9vbUluZGV4ID0gMTA7IC8vIOWIneacn+WApCAxMDAlXG4gICAgICAgIC8vIOODkeODs+apn+iDvVxuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sYXN0UG9zID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIC8vIOmggueCueaDheWgseihqOekulxuICAgICAgICB0aGlzLnNob3dJbmRleCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dEZWdyZWUgPSBmYWxzZTtcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICAvLyDlipvmjIflkJHjgqLjg6vjgrTjg6rjgrrjg6BcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICB0aGlzLmludGVydmFsSWQgPSBudWxsO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGVncmVlcyA9IG5ldyBEZWdyZWVTZXF1ZW5jZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlID0gdXBkYXRlRGVncmVlU2VxdWVuY2U7XG4gICAgICAgIHRoaXMudXBkYXRlSW5mbyA9IHVwZGF0ZUluZm87XG4gICAgICAgIHRoaXMuc2V0dXBFdmVudHMoKTtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCpOODmeODs+ODiOWHpueQhlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjgqTjg5njg7Pjg4jnmbvpjLJcbiAgICBzZXR1cEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIHRoaXMuaGFuZGxlRG91YmxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5oYW5kbGVNb3VzZU1vdmUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCB0aGlzLmhhbmRsZU1vdXNlT3V0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLmhhbmRsZU1vdXNlVXAuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCB0aGlzLmhhbmRsZUNvbnRleHRNZW51LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5oYW5kbGVXaGVlbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5yZXNpemVDYW52YXMuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2hhbmdlRm9yY2VEaXJlY3RNb2RlKHRoaXMuZm9yY2VEaXJlY3RNb2RlKTtcbiAgICB9XG4gICAgLy8g44OA44OW44Or44Kv44Oq44OD44KvXG4gICAgaGFuZGxlRG91YmxlQ2xpY2soZSkge1xuICAgICAgICB0aGlzLm1vdXNlID0gdGhpcy5nZXRNb3VzZVBvc2l0aW9uKGUpO1xuICAgICAgICB0aGlzLmFkZFZlcnRleCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSk7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOODnuOCpuOCueODoOODvOODllxuICAgIGhhbmRsZU1vdXNlTW92ZShlKSB7XG4gICAgICAgIHRoaXMubW91c2UgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG4gICAgICAgIC8vIOmggueCueOBi+WItuW+oeeCueOBruenu+WLlVxuICAgICAgICBpZiAodGhpcy5kcmFnZ2luZ1BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQueCA9IHRoaXMubW91c2UueDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludC55ID0gdGhpcy5tb3VzZS55O1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJtb3ZlXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8g44Kt44Oj44Oz44OQ44K544Gu56e75YuVXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgY29uc3QgZHggPSBlLmNsaWVudFggLSB0aGlzLmxhc3RQb3MueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZS5jbGllbnRZIC0gdGhpcy5sYXN0UG9zLnk7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbi54ICs9IGR4O1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueSArPSBkeTtcbiAgICAgICAgICAgIC8vIOenu+WLleWItumZkFxuICAgICAgICAgICAgdGhpcy5saW1pdENhbnZhc1BhbigpO1xuICAgICAgICAgICAgdGhpcy5sYXN0UG9zLnggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueSA9IGUuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICAvLyDpoILngrnpgbjmip7muIjjgb/jga7loLTlkIhcbiAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZFZlcnRleCkge1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJjcm9zc2hhaXJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOi+uuOBrui/keOBj+OBruWgtOWQiFxuICAgICAgICAgICAgY29uc3QgZWRnZSA9IFV0aWxzLmZpbmRFZGdlQXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMuZWRnZXMpO1xuICAgICAgICAgICAgZWRnZSAmJiAodGhpcy5hY3RpdmVFZGdlID0gZWRnZSk7XG4gICAgICAgICAgICAvLyDpoILngrnjgYvliLblvqHngrnjga7ov5HjgY/jga7loLTlkIhcbiAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gVXRpbHMuZmluZFBvaW50QXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMudmVydGljZXMsIHRoaXMuZWRnZXMpO1xuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gcG9pbnQgPyBcIm1vdmVcIiA6IFwiZGVmYXVsdFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOODnuOCpuOCueOCouOCpuODiFxuICAgIGhhbmRsZU1vdXNlT3V0KGUpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIHRoaXMuaGFuZGxlTW91c2VVcChlKTtcbiAgICB9XG4gICAgLy8g44Oe44Km44K544OA44Km44OzXG4gICAgaGFuZGxlTW91c2VEb3duKGUpIHtcbiAgICAgICAgLy8g5bem44Kv44Oq44OD44Kv5Lul5aSW44Gv5Yem55CG44Gq44GXXG4gICAgICAgIGlmIChlLmJ1dHRvbiAhPT0gTW91c2VCdXR0b24uTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91c2UgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IFV0aWxzLmZpbmRWZXJ0ZXhBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy52ZXJ0aWNlcyk7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBVdGlscy5maW5kRWRnZUF0KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IFV0aWxzLmZpbmRDb250cm9sQXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMuZWRnZXMpO1xuICAgICAgICAvLyDliKTlrprjga7jgZ/jgoHkuIDmmYLpgIDpgb9cbiAgICAgICAgY29uc3QgdGVtcFNlbGVjdGVkVmVydGV4ID0gdGhpcy5zZWxlY3RlZFZlcnRleDtcbiAgICAgICAgLy8g6YG45oqe54q25oWL44Gu5Yid5pyf5YyWXG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdGVkKCk7XG4gICAgICAgIC8vIOmggueCueOBruWgtOWQiFxuICAgICAgICBpZiAodmVydGV4KSB7XG4gICAgICAgICAgICBpZiAodGVtcFNlbGVjdGVkVmVydGV4KSB7XG4gICAgICAgICAgICAgICAgLy8g6YG45oqe5riI44G/6aCC54K544Go44CB55Ww44Gq44KL6aCC54K544GM5Y+W5b6X44Gn44GN44Gf5aC05ZCIXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBTZWxlY3RlZFZlcnRleCAhPT0gdmVydGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZSh0ZW1wU2VsZWN0ZWRWZXJ0ZXgsIHZlcnRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6aCC54K544KS6YG45oqe5riI44G/44Gr44GZ44KLXG4gICAgICAgICAgICB2ZXJ0ZXguaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmVydGV4ID0gdmVydGV4O1xuICAgICAgICAgICAgLy8g44Kr44O844K944Or44KS6YG45oqe55So44Gr5aSJ5pu0XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgICAgICAgLy8g44OJ44Op44OD44Kw6ZaL5aeLXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yi25b6h54K544Gu5aC05ZCIXG4gICAgICAgIGVsc2UgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIC8vIOODieODqeODg+OCsOmWi+Wni1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50ID0gY29udHJvbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDovrrjga7loLTlkIhcbiAgICAgICAgZWxzZSBpZiAoZWRnZSkge1xuICAgICAgICAgICAgLy8g6L6644KS6YG45oqe5riI44G/44Gr44GZ44KLXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IGVkZ2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7pgbjmip5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0UG9zLnggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueSA9IGUuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjgqLjg4Pjg5dcbiAgICBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdQb2ludCBpbnN0YW5jZW9mIENvbnRyb2wpIHtcbiAgICAgICAgICAgIC8vIOODkOOCpuODs+ODh+OCo+ODs+OCsOODnOODg+OCr+OCueOBruWGjeeul+WHulxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDlj7Pjgq/jg6rjg4Pjgq9cbiAgICBoYW5kbGVDb250ZXh0TWVudShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gVXRpbHMuZmluZFZlcnRleEF0KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCB0aGlzLnZlcnRpY2VzKTtcbiAgICAgICAgY29uc3QgZWRnZSA9IFV0aWxzLmZpbmRFZGdlQXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMuZWRnZXMpO1xuICAgICAgICAvLyDpgbjmip7nirbmhYvjga7liJ3mnJ/ljJZcbiAgICAgICAgdGhpcy5pbml0U2VsZWN0ZWQoKTtcbiAgICAgICAgLy8g5YmK6Zmk5Yem55CGXG4gICAgICAgIGlmICh2ZXJ0ZXgpIHtcbiAgICAgICAgICAgIC8vIOmggueCueOCkuWJiumZpFxuICAgICAgICAgICAgdGhpcy5kZWxldGVWZXJ0ZXgodmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlZGdlKSB7XG4gICAgICAgICAgICAvLyDovrrjgpLliYrpmaRcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjg5vjgqTjg7zjg6tcbiAgICBoYW5kbGVXaGVlbChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgLy8g44K644O844Og44Os44OZ44Or44Gu5pu05pawXG4gICAgICAgIGlmIChlLmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAgIC8vIOOCuuODvOODoOOCpOODs1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Wm9vbUluZGV4ID0gTWF0aC5taW4odGhpcy5jdXJyZW50Wm9vbUluZGV4ICsgMSwgdGhpcy56b29tTGV2ZWxzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g44K644O844Og44Ki44Km44OIXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRab29tSW5kZXggLSAxLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmlrDjgZfjgYTjgrnjgrHjg7zjg6vjgpLlj5blvpfjgZfjgIHjgrnjgrHjg7zjg6vjgYzlpInmm7TjgZXjgozjgZ/jgYvnorroqo1cbiAgICAgICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnpvb21MZXZlbHNbdGhpcy5jdXJyZW50Wm9vbUluZGV4XTtcbiAgICAgICAgaWYgKG5ld1NjYWxlICE9PSB0aGlzLnNjYWxlKSB7XG4gICAgICAgICAgICAvLyDjg57jgqbjgrnkvY3nva7jgpLjgrrjg7zjg6DjgqTjg7PjgIHjgrrjg7zjg6DjgqLjgqbjg4jjgZnjgotcbiAgICAgICAgICAgIC8vIHNjYWxl44Gu44Kt44Oj44Oz44OQ44K544Gu44Oe44Km44K55L2N572u44Gu5Ymy5ZCI44Go44CBbmV3U2NhbGXjga7jgq3jg6Pjg7Pjg5Djgrnjga7jg57jgqbjgrnkvY3nva7jga7libLlkIjjgYzlkIzjgZjjgZ/jgoHkuIvoqJjjga7lvI/jgYzmiJDjgornq4vjgaRcbiAgICAgICAgICAgIC8vIChtb3VzZSArIG9yaWdpbiAvIHNjYWxlKSAvIChjYW52YXMgLyBzY2FsZSkgPSAobW91c2UgKyBuZXdPcmlnaW4gLyBuZXdTY2FsZSkgLyAoY2FudmFzIC8gbmV3U2NhbGUpXG4gICAgICAgICAgICAvLyDjgZPjgozjgpIgbmV3T3JpZ2luIOOBq+OBpOOBhOOBpuino+OBj+OBqOOAgeasoeOBrumAmuOCiuOBq+OBquOCi1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueCA9IHRoaXMubW91c2UueCAqICh0aGlzLnNjYWxlIC0gbmV3U2NhbGUpICsgdGhpcy5vcmlnaW4ueDtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLm1vdXNlLnkgKiAodGhpcy5zY2FsZSAtIG5ld1NjYWxlKSArIHRoaXMub3JpZ2luLnk7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gbmV3U2NhbGU7XG4gICAgICAgICAgICAvLyDnp7vli5XliLbpmZBcbiAgICAgICAgICAgIHRoaXMubGltaXRDYW52YXNQYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5Yem55CG6Zai5pWwXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODnuOCpuOCueS9jee9ruOCkuWPluW+l+OBmeOCi1xuICAgIGdldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gdGhpcy5vcmlnaW4ueCkgLyB0aGlzLnNjYWxlO1xuICAgICAgICBjb25zdCB5ID0gKGUuY2xpZW50WSAtIHJlY3QudG9wIC0gdGhpcy5vcmlnaW4ueSkgLyB0aGlzLnNjYWxlO1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfVxuICAgIC8vIOmBuOaKnueKtuaFi+OCkuWIneacn+WMluOBmeOCi1xuICAgIGluaXRTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZlcnRleCAmJiAodGhpcy5zZWxlY3RlZFZlcnRleC5pc1NlbGVjdGVkID0gZmFsc2UpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmVydGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVkZ2UgJiYgKHRoaXMuc2VsZWN0ZWRFZGdlLmlzU2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfVxuICAgIC8vIOmggueCueOCkui/veWKoOOBmeOCi1xuICAgIGFkZFZlcnRleCh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzKTtcbiAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9XG4gICAgLy8g6aCC54K544KS5YmK6Zmk44GZ44KLXG4gICAgZGVsZXRlVmVydGV4KHZlcnRleCkge1xuICAgICAgICAvLyDpoILngrnjgpLliYrpmaRcbiAgICAgICAgdGhpcy52ZXJ0aWNlcy5zcGxpY2UodGhpcy52ZXJ0aWNlcy5pbmRleE9mKHZlcnRleCksIDEpO1xuICAgICAgICAvLyDpoILngrnjgavmjqXntprjgZXjgozjgZ/ovrrjgpLlj5blvpdcbiAgICAgICAgY29uc3QgZGVsZXRlRWRnZXMgPSB0aGlzLmVkZ2VzLmZpbHRlcigoZWRnZSkgPT4gZWRnZS5mcm9tID09PSB2ZXJ0ZXggfHwgZWRnZS50byA9PT0gdmVydGV4KTtcbiAgICAgICAgLy8g6L6644KS5YmK6ZmkXG4gICAgICAgIGRlbGV0ZUVkZ2VzLmZvckVhY2goKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMpO1xuICAgIH1cbiAgICAvLyDovrrjgpLov73liqDjgZnjgotcbiAgICBhZGRFZGdlKGZyb20sIHRvKSB7XG4gICAgICAgIC8vIOeVsOOBquOCi++8kumggueCueOBi++8n1xuICAgICAgICBpZiAoZnJvbSAmJiB0byAmJiBmcm9tICE9PSB0bykge1xuICAgICAgICAgICAgLy8g6YeN6KSH6L6644KS5Y+W5b6XXG4gICAgICAgICAgICBjb25zdCBkdXBsaWNhdGVFZGdlID0gdGhpcy5lZGdlcy5maW5kKChlZGdlKSA9PiAoZWRnZS5mcm9tID09PSBmcm9tICYmIGVkZ2UudG8gPT09IHRvKSB8fCAoZWRnZS5mcm9tID09PSB0byAmJiBlZGdlLnRvID09PSBmcm9tKSk7XG4gICAgICAgICAgICAvLyDph43opIfovrrjga/liYrpmaRcbiAgICAgICAgICAgIGlmIChkdXBsaWNhdGVFZGdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFZGdlKGR1cGxpY2F0ZUVkZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5paw44GX44GE6L6644KS6L+95YqgXG4gICAgICAgICAgICBjb25zdCBlZGdlID0gbmV3IEVkZ2UoZnJvbSwgdG8pO1xuICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgICAgICAgICAgLy8g5qyh5pWw6YWN5YiX44Gu5pu05pawXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMpO1xuICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vIOi+uuOCkuWJiumZpOOBmeOCi1xuICAgIGRlbGV0ZUVkZ2UoZWRnZSkge1xuICAgICAgICAvLyDovrrjgavmjqXntprjgZfjgabjgYTjgovpoILngrnjgYvjgonjgIHovrrjgpLliYrpmaRcbiAgICAgICAgZWRnZS5mcm9tLmRlbGV0ZUVkZ2UoZWRnZSk7XG4gICAgICAgIGVkZ2UudG8uZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgLy8g6L6644Kq44OW44K444Kn44Kv44OI6YWN5YiX44GL44KJ44CB6L6644KS5YmK6ZmkXG4gICAgICAgIHRoaXMuZWRnZXMgPSB0aGlzLmVkZ2VzLmZpbHRlcigodGVtcEVkZ2UpID0+IHRlbXBFZGdlICE9PSBlZGdlKTtcbiAgICAgICAgLy8g5qyh5pWw6YWN5YiX44Gu5pu05pawXG4gICAgICAgIHRoaXMudXBkYXRlRGVncmVlU2VxdWVuY2UodGhpcy52ZXJ0aWNlcyk7XG4gICAgfVxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruenu+WLleWItumZkFxuICAgIGxpbWl0Q2FudmFzUGFuKCkge1xuICAgICAgICBjb25zdCBtYXhYID0gdGhpcy5NQVhfQ0FOVkFTX1dJRFRIICogdGhpcy5zY2FsZSAtIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBtYXhZID0gdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAqIHRoaXMuc2NhbGUgLSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMub3JpZ2luLnggPSB0aGlzLm9yaWdpbi54ICsgbWF4WCA8IDAgPyAtbWF4WCA6IHRoaXMub3JpZ2luLng7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLm9yaWdpbi55ICsgbWF4WSA8IDAgPyAtbWF4WSA6IHRoaXMub3JpZ2luLnk7XG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAwIDwgdGhpcy5vcmlnaW4ueCA/IDAgOiB0aGlzLm9yaWdpbi54O1xuICAgICAgICB0aGlzLm9yaWdpbi55ID0gMCA8IHRoaXMub3JpZ2luLnkgPyAwIDogdGhpcy5vcmlnaW4ueTtcbiAgICB9XG4gICAgLy8g44Oq44K144Kk44K6XG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC44O1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA5MDtcbiAgICAgICAgLy8g5Lit5b+D44KS5Yid5pyf5o+P55S75L2N572u44Gr44GZ44KLXG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAodGhpcy5NQVhfQ0FOVkFTX1dJRFRIIC0gdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLnNjYWxlKSAvIDI7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSAodGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAtIHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMuc2NhbGUpIC8gMjtcbiAgICAgICAgLy8g5bqn5qiZ44KS44OU44Kv44K744Or44Gr5aSJ5o+b44GX44CB5YCk44KS44Oe44Kk44OK44K55aSJ5o+b44KS44GZ44KL77yIb3JpZ2lu44Gu5LuV5qeY77yJXG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAtdGhpcy5vcmlnaW4ueCAqIHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSAtdGhpcy5vcmlnaW4ueSAqIHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOOCsOODqeODleOBruWIneacn+WMllxuICAgIGluaXRHcmFwaCgpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSAxMDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVFZGdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICB9XG4gICAgLy8g6aCC54K55oOF5aCx44Gu6KGo56S65YiH44KK5pu/44GIXG4gICAgZHJhd1ZlcnRleEluZm8oc2hvd0luZGV4LCBzaG93RGVncmVlKSB7XG4gICAgICAgIHRoaXMuc2hvd0luZGV4ID0gc2hvd0luZGV4O1xuICAgICAgICB0aGlzLnNob3dEZWdyZWUgPSBzaG93RGVncmVlO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDovrrjgpLjgZnjgbnjgabnm7Tnt5rjgavjgZnjgotcbiAgICBzdHJhaWdodGVuRWRnZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGVkZ2Ugb2YgdGhpcy5lZGdlcykge1xuICAgICAgICAgICAgZWRnZS5zdHJhaWdodGVuRWRnZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMpO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5o+P55S75Yem55CGXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCsOODquODg+ODieOBruaPj+eUu1xuICAgIGRyYXdHcmlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvd0dyaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmlkU2l6ZSA9IDEwMDtcbiAgICAgICAgY29uc3QgZ3JpZENvdW50WCA9IE1hdGguY2VpbCh0aGlzLk1BWF9DQU5WQVNfV0lEVEggLyBncmlkU2l6ZSk7XG4gICAgICAgIGNvbnN0IGdyaWRDb3VudFkgPSBNYXRoLmNlaWwodGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAvIGdyaWRTaXplKTtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI2UwZTBlMFwiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAvLyDjgrDjg6rjg4Pjg4nnt5rjgpLmj4/nlLtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZ3JpZENvdW50WDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gaSAqIGdyaWRTaXplO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBncmlkQ291bnRZOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBqICogZ3JpZFNpemU7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB5KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLk1BWF9DQU5WQVNfV0lEVEgsIHkpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICAvLyDjgrDjg6njg5Xmj4/nlLtcbiAgICBkcmF3R3JhcGgoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xuICAgICAgICAvLyDjgrDjg6rjg4Pjg4njga7mj4/nlLtcbiAgICAgICAgdGhpcy5kcmF3R3JpZCgpO1xuICAgICAgICAvLyDlipvmjIflkJHjg6Ljg7zjg4njgavjgojjgaPjgabovrrjga7mj4/nlLvjgpLliIfjgormm7/jgYjjgotcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VEaXJlY3RNb2RlKSB7XG4gICAgICAgICAgICAvLyDovrrjga7mj4/nlLtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZWRnZS5kcmF3KHRoaXMuY3R4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDovrrjga7mj4/nlLtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZWRnZS5kcmF3QmV6aWVyKHRoaXMuY3R4KSk7XG4gICAgICAgICAgICAvLyDliLblvqHngrnjga7mj4/nlLtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRWRnZSAmJiB0aGlzLmFjdGl2ZUVkZ2UuY29udHJvbC5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludCBpbnN0YW5jZW9mIENvbnRyb2wgJiYgdGhpcy5kcmFnZ2luZ1BvaW50LmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmggueCueOBruaPj+eUu1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHZlcnRleC5kcmF3KHRoaXMuY3R4LCB0aGlzLnNob3dJbmRleCwgaW5kZXgsIHRoaXMuc2hvd0RlZ3JlZSkpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIC8vIOeUu+mdouS4iuOBruaDheWgseabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZUluZm8oe1xuICAgICAgICAgICAgdmVydGV4Q291bnQ6IHRoaXMudmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgZWRnZUNvdW50OiB0aGlzLmVkZ2VzLmxlbmd0aCxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOaDheWgseihqOekuu+8iOWAjeeOh+OBqOW6p+aome+8iVxuICAgICAgICB0aGlzLmN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMuY3R4LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMTZweCBTYW5zLXNlcmlmXCI7XG4gICAgICAgIGNvbnN0IHpvb21UZXh0ID0gYOWAjeeOhzogJHt0aGlzLnNjYWxlLnRvRml4ZWQoMil9eCAg5bqn5qiZOiAoJHt0aGlzLm1vdXNlLngudG9GaXhlZCgwKX0sICR7dGhpcy5tb3VzZS55LnRvRml4ZWQoMCl9KWA7XG4gICAgICAgIGNvbnN0IHpvb21UZXh0V2lkdGggPSB0aGlzLmN0eC5tZWFzdXJlVGV4dCh6b29tVGV4dCkud2lkdGg7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMzAsIHpvb21UZXh0V2lkdGggKyAyMCwgMzApO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KHpvb21UZXh0LCAxMCwgdGhpcy5jYW52YXMuaGVpZ2h0IC0gMTApO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIC8vIOWKm+aMh+WQkeODouODvOODieOBrk9OL09GRlxuICAgIGNoYW5nZUZvcmNlRGlyZWN0TW9kZShmb3JjZURpcmVjdE1vZGUpIHtcbiAgICAgICAgdGhpcy5mb3JjZURpcmVjdE1vZGUgPSBmb3JjZURpcmVjdE1vZGU7XG4gICAgICAgIGlmICh0aGlzLmZvcmNlRGlyZWN0TW9kZSkge1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRm9yY2VEaXJlY3RlZExheW91dCgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmludGVydmFsSWQpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElkKTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5Yqb5oyH5ZCR44Os44Kk44Ki44Km44OI44Gu5pu05pawXG4gICAgdXBkYXRlRm9yY2VEaXJlY3RlZExheW91dCgpIHtcbiAgICAgICAgLy8g5pal5YqbXG4gICAgICAgIGNvbnN0IHJlcHVsc2lvbkNvbnN0YW50ID0gMzAwMDA7XG4gICAgICAgIC8vIOW8leWKm1xuICAgICAgICBjb25zdCBhdHRyYWN0aW9uQ29uc3RhbnQgPSAxMDAwMDtcbiAgICAgICAgY29uc3QgbWF4RGlzcGxhY2VtZW50ID0gNTA7XG4gICAgICAgIGNvbnN0IG1pbkRpc3RhbmNlID0gMTA7XG4gICAgICAgIC8vIOWIneacn+WkieS9jeOCkjDjgafoqK3lrppcbiAgICAgICAgbGV0IGRpc3BsYWNlbWVudHMgPSB0aGlzLnZlcnRpY2VzLm1hcCgoKSA9PiAoeyB4OiAwLCB5OiAwIH0pKTtcbiAgICAgICAgLy8g5pal5YqbXG4gICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgoZnJvbSwgaSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh0bywgaikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR4ID0gZnJvbS54IC0gdG8ueDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHkgPSBmcm9tLnkgLSB0by55O1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IE1hdGgubWF4KGRpc3RhbmNlLCBtaW5EaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcmNlID0gcmVwdWxzaW9uQ29uc3RhbnQgLyAoZGlzdGFuY2UgKiBkaXN0YW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbaV0ueCArPSAoZHggLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxhY2VtZW50c1tpXS55ICs9IChkeSAvIGRpc3RhbmNlKSAqIGZvcmNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5byV5YqbXG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UuZnJvbSk7XG4gICAgICAgICAgICBjb25zdCB0b0luZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UudG8pO1xuICAgICAgICAgICAgY29uc3QgZHggPSBlZGdlLmZyb20ueCAtIGVkZ2UudG8ueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZWRnZS5mcm9tLnkgLSBlZGdlLnRvLnk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICBjb25zdCBmb3JjZSA9IChkaXN0YW5jZSAqIGRpc3RhbmNlKSAvIGF0dHJhY3Rpb25Db25zdGFudDtcbiAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbZnJvbUluZGV4XS54IC09IChkeCAvIGRpc3RhbmNlKSAqIGZvcmNlO1xuICAgICAgICAgICAgZGlzcGxhY2VtZW50c1tmcm9tSW5kZXhdLnkgLT0gKGR5IC8gZGlzdGFuY2UpICogZm9yY2U7XG4gICAgICAgICAgICBkaXNwbGFjZW1lbnRzW3RvSW5kZXhdLnggKz0gKGR4IC8gZGlzdGFuY2UpICogZm9yY2U7XG4gICAgICAgICAgICBkaXNwbGFjZW1lbnRzW3RvSW5kZXhdLnkgKz0gKGR5IC8gZGlzdGFuY2UpICogZm9yY2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDnp7vli5XluqfmqJnoqK3lrppcbiAgICAgICAgZGlzcGxhY2VtZW50cy5mb3JFYWNoKChkaXNwbGFjZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY2FsYXIgPSBNYXRoLnNxcnQoZGlzcGxhY2VtZW50LnggKiBkaXNwbGFjZW1lbnQueCArIGRpc3BsYWNlbWVudC55ICogZGlzcGxhY2VtZW50LnkpO1xuICAgICAgICAgICAgaWYgKHNjYWxhciA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW1pdGVkRGlzcFggPSAoZGlzcGxhY2VtZW50LnggLyBzY2FsYXIpICogTWF0aC5taW4oc2NhbGFyLCBtYXhEaXNwbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbWl0ZWREaXNwWSA9IChkaXNwbGFjZW1lbnQueSAvIHNjYWxhcikgKiBNYXRoLm1pbihzY2FsYXIsIG1heERpc3BsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1tpbmRleF0ueCArPSBNYXRoLnJvdW5kKGxpbWl0ZWREaXNwWCk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1tpbmRleF0ueSArPSBNYXRoLnJvdW5kKGxpbWl0ZWREaXNwWSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Ko44Kv44K544Od44O844OI77yP44Kk44Oz44Od44O844OI5Yem55CGXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCsOODqeODleOBrueKtuaFi+OCkkpTT07jgajjgZfjgabjgqjjgq/jgrnjg53jg7zjg4hcbiAgICBleHBvcnRUb0pzb24oKSB7XG4gICAgICAgIGNvbnN0IGV4cG9ydERhdGEgPSB7XG4gICAgICAgICAgICB2ZXJ0aWNlczogdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+ICh7XG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIHg6IHZlcnRleC54LFxuICAgICAgICAgICAgICAgIHk6IHZlcnRleC55LFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgZWRnZXM6IHRoaXMuZWRnZXMubWFwKChlZGdlKSA9PiAoe1xuICAgICAgICAgICAgICAgIGZyb206IHRoaXMudmVydGljZXMuaW5kZXhPZihlZGdlLmZyb20pLFxuICAgICAgICAgICAgICAgIHRvOiB0aGlzLnZlcnRpY2VzLmluZGV4T2YoZWRnZS50byksXG4gICAgICAgICAgICAgICAgY29udHJvbDoge1xuICAgICAgICAgICAgICAgICAgICB4OiBlZGdlLmNvbnRyb2wueCxcbiAgICAgICAgICAgICAgICAgICAgeTogZWRnZS5jb250cm9sLnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGV4cG9ydERhdGEpO1xuICAgIH1cbiAgICAvLyBKU09O44GL44KJ44Kw44Op44OV44Gu54q25oWL44KS44Kk44Oz44Od44O844OIXG4gICAgaW1wb3J0RnJvbUpzb24oanNvblN0cmluZykge1xuICAgICAgICBjb25zdCBpbXBvcnREYXRhID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IGltcG9ydERhdGEudmVydGljZXMubWFwKCh2RGF0YSkgPT4gbmV3IFZlcnRleCh2RGF0YS54LCB2RGF0YS55KSk7XG4gICAgICAgIHRoaXMuZWRnZXMgPSBpbXBvcnREYXRhLmVkZ2VzLm1hcCgoZURhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyb21WZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2VEYXRhLmZyb21dO1xuICAgICAgICAgICAgY29uc3QgdG9WZXJ0ZXggPSB0aGlzLnZlcnRpY2VzW2VEYXRhLnRvXTtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UgPSBuZXcgRWRnZShmcm9tVmVydGV4LCB0b1ZlcnRleCk7XG4gICAgICAgICAgICBlZGdlLmNvbnRyb2wueCA9IGVEYXRhLmNvbnRyb2wueDtcbiAgICAgICAgICAgIGVkZ2UuY29udHJvbC55ID0gZURhdGEuY29udHJvbC55O1xuICAgICAgICAgICAgcmV0dXJuIGVkZ2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzKTtcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1Bvc2l0aW9uXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDliLblvqHngrnjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBDb250cm9sIGV4dGVuZHMgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKGZyb20sIHRvLCBlZGdlKSB7XG4gICAgICAgIHN1cGVyKDAsIDApO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuZWRnZSA9IGVkZ2U7XG4gICAgICAgIC8vIOS4reeCueOBruW6p+aomeOBq+OBmeOCi1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgLy8g5Yid5pyf5YyWXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy54ID0gKHRoaXMuZnJvbS54ICsgdGhpcy50by54KSAvIDI7XG4gICAgICAgIHRoaXMueSA9ICh0aGlzLmZyb20ueSArIHRoaXMudG8ueSkgLyAyIC0gQ29udHJvbC5BREpVU1RfVklFVztcbiAgICB9XG4gICAgLy8g6KiI566X55So44Gu5Yi25b6h54K55bqn5qiZ77yI44Oa44K444Kn5puy57ea566X5Ye655So77yJXG4gICAgZ2V0Q2FsY1Bvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250cm9sWCA9IHRoaXMueDtcbiAgICAgICAgY29uc3QgY29udHJvbFkgPSB0aGlzLnkgKyBDb250cm9sLkFESlVTVF9WSUVXO1xuICAgICAgICBjb25zdCBtaWRwb2ludFggPSAodGhpcy5mcm9tLnggKyB0aGlzLnRvLngpIC8gMjtcbiAgICAgICAgY29uc3QgbWlkcG9pbnRZID0gKHRoaXMuZnJvbS55ICsgdGhpcy50by55KSAvIDI7XG4gICAgICAgIGNvbnN0IHggPSBtaWRwb2ludFggKyBDb250cm9sLklNUEFDVF9GQUNUT1IgKiAoY29udHJvbFggLSBtaWRwb2ludFgpO1xuICAgICAgICBjb25zdCB5ID0gbWlkcG9pbnRZICsgQ29udHJvbC5JTVBBQ1RfRkFDVE9SICogKGNvbnRyb2xZIC0gbWlkcG9pbnRZKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih4LCB5KTtcbiAgICB9XG4gICAgLy8g5o+P55S7XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG59XG4vLyDliLblvqHngrnnp7vli5Xjga7lvbHpn7/lgI3njodcbkNvbnRyb2wuSU1QQUNUX0ZBQ1RPUiA9IDM7XG4vLyDliLblvqHngrnjga7ooajnpLrkvY3nva7oqr/mlbRcbkNvbnRyb2wuQURKVVNUX1ZJRVcgPSAyMDtcbiIsImltcG9ydCB7IENvbnRyb2wgfSBmcm9tIFwiLi9Db250cm9sXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1Bvc2l0aW9uXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDovrrjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBFZGdlIHtcbiAgICBjb25zdHJ1Y3Rvcihmcm9tLCB0bykge1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sKGZyb20sIHRvLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIC8vIOmggueCueOBq+i+uuOCkui/veWKoOOBmeOCi1xuICAgICAgICB0aGlzLmZyb20uYWRkRWRnZSh0aGlzKTtcbiAgICAgICAgdGhpcy50by5hZGRFZGdlKHRoaXMpO1xuICAgIH1cbiAgICAvLyDovrrjgpLnm7Tnt5rjgavjgZnjgotcbiAgICBzdHJhaWdodGVuRWRnZSgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLmluaXQoKTtcbiAgICB9XG4gICAgLy8g56+E5Zuy5YaF44GLXG4gICAgaXNOZWFyKG1vdXNlWCwgbW91c2VZLCB0b2xlcmFuY2UgPSAxMCkge1xuICAgICAgICBjb25zdCBjYWxjUG9zaXRpb24gPSB0aGlzLmNvbnRyb2wuZ2V0Q2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIC8vIOODmeOCuOOCp+absue3muOCkuWIhuWJsuOBl+OBpui/keS8vFxuICAgICAgICBjb25zdCBzZWdtZW50ID0gMTA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0MSA9IGkgLyBzZWdtZW50O1xuICAgICAgICAgICAgY29uc3QgdDIgPSAoaSArIDEpIC8gc2VnbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHAxID0gdGhpcy5nZXRCZXppZXJQb3NpdGlvbih0MSwgY2FsY1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gdGhpcy5nZXRCZXppZXJQb3NpdGlvbih0MiwgY2FsY1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50VG9TZWdtZW50RGlzdGFuY2UobW91c2VYLCBtb3VzZVksIHAxLngsIHAxLnksIHAyLngsIHAyLnkpIDwgdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDjg5rjgrjjgqfmm7Lnt5rjga7liIblibLngrlcbiAgICBnZXRCZXppZXJQb3NpdGlvbih0LCBjYWxjUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgeCA9ICgxIC0gdCkgKiAoMSAtIHQpICogdGhpcy5mcm9tLnggKyAyICogKDEgLSB0KSAqIHQgKiBjYWxjUG9zaXRpb24ueCArIHQgKiB0ICogdGhpcy50by54O1xuICAgICAgICBjb25zdCB5ID0gKDEgLSB0KSAqICgxIC0gdCkgKiB0aGlzLmZyb20ueSArIDIgKiAoMSAtIHQpICogdCAqIGNhbGNQb3NpdGlvbi55ICsgdCAqIHQgKiB0aGlzLnRvLnk7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuICAgIC8vIOeCueOBqOebtOe3muOBrui3nembolxuICAgIHBvaW50VG9TZWdtZW50RGlzdGFuY2UocHgsIHB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICBjb25zdCBkeCA9IHgyIC0geDE7XG4gICAgICAgIGNvbnN0IGR5ID0geTIgLSB5MTtcbiAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KChweCAtIHgxKSwgMikgKyBNYXRoLnBvdygocHkgLSB5MSksIDIpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ID0gKChweCAtIHgxKSAqIGR4ICsgKHB5IC0geTEpICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgY29uc3QgdENsYW1wZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSk7XG4gICAgICAgIGNvbnN0IG5lYXJlc3RYID0geDEgKyB0Q2xhbXBlZCAqIGR4O1xuICAgICAgICBjb25zdCBuZWFyZXN0WSA9IHkxICsgdENsYW1wZWQgKiBkeTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdygocHggLSBuZWFyZXN0WCksIDIpICsgTWF0aC5wb3coKHB5IC0gbmVhcmVzdFkpLCAyKSk7XG4gICAgfVxuICAgIC8vIOaPj+eUu1xuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmZyb20ueCwgdGhpcy5mcm9tLnkpO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMudG8ueCwgdGhpcy50by55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5pc1NlbGVjdGVkID8gXCJyZWRcIiA6IFwicmdiYSgxMzUsIDIwNiwgMjUwLCAwLjg1KVwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmNvbnRyb2wuaW5pdCgpO1xuICAgIH1cbiAgICAvLyDmj4/nlLvvvIjjg5rjgrjjgqfmm7Lnt5rvvIlcbiAgICBkcmF3QmV6aWVyKGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5mcm9tLngsIHRoaXMuZnJvbS55KTtcbiAgICAgICAgLy8g5LqM5qyh44OZ44K444Kn5puy57eaXG4gICAgICAgIGNvbnN0IGNhbGNQb3NpdGlvbiA9IHRoaXMuY29udHJvbC5nZXRDYWxjUG9zaXRpb24oKTtcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oY2FsY1Bvc2l0aW9uLngsIGNhbGNQb3NpdGlvbi55LCB0aGlzLnRvLngsIHRoaXMudG8ueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuaXNTZWxlY3RlZCA/IFwicmVkXCIgOiBcInJnYmEoMTM1LCAyMDYsIDI1MCwgMC44NSlcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vUG9zaXRpb25cIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOeCueOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIFBvaW50IGV4dGVuZHMgUG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNDtcbiAgICB9XG4gICAgLy8g56+E5Zuy5YaF44GLXG4gICAgaXNOZWFyKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguaHlwb3QodGhpcy54IC0geCwgdGhpcy55IC0geSkgPCB0aGlzLnJhZGl1cyAqIDI7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5L2N572u44Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh4KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh5KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL1BvaW50XCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDpoILngrnjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBWZXJ0ZXggZXh0ZW5kcyBQb2ludCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcbiAgICB9XG4gICAgLy8g6L6644KS6L+95YqgXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICB9XG4gICAgLy8g6L6644KS5YmK6ZmkXG4gICAgZGVsZXRlRWRnZShlZGdlKSB7XG4gICAgICAgIHRoaXMuZWRnZXMgPSB0aGlzLmVkZ2VzLmZpbHRlcigodGVtcEVkZ2UpID0+IHRlbXBFZGdlICE9PSBlZGdlKTtcbiAgICB9XG4gICAgLy8g5qyh5pWw5Y+W5b6XXG4gICAgZ2V0RGVncmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlcy5sZW5ndGg7XG4gICAgfVxuICAgIC8vIOaPj+eUu1xuICAgIGRyYXcoY3R4LCBzaG93SW5kZXgsIGluZGV4LCBzaG93RGVncmVlKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDEwMCwgMTUwLCAxKVwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmlzU2VsZWN0ZWQgPyBcInJlZFwiIDogXCJyZ2JhKDEzNSwgMjA2LCAyNTAsIDAuODUpXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIOmggueCueaDheWgseOBruihqOekulxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZm9udCA9IFwiMTJweCBTYW5zLXNlcmlmXCI7XG4gICAgICAgIGlmIChzaG93SW5kZXgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgSW5kZXg6ICR7aW5kZXggKyAxfWAsIHRoaXMueCArIHRoaXMucmFkaXVzICsgNSwgdGhpcy55IC0gdGhpcy5yYWRpdXMgLSA1KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0RlZ3JlZSkge1xuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGBEZWdyZWU6ICR7dGhpcy5nZXREZWdyZWUoKX1gLCB0aGlzLnggKyB0aGlzLnJhZGl1cyArIDUsIHRoaXMueSAtIHRoaXMucmFkaXVzICsgMTUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFN3YWwgZnJvbSBcInN3ZWV0YWxlcnQyXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDliJfmjJnkvZNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOODnuOCpuOCueODnOOCv+ODs+OBruWIl+aMmeS9k1xuZXhwb3J0IHZhciBNb3VzZUJ1dHRvbjtcbihmdW5jdGlvbiAoTW91c2VCdXR0b24pIHtcbiAgICBNb3VzZUJ1dHRvbltNb3VzZUJ1dHRvbltcIkxlZnRcIl0gPSAwXSA9IFwiTGVmdFwiO1xuICAgIE1vdXNlQnV0dG9uW01vdXNlQnV0dG9uW1wiTWlkZGxlXCJdID0gMV0gPSBcIk1pZGRsZVwiO1xuICAgIE1vdXNlQnV0dG9uW01vdXNlQnV0dG9uW1wiUmlnaHRcIl0gPSAyXSA9IFwiUmlnaHRcIjtcbn0pKE1vdXNlQnV0dG9uIHx8IChNb3VzZUJ1dHRvbiA9IHt9KSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgLy8g56K66KqN44OA44Kk44Ki44Ot44Kw44KS6KGo56S644GX44Gm44Ki44Kv44K344On44Oz44KS5a6f6KGMXG4gICAgc3RhdGljIGNvbmZpcm1BY3Rpb24obWVzc2FnZSwgYWN0aW9uKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogXCLnorroqo1cIixcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwi44Gv44GE44CB5a6f6KGM44GX44G+44GZXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIuOBhOOBhOOBiFwiLFxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOS9jee9ruOBq+i/keOBhOeCueOCkuWPluW+l+OBmeOCi1xuICAgIHN0YXRpYyBmaW5kUG9pbnRBdCh4LCB5LCB2ZXJ0aWNlcywgZWRnZXMpIHtcbiAgICAgICAgLy8g6aCC54K544KS5qSc57SiXG4gICAgICAgIGxldCBwb2ludCA9IFV0aWxzLmZpbmRWZXJ0ZXhBdCh4LCB5LCB2ZXJ0aWNlcyk7XG4gICAgICAgIC8vIOimi+OBpOOBi+OCieOBquOBhOWgtOWQiFxuICAgICAgICBpZiAocG9pbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8g5Yi25b6h54K544KS5qSc57SiXG4gICAgICAgICAgICBwb2ludCA9IFV0aWxzLmZpbmRDb250cm9sQXQoeCwgeSwgZWRnZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG4gICAgLy8g5L2N572u44Gr6L+R44GE6aCC54K544KS5Y+W5b6X44GZ44KLXG4gICAgc3RhdGljIGZpbmRWZXJ0ZXhBdCh4LCB5LCB2ZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBmb3VuZFZlcnRleCA9IHZlcnRpY2VzLmZpbmQoKHZlcnRleCkgPT4gdmVydGV4LmlzTmVhcih4LCB5KSk7XG4gICAgICAgIHJldHVybiBmb3VuZFZlcnRleCA/IGZvdW5kVmVydGV4IDogbnVsbDtcbiAgICB9XG4gICAgLy8g5L2N572u44Gr6L+R44GE5Yi25b6h54K544KS5Y+W5b6X44GZ44KLXG4gICAgc3RhdGljIGZpbmRDb250cm9sQXQoeCwgeSwgZWRnZXMpIHtcbiAgICAgICAgY29uc3QgZm91bmRDb250cm9sID0gZWRnZXMuZmluZCgoZWRnZSkgPT4gZWRnZS5jb250cm9sLmlzTmVhcih4LCB5KSk7XG4gICAgICAgIHJldHVybiBmb3VuZENvbnRyb2wgPyBmb3VuZENvbnRyb2wuY29udHJvbCA6IG51bGw7XG4gICAgfVxuICAgIC8vIOS9jee9ruOBq+i/keOBhOi+uuOCkuWPluW+l+OBmeOCi1xuICAgIHN0YXRpYyBmaW5kRWRnZUF0KHgsIHksIGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kRWRnZSA9IGVkZ2VzLmZpbmQoKGVkZ2UpID0+IGVkZ2UuaXNOZWFyKHgsIHkpKTtcbiAgICAgICAgcmV0dXJuIGZvdW5kRWRnZSA/IGZvdW5kRWRnZSA6IG51bGw7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuaW1wb3J0IHsgR3JhcGhNYW5hZ2VyIH0gZnJvbSBcIi4vR3JhcGhNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVdGlscyB9IGZyb20gXCIuL3V0aWxzXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIVE1M6aCF55uu6Zai6YCj5Yem55CGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzZXR1cCk7XG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5qyh5pWw6YWN5YiXXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybWF0VG9nZ2xlXCIpO1xuICAgIGNvbnN0IGRlZ3JlZXNJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVncmVlU2VxdWVuY2VJbnB1dFwiKTtcbiAgICBjb25zdCBhcHBseUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwbHlEZWdyZWVTZXF1ZW5jZVwiKTtcbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUZvcm1hdCk7XG4gICAgZGVncmVlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBpbnB1dERlZ3JlZVNlcXVlbmNlKTtcbiAgICBkZWdyZWVzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgYmx1ckRlZ3JlZVNlcXVlbmNlKTtcbiAgICBhcHBseUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBwbHlEZWdyZWVTZXF1ZW5jZSk7XG4gICAgLy8g44OI44Kw44Or44Oc44K/44Oz44Gu54q25oWLOiDliJ3mnJ/lgKTjga/jgIzmrKHmlbDphY3liJfjgI3jgajjgZnjgotcbiAgICBsZXQgaXNEZWdyZWVBcnJheSA9IHRydWU7XG4gICAgLy8g44OI44Kw44Or44Oc44K/44Oz44GM5YiH44KK5pu/44KP44Gj44Gf5pmC44Gu5Yem55CGXG4gICAgZnVuY3Rpb24gdG9nZ2xlRm9ybWF0KGUpIHtcbiAgICAgICAgaXNEZWdyZWVBcnJheSA9ICFpc0RlZ3JlZUFycmF5O1xuICAgICAgICBpZiAoaXNEZWdyZWVBcnJheSkge1xuICAgICAgICAgICAgdG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gXCLmrKHmlbDphY3liJdcIjtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC5wbGFjZWhvbGRlciA9IFwi5L6LOiA0LDQsNCwzLDNcIjtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGdyYXBoTWFuYWdlci5kZWdyZWVzLmdldEFycmF5U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0b2dnbGVCdXR0b24udGV4dENvbnRlbnQgPSBcIuODqeODs+ODrOODs+OCsOOCueWcp+e4rlwiO1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LnBsYWNlaG9sZGVyID0gXCLkvos6IDQqMywzKjJcIjtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGdyYXBoTWFuYWdlci5kZWdyZWVzLmdldFJ1bkxlbmd0aFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+WFpeWKm+ashOOBq+WFpeWKm+OBl+OBn+aZguOBruWHpueQhlxuICAgIGZ1bmN0aW9uIGlucHV0RGVncmVlU2VxdWVuY2UoZSkge1xuICAgICAgICBpZiAoaXNEZWdyZWVBcnJheSkge1xuICAgICAgICAgICAgLy8g5pWw5a2X44CB44Kr44Oz44Oe44KS6Kix5a65XG4gICAgICAgICAgICBjb25zdCBjbGVhbmVkVmFsdWUgPSBkZWdyZWVzSW5wdXQudmFsdWUucmVwbGFjZSgvW14wLTksXS9nLCBcIlwiKTtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGNsZWFuZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOaVsOWtl+OAgeOCq+ODs+ODnuOAgeOCouOCueOCv+ODquOCueOCr+OCkuioseWuuVxuICAgICAgICAgICAgY29uc3QgY2xlYW5lZFZhbHVlID0gZGVncmVlc0lucHV0LnZhbHVlLnJlcGxhY2UoL1teMC05LCpdL2csIFwiXCIpO1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gY2xlYW5lZFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+WFpeWKm+ashOOBruODreOCueODiOODleOCqeODvOOCq+OCueaZguOBruWHpueQhlxuICAgIGZ1bmN0aW9uIGJsdXJEZWdyZWVTZXF1ZW5jZShlKSB7XG4gICAgICAgIGdyYXBoTWFuYWdlci5kZWdyZWVzLnNldFZhbHVlKGRlZ3JlZXNJbnB1dC52YWx1ZSk7XG4gICAgICAgIC8vIOWApOOBruioreWumlxuICAgICAgICBpZiAoaXNEZWdyZWVBcnJheSkge1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZ3JhcGhNYW5hZ2VyLmRlZ3JlZXMuZ2V0QXJyYXlTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGdyYXBoTWFuYWdlci5kZWdyZWVzLmdldFJ1bkxlbmd0aFN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOalteWkp+W5s+mdouOCsOODqeODleOBruaknOiovFxuICAgICAgICBpZiAoIWdyYXBoTWFuYWdlci5kZWdyZWVzLmlzTWF4aW1hbFBsYW5hckdyYXBoKCkpIHtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmFsaWRcIik7XG4gICAgICAgICAgICBhcHBseUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQuY2xhc3NMaXN0LmFkZChcImlzLXZhbGlkXCIpO1xuICAgICAgICAgICAgYXBwbHlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDpgannlKjjg5zjgr/jg7PjgYzmirzjgZXjgozjgZ/mmYLjga7lh6bnkIZcbiAgICBmdW5jdGlvbiBhcHBseURlZ3JlZVNlcXVlbmNlKGUpIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udHJvbFwiKTtcbiAgICAgICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWFpeWKm+OBleOCjOOBn+aVsOW8jzpcIiwgaW5wdXRWYWx1ZSk7XG4gICAgICAgIC8vIOOBk+OBk+OBq+aVsOW8j+OCkuino+aekOOBl+OBpuOCsOODqeODleOCkuaPj+eUu+OBmeOCi+ODreOCuOODg+OCr+OCkui/veWKoFxuICAgIH1cbiAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICBmdW5jdGlvbiB1cGRhdGVEZWdyZWVTZXF1ZW5jZSh2ZXJ0aWNlcykge1xuICAgICAgICBncmFwaE1hbmFnZXIuZGVncmVlcy5zZXRWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgICAgIGlmIChpc0RlZ3JlZUFycmF5KSB7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBncmFwaE1hbmFnZXIuZGVncmVlcy5nZXRBcnJheVN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZ3JhcGhNYW5hZ2VyLmRlZ3JlZXMuZ2V0UnVuTGVuZ3RoU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODl+ODreODkeODhuOCo+OCqOODquOColxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCBpbml0R3JhcGhCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluaXRHcmFwaEJ1dHRvblwiKTtcbiAgICBjb25zdCB2ZXJ0ZXhEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJ0ZXhEaXNwbGF5XCIpO1xuICAgIGNvbnN0IGVkZ2VEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGdlRGlzcGxheVwiKTtcbiAgICBjb25zdCBpc01heEdyYXBoRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaXNNYXhHcmFwaERpc3BsYXlcIik7XG4gICAgY29uc3QgbWF4R3JhcGhFZGdlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4R3JhcGhFZGdlRGlzcGxheVwiKTtcbiAgICBjb25zdCBzaG93SW5kZXhDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0luZGV4Q2hlY2tib3hcIik7XG4gICAgY29uc3Qgc2hvd0RlZ3JlZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93RGVncmVlQ2hlY2tib3hcIik7XG4gICAgY29uc3QgY2hhbmdlRm9yY2VEaXJlY3RNb2RlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGFuZ2VGb3JjZURpcmVjdE1vZGVCdXR0b25cIik7XG4gICAgY29uc3Qgc3RyYWlnaHRlbkVkZ2VzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdHJhaWdodGVuRWRnZXNCdXR0b25cIik7XG4gICAgaW5pdEdyYXBoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0R3JhcGgpO1xuICAgIHNob3dJbmRleENoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgc2hvd0luZGV4KTtcbiAgICBzaG93RGVncmVlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzaG93RGVncmVlKTtcbiAgICBjaGFuZ2VGb3JjZURpcmVjdE1vZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZUZvcmNlRGlyZWN0TW9kZSk7XG4gICAgc3RyYWlnaHRlbkVkZ2VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdHJhaWdodGVuRWRnZXMpO1xuICAgIC8vIOOCsOODqeODleOBruWIneacn+WMllxuICAgIGZ1bmN0aW9uIGluaXRHcmFwaChlKSB7XG4gICAgICAgIFV0aWxzLmNvbmZpcm1BY3Rpb24oXCLjgrDjg6njg5XjgYzliJ3mnJ/ljJbjgZXjgozjgb7jgZnjgYzjgojjgo3jgZfjgYTjgafjgZnjgYvvvJ9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgZ3JhcGhNYW5hZ2VyLmluaXRHcmFwaCgpO1xuICAgICAgICAgICAgU3dhbC5maXJlKFwi5a6f6KGM5a6M5LqGIVwiLCBcIuOCsOODqeODleOBjOWIneacn+WMluOBleOCjOOBvuOBl+OBn+OAglwiLCBcInN1Y2Nlc3NcIik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmg4XloLHjga7mm7TmlrBcbiAgICBmdW5jdGlvbiB1cGRhdGVJbmZvKGluZm8pIHtcbiAgICAgICAgdmVydGV4RGlzcGxheS50ZXh0Q29udGVudCA9IGDpoILngrnjga7mlbA6ICR7aW5mby52ZXJ0ZXhDb3VudH1gO1xuICAgICAgICBlZGdlRGlzcGxheS50ZXh0Q29udGVudCA9IGDovrrjga7mlbA6ICR7aW5mby5lZGdlQ291bnR9YDtcbiAgICAgICAgaWYgKGluZm8udmVydGV4Q291bnQgPCAzKSB7XG4gICAgICAgICAgICBpc01heEdyYXBoRGlzcGxheS50ZXh0Q29udGVudCA9IFwiIC0gXCI7XG4gICAgICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gXCIgLSBcIjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDmpbXlpKflubPpnaLjgrDjg6njg5XliKTlrprvvIggM1YgLSBFID0gNiDvvIlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gMyAqIGluZm8udmVydGV4Q291bnQgLSBpbmZvLmVkZ2VDb3VudDtcbiAgICAgICAgaWYgKHJlc3VsdCA+IDYpIHtcbiAgICAgICAgICAgIGlzTWF4R3JhcGhEaXNwbGF5LnRleHRDb250ZW50ID0gYOalteWkp+W5s+mdouOCsOODqeODleOBizogTk9gO1xuICAgICAgICAgICAgbWF4R3JhcGhFZGdlRGlzcGxheS50ZXh0Q29udGVudCA9IGDovrrjga7mlbDjgYwgJHtyZXN1bHQgLSA2fSDotrPjgorjgb7jgZvjgpNgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3VsdCA9PSA2KSB7XG4gICAgICAgICAgICBpc01heEdyYXBoRGlzcGxheS50ZXh0Q29udGVudCA9IGDmpbXlpKflubPpnaLjgrDjg6njg5XjgYs6IFlFU2A7XG4gICAgICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gYCAtIGA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpc01heEdyYXBoRGlzcGxheS50ZXh0Q29udGVudCA9IGDmpbXlpKflubPpnaLjgrDjg6njg5XjgYs6IOmdnuW5s+mdomA7XG4gICAgICAgICAgICBtYXhHcmFwaEVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gYOi+uuOBruaVsOOBjCAkezYgLSByZXN1bHR9IOWkmuOBhOOBp+OBmWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6aCC54K555Wq5Y+344KS6KGo56S6XG4gICAgZnVuY3Rpb24gc2hvd0luZGV4KGUpIHtcbiAgICAgICAgZ3JhcGhNYW5hZ2VyLmRyYXdWZXJ0ZXhJbmZvKHNob3dJbmRleENoZWNrYm94LmNoZWNrZWQsIHNob3dEZWdyZWVDaGVja2JveC5jaGVja2VkKTtcbiAgICB9XG4gICAgLy8g5qyh5pWw44KS6KGo56S6XG4gICAgZnVuY3Rpb24gc2hvd0RlZ3JlZShlKSB7XG4gICAgICAgIGdyYXBoTWFuYWdlci5kcmF3VmVydGV4SW5mbyhzaG93SW5kZXhDaGVja2JveC5jaGVja2VkLCBzaG93RGVncmVlQ2hlY2tib3guY2hlY2tlZCk7XG4gICAgfVxuICAgIGxldCBmb3JjZURpcmVjdE1vZGUgPSB0cnVlO1xuICAgIC8vIOWKm+aMh+WQkeODouODvOODieOCkuWIh+OCiuabv+OBiOOCi1xuICAgIGZ1bmN0aW9uIGNoYW5nZUZvcmNlRGlyZWN0TW9kZShlKSB7XG4gICAgICAgIGZvcmNlRGlyZWN0TW9kZSA9ICFmb3JjZURpcmVjdE1vZGU7XG4gICAgICAgIGdyYXBoTWFuYWdlci5jaGFuZ2VGb3JjZURpcmVjdE1vZGUoZm9yY2VEaXJlY3RNb2RlKTtcbiAgICAgICAgaWYgKGZvcmNlRGlyZWN0TW9kZSkge1xuICAgICAgICAgICAgY2hhbmdlRm9yY2VEaXJlY3RNb2RlQnV0dG9uLnRleHRDb250ZW50ID0gXCLjg5rjgrjjgqfmm7Lnt5rjg6Ljg7zjg4njgavjgZnjgotcIjtcbiAgICAgICAgICAgIHN0cmFpZ2h0ZW5FZGdlc0J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VGb3JjZURpcmVjdE1vZGVCdXR0b24udGV4dENvbnRlbnQgPSBcIuWKm+aMh+WQkeODouODvOODieOBq+OBmeOCi1wiO1xuICAgICAgICAgICAgc3RyYWlnaHRlbkVkZ2VzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g44GZ44G544Gm44Gu6L6644KS55u057ea44Gr44GZ44KLXG4gICAgZnVuY3Rpb24gc3RyYWlnaHRlbkVkZ2VzKGUpIHtcbiAgICAgICAgVXRpbHMuY29uZmlybUFjdGlvbihcIuOBmeOBueOBpuOBrui+uuOBjOebtOe3muOBq+OBquOCiuOBvuOBmeOBjOOCiOOCjeOBl+OBhOOBp+OBmeOBi++8n1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBncmFwaE1hbmFnZXIuc3RyYWlnaHRlbkVkZ2VzKCk7XG4gICAgICAgICAgICBTd2FsLmZpcmUoXCLlrp/ooYzlrozkuoYhXCIsIFwi44GZ44G544Gm44Gu6L6644GM55u057ea44Gr44Gq44KK44G+44GX44Gf44CCXCIsIFwic3VjY2Vzc1wiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjgqjjgq/jgrnjg53jg7zjg4jvvI/jgqTjg7Pjg53jg7zjg4jlh6bnkIZcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgZXhwb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBvcnRCdXR0b25cIik7XG4gICAgY29uc3QgaW1wb3J0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRCdXR0b25cIik7XG4gICAgY29uc3QgaW1wb3J0RmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRGaWxlSW5wdXRcIik7XG4gICAgZXhwb3J0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBleHBvcnRKc29uKTtcbiAgICBpbXBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwbG9hZEpzb24pO1xuICAgIGltcG9ydEZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGltcG9ydEpzb24pO1xuICAgIC8vIOOCqOOCr+OCueODneODvOODiOODnOOCv+ODs+OBjOaKvOS4i+OBleOCjOOBn+OCieOAgeOCqOOCr+OCueODneODvOODiOOBmeOCi1xuICAgIGZ1bmN0aW9uIGV4cG9ydEpzb24oZSkge1xuICAgICAgICAvLyDjg4fjg7zjgr/lj5blvpdcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBncmFwaE1hbmFnZXIuZXhwb3J0VG9Kc29uKCk7XG4gICAgICAgIC8vIOODleOCoeOCpOODq+WQjVxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkgKyAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKSArIChcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMikgKyBcIl9cIiArIChcIjBcIiArIGRhdGUuZ2V0SG91cnMoKSkuc2xpY2UoLTIpICsgKFwiMFwiICsgZGF0ZS5nZXRNaW51dGVzKCkpLnNsaWNlKC0yKSArIChcIjBcIiArIGRhdGUuZ2V0U2Vjb25kcygpKS5zbGljZSgtMik7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gYGdyYXBoLWRhdGFfJHt0aW1lc3RhbXB9Lmpzb25gO1xuICAgICAgICAvLyDjg4Djgqbjg7Pjg63jg7zjg4lVUkxcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtqc29uRGF0YV0sIHsgdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSk7XG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIC8vIOODquODs+OCr+OCkuODl+ODreOCsOODqeODoOeahOOBq+OCr+ODquODg+OCr+OBl+OBpuODgOOCpuODs+ODreODvOODieOCkuWun+ihjFxuICAgICAgICBhLmNsaWNrKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XG4gICAgICAgIC8vIOS9nOaIkOOBl+OBn1VSTOOCkuino+aUvlxuICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XG4gICAgfVxuICAgIC8vIOODnOOCv+ODs+OBjOOCr+ODquODg+OCr+OBleOCjOOBn+OCieOAgeODleOCoeOCpOODq+WFpeWKm+OCkuODiOODquOCrOODvOOBmeOCi1xuICAgIGZ1bmN0aW9uIHVwbG9hZEpzb24oKSB7XG4gICAgICAgIGltcG9ydEZpbGVJbnB1dC5jbGljaygpO1xuICAgIH1cbiAgICAvLyDjg5XjgqHjgqTjg6vjgYzlhaXlipvjgZXjgozjgZ/jgonjgIHjgqTjg7Pjg53jg7zjg4jjgZnjgotcbiAgICBmdW5jdGlvbiBpbXBvcnRKc29uKGUpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyDoqq3jgb/ovrzjgpPjgaBKU09O44OH44O844K/44Gn44Kw44Op44OV44KS44Kk44Oz44Od44O844OIXG4gICAgICAgICAgICAgICAgZ3JhcGhNYW5hZ2VyLmltcG9ydEZyb21Kc29uKGNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIC8vIOODleOCoeOCpOODq+WFpeWKm+OCkuODquOCu+ODg+ODiFxuICAgICAgICAgICAgICAgIGltcG9ydEZpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODoeOCpOODs+WHpueQhlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoQ2FudmFzXCIpO1xuICAgIGNvbnN0IGdyYXBoTWFuYWdlciA9IG5ldyBHcmFwaE1hbmFnZXIoY2FudmFzLCB1cGRhdGVEZWdyZWVTZXF1ZW5jZSwgdXBkYXRlSW5mbyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
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

/***/ "./src/AdjacencyMatrix.ts":
/*!********************************!*\
  !*** ./src/AdjacencyMatrix.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdjacencyMatrix: () => (/* binding */ AdjacencyMatrix)
/* harmony export */ });
/* harmony import */ var _object_Edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object/Edge */ "./src/object/Edge.ts");
/* harmony import */ var _object_Vertex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/Vertex */ "./src/object/Vertex.ts");


// ============================================================================
// 隣接行列クラス
// ============================================================================
class AdjacencyMatrix {
    constructor(arg1, arg2) {
        // 隣接行列
        this.matrix = null;
        // k3,3探索結果
        this.resultK33 = null;
        // k5探索結果
        this.resultK5 = null;
        if (arg1 === null) {
            throw new Error("Null argument passed to the constructor");
        }
        else if (Array.isArray(arg1) && arg1.every((item) => typeof item === "number") && arg2 === undefined) {
            this.matrix = this.generateMatrix(arg1);
        }
        else if (Array.isArray(arg1) && arg1.every((item) => item instanceof _object_Vertex__WEBPACK_IMPORTED_MODULE_1__.Vertex) && Array.isArray(arg2) && arg2.every((item) => item instanceof _object_Edge__WEBPACK_IMPORTED_MODULE_0__.Edge)) {
            this.matrix = this.convertMatrix(arg1, arg2);
        }
        else {
            throw new Error("Invalid arguments passed to the constructor");
        }
        // K3,3
        this.resultK33 = this.searchK33();
        // K5
        this.resultK5 = this.searchK5();
    }
    // 隣接行列を取得する
    getMatrix() {
        return this.matrix;
    }
    // K33の探索結果を取得する
    getResultK33() {
        return this.resultK33;
    }
    // K5の探索結果を取得する
    getResultK5() {
        return this.resultK5;
    }
    // 描画可能化か
    isGraphical() {
        return this.matrix !== null;
    }
    // K33が存在するか
    hasK33() {
        return this.matrix !== null && this.resultK33 !== null;
    }
    // K5が存在するか
    hasK5() {
        return this.matrix !== null && this.resultK5 !== null;
    }
    // 平面グラフか
    isPlanarGraph() {
        return this.matrix !== null && this.resultK33 === null && this.resultK5 === null;
    }
    // 頂点オブジェクト配列から、隣接行列に変換
    convertMatrix(vertices, edges) {
        // 頂点の数に基づいて、初期値が0の隣接行列を生成
        const adjacencyMatrix = vertices.map(() => Array(vertices.length).fill(0));
        // 全ての辺に対して処理を実行
        edges.forEach((edge) => {
            const toIndex = vertices.indexOf(edge.to);
            const fromIndex = vertices.indexOf(edge.from);
            // 無向グラフの場合、対称性を保つために両方向に1を設定
            adjacencyMatrix[fromIndex][toIndex] = 1;
            adjacencyMatrix[toIndex][fromIndex] = 1;
        });
        return adjacencyMatrix;
    }
    // 次数配列から、隣接行列を生成する
    // ハベル・ハキミの定理を参考にしたが、引数の次数配列順で実行する
    // これにより、次数配列の順序が異なると結果も異なる
    generateMatrix(degreeSequence) {
        // 隣接行列の初期化: 全ての要素を0で埋めたn x nの行列を作成
        const n = degreeSequence.length;
        const matrix = degreeSequence.map(() => new Array(n).fill(0));
        // 残次数を格納する配列
        const remainingDegrees = [...degreeSequence];
        // 頂点インデックス配列を生成
        const connections = Array.from({ length: n }, (_, index) => index);
        // 各頂点に対して接続していく
        for (let i = 0; i < n; i++) {
            if (remainingDegrees[i] > 0) {
                // 残り次数が最大でかつインデックスが小さい順に接続対象をソート
                connections.sort((a, b) => {
                    if (remainingDegrees[a] === remainingDegrees[b])
                        return a - b;
                    return remainingDegrees[b] - remainingDegrees[a];
                });
                let attempts = remainingDegrees[i];
                for (let j = 0, k = 0; k < attempts && j < n; j++) {
                    const connIndex = connections[j];
                    // 自分自身を除く、残り次数が正の頂点と接続
                    if (i !== connIndex && remainingDegrees[connIndex] > 0 && matrix[i][connIndex] === 0) {
                        matrix[i][connIndex] = 1;
                        matrix[connIndex][i] = 1;
                        remainingDegrees[connIndex]--;
                        remainingDegrees[i]--;
                        k++;
                    }
                }
                // 接続対象が足りない場合は実現不可能
                if (remainingDegrees[i] > 0) {
                    return null;
                }
            }
        }
        // 生成された隣接行列を返す
        return matrix;
    }
    // K3,3を探索して、存在する場合は、K3,3を構成するindex配列を取得する
    searchK33() {
        // 隣接行列化できてない場合は、判定対象外
        if (!this.matrix) {
            return null;
        }
        // 頂点数６未満は、判定対象外
        const n = this.matrix.length;
        if (n < 6) {
            return null;
        }
        // 隣接行列をコピーする
        const matrix = this.matrix.map((row) => row.slice());
        // 3つの異なる行を選択するすべての組み合わせを試す
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    // 論理積の結果
                    const result = [];
                    let count = 0;
                    for (let x = 0; x < n; x++) {
                        if (matrix[i][x] && matrix[j][x] && matrix[k][x]) {
                            result.push(x);
                            count++;
                        }
                        // K3,3判定
                        if (count === 3) {
                            return [[i, j, k], result];
                        }
                    }
                }
            }
        }
        // K3,3が見つからなかった
        return null;
    }
    // K5を探索して、存在する場合は、K5を構成するindex配列を取得する
    searchK5() {
        // 隣接行列化できてない場合は、判定対象外
        if (!this.matrix) {
            return null;
        }
        const n = this.matrix.length;
        // 頂点数５未満は、判定対象外
        if (n < 5) {
            return null;
        }
        // 隣接行列をコピーし、対角を1にする
        const matrix = this.matrix.map((row, index) => {
            const newRow = row.slice();
            newRow[index] = 1;
            return newRow;
        });
        // 5つの行の組み合わせを生成してチェック
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    for (let l = k + 1; l < n; l++) {
                        for (let m = l + 1; m < n; m++) {
                            // 論理積の結果
                            const result = [];
                            let count = 0;
                            for (let x = 0; x < n; x++) {
                                if (matrix[i][x] && matrix[j][x] && matrix[k][x] && matrix[l][x] && matrix[m][x]) {
                                    result.push(x);
                                    count++;
                                }
                                // K5判定
                                if (count === 5) {
                                    return [i, j, k, l, m];
                                }
                            }
                        }
                    }
                }
            }
        }
        // K5が見つからなかった
        return null;
    }
}


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
/* harmony import */ var _AdjacencyMatrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdjacencyMatrix */ "./src/AdjacencyMatrix.ts");

// ============================================================================
// 次数配列クラス
// ============================================================================
class DegreeSequence {
    constructor() {
        // 隣接行列
        this.adjacencyMatrix = null;
        this.sequence = [];
    }
    // 次数配列として有効か
    isValid() {
        // 最大次数は頂点数より小さい
        const maxDegree = Math.max(...this.sequence);
        if (!(maxDegree < this.vertexCount())) {
            return false;
        }
        // 次数合計が偶数である
        if (!(this.totalDegree() % 2 == 0)) {
            return false;
        }
        return true;
    }
    // 頂点の数を取得する
    vertexCount() {
        return this.sequence.length;
    }
    // 辺の数を取得する
    edgeCount() {
        return Math.floor(this.totalDegree() / 2);
    }
    // 次数合計を取得する
    totalDegree() {
        const initialValue = 0;
        return this.sequence.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    }
    // 次数配列形式の文字列取得
    getArrayString() {
        return this.sequence.join(", ");
    }
    // ランレングス圧縮形式の文字列取得
    getRunLengthString() {
        if (this.sequence.length === 0)
            return "";
        let result = [];
        let current = this.sequence[0];
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
    // 頂点オブジェクト配列から、次数配列にセットする
    setVertices(vertices, edges) {
        this.sequence = vertices.map((vertex) => vertex.getDegree());
        // 隣接行列
        this.adjacencyMatrix = new _AdjacencyMatrix__WEBPACK_IMPORTED_MODULE_0__.AdjacencyMatrix(vertices, edges);
    }
    // 入力文字から、次数配列にセットする
    setValue(value) {
        let cleanedValue = value
            // 連続するカンマやアスタリスクを一つにする
            .replace(/([,*])\1+/g, "$1")
            // 最後のカンマやアスタリスクを削除
            .replace(/[,*]$/, "");
        // 文字列を、次数配列に変換
        if (cleanedValue.includes("*")) {
            this.sequence = this.convertRunLengthStringToDegrees(cleanedValue);
        }
        else {
            this.sequence = this.convertArrayStringToDegrees(cleanedValue);
        }
    }
    // 次数配列から隣接行列を生成する
    generateAdjacencyMatrix() {
        // 隣接行列
        this.adjacencyMatrix = new _AdjacencyMatrix__WEBPACK_IMPORTED_MODULE_0__.AdjacencyMatrix(this.sequence);
        return this.adjacencyMatrix;
    }
    getAdjacencyMatrix() {
        return this.adjacencyMatrix;
    }
    // ランレングス圧縮形式の文字列から、次数配列に変換
    convertRunLengthStringToDegrees(input) {
        if (!input)
            return [];
        return input.split(",").reduce((acc, part) => {
            const [value, count] = part.split("*").map(Number);
            // 数が 0 でない場合のみ追加
            if (count !== 0) {
                for (let i = 0; i < count; i++) {
                    acc.push(value);
                }
            }
            return acc;
        }, []);
    }
    // 次数配列形式の文字列から、次数配列に変換
    convertArrayStringToDegrees(input) {
        return input
            .split(",")
            .filter((item) => item !== "")
            .map(Number);
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
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/simulation.js");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/link.js");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/manyBody.js");
/* harmony import */ var d3_force__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-force */ "./node_modules/d3-force/src/center.js");
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
        this.showIndex = true;
        this.showDegree = false;
        // ============================================================================
        // 力指向アルゴリズム
        // ============================================================================
        this.intervalId = null;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.degreeSequence = new _DegreeSequence___WEBPACK_IMPORTED_MODULE_0__.DegreeSequence();
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
        if (e.button !== _utils__WEBPACK_IMPORTED_MODULE_4__.MouseButtonEnum.Left) {
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
        this.updateDegreeSequence(this.vertices, this.edges);
        return vertex;
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
            this.updateDegreeSequence(this.vertices, this.edges);
            return edge;
        }
        return null;
    }
    // 頂点を削除する
    deleteVertex(vertex) {
        // 頂点を削除
        this.vertices.splice(this.vertices.indexOf(vertex), 1);
        // 頂点に接続された辺を削除
        vertex.edges.forEach((edge) => {
            edge.from.deleteEdge(edge);
            edge.to.deleteEdge(edge);
            // 辺オブジェクト配列から、辺を削除
            this.edges = this.edges.filter((item) => item !== edge);
        });
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
    }
    // 辺を削除する
    deleteEdge(edge) {
        // 辺に接続している頂点から、辺を削除
        edge.from.deleteEdge(edge);
        edge.to.deleteEdge(edge);
        // 辺オブジェクト配列から、辺を削除
        this.edges = this.edges.filter((item) => item !== edge);
        // 次数配列の更新
        this.updateDegreeSequence(this.vertices, this.edges);
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
        this.updateDegreeSequence(this.vertices, this.edges);
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
        this.updateDegreeSequence(this.vertices, this.edges);
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
            vertices: this.vertices,
            edges: this.edges,
            degreeSequence: this.degreeSequence,
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
        const repulsionConstant = 200;
        // 引力
        const attractionConstant = 200;
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
                    if (distance < repulsionConstant) {
                        distance = Math.max(distance, minDistance);
                        const force = repulsionConstant / distance;
                        displacements[i].x += (dx / distance) * force;
                        displacements[i].y += (dy / distance) * force;
                    }
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
            const force = distance / attractionConstant;
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
        this.updateDegreeSequence(this.vertices, this.edges);
        this.drawGraph();
    }
    // ============================================================================
    // グラフ生成
    // ============================================================================
    createGraphFromMatrix() {
        const adjacencyMatrix = this.degreeSequence.generateAdjacencyMatrix();
        if (!adjacencyMatrix) {
            return;
        }
        const matrix = adjacencyMatrix.getMatrix();
        if (!matrix) {
            return;
        }
        // キャンバスの中心座標を取得
        const centerX = this.MAX_CANVAS_WIDTH / 2;
        const centerY = this.MAX_CANVAS_HEIGHT / 2;
        // 力指向レイアウトを適用して頂点を配置
        this.vertices = this.applyForceDirectedLayout(matrix, centerX, centerY);
        this.edges = [];
        // 辺の作成
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    const newEdge = new _object_Edge__WEBPACK_IMPORTED_MODULE_2__.Edge(this.vertices[i], this.vertices[j]);
                    this.edges.push(newEdge);
                    this.vertices[i].addEdge(newEdge);
                    this.vertices[j].addEdge(newEdge);
                }
            }
        }
    }
    // 力指向レイアウト適用
    applyForceDirectedLayout(matrix, centerX, centerY) {
        const nodes = matrix.map((_, i) => ({ index: i }));
        const links = [];
        for (let i = 0; i < matrix.length; i++) {
            for (let j = i + 1; j < matrix[i].length; j++) {
                if (matrix[i][j] === 1) {
                    links.push({ source: i, target: j });
                }
            }
        }
        // 力指向アルゴリズムの設定
        let simulation = d3_force__WEBPACK_IMPORTED_MODULE_5__["default"](nodes);
        simulation.force("link", d3_force__WEBPACK_IMPORTED_MODULE_6__["default"](links).distance(50));
        simulation.force("charge", d3_force__WEBPACK_IMPORTED_MODULE_7__["default"]().strength(-100));
        simulation.force("center", d3_force__WEBPACK_IMPORTED_MODULE_8__["default"](centerX, centerY));
        simulation.stop();
        // シミュレーションの実行
        for (let i = 0; i < 100; i++)
            simulation.tick();
        // 頂点オブジェクトの生成
        return nodes.map((node) => new _object_Vertex__WEBPACK_IMPORTED_MODULE_3__.Vertex(node.x, node.y));
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
        // 重複辺を取得
        const duplicateEdge = this.edges.find((item) => (item.from === edge.from && item.to === edge.to) || (item.from === edge.to && item.to === edge.from));
        // 重複辺は削除
        if (duplicateEdge) {
            this.deleteEdge(duplicateEdge);
        }
        this.edges.push(edge);
    }
    // 辺を削除
    deleteEdge(edge) {
        this.edges = this.edges.filter((item) => item !== edge);
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
            ctx.fillText(`Index: ${index}`, this.x + this.radius + 5, this.y - this.radius - 5);
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
/* harmony export */   MouseButtonEnum: () => (/* binding */ MouseButtonEnum),
/* harmony export */   Utils: () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

// ============================================================================
// 列挙体
// ============================================================================
// マウスボタンの列挙体
var MouseButtonEnum;
(function (MouseButtonEnum) {
    MouseButtonEnum[MouseButtonEnum["Left"] = 0] = "Left";
    MouseButtonEnum[MouseButtonEnum["Middle"] = 1] = "Middle";
    MouseButtonEnum[MouseButtonEnum["Right"] = 2] = "Right";
})(MouseButtonEnum || (MouseButtonEnum = {}));
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


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dispatch);


/***/ }),

/***/ "./node_modules/d3-force/src/center.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/center.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  var nodes, strength = 1;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = (sx / n - x) * strength, sy = (sy / n - y) * strength, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  return force;
}


/***/ }),

/***/ "./node_modules/d3-force/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/constant.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/d3-force/src/jiggle.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-force/src/jiggle.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(random) {
  return (random() - 0.5) * 1e-6;
}


/***/ }),

/***/ "./node_modules/d3-force/src/lcg.js":
/*!******************************************!*\
  !*** ./node_modules/d3-force/src/lcg.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://en.wikipedia.org/wiki/Linear_congruential_generator#Parameters_in_common_use
const a = 1664525;
const c = 1013904223;
const m = 4294967296; // 2^32

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let s = 1;
  return () => (s = (a * s + c) % m) / m;
}


/***/ }),

/***/ "./node_modules/d3-force/src/link.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-force/src/link.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle.js */ "./node_modules/d3-force/src/jiggle.js");



function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("node not found: " + nodeId);
  return node;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(30),
      distances,
      nodes,
      count,
      bias,
      random,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        y = target.y + target.vy - source.y - source.vy || (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_1__["default"])(random);
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = new Map(nodes.map((d, i) => [id(d, i, nodes), d])),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeDistance(), force) : distance;
  };

  return force;
}


/***/ }),

/***/ "./node_modules/d3-force/src/manyBody.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-force/src/manyBody.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-quadtree */ "./node_modules/d3-quadtree/src/quadtree.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jiggle.js */ "./node_modules/d3-force/src/jiggle.js");
/* harmony import */ var _simulation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simulation.js */ "./node_modules/d3-force/src/simulation.js");





/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var nodes,
      node,
      random,
      alpha,
      strength = (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = (0,d3_quadtree__WEBPACK_IMPORTED_MODULE_1__["default"])(nodes, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.x, _simulation_js__WEBPACK_IMPORTED_MODULE_2__.y).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, weight = 0, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += x * x;
        if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += x * x;
      if (y === 0) y = (0,_jiggle_js__WEBPACK_IMPORTED_MODULE_3__["default"])(random), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_nodes, _random) {
    nodes = _nodes;
    random = _random;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : (0,_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
}


/***/ }),

/***/ "./node_modules/d3-force/src/simulation.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-force/src/simulation.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   x: () => (/* binding */ x),
/* harmony export */   y: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-timer */ "./node_modules/d3-timer/src/timer.js");
/* harmony import */ var _lcg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lcg.js */ "./node_modules/d3-force/src/lcg.js");




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = new Map(),
      stepper = (0,d3_timer__WEBPACK_IMPORTED_MODULE_0__.timer)(step),
      event = (0,d3_dispatch__WEBPACK_IMPORTED_MODULE_1__["default"])("tick", "end"),
      random = (0,_lcg_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick(iterations) {
    var i, n = nodes.length, node;

    if (iterations === undefined) iterations = 1;

    for (var k = 0; k < iterations; ++k) {
      alpha += (alphaTarget - alpha) * alphaDecay;

      forces.forEach(function(force) {
        force(alpha);
      });

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        if (node.fx == null) node.x += node.vx *= velocityDecay;
        else node.x = node.fx, node.vx = 0;
        if (node.fy == null) node.y += node.vy *= velocityDecay;
        else node.y = node.fy, node.vy = 0;
      }
    }

    return simulation;
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (node.fx != null) node.x = node.fx;
      if (node.fy != null) node.y = node.fy;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(0.5 + i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes, random);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.forEach(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    randomSource: function(_) {
      return arguments.length ? (random = _, forces.forEach(initializeForce), simulation) : random;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.delete(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/add.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-quadtree/src/add.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAll: () => (/* binding */ addAll),
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  const x = +this._x.call(null, d),
      y = +this._y.call(null, d);
  return add(this.cover(x, y), x, y, d);
}

function add(tree, x, y, d) {
  if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points

  var parent,
      node = tree._root,
      leaf = {data: d},
      x0 = tree._x0,
      y0 = tree._y0,
      x1 = tree._x1,
      y1 = tree._y1,
      xm,
      ym,
      xp,
      yp,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return tree._root = leaf, tree;

  // Find the existing leaf for the new point, or add it.
  while (node.length) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
  }

  // Is the new point is exactly coincident with the existing point?
  xp = +tree._x.call(null, node.data);
  yp = +tree._y.call(null, node.data);
  if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;

  // Otherwise, split the leaf node until the old and new point are separated.
  do {
    parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
  } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
  return parent[j] = node, parent[i] = leaf, tree;
}

function addAll(data) {
  var d, i, n = data.length,
      x,
      y,
      xz = new Array(n),
      yz = new Array(n),
      x0 = Infinity,
      y0 = Infinity,
      x1 = -Infinity,
      y1 = -Infinity;

  // Compute the points and their extent.
  for (i = 0; i < n; ++i) {
    if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
    xz[i] = x;
    yz[i] = y;
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }

  // If there were no (valid) points, abort.
  if (x0 > x1 || y0 > y1) return this;

  // Expand the tree to cover the new points.
  this.cover(x0, y0).cover(x1, y1);

  // Add the new points.
  for (i = 0; i < n; ++i) {
    add(this, xz[i], yz[i], data[i]);
  }

  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/cover.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/cover.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y) {
  if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points

  var x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1;

  // If the quadtree has no extent, initialize them.
  // Integer extent are necessary so that if we later double the extent,
  // the existing quadrant boundaries don’t change due to floating point error!
  if (isNaN(x0)) {
    x1 = (x0 = Math.floor(x)) + 1;
    y1 = (y0 = Math.floor(y)) + 1;
  }

  // Otherwise, double repeatedly to cover.
  else {
    var z = x1 - x0 || 1,
        node = this._root,
        parent,
        i;

    while (x0 > x || x >= x1 || y0 > y || y >= y1) {
      i = (y < y0) << 1 | (x < x0);
      parent = new Array(4), parent[i] = node, node = parent, z *= 2;
      switch (i) {
        case 0: x1 = x0 + z, y1 = y0 + z; break;
        case 1: x0 = x1 - z, y1 = y0 + z; break;
        case 2: x1 = x0 + z, y0 = y1 - z; break;
        case 3: x0 = x1 - z, y0 = y1 - z; break;
      }
    }

    if (this._root && this._root.length) this._root = node;
  }

  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/data.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/data.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var data = [];
  this.visit(function(node) {
    if (!node.length) do data.push(node.data); while (node = node.next)
  });
  return data;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/extent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/extent.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length
      ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
      : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/find.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/find.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(x, y, radius) {
  var data,
      x0 = this._x0,
      y0 = this._y0,
      x1,
      y1,
      x2,
      y2,
      x3 = this._x1,
      y3 = this._y1,
      quads = [],
      node = this._root,
      q,
      i;

  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, x0, y0, x3, y3));
  if (radius == null) radius = Infinity;
  else {
    x0 = x - radius, y0 = y - radius;
    x3 = x + radius, y3 = y + radius;
    radius *= radius;
  }

  while (q = quads.pop()) {

    // Stop searching if this quadrant can’t contain a closer node.
    if (!(node = q.node)
        || (x1 = q.x0) > x3
        || (y1 = q.y0) > y3
        || (x2 = q.x1) < x0
        || (y2 = q.y1) < y0) continue;

    // Bisect the current quadrant.
    if (node.length) {
      var xm = (x1 + x2) / 2,
          ym = (y1 + y2) / 2;

      quads.push(
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[3], xm, ym, x2, y2),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[2], x1, ym, xm, y2),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[1], xm, y1, x2, ym),
        new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node[0], x1, y1, xm, ym)
      );

      // Visit the closest quadrant first.
      if (i = (y >= ym) << 1 | (x >= xm)) {
        q = quads[quads.length - 1];
        quads[quads.length - 1] = quads[quads.length - 1 - i];
        quads[quads.length - 1 - i] = q;
      }
    }

    // Visit this point. (Visiting coincident points isn’t necessary!)
    else {
      var dx = x - +this._x.call(null, node.data),
          dy = y - +this._y.call(null, node.data),
          d2 = dx * dx + dy * dy;
      if (d2 < radius) {
        var d = Math.sqrt(radius = d2);
        x0 = x - d, y0 = y - d;
        x3 = x + d, y3 = y + d;
        data = node.data;
      }
    }
  }

  return data;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/quad.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/quad.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(node, x0, y0, x1, y1) {
  this.node = node;
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/quadtree.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-quadtree/src/quadtree.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ quadtree)
/* harmony export */ });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.js */ "./node_modules/d3-quadtree/src/add.js");
/* harmony import */ var _cover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover.js */ "./node_modules/d3-quadtree/src/cover.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data.js */ "./node_modules/d3-quadtree/src/data.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./extent.js */ "./node_modules/d3-quadtree/src/extent.js");
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./find.js */ "./node_modules/d3-quadtree/src/find.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./remove.js */ "./node_modules/d3-quadtree/src/remove.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root.js */ "./node_modules/d3-quadtree/src/root.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./size.js */ "./node_modules/d3-quadtree/src/size.js");
/* harmony import */ var _visit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visit.js */ "./node_modules/d3-quadtree/src/visit.js");
/* harmony import */ var _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./visitAfter.js */ "./node_modules/d3-quadtree/src/visitAfter.js");
/* harmony import */ var _x_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x.js */ "./node_modules/d3-quadtree/src/x.js");
/* harmony import */ var _y_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./y.js */ "./node_modules/d3-quadtree/src/y.js");













function quadtree(nodes, x, y) {
  var tree = new Quadtree(x == null ? _x_js__WEBPACK_IMPORTED_MODULE_0__.defaultX : x, y == null ? _y_js__WEBPACK_IMPORTED_MODULE_1__.defaultY : y, NaN, NaN, NaN, NaN);
  return nodes == null ? tree : tree.addAll(nodes);
}

function Quadtree(x, y, x0, y0, x1, y1) {
  this._x = x;
  this._y = y;
  this._x0 = x0;
  this._y0 = y0;
  this._x1 = x1;
  this._y1 = y1;
  this._root = undefined;
}

function leaf_copy(leaf) {
  var copy = {data: leaf.data}, next = copy;
  while (leaf = leaf.next) next = next.next = {data: leaf.data};
  return copy;
}

var treeProto = quadtree.prototype = Quadtree.prototype;

treeProto.copy = function() {
  var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      node = this._root,
      nodes,
      child;

  if (!node) return copy;

  if (!node.length) return copy._root = leaf_copy(node), copy;

  nodes = [{source: node, target: copy._root = new Array(4)}];
  while (node = nodes.pop()) {
    for (var i = 0; i < 4; ++i) {
      if (child = node.source[i]) {
        if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
        else node.target[i] = leaf_copy(child);
      }
    }
  }

  return copy;
};

treeProto.add = _add_js__WEBPACK_IMPORTED_MODULE_2__["default"];
treeProto.addAll = _add_js__WEBPACK_IMPORTED_MODULE_2__.addAll;
treeProto.cover = _cover_js__WEBPACK_IMPORTED_MODULE_3__["default"];
treeProto.data = _data_js__WEBPACK_IMPORTED_MODULE_4__["default"];
treeProto.extent = _extent_js__WEBPACK_IMPORTED_MODULE_5__["default"];
treeProto.find = _find_js__WEBPACK_IMPORTED_MODULE_6__["default"];
treeProto.remove = _remove_js__WEBPACK_IMPORTED_MODULE_7__["default"];
treeProto.removeAll = _remove_js__WEBPACK_IMPORTED_MODULE_7__.removeAll;
treeProto.root = _root_js__WEBPACK_IMPORTED_MODULE_8__["default"];
treeProto.size = _size_js__WEBPACK_IMPORTED_MODULE_9__["default"];
treeProto.visit = _visit_js__WEBPACK_IMPORTED_MODULE_10__["default"];
treeProto.visitAfter = _visitAfter_js__WEBPACK_IMPORTED_MODULE_11__["default"];
treeProto.x = _x_js__WEBPACK_IMPORTED_MODULE_0__["default"];
treeProto.y = _y_js__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "./node_modules/d3-quadtree/src/remove.js":
/*!************************************************!*\
  !*** ./node_modules/d3-quadtree/src/remove.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   removeAll: () => (/* binding */ removeAll)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(d) {
  if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points

  var parent,
      node = this._root,
      retainer,
      previous,
      next,
      x0 = this._x0,
      y0 = this._y0,
      x1 = this._x1,
      y1 = this._y1,
      x,
      y,
      xm,
      ym,
      right,
      bottom,
      i,
      j;

  // If the tree is empty, initialize the root as a leaf.
  if (!node) return this;

  // Find the leaf node for the point.
  // While descending, also retain the deepest parent with a non-removed sibling.
  if (node.length) while (true) {
    if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
    if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
    if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
    if (!node.length) break;
    if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
  }

  // Find the point to remove.
  while (node.data !== d) if (!(previous = node, node = node.next)) return this;
  if (next = node.next) delete node.next;

  // If there are multiple coincident points, remove just the point.
  if (previous) return (next ? previous.next = next : delete previous.next), this;

  // If this is the root point, remove it.
  if (!parent) return this._root = next, this;

  // Remove this leaf.
  next ? parent[i] = next : delete parent[i];

  // If the parent now contains exactly one leaf, collapse superfluous parents.
  if ((node = parent[0] || parent[1] || parent[2] || parent[3])
      && node === (parent[3] || parent[2] || parent[1] || parent[0])
      && !node.length) {
    if (retainer) retainer[j] = node;
    else this._root = node;
  }

  return this;
}

function removeAll(data) {
  for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/root.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/root.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return this._root;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/size.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-quadtree/src/size.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var size = 0;
  this.visit(function(node) {
    if (!node.length) do ++size; while (node = node.next)
  });
  return size;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/visit.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-quadtree/src/visit.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [], q, node = this._root, child, x0, y0, x1, y1;
  if (node) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](node, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
      var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/visitAfter.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-quadtree/src/visitAfter.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _quad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quad.js */ "./node_modules/d3-quadtree/src/quad.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  var quads = [], next = [], q;
  if (this._root) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](this._root, this._x0, this._y0, this._x1, this._y1));
  while (q = quads.pop()) {
    var node = q.node;
    if (node.length) {
      var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
      if (child = node[0]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, y0, xm, ym));
      if (child = node[1]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, y0, x1, ym));
      if (child = node[2]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, x0, ym, xm, y1));
      if (child = node[3]) quads.push(new _quad_js__WEBPACK_IMPORTED_MODULE_0__["default"](child, xm, ym, x1, y1));
    }
    next.push(q);
  }
  while (q = next.pop()) {
    callback(q.node, q.x0, q.y0, q.x1, q.y1);
  }
  return this;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/x.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/x.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultX: () => (/* binding */ defaultX)
/* harmony export */ });
function defaultX(d) {
  return d[0];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._x = _, this) : this._x;
}


/***/ }),

/***/ "./node_modules/d3-quadtree/src/y.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-quadtree/src/y.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultY: () => (/* binding */ defaultY)
/* harmony export */ });
function defaultY(d) {
  return d[1];
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_) {
  return arguments.length ? (this._y = _, this) : this._y;
}


/***/ }),

/***/ "./node_modules/d3-timer/src/timer.js":
/*!********************************************!*\
  !*** ./node_modules/d3-timer/src/timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timer: () => (/* binding */ Timer),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   timer: () => (/* binding */ timer),
/* harmony export */   timerFlush: () => (/* binding */ timerFlush)
/* harmony export */ });
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DegreeSeqEnum: () => (/* binding */ DegreeSeqEnum)
/* harmony export */ });
/* harmony import */ var _GraphManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphManager */ "./src/GraphManager.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");


// ============================================================================
// 列挙体
// ============================================================================
// 次数配列モードの列挙体
var DegreeSeqEnum;
(function (DegreeSeqEnum) {
    DegreeSeqEnum["Array"] = "\u6B21\u6570\u914D\u5217";
    DegreeSeqEnum["RunLength"] = "\u30E9\u30F3\u30EC\u30F3\u30B0\u30B9\u5727\u7E2E";
})(DegreeSeqEnum || (DegreeSeqEnum = {}));
// ============================================================================
// HTML項目関連処理
// ============================================================================
document.addEventListener("DOMContentLoaded", setup);
function setup() {
    // ============================================================================
    // 次数配列
    // ============================================================================
    const degreeToggle1 = document.getElementById("degreeToggle1");
    const degreeToggle2 = document.getElementById("degreeToggle2");
    const degreesInput = document.getElementById("degreeSequenceInput");
    const applyButton = document.getElementById("applyDegreeSequence");
    degreeToggle1.addEventListener("click", clickDegreeArray);
    degreeToggle2.addEventListener("click", clickRunLength);
    degreesInput.addEventListener("input", inputDegreeSequence);
    degreesInput.addEventListener("blur", blurDegreeSequence);
    applyButton.addEventListener("click", applyDegreeSequence);
    // トグルボタンの状態: 初期値は「次数配列」とする
    let degreeMode = DegreeSeqEnum.Array;
    // トグルボタンで、次数配列が選択された時の処理
    function clickDegreeArray(e) {
        degreeMode = DegreeSeqEnum.Array;
        degreeToggle1.textContent = degreeMode;
        degreeToggle1.classList.add("active");
        degreeToggle2.classList.remove("active");
        degreesInput.placeholder = "例: 4,4,4,3,3";
        degreesInput.value = graphManager.degreeSequence.getArrayString();
    }
    // トグルボタンで、ランレングス圧縮が選択された時の処理
    function clickRunLength(e) {
        degreeMode = DegreeSeqEnum.RunLength;
        degreeToggle2.textContent = degreeMode;
        degreeToggle2.classList.add("active");
        degreeToggle1.classList.remove("active");
        degreesInput.placeholder = "例: 4*3,3*2";
        degreesInput.value = graphManager.degreeSequence.getRunLengthString();
    }
    // 次数配列入力欄に入力した時の処理
    function inputDegreeSequence(e) {
        if (degreeMode === DegreeSeqEnum.Array) {
            // 数字、カンマを許容
            const cleanedValue = degreesInput.value.replace(/[^0-9, ]/g, "");
            degreesInput.value = cleanedValue;
        }
        else {
            // 数字、カンマ、アスタリスクを許容
            const cleanedValue = degreesInput.value.replace(/[^0-9,* ]/g, "");
            degreesInput.value = cleanedValue;
        }
    }
    // 次数配列入力欄のロストフォーカス時の処理
    function blurDegreeSequence(e) {
        graphManager.degreeSequence.setValue(degreesInput.value);
        // 値の設定
        if (degreeMode === DegreeSeqEnum.Array) {
            degreesInput.value = graphManager.degreeSequence.getArrayString();
        }
        else {
            degreesInput.value = graphManager.degreeSequence.getRunLengthString();
        }
        // 有効性判定
        if (graphManager.degreeSequence.isValid()) {
            degreesInput.classList.remove("is-invalid");
            degreesInput.classList.add("is-valid");
            applyButton.disabled = false;
        }
        else {
            degreesInput.classList.add("is-invalid");
            degreesInput.classList.remove("is-valid");
            applyButton.disabled = true;
        }
    }
    // 適用ボタンが押された時の処理
    function applyDegreeSequence(e) {
        if (graphManager.degreeSequence.vertexCount() > 100) {
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.confirmAction("頂点の数が100を超えるグラフは描画できません", () => { });
        }
        else if (graphManager.degreeSequence.vertexCount() > 50) {
            _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.confirmAction("頂点の数が大きいため、描画に数分かかる場合がありますがよろしいですか？", () => {
                graphManager.createGraphFromMatrix();
            });
        }
        else {
            graphManager.createGraphFromMatrix();
        }
    }
    // 次数配列の更新
    function updateDegreeSequence(vertices, edges) {
        graphManager.degreeSequence.setVertices(vertices, edges);
        if (degreeMode === DegreeSeqEnum.Array) {
            degreesInput.value = graphManager.degreeSequence.getArrayString();
        }
        else {
            degreesInput.value = graphManager.degreeSequence.getRunLengthString();
        }
    }
    // ============================================================================
    // プロパティエリア
    // ============================================================================
    const initGraphButton = document.getElementById("initGraphButton");
    const vertexDisplay = document.getElementById("vertexDisplay");
    const edgeDisplay = document.getElementById("edgeDisplay");
    const graphStatusDisplay = document.getElementById("graphStatusDisplay");
    const maxGraphEdgeDisplay = document.getElementById("maxGraphEdgeDisplay");
    const hasK33Display = document.getElementById("hasK33Display");
    const hasK5Display = document.getElementById("hasK5Display");
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
        _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.confirmAction("グラフが初期化されますがよろしいですか？", () => {
            graphManager.initGraph();
        });
    }
    // オブジェクト情報の更新
    function updateInfo(info) {
        // 頂点と辺の数
        vertexDisplay.textContent = `頂点の数: ${info.vertices.length}`;
        edgeDisplay.textContent = `辺の数: ${info.edges.length}`;
        // 初期化
        graphStatusDisplay.textContent = "グラフ: 平面グラフ";
        graphStatusDisplay.style.color = "";
        graphStatusDisplay.style.fontWeight = "";
        maxGraphEdgeDisplay.textContent = " - ";
        hasK33Display.textContent = "k3,3: -";
        hasK33Display.style.color = "";
        hasK33Display.style.fontWeight = "";
        hasK5Display.textContent = "k5: -";
        hasK5Display.style.color = "";
        hasK5Display.style.fontWeight = "";
        // 最小限のグラフ判定
        if (info.vertices.length < 3) {
            return;
        }
        // 極大平面グラフ判定（ 3V - E = 6 ）
        const result = 3 * info.vertices.length - info.edges.length;
        // 隣接行列を取得
        const adjacencyMatrix = info.degreeSequence.getAdjacencyMatrix();
        // グラフ状態
        if (adjacencyMatrix === null) {
            // 描画不可能
            graphStatusDisplay.textContent = "グラフ: 実現不可";
            graphStatusDisplay.style.color = "red";
            graphStatusDisplay.style.fontWeight = "bold";
        }
        else if (adjacencyMatrix.hasK33() || adjacencyMatrix.hasK5()) {
            // 非平面グラフ
            graphStatusDisplay.textContent = "グラフ: 非平面グラフ";
            graphStatusDisplay.style.color = "red";
            graphStatusDisplay.style.fontWeight = "bold";
            // K3,3
            if (adjacencyMatrix && adjacencyMatrix.hasK33()) {
                const k33 = adjacencyMatrix.getResultK33();
                hasK33Display.textContent = `k3,3: ${k33.map((sub) => `(${sub.join(",")})`).join(", ")}`;
                hasK33Display.style.color = "red";
                hasK33Display.style.fontWeight = "bold";
            }
            // K5
            if (adjacencyMatrix && adjacencyMatrix.hasK5()) {
                const k5 = adjacencyMatrix.getResultK5();
                hasK5Display.textContent = `k5: (${k5.join(", ")})`;
                hasK5Display.style.color = "red";
                hasK5Display.style.fontWeight = "bold";
            }
        }
        else {
            // 平面グラフ
            if (result > 6) {
                graphStatusDisplay.textContent = "グラフ: 平面グラフ";
                graphStatusDisplay.style.color = "";
                graphStatusDisplay.style.fontWeight = "";
                maxGraphEdgeDisplay.textContent = `辺数 ${result - 6} 追加可能`;
            }
            else if (result == 6) {
                graphStatusDisplay.textContent = "グラフ: 極大平面グラフ";
                graphStatusDisplay.style.color = "blue";
                graphStatusDisplay.style.fontWeight = "bold";
                maxGraphEdgeDisplay.textContent = ` - `;
            }
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
        _utils__WEBPACK_IMPORTED_MODULE_1__.Utils.confirmAction("すべての辺が直線になりますがよろしいですか？", () => {
            graphManager.straightenEdges();
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
    const graphManager = new _GraphManager__WEBPACK_IMPORTED_MODULE_0__.GraphManager(canvas, updateDegreeSequence, updateInfo);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTREO0FBQzlELEVBQUUsQ0FDMEc7QUFDNUcsQ0FBQyx1QkFBdUI7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQTJGO0FBQzNGLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsWUFBWSxrRUFBa0U7QUFDeEYsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLGFBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQkFBMEI7O0FBRWpDO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxlQUFlLDJCQUEyQjtBQUMxQzs7QUFFQTtBQUNBLGVBQWUsdURBQXVEO0FBQ3RFLGVBQWUsMEJBQTBCO0FBQ3pDOztBQUVBLGFBQWEsYUFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsYUFBYSxhQUFhLElBQUk7O0FBRWpDLGFBQWEsWUFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsYUFBYSxXQUFXLElBQUk7O0FBRS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGdCQUFnQjtBQUM3QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsS0FBSztBQUNsQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qzs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxL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QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsYUFBYTtBQUMxQixhQUFhLFNBQVM7QUFDdEIsYUFBYSxVQUFVO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCLGFBQWEsYUFBYTtBQUMxQixhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdURBQVk7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvc3dlZXRhbGVydDIvZGlzdC9zd2VldGFsZXJ0Mi5hbGwuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL0FkamFjZW5jeU1hdHJpeC50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvRGVncmVlU2VxdWVuY2UgLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9HcmFwaE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL29iamVjdC9Db250cm9sLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9vYmplY3QvRWRnZS50cyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvb2JqZWN0L1BvaW50LnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL3NyYy9vYmplY3QvUG9zaXRpb24udHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL29iamVjdC9WZXJ0ZXgudHMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vc3JjL3V0aWxzLnRzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1kaXNwYXRjaC9zcmMvZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9jZW50ZXIuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2ppZ2dsZS5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xjZy5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL2xpbmsuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLWZvcmNlL3NyYy9tYW55Qm9keS5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtZm9yY2Uvc3JjL3NpbXVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9hZGQuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9jb3Zlci5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9leHRlbnQuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy9maW5kLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvcXVhZC5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3F1YWR0cmVlLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvcmVtb3ZlLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMvcm9vdC5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3NpemUuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy92aXNpdC5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtcXVhZHRyZWUvc3JjL3Zpc2l0QWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoLy4vbm9kZV9tb2R1bGVzL2QzLXF1YWR0cmVlL3NyYy94LmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC8uL25vZGVfbW9kdWxlcy9kMy1xdWFkdHJlZS9zcmMveS5qcyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9ub2RlX21vZHVsZXMvZDMtdGltZXIvc3JjL3RpbWVyLmpzIiwid2VicGFjazovL3BsYW5hci1ncmFwaC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGxhbmFyLWdyYXBoL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wbGFuYXItZ3JhcGgvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiogc3dlZXRhbGVydDIgdjExLjEwLjhcbiogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbFRoaXMgOiBnbG9iYWwgfHwgc2VsZiwgZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICBmdW5jdGlvbiBfYXNzZXJ0Q2xhc3NCcmFuZChlLCB0LCBuKSB7XG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSA/IGUgPT09IHQgOiBlLmhhcyh0KSkgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdCA6IG47XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBvbiB0aGlzIG9iamVjdFwiKTtcbiAgfVxuICBmdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHtcbiAgICByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpO1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEdldDIocywgYSkge1xuICAgIHJldHVybiBzLmdldChfYXNzZXJ0Q2xhc3NCcmFuZChzLCBhKSk7XG4gIH1cbiAgZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZUZpZWxkU2V0MihzLCBhLCByKSB7XG4gICAgcmV0dXJuIHMuc2V0KF9hc3NlcnRDbGFzc0JyYW5kKHMsIGEpLCByKSwgcjtcbiAgfVxuICBmdW5jdGlvbiBfY29uc3RydWN0KHQsIGUsIHIpIHtcbiAgICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB2YXIgbyA9IFtudWxsXTtcbiAgICBvLnB1c2guYXBwbHkobywgZSk7XG4gICAgdmFyIHAgPSBuZXcgKHQuYmluZC5hcHBseSh0LCBvKSkoKTtcbiAgICByZXR1cm4gciAmJiBfc2V0UHJvdG90eXBlT2YocCwgci5wcm90b3R5cGUpLCBwO1xuICB9XG4gIGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICB9IGNhdGNoICh0KSB7fVxuICAgIHJldHVybiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAhIXQ7XG4gICAgfSkoKTtcbiAgfVxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICAgIHZhciB0ID0gbnVsbCA9PSByID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiByW1N5bWJvbC5pdGVyYXRvcl0gfHwgcltcIkBAaXRlcmF0b3JcIl07XG4gICAgaWYgKG51bGwgIT0gdCkge1xuICAgICAgdmFyIGUsXG4gICAgICAgIG4sXG4gICAgICAgIGksXG4gICAgICAgIHUsXG4gICAgICAgIGEgPSBbXSxcbiAgICAgICAgZiA9ICEwLFxuICAgICAgICBvID0gITE7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaSA9ICh0ID0gdC5jYWxsKHIpKS5uZXh0LCAwID09PSBsKSB7XG4gICAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICAgIGYgPSAhMTtcbiAgICAgICAgfSBlbHNlIGZvciAoOyAhKGYgPSAoZSA9IGkuY2FsbCh0KSkuZG9uZSkgJiYgKGEucHVzaChlLnZhbHVlKSwgYS5sZW5ndGggIT09IGwpOyBmID0gITApO1xuICAgICAgfSBjYXRjaCAocikge1xuICAgICAgICBvID0gITAsIG4gPSByO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoIWYgJiYgbnVsbCAhPSB0LnJldHVybiAmJiAodSA9IHQucmV0dXJuKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBpZiAobykgdGhyb3cgbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIHQgfHwgIXQpIHJldHVybiB0O1xuICAgIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICAgIGlmICh2b2lkIDAgIT09IGUpIHtcbiAgICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgICAgaWYgKFwib2JqZWN0XCIgIT0gdHlwZW9mIGkpIHJldHVybiBpO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xuICB9XG4gIGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgICB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgICByZXR1cm4gXCJzeW1ib2xcIiA9PSB0eXBlb2YgaSA/IGkgOiBpICsgXCJcIjtcbiAgfVxuICBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG87XG4gICAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgICB9LCBfdHlwZW9mKG8pO1xuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgX3RvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfVxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbiAgfVxuICBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgICB9O1xuICAgIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH1cbiAgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICAgIG8uX19wcm90b19fID0gcDtcbiAgICAgIHJldHVybiBvO1xuICAgIH07XG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbiAgfVxuICBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICAgIHJldHVybiBjYWxsO1xuICAgIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gICAgfVxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xuICB9XG4gIGZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgb2JqZWN0ID0gX2dldFByb3RvdHlwZU9mKG9iamVjdCk7XG4gICAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuICBmdW5jdGlvbiBfZ2V0KCkge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBSZWZsZWN0LmdldCkge1xuICAgICAgX2dldCA9IFJlZmxlY3QuZ2V0LmJpbmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgICAgdmFyIGJhc2UgPSBfc3VwZXJQcm9wQmFzZSh0YXJnZXQsIHByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFiYXNlKSByZXR1cm47XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG4gICAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogcmVjZWl2ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xuICB9XG4gIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xuICB9XG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgfVxuICBmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbiAgfVxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuICBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gICAgaWYgKCFvKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gICAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIH1cbiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gICAgcmV0dXJuIGFycjI7XG4gIH1cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuICBmdW5jdGlvbiBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbihvYmosIHByaXZhdGVDb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByaXZhdGVDb2xsZWN0aW9uLmhhcyhvYmopKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGluaXRpYWxpemUgdGhlIHNhbWUgcHJpdmF0ZSBlbGVtZW50cyB0d2ljZSBvbiBhbiBvYmplY3RcIik7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVGaWVsZEluaXRTcGVjKG9iaiwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcbiAgICBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbihvYmosIHByaXZhdGVNYXApO1xuICAgIHByaXZhdGVNYXAuc2V0KG9iaiwgdmFsdWUpO1xuICB9XG5cbiAgdmFyIFJFU1RPUkVfRk9DVVNfVElNRU9VVCA9IDEwMDtcblxuICAvKiogQHR5cGUge0dsb2JhbFN0YXRlfSAqL1xuICB2YXIgZ2xvYmFsU3RhdGUgPSB7fTtcbiAgdmFyIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXN0b3JlIHByZXZpb3VzIGFjdGl2ZSAoZm9jdXNlZCkgZWxlbWVudFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJldHVybkZvY3VzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxuICAgKi9cbiAgdmFyIHJlc3RvcmVBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gcmVzdG9yZUFjdGl2ZUVsZW1lbnQocmV0dXJuRm9jdXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIGlmICghcmV0dXJuRm9jdXMpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICAgIHZhciB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgICB2YXIgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgICAgZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9LCBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQpOyAvLyBpc3N1ZXMvOTAwXG5cbiAgICAgIHdpbmRvdy5zY3JvbGxUbyh4LCB5KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgc3dhbFByZWZpeCA9ICdzd2FsMi0nO1xuXG4gIC8qKlxuICAgKiBAdHlwZWRlZlxuICAgKiB7IHwgJ2NvbnRhaW5lcidcbiAgICogICB8ICdzaG93bidcbiAgICogICB8ICdoZWlnaHQtYXV0bydcbiAgICogICB8ICdpb3NmaXgnXG4gICAqICAgfCAncG9wdXAnXG4gICAqICAgfCAnbW9kYWwnXG4gICAqICAgfCAnbm8tYmFja2Ryb3AnXG4gICAqICAgfCAnbm8tdHJhbnNpdGlvbidcbiAgICogICB8ICd0b2FzdCdcbiAgICogICB8ICd0b2FzdC1zaG93bidcbiAgICogICB8ICdzaG93J1xuICAgKiAgIHwgJ2hpZGUnXG4gICAqICAgfCAnY2xvc2UnXG4gICAqICAgfCAndGl0bGUnXG4gICAqICAgfCAnaHRtbC1jb250YWluZXInXG4gICAqICAgfCAnYWN0aW9ucydcbiAgICogICB8ICdjb25maXJtJ1xuICAgKiAgIHwgJ2RlbnknXG4gICAqICAgfCAnY2FuY2VsJ1xuICAgKiAgIHwgJ2RlZmF1bHQtb3V0bGluZSdcbiAgICogICB8ICdmb290ZXInXG4gICAqICAgfCAnaWNvbidcbiAgICogICB8ICdpY29uLWNvbnRlbnQnXG4gICAqICAgfCAnaW1hZ2UnXG4gICAqICAgfCAnaW5wdXQnXG4gICAqICAgfCAnZmlsZSdcbiAgICogICB8ICdyYW5nZSdcbiAgICogICB8ICdzZWxlY3QnXG4gICAqICAgfCAncmFkaW8nXG4gICAqICAgfCAnY2hlY2tib3gnXG4gICAqICAgfCAnbGFiZWwnXG4gICAqICAgfCAndGV4dGFyZWEnXG4gICAqICAgfCAnaW5wdXRlcnJvcidcbiAgICogICB8ICdpbnB1dC1sYWJlbCdcbiAgICogICB8ICd2YWxpZGF0aW9uLW1lc3NhZ2UnXG4gICAqICAgfCAncHJvZ3Jlc3Mtc3RlcHMnXG4gICAqICAgfCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnXG4gICAqICAgfCAncHJvZ3Jlc3Mtc3RlcCdcbiAgICogICB8ICdwcm9ncmVzcy1zdGVwLWxpbmUnXG4gICAqICAgfCAnbG9hZGVyJ1xuICAgKiAgIHwgJ2xvYWRpbmcnXG4gICAqICAgfCAnc3R5bGVkJ1xuICAgKiAgIHwgJ3RvcCdcbiAgICogICB8ICd0b3Atc3RhcnQnXG4gICAqICAgfCAndG9wLWVuZCdcbiAgICogICB8ICd0b3AtbGVmdCdcbiAgICogICB8ICd0b3AtcmlnaHQnXG4gICAqICAgfCAnY2VudGVyJ1xuICAgKiAgIHwgJ2NlbnRlci1zdGFydCdcbiAgICogICB8ICdjZW50ZXItZW5kJ1xuICAgKiAgIHwgJ2NlbnRlci1sZWZ0J1xuICAgKiAgIHwgJ2NlbnRlci1yaWdodCdcbiAgICogICB8ICdib3R0b20nXG4gICAqICAgfCAnYm90dG9tLXN0YXJ0J1xuICAgKiAgIHwgJ2JvdHRvbS1lbmQnXG4gICAqICAgfCAnYm90dG9tLWxlZnQnXG4gICAqICAgfCAnYm90dG9tLXJpZ2h0J1xuICAgKiAgIHwgJ2dyb3ctcm93J1xuICAgKiAgIHwgJ2dyb3ctY29sdW1uJ1xuICAgKiAgIHwgJ2dyb3ctZnVsbHNjcmVlbidcbiAgICogICB8ICdydGwnXG4gICAqICAgfCAndGltZXItcHJvZ3Jlc3MtYmFyJ1xuICAgKiAgIHwgJ3RpbWVyLXByb2dyZXNzLWJhci1jb250YWluZXInXG4gICAqICAgfCAnc2Nyb2xsYmFyLW1lYXN1cmUnXG4gICAqICAgfCAnaWNvbi1zdWNjZXNzJ1xuICAgKiAgIHwgJ2ljb24td2FybmluZydcbiAgICogICB8ICdpY29uLWluZm8nXG4gICAqICAgfCAnaWNvbi1xdWVzdGlvbidcbiAgICogICB8ICdpY29uLWVycm9yJ1xuICAgKiB9IFN3YWxDbGFzc1xuICAgKiBAdHlwZWRlZiB7UmVjb3JkPFN3YWxDbGFzcywgc3RyaW5nPn0gU3dhbENsYXNzZXNcbiAgICovXG5cbiAgLyoqXG4gICAqIEB0eXBlZGVmIHsnc3VjY2VzcycgfCAnd2FybmluZycgfCAnaW5mbycgfCAncXVlc3Rpb24nIHwgJ2Vycm9yJ30gU3dhbEljb25cbiAgICogQHR5cGVkZWYge1JlY29yZDxTd2FsSWNvbiwgc3RyaW5nPn0gU3dhbEljb25zXG4gICAqL1xuXG4gIC8qKiBAdHlwZSB7U3dhbENsYXNzW119ICovXG4gIHZhciBjbGFzc05hbWVzID0gWydjb250YWluZXInLCAnc2hvd24nLCAnaGVpZ2h0LWF1dG8nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ25vLXRyYW5zaXRpb24nLCAndG9hc3QnLCAndG9hc3Qtc2hvd24nLCAnc2hvdycsICdoaWRlJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2h0bWwtY29udGFpbmVyJywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdkZW55JywgJ2NhbmNlbCcsICdkZWZhdWx0LW91dGxpbmUnLCAnZm9vdGVyJywgJ2ljb24nLCAnaWNvbi1jb250ZW50JywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2xhYmVsJywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAnaW5wdXQtbGFiZWwnLCAndmFsaWRhdGlvbi1tZXNzYWdlJywgJ3Byb2dyZXNzLXN0ZXBzJywgJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJywgJ3Byb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcC1saW5lJywgJ2xvYWRlcicsICdsb2FkaW5nJywgJ3N0eWxlZCcsICd0b3AnLCAndG9wLXN0YXJ0JywgJ3RvcC1lbmQnLCAndG9wLWxlZnQnLCAndG9wLXJpZ2h0JywgJ2NlbnRlcicsICdjZW50ZXItc3RhcnQnLCAnY2VudGVyLWVuZCcsICdjZW50ZXItbGVmdCcsICdjZW50ZXItcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsICdib3R0b20tZW5kJywgJ2JvdHRvbS1sZWZ0JywgJ2JvdHRvbS1yaWdodCcsICdncm93LXJvdycsICdncm93LWNvbHVtbicsICdncm93LWZ1bGxzY3JlZW4nLCAncnRsJywgJ3RpbWVyLXByb2dyZXNzLWJhcicsICd0aW1lci1wcm9ncmVzcy1iYXItY29udGFpbmVyJywgJ3Njcm9sbGJhci1tZWFzdXJlJywgJ2ljb24tc3VjY2VzcycsICdpY29uLXdhcm5pbmcnLCAnaWNvbi1pbmZvJywgJ2ljb24tcXVlc3Rpb24nLCAnaWNvbi1lcnJvciddO1xuICB2YXIgc3dhbENsYXNzZXMgPSBjbGFzc05hbWVzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjbGFzc05hbWUpIHtcbiAgICBhY2NbY2xhc3NOYW1lXSA9IHN3YWxQcmVmaXggKyBjbGFzc05hbWU7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwgLyoqIEB0eXBlIHtTd2FsQ2xhc3Nlc30gKi97fSk7XG5cbiAgLyoqIEB0eXBlIHtTd2FsSWNvbltdfSAqL1xuICB2YXIgaWNvbnMgPSBbJ3N1Y2Nlc3MnLCAnd2FybmluZycsICdpbmZvJywgJ3F1ZXN0aW9uJywgJ2Vycm9yJ107XG4gIHZhciBpY29uVHlwZXMgPSBpY29ucy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgaWNvbikge1xuICAgIGFjY1tpY29uXSA9IHN3YWxQcmVmaXggKyBpY29uO1xuICAgIHJldHVybiBhY2M7XG4gIH0sIC8qKiBAdHlwZSB7U3dhbEljb25zfSAqL3t9KTtcblxuICB2YXIgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonO1xuXG4gIC8qKlxuICAgKiBDYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgb2YgYSBzdHJpbmdcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdmFyIGNhcGl0YWxpemVGaXJzdExldHRlciA9IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdGFuZGFyZGl6ZSBjb25zb2xlIHdhcm5pbmdzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgc3RyaW5nW119IG1lc3NhZ2VcbiAgICovXG4gIHZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gICAgY29uc29sZS53YXJuKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQoX3R5cGVvZihtZXNzYWdlKSA9PT0gJ29iamVjdCcgPyBtZXNzYWdlLmpvaW4oJyAnKSA6IG1lc3NhZ2UpKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RhbmRhcmRpemUgY29uc29sZSBlcnJvcnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICovXG4gIHZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcml2YXRlIGdsb2JhbCBzdGF0ZSBmb3IgYHdhcm5PbmNlYFxuICAgKlxuICAgKiBAdHlwZSB7c3RyaW5nW119XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB2YXIgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzID0gW107XG5cbiAgLyoqXG4gICAqIFNob3cgYSBjb25zb2xlIHdhcm5pbmcsIGJ1dCBvbmx5IGlmIGl0IGhhc24ndCBhbHJlYWR5IGJlZW4gc2hvd25cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICovXG4gIHZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgICBpZiAoIXByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmNsdWRlcyhtZXNzYWdlKSkge1xuICAgICAgcHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICB3YXJuKG1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogU2hvdyBhIG9uZS10aW1lIGNvbnNvbGUgd2FybmluZyBhYm91dCBkZXByZWNhdGVkIHBhcmFtcy9tZXRob2RzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXByZWNhdGVkUGFyYW1cbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZUluc3RlYWRcbiAgICovXG4gIHZhciB3YXJuQWJvdXREZXByZWNhdGlvbiA9IGZ1bmN0aW9uIHdhcm5BYm91dERlcHJlY2F0aW9uKGRlcHJlY2F0ZWRQYXJhbSwgdXNlSW5zdGVhZCkge1xuICAgIHdhcm5PbmNlKFwiXFxcIlwiLmNvbmNhdChkZXByZWNhdGVkUGFyYW0sIFwiXFxcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHVzZSBcXFwiXCIpLmNvbmNhdCh1c2VJbnN0ZWFkLCBcIlxcXCIgaW5zdGVhZC5cIikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gICAqIE90aGVyd2lzZSwganVzdCBwYXNzIHRoZSB2YWx1ZSB0aHJvdWdoXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb24gfCBhbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7YW55fVxuICAgKi9cbiAgdmFyIGNhbGxJZkZ1bmN0aW9uID0gZnVuY3Rpb24gY2FsbElmRnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicgPyBhcmcoKSA6IGFyZztcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBoYXNUb1Byb21pc2VGbiA9IGZ1bmN0aW9uIGhhc1RvUHJvbWlzZUZuKGFyZykge1xuICAgIHJldHVybiBhcmcgJiYgdHlwZW9mIGFyZy50b1Byb21pc2UgPT09ICdmdW5jdGlvbic7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSBhcmdcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIHZhciBhc1Byb21pc2UgPSBmdW5jdGlvbiBhc1Byb21pc2UoYXJnKSB7XG4gICAgcmV0dXJuIGhhc1RvUHJvbWlzZUZuKGFyZykgPyBhcmcudG9Qcm9taXNlKCkgOiBQcm9taXNlLnJlc29sdmUoYXJnKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGFyZ1xuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2UoYXJnKSB7XG4gICAgcmV0dXJuIGFyZyAmJiBQcm9taXNlLnJlc29sdmUoYXJnKSA9PT0gYXJnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwb3B1cCBjb250YWluZXIgd2hpY2ggY29udGFpbnMgdGhlIGJhY2tkcm9wIGFuZCB0aGUgcG9wdXAgaXRzZWxmLlxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250YWluZXIpKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yU3RyaW5nXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZWxlbWVudEJ5U2VsZWN0b3IgPSBmdW5jdGlvbiBlbGVtZW50QnlTZWxlY3RvcihzZWxlY3RvclN0cmluZykge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICByZXR1cm4gY29udGFpbmVyID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGVsZW1lbnRCeUNsYXNzID0gZnVuY3Rpb24gZWxlbWVudEJ5Q2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChjbGFzc05hbWUpKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRQb3B1cCA9IGZ1bmN0aW9uIGdldFBvcHVwKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5wb3B1cCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0SWNvbiA9IGZ1bmN0aW9uIGdldEljb24oKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmljb24pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldEljb25Db250ZW50ID0gZnVuY3Rpb24gZ2V0SWNvbkNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydpY29uLWNvbnRlbnQnXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbiBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldEh0bWxDb250YWluZXIgPSBmdW5jdGlvbiBnZXRIdG1sQ29udGFpbmVyKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0SW1hZ2UgPSBmdW5jdGlvbiBnZXRJbWFnZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxCdXR0b25FbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRDb25maXJtQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q29uZmlybUJ1dHRvbigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi9lbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCIgLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldENhbmNlbEJ1dHRvbiA9IGZ1bmN0aW9uIGdldENhbmNlbEJ1dHRvbigpIHtcbiAgICByZXR1cm4gLyoqIEB0eXBlIHtIVE1MQnV0dG9uRWxlbWVudH0gKi9lbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCIgLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2FuY2VsKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0RGVueUJ1dHRvbiA9IGZ1bmN0aW9uIGdldERlbnlCdXR0b24oKSB7XG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7SFRNTEJ1dHRvbkVsZW1lbnR9ICovZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmFjdGlvbnMsIFwiIC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLmRlbnkpKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRJbnB1dExhYmVsID0gZnVuY3Rpb24gZ2V0SW5wdXRMYWJlbCgpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ2lucHV0LWxhYmVsJ10pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldExvYWRlciA9IGZ1bmN0aW9uIGdldExvYWRlcigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmxvYWRlcikpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnQgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICAgIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5hY3Rpb25zKTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRGb290ZXIgPSBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmZvb3Rlcik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0VGltZXJQcm9ncmVzc0JhciA9IGZ1bmN0aW9uIGdldFRpbWVyUHJvZ3Jlc3NCYXIoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0Q2xvc2VCdXR0b24gPSBmdW5jdGlvbiBnZXRDbG9zZUJ1dHRvbigpIHtcbiAgICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xuICB9O1xuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qa3VwL2ZvY3VzYWJsZS9ibG9iL21hc3Rlci9pbmRleC5qc1xuICB2YXIgZm9jdXNhYmxlID0gXCJcXG4gIGFbaHJlZl0sXFxuICBhcmVhW2hyZWZdLFxcbiAgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLFxcbiAgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSxcXG4gIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcXG4gIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksXFxuICBpZnJhbWUsXFxuICBvYmplY3QsXFxuICBlbWJlZCxcXG4gIFt0YWJpbmRleD1cXFwiMFxcXCJdLFxcbiAgW2NvbnRlbnRlZGl0YWJsZV0sXFxuICBhdWRpb1tjb250cm9sc10sXFxuICB2aWRlb1tjb250cm9sc10sXFxuICBzdW1tYXJ5XFxuXCI7XG4gIC8qKlxuICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnRbXX1cbiAgICovXG4gIHZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICAvKiogQHR5cGUge05vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+fSAqL1xuICAgIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW3RhYmluZGV4PVwiMFwiXSknKTtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXhTb3J0ZWQgPSBBcnJheS5mcm9tKGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4KVxuICAgIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHZhciB0YWJpbmRleEEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCAnMCcpO1xuICAgICAgdmFyIHRhYmluZGV4QiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpIHx8ICcwJyk7XG4gICAgICBpZiAodGFiaW5kZXhBID4gdGFiaW5kZXhCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfSBlbHNlIGlmICh0YWJpbmRleEEgPCB0YWJpbmRleEIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvKiogQHR5cGUge05vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+fSAqL1xuICAgIHZhciBvdGhlckZvY3VzYWJsZUVsZW1lbnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGUpO1xuICAgIHZhciBvdGhlckZvY3VzYWJsZUVsZW1lbnRzRmlsdGVyZWQgPSBBcnJheS5mcm9tKG90aGVyRm9jdXNhYmxlRWxlbWVudHMpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSc7XG4gICAgfSk7XG4gICAgcmV0dXJuIF90b0NvbnN1bWFibGVBcnJheShuZXcgU2V0KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4U29ydGVkLmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzRmlsdGVyZWQpKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIGlzVmlzaWJsZSQxKGVsKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNNb2RhbCA9IGZ1bmN0aW9uIGlzTW9kYWwoKSB7XG4gICAgcmV0dXJuIGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLnNob3duKSAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pICYmICFoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzVG9hc3QgPSBmdW5jdGlvbiBpc1RvYXN0KCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRvYXN0KTtcbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNMb2FkaW5nID0gZnVuY3Rpb24gaXNMb2FkaW5nKCkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcG9wdXAuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgfTtcblxuICAvKipcbiAgICogU2VjdXJlbHkgc2V0IGlubmVySFRNTCBvZiBhbiBlbGVtZW50XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTkyNlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBodG1sXG4gICAqL1xuICB2YXIgc2V0SW5uZXJIdG1sID0gZnVuY3Rpb24gc2V0SW5uZXJIdG1sKGVsZW0sIGh0bWwpIHtcbiAgICBlbGVtLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKGh0bWwpIHtcbiAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICB2YXIgcGFyc2VkID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcbiAgICAgIHZhciBoZWFkID0gcGFyc2VkLnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICAgIGhlYWQgJiYgQXJyYXkuZnJvbShoZWFkLmNoaWxkTm9kZXMpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgICB2YXIgYm9keSA9IHBhcnNlZC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICBib2R5ICYmIEFycmF5LmZyb20oYm9keS5jaGlsZE5vZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBIVE1MVmlkZW9FbGVtZW50IHx8IGNoaWxkIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCkge1xuICAgICAgICAgIGVsZW0uYXBwZW5kQ2hpbGQoY2hpbGQuY2xvbmVOb2RlKHRydWUpKTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yNTA3XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGhhc0NsYXNzID0gZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGNsYXNzTGlzdCA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTGlzdFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW1vdmVDdXN0b21DbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ3VzdG9tQ2xhc3NlcyhlbGVtLCBwYXJhbXMpIHtcbiAgICBBcnJheS5mcm9tKGVsZW0uY2xhc3NMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIGlmICghT2JqZWN0LnZhbHVlcyhzd2FsQ2xhc3NlcykuaW5jbHVkZXMoY2xhc3NOYW1lKSAmJiAhT2JqZWN0LnZhbHVlcyhpY29uVHlwZXMpLmluY2x1ZGVzKGNsYXNzTmFtZSkgJiYgIU9iamVjdC52YWx1ZXMocGFyYW1zLnNob3dDbGFzcyB8fCB7fSkuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNsYXNzTmFtZVxuICAgKi9cbiAgdmFyIGFwcGx5Q3VzdG9tQ2xhc3MgPSBmdW5jdGlvbiBhcHBseUN1c3RvbUNsYXNzKGVsZW0sIHBhcmFtcywgY2xhc3NOYW1lKSB7XG4gICAgcmVtb3ZlQ3VzdG9tQ2xhc3NlcyhlbGVtLCBwYXJhbXMpO1xuICAgIGlmIChwYXJhbXMuY3VzdG9tQ2xhc3MgJiYgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0gIT09ICdzdHJpbmcnICYmICFwYXJhbXMuY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXS5mb3JFYWNoKSB7XG4gICAgICAgIHdhcm4oXCJJbnZhbGlkIHR5cGUgb2YgY3VzdG9tQ2xhc3MuXCIuY29uY2F0KGNsYXNzTmFtZSwgXCIhIEV4cGVjdGVkIHN0cmluZyBvciBpdGVyYWJsZSBvYmplY3QsIGdvdCBcXFwiXCIpLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5jdXN0b21DbGFzc1tjbGFzc05hbWVdKSwgXCJcXFwiXCIpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYWRkQ2xhc3MoZWxlbSwgcGFyYW1zLmN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtpbXBvcnQoJy4vcmVuZGVyZXJzL3JlbmRlcklucHV0JykuSW5wdXRDbGFzcyB8IFN3ZWV0QWxlcnRJbnB1dH0gaW5wdXRDbGFzc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudCB8IG51bGx9XG4gICAqL1xuICB2YXIgZ2V0SW5wdXQkMSA9IGZ1bmN0aW9uIGdldElucHV0KHBvcHVwLCBpbnB1dENsYXNzKSB7XG4gICAgaWYgKCFpbnB1dENsYXNzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3dpdGNoIChpbnB1dENsYXNzKSB7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgY2FzZSAndGV4dGFyZWEnOlxuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgPiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1tpbnB1dENsYXNzXSkpO1xuICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiID4gLlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcbiAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgcmV0dXJuIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIiA+IC5cIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpjaGVja2VkXCIpKSB8fCBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgPiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCIgaW5wdXQ6Zmlyc3QtY2hpbGRcIikpO1xuICAgICAgY2FzZSAncmFuZ2UnOlxuICAgICAgICByZXR1cm4gcG9wdXAucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiID4gLlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCIgPiAuXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxTZWxlY3RFbGVtZW50fSBpbnB1dFxuICAgKi9cbiAgdmFyIGZvY3VzSW5wdXQgPSBmdW5jdGlvbiBmb2N1c0lucHV0KGlucHV0KSB7XG4gICAgaW5wdXQuZm9jdXMoKTtcblxuICAgIC8vIHBsYWNlIGN1cnNvciBhdCBlbmQgb2YgdGV4dCBpbiB0ZXh0IGlucHV0XG4gICAgaWYgKGlucHV0LnR5cGUgIT09ICdmaWxlJykge1xuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgdW5kZWZpbmVkfSBjbGFzc0xpc3RcbiAgICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAgICovXG4gIHZhciB0b2dnbGVDbGFzcyA9IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBjb25kaXRpb24pIHtcbiAgICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICAgIH1cbiAgICBjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgIHRhcmdldC5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgY29uZGl0aW9uID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25kaXRpb24gPyB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudCB8IEhUTUxFbGVtZW50W10gfCBudWxsfSB0YXJnZXRcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXSB8IHJlYWRvbmx5IHN0cmluZ1tdIHwgdW5kZWZpbmVkfSBjbGFzc0xpc3RcbiAgICovXG4gIHZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gICAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgSFRNTEVsZW1lbnRbXSB8IG51bGx9IHRhcmdldFxuICAgKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdIHwgcmVhZG9ubHkgc3RyaW5nW10gfCB1bmRlZmluZWR9IGNsYXNzTGlzdFxuICAgKi9cbiAgdmFyIHJlbW92ZUNsYXNzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgZGlyZWN0IGNoaWxkIG9mIGFuIGVsZW1lbnQgYnkgY2xhc3MgbmFtZVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjbGFzc05hbWVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50IHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgdmFyIGdldERpcmVjdENoaWxkQnlDbGFzcyA9IGZ1bmN0aW9uIGdldERpcmVjdENoaWxkQnlDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBBcnJheS5mcm9tKGVsZW0uY2hpbGRyZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaGFzQ2xhc3MoY2hpbGQsIGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlcbiAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgKi9cbiAgdmFyIGFwcGx5TnVtZXJpY2FsU3R5bGUgPSBmdW5jdGlvbiBhcHBseU51bWVyaWNhbFN0eWxlKGVsZW0sIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gXCJcIi5jb25jYXQocGFyc2VJbnQodmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZSB8fCBwYXJzZUludCh2YWx1ZSkgPT09IDApIHtcbiAgICAgIGVsZW0uc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyBcIlwiLmNvbmNhdCh2YWx1ZSwgXCJweFwiKSA6IHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wZXJ0eSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVsbH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheVxuICAgKi9cbiAgdmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgICB2YXIgZGlzcGxheSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2ZsZXgnO1xuICAgIGVsZW0gJiYgKGVsZW0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVsbH0gZWxlbVxuICAgKi9cbiAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBlbGVtICYmIChlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgbnVsbH0gZWxlbVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheVxuICAgKi9cbiAgdmFyIHNob3dXaGVuSW5uZXJIdG1sUHJlc2VudCA9IGZ1bmN0aW9uIHNob3dXaGVuSW5uZXJIdG1sUHJlc2VudChlbGVtKSB7XG4gICAgdmFyIGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdibG9jayc7XG4gICAgaWYgKCFlbGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRvZ2dsZShlbGVtLCBlbGVtLmlubmVySFRNTCwgZGlzcGxheSk7XG4gICAgfSkub2JzZXJ2ZShlbGVtLCB7XG4gICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgdmFyIHNldFN0eWxlID0gZnVuY3Rpb24gc2V0U3R5bGUocGFyZW50LCBzZWxlY3RvciwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudCB8IG51bGx9ICovXG4gICAgdmFyIGVsID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbCkge1xuICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1cbiAgICogQHBhcmFtIHthbnl9IGNvbmRpdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlzcGxheVxuICAgKi9cbiAgdmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShlbGVtLCBjb25kaXRpb24pIHtcbiAgICB2YXIgZGlzcGxheSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogJ2ZsZXgnO1xuICAgIGNvbmRpdGlvbiA/IHNob3coZWxlbSwgZGlzcGxheSkgOiBoaWRlKGVsZW0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnQgfCBudWxsfSBlbGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzVmlzaWJsZSQxID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgICByZXR1cm4gISEoZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGFsbEJ1dHRvbnNBcmVIaWRkZW4gPSBmdW5jdGlvbiBhbGxCdXR0b25zQXJlSGlkZGVuKCkge1xuICAgIHJldHVybiAhaXNWaXNpYmxlJDEoZ2V0Q29uZmlybUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlJDEoZ2V0RGVueUJ1dHRvbigpKSAmJiAhaXNWaXNpYmxlJDEoZ2V0Q2FuY2VsQnV0dG9uKCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzU2Nyb2xsYWJsZSA9IGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtKSB7XG4gICAgcmV0dXJuICEhKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjM1MjExOVxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGhhc0Nzc0FuaW1hdGlvbiA9IGZ1bmN0aW9uIGhhc0Nzc0FuaW1hdGlvbihlbGVtKSB7XG4gICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgdmFyIGFuaW1EdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYW5pbWF0aW9uLWR1cmF0aW9uJykgfHwgJzAnKTtcbiAgICB2YXIgdHJhbnNEdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbi1kdXJhdGlvbicpIHx8ICcwJyk7XG4gICAgcmV0dXJuIGFuaW1EdXJhdGlvbiA+IDAgfHwgdHJhbnNEdXJhdGlvbiA+IDA7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlc2V0XG4gICAqL1xuICB2YXIgYW5pbWF0ZVRpbWVyUHJvZ3Jlc3NCYXIgPSBmdW5jdGlvbiBhbmltYXRlVGltZXJQcm9ncmVzc0Jhcih0aW1lcikge1xuICAgIHZhciByZXNldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgaWYgKCF0aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1Zpc2libGUkMSh0aW1lclByb2dyZXNzQmFyKSkge1xuICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICAgICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLnRyYW5zaXRpb24gPSBcIndpZHRoIFwiLmNvbmNhdCh0aW1lciAvIDEwMDAsIFwicyBsaW5lYXJcIik7XG4gICAgICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfTtcbiAgdmFyIHN0b3BUaW1lclByb2dyZXNzQmFyID0gZnVuY3Rpb24gc3RvcFRpbWVyUHJvZ3Jlc3NCYXIoKSB7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXIgPSBnZXRUaW1lclByb2dyZXNzQmFyKCk7XG4gICAgaWYgKCF0aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lclByb2dyZXNzQmFyV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdGltZXJQcm9ncmVzc0Jhci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbicpO1xuICAgIHRpbWVyUHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJGdWxsV2lkdGggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lclByb2dyZXNzQmFyKS53aWR0aCk7XG4gICAgdmFyIHRpbWVyUHJvZ3Jlc3NCYXJQZXJjZW50ID0gdGltZXJQcm9ncmVzc0JhcldpZHRoIC8gdGltZXJQcm9ncmVzc0JhckZ1bGxXaWR0aCAqIDEwMDtcbiAgICB0aW1lclByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQodGltZXJQcm9ncmVzc0JhclBlcmNlbnQsIFwiJVwiKTtcbiAgfTtcblxuICAvKipcbiAgICogRGV0ZWN0IE5vZGUgZW52XG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzTm9kZUVudiA9IGZ1bmN0aW9uIGlzTm9kZUVudigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJztcbiAgfTtcblxuICB2YXIgc3dlZXRIVE1MID0gXCJcXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ2h0bWwtY29udGFpbmVyJ10sIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxuICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNsb3NlLCBcIlxcXCI+PC9idXR0b24+XFxuICAgPHVsIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddLCBcIlxcXCI+PC91bD5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiXFxcIj48L2Rpdj5cXG4gICA8aW1nIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmltYWdlLCBcIlxcXCIgLz5cXG4gICA8aDIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiPjwvaDI+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1snaHRtbC1jb250YWluZXInXSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydodG1sLWNvbnRhaW5lciddLCBcIlxcXCI+PC9kaXY+XFxuICAgPGlucHV0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0LCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaW5wdXQsIFwiXFxcIiAvPlxcbiAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5maWxlLCBcIlxcXCIgLz5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIlxcXCI+XFxuICAgICA8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIC8+XFxuICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgIDwvZGl2PlxcbiAgIDxzZWxlY3QgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuc2VsZWN0LCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuc2VsZWN0LCBcIlxcXCI+PC9zZWxlY3Q+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCJcXFwiPjwvZGl2PlxcbiAgIDxsYWJlbCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiPlxcbiAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiIC8+XFxuICAgICA8c3BhbiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sYWJlbCwgXCJcXFwiPjwvc3Bhbj5cXG4gICA8L2xhYmVsPlxcbiAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRleHRhcmVhLCBcIlxcXCI+PC90ZXh0YXJlYT5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCJcXFwiPlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5sb2FkZXIsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb25maXJtLCBcIlxcXCI+PC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZGVueSwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCwgXCJcXFwiPjwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZm9vdGVyLCBcIlxcXCI+PC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sndGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciddLCBcIlxcXCI+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd0aW1lci1wcm9ncmVzcy1iYXInXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiA8L2Rpdj5cXG5cIikucmVwbGFjZSgvKF58XFxuKVxccyovZywgJycpO1xuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciByZXNldE9sZENvbnRhaW5lciA9IGZ1bmN0aW9uIHJlc2V0T2xkQ29udGFpbmVyKCkge1xuICAgIHZhciBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICBpZiAoIW9sZENvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvbGRDb250YWluZXIucmVtb3ZlKCk7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWydoYXMtY29sdW1uJ11dKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgdmFyIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSA9IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSB7XG4gICAgZ2xvYmFsU3RhdGUuY3VycmVudEluc3RhbmNlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgfTtcbiAgdmFyIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICB2YXIgaW5wdXQgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgICB2YXIgZmlsZSA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gICAgLyoqIEB0eXBlIHtIVE1MSW5wdXRFbGVtZW50fSAqL1xuICAgIHZhciByYW5nZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gICAgLyoqIEB0eXBlIHtIVE1MT3V0cHV0RWxlbWVudH0gKi9cbiAgICB2YXIgcmFuZ2VPdXRwdXQgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgb3V0cHV0XCIpKTtcbiAgICB2YXIgc2VsZWN0ID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICAgIC8qKiBAdHlwZSB7SFRNTElucHV0RWxlbWVudH0gKi9cbiAgICB2YXIgY2hlY2tib3ggPSBwb3B1cC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICAgIHZhciB0ZXh0YXJlYSA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuICAgIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlJDE7XG4gICAgZmlsZS5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICBzZWxlY3Qub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlJDE7XG4gICAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlJDE7XG4gICAgdGV4dGFyZWEub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMTtcbiAgICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSQxKCk7XG4gICAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICAgIH07XG4gICAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEoKTtcbiAgICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIHZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpIDogdGFyZ2V0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBzZXR1cEFjY2Vzc2liaWxpdHkgPSBmdW5jdGlvbiBzZXR1cEFjY2Vzc2liaWxpdHkocGFyYW1zKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBwYXJhbXMudG9hc3QgPyAnYWxlcnQnIDogJ2RpYWxvZycpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJyk7XG4gICAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsICd0cnVlJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRFbGVtZW50XG4gICAqL1xuICB2YXIgc2V0dXBSVEwgPSBmdW5jdGlvbiBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KSB7XG4gICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldEVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQWRkIG1vZGFsICsgYmFja2Ryb3AgKyBuby13YXIgbWVzc2FnZSBmb3IgUnVzc2lhbnMgdG8gRE9NXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAgIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgY29udGFpbmVyIGlmIGl0IGV4aXN0c1xuICAgIHZhciBvbGRDb250YWluZXJFeGlzdGVkID0gcmVzZXRPbGRDb250YWluZXIoKTtcbiAgICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICAgIGVycm9yKCdTd2VldEFsZXJ0MiByZXF1aXJlcyBkb2N1bWVudCB0byBpbml0aWFsaXplJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuY29udGFpbmVyO1xuICAgIGlmIChvbGRDb250YWluZXJFeGlzdGVkKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzWyduby10cmFuc2l0aW9uJ10pO1xuICAgIH1cbiAgICBzZXRJbm5lckh0bWwoY29udGFpbmVyLCBzd2VldEhUTUwpO1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZ2V0VGFyZ2V0KHBhcmFtcy50YXJnZXQpO1xuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICBzZXR1cEFjY2Vzc2liaWxpdHkocGFyYW1zKTtcbiAgICBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KTtcbiAgICBhZGRJbnB1dENoYW5nZUxpc3RlbmVycygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50IHwgb2JqZWN0IHwgc3RyaW5nfSBwYXJhbVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICovXG4gIHZhciBwYXJzZUh0bWxUb0NvbnRhaW5lciA9IGZ1bmN0aW9uIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtLCB0YXJnZXQpIHtcbiAgICAvLyBET00gZWxlbWVudFxuICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW0pO1xuICAgIH1cblxuICAgIC8vIE9iamVjdFxuICAgIGVsc2UgaWYgKF90eXBlb2YocGFyYW0pID09PSAnb2JqZWN0Jykge1xuICAgICAgaGFuZGxlT2JqZWN0KHBhcmFtLCB0YXJnZXQpO1xuICAgIH1cblxuICAgIC8vIFBsYWluIHN0cmluZ1xuICAgIGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgICBzZXRJbm5lckh0bWwodGFyZ2V0LCBwYXJhbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gcGFyYW1cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFyZ2V0XG4gICAqL1xuICB2YXIgaGFuZGxlT2JqZWN0ID0gZnVuY3Rpb24gaGFuZGxlT2JqZWN0KHBhcmFtLCB0YXJnZXQpIHtcbiAgICAvLyBKUXVlcnkgZWxlbWVudChzKVxuICAgIGlmIChwYXJhbS5qcXVlcnkpIHtcbiAgICAgIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBwYXJhbSk7XG4gICAgfVxuXG4gICAgLy8gRm9yIG90aGVyIG9iamVjdHMgdXNlIHRoZWlyIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgIGVsc2Uge1xuICAgICAgc2V0SW5uZXJIdG1sKHRhcmdldCwgcGFyYW0udG9TdHJpbmcoKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YXJnZXRcbiAgICogQHBhcmFtIHthbnl9IGVsZW1cbiAgICovXG4gIHZhciBoYW5kbGVKcXVlcnlFbGVtID0gZnVuY3Rpb24gaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIGVsZW0pIHtcbiAgICB0YXJnZXQudGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgKGkgaW4gZWxlbSk7IGkrKykge1xuICAgICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHJldHVybnMgeyd3ZWJraXRBbmltYXRpb25FbmQnIHwgJ2FuaW1hdGlvbmVuZCcgfCBmYWxzZX1cbiAgICovXG4gIHZhciBhbmltYXRpb25FbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICAgIGlmIChpc05vZGVFbnYoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdGVzdEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvLyBDaHJvbWUsIFNhZmFyaSBhbmQgT3BlcmFcbiAgICBpZiAodHlwZW9mIHRlc3RFbC5zdHlsZS53ZWJraXRBbmltYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gJ3dlYmtpdEFuaW1hdGlvbkVuZCc7XG4gICAgfVxuXG4gICAgLy8gU3RhbmRhcmQgc3ludGF4XG4gICAgaWYgKHR5cGVvZiB0ZXN0RWwuc3R5bGUuYW5pbWF0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuICdhbmltYXRpb25lbmQnO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0oKTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJBY3Rpb25zID0gZnVuY3Rpb24gcmVuZGVyQWN0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gICAgdmFyIGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgIGlmICghYWN0aW9ucyB8fCAhbG9hZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWN0aW9ucyAoYnV0dG9ucykgd3JhcHBlclxuICAgIGlmICghcGFyYW1zLnNob3dDb25maXJtQnV0dG9uICYmICFwYXJhbXMuc2hvd0RlbnlCdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGFjdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG93KGFjdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoYWN0aW9ucywgcGFyYW1zLCAnYWN0aW9ucycpO1xuXG4gICAgLy8gUmVuZGVyIGFsbCB0aGUgYnV0dG9uc1xuICAgIHJlbmRlckJ1dHRvbnMoYWN0aW9ucywgbG9hZGVyLCBwYXJhbXMpO1xuXG4gICAgLy8gTG9hZGVyXG4gICAgc2V0SW5uZXJIdG1sKGxvYWRlciwgcGFyYW1zLmxvYWRlckh0bWwgfHwgJycpO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MobG9hZGVyLCBwYXJhbXMsICdsb2FkZXInKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYWN0aW9uc1xuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBsb2FkZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXJCdXR0b25zKGFjdGlvbnMsIGxvYWRlciwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbmZpcm1CdXR0b24gPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgdmFyIGRlbnlCdXR0b24gPSBnZXREZW55QnV0dG9uKCk7XG4gICAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICAgIGlmICghY29uZmlybUJ1dHRvbiB8fCAhZGVueUJ1dHRvbiB8fCAhY2FuY2VsQnV0dG9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmVuZGVyIGJ1dHRvbnNcbiAgICByZW5kZXJCdXR0b24oY29uZmlybUJ1dHRvbiwgJ2NvbmZpcm0nLCBwYXJhbXMpO1xuICAgIHJlbmRlckJ1dHRvbihkZW55QnV0dG9uLCAnZGVueScsIHBhcmFtcyk7XG4gICAgcmVuZGVyQnV0dG9uKGNhbmNlbEJ1dHRvbiwgJ2NhbmNlbCcsIHBhcmFtcyk7XG4gICAgaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpO1xuICAgIGlmIChwYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoY2FuY2VsQnV0dG9uLCBjb25maXJtQnV0dG9uKTtcbiAgICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUoZGVueUJ1dHRvbiwgY29uZmlybUJ1dHRvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY3Rpb25zLmluc2VydEJlZm9yZShjYW5jZWxCdXR0b24sIGxvYWRlcik7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGRlbnlCdXR0b24sIGxvYWRlcik7XG4gICAgICAgIGFjdGlvbnMuaW5zZXJ0QmVmb3JlKGNvbmZpcm1CdXR0b24sIGxvYWRlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbmZpcm1CdXR0b25cbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZGVueUJ1dHRvblxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjYW5jZWxCdXR0b25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgICByZW1vdmVDbGFzcyhbY29uZmlybUJ1dHRvbiwgZGVueUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkQ2xhc3MoW2NvbmZpcm1CdXR0b24sIGRlbnlCdXR0b24sIGNhbmNlbEJ1dHRvbl0sIHN3YWxDbGFzc2VzLnN0eWxlZCk7XG5cbiAgICAvLyBCdXR0b25zIGJhY2tncm91bmQgY29sb3JzXG4gICAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNvbmZpcm1CdXR0b25Db2xvcjtcbiAgICAgIGFkZENsYXNzKGNvbmZpcm1CdXR0b24sIHN3YWxDbGFzc2VzWydkZWZhdWx0LW91dGxpbmUnXSk7XG4gICAgfVxuICAgIGlmIChwYXJhbXMuZGVueUJ1dHRvbkNvbG9yKSB7XG4gICAgICBkZW55QnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5kZW55QnV0dG9uQ29sb3I7XG4gICAgICBhZGRDbGFzcyhkZW55QnV0dG9uLCBzd2FsQ2xhc3Nlc1snZGVmYXVsdC1vdXRsaW5lJ10pO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yO1xuICAgICAgYWRkQ2xhc3MoY2FuY2VsQnV0dG9uLCBzd2FsQ2xhc3Nlc1snZGVmYXVsdC1vdXRsaW5lJ10pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBidXR0b25cbiAgICogQHBhcmFtIHsnY29uZmlybScgfCAnZGVueScgfCAnY2FuY2VsJ30gYnV0dG9uVHlwZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHJlbmRlckJ1dHRvbihidXR0b24sIGJ1dHRvblR5cGUsIHBhcmFtcykge1xuICAgIHZhciBidXR0b25OYW1lID0gLyoqIEB0eXBlIHsnQ29uZmlybScgfCAnRGVueScgfCAnQ2FuY2VsJ30gKi9jYXBpdGFsaXplRmlyc3RMZXR0ZXIoYnV0dG9uVHlwZSk7XG4gICAgdG9nZ2xlKGJ1dHRvbiwgcGFyYW1zW1wic2hvd1wiLmNvbmNhdChidXR0b25OYW1lLCBcIkJ1dHRvblwiKV0sICdpbmxpbmUtYmxvY2snKTtcbiAgICBzZXRJbm5lckh0bWwoYnV0dG9uLCBwYXJhbXNbXCJcIi5jb25jYXQoYnV0dG9uVHlwZSwgXCJCdXR0b25UZXh0XCIpXSB8fCAnJyk7IC8vIFNldCBjYXB0aW9uIHRleHRcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zW1wiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uQXJpYUxhYmVsXCIpXSB8fCAnJyk7IC8vIEFSSUEgbGFiZWxcblxuICAgIC8vIEFkZCBidXR0b25zIGN1c3RvbSBjbGFzc2VzXG4gICAgYnV0dG9uLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzW2J1dHRvblR5cGVdO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoYnV0dG9uLCBwYXJhbXMsIFwiXCIuY29uY2F0KGJ1dHRvblR5cGUsIFwiQnV0dG9uXCIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlckNsb3NlQnV0dG9uID0gZnVuY3Rpb24gcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBjbG9zZUJ1dHRvbiA9IGdldENsb3NlQnV0dG9uKCk7XG4gICAgaWYgKCFjbG9zZUJ1dHRvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRJbm5lckh0bWwoY2xvc2VCdXR0b24sIHBhcmFtcy5jbG9zZUJ1dHRvbkh0bWwgfHwgJycpO1xuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLCAnY2xvc2VCdXR0b24nKTtcbiAgICB0b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtcy5jbG9zZUJ1dHRvbkFyaWFMYWJlbCB8fCAnJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgcmVuZGVyQ29udGFpbmVyID0gZnVuY3Rpb24gcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaGFuZGxlQmFja2Ryb3BQYXJhbShjb250YWluZXIsIHBhcmFtcy5iYWNrZHJvcCk7XG4gICAgaGFuZGxlUG9zaXRpb25QYXJhbShjb250YWluZXIsIHBhcmFtcy5wb3NpdGlvbik7XG4gICAgaGFuZGxlR3Jvd1BhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmdyb3cpO1xuXG4gICAgLy8gQ3VzdG9tIGNsYXNzXG4gICAgYXBwbHlDdXN0b21DbGFzcyhjb250YWluZXIsIHBhcmFtcywgJ2NvbnRhaW5lcicpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1snYmFja2Ryb3AnXX0gYmFja2Ryb3BcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBiYWNrZHJvcCkge1xuICAgIGlmICh0eXBlb2YgYmFja2Ryb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tkcm9wO1xuICAgIH0gZWxzZSBpZiAoIWJhY2tkcm9wKSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc1sncG9zaXRpb24nXX0gcG9zaXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwb3NpdGlvbikge1xuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzW3Bvc2l0aW9uXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLmNlbnRlcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydncm93J119IGdyb3dcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIGdyb3cpIHtcbiAgICBpZiAoIWdyb3cpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1tcImdyb3ctXCIuY29uY2F0KGdyb3cpXSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtb2R1bGUgY29udGFpbnMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gICAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICAgKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICAgKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAgICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAgICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICAgKi9cblxuICB2YXIgcHJpdmF0ZVByb3BzID0ge1xuICAgIGlubmVyUGFyYW1zOiBuZXcgV2Vha01hcCgpLFxuICAgIGRvbUNhY2hlOiBuZXcgV2Vha01hcCgpXG4gIH07XG5cbiAgLyoqIEB0eXBlIHtJbnB1dENsYXNzW119ICovXG4gIHZhciBpbnB1dENsYXNzZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgcmVuZGVySW5wdXQgPSBmdW5jdGlvbiByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIHZhciByZXJlbmRlciA9ICFpbm5lclBhcmFtcyB8fCBwYXJhbXMuaW5wdXQgIT09IGlubmVyUGFyYW1zLmlucHV0O1xuICAgIGlucHV0Q2xhc3Nlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dENsYXNzKSB7XG4gICAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXREaXJlY3RDaGlsZEJ5Q2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzW2lucHV0Q2xhc3NdKTtcbiAgICAgIGlmICghaW5wdXRDb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzZXQgYXR0cmlidXRlc1xuICAgICAgc2V0QXR0cmlidXRlcyhpbnB1dENsYXNzLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKTtcblxuICAgICAgLy8gc2V0IGNsYXNzXG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tpbnB1dENsYXNzXTtcbiAgICAgIGlmIChyZXJlbmRlcikge1xuICAgICAgICBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAocGFyYW1zLmlucHV0KSB7XG4gICAgICBpZiAocmVyZW5kZXIpIHtcbiAgICAgICAgc2hvd0lucHV0KHBhcmFtcyk7XG4gICAgICB9XG4gICAgICAvLyBzZXQgY3VzdG9tIGNsYXNzXG4gICAgICBzZXRDdXN0b21DbGFzcyhwYXJhbXMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgc2hvd0lucHV0ID0gZnVuY3Rpb24gc2hvd0lucHV0KHBhcmFtcykge1xuICAgIGlmICghcGFyYW1zLmlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0pIHtcbiAgICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcIi5jb25jYXQoT2JqZWN0LmtleXMocmVuZGVySW5wdXRUeXBlKS5qb2luKCcgfCAnKSwgXCIsIGdvdCBcXFwiXCIpLmNvbmNhdChwYXJhbXMuaW5wdXQsIFwiXFxcIlwiKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpbnB1dENvbnRhaW5lciA9IGdldElucHV0Q29udGFpbmVyKHBhcmFtcy5pbnB1dCk7XG4gICAgdmFyIGlucHV0ID0gcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0oaW5wdXRDb250YWluZXIsIHBhcmFtcyk7XG4gICAgc2hvdyhpbnB1dENvbnRhaW5lcik7XG5cbiAgICAvLyBpbnB1dCBhdXRvZm9jdXNcbiAgICBpZiAocGFyYW1zLmlucHV0QXV0b0ZvY3VzKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICovXG4gIHZhciByZW1vdmVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGF0dHJOYW1lID0gaW5wdXQuYXR0cmlidXRlc1tpXS5uYW1lO1xuICAgICAgaWYgKCFbJ2lkJywgJ3R5cGUnLCAndmFsdWUnLCAnc3R5bGUnXS5pbmNsdWRlcyhhdHRyTmFtZSkpIHtcbiAgICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SW5wdXRDbGFzc30gaW5wdXRDbGFzc1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydpbnB1dEF0dHJpYnV0ZXMnXX0gaW5wdXRBdHRyaWJ1dGVzXG4gICAqL1xuICB2YXIgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoaW5wdXRDbGFzcywgaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgdmFyIGlucHV0ID0gZ2V0SW5wdXQkMShnZXRQb3B1cCgpLCBpbnB1dENsYXNzKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbW92ZUF0dHJpYnV0ZXMoaW5wdXQpO1xuICAgIGZvciAodmFyIGF0dHIgaW4gaW5wdXRBdHRyaWJ1dGVzKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgaW5wdXRBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHNldEN1c3RvbUNsYXNzID0gZnVuY3Rpb24gc2V0Q3VzdG9tQ2xhc3MocGFyYW1zKSB7XG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0SW5wdXRDb250YWluZXIocGFyYW1zLmlucHV0KTtcbiAgICBpZiAoX3R5cGVvZihwYXJhbXMuY3VzdG9tQ2xhc3MpID09PSAnb2JqZWN0Jykge1xuICAgICAgYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBzZXRJbnB1dFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKSB7XG4gICAgaWYgKCFpbnB1dC5wbGFjZWhvbGRlciB8fCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SW5wdXR9IGlucHV0XG4gICAqIEBwYXJhbSB7SW5wdXR9IHByZXBlbmRUb1xuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBzZXRJbnB1dExhYmVsID0gZnVuY3Rpb24gc2V0SW5wdXRMYWJlbChpbnB1dCwgcHJlcGVuZFRvLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmlucHV0TGFiZWwpIHtcbiAgICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICB2YXIgbGFiZWxDbGFzcyA9IHN3YWxDbGFzc2VzWydpbnB1dC1sYWJlbCddO1xuICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpbnB1dC5pZCk7XG4gICAgICBsYWJlbC5jbGFzc05hbWUgPSBsYWJlbENsYXNzO1xuICAgICAgaWYgKF90eXBlb2YocGFyYW1zLmN1c3RvbUNsYXNzKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgYWRkQ2xhc3MobGFiZWwsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dExhYmVsKTtcbiAgICAgIH1cbiAgICAgIGxhYmVsLmlubmVyVGV4dCA9IHBhcmFtcy5pbnB1dExhYmVsO1xuICAgICAgcHJlcGVuZFRvLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBsYWJlbCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydpbnB1dCddfSBpbnB1dFR5cGVcbiAgICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICAgKi9cbiAgdmFyIGdldElucHV0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0SW5wdXRDb250YWluZXIoaW5wdXRUeXBlKSB7XG4gICAgcmV0dXJuIGdldERpcmVjdENoaWxkQnlDbGFzcyhnZXRQb3B1cCgpLCBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVdIHx8IHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTE91dHB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50fSBpbnB1dFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zWydpbnB1dFZhbHVlJ119IGlucHV0VmFsdWVcbiAgICovXG4gIHZhciBjaGVja0FuZFNldElucHV0VmFsdWUgPSBmdW5jdGlvbiBjaGVja0FuZFNldElucHV0VmFsdWUoaW5wdXQsIGlucHV0VmFsdWUpIHtcbiAgICBpZiAoWydzdHJpbmcnLCAnbnVtYmVyJ10uaW5jbHVkZXMoX3R5cGVvZihpbnB1dFZhbHVlKSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gXCJcIi5jb25jYXQoaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICghaXNQcm9taXNlKGlucHV0VmFsdWUpKSB7XG4gICAgICB3YXJuKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBcXFwibnVtYmVyXFxcIiBvciBcXFwiUHJvbWlzZVxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KF90eXBlb2YoaW5wdXRWYWx1ZSksIFwiXFxcIlwiKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBAdHlwZSB7UmVjb3JkPFN3ZWV0QWxlcnRJbnB1dCwgKGlucHV0OiBJbnB1dCB8IEhUTUxFbGVtZW50LCBwYXJhbXM6IFN3ZWV0QWxlcnRPcHRpb25zKSA9PiBJbnB1dD59ICovXG4gIHZhciByZW5kZXJJbnB1dFR5cGUgPSB7fTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG4gICAqL1xuICByZW5kZXJJbnB1dFR5cGUudGV4dCA9IHJlbmRlcklucHV0VHlwZS5lbWFpbCA9IHJlbmRlcklucHV0VHlwZS5wYXNzd29yZCA9IHJlbmRlcklucHV0VHlwZS5udW1iZXIgPSByZW5kZXJJbnB1dFR5cGUudGVsID0gcmVuZGVySW5wdXRUeXBlLnVybCA9IHJlbmRlcklucHV0VHlwZS5zZWFyY2ggPSByZW5kZXJJbnB1dFR5cGUuZGF0ZSA9IHJlbmRlcklucHV0VHlwZVsnZGF0ZXRpbWUtbG9jYWwnXSA9IHJlbmRlcklucHV0VHlwZS50aW1lID0gcmVuZGVySW5wdXRUeXBlLndlZWsgPSByZW5kZXJJbnB1dFR5cGUubW9udGggPSBmdW5jdGlvbiAoaW5wdXQsIHBhcmFtcykge1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZShpbnB1dCwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudH0gaW5wdXRcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLmZpbGUgPSBmdW5jdGlvbiAoaW5wdXQsIHBhcmFtcykge1xuICAgIHNldElucHV0TGFiZWwoaW5wdXQsIGlucHV0LCBwYXJhbXMpO1xuICAgIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IHJhbmdlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTElucHV0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5yYW5nZSA9IGZ1bmN0aW9uIChyYW5nZSwgcGFyYW1zKSB7XG4gICAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIHZhciByYW5nZU91dHB1dCA9IHJhbmdlLnF1ZXJ5U2VsZWN0b3IoJ291dHB1dCcpO1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZShyYW5nZUlucHV0LCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICAgIGNoZWNrQW5kU2V0SW5wdXRWYWx1ZShyYW5nZU91dHB1dCwgcGFyYW1zLmlucHV0VmFsdWUpO1xuICAgIHNldElucHV0TGFiZWwocmFuZ2VJbnB1dCwgcmFuZ2UsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJhbmdlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxTZWxlY3RFbGVtZW50fSBzZWxlY3RcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MU2VsZWN0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0LCBwYXJhbXMpIHtcbiAgICBzZWxlY3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAocGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgc2V0SW5uZXJIdG1sKHBsYWNlaG9sZGVyLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgICBwbGFjZWhvbGRlci52YWx1ZSA9ICcnO1xuICAgICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcbiAgICB9XG4gICAgc2V0SW5wdXRMYWJlbChzZWxlY3QsIHNlbGVjdCwgcGFyYW1zKTtcbiAgICByZXR1cm4gc2VsZWN0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IHJhZGlvXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLnJhZGlvID0gZnVuY3Rpb24gKHJhZGlvKSB7XG4gICAgcmFkaW8udGV4dENvbnRlbnQgPSAnJztcbiAgICByZXR1cm4gcmFkaW87XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTExhYmVsRWxlbWVudH0gY2hlY2tib3hDb250YWluZXJcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVySW5wdXRUeXBlLmNoZWNrYm94ID0gZnVuY3Rpb24gKGNoZWNrYm94Q29udGFpbmVyLCBwYXJhbXMpIHtcbiAgICB2YXIgY2hlY2tib3ggPSBnZXRJbnB1dCQxKGdldFBvcHVwKCksICdjaGVja2JveCcpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gJzEnO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICB2YXIgbGFiZWwgPSBjaGVja2JveENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgc2V0SW5uZXJIdG1sKGxhYmVsLCBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcik7XG4gICAgcmV0dXJuIGNoZWNrYm94O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxUZXh0QXJlYUVsZW1lbnR9IHRleHRhcmVhXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTFRleHRBcmVhRWxlbWVudH1cbiAgICovXG4gIHJlbmRlcklucHV0VHlwZS50ZXh0YXJlYSA9IGZ1bmN0aW9uICh0ZXh0YXJlYSwgcGFyYW1zKSB7XG4gICAgY2hlY2tBbmRTZXRJbnB1dFZhbHVlKHRleHRhcmVhLCBwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gICAgc2V0SW5wdXRQbGFjZWhvbGRlcih0ZXh0YXJlYSwgcGFyYW1zKTtcbiAgICBzZXRJbnB1dExhYmVsKHRleHRhcmVhLCB0ZXh0YXJlYSwgcGFyYW1zKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICB2YXIgZ2V0TWFyZ2luID0gZnVuY3Rpb24gZ2V0TWFyZ2luKGVsKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLm1hcmdpbkxlZnQpICsgcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpLm1hcmdpblJpZ2h0KTtcbiAgICB9O1xuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yMjkxXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzE2OTlcbiAgICAgIGlmICgnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgIHZhciBpbml0aWFsUG9wdXBXaWR0aCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdldFBvcHVwKCkpLndpZHRoKTtcbiAgICAgICAgdmFyIHRleHRhcmVhUmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uIHRleHRhcmVhUmVzaXplSGFuZGxlcigpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB0ZXhhcmVhIGlzIHN0aWxsIGluIGRvY3VtZW50IChpLmUuIHBvcHVwIHdhc24ndCBjbG9zZWQgaW4gdGhlIG1lYW50aW1lKVxuICAgICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyh0ZXh0YXJlYSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHRleHRhcmVhV2lkdGggPSB0ZXh0YXJlYS5vZmZzZXRXaWR0aCArIGdldE1hcmdpbih0ZXh0YXJlYSk7XG4gICAgICAgICAgaWYgKHRleHRhcmVhV2lkdGggPiBpbml0aWFsUG9wdXBXaWR0aCkge1xuICAgICAgICAgICAgZ2V0UG9wdXAoKS5zdHlsZS53aWR0aCA9IFwiXCIuY29uY2F0KHRleHRhcmVhV2lkdGgsIFwicHhcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUoZ2V0UG9wdXAoKSwgJ3dpZHRoJywgcGFyYW1zLndpZHRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIG5ldyBNdXRhdGlvbk9ic2VydmVyKHRleHRhcmVhUmVzaXplSGFuZGxlcikub2JzZXJ2ZSh0ZXh0YXJlYSwge1xuICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBbJ3N0eWxlJ11cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRleHRhcmVhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlckNvbnRlbnQgPSBmdW5jdGlvbiByZW5kZXJDb250ZW50KGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICB2YXIgaHRtbENvbnRhaW5lciA9IGdldEh0bWxDb250YWluZXIoKTtcbiAgICBpZiAoIWh0bWxDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvd1doZW5Jbm5lckh0bWxQcmVzZW50KGh0bWxDb250YWluZXIpO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaHRtbENvbnRhaW5lciwgcGFyYW1zLCAnaHRtbENvbnRhaW5lcicpO1xuXG4gICAgLy8gQ29udGVudCBhcyBIVE1MXG4gICAgaWYgKHBhcmFtcy5odG1sKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgaHRtbENvbnRhaW5lcik7XG4gICAgICBzaG93KGh0bWxDb250YWluZXIsICdibG9jaycpO1xuICAgIH1cblxuICAgIC8vIENvbnRlbnQgYXMgcGxhaW4gdGV4dFxuICAgIGVsc2UgaWYgKHBhcmFtcy50ZXh0KSB7XG4gICAgICBodG1sQ29udGFpbmVyLnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgICBzaG93KGh0bWxDb250YWluZXIsICdibG9jaycpO1xuICAgIH1cblxuICAgIC8vIE5vIGNvbnRlbnRcbiAgICBlbHNlIHtcbiAgICAgIGhpZGUoaHRtbENvbnRhaW5lcik7XG4gICAgfVxuICAgIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlckZvb3RlciA9IGZ1bmN0aW9uIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGZvb3RlciA9IGdldEZvb3RlcigpO1xuICAgIGlmICghZm9vdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3dXaGVuSW5uZXJIdG1sUHJlc2VudChmb290ZXIpO1xuICAgIHRvZ2dsZShmb290ZXIsIHBhcmFtcy5mb290ZXIsICdibG9jaycpO1xuICAgIGlmIChwYXJhbXMuZm9vdGVyKSB7XG4gICAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuZm9vdGVyLCBmb290ZXIpO1xuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoZm9vdGVyLCBwYXJhbXMsICdmb290ZXInKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJJY29uID0gZnVuY3Rpb24gcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgdmFyIGljb24gPSBnZXRJY29uKCk7XG4gICAgaWYgKCFpY29uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIGdpdmVuIGljb24gYWxyZWFkeSByZW5kZXJlZCwgYXBwbHkgdGhlIHN0eWxpbmcgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGljb25cbiAgICBpZiAoaW5uZXJQYXJhbXMgJiYgcGFyYW1zLmljb24gPT09IGlubmVyUGFyYW1zLmljb24pIHtcbiAgICAgIC8vIEN1c3RvbSBvciBkZWZhdWx0IGNvbnRlbnRcbiAgICAgIHNldENvbnRlbnQoaWNvbiwgcGFyYW1zKTtcbiAgICAgIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghcGFyYW1zLmljb24gJiYgIXBhcmFtcy5pY29uSHRtbCkge1xuICAgICAgaGlkZShpY29uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5pY29uICYmIE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMuaWNvbikgPT09IC0xKSB7XG4gICAgICBlcnJvcihcIlVua25vd24gaWNvbiEgRXhwZWN0ZWQgXFxcInN1Y2Nlc3NcXFwiLCBcXFwiZXJyb3JcXFwiLCBcXFwid2FybmluZ1xcXCIsIFxcXCJpbmZvXFxcIiBvciBcXFwicXVlc3Rpb25cXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMuaWNvbiwgXCJcXFwiXCIpKTtcbiAgICAgIGhpZGUoaWNvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3coaWNvbik7XG5cbiAgICAvLyBDdXN0b20gb3IgZGVmYXVsdCBjb250ZW50XG4gICAgc2V0Q29udGVudChpY29uLCBwYXJhbXMpO1xuICAgIGFwcGx5U3R5bGVzKGljb24sIHBhcmFtcyk7XG5cbiAgICAvLyBBbmltYXRlIGljb25cbiAgICBhZGRDbGFzcyhpY29uLCBwYXJhbXMuc2hvd0NsYXNzICYmIHBhcmFtcy5zaG93Q2xhc3MuaWNvbik7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGljb25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgYXBwbHlTdHlsZXMgPSBmdW5jdGlvbiBhcHBseVN0eWxlcyhpY29uLCBwYXJhbXMpIHtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3QkZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGljb25UeXBlcyk7IF9pIDwgX09iamVjdCRlbnRyaWVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9PYmplY3QkZW50cmllcyRfaSA9IF9zbGljZWRUb0FycmF5KF9PYmplY3QkZW50cmllc1tfaV0sIDIpLFxuICAgICAgICBpY29uVHlwZSA9IF9PYmplY3QkZW50cmllcyRfaVswXSxcbiAgICAgICAgaWNvbkNsYXNzTmFtZSA9IF9PYmplY3QkZW50cmllcyRfaVsxXTtcbiAgICAgIGlmIChwYXJhbXMuaWNvbiAhPT0gaWNvblR5cGUpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoaWNvbiwgaWNvbkNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZENsYXNzKGljb24sIHBhcmFtcy5pY29uICYmIGljb25UeXBlc1twYXJhbXMuaWNvbl0pO1xuXG4gICAgLy8gSWNvbiBjb2xvclxuICAgIHNldENvbG9yKGljb24sIHBhcmFtcyk7XG5cbiAgICAvLyBTdWNjZXNzIGljb24gYmFja2dyb3VuZCBjb2xvclxuICAgIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dyb3VuZENvbG9yKCk7XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcywgJ2ljb24nKTtcbiAgfTtcblxuICAvLyBBZGp1c3Qgc3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHBvcHVwIGJhY2tncm91bmQgY29sb3JcbiAgdmFyIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dyb3VuZENvbG9yID0gZnVuY3Rpb24gYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ3JvdW5kQ29sb3IoKSB7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAoIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgLyoqIEB0eXBlIHtOb2RlTGlzdE9mPEhUTUxFbGVtZW50Pn0gKi9cbiAgICB2YXIgc3VjY2Vzc0ljb25QYXJ0cyA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXSwgLnN3YWwyLXN1Y2Nlc3MtZml4Jyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWNjZXNzSWNvblBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICAgIH1cbiAgfTtcbiAgdmFyIHN1Y2Nlc3NJY29uSHRtbCA9IFwiXFxuICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtbGVmdFxcXCI+PC9kaXY+XFxuICA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcXFwiPjwvc3Bhbj5cXG4gIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtcmluZ1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtZml4XFxcIj48L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodFxcXCI+PC9kaXY+XFxuXCI7XG4gIHZhciBlcnJvckljb25IdG1sID0gXCJcXG4gIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtbGVmdFxcXCI+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcXFwiPjwvc3Bhbj5cXG4gIDwvc3Bhbj5cXG5cIjtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gaWNvblxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBzZXRDb250ZW50ID0gZnVuY3Rpb24gc2V0Q29udGVudChpY29uLCBwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcy5pY29uICYmICFwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9sZENvbnRlbnQgPSBpY29uLmlubmVySFRNTDtcbiAgICB2YXIgbmV3Q29udGVudCA9ICcnO1xuICAgIGlmIChwYXJhbXMuaWNvbkh0bWwpIHtcbiAgICAgIG5ld0NvbnRlbnQgPSBpY29uQ29udGVudChwYXJhbXMuaWNvbkh0bWwpO1xuICAgIH0gZWxzZSBpZiAocGFyYW1zLmljb24gPT09ICdzdWNjZXNzJykge1xuICAgICAgbmV3Q29udGVudCA9IHN1Y2Nlc3NJY29uSHRtbDtcbiAgICAgIG9sZENvbnRlbnQgPSBvbGRDb250ZW50LnJlcGxhY2UoLyBzdHlsZT1cIi4qP1wiL2csICcnKTsgLy8gdW5kbyBhZGp1c3RTdWNjZXNzSWNvbkJhY2tncm91bmRDb2xvcigpXG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbiA9PT0gJ2Vycm9yJykge1xuICAgICAgbmV3Q29udGVudCA9IGVycm9ySWNvbkh0bWw7XG4gICAgfSBlbHNlIGlmIChwYXJhbXMuaWNvbikge1xuICAgICAgdmFyIGRlZmF1bHRJY29uSHRtbCA9IHtcbiAgICAgICAgcXVlc3Rpb246ICc/JyxcbiAgICAgICAgd2FybmluZzogJyEnLFxuICAgICAgICBpbmZvOiAnaSdcbiAgICAgIH07XG4gICAgICBuZXdDb250ZW50ID0gaWNvbkNvbnRlbnQoZGVmYXVsdEljb25IdG1sW3BhcmFtcy5pY29uXSk7XG4gICAgfVxuICAgIGlmIChvbGRDb250ZW50LnRyaW0oKSAhPT0gbmV3Q29udGVudC50cmltKCkpIHtcbiAgICAgIHNldElubmVySHRtbChpY29uLCBuZXdDb250ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGljb25cbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgc2V0Q29sb3IgPSBmdW5jdGlvbiBzZXRDb2xvcihpY29uLCBwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcy5pY29uQ29sb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWNvbi5zdHlsZS5jb2xvciA9IHBhcmFtcy5pY29uQ29sb3I7XG4gICAgaWNvbi5zdHlsZS5ib3JkZXJDb2xvciA9IHBhcmFtcy5pY29uQ29sb3I7XG4gICAgZm9yICh2YXIgX2kyID0gMCwgX2FyciA9IFsnLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXAnLCAnLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nJywgJy5zd2FsMi14LW1hcmstbGluZS1sZWZ0JywgJy5zd2FsMi14LW1hcmstbGluZS1yaWdodCddOyBfaTIgPCBfYXJyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBzZWwgPSBfYXJyW19pMl07XG4gICAgICBzZXRTdHlsZShpY29uLCBzZWwsICdiYWNrZ3JvdW5kLWNvbG9yJywgcGFyYW1zLmljb25Db2xvcik7XG4gICAgfVxuICAgIHNldFN0eWxlKGljb24sICcuc3dhbDItc3VjY2Vzcy1yaW5nJywgJ2JvcmRlci1jb2xvcicsIHBhcmFtcy5pY29uQ29sb3IpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgdmFyIGljb25Db250ZW50ID0gZnVuY3Rpb24gaWNvbkNvbnRlbnQoY29udGVudCkge1xuICAgIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlc1snaWNvbi1jb250ZW50J10sIFwiXFxcIj5cIikuY29uY2F0KGNvbnRlbnQsIFwiPC9kaXY+XCIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlckltYWdlID0gZnVuY3Rpb24gcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG4gICAgaWYgKCFpbWFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXBhcmFtcy5pbWFnZVVybCkge1xuICAgICAgaGlkZShpbWFnZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNob3coaW1hZ2UsICcnKTtcblxuICAgIC8vIFNyYywgYWx0XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwYXJhbXMuaW1hZ2VVcmwpO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0IHx8ICcnKTtcblxuICAgIC8vIFdpZHRoLCBoZWlnaHRcbiAgICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnd2lkdGgnLCBwYXJhbXMuaW1hZ2VXaWR0aCk7XG4gICAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7XG5cbiAgICAvLyBDbGFzc1xuICAgIGltYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmltYWdlO1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MoaW1hZ2UsIHBhcmFtcywgJ2ltYWdlJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICB2YXIgcmVuZGVyUG9wdXAgPSBmdW5jdGlvbiByZW5kZXJQb3B1cChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFjb250YWluZXIgfHwgIXBvcHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gV2lkdGhcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIxNzBcbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBhcHBseU51bWVyaWNhbFN0eWxlKGNvbnRhaW5lciwgJ3dpZHRoJywgcGFyYW1zLndpZHRoKTtcbiAgICAgIHBvcHVwLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgdmFyIGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgICAgbG9hZGVyICYmIHBvcHVwLmluc2VydEJlZm9yZShsb2FkZXIsIGdldEljb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICdwYWRkaW5nJywgcGFyYW1zLnBhZGRpbmcpO1xuXG4gICAgLy8gQ29sb3JcbiAgICBpZiAocGFyYW1zLmNvbG9yKSB7XG4gICAgICBwb3B1cC5zdHlsZS5jb2xvciA9IHBhcmFtcy5jb2xvcjtcbiAgICB9XG5cbiAgICAvLyBCYWNrZ3JvdW5kXG4gICAgaWYgKHBhcmFtcy5iYWNrZ3JvdW5kKSB7XG4gICAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gICAgfVxuICAgIGhpZGUoZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSk7XG5cbiAgICAvLyBDbGFzc2VzXG4gICAgYWRkQ2xhc3NlcyQxKHBvcHVwLCBwYXJhbXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBhZGRDbGFzc2VzJDEgPSBmdW5jdGlvbiBhZGRDbGFzc2VzKHBvcHVwLCBwYXJhbXMpIHtcbiAgICB2YXIgc2hvd0NsYXNzID0gcGFyYW1zLnNob3dDbGFzcyB8fCB7fTtcbiAgICAvLyBEZWZhdWx0IENsYXNzICsgc2hvd0NsYXNzIHdoZW4gdXBkYXRpbmcgU3dhbC51cGRhdGUoe30pXG4gICAgcG9wdXAuY2xhc3NOYW1lID0gXCJcIi5jb25jYXQoc3dhbENsYXNzZXMucG9wdXAsIFwiIFwiKS5jb25jYXQoaXNWaXNpYmxlJDEocG9wdXApID8gc2hvd0NsYXNzLnBvcHVwIDogJycpO1xuICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubW9kYWwpO1xuICAgIH1cblxuICAgIC8vIEN1c3RvbSBjbGFzc1xuICAgIGFwcGx5Q3VzdG9tQ2xhc3MocG9wdXAsIHBhcmFtcywgJ3BvcHVwJyk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuY3VzdG9tQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgICB9XG5cbiAgICAvLyBJY29uIGNsYXNzICgjMTg0MilcbiAgICBpZiAocGFyYW1zLmljb24pIHtcbiAgICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlc1tcImljb24tXCIuY29uY2F0KHBhcmFtcy5pY29uKV0pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciByZW5kZXJQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG4gICAgaWYgKCFwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBwcm9ncmVzc1N0ZXBzID0gcGFyYW1zLnByb2dyZXNzU3RlcHMsXG4gICAgICBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXA7XG4gICAgaWYgKCFwcm9ncmVzc1N0ZXBzIHx8IHByb2dyZXNzU3RlcHMubGVuZ3RoID09PSAwIHx8IGN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2hvdyhwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gICAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcHJvZ3Jlc3NTdGVwcy5sZW5ndGgpIHtcbiAgICAgIHdhcm4oJ0ludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggJyArICcoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKScpO1xuICAgIH1cbiAgICBwcm9ncmVzc1N0ZXBzLmZvckVhY2goZnVuY3Rpb24gKHN0ZXAsIGluZGV4KSB7XG4gICAgICB2YXIgc3RlcEVsID0gY3JlYXRlU3RlcEVsZW1lbnQoc3RlcCk7XG4gICAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZXBFbCk7XG4gICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgICAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1snYWN0aXZlLXByb2dyZXNzLXN0ZXAnXSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggIT09IHByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgICB2YXIgbGluZUVsID0gY3JlYXRlTGluZUVsZW1lbnQocGFyYW1zKTtcbiAgICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc3RlcFxuICAgKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH1cbiAgICovXG4gIHZhciBjcmVhdGVTdGVwRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBFbGVtZW50KHN0ZXApIHtcbiAgICB2YXIgc3RlcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pO1xuICAgIHNldElubmVySHRtbChzdGVwRWwsIHN0ZXApO1xuICAgIHJldHVybiBzdGVwRWw7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7SFRNTExJRWxlbWVudH1cbiAgICovXG4gIHZhciBjcmVhdGVMaW5lRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxpbmVFbGVtZW50KHBhcmFtcykge1xuICAgIHZhciBsaW5lRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZENsYXNzKGxpbmVFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAtbGluZSddKTtcbiAgICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgICAgYXBwbHlOdW1lcmljYWxTdHlsZShsaW5lRWwsICd3aWR0aCcsIHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gbGluZUVsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlclRpdGxlID0gZnVuY3Rpb24gcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93V2hlbklubmVySHRtbFByZXNlbnQodGl0bGUpO1xuICAgIHRvZ2dsZSh0aXRsZSwgcGFyYW1zLnRpdGxlIHx8IHBhcmFtcy50aXRsZVRleHQsICdibG9jaycpO1xuICAgIGlmIChwYXJhbXMudGl0bGUpIHtcbiAgICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy50aXRsZSwgdGl0bGUpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLnRpdGxlVGV4dCkge1xuICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgICB9XG5cbiAgICAvLyBDdXN0b20gY2xhc3NcbiAgICBhcHBseUN1c3RvbUNsYXNzKHRpdGxlLCBwYXJhbXMsICd0aXRsZScpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJJbWFnZShpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJUaXRsZShpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJDbG9zZUJ1dHRvbihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICByZW5kZXJDb250ZW50KGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gICAgcmVuZGVyRm9vdGVyKGluc3RhbmNlLCBwYXJhbXMpO1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKHR5cGVvZiBwYXJhbXMuZGlkUmVuZGVyID09PSAnZnVuY3Rpb24nICYmIHBvcHVwKSB7XG4gICAgICBwYXJhbXMuZGlkUmVuZGVyKHBvcHVwKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiBTd2VldEFsZXJ0MiBwb3B1cCBpcyBzaG93blxuICAgKi9cbiAgdmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gaXNWaXNpYmxlJDEoZ2V0UG9wdXAoKSk7XG4gIH07XG5cbiAgLypcbiAgICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDb25maXJtJyBidXR0b25cbiAgICovXG4gIHZhciBjbGlja0NvbmZpcm0gPSBmdW5jdGlvbiBjbGlja0NvbmZpcm0oKSB7XG4gICAgdmFyIF9kb20kZ2V0Q29uZmlybUJ1dHRvbjtcbiAgICByZXR1cm4gKF9kb20kZ2V0Q29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKSkgPT09IG51bGwgfHwgX2RvbSRnZXRDb25maXJtQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9tJGdldENvbmZpcm1CdXR0b24uY2xpY2soKTtcbiAgfTtcblxuICAvKlxuICAgKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0RlbnknIGJ1dHRvblxuICAgKi9cbiAgdmFyIGNsaWNrRGVueSA9IGZ1bmN0aW9uIGNsaWNrRGVueSgpIHtcbiAgICB2YXIgX2RvbSRnZXREZW55QnV0dG9uO1xuICAgIHJldHVybiAoX2RvbSRnZXREZW55QnV0dG9uID0gZ2V0RGVueUJ1dHRvbigpKSA9PT0gbnVsbCB8fCBfZG9tJGdldERlbnlCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kb20kZ2V0RGVueUJ1dHRvbi5jbGljaygpO1xuICB9O1xuXG4gIC8qXG4gICAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAgICovXG4gIHZhciBjbGlja0NhbmNlbCA9IGZ1bmN0aW9uIGNsaWNrQ2FuY2VsKCkge1xuICAgIHZhciBfZG9tJGdldENhbmNlbEJ1dHRvbjtcbiAgICByZXR1cm4gKF9kb20kZ2V0Q2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCkpID09PSBudWxsIHx8IF9kb20kZ2V0Q2FuY2VsQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZG9tJGdldENhbmNlbEJ1dHRvbi5jbGljaygpO1xuICB9O1xuXG4gIC8qKiBAdHlwZWRlZiB7J2NhbmNlbCcgfCAnYmFja2Ryb3AnIHwgJ2Nsb3NlJyB8ICdlc2MnIHwgJ3RpbWVyJ30gRGlzbWlzc1JlYXNvbiAqL1xuXG4gIC8qKiBAdHlwZSB7UmVjb3JkPERpc21pc3NSZWFzb24sIERpc21pc3NSZWFzb24+fSAqL1xuICB2YXIgRGlzbWlzc1JlYXNvbiA9IE9iamVjdC5mcmVlemUoe1xuICAgIGNhbmNlbDogJ2NhbmNlbCcsXG4gICAgYmFja2Ryb3A6ICdiYWNrZHJvcCcsXG4gICAgY2xvc2U6ICdjbG9zZScsXG4gICAgZXNjOiAnZXNjJyxcbiAgICB0aW1lcjogJ3RpbWVyJ1xuICB9KTtcblxuICAvKipcbiAgICogQHBhcmFtIHtHbG9iYWxTdGF0ZX0gZ2xvYmFsU3RhdGVcbiAgICovXG4gIHZhciByZW1vdmVLZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIHJlbW92ZUtleWRvd25IYW5kbGVyKGdsb2JhbFN0YXRlKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0geyp9IGRpc21pc3NXaXRoXG4gICAqL1xuICB2YXIgYWRkS2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBhZGRLZXlkb3duSGFuZGxlcihnbG9iYWxTdGF0ZSwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgcmVtb3ZlS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUpO1xuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmV0dXJuIGtleWRvd25IYW5kbGVyKGlubmVyUGFyYW1zLCBlLCBkaXNtaXNzV2l0aCk7XG4gICAgICB9O1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBnZXRQb3B1cCgpO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZW1lbnRcbiAgICovXG4gIHZhciBzZXRGb2N1cyA9IGZ1bmN0aW9uIHNldEZvY3VzKGluZGV4LCBpbmNyZW1lbnQpIHtcbiAgICB2YXIgX2RvbSRnZXRQb3B1cDtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cygpO1xuICAgIC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG4gICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDtcblxuICAgICAgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuICAgICAgaWYgKGluZGV4ID09PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgIC8vIGdvIHRvIGxhc3QgaXRlbVxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgICAgZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcbiAgICAoX2RvbSRnZXRQb3B1cCA9IGdldFBvcHVwKCkpID09PSBudWxsIHx8IF9kb20kZ2V0UG9wdXAgPT09IHZvaWQgMCB8fCBfZG9tJGdldFBvcHVwLmZvY3VzKCk7XG4gIH07XG4gIHZhciBhcnJvd0tleXNOZXh0QnV0dG9uID0gWydBcnJvd1JpZ2h0JywgJ0Fycm93RG93biddO1xuICB2YXIgYXJyb3dLZXlzUHJldmlvdXNCdXR0b24gPSBbJ0Fycm93TGVmdCcsICdBcnJvd1VwJ107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnRcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzbWlzc1dpdGhcbiAgICovXG4gIHZhciBrZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGlubmVyUGFyYW1zLCBldmVudCwgZGlzbWlzc1dpdGgpIHtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47IC8vIFRoaXMgaW5zdGFuY2UgaGFzIGFscmVhZHkgYmVlbiBkZXN0cm95ZWRcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUga2V5ZG93biBkdXJpbmcgSU1FIGNvbXBvc2l0aW9uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0RvY3VtZW50L2tleWRvd25fZXZlbnQjaWdub3Jpbmdfa2V5ZG93bl9kdXJpbmdfaW1lX2NvbXBvc2l0aW9uXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy83MjBcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI0MDZcbiAgICBpZiAoZXZlbnQuaXNDb21wb3NpbmcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMjI5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBFTlRFUlxuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGhhbmRsZUVudGVyKGV2ZW50LCBpbm5lclBhcmFtcyk7XG4gICAgfVxuXG4gICAgLy8gVEFCXG4gICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgaGFuZGxlVGFiKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvLyBBUlJPV1MgLSBzd2l0Y2ggZm9jdXMgYmV0d2VlbiBidXR0b25zXG4gICAgZWxzZSBpZiAoW10uY29uY2F0KGFycm93S2V5c05leHRCdXR0b24sIGFycm93S2V5c1ByZXZpb3VzQnV0dG9uKS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICBoYW5kbGVBcnJvd3MoZXZlbnQua2V5KTtcbiAgICB9XG5cbiAgICAvLyBFU0NcbiAgICBlbHNlIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBoYW5kbGVFc2MoZXZlbnQsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50XG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqL1xuICB2YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcihldmVudCwgaW5uZXJQYXJhbXMpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzIzODZcbiAgICBpZiAoIWNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RW50ZXJLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpbnB1dCA9IGdldElucHV0JDEoZ2V0UG9wdXAoKSwgaW5uZXJQYXJhbXMuaW5wdXQpO1xuICAgIGlmIChldmVudC50YXJnZXQgJiYgaW5wdXQgJiYgZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgZXZlbnQudGFyZ2V0Lm91dGVySFRNTCA9PT0gaW5wdXQub3V0ZXJIVE1MKSB7XG4gICAgICBpZiAoWyd0ZXh0YXJlYScsICdmaWxlJ10uaW5jbHVkZXMoaW5uZXJQYXJhbXMuaW5wdXQpKSB7XG4gICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgfVxuICAgICAgY2xpY2tDb25maXJtKCk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKi9cbiAgdmFyIGhhbmRsZVRhYiA9IGZ1bmN0aW9uIGhhbmRsZVRhYihldmVudCkge1xuICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKCk7XG4gICAgdmFyIGJ0bkluZGV4ID0gLTE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW2ldKSB7XG4gICAgICAgIGJ0bkluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgaWYgKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgIGVsc2Uge1xuICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIC0xKTtcbiAgICB9XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgKi9cbiAgdmFyIGhhbmRsZUFycm93cyA9IGZ1bmN0aW9uIGhhbmRsZUFycm93cyhrZXkpIHtcbiAgICB2YXIgYWN0aW9ucyA9IGdldEFjdGlvbnMoKTtcbiAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgICB2YXIgZGVueUJ1dHRvbiA9IGdldERlbnlCdXR0b24oKTtcbiAgICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gICAgaWYgKCFhY3Rpb25zIHx8ICFjb25maXJtQnV0dG9uIHx8ICFkZW55QnV0dG9uIHx8ICFjYW5jZWxCdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqIEB0eXBlIEhUTUxFbGVtZW50W10gKi9cbiAgICB2YXIgYnV0dG9ucyA9IFtjb25maXJtQnV0dG9uLCBkZW55QnV0dG9uLCBjYW5jZWxCdXR0b25dO1xuICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgIWJ1dHRvbnMuaW5jbHVkZXMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHNpYmxpbmcgPSBhcnJvd0tleXNOZXh0QnV0dG9uLmluY2x1ZGVzKGtleSkgPyAnbmV4dEVsZW1lbnRTaWJsaW5nJyA6ICdwcmV2aW91c0VsZW1lbnRTaWJsaW5nJztcbiAgICB2YXIgYnV0dG9uVG9Gb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKCFidXR0b25Ub0ZvY3VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9ucy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgYnV0dG9uVG9Gb2N1cyA9IGJ1dHRvblRvRm9jdXNbc2libGluZ107XG4gICAgICBpZiAoIWJ1dHRvblRvRm9jdXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGJ1dHRvblRvRm9jdXMgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCAmJiBpc1Zpc2libGUkMShidXR0b25Ub0ZvY3VzKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJ1dHRvblRvRm9jdXMgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xuICAgICAgYnV0dG9uVG9Gb2N1cy5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgdmFyIGhhbmRsZUVzYyA9IGZ1bmN0aW9uIGhhbmRsZUVzYyhldmVudCwgaW5uZXJQYXJhbXMsIGRpc21pc3NXaXRoKSB7XG4gICAgaWYgKGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RXNjYXBlS2V5KSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpc21pc3NXaXRoKERpc21pc3NSZWFzb24uZXNjKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kdWxlIGNvbnRhaW5zIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICAgKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAgICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAgICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gICAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gICAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAgICovXG5cbiAgdmFyIHByaXZhdGVNZXRob2RzID0ge1xuICAgIHN3YWxQcm9taXNlUmVzb2x2ZTogbmV3IFdlYWtNYXAoKSxcbiAgICBzd2FsUHJvbWlzZVJlamVjdDogbmV3IFdlYWtNYXAoKVxuICB9O1xuXG4gIC8vIEZyb20gaHR0cHM6Ly9kZXZlbG9wZXIucGFjaWVsbG9ncm91cC5jb20vYmxvZy8yMDE4LzA2L3RoZS1jdXJyZW50LXN0YXRlLW9mLW1vZGFsLWRpYWxvZy1hY2Nlc3NpYmlsaXR5L1xuICAvLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbiAgLy8gZWxlbWVudHMgbm90IHdpdGhpbiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyB3aWxsIG5vdCBiZSBzdXJmYWNlZCBpZiBhIHVzZXIgb3BlbnMgYSBzY3JlZW5cbiAgLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbiAgdmFyIHNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiBzZXRBcmlhSGlkZGVuKCkge1xuICAgIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgICB2YXIgYm9keUNoaWxkcmVuID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIGlmIChlbC5jb250YWlucyhjb250YWluZXIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpIHx8ICcnKTtcbiAgICAgIH1cbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0pO1xuICB9O1xuICB2YXIgdW5zZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gdW5zZXRBcmlhSGlkZGVuKCkge1xuICAgIHZhciBib2R5Q2hpbGRyZW4gPSBBcnJheS5mcm9tKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICAgIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKSB7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSB8fCAnJyk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIEB0cy1pZ25vcmVcbiAgdmFyIGlzU2FmYXJpT3JJT1MgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhIXdpbmRvdy5HZXN0dXJlRXZlbnQ7IC8vIHRydWUgZm9yIFNhZmFyaSBkZXNrdG9wICsgYWxsIGlPUyBicm93c2VycyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNzA1ODUzOTRcblxuICAvKipcbiAgICogRml4IGlPUyBzY3JvbGxpbmdcbiAgICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk2MjYzMDJcbiAgICovXG4gIHZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gICAgaWYgKGlzU2FmYXJpT3JJT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gXCJcIi5jb25jYXQob2Zmc2V0ICogLTEsIFwicHhcIik7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgICAgbG9ja0JvZHlTY3JvbGwoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0NlxuICAgKi9cbiAgdmFyIGxvY2tCb2R5U2Nyb2xsID0gZnVuY3Rpb24gbG9ja0JvZHlTY3JvbGwoKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgICB2YXIgcHJldmVudFRvdWNoTW92ZTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY29udGFpbmVyLm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcHJldmVudFRvdWNoTW92ZSA9IHNob3VsZFByZXZlbnRUb3VjaE1vdmUoZXZlbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNvbnRhaW5lci5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKHByZXZlbnRUb3VjaE1vdmUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtUb3VjaEV2ZW50fSBldmVudFxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBzaG91bGRQcmV2ZW50VG91Y2hNb3ZlID0gZnVuY3Rpb24gc2hvdWxkUHJldmVudFRvdWNoTW92ZShldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIHZhciBodG1sQ29udGFpbmVyID0gZ2V0SHRtbENvbnRhaW5lcigpO1xuICAgIGlmICghY29udGFpbmVyIHx8ICFodG1sQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpc1N0eWx1cyhldmVudCkgfHwgaXNab29tKGV2ZW50KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSBjb250YWluZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWlzU2Nyb2xsYWJsZShjb250YWluZXIpICYmIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnICYmXG4gICAgLy8gIzE2MDNcbiAgICB0YXJnZXQudGFnTmFtZSAhPT0gJ1RFWFRBUkVBJyAmJlxuICAgIC8vICMyMjY2XG4gICAgIShpc1Njcm9sbGFibGUoaHRtbENvbnRhaW5lcikgJiZcbiAgICAvLyAjMTk0NFxuICAgIGh0bWxDb250YWluZXIuY29udGFpbnModGFyZ2V0KSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTc4NlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzU3R5bHVzID0gZnVuY3Rpb24gaXNTdHlsdXMoZXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQudG91Y2hlcyAmJiBldmVudC50b3VjaGVzLmxlbmd0aCAmJiBldmVudC50b3VjaGVzWzBdLnRvdWNoVHlwZSA9PT0gJ3N0eWx1cyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMTg5MVxuICAgKlxuICAgKiBAcGFyYW0ge1RvdWNoRXZlbnR9IGV2ZW50XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGlzWm9vbSA9IGZ1bmN0aW9uIGlzWm9vbShldmVudCkge1xuICAgIHJldHVybiBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMTtcbiAgfTtcbiAgdmFyIHVuZG9JT1NmaXggPSBmdW5jdGlvbiB1bmRvSU9TZml4KCkge1xuICAgIGlmIChoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpKSB7XG4gICAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcnO1xuICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIE1lYXN1cmUgc2Nyb2xsYmFyIHdpZHRoIGZvciBwYWRkaW5nIGJvZHkgZHVyaW5nIG1vZGFsIHNob3cvaGlkZVxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvanMvc3JjL21vZGFsLmpzXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICB2YXIgbWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNjcm9sbERpdi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1snc2Nyb2xsYmFyLW1lYXN1cmUnXTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gICAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlbWVtYmVyIHN0YXRlIGluIGNhc2VzIHdoZXJlIG9wZW5pbmcgYW5kIGhhbmRsaW5nIGEgbW9kYWwgd2lsbCBmaWRkbGUgd2l0aCBpdC5cbiAgICogQHR5cGUge251bWJlciB8IG51bGx9XG4gICAqL1xuICB2YXIgcHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpbml0aWFsQm9keU92ZXJmbG93XG4gICAqL1xuICB2YXIgcmVwbGFjZVNjcm9sbGJhcldpdGhQYWRkaW5nID0gZnVuY3Rpb24gcmVwbGFjZVNjcm9sbGJhcldpdGhQYWRkaW5nKGluaXRpYWxCb2R5T3ZlcmZsb3cpIHtcbiAgICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICAgIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGlmIHRoZSBib2R5IGhhcyBvdmVyZmxvd1xuICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCB8fCBpbml0aWFsQm9keU92ZXJmbG93ID09PSAnc2Nyb2xsJyAvLyBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvaXNzdWVzLzI2NjNcbiAgICApIHtcbiAgICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICAgIHByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIlwiLmNvbmNhdChwcmV2aW91c0JvZHlQYWRkaW5nICsgbWVhc3VyZVNjcm9sbGJhcigpLCBcInB4XCIpO1xuICAgIH1cbiAgfTtcbiAgdmFyIHVuZG9SZXBsYWNlU2Nyb2xsYmFyV2l0aFBhZGRpbmcgPSBmdW5jdGlvbiB1bmRvUmVwbGFjZVNjcm9sbGJhcldpdGhQYWRkaW5nKCkge1xuICAgIGlmIChwcmV2aW91c0JvZHlQYWRkaW5nICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiXCIuY29uY2F0KHByZXZpb3VzQm9keVBhZGRpbmcsIFwicHhcIik7XG4gICAgICBwcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmV0dXJuRm9jdXNcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZGlkQ2xvc2VcbiAgICovXG4gIGZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpIHtcbiAgICBpZiAoaXNUb2FzdCgpKSB7XG4gICAgICB0cmlnZ2VyRGlkQ2xvc2VBbmREaXNwb3NlKGluc3RhbmNlLCBkaWRDbG9zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3RvcmVBY3RpdmVFbGVtZW50KHJldHVybkZvY3VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIGRpZENsb3NlKTtcbiAgICAgIH0pO1xuICAgICAgcmVtb3ZlS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUpO1xuICAgIH1cblxuICAgIC8vIHdvcmthcm91bmQgZm9yIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9pc3N1ZXMvMjA4OFxuICAgIC8vIGZvciBzb21lIHJlYXNvbiByZW1vdmluZyB0aGUgY29udGFpbmVyIGluIFNhZmFyaSB3aWxsIHNjcm9sbCB0aGUgZG9jdW1lbnQgdG8gYm90dG9tXG4gICAgaWYgKGlzU2FmYXJpT3JJT1MpIHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50Jyk7XG4gICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgIHVuZG9SZXBsYWNlU2Nyb2xsYmFyV2l0aFBhZGRpbmcoKTtcbiAgICAgIHVuZG9JT1NmaXgoKTtcbiAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgIH1cbiAgICByZW1vdmVCb2R5Q2xhc3NlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBTd2VldEFsZXJ0MiBjbGFzc2VzIGZyb20gYm9keVxuICAgKi9cbiAgZnVuY3Rpb24gcmVtb3ZlQm9keUNsYXNzZXMoKSB7XG4gICAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlcy5zaG93biwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXV0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbmNlIG1ldGhvZCB0byBjbG9zZSBzd2VldEFsZXJ0XG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSByZXNvbHZlVmFsdWVcbiAgICovXG4gIGZ1bmN0aW9uIGNsb3NlKHJlc29sdmVWYWx1ZSkge1xuICAgIHJlc29sdmVWYWx1ZSA9IHByZXBhcmVSZXNvbHZlVmFsdWUocmVzb2x2ZVZhbHVlKTtcbiAgICB2YXIgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKTtcbiAgICB2YXIgZGlkQ2xvc2UgPSB0cmlnZ2VyQ2xvc2VQb3B1cCh0aGlzKTtcbiAgICBpZiAodGhpcy5pc0F3YWl0aW5nUHJvbWlzZSkge1xuICAgICAgLy8gQSBzd2FsIGF3YWl0aW5nIGZvciBhIHByb21pc2UgKGFmdGVyIGEgY2xpY2sgb24gQ29uZmlybSBvciBEZW55KSBjYW5ub3QgYmUgZGlzbWlzc2VkIGFueW1vcmUgIzIzMzVcbiAgICAgIGlmICghcmVzb2x2ZVZhbHVlLmlzRGlzbWlzc2VkKSB7XG4gICAgICAgIGhhbmRsZUF3YWl0aW5nUHJvbWlzZSh0aGlzKTtcbiAgICAgICAgc3dhbFByb21pc2VSZXNvbHZlKHJlc29sdmVWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaWRDbG9zZSkge1xuICAgICAgLy8gUmVzb2x2ZSBTd2FsIHByb21pc2VcbiAgICAgIHN3YWxQcm9taXNlUmVzb2x2ZShyZXNvbHZlVmFsdWUpO1xuICAgIH1cbiAgfVxuICB2YXIgdHJpZ2dlckNsb3NlUG9wdXAgPSBmdW5jdGlvbiB0cmlnZ2VyQ2xvc2VQb3B1cChpbnN0YW5jZSkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICAgIGFkZENsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApO1xuICAgIHZhciBiYWNrZHJvcCA9IGdldENvbnRhaW5lcigpO1xuICAgIHJlbW92ZUNsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApO1xuICAgIGFkZENsYXNzKGJhY2tkcm9wLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MuYmFja2Ryb3ApO1xuICAgIGhhbmRsZVBvcHVwQW5pbWF0aW9uKGluc3RhbmNlLCBwb3B1cCwgaW5uZXJQYXJhbXMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gZXJyb3JcbiAgICovXG4gIGZ1bmN0aW9uIHJlamVjdFByb21pc2UoZXJyb3IpIHtcbiAgICB2YXIgcmVqZWN0UHJvbWlzZSA9IHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVqZWN0LmdldCh0aGlzKTtcbiAgICBoYW5kbGVBd2FpdGluZ1Byb21pc2UodGhpcyk7XG4gICAgaWYgKHJlamVjdFByb21pc2UpIHtcbiAgICAgIC8vIFJlamVjdCBTd2FsIHByb21pc2VcbiAgICAgIHJlamVjdFByb21pc2UoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqL1xuICB2YXIgaGFuZGxlQXdhaXRpbmdQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlQXdhaXRpbmdQcm9taXNlKGluc3RhbmNlKSB7XG4gICAgaWYgKGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlKSB7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuaXNBd2FpdGluZ1Byb21pc2U7XG4gICAgICAvLyBUaGUgaW5zdGFuY2UgbWlnaHQgaGF2ZSBiZWVuIHByZXZpb3VzbHkgcGFydGx5IGRlc3Ryb3llZCwgd2UgbXVzdCByZXN1bWUgdGhlIGRlc3Ryb3kgcHJvY2VzcyBpbiB0aGlzIGNhc2UgIzIzMzVcbiAgICAgIGlmICghcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSkpIHtcbiAgICAgICAgaW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7YW55fSByZXNvbHZlVmFsdWVcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRSZXN1bHR9XG4gICAqL1xuICB2YXIgcHJlcGFyZVJlc29sdmVWYWx1ZSA9IGZ1bmN0aW9uIHByZXBhcmVSZXNvbHZlVmFsdWUocmVzb2x2ZVZhbHVlKSB7XG4gICAgLy8gV2hlbiB1c2VyIGNhbGxzIFN3YWwuY2xvc2UoKVxuICAgIGlmICh0eXBlb2YgcmVzb2x2ZVZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNDb25maXJtZWQ6IGZhbHNlLFxuICAgICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICAgIGlzRGlzbWlzc2VkOiB0cnVlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgICBpc0NvbmZpcm1lZDogZmFsc2UsXG4gICAgICBpc0RlbmllZDogZmFsc2UsXG4gICAgICBpc0Rpc21pc3NlZDogZmFsc2VcbiAgICB9LCByZXNvbHZlVmFsdWUpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqL1xuICB2YXIgaGFuZGxlUG9wdXBBbmltYXRpb24gPSBmdW5jdGlvbiBoYW5kbGVQb3B1cEFuaW1hdGlvbihpbnN0YW5jZSwgcG9wdXAsIGlubmVyUGFyYW1zKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICAgIC8vIElmIGFuaW1hdGlvbiBpcyBzdXBwb3J0ZWQsIGFuaW1hdGVcbiAgICB2YXIgYW5pbWF0aW9uSXNTdXBwb3J0ZWQgPSBhbmltYXRpb25FbmRFdmVudCAmJiBoYXNDc3NBbmltYXRpb24ocG9wdXApO1xuICAgIGlmICh0eXBlb2YgaW5uZXJQYXJhbXMud2lsbENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpbm5lclBhcmFtcy53aWxsQ2xvc2UocG9wdXApO1xuICAgIH1cbiAgICBpZiAoYW5pbWF0aW9uSXNTdXBwb3J0ZWQpIHtcbiAgICAgIGFuaW1hdGVQb3B1cChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgaW5uZXJQYXJhbXMucmV0dXJuRm9jdXMsIGlubmVyUGFyYW1zLmRpZENsb3NlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShpbnN0YW5jZSwgY29udGFpbmVyLCBpbm5lclBhcmFtcy5yZXR1cm5Gb2N1cywgaW5uZXJQYXJhbXMuZGlkQ2xvc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJcbiAgICogQHBhcmFtIHtib29sZWFufSByZXR1cm5Gb2N1c1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaWRDbG9zZVxuICAgKi9cbiAgdmFyIGFuaW1hdGVQb3B1cCA9IGZ1bmN0aW9uIGFuaW1hdGVQb3B1cChpbnN0YW5jZSwgcG9wdXAsIGNvbnRhaW5lciwgcmV0dXJuRm9jdXMsIGRpZENsb3NlKSB7XG4gICAgaWYgKCFhbmltYXRpb25FbmRFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2sgPSByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUuYmluZChudWxsLCBpbnN0YW5jZSwgY29udGFpbmVyLCByZXR1cm5Gb2N1cywgZGlkQ2xvc2UpO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwKSB7XG4gICAgICAgIGdsb2JhbFN0YXRlLnN3YWxDbG9zZUV2ZW50RmluaXNoZWRDYWxsYmFjaygpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpZENsb3NlXG4gICAqL1xuICB2YXIgdHJpZ2dlckRpZENsb3NlQW5kRGlzcG9zZSA9IGZ1bmN0aW9uIHRyaWdnZXJEaWRDbG9zZUFuZERpc3Bvc2UoaW5zdGFuY2UsIGRpZENsb3NlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodHlwZW9mIGRpZENsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGRpZENsb3NlLmJpbmQoaW5zdGFuY2UucGFyYW1zKSgpO1xuICAgICAgfVxuICAgICAgLy8gaW5zdGFuY2UgbWlnaHQgaGF2ZSBiZWVuIGRlc3Ryb3llZCBhbHJlYWR5XG4gICAgICBpZiAoaW5zdGFuY2UuX2Rlc3Ryb3kpIHtcbiAgICAgICAgaW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogU2hvd3MgbG9hZGVyIChzcGlubmVyKSwgdGhpcyBpcyB1c2VmdWwgd2l0aCBBSkFYIHJlcXVlc3RzLlxuICAgKiBCeSBkZWZhdWx0IHRoZSBsb2FkZXIgYmUgc2hvd24gaW5zdGVhZCBvZiB0aGUgXCJDb25maXJtXCIgYnV0dG9uLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxCdXR0b25FbGVtZW50IHwgbnVsbH0gW2J1dHRvblRvUmVwbGFjZV1cbiAgICovXG4gIHZhciBzaG93TG9hZGluZyA9IGZ1bmN0aW9uIHNob3dMb2FkaW5nKGJ1dHRvblRvUmVwbGFjZSkge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgbmV3IFN3YWwoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICB9XG4gICAgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxvYWRlciA9IGdldExvYWRlcigpO1xuICAgIGlmIChpc1RvYXN0KCkpIHtcbiAgICAgIGhpZGUoZ2V0SWNvbigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVwbGFjZUJ1dHRvbihwb3B1cCwgYnV0dG9uVG9SZXBsYWNlKTtcbiAgICB9XG4gICAgc2hvdyhsb2FkZXIpO1xuICAgIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgJ3RydWUnKTtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYnVzeScsICd0cnVlJyk7XG4gICAgcG9wdXAuZm9jdXMoKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtIVE1MQnV0dG9uRWxlbWVudCB8IG51bGx9IFtidXR0b25Ub1JlcGxhY2VdXG4gICAqL1xuICB2YXIgcmVwbGFjZUJ1dHRvbiA9IGZ1bmN0aW9uIHJlcGxhY2VCdXR0b24ocG9wdXAsIGJ1dHRvblRvUmVwbGFjZSkge1xuICAgIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICAgIHZhciBsb2FkZXIgPSBnZXRMb2FkZXIoKTtcbiAgICBpZiAoIWFjdGlvbnMgfHwgIWxvYWRlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWJ1dHRvblRvUmVwbGFjZSAmJiBpc1Zpc2libGUkMShnZXRDb25maXJtQnV0dG9uKCkpKSB7XG4gICAgICBidXR0b25Ub1JlcGxhY2UgPSBnZXRDb25maXJtQnV0dG9uKCk7XG4gICAgfVxuICAgIHNob3coYWN0aW9ucyk7XG4gICAgaWYgKGJ1dHRvblRvUmVwbGFjZSkge1xuICAgICAgaGlkZShidXR0b25Ub1JlcGxhY2UpO1xuICAgICAgbG9hZGVyLnNldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24tdG8tcmVwbGFjZScsIGJ1dHRvblRvUmVwbGFjZS5jbGFzc05hbWUpO1xuICAgICAgYWN0aW9ucy5pbnNlcnRCZWZvcmUobG9hZGVyLCBidXR0b25Ub1JlcGxhY2UpO1xuICAgIH1cbiAgICBhZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0T3B0aW9uc0FuZFZhbHVlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmlucHV0ID09PSAnc2VsZWN0JyB8fCBwYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIGhhbmRsZUlucHV0T3B0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKFsndGV4dCcsICdlbWFpbCcsICdudW1iZXInLCAndGVsJywgJ3RleHRhcmVhJ10uc29tZShmdW5jdGlvbiAoaSkge1xuICAgICAgcmV0dXJuIGkgPT09IHBhcmFtcy5pbnB1dDtcbiAgICB9KSAmJiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0VmFsdWUpIHx8IGlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpKSB7XG4gICAgICBzaG93TG9hZGluZyhnZXRDb25maXJtQnV0dG9uKCkpO1xuICAgICAgaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRJbnB1dFZhbHVlfVxuICAgKi9cbiAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcykge1xuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgaWYgKCFpbnB1dCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN3aXRjaCAoaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIGdldENoZWNrYm94VmFsdWUoaW5wdXQpO1xuICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICByZXR1cm4gZ2V0UmFkaW9WYWx1ZShpbnB1dCk7XG4gICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgcmV0dXJuIGdldEZpbGVWYWx1ZShpbnB1dCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRBdXRvVHJpbSA/IGlucHV0LnZhbHVlLnRyaW0oKSA6IGlucHV0LnZhbHVlO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgdmFyIGdldENoZWNrYm94VmFsdWUgPSBmdW5jdGlvbiBnZXRDaGVja2JveFZhbHVlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxuICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgbnVsbH1cbiAgICovXG4gIHZhciBnZXRSYWRpb1ZhbHVlID0gZnVuY3Rpb24gZ2V0UmFkaW9WYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5jaGVja2VkID8gaW5wdXQudmFsdWUgOiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxJbnB1dEVsZW1lbnR9IGlucHV0XG4gICAqIEByZXR1cm5zIHtGaWxlTGlzdCB8IEZpbGUgfCBudWxsfVxuICAgKi9cbiAgdmFyIGdldEZpbGVWYWx1ZSA9IGZ1bmN0aW9uIGdldEZpbGVWYWx1ZShpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlcy5sZW5ndGggPyBpbnB1dC5nZXRBdHRyaWJ1dGUoJ211bHRpcGxlJykgIT09IG51bGwgPyBpbnB1dC5maWxlcyA6IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBoYW5kbGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcykge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgaWYgKCFwb3B1cCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IGlucHV0T3B0aW9uc1xuICAgICAqL1xuICAgIHZhciBwcm9jZXNzSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHBvcHVsYXRlU2VsZWN0T3B0aW9ucyhwb3B1cCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcyk7XG4gICAgICB9IGVsc2UgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3JhZGlvJykge1xuICAgICAgICBwb3B1bGF0ZVJhZGlvT3B0aW9ucyhwb3B1cCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpZiAoaGFzVG9Qcm9taXNlRm4ocGFyYW1zLmlucHV0T3B0aW9ucykgfHwgaXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgICBzaG93TG9hZGluZyhnZXRDb25maXJtQnV0dG9uKCkpO1xuICAgICAgYXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGlucHV0T3B0aW9ucykge1xuICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykgPT09ICdvYmplY3QnKSB7XG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dE9wdGlvbnMhIEV4cGVjdGVkIG9iamVjdCwgTWFwIG9yIFByb21pc2UsIGdvdCBcIi5jb25jYXQoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSkpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBoYW5kbGVJbnB1dFZhbHVlID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gICAgdmFyIGlucHV0ID0gaW5zdGFuY2UuZ2V0SW5wdXQoKTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGhpZGUoaW5wdXQpO1xuICAgIGFzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkudGhlbihmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXQgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQocGFyc2VGbG9hdChpbnB1dFZhbHVlKSB8fCAwKSA6IFwiXCIuY29uY2F0KGlucHV0VmFsdWUpO1xuICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGVycm9yKFwiRXJyb3IgaW4gaW5wdXRWYWx1ZSBwcm9taXNlOiBcIi5jb25jYXQoZXJyKSk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgc2hvdyhpbnB1dCk7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wdXBcbiAgICogQHBhcmFtIHtJbnB1dE9wdGlvbkZsYXR0ZW5lZFtdfSBpbnB1dE9wdGlvbnNcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiBwb3B1bGF0ZVNlbGVjdE9wdGlvbnMocG9wdXAsIGlucHV0T3B0aW9ucywgcGFyYW1zKSB7XG4gICAgdmFyIHNlbGVjdCA9IGdldERpcmVjdENoaWxkQnlDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICBpZiAoIXNlbGVjdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uTGFiZWxcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9uVmFsdWVcbiAgICAgKi9cbiAgICB2YXIgcmVuZGVyT3B0aW9uID0gZnVuY3Rpb24gcmVuZGVyT3B0aW9uKHBhcmVudCwgb3B0aW9uTGFiZWwsIG9wdGlvblZhbHVlKSB7XG4gICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgIHNldElubmVySHRtbChvcHRpb24sIG9wdGlvbkxhYmVsKTtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGlzU2VsZWN0ZWQob3B0aW9uVmFsdWUsIHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH07XG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICB2YXIgb3B0aW9uVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgIHZhciBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgLy8gPG9wdGdyb3VwPiBzcGVjOlxuICAgICAgLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw0MDEvaW50ZXJhY3QvZm9ybXMuaHRtbCNoLTE3LjZcbiAgICAgIC8vIFwiLi4uYWxsIE9QVEdST1VQIGVsZW1lbnRzIG11c3QgYmUgc3BlY2lmaWVkIGRpcmVjdGx5IHdpdGhpbiBhIFNFTEVDVCBlbGVtZW50IChpLmUuLCBncm91cHMgbWF5IG5vdCBiZSBuZXN0ZWQpLi4uXCJcbiAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBhIDxvcHRncm91cD5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbkxhYmVsKSkge1xuICAgICAgICAvLyBpZiBpdCBpcyBhbiBhcnJheSwgdGhlbiBpdCBpcyBhbiA8b3B0Z3JvdXA+XG4gICAgICAgIHZhciBvcHRncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG4gICAgICAgIG9wdGdyb3VwLmxhYmVsID0gb3B0aW9uVmFsdWU7XG4gICAgICAgIG9wdGdyb3VwLmRpc2FibGVkID0gZmFsc2U7IC8vIG5vdCBjb25maWd1cmFibGUgZm9yIG5vd1xuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0Z3JvdXApO1xuICAgICAgICBvcHRpb25MYWJlbC5mb3JFYWNoKGZ1bmN0aW9uIChvKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlck9wdGlvbihvcHRncm91cCwgb1sxXSwgb1swXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY2FzZSBvZiA8b3B0aW9uPlxuICAgICAgICByZW5kZXJPcHRpb24oc2VsZWN0LCBvcHRpb25MYWJlbCwgb3B0aW9uVmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGVjdC5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqIEBwYXJhbSB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX0gaW5wdXRPcHRpb25zXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gcG9wdWxhdGVSYWRpb09wdGlvbnMocG9wdXAsIGlucHV0T3B0aW9ucywgcGFyYW1zKSB7XG4gICAgdmFyIHJhZGlvID0gZ2V0RGlyZWN0Q2hpbGRCeUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgaWYgKCFyYWRpbykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRPcHRpb24pIHtcbiAgICAgIHZhciByYWRpb1ZhbHVlID0gaW5wdXRPcHRpb25bMF07XG4gICAgICB2YXIgcmFkaW9MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgdmFyIHJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgdmFyIHJhZGlvTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgIHJhZGlvSW5wdXQudHlwZSA9ICdyYWRpbyc7XG4gICAgICByYWRpb0lucHV0Lm5hbWUgPSBzd2FsQ2xhc3Nlcy5yYWRpbztcbiAgICAgIHJhZGlvSW5wdXQudmFsdWUgPSByYWRpb1ZhbHVlO1xuICAgICAgaWYgKGlzU2VsZWN0ZWQocmFkaW9WYWx1ZSwgcGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICAgIHJhZGlvSW5wdXQuY2hlY2tlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBzZXRJbm5lckh0bWwobGFiZWwsIHJhZGlvTGFiZWwpO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMubGFiZWw7XG4gICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcbiAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHJhZGlvLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxFbGVtZW50KTtcbiAgICB9KTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcbiAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiAgICpcbiAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBhbnk+fSBpbnB1dE9wdGlvbnNcbiAgICogQHR5cGVkZWYge3N0cmluZ1tdfSBJbnB1dE9wdGlvbkZsYXR0ZW5lZFxuICAgKiBAcmV0dXJucyB7SW5wdXRPcHRpb25GbGF0dGVuZWRbXX1cbiAgICovXG4gIHZhciBmb3JtYXRJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgLyoqIEB0eXBlIHtJbnB1dE9wdGlvbkZsYXR0ZW5lZFtdfSAqL1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICBpZiAoaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWVGb3JtYXR0ZWQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKF90eXBlb2YodmFsdWVGb3JtYXR0ZWQpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNhc2Ugb2YgPG9wdGdyb3VwPlxuICAgICAgICAgIHZhbHVlRm9ybWF0dGVkID0gZm9ybWF0SW5wdXRPcHRpb25zKHZhbHVlRm9ybWF0dGVkKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQucHVzaChba2V5LCB2YWx1ZUZvcm1hdHRlZF0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKGlucHV0T3B0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZUZvcm1hdHRlZCA9IGlucHV0T3B0aW9uc1trZXldO1xuICAgICAgICBpZiAoX3R5cGVvZih2YWx1ZUZvcm1hdHRlZCkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gY2FzZSBvZiA8b3B0Z3JvdXA+XG4gICAgICAgICAgdmFsdWVGb3JtYXR0ZWQgPSBmb3JtYXRJbnB1dE9wdGlvbnModmFsdWVGb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlRm9ybWF0dGVkXSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvblZhbHVlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydElucHV0VmFsdWV9IGlucHV0VmFsdWVcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNTZWxlY3RlZCA9IGZ1bmN0aW9uIGlzU2VsZWN0ZWQob3B0aW9uVmFsdWUsIGlucHV0VmFsdWUpIHtcbiAgICByZXR1cm4gISFpbnB1dFZhbHVlICYmIGlucHV0VmFsdWUudG9TdHJpbmcoKSA9PT0gb3B0aW9uVmFsdWUudG9TdHJpbmcoKTtcbiAgfTtcblxuICB2YXIgX3RoaXMgPSB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIHZhciBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2soaW5zdGFuY2UpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlKTtcbiAgICBpbnN0YW5jZS5kaXNhYmxlQnV0dG9ucygpO1xuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgJ2NvbmZpcm0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybShpbnN0YW5jZSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqL1xuICB2YXIgaGFuZGxlRGVueUJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMucmV0dXJuSW5wdXRWYWx1ZU9uRGVueSkge1xuICAgICAgaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgJ2RlbnknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVueShpbnN0YW5jZSwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgdmFyIGhhbmRsZUNhbmNlbEJ1dHRvbkNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGRpc21pc3NXaXRoKSB7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUJ1dHRvbnMoKTtcbiAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNhbmNlbCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHsnY29uZmlybScgfCAnZGVueSd9IHR5cGVcbiAgICovXG4gIHZhciBoYW5kbGVDb25maXJtT3JEZW55V2l0aElucHV0ID0gZnVuY3Rpb24gaGFuZGxlQ29uZmlybU9yRGVueVdpdGhJbnB1dChpbnN0YW5jZSwgdHlwZSkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICAgIGlmICghaW5uZXJQYXJhbXMuaW5wdXQpIHtcbiAgICAgIGVycm9yKFwiVGhlIFxcXCJpbnB1dFxcXCIgcGFyYW1ldGVyIGlzIG5lZWRlZCB0byBiZSBzZXQgd2hlbiB1c2luZyByZXR1cm5JbnB1dFZhbHVlT25cIi5jb25jYXQoY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHR5cGUpKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBnZXRJbnB1dFZhbHVlKGluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKSB7XG4gICAgICBoYW5kbGVJbnB1dFZhbGlkYXRvcihpbnN0YW5jZSwgaW5wdXRWYWx1ZSwgdHlwZSk7XG4gICAgfSBlbHNlIGlmIChpbnB1dCAmJiAhaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBpbnN0YW5jZS5lbmFibGVCdXR0b25zKCk7XG4gICAgICBpbnN0YW5jZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UgfHwgaW5wdXQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlbnknKSB7XG4gICAgICBkZW55KGluc3RhbmNlLCBpbnB1dFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydElucHV0VmFsdWV9IGlucHV0VmFsdWVcbiAgICogQHBhcmFtIHsnY29uZmlybScgfCAnZGVueSd9IHR5cGVcbiAgICovXG4gIHZhciBoYW5kbGVJbnB1dFZhbGlkYXRvciA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsaWRhdG9yKGluc3RhbmNlLCBpbnB1dFZhbHVlLCB0eXBlKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gICAgaW5zdGFuY2UuZGlzYWJsZUlucHV0KCk7XG4gICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXNQcm9taXNlKGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgfSk7XG4gICAgdmFsaWRhdGlvblByb21pc2UudGhlbihmdW5jdGlvbiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnMoKTtcbiAgICAgIGluc3RhbmNlLmVuYWJsZUlucHV0KCk7XG4gICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2RlbnknKSB7XG4gICAgICAgIGRlbnkoaW5zdGFuY2UsIGlucHV0VmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmlybShpbnN0YW5jZSwgaW5wdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXG4gICAqL1xuICB2YXIgZGVueSA9IGZ1bmN0aW9uIGRlbnkoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSB8fCBfdGhpcyk7XG4gICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkRlbnkpIHtcbiAgICAgIHNob3dMb2FkaW5nKGdldERlbnlCdXR0b24oKSk7XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5wcmVEZW55KSB7XG4gICAgICBpbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZSA9IHRydWU7IC8vIEZsYWdnaW5nIHRoZSBpbnN0YW5jZSBhcyBhd2FpdGluZyBhIHByb21pc2Ugc28gaXQncyBvd24gcHJvbWlzZSdzIHJlamVjdC9yZXNvbHZlIG1ldGhvZHMgZG9lc24ndCBnZXQgZGVzdHJveWVkIHVudGlsIHRoZSByZXN1bHQgZnJvbSB0aGlzIHByZURlbnkncyBwcm9taXNlIGlzIHJlY2VpdmVkXG4gICAgICB2YXIgcHJlRGVueVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFzUHJvbWlzZShpbm5lclBhcmFtcy5wcmVEZW55KHZhbHVlLCBpbm5lclBhcmFtcy52YWxpZGF0aW9uTWVzc2FnZSkpO1xuICAgICAgfSk7XG4gICAgICBwcmVEZW55UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChwcmVEZW55VmFsdWUpIHtcbiAgICAgICAgaWYgKHByZURlbnlWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpbnN0YW5jZS5oaWRlTG9hZGluZygpO1xuICAgICAgICAgIGhhbmRsZUF3YWl0aW5nUHJvbWlzZShpbnN0YW5jZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zdGFuY2UuY2xvc2Uoe1xuICAgICAgICAgICAgaXNEZW5pZWQ6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogdHlwZW9mIHByZURlbnlWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6IHByZURlbnlWYWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICByZXR1cm4gcmVqZWN0V2l0aChpbnN0YW5jZSB8fCBfdGhpcywgZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLmNsb3NlKHtcbiAgICAgICAgaXNEZW5pZWQ6IHRydWUsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgKi9cbiAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKSB7XG4gICAgaW5zdGFuY2UuY2xvc2Uoe1xuICAgICAgaXNDb25maXJtZWQ6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JcbiAgICovXG4gIHZhciByZWplY3RXaXRoID0gZnVuY3Rpb24gcmVqZWN0V2l0aChpbnN0YW5jZSwgZXJyb3IpIHtcbiAgICBpbnN0YW5jZS5yZWplY3RQcm9taXNlKGVycm9yKTtcbiAgfTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0fSBpbnN0YW5jZVxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAgICovXG4gIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybShpbnN0YW5jZSwgdmFsdWUpIHtcbiAgICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlIHx8IF90aGlzKTtcbiAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgc2hvd0xvYWRpbmcoKTtcbiAgICB9XG4gICAgaWYgKGlubmVyUGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgIGluc3RhbmNlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgICAgIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlID0gdHJ1ZTsgLy8gRmxhZ2dpbmcgdGhlIGluc3RhbmNlIGFzIGF3YWl0aW5nIGEgcHJvbWlzZSBzbyBpdCdzIG93biBwcm9taXNlJ3MgcmVqZWN0L3Jlc29sdmUgbWV0aG9kcyBkb2Vzbid0IGdldCBkZXN0cm95ZWQgdW50aWwgdGhlIHJlc3VsdCBmcm9tIHRoaXMgcHJlQ29uZmlybSdzIHByb21pc2UgaXMgcmVjZWl2ZWRcbiAgICAgIHZhciBwcmVDb25maXJtUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXNQcm9taXNlKGlubmVyUGFyYW1zLnByZUNvbmZpcm0odmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgICB9KTtcbiAgICAgIHByZUNvbmZpcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICBpZiAoaXNWaXNpYmxlJDEoZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSkgfHwgcHJlQ29uZmlybVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgaGFuZGxlQXdhaXRpbmdQcm9taXNlKGluc3RhbmNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdWNjZWVkV2l0aChpbnN0YW5jZSwgdHlwZW9mIHByZUNvbmZpcm1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6IHByZUNvbmZpcm1WYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZWplY3RXaXRoKGluc3RhbmNlIHx8IF90aGlzLCBlcnJvcik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VjY2VlZFdpdGgoaW5zdGFuY2UsIHZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhpZGVzIGxvYWRlciBhbmQgc2hvd3MgYmFjayB0aGUgYnV0dG9uIHdoaWNoIHdhcyBoaWRkZW4gYnkgLnNob3dMb2FkaW5nKClcbiAgICovXG4gIGZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICAgIC8vIGRvIG5vdGhpbmcgaWYgcG9wdXAgaXMgY2xvc2VkXG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIWlubmVyUGFyYW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gICAgaGlkZShkb21DYWNoZS5sb2FkZXIpO1xuICAgIGlmIChpc1RvYXN0KCkpIHtcbiAgICAgIGlmIChpbm5lclBhcmFtcy5pY29uKSB7XG4gICAgICAgIHNob3coZ2V0SWNvbigpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgc2hvd1JlbGF0ZWRCdXR0b24oZG9tQ2FjaGUpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcyhbZG9tQ2FjaGUucG9wdXAsIGRvbUNhY2hlLmFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICAgIGRvbUNhY2hlLnBvcHVwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG4gICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIGRvbUNhY2hlLmRlbnlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgfVxuICB2YXIgc2hvd1JlbGF0ZWRCdXR0b24gPSBmdW5jdGlvbiBzaG93UmVsYXRlZEJ1dHRvbihkb21DYWNoZSkge1xuICAgIHZhciBidXR0b25Ub1JlcGxhY2UgPSBkb21DYWNoZS5wb3B1cC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRvbUNhY2hlLmxvYWRlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uLXRvLXJlcGxhY2UnKSk7XG4gICAgaWYgKGJ1dHRvblRvUmVwbGFjZS5sZW5ndGgpIHtcbiAgICAgIHNob3coYnV0dG9uVG9SZXBsYWNlWzBdLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgfSBlbHNlIGlmIChhbGxCdXR0b25zQXJlSGlkZGVuKCkpIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUuYWN0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbnB1dCBET00gbm9kZSwgdGhpcyBtZXRob2Qgd29ya3Mgd2l0aCBpbnB1dCBwYXJhbWV0ZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIHtIVE1MSW5wdXRFbGVtZW50IHwgbnVsbH1cbiAgICovXG4gIGZ1bmN0aW9uIGdldElucHV0KCkge1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBpZiAoIWRvbUNhY2hlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGdldElucHV0JDEoZG9tQ2FjaGUucG9wdXAsIGlubmVyUGFyYW1zLmlucHV0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IGJ1dHRvbnNcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkKGluc3RhbmNlLCBidXR0b25zLCBkaXNhYmxlZCkge1xuICAgIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgbnVsbH0gaW5wdXRcbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0SW5wdXREaXNhYmxlZChpbnB1dCwgZGlzYWJsZWQpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmICghcG9wdXAgfHwgIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgICAvKiogQHR5cGUge05vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD59ICovXG4gICAgICB2YXIgcmFkaW9zID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIl1cIikpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBhbGwgdGhlIGJ1dHRvbnNcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICAgIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnZGVueUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGUgYWxsIHRoZSBidXR0b25zXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gICAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdkZW55QnV0dG9uJywgJ2NhbmNlbEJ1dHRvbiddLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgdGhlIGlucHV0IGZpZWxkXG4gICAqIEB0aGlzIHtTd2VldEFsZXJ0fVxuICAgKi9cbiAgZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gICAgc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBpbnB1dCBmaWVsZFxuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcbiAgICBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXJyb3JcbiAgICogQHRoaXMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIHZhciBwYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICAgIHNldElubmVySHRtbChkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSwgZXJyb3IpO1xuICAgIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXTtcbiAgICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzICYmIHBhcmFtcy5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgYWRkQ2xhc3MoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UsIHBhcmFtcy5jdXN0b21DbGFzcy52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfVxuICAgIHNob3coZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgJ3RydWUnKTtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG4gICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgIGFkZENsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlkZSBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuICAgKlxuICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSB7XG4gICAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgIGhpZGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH1cbiAgICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG4gICAgaWYgKGlucHV0KSB7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5Jyk7XG4gICAgICByZW1vdmVDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gICAgdGl0bGU6ICcnLFxuICAgIHRpdGxlVGV4dDogJycsXG4gICAgdGV4dDogJycsXG4gICAgaHRtbDogJycsXG4gICAgZm9vdGVyOiAnJyxcbiAgICBpY29uOiB1bmRlZmluZWQsXG4gICAgaWNvbkNvbG9yOiB1bmRlZmluZWQsXG4gICAgaWNvbkh0bWw6IHVuZGVmaW5lZCxcbiAgICB0ZW1wbGF0ZTogdW5kZWZpbmVkLFxuICAgIHRvYXN0OiBmYWxzZSxcbiAgICBhbmltYXRpb246IHRydWUsXG4gICAgc2hvd0NsYXNzOiB7XG4gICAgICBwb3B1cDogJ3N3YWwyLXNob3cnLFxuICAgICAgYmFja2Ryb3A6ICdzd2FsMi1iYWNrZHJvcC1zaG93JyxcbiAgICAgIGljb246ICdzd2FsMi1pY29uLXNob3cnXG4gICAgfSxcbiAgICBoaWRlQ2xhc3M6IHtcbiAgICAgIHBvcHVwOiAnc3dhbDItaGlkZScsXG4gICAgICBiYWNrZHJvcDogJ3N3YWwyLWJhY2tkcm9wLWhpZGUnLFxuICAgICAgaWNvbjogJ3N3YWwyLWljb24taGlkZSdcbiAgICB9LFxuICAgIGN1c3RvbUNsYXNzOiB7fSxcbiAgICB0YXJnZXQ6ICdib2R5JyxcbiAgICBjb2xvcjogdW5kZWZpbmVkLFxuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGhlaWdodEF1dG86IHRydWUsXG4gICAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gICAgYWxsb3dFc2NhcGVLZXk6IHRydWUsXG4gICAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICAgIGtleWRvd25MaXN0ZW5lckNhcHR1cmU6IGZhbHNlLFxuICAgIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICAgIHNob3dEZW55QnV0dG9uOiBmYWxzZSxcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgICBwcmVDb25maXJtOiB1bmRlZmluZWQsXG4gICAgcHJlRGVueTogdW5kZWZpbmVkLFxuICAgIGNvbmZpcm1CdXR0b25UZXh0OiAnT0snLFxuICAgIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGNvbmZpcm1CdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGRlbnlCdXR0b25UZXh0OiAnTm8nLFxuICAgIGRlbnlCdXR0b25BcmlhTGFiZWw6ICcnLFxuICAgIGRlbnlCdXR0b25Db2xvcjogdW5kZWZpbmVkLFxuICAgIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICAgIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gICAgY2FuY2VsQnV0dG9uQ29sb3I6IHVuZGVmaW5lZCxcbiAgICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gICAgZm9jdXNDb25maXJtOiB0cnVlLFxuICAgIGZvY3VzRGVueTogZmFsc2UsXG4gICAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICAgIHJldHVybkZvY3VzOiB0cnVlLFxuICAgIHNob3dDbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgY2xvc2VCdXR0b25IdG1sOiAnJnRpbWVzOycsXG4gICAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gICAgbG9hZGVySHRtbDogJycsXG4gICAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gICAgc2hvd0xvYWRlck9uRGVueTogZmFsc2UsXG4gICAgaW1hZ2VVcmw6IHVuZGVmaW5lZCxcbiAgICBpbWFnZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgaW1hZ2VIZWlnaHQ6IHVuZGVmaW5lZCxcbiAgICBpbWFnZUFsdDogJycsXG4gICAgdGltZXI6IHVuZGVmaW5lZCxcbiAgICB0aW1lclByb2dyZXNzQmFyOiBmYWxzZSxcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxuICAgIHBhZGRpbmc6IHVuZGVmaW5lZCxcbiAgICBiYWNrZ3JvdW5kOiB1bmRlZmluZWQsXG4gICAgaW5wdXQ6IHVuZGVmaW5lZCxcbiAgICBpbnB1dFBsYWNlaG9sZGVyOiAnJyxcbiAgICBpbnB1dExhYmVsOiAnJyxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgICBpbnB1dE9wdGlvbnM6IHt9LFxuICAgIGlucHV0QXV0b0ZvY3VzOiB0cnVlLFxuICAgIGlucHV0QXV0b1RyaW06IHRydWUsXG4gICAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgICBpbnB1dFZhbGlkYXRvcjogdW5kZWZpbmVkLFxuICAgIHJldHVybklucHV0VmFsdWVPbkRlbnk6IGZhbHNlLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiB1bmRlZmluZWQsXG4gICAgZ3JvdzogZmFsc2UsXG4gICAgcG9zaXRpb246ICdjZW50ZXInLFxuICAgIHByb2dyZXNzU3RlcHM6IFtdLFxuICAgIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IHVuZGVmaW5lZCxcbiAgICBwcm9ncmVzc1N0ZXBzRGlzdGFuY2U6IHVuZGVmaW5lZCxcbiAgICB3aWxsT3BlbjogdW5kZWZpbmVkLFxuICAgIGRpZE9wZW46IHVuZGVmaW5lZCxcbiAgICBkaWRSZW5kZXI6IHVuZGVmaW5lZCxcbiAgICB3aWxsQ2xvc2U6IHVuZGVmaW5lZCxcbiAgICBkaWRDbG9zZTogdW5kZWZpbmVkLFxuICAgIGRpZERlc3Ryb3k6IHVuZGVmaW5lZCxcbiAgICBzY3JvbGxiYXJQYWRkaW5nOiB0cnVlXG4gIH07XG4gIHZhciB1cGRhdGFibGVQYXJhbXMgPSBbJ2FsbG93RXNjYXBlS2V5JywgJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2JhY2tncm91bmQnLCAnYnV0dG9uc1N0eWxpbmcnLCAnY2FuY2VsQnV0dG9uQXJpYUxhYmVsJywgJ2NhbmNlbEJ1dHRvbkNvbG9yJywgJ2NhbmNlbEJ1dHRvblRleHQnLCAnY2xvc2VCdXR0b25BcmlhTGFiZWwnLCAnY2xvc2VCdXR0b25IdG1sJywgJ2NvbG9yJywgJ2NvbmZpcm1CdXR0b25BcmlhTGFiZWwnLCAnY29uZmlybUJ1dHRvbkNvbG9yJywgJ2NvbmZpcm1CdXR0b25UZXh0JywgJ2N1cnJlbnRQcm9ncmVzc1N0ZXAnLCAnY3VzdG9tQ2xhc3MnLCAnZGVueUJ1dHRvbkFyaWFMYWJlbCcsICdkZW55QnV0dG9uQ29sb3InLCAnZGVueUJ1dHRvblRleHQnLCAnZGlkQ2xvc2UnLCAnZGlkRGVzdHJveScsICdmb290ZXInLCAnaGlkZUNsYXNzJywgJ2h0bWwnLCAnaWNvbicsICdpY29uQ29sb3InLCAnaWNvbkh0bWwnLCAnaW1hZ2VBbHQnLCAnaW1hZ2VIZWlnaHQnLCAnaW1hZ2VVcmwnLCAnaW1hZ2VXaWR0aCcsICdwcmVDb25maXJtJywgJ3ByZURlbnknLCAncHJvZ3Jlc3NTdGVwcycsICdyZXR1cm5Gb2N1cycsICdyZXZlcnNlQnV0dG9ucycsICdzaG93Q2FuY2VsQnV0dG9uJywgJ3Nob3dDbG9zZUJ1dHRvbicsICdzaG93Q29uZmlybUJ1dHRvbicsICdzaG93RGVueUJ1dHRvbicsICd0ZXh0JywgJ3RpdGxlJywgJ3RpdGxlVGV4dCcsICd3aWxsQ2xvc2UnXTtcblxuICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHN0cmluZz59ICovXG4gIHZhciBkZXByZWNhdGVkUGFyYW1zID0ge307XG4gIHZhciB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFsnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFbnRlcktleScsICdiYWNrZHJvcCcsICdmb2N1c0NvbmZpcm0nLCAnZm9jdXNEZW55JywgJ2ZvY3VzQ2FuY2VsJywgJ3JldHVybkZvY3VzJywgJ2hlaWdodEF1dG8nLCAna2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSddO1xuXG4gIC8qKlxuICAgKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1ZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNWYWxpZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlZmF1bHRQYXJhbXMsIHBhcmFtTmFtZSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIElzIHZhbGlkIHBhcmFtZXRlciBmb3IgU3dhbC51cGRhdGUoKSBtZXRob2RcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIHZhciBpc1VwZGF0YWJsZVBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICAgIHJldHVybiB1cGRhdGFibGVQYXJhbXMuaW5kZXhPZihwYXJhbU5hbWUpICE9PSAtMTtcbiAgfTtcblxuICAvKipcbiAgICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtTmFtZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgdmFyIGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtc1twYXJhbU5hbWVdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cbiAgICovXG4gIHZhciBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSkge1xuICAgIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHdhcm4oXCJVbmtub3duIHBhcmFtZXRlciBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCJcIikpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtXG4gICAqL1xuICB2YXIgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKSB7XG4gICAgaWYgKHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zLmluY2x1ZGVzKHBhcmFtKSkge1xuICAgICAgd2FybihcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c1wiKSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1cbiAgICovXG4gIHZhciBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pIHtcbiAgICB2YXIgaXNEZXByZWNhdGVkID0gaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKTtcbiAgICBpZiAoaXNEZXByZWNhdGVkKSB7XG4gICAgICB3YXJuQWJvdXREZXByZWNhdGlvbihwYXJhbSwgaXNEZXByZWNhdGVkKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFNob3cgcmVsZXZhbnQgd2FybmluZ3MgZm9yIGdpdmVuIHBhcmFtc1xuICAgKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcy5iYWNrZHJvcCA9PT0gZmFsc2UgJiYgcGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSB7XG4gICAgICB3YXJuKCdcImFsbG93T3V0c2lkZUNsaWNrXCIgcGFyYW1ldGVyIHJlcXVpcmVzIGBiYWNrZHJvcGAgcGFyYW1ldGVyIHRvIGJlIHNldCB0byBgdHJ1ZWAnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICBjaGVja0lmUGFyYW1Jc1ZhbGlkKHBhcmFtKTtcbiAgICAgIGlmIChwYXJhbXMudG9hc3QpIHtcbiAgICAgICAgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKTtcbiAgICAgIH1cbiAgICAgIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZChwYXJhbSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHBvcHVwIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgZnVuY3Rpb24gdXBkYXRlKHBhcmFtcykge1xuICAgIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gICAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgICBpZiAoIXBvcHVwIHx8IGhhc0NsYXNzKHBvcHVwLCBpbm5lclBhcmFtcy5oaWRlQ2xhc3MucG9wdXApKSB7XG4gICAgICB3YXJuKFwiWW91J3JlIHRyeWluZyB0byB1cGRhdGUgdGhlIGNsb3NlZCBvciBjbG9zaW5nIHBvcHVwLCB0aGF0IHdvbid0IHdvcmsuIFVzZSB0aGUgdXBkYXRlKCkgbWV0aG9kIGluIHByZUNvbmZpcm0gcGFyYW1ldGVyIG9yIHNob3cgYSBuZXcgcG9wdXAuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSBmaWx0ZXJWYWxpZFBhcmFtcyhwYXJhbXMpO1xuICAgIHZhciB1cGRhdGVkUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSwgaW5uZXJQYXJhbXMsIHZhbGlkVXBkYXRhYmxlUGFyYW1zKTtcbiAgICByZW5kZXIodGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gICAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdmFsdWU6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucGFyYW1zLCBwYXJhbXMpLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGZpbHRlclZhbGlkUGFyYW1zID0gZnVuY3Rpb24gZmlsdGVyVmFsaWRQYXJhbXMocGFyYW1zKSB7XG4gICAgdmFyIHZhbGlkVXBkYXRhYmxlUGFyYW1zID0ge307XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgaWYgKGlzVXBkYXRhYmxlUGFyYW1ldGVyKHBhcmFtKSkge1xuICAgICAgICB2YWxpZFVwZGF0YWJsZVBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybihcIkludmFsaWQgcGFyYW1ldGVyIHRvIHVwZGF0ZTogXCIuY29uY2F0KHBhcmFtKSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbGlkVXBkYXRhYmxlUGFyYW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXNwb3NlIHRoZSBjdXJyZW50IFN3ZWV0QWxlcnQyIGluc3RhbmNlXG4gICAqL1xuICBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICAgIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gICAgaWYgKCFpbm5lclBhcmFtcykge1xuICAgICAgZGlzcG9zZVdlYWtNYXBzKHRoaXMpOyAvLyBUaGUgV2Vha01hcHMgbWlnaHQgaGF2ZSBiZWVuIHBhcnRseSBkZXN0cm95ZWQsIHdlIG11c3QgcmVjYWxsIGl0IHRvIGRpc3Bvc2UgYW55IHJlbWFpbmluZyBXZWFrTWFwcyAjMjMzNVxuICAgICAgcmV0dXJuOyAvLyBUaGlzIGluc3RhbmNlIGhhcyBhbHJlYWR5IGJlZW4gZGVzdHJveWVkXG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYW5vdGhlciBTd2FsIGNsb3NpbmdcbiAgICBpZiAoZG9tQ2FjaGUucG9wdXAgJiYgZ2xvYmFsU3RhdGUuc3dhbENsb3NlRXZlbnRGaW5pc2hlZENhbGxiYWNrKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2soKTtcbiAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5zd2FsQ2xvc2VFdmVudEZpbmlzaGVkQ2FsbGJhY2s7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaW5uZXJQYXJhbXMuZGlkRGVzdHJveSgpO1xuICAgIH1cbiAgICBkaXNwb3NlU3dhbCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqL1xuICB2YXIgZGlzcG9zZVN3YWwgPSBmdW5jdGlvbiBkaXNwb3NlU3dhbChpbnN0YW5jZSkge1xuICAgIGRpc3Bvc2VXZWFrTWFwcyhpbnN0YW5jZSk7XG4gICAgLy8gVW5zZXQgdGhpcy5wYXJhbXMgc28gR0Mgd2lsbCBkaXNwb3NlIGl0ICgjMTU2OSlcbiAgICBkZWxldGUgaW5zdGFuY2UucGFyYW1zO1xuICAgIC8vIFVuc2V0IGdsb2JhbFN0YXRlIHByb3BzIHNvIEdDIHdpbGwgZGlzcG9zZSBnbG9iYWxTdGF0ZSAoIzE1NjkpXG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0O1xuICAgIC8vIFVuc2V0IGN1cnJlbnRJbnN0YW5jZVxuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICovXG4gIHZhciBkaXNwb3NlV2Vha01hcHMgPSBmdW5jdGlvbiBkaXNwb3NlV2Vha01hcHMoaW5zdGFuY2UpIHtcbiAgICAvLyBJZiB0aGUgY3VycmVudCBpbnN0YW5jZSBpcyBhd2FpdGluZyBhIHByb21pc2UgcmVzdWx0LCB3ZSBrZWVwIHRoZSBwcml2YXRlTWV0aG9kcyB0byBjYWxsIHRoZW0gb25jZSB0aGUgcHJvbWlzZSByZXN1bHQgaXMgcmV0cmlldmVkICMyMzM1XG4gICAgaWYgKGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlKSB7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcywgaW5zdGFuY2UpO1xuICAgICAgaW5zdGFuY2UuaXNBd2FpdGluZ1Byb21pc2UgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzLCBpbnN0YW5jZSk7XG4gICAgICB1bnNldFdlYWtNYXBzKHByaXZhdGVQcm9wcywgaW5zdGFuY2UpO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmlzQXdhaXRpbmdQcm9taXNlO1xuICAgICAgLy8gVW5zZXQgaW5zdGFuY2UgbWV0aG9kc1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmRpc2FibGVCdXR0b25zO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmVuYWJsZUJ1dHRvbnM7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuZ2V0SW5wdXQ7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuZGlzYWJsZUlucHV0O1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmVuYWJsZUlucHV0O1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmhpZGVMb2FkaW5nO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmRpc2FibGVMb2FkaW5nO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLnNob3dWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5yZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmNsb3NlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLmNsb3NlUG9wdXA7XG4gICAgICBkZWxldGUgaW5zdGFuY2UuY2xvc2VNb2RhbDtcbiAgICAgIGRlbGV0ZSBpbnN0YW5jZS5jbG9zZVRvYXN0O1xuICAgICAgZGVsZXRlIGluc3RhbmNlLnJlamVjdFByb21pc2U7XG4gICAgICBkZWxldGUgaW5zdGFuY2UudXBkYXRlO1xuICAgICAgZGVsZXRlIGluc3RhbmNlLl9kZXN0cm95O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqL1xuICB2YXIgdW5zZXRXZWFrTWFwcyA9IGZ1bmN0aW9uIHVuc2V0V2Vha01hcHMob2JqLCBpbnN0YW5jZSkge1xuICAgIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgICBvYmpbaV1bXCJkZWxldGVcIl0oaW5zdGFuY2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaW5zdGFuY2VNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBfZGVzdHJveTogX2Rlc3Ryb3ksXG4gICAgY2xvc2U6IGNsb3NlLFxuICAgIGNsb3NlTW9kYWw6IGNsb3NlLFxuICAgIGNsb3NlUG9wdXA6IGNsb3NlLFxuICAgIGNsb3NlVG9hc3Q6IGNsb3NlLFxuICAgIGRpc2FibGVCdXR0b25zOiBkaXNhYmxlQnV0dG9ucyxcbiAgICBkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcbiAgICBkaXNhYmxlTG9hZGluZzogaGlkZUxvYWRpbmcsXG4gICAgZW5hYmxlQnV0dG9uczogZW5hYmxlQnV0dG9ucyxcbiAgICBlbmFibGVJbnB1dDogZW5hYmxlSW5wdXQsXG4gICAgZ2V0SW5wdXQ6IGdldElucHV0LFxuICAgIGhhbmRsZUF3YWl0aW5nUHJvbWlzZTogaGFuZGxlQXdhaXRpbmdQcm9taXNlLFxuICAgIGhpZGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcbiAgICByZWplY3RQcm9taXNlOiByZWplY3RQcm9taXNlLFxuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgc2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgdXBkYXRlOiB1cGRhdGVcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICB2YXIgaGFuZGxlUG9wdXBDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVBvcHVwQ2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkge1xuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgaGFuZGxlVG9hc3RDbGljayhpbm5lclBhcmFtcywgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWdub3JlIGNsaWNrIGV2ZW50cyB0aGF0IGhhZCBtb3VzZWRvd24gb24gdGhlIHBvcHVwIGJ1dCBtb3VzZXVwIG9uIHRoZSBjb250YWluZXJcbiAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiB3aGVuIHRoZSB1c2VyIGRyYWdzIGEgc2xpZGVyXG4gICAgICBoYW5kbGVNb2RhbE1vdXNlZG93bihkb21DYWNoZSk7XG5cbiAgICAgIC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBjb250YWluZXIgYnV0IG1vdXNldXAgb24gdGhlIHBvcHVwXG4gICAgICBoYW5kbGVDb250YWluZXJNb3VzZWRvd24oZG9tQ2FjaGUpO1xuICAgICAgaGFuZGxlTW9kYWxDbGljayhpbm5lclBhcmFtcywgZG9tQ2FjaGUsIGRpc21pc3NXaXRoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICB2YXIgaGFuZGxlVG9hc3RDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVRvYXN0Q2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkge1xuICAgIC8vIENsb3NpbmcgdG9hc3QgYnkgaW50ZXJuYWwgY2xpY2tcbiAgICBkb21DYWNoZS5wb3B1cC5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zICYmIChpc0FueUJ1dHRvblNob3duKGlubmVyUGFyYW1zKSB8fCBpbm5lclBhcmFtcy50aW1lciB8fCBpbm5lclBhcmFtcy5pbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZGlzbWlzc1dpdGgoRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gaW5uZXJQYXJhbXNcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNBbnlCdXR0b25TaG93biA9IGZ1bmN0aW9uIGlzQW55QnV0dG9uU2hvd24oaW5uZXJQYXJhbXMpIHtcbiAgICByZXR1cm4gISEoaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0RlbnlCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24pO1xuICB9O1xuICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqL1xuICB2YXIgaGFuZGxlTW9kYWxNb3VzZWRvd24gPSBmdW5jdGlvbiBoYW5kbGVNb2RhbE1vdXNlZG93bihkb21DYWNoZSkge1xuICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICAgICAgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAvLyBoYXZlIGFueSBvdGhlciBkaXJlY3QgY2hpbGRyZW4gYXNpZGUgb2YgdGhlIHBvcHVwXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvbUNhY2hlfSBkb21DYWNoZVxuICAgKi9cbiAgdmFyIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93biA9IGZ1bmN0aW9uIGhhbmRsZUNvbnRhaW5lck1vdXNlZG93bihkb21DYWNoZSkge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBwcmV2ZW50IHRoZSBtb2RhbCB0ZXh0IGZyb20gYmVpbmcgc2VsZWN0ZWQgb24gZG91YmxlIGNsaWNrIG9uIHRoZSBjb250YWluZXIgKGFsbG93T3V0c2lkZUNsaWNrOiBmYWxzZSlcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIGEgY2hpbGQgb2YgdGhlIHBvcHVwXG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUucG9wdXAgfHwgZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGRpc21pc3NXaXRoXG4gICAqL1xuICB2YXIgaGFuZGxlTW9kYWxDbGljayA9IGZ1bmN0aW9uIGhhbmRsZU1vZGFsQ2xpY2soaW5uZXJQYXJhbXMsIGRvbUNhY2hlLCBkaXNtaXNzV2l0aCkge1xuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChpZ25vcmVPdXRzaWRlQ2xpY2spIHtcbiAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyICYmIGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSkge1xuICAgICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmJhY2tkcm9wKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBpc0pxdWVyeUVsZW1lbnQgPSBmdW5jdGlvbiBpc0pxdWVyeUVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBfdHlwZW9mKGVsZW0pID09PSAnb2JqZWN0JyAmJiBlbGVtLmpxdWVyeTtcbiAgfTtcbiAgdmFyIGlzRWxlbWVudCA9IGZ1bmN0aW9uIGlzRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0gaW5zdGFuY2VvZiBFbGVtZW50IHx8IGlzSnF1ZXJ5RWxlbWVudChlbGVtKTtcbiAgfTtcbiAgdmFyIGFyZ3NUb1BhcmFtcyA9IGZ1bmN0aW9uIGFyZ3NUb1BhcmFtcyhhcmdzKSB7XG4gICAgdmFyIHBhcmFtcyA9IHt9O1xuICAgIGlmIChfdHlwZW9mKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGFyZ3NbMF0pKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHBhcmFtcywgYXJnc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFsndGl0bGUnLCAnaHRtbCcsICdpY29uJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHwgaXNFbGVtZW50KGFyZykpIHtcbiAgICAgICAgICBwYXJhbXNbbmFtZV0gPSBhcmc7XG4gICAgICAgIH0gZWxzZSBpZiAoYXJnICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQobmFtZSwgXCIhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiIG9yIFxcXCJFbGVtZW50XFxcIiwgZ290IFwiKS5jb25jYXQoX3R5cGVvZihhcmcpKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9O1xuXG4gIC8qKlxuICAgKiBNYWluIG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgU3dlZXRBbGVydDIgcG9wdXBcbiAgICpcbiAgICogQHBhcmFtICB7Li4uU3dlZXRBbGVydE9wdGlvbnN9IGFyZ3NcbiAgICogQHJldHVybnMge1Byb21pc2U8U3dlZXRBbGVydFJlc3VsdD59XG4gICAqL1xuICBmdW5jdGlvbiBmaXJlKCkge1xuICAgIHZhciBTd2FsID0gdGhpczsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIF9jb25zdHJ1Y3QoU3dhbCwgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICAgKiBVc2VmdWwgZm9yIHJldXNpbmcgU3dhbCBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogQmVmb3JlOlxuICAgKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gICAqIGNvbnN0IHt2YWx1ZTogZmlyc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBmaXJzdCBuYW1lPycgfSlcbiAgICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAgICpcbiAgICogQWZ0ZXI6XG4gICAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICAgKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICAgKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFRleHRQcm9tcHQoJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JylcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gbWl4aW5QYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnR9XG4gICAqL1xuICBmdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICAgIHZhciBNaXhpblN3YWwgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF90aGlzKSB7XG4gICAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhpblN3YWwpO1xuICAgICAgICByZXR1cm4gX2NhbGxTdXBlcih0aGlzLCBNaXhpblN3YWwsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG4gICAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKE1peGluU3dhbCwgW3tcbiAgICAgICAga2V5OiBcIl9tYWluXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMsIHByaW9yaXR5TWl4aW5QYXJhbXMpIHtcbiAgICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWl4aW5Td2FsLnByb3RvdHlwZSksIFwiX21haW5cIiwgdGhpcykuY2FsbCh0aGlzLCBwYXJhbXMsIE9iamVjdC5hc3NpZ24oe30sIG1peGluUGFyYW1zLCBwcmlvcml0eU1peGluUGFyYW1zKSk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcbiAgICB9KHRoaXMpOyAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIE1peGluU3dhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpcyBzZXQsIHJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAgICogT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHJldHVybnMge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICovXG4gIHZhciBnZXRUaW1lckxlZnQgPSBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5nZXRUaW1lckxlZnQoKTtcbiAgfTtcblxuICAvKipcbiAgICogU3RvcCB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgdmFyIHN0b3BUaW1lciA9IGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgICAgc3RvcFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICAgIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgdmFyIHJlc3VtZVRpbWVyID0gZnVuY3Rpb24gcmVzdW1lVGltZXIoKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHZhciByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0YXJ0KCk7XG4gICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0JhcihyZW1haW5pbmcpO1xuICAgICAgcmV0dXJuIHJlbWFpbmluZztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICAgKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgdmFyIHRvZ2dsZVRpbWVyID0gZnVuY3Rpb24gdG9nZ2xlVGltZXIoKSB7XG4gICAgdmFyIHRpbWVyID0gZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICByZXR1cm4gdGltZXIgJiYgKHRpbWVyLnJ1bm5pbmcgPyBzdG9wVGltZXIoKSA6IHJlc3VtZVRpbWVyKCkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbmNyZWFzZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIGFuIHVwZGF0ZWQgdGltZXIuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtc1xuICAgKiBAcmV0dXJucyB7bnVtYmVyIHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgdmFyIGluY3JlYXNlVGltZXIgPSBmdW5jdGlvbiBpbmNyZWFzZVRpbWVyKG1zKSB7XG4gICAgaWYgKGdsb2JhbFN0YXRlLnRpbWVvdXQpIHtcbiAgICAgIHZhciByZW1haW5pbmcgPSBnbG9iYWxTdGF0ZS50aW1lb3V0LmluY3JlYXNlKG1zKTtcbiAgICAgIGFuaW1hdGVUaW1lclByb2dyZXNzQmFyKHJlbWFpbmluZywgdHJ1ZSk7XG4gICAgICByZXR1cm4gcmVtYWluaW5nO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGltZXIgaXMgcnVubmluZy4gUmV0dXJucyB0cnVlIGlmIHRpbWVyIGlzIHJ1bm5pbmdcbiAgICogb3IgZmFsc2UgaWYgdGltZXIgaXMgcGF1c2VkIG9yIHN0b3BwZWQuXG4gICAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWRcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgaXNUaW1lclJ1bm5pbmcgPSBmdW5jdGlvbiBpc1RpbWVyUnVubmluZygpIHtcbiAgICByZXR1cm4gISEoZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpKTtcbiAgfTtcblxuICB2YXIgYm9keUNsaWNrTGlzdGVuZXJBZGRlZCA9IGZhbHNlO1xuICB2YXIgY2xpY2tIYW5kbGVycyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXR0clxuICAgKi9cbiAgZnVuY3Rpb24gYmluZENsaWNrSGFuZGxlcigpIHtcbiAgICB2YXIgYXR0ciA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2RhdGEtc3dhbC10ZW1wbGF0ZSc7XG4gICAgY2xpY2tIYW5kbGVyc1thdHRyXSA9IHRoaXM7XG4gICAgaWYgKCFib2R5Q2xpY2tMaXN0ZW5lckFkZGVkKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9keUNsaWNrTGlzdGVuZXIpO1xuICAgICAgYm9keUNsaWNrTGlzdGVuZXJBZGRlZCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHZhciBib2R5Q2xpY2tMaXN0ZW5lciA9IGZ1bmN0aW9uIGJvZHlDbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgZm9yICh2YXIgZWwgPSBldmVudC50YXJnZXQ7IGVsICYmIGVsICE9PSBkb2N1bWVudDsgZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKHZhciBhdHRyIGluIGNsaWNrSGFuZGxlcnMpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gZWwuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICBpZiAodGVtcGxhdGUpIHtcbiAgICAgICAgICBjbGlja0hhbmRsZXJzW2F0dHJdLmZpcmUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBzdGF0aWNNZXRob2RzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbCxcbiAgICBhcmdzVG9QYXJhbXM6IGFyZ3NUb1BhcmFtcyxcbiAgICBiaW5kQ2xpY2tIYW5kbGVyOiBiaW5kQ2xpY2tIYW5kbGVyLFxuICAgIGNsaWNrQ2FuY2VsOiBjbGlja0NhbmNlbCxcbiAgICBjbGlja0NvbmZpcm06IGNsaWNrQ29uZmlybSxcbiAgICBjbGlja0Rlbnk6IGNsaWNrRGVueSxcbiAgICBlbmFibGVMb2FkaW5nOiBzaG93TG9hZGluZyxcbiAgICBmaXJlOiBmaXJlLFxuICAgIGdldEFjdGlvbnM6IGdldEFjdGlvbnMsXG4gICAgZ2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG4gICAgZ2V0Q2xvc2VCdXR0b246IGdldENsb3NlQnV0dG9uLFxuICAgIGdldENvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24sXG4gICAgZ2V0Q29udGFpbmVyOiBnZXRDb250YWluZXIsXG4gICAgZ2V0RGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbixcbiAgICBnZXRGb2N1c2FibGVFbGVtZW50czogZ2V0Rm9jdXNhYmxlRWxlbWVudHMsXG4gICAgZ2V0Rm9vdGVyOiBnZXRGb290ZXIsXG4gICAgZ2V0SHRtbENvbnRhaW5lcjogZ2V0SHRtbENvbnRhaW5lcixcbiAgICBnZXRJY29uOiBnZXRJY29uLFxuICAgIGdldEljb25Db250ZW50OiBnZXRJY29uQ29udGVudCxcbiAgICBnZXRJbWFnZTogZ2V0SW1hZ2UsXG4gICAgZ2V0SW5wdXRMYWJlbDogZ2V0SW5wdXRMYWJlbCxcbiAgICBnZXRMb2FkZXI6IGdldExvYWRlcixcbiAgICBnZXRQb3B1cDogZ2V0UG9wdXAsXG4gICAgZ2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyxcbiAgICBnZXRUaW1lckxlZnQ6IGdldFRpbWVyTGVmdCxcbiAgICBnZXRUaW1lclByb2dyZXNzQmFyOiBnZXRUaW1lclByb2dyZXNzQmFyLFxuICAgIGdldFRpdGxlOiBnZXRUaXRsZSxcbiAgICBnZXRWYWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgaW5jcmVhc2VUaW1lcjogaW5jcmVhc2VUaW1lcixcbiAgICBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6IGlzRGVwcmVjYXRlZFBhcmFtZXRlcixcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZyxcbiAgICBpc1RpbWVyUnVubmluZzogaXNUaW1lclJ1bm5pbmcsXG4gICAgaXNVcGRhdGFibGVQYXJhbWV0ZXI6IGlzVXBkYXRhYmxlUGFyYW1ldGVyLFxuICAgIGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG4gICAgaXNWaXNpYmxlOiBpc1Zpc2libGUsXG4gICAgbWl4aW46IG1peGluLFxuICAgIHJlc3VtZVRpbWVyOiByZXN1bWVUaW1lcixcbiAgICBzaG93TG9hZGluZzogc2hvd0xvYWRpbmcsXG4gICAgc3RvcFRpbWVyOiBzdG9wVGltZXIsXG4gICAgdG9nZ2xlVGltZXI6IHRvZ2dsZVRpbWVyXG4gIH0pO1xuXG4gIHZhciBUaW1lciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXlcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBUaW1lcihjYWxsYmFjaywgZGVsYXkpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUaW1lcik7XG4gICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5O1xuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICByZXR1cm4gX2NyZWF0ZUNsYXNzKFRpbWVyLCBbe1xuICAgICAga2V5OiBcInN0YXJ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIHRoaXMuaWQgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJzdG9wXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRlZCAmJiB0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pZCk7XG4gICAgICAgICAgdGhpcy5yZW1haW5pbmcgLT0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0ZWQuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBAcGFyYW0ge251bWJlcn0gblxuICAgICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJpbmNyZWFzZVwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluY3JlYXNlKG4pIHtcbiAgICAgICAgdmFyIHJ1bm5pbmcgPSB0aGlzLnJ1bm5pbmc7XG4gICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1haW5pbmcgKz0gbjtcbiAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICAgKi9cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiZ2V0VGltZXJMZWZ0XCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICAgICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAqL1xuICAgIH0sIHtcbiAgICAgIGtleTogXCJpc1J1bm5pbmdcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1J1bm5pbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gICAgICB9XG4gICAgfV0pO1xuICB9KCk7XG5cbiAgdmFyIHN3YWxTdHJpbmdQYXJhbXMgPSBbJ3N3YWwtdGl0bGUnLCAnc3dhbC1odG1sJywgJ3N3YWwtZm9vdGVyJ107XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICB2YXIgZ2V0VGVtcGxhdGVQYXJhbXMgPSBmdW5jdGlvbiBnZXRUZW1wbGF0ZVBhcmFtcyhwYXJhbXMpIHtcbiAgICAvKiogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9ICovXG4gICAgdmFyIHRlbXBsYXRlID0gdHlwZW9mIHBhcmFtcy50ZW1wbGF0ZSA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50ZW1wbGF0ZSkgOiBwYXJhbXMudGVtcGxhdGU7XG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICAvKiogQHR5cGUge0RvY3VtZW50RnJhZ21lbnR9ICovXG4gICAgdmFyIHRlbXBsYXRlQ29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgc2hvd1dhcm5pbmdzRm9yRWxlbWVudHModGVtcGxhdGVDb250ZW50KTtcbiAgICB2YXIgcmVzdWx0ID0gT2JqZWN0LmFzc2lnbihnZXRTd2FsUGFyYW1zKHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxGdW5jdGlvblBhcmFtcyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsQnV0dG9ucyh0ZW1wbGF0ZUNvbnRlbnQpLCBnZXRTd2FsSW1hZ2UodGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbEljb24odGVtcGxhdGVDb250ZW50KSwgZ2V0U3dhbElucHV0KHRlbXBsYXRlQ29udGVudCksIGdldFN3YWxTdHJpbmdQYXJhbXModGVtcGxhdGVDb250ZW50LCBzd2FsU3RyaW5nUGFyYW1zKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGdldFN3YWxQYXJhbXMgPSBmdW5jdGlvbiBnZXRTd2FsUGFyYW1zKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgdmFyIHN3YWxQYXJhbXMgPSBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLXBhcmFtJykpO1xuICAgIHN3YWxQYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMocGFyYW0sIFsnbmFtZScsICd2YWx1ZSddKTtcbiAgICAgIHZhciBwYXJhbU5hbWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIGlmICh0eXBlb2YgZGVmYXVsdFBhcmFtc1twYXJhbU5hbWVdID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmVzdWx0W3BhcmFtTmFtZV0gPSB2YWx1ZSAhPT0gJ2ZhbHNlJztcbiAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZihkZWZhdWx0UGFyYW1zW3BhcmFtTmFtZV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lXSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0W3BhcmFtTmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICB2YXIgZ2V0U3dhbEZ1bmN0aW9uUGFyYW1zID0gZnVuY3Rpb24gZ2V0U3dhbEZ1bmN0aW9uUGFyYW1zKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50W119ICovXG4gICAgdmFyIHN3YWxGdW5jdGlvbnMgPSBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWZ1bmN0aW9uLXBhcmFtJykpO1xuICAgIHN3YWxGdW5jdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgIHZhciBwYXJhbU5hbWUgPSBwYXJhbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcmFtLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgIHJlc3VsdFtwYXJhbU5hbWVdID0gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiLmNvbmNhdCh2YWx1ZSkpKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGdldFN3YWxCdXR0b25zID0gZnVuY3Rpb24gZ2V0U3dhbEJ1dHRvbnModGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX0gKi9cbiAgICB2YXIgc3dhbEJ1dHRvbnMgPSBBcnJheS5mcm9tKHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdzd2FsLWJ1dHRvbicpKTtcbiAgICBzd2FsQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoYnV0dG9uLCBbJ3R5cGUnLCAnY29sb3InLCAnYXJpYS1sYWJlbCddKTtcbiAgICAgIHZhciB0eXBlID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgndHlwZScpO1xuICAgICAgcmVzdWx0W1wiXCIuY29uY2F0KHR5cGUsIFwiQnV0dG9uVGV4dFwiKV0gPSBidXR0b24uaW5uZXJIVE1MO1xuICAgICAgcmVzdWx0W1wic2hvd1wiLmNvbmNhdChjYXBpdGFsaXplRmlyc3RMZXR0ZXIodHlwZSksIFwiQnV0dG9uXCIpXSA9IHRydWU7XG4gICAgICBpZiAoYnV0dG9uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgICByZXN1bHRbXCJcIi5jb25jYXQodHlwZSwgXCJCdXR0b25Db2xvclwiKV0gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgICAgfVxuICAgICAgaWYgKGJ1dHRvbi5oYXNBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSkge1xuICAgICAgICByZXN1bHRbXCJcIi5jb25jYXQodHlwZSwgXCJCdXR0b25BcmlhTGFiZWxcIildID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEByZXR1cm5zIHtTd2VldEFsZXJ0T3B0aW9uc31cbiAgICovXG4gIHZhciBnZXRTd2FsSW1hZ2UgPSBmdW5jdGlvbiBnZXRTd2FsSW1hZ2UodGVtcGxhdGVDb250ZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgdmFyIGltYWdlID0gdGVtcGxhdGVDb250ZW50LnF1ZXJ5U2VsZWN0b3IoJ3N3YWwtaW1hZ2UnKTtcbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMoaW1hZ2UsIFsnc3JjJywgJ3dpZHRoJywgJ2hlaWdodCcsICdhbHQnXSk7XG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdzcmMnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VVcmwgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgfVxuICAgICAgaWYgKGltYWdlLmhhc0F0dHJpYnV0ZSgnd2lkdGgnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VXaWR0aCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbWFnZS5oYXNBdHRyaWJ1dGUoJ2hlaWdodCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbWFnZUhlaWdodCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnaGVpZ2h0Jyk7XG4gICAgICB9XG4gICAgICBpZiAoaW1hZ2UuaGFzQXR0cmlidXRlKCdhbHQnKSkge1xuICAgICAgICByZXN1bHQuaW1hZ2VBbHQgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2FsdCcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0RvY3VtZW50RnJhZ21lbnR9IHRlbXBsYXRlQ29udGVudFxuICAgKiBAcmV0dXJucyB7U3dlZXRBbGVydE9wdGlvbnN9XG4gICAqL1xuICB2YXIgZ2V0U3dhbEljb24gPSBmdW5jdGlvbiBnZXRTd2FsSWNvbih0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICB2YXIgaWNvbiA9IHRlbXBsYXRlQ29udGVudC5xdWVyeVNlbGVjdG9yKCdzd2FsLWljb24nKTtcbiAgICBpZiAoaWNvbikge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpY29uLCBbJ3R5cGUnLCAnY29sb3InXSk7XG4gICAgICBpZiAoaWNvbi5oYXNBdHRyaWJ1dGUoJ3R5cGUnKSkge1xuICAgICAgICAvKiogQHR5cGUge1N3ZWV0QWxlcnRJY29ufSAqL1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJlc3VsdC5pY29uID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ3R5cGUnKTtcbiAgICAgIH1cbiAgICAgIGlmIChpY29uLmhhc0F0dHJpYnV0ZSgnY29sb3InKSkge1xuICAgICAgICByZXN1bHQuaWNvbkNvbG9yID0gaWNvbi5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgICB9XG4gICAgICByZXN1bHQuaWNvbkh0bWwgPSBpY29uLmlubmVySFRNTDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGdldFN3YWxJbnB1dCA9IGZ1bmN0aW9uIGdldFN3YWxJbnB1dCh0ZW1wbGF0ZUNvbnRlbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICB2YXIgaW5wdXQgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3Rvcignc3dhbC1pbnB1dCcpO1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhpbnB1dCwgWyd0eXBlJywgJ2xhYmVsJywgJ3BsYWNlaG9sZGVyJywgJ3ZhbHVlJ10pO1xuICAgICAgLyoqIEB0eXBlIHtTd2VldEFsZXJ0SW5wdXR9ICovXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXN1bHQuaW5wdXQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAndGV4dCc7XG4gICAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdsYWJlbCcpKSB7XG4gICAgICAgIHJlc3VsdC5pbnB1dExhYmVsID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdsYWJlbCcpO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0Lmhhc0F0dHJpYnV0ZSgncGxhY2Vob2xkZXInKSkge1xuICAgICAgICByZXN1bHQuaW5wdXRQbGFjZWhvbGRlciA9IGlucHV0LmdldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC5oYXNBdHRyaWJ1dGUoJ3ZhbHVlJykpIHtcbiAgICAgICAgcmVzdWx0LmlucHV0VmFsdWUgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnRbXX0gKi9cbiAgICB2YXIgaW5wdXRPcHRpb25zID0gQXJyYXkuZnJvbSh0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnc3dhbC1pbnB1dC1vcHRpb24nKSk7XG4gICAgaWYgKGlucHV0T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5pbnB1dE9wdGlvbnMgPSB7fTtcbiAgICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgc2hvd1dhcm5pbmdzRm9yQXR0cmlidXRlcyhvcHRpb24sIFsndmFsdWUnXSk7XG4gICAgICAgIHZhciBvcHRpb25WYWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgIHZhciBvcHRpb25OYW1lID0gb3B0aW9uLmlubmVySFRNTDtcbiAgICAgICAgcmVzdWx0LmlucHV0T3B0aW9uc1tvcHRpb25WYWx1ZV0gPSBvcHRpb25OYW1lO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gdGVtcGxhdGVDb250ZW50XG4gICAqIEBwYXJhbSB7c3RyaW5nW119IHBhcmFtTmFtZXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIGdldFN3YWxTdHJpbmdQYXJhbXMgPSBmdW5jdGlvbiBnZXRTd2FsU3RyaW5nUGFyYW1zKHRlbXBsYXRlQ29udGVudCwgcGFyYW1OYW1lcykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBmb3IgKHZhciBpIGluIHBhcmFtTmFtZXMpIHtcbiAgICAgIHZhciBwYXJhbU5hbWUgPSBwYXJhbU5hbWVzW2ldO1xuICAgICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cbiAgICAgIHZhciB0YWcgPSB0ZW1wbGF0ZUNvbnRlbnQucXVlcnlTZWxlY3RvcihwYXJhbU5hbWUpO1xuICAgICAgaWYgKHRhZykge1xuICAgICAgICBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKHRhZywgW10pO1xuICAgICAgICByZXN1bHRbcGFyYW1OYW1lLnJlcGxhY2UoL15zd2FsLS8sICcnKV0gPSB0YWcuaW5uZXJIVE1MLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtEb2N1bWVudEZyYWdtZW50fSB0ZW1wbGF0ZUNvbnRlbnRcbiAgICovXG4gIHZhciBzaG93V2FybmluZ3NGb3JFbGVtZW50cyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvckVsZW1lbnRzKHRlbXBsYXRlQ29udGVudCkge1xuICAgIHZhciBhbGxvd2VkRWxlbWVudHMgPSBzd2FsU3RyaW5nUGFyYW1zLmNvbmNhdChbJ3N3YWwtcGFyYW0nLCAnc3dhbC1mdW5jdGlvbi1wYXJhbScsICdzd2FsLWJ1dHRvbicsICdzd2FsLWltYWdlJywgJ3N3YWwtaWNvbicsICdzd2FsLWlucHV0JywgJ3N3YWwtaW5wdXQtb3B0aW9uJ10pO1xuICAgIEFycmF5LmZyb20odGVtcGxhdGVDb250ZW50LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgdmFyIHRhZ05hbWUgPSBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIWFsbG93ZWRFbGVtZW50cy5pbmNsdWRlcyh0YWdOYW1lKSkge1xuICAgICAgICB3YXJuKFwiVW5yZWNvZ25pemVkIGVsZW1lbnQgPFwiLmNvbmNhdCh0YWdOYW1lLCBcIj5cIikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBhbGxvd2VkQXR0cmlidXRlc1xuICAgKi9cbiAgdmFyIHNob3dXYXJuaW5nc0ZvckF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JBdHRyaWJ1dGVzKGVsLCBhbGxvd2VkQXR0cmlidXRlcykge1xuICAgIEFycmF5LmZyb20oZWwuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICBpZiAoYWxsb3dlZEF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUubmFtZSkgPT09IC0xKSB7XG4gICAgICAgIHdhcm4oW1wiVW5yZWNvZ25pemVkIGF0dHJpYnV0ZSBcXFwiXCIuY29uY2F0KGF0dHJpYnV0ZS5uYW1lLCBcIlxcXCIgb24gPFwiKS5jb25jYXQoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpLCBcIj4uXCIpLCBcIlwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5sZW5ndGggPyBcIkFsbG93ZWQgYXR0cmlidXRlcyBhcmU6IFwiLmNvbmNhdChhbGxvd2VkQXR0cmlidXRlcy5qb2luKCcsICcpKSA6ICdUbyBzZXQgdGhlIHZhbHVlLCB1c2UgSFRNTCB3aXRoaW4gdGhlIGVsZW1lbnQuJyldKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB2YXIgU0hPV19DTEFTU19USU1FT1VUID0gMTA7XG5cbiAgLyoqXG4gICAqIE9wZW4gcG9wdXAsIGFkZCBuZWNlc3NhcnkgY2xhc3NlcyBhbmQgc3R5bGVzLCBmaXggc2Nyb2xsYmFyXG4gICAqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHBhcmFtc1xuICAgKi9cbiAgdmFyIG9wZW5Qb3B1cCA9IGZ1bmN0aW9uIG9wZW5Qb3B1cChwYXJhbXMpIHtcbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgICBpZiAodHlwZW9mIHBhcmFtcy53aWxsT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcGFyYW1zLndpbGxPcGVuKHBvcHVwKTtcbiAgICB9XG4gICAgdmFyIGJvZHlTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KTtcbiAgICB2YXIgaW5pdGlhbEJvZHlPdmVyZmxvdyA9IGJvZHlTdHlsZXMub3ZlcmZsb3dZO1xuICAgIGFkZENsYXNzZXMoY29udGFpbmVyLCBwb3B1cCwgcGFyYW1zKTtcblxuICAgIC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkoY29udGFpbmVyLCBwb3B1cCk7XG4gICAgfSwgU0hPV19DTEFTU19USU1FT1VUKTtcbiAgICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgICBmaXhTY3JvbGxDb250YWluZXIoY29udGFpbmVyLCBwYXJhbXMuc2Nyb2xsYmFyUGFkZGluZywgaW5pdGlhbEJvZHlPdmVyZmxvdyk7XG4gICAgICBzZXRBcmlhSGlkZGVuKCk7XG4gICAgfVxuICAgIGlmICghaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFyYW1zLmRpZE9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmRpZE9wZW4ocG9wdXApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbJ25vLXRyYW5zaXRpb24nXSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7QW5pbWF0aW9uRXZlbnR9IGV2ZW50XG4gICAqL1xuICB2YXIgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCA9IGZ1bmN0aW9uIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQoZXZlbnQpIHtcbiAgICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IHBvcHVwIHx8ICFhbmltYXRpb25FbmRFdmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gICAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfTtcblxuICAvKipcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHVwXG4gICAqL1xuICB2YXIgc2V0U2Nyb2xsaW5nVmlzaWJpbGl0eSA9IGZ1bmN0aW9uIHNldFNjcm9sbGluZ1Zpc2liaWxpdHkoY29udGFpbmVyLCBwb3B1cCkge1xuICAgIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiBoYXNDc3NBbmltYXRpb24ocG9wdXApKSB7XG4gICAgICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNjcm9sbGJhclBhZGRpbmdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGluaXRpYWxCb2R5T3ZlcmZsb3dcbiAgICovXG4gIHZhciBmaXhTY3JvbGxDb250YWluZXIgPSBmdW5jdGlvbiBmaXhTY3JvbGxDb250YWluZXIoY29udGFpbmVyLCBzY3JvbGxiYXJQYWRkaW5nLCBpbml0aWFsQm9keU92ZXJmbG93KSB7XG4gICAgaU9TZml4KCk7XG4gICAgaWYgKHNjcm9sbGJhclBhZGRpbmcgJiYgaW5pdGlhbEJvZHlPdmVyZmxvdyAhPT0gJ2hpZGRlbicpIHtcbiAgICAgIHJlcGxhY2VTY3JvbGxiYXJXaXRoUGFkZGluZyhpbml0aWFsQm9keU92ZXJmbG93KTtcbiAgICB9XG5cbiAgICAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwb3B1cFxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIHZhciBhZGRDbGFzc2VzID0gZnVuY3Rpb24gYWRkQ2xhc3Nlcyhjb250YWluZXIsIHBvcHVwLCBwYXJhbXMpIHtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHBhcmFtcy5zaG93Q2xhc3MuYmFja2Ryb3ApO1xuICAgIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgICAvLyB0aGlzIHdvcmthcm91bmQgd2l0aCBvcGFjaXR5IGlzIG5lZWRlZCBmb3IgaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL2lzc3Vlcy8yMDU5XG4gICAgICBwb3B1cC5zdHlsZS5zZXRQcm9wZXJ0eSgnb3BhY2l0eScsICcwJywgJ2ltcG9ydGFudCcpO1xuICAgICAgc2hvdyhwb3B1cCwgJ2dyaWQnKTtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBBbmltYXRlIHBvcHVwIHJpZ2h0IGFmdGVyIHNob3dpbmcgaXRcbiAgICAgICAgYWRkQ2xhc3MocG9wdXAsIHBhcmFtcy5zaG93Q2xhc3MucG9wdXApO1xuICAgICAgICAvLyBhbmQgcmVtb3ZlIHRoZSBvcGFjaXR5IHdvcmthcm91bmRcbiAgICAgICAgcG9wdXAuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICAgIH0sIFNIT1dfQ0xBU1NfVElNRU9VVCk7IC8vIDEwbXMgaW4gb3JkZXIgdG8gZml4ICMyMDYyXG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3cocG9wdXAsICdncmlkJyk7XG4gICAgfVxuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlcy5zaG93bik7XG4gICAgaWYgKHBhcmFtcy5oZWlnaHRBdXRvICYmIHBhcmFtcy5iYWNrZHJvcCAmJiAhcGFyYW1zLnRvYXN0KSB7XG4gICAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWxpZGF0aW9uTWVzc2FnZV1cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmcgfCB2b2lkPn1cbiAgICAgKi9cbiAgICBlbWFpbDogZnVuY3Rpb24gZW1haWwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgcmV0dXJuIC9eW2EtekEtWjAtOS4rXyctXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV0rJC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgfHwgJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsaWRhdGlvbk1lc3NhZ2VdXG4gICAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nIHwgdm9pZD59XG4gICAgICovXG4gICAgdXJsOiBmdW5jdGlvbiB1cmwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNSB3aXRoIGEgc21hbGwgY2hhbmdlIGZyb20gIzEzMDYgYW5kICMyMDEzXG4gICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezEsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji89XSopJC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgfHwgJ0ludmFsaWQgVVJMJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRJbnB1dFZhbGlkYXRvcnMocGFyYW1zKSB7XG4gICAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICAgIGlmIChwYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ2VtYWlsJykge1xuICAgICAgcGFyYW1zLmlucHV0VmFsaWRhdG9yID0gZGVmYXVsdElucHV0VmFsaWRhdG9yc1snZW1haWwnXTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0gJ3VybCcpIHtcbiAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNbJ3VybCddO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBwYXJhbXNcbiAgICovXG4gIGZ1bmN0aW9uIHZhbGlkYXRlQ3VzdG9tVGFyZ2V0RWxlbWVudChwYXJhbXMpIHtcbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIGN1c3RvbSB0YXJnZXQgZWxlbWVudCBpcyB2YWxpZFxuICAgIGlmICghcGFyYW1zLnRhcmdldCB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCA9PT0gJ3N0cmluZycgJiYgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgIT09ICdzdHJpbmcnICYmICFwYXJhbXMudGFyZ2V0LmFwcGVuZENoaWxkKSB7XG4gICAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgICAgcGFyYW1zLnRhcmdldCA9ICdib2R5JztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHR5cGUsIHRleHQgYW5kIGFjdGlvbnMgb24gcG9wdXBcbiAgICpcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gcGFyYW1zXG4gICAqL1xuICBmdW5jdGlvbiBzZXRQYXJhbWV0ZXJzKHBhcmFtcykge1xuICAgIHNldERlZmF1bHRJbnB1dFZhbGlkYXRvcnMocGFyYW1zKTtcblxuICAgIC8vIHNob3dMb2FkZXJPbkNvbmZpcm0gJiYgcHJlQ29uZmlybVxuICAgIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSAmJiAhcGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICAgIHdhcm4oJ3Nob3dMb2FkZXJPbkNvbmZpcm0gaXMgc2V0IHRvIHRydWUsIGJ1dCBwcmVDb25maXJtIGlzIG5vdCBkZWZpbmVkLlxcbicgKyAnc2hvd0xvYWRlck9uQ29uZmlybSBzaG91bGQgYmUgdXNlZCB0b2dldGhlciB3aXRoIHByZUNvbmZpcm0sIHNlZSB1c2FnZSBleGFtcGxlOlxcbicgKyAnaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vI2FqYXgtcmVxdWVzdCcpO1xuICAgIH1cbiAgICB2YWxpZGF0ZUN1c3RvbVRhcmdldEVsZW1lbnQocGFyYW1zKTtcblxuICAgIC8vIFJlcGxhY2UgbmV3bGluZXMgd2l0aCA8YnI+IGluIHRpdGxlXG4gICAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXJhbXMudGl0bGUgPSBwYXJhbXMudGl0bGUuc3BsaXQoJ1xcbicpLmpvaW4oJzxiciAvPicpO1xuICAgIH1cbiAgICBpbml0KHBhcmFtcyk7XG4gIH1cblxuICAvKiogQHR5cGUge1N3ZWV0QWxlcnR9ICovXG4gIHZhciBjdXJyZW50SW5zdGFuY2U7XG4gIHZhciBfcHJvbWlzZSA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha01hcCgpO1xuICB2YXIgU3dlZXRBbGVydCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5hbnl9IGFyZ3NcbiAgICAgKiBAdGhpcyB7U3dlZXRBbGVydH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTd2VldEFsZXJ0KCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN3ZWV0QWxlcnQpO1xuICAgICAgLyoqXG4gICAgICAgKiBAdHlwZSB7UHJvbWlzZTxTd2VldEFsZXJ0UmVzdWx0Pn1cbiAgICAgICAqL1xuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWModGhpcywgX3Byb21pc2UsIHZvaWQgMCk7XG4gICAgICAvLyBQcmV2ZW50IHJ1biBpbiBOb2RlIGVudlxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRJbnN0YW5jZSA9IHRoaXM7XG5cbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgdmFyIG91dGVyUGFyYW1zID0gT2JqZWN0LmZyZWV6ZSh0aGlzLmNvbnN0cnVjdG9yLmFyZ3NUb1BhcmFtcyhhcmdzKSk7XG5cbiAgICAgIC8qKiBAdHlwZSB7UmVhZG9ubHk8U3dlZXRBbGVydE9wdGlvbnM+fSAqL1xuICAgICAgdGhpcy5wYXJhbXMgPSBvdXRlclBhcmFtcztcblxuICAgICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xuICAgICAgdGhpcy5pc0F3YWl0aW5nUHJvbWlzZSA9IGZhbHNlO1xuICAgICAgX2NsYXNzUHJpdmF0ZUZpZWxkU2V0MihfcHJvbWlzZSwgdGhpcywgdGhpcy5fbWFpbihjdXJyZW50SW5zdGFuY2UucGFyYW1zKSk7XG4gICAgfVxuICAgIHJldHVybiBfY3JlYXRlQ2xhc3MoU3dlZXRBbGVydCwgW3tcbiAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHVzZXJQYXJhbXMpIHtcbiAgICAgICAgdmFyIG1peGluUGFyYW1zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICAgICAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKE9iamVjdC5hc3NpZ24oe30sIG1peGluUGFyYW1zLCB1c2VyUGFyYW1zKSk7XG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UpIHtcbiAgICAgICAgICB2YXIgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldChnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UpO1xuICAgICAgICAgIHZhciBpc0F3YWl0aW5nUHJvbWlzZSA9IGdsb2JhbFN0YXRlLmN1cnJlbnRJbnN0YW5jZS5pc0F3YWl0aW5nUHJvbWlzZTtcbiAgICAgICAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UuX2Rlc3Ryb3koKTtcbiAgICAgICAgICBpZiAoIWlzQXdhaXRpbmdQcm9taXNlKSB7XG4gICAgICAgICAgICBzd2FsUHJvbWlzZVJlc29sdmUoe1xuICAgICAgICAgICAgICBpc0Rpc21pc3NlZDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc01vZGFsKCkpIHtcbiAgICAgICAgICAgIHVuc2V0QXJpYUhpZGRlbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnbG9iYWxTdGF0ZS5jdXJyZW50SW5zdGFuY2UgPSBjdXJyZW50SW5zdGFuY2U7XG4gICAgICAgIHZhciBpbm5lclBhcmFtcyA9IHByZXBhcmVQYXJhbXModXNlclBhcmFtcywgbWl4aW5QYXJhbXMpO1xuICAgICAgICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShpbm5lclBhcmFtcyk7XG5cbiAgICAgICAgLy8gY2xlYXIgdGhlIHByZXZpb3VzIHRpbWVyXG4gICAgICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgICAgICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjbGVhciB0aGUgcmVzdG9yZSBmb2N1cyB0aW1lb3V0XG4gICAgICAgIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgICAgICAgdmFyIGRvbUNhY2hlID0gcG9wdWxhdGVEb21DYWNoZShjdXJyZW50SW5zdGFuY2UpO1xuICAgICAgICByZW5kZXIoY3VycmVudEluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICAgIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQoY3VycmVudEluc3RhbmNlLCBpbm5lclBhcmFtcyk7XG4gICAgICAgIHJldHVybiBzd2FsUHJvbWlzZShjdXJyZW50SW5zdGFuY2UsIGRvbUNhY2hlLCBpbm5lclBhcmFtcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIGBjYXRjaGAgY2Fubm90IGJlIHRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4cG9ydCwgc28gd2UgZGVmaW5lIG91ciB0aGVuYWJsZSBtZXRob2RzIGhlcmUgaW5zdGVhZFxuICAgIH0sIHtcbiAgICAgIGtleTogXCJ0aGVuXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCkge1xuICAgICAgICByZXR1cm4gX2NsYXNzUHJpdmF0ZUZpZWxkR2V0MihfcHJvbWlzZSwgdGhpcykudGhlbihvbkZ1bGZpbGxlZCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiBcImZpbmFsbHlcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfZmluYWxseShvbkZpbmFsbHkpIHtcbiAgICAgICAgcmV0dXJuIF9jbGFzc1ByaXZhdGVGaWVsZEdldDIoX3Byb21pc2UsIHRoaXMpW1wiZmluYWxseVwiXShvbkZpbmFsbHkpO1xuICAgICAgfVxuICAgIH1dKTtcbiAgfSgpO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnR9IGluc3RhbmNlXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgdmFyIHN3YWxQcm9taXNlID0gZnVuY3Rpb24gc3dhbFByb21pc2UoaW5zdGFuY2UsIGRvbUNhY2hlLCBpbm5lclBhcmFtcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCBjbG9zaW5ncy9kaXNtaXNzYWxzXG4gICAgICAvKipcbiAgICAgICAqIEBwYXJhbSB7RGlzbWlzc1JlYXNvbn0gZGlzbWlzc1xuICAgICAgICovXG4gICAgICB2YXIgZGlzbWlzc1dpdGggPSBmdW5jdGlvbiBkaXNtaXNzV2l0aChkaXNtaXNzKSB7XG4gICAgICAgIGluc3RhbmNlLmNsb3NlKHtcbiAgICAgICAgICBpc0Rpc21pc3NlZDogdHJ1ZSxcbiAgICAgICAgICBkaXNtaXNzOiBkaXNtaXNzXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoaW5zdGFuY2UsIHJlc29sdmUpO1xuICAgICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZWplY3Quc2V0KGluc3RhbmNlLCByZWplY3QpO1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBoYW5kbGVDb25maXJtQnV0dG9uQ2xpY2soaW5zdGFuY2UpO1xuICAgICAgfTtcbiAgICAgIGRvbUNhY2hlLmRlbnlCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlRGVueUJ1dHRvbkNsaWNrKGluc3RhbmNlKTtcbiAgICAgIH07XG4gICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlQ2FuY2VsQnV0dG9uQ2xpY2soaW5zdGFuY2UsIGRpc21pc3NXaXRoKTtcbiAgICAgIH07XG4gICAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNtaXNzV2l0aChEaXNtaXNzUmVhc29uLmNsb3NlKTtcbiAgICAgIH07XG4gICAgICBoYW5kbGVQb3B1cENsaWNrKGlubmVyUGFyYW1zLCBkb21DYWNoZSwgZGlzbWlzc1dpdGgpO1xuICAgICAgYWRkS2V5ZG93bkhhbmRsZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnNBbmRWYWx1ZShpbnN0YW5jZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcbiAgICAgIHNldHVwVGltZXIoZ2xvYmFsU3RhdGUsIGlubmVyUGFyYW1zLCBkaXNtaXNzV2l0aCk7XG4gICAgICBpbml0Rm9jdXMoZG9tQ2FjaGUsIGlubmVyUGFyYW1zKTtcblxuICAgICAgLy8gU2Nyb2xsIGNvbnRhaW5lciB0byB0b3Agb24gb3BlbiAoIzEyNDcsICMxOTQ2KVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IHVzZXJQYXJhbXNcbiAgICogQHBhcmFtIHtTd2VldEFsZXJ0T3B0aW9uc30gbWl4aW5QYXJhbXNcbiAgICogQHJldHVybnMge1N3ZWV0QWxlcnRPcHRpb25zfVxuICAgKi9cbiAgdmFyIHByZXBhcmVQYXJhbXMgPSBmdW5jdGlvbiBwcmVwYXJlUGFyYW1zKHVzZXJQYXJhbXMsIG1peGluUGFyYW1zKSB7XG4gICAgdmFyIHRlbXBsYXRlUGFyYW1zID0gZ2V0VGVtcGxhdGVQYXJhbXModXNlclBhcmFtcyk7XG4gICAgdmFyIHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMsIG1peGluUGFyYW1zLCB0ZW1wbGF0ZVBhcmFtcywgdXNlclBhcmFtcyk7IC8vIHByZWNlZGVuY2UgaXMgZGVzY3JpYmVkIGluICMyMTMxXG4gICAgcGFyYW1zLnNob3dDbGFzcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRQYXJhbXMuc2hvd0NsYXNzLCBwYXJhbXMuc2hvd0NsYXNzKTtcbiAgICBwYXJhbXMuaGlkZUNsYXNzID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFBhcmFtcy5oaWRlQ2xhc3MsIHBhcmFtcy5oaWRlQ2xhc3MpO1xuICAgIGlmIChwYXJhbXMuYW5pbWF0aW9uID09PSBmYWxzZSkge1xuICAgICAgcGFyYW1zLnNob3dDbGFzcyA9IHtcbiAgICAgICAgYmFja2Ryb3A6ICdzd2FsMi1ub2FuaW1hdGlvbidcbiAgICAgIH07XG4gICAgICBwYXJhbXMuaGlkZUNsYXNzID0ge307XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydH0gaW5zdGFuY2VcbiAgICogQHJldHVybnMge0RvbUNhY2hlfVxuICAgKi9cbiAgdmFyIHBvcHVsYXRlRG9tQ2FjaGUgPSBmdW5jdGlvbiBwb3B1bGF0ZURvbUNhY2hlKGluc3RhbmNlKSB7XG4gICAgdmFyIGRvbUNhY2hlID0ge1xuICAgICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgICBjb250YWluZXI6IGdldENvbnRhaW5lcigpLFxuICAgICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgICAgY29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbigpLFxuICAgICAgZGVueUJ1dHRvbjogZ2V0RGVueUJ1dHRvbigpLFxuICAgICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICAgIGxvYWRlcjogZ2V0TG9hZGVyKCksXG4gICAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgICAgcHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcygpXG4gICAgfTtcbiAgICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KGluc3RhbmNlLCBkb21DYWNoZSk7XG4gICAgcmV0dXJuIGRvbUNhY2hlO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge0dsb2JhbFN0YXRlfSBnbG9iYWxTdGF0ZVxuICAgKiBAcGFyYW0ge1N3ZWV0QWxlcnRPcHRpb25zfSBpbm5lclBhcmFtc1xuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNtaXNzV2l0aFxuICAgKi9cbiAgdmFyIHNldHVwVGltZXIgPSBmdW5jdGlvbiBzZXR1cFRpbWVyKGdsb2JhbFN0YXRlLCBpbm5lclBhcmFtcywgZGlzbWlzc1dpdGgpIHtcbiAgICB2YXIgdGltZXJQcm9ncmVzc0JhciA9IGdldFRpbWVyUHJvZ3Jlc3NCYXIoKTtcbiAgICBoaWRlKHRpbWVyUHJvZ3Jlc3NCYXIpO1xuICAgIGlmIChpbm5lclBhcmFtcy50aW1lcikge1xuICAgICAgZ2xvYmFsU3RhdGUudGltZW91dCA9IG5ldyBUaW1lcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRpc21pc3NXaXRoKCd0aW1lcicpO1xuICAgICAgICBkZWxldGUgZ2xvYmFsU3RhdGUudGltZW91dDtcbiAgICAgIH0sIGlubmVyUGFyYW1zLnRpbWVyKTtcbiAgICAgIGlmIChpbm5lclBhcmFtcy50aW1lclByb2dyZXNzQmFyKSB7XG4gICAgICAgIHNob3codGltZXJQcm9ncmVzc0Jhcik7XG4gICAgICAgIGFwcGx5Q3VzdG9tQ2xhc3ModGltZXJQcm9ncmVzc0JhciwgaW5uZXJQYXJhbXMsICd0aW1lclByb2dyZXNzQmFyJyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQucnVubmluZykge1xuICAgICAgICAgICAgLy8gdGltZXIgY2FuIGJlIGFscmVhZHkgc3RvcHBlZCBvciB1bnNldCBhdCB0aGlzIHBvaW50XG4gICAgICAgICAgICBhbmltYXRlVGltZXJQcm9ncmVzc0Jhcihpbm5lclBhcmFtcy50aW1lcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqL1xuICB2YXIgaW5pdEZvY3VzID0gZnVuY3Rpb24gaW5pdEZvY3VzKGRvbUNhY2hlLCBpbm5lclBhcmFtcykge1xuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RW50ZXJLZXkpKSB7XG4gICAgICBibHVyQWN0aXZlRWxlbWVudCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWZvY3VzQnV0dG9uKGRvbUNhY2hlLCBpbm5lclBhcmFtcykpIHtcbiAgICAgIHNldEZvY3VzKC0xLCAxKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9tQ2FjaGV9IGRvbUNhY2hlXG4gICAqIEBwYXJhbSB7U3dlZXRBbGVydE9wdGlvbnN9IGlubmVyUGFyYW1zXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIGZvY3VzQnV0dG9uID0gZnVuY3Rpb24gZm9jdXNCdXR0b24oZG9tQ2FjaGUsIGlubmVyUGFyYW1zKSB7XG4gICAgaWYgKGlubmVyUGFyYW1zLmZvY3VzRGVueSAmJiBpc1Zpc2libGUkMShkb21DYWNoZS5kZW55QnV0dG9uKSkge1xuICAgICAgZG9tQ2FjaGUuZGVueUJ1dHRvbi5mb2N1cygpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUkMShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZSQxKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICB2YXIgYmx1ckFjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiBibHVyQWN0aXZlRWxlbWVudCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfTtcblxuICAvLyBEZWFyIHJ1c3NpYW4gdXNlcnMgdmlzaXRpbmcgcnVzc2lhbiBzaXRlcy4gTGV0J3MgaGF2ZSBmdW4uXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAvXnJ1XFxiLy50ZXN0KG5hdmlnYXRvci5sYW5ndWFnZSkgJiYgbG9jYXRpb24uaG9zdC5tYXRjaCgvXFwuKHJ1fHN1fGJ5fHhuLS1wMWFpKSQvKSkge1xuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciBpbml0aWF0aW9uRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzd2FsLWluaXRpYXRpb24nKTtcbiAgICBpZiAoIWluaXRpYXRpb25EYXRlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3dhbC1pbml0aWF0aW9uJywgXCJcIi5jb25jYXQobm93KSk7XG4gICAgfSBlbHNlIGlmICgobm93LmdldFRpbWUoKSAtIERhdGUucGFyc2UoaW5pdGlhdGlvbkRhdGUpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSA+IDMpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIHZhciB1a3JhaW5pYW5BbnRoZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICB1a3JhaW5pYW5BbnRoZW0uc3JjID0gJ2h0dHBzOi8vZmxhZy1naW1uLnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA5L1VrcmFpbmEubXAzJztcbiAgICAgICAgdWtyYWluaWFuQW50aGVtLmxvb3AgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVrcmFpbmlhbkFudGhlbSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHVrcmFpbmlhbkFudGhlbS5wbGF5KClbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMjUwMCk7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5kaXNhYmxlQnV0dG9ucyA9IGRpc2FibGVCdXR0b25zO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5lbmFibGVCdXR0b25zID0gZW5hYmxlQnV0dG9ucztcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZ2V0SW5wdXQgPSBnZXRJbnB1dDtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuZGlzYWJsZUlucHV0ID0gZGlzYWJsZUlucHV0O1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5lbmFibGVJbnB1dCA9IGVuYWJsZUlucHV0O1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5oaWRlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5kaXNhYmxlTG9hZGluZyA9IGhpZGVMb2FkaW5nO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5zaG93VmFsaWRhdGlvbk1lc3NhZ2UgPSBzaG93VmFsaWRhdGlvbk1lc3NhZ2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5jbG9zZSA9IGNsb3NlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5jbG9zZVBvcHVwID0gY2xvc2U7XG4gIFN3ZWV0QWxlcnQucHJvdG90eXBlLmNsb3NlTW9kYWwgPSBjbG9zZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUuY2xvc2VUb2FzdCA9IGNsb3NlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5yZWplY3RQcm9taXNlID0gcmVqZWN0UHJvbWlzZTtcbiAgU3dlZXRBbGVydC5wcm90b3R5cGUudXBkYXRlID0gdXBkYXRlO1xuICBTd2VldEFsZXJ0LnByb3RvdHlwZS5fZGVzdHJveSA9IF9kZXN0cm95O1xuXG4gIC8vIEFzc2lnbiBzdGF0aWMgbWV0aG9kcyBmcm9tIHNyYy9zdGF0aWNNZXRob2RzLyouanMgdG8gY29uc3RydWN0b3JcbiAgT2JqZWN0LmFzc2lnbihTd2VldEFsZXJ0LCBzdGF0aWNNZXRob2RzKTtcblxuICAvLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgT2JqZWN0LmtleXMoaW5zdGFuY2VNZXRob2RzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuICAgICAqIEByZXR1cm5zIHthbnkgfCB1bmRlZmluZWR9XG4gICAgICovXG4gICAgU3dlZXRBbGVydFtrZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGN1cnJlbnRJbnN0YW5jZSAmJiBjdXJyZW50SW5zdGFuY2Vba2V5XSkge1xuICAgICAgICB2YXIgX2N1cnJlbnRJbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9KTtcbiAgU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvbjtcbiAgU3dlZXRBbGVydC52ZXJzaW9uID0gJzExLjEwLjgnO1xuXG4gIHZhciBTd2FsID0gU3dlZXRBbGVydDtcbiAgLy8gQHRzLWlnbm9yZVxuICBTd2FsW1wiZGVmYXVsdFwiXSA9IFN3YWw7XG5cbiAgcmV0dXJuIFN3YWw7XG5cbn0pKTtcbmlmICh0eXBlb2YgdGhpcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5Td2VldGFsZXJ0Mil7dGhpcy5zd2FsID0gdGhpcy5zd2VldEFsZXJ0ID0gdGhpcy5Td2FsID0gdGhpcy5Td2VldEFsZXJ0ID0gdGhpcy5Td2VldGFsZXJ0Mn1cblwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnN0eWxlU2hlZXQpbi5zdHlsZVNoZWV0LmRpc2FibGVkfHwobi5zdHlsZVNoZWV0LmNzc1RleHQ9dCk7ZWxzZSB0cnl7bi5pbm5lckhUTUw9dH1jYXRjaChlKXtuLmlubmVyVGV4dD10fX0oZG9jdW1lbnQsXCIuc3dhbDItcG9wdXAuc3dhbDItdG9hc3R7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtY29sdW1uOjEvNCAhaW1wb3J0YW50O2dyaWQtcm93OjEvNCAhaW1wb3J0YW50O2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW4tY29udGVudCBhdXRvIG1pbi1jb250ZW50O3BhZGRpbmc6MWVtO292ZXJmbG93LXk6aGlkZGVuO2JhY2tncm91bmQ6I2ZmZjtib3gtc2hhZG93OjAgMCAxcHggcmdiYSgwLDAsMCwuMDc1KSwwIDFweCAycHggcmdiYSgwLDAsMCwuMDc1KSwxcHggMnB4IDRweCByZ2JhKDAsMCwwLC4wNzUpLDFweCAzcHggOHB4IHJnYmEoMCwwLDAsLjA3NSksMnB4IDRweCAxNnB4IHJnYmEoMCwwLDAsLjA3NSk7cG9pbnRlci1ldmVudHM6YWxsfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdD4qe2dyaWQtY29sdW1uOjJ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi10aXRsZXttYXJnaW46LjVlbSAxZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxZW07dGV4dC1hbGlnbjppbml0aWFsfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZ3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXR7aGVpZ2h0OjJlbTttYXJnaW46LjVlbTtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdle2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1mb290ZXJ7bWFyZ2luOi41ZW0gMCAwO3BhZGRpbmc6LjVlbSAwIDA7Zm9udC1zaXplOi44ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jbG9zZXtncmlkLWNvbHVtbjozLzM7Z3JpZC1yb3c6MS85OTthbGlnbi1zZWxmOmNlbnRlcjt3aWR0aDouOGVtO2hlaWdodDouOGVtO21hcmdpbjowO2ZvbnQtc2l6ZToyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1odG1sLWNvbnRhaW5lcnttYXJnaW46LjVlbSAxZW07cGFkZGluZzowO292ZXJmbG93OmluaXRpYWw7Zm9udC1zaXplOjFlbTt0ZXh0LWFsaWduOmluaXRpYWx9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1odG1sLWNvbnRhaW5lcjplbXB0eXtwYWRkaW5nOjB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1sb2FkZXJ7Z3JpZC1jb2x1bW46MTtncmlkLXJvdzoxLzk5O2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjouMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb257Z3JpZC1jb2x1bW46MTtncmlkLXJvdzoxLzk5O2FsaWduLXNlbGY6Y2VudGVyO3dpZHRoOjJlbTttaW4td2lkdGg6MmVtO2hlaWdodDoyZW07bWFyZ2luOjAgLjVlbSAwIDB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uIC5zd2FsMi1pY29uLWNvbnRlbnR7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtmb250LXNpemU6MS44ZW07Zm9udC13ZWlnaHQ6Ym9sZH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3dpZHRoOjJlbTtoZWlnaHQ6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXt0b3A6Ljg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnN7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7aGVpZ2h0OmF1dG87bWFyZ2luOjA7bWFyZ2luLXRvcDouNWVtO3BhZGRpbmc6MCAuNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3R5bGVke21hcmdpbjouMjVlbSAuNWVtO3BhZGRpbmc6LjRlbSAuNmVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MS42ZW07aGVpZ2h0OjNlbTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XXt0b3A6LTAuOGVtO2xlZnQ6LTAuNWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm0tb3JpZ2luOjJlbSAyZW07Ym9yZGVyLXJhZGl1czo0ZW0gMCAwIDRlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0wLjI1ZW07bGVmdDouOTM3NWVtO3RyYW5zZm9ybS1vcmlnaW46MCAxLjVlbTtib3JkZXItcmFkaXVzOjAgNGVtIDRlbSAwfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1yaW5ne3dpZHRoOjJlbTtoZWlnaHQ6MmVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXh7dG9wOjA7bGVmdDouNDM3NWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjIuNjg3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV17aGVpZ2h0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9bG9uZ117dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXB7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25ne2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLXNob3d7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LXNob3cgLjVzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1oaWRle2FuaW1hdGlvbjpzd2FsMi10b2FzdC1oaWRlIC4xcyBmb3J3YXJkc31kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcil7ZGlzcGxheTpncmlkO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA2MDtpbnNldDowO2JveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLXRlbXBsYXRlLWFyZWFzOlxcXCJ0b3Atc3RhcnQgICAgIHRvcCAgICAgICAgICAgIHRvcC1lbmRcXFwiIFxcXCJjZW50ZXItc3RhcnQgIGNlbnRlciAgICAgICAgIGNlbnRlci1lbmRcXFwiIFxcXCJib3R0b20tc3RhcnQgIGJvdHRvbS1jZW50ZXIgIGJvdHRvbS1lbmRcXFwiO2dyaWQtdGVtcGxhdGUtcm93czptaW5tYXgobWluLWNvbnRlbnQsIGF1dG8pIG1pbm1heChtaW4tY29udGVudCwgYXV0bykgbWlubWF4KG1pbi1jb250ZW50LCBhdXRvKTtoZWlnaHQ6MTAwJTtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdy14OmhpZGRlbjt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjFzOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1iYWNrZHJvcC1zaG93LGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ub2FuaW1hdGlvbntiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjQpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1iYWNrZHJvcC1oaWRle2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKSAhaW1wb3J0YW50fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3Atc3RhcnQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1zdGFydCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXN0YXJ0e2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwgMWZyKSBhdXRvIGF1dG99ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b217Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gbWlubWF4KDAsIDFmcikgYXV0b31kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLWVuZCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWVuZCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWVuZHtncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBhdXRvIG1pbm1heCgwLCAxZnIpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi10b3Atc3RhcnQ+LnN3YWwyLXBvcHVwe2FsaWduLXNlbGY6c3RhcnR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtwbGFjZS1zZWxmOnN0YXJ0IGNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItdG9wLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLXRvcC1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztwbGFjZS1zZWxmOnN0YXJ0IGVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLXN0YXJ0Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtcm93OjI7YWxpZ24tc2VsZjpjZW50ZXJ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlcj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MjtncmlkLXJvdzoyO3BsYWNlLXNlbGY6Y2VudGVyIGNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItY2VudGVyLWVuZD4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWNlbnRlci1yaWdodD4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MztncmlkLXJvdzoyO3BsYWNlLXNlbGY6Y2VudGVyIGVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXN0YXJ0Pi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLWxlZnQ+LnN3YWwyLXBvcHVwe2dyaWQtY29sdW1uOjE7Z3JpZC1yb3c6MzthbGlnbi1zZWxmOmVuZH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tPi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjoyO2dyaWQtcm93OjM7cGxhY2Utc2VsZjplbmQgY2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ib3R0b20tZW5kPi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItYm90dG9tLXJpZ2h0Pi5zd2FsMi1wb3B1cHtncmlkLWNvbHVtbjozO2dyaWQtcm93OjM7cGxhY2Utc2VsZjplbmQgZW5kfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1ncm93LXJvdz4uc3dhbDItcG9wdXAsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItcG9wdXB7Z3JpZC1jb2x1bW46MS80O3dpZHRoOjEwMCV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpLnN3YWwyLWdyb3ctY29sdW1uPi5zd2FsMi1wb3B1cCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikuc3dhbDItZ3Jvdy1mdWxsc2NyZWVuPi5zd2FsMi1wb3B1cHtncmlkLXJvdzoxLzQ7YWxpZ24tc2VsZjpzdHJldGNofWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKS5zd2FsMi1uby10cmFuc2l0aW9ue3RyYW5zaXRpb246bm9uZSAhaW1wb3J0YW50fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKXtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2dyaWQtdGVtcGxhdGUtY29sdW1uczptaW5tYXgoMCwgMTAwJSk7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjAgMCAxLjI1ZW07Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojZmZmO2NvbG9yOiM1NDU0NTQ7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MXJlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1wb3B1cCk6Zm9jdXN7b3V0bGluZTpub25lfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLXBvcHVwKS5zd2FsMi1sb2FkaW5ne292ZXJmbG93LXk6aGlkZGVufWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBoMjp3aGVyZSguc3dhbDItdGl0bGUpe3Bvc2l0aW9uOnJlbGF0aXZlO21heC13aWR0aDoxMDAlO21hcmdpbjowO3BhZGRpbmc6LjhlbSAxZW0gMDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWFjdGlvbnMpe2Rpc3BsYXk6ZmxleDt6LWluZGV4OjE7Ym94LXNpemluZzpib3JkZXItYm94O2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOmF1dG87bWFyZ2luOjEuMjVlbSBhdXRvIDA7cGFkZGluZzowfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWFjdGlvbnMpOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF17b3BhY2l0eTouNH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1hY3Rpb25zKTpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjEpLCByZ2JhKDAsIDAsIDAsIDAuMSkpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWFjdGlvbnMpOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjIpLCByZ2JhKDAsIDAsIDAsIDAuMikpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBkaXY6d2hlcmUoLnN3YWwyLWxvYWRlcil7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjIuMmVtO2hlaWdodDoyLjJlbTttYXJnaW46MCAxLjg3NWVtO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyLXdpZHRoOi4yNWVtO2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOiMyNzc4YzQgcmdiYSgwLDAsMCwwKSAjMjc3OGM0IHJnYmEoMCwwLDAsMCl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKXttYXJnaW46LjMxMjVlbTtwYWRkaW5nOi42MjVlbSAxLjFlbTt0cmFuc2l0aW9uOmJveC1zaGFkb3cgLjFzO2JveC1zaGFkb3c6MCAwIDAgM3B4IHJnYmEoMCwwLDAsMCk7Zm9udC13ZWlnaHQ6NTAwfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCk6bm90KFtkaXNhYmxlZF0pe2N1cnNvcjpwb2ludGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCkuc3dhbDItY29uZmlybXtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiM3MDY2ZTA7Y29sb3I6I2ZmZjtmb250LXNpemU6MWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCkuc3dhbDItY29uZmlybTpmb2N1c3tib3gtc2hhZG93OjAgMCAwIDNweCByZ2JhKDExMiwxMDIsMjI0LC41KX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpLnN3YWwyLWRlbnl7Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojZGMzNzQxO2NvbG9yOiNmZmY7Zm9udC1zaXplOjFlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1zdHlsZWQpLnN3YWwyLWRlbnk6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgyMjAsNTUsNjUsLjUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLXN0eWxlZCkuc3dhbDItY2FuY2Vse2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzZlNzg4MTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1jYW5jZWw6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMTAsMTIwLDEyOSwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKS5zd2FsMi1kZWZhdWx0LW91dGxpbmU6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAzcHggcmdiYSgxMDAsMTUwLDIwMCwuNSl9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTpmb2N1c3tvdXRsaW5lOm5vbmV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItc3R5bGVkKTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1mb290ZXIpe21hcmdpbjoxZW0gMCAwO3BhZGRpbmc6MWVtIDFlbSAwO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWU7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MWVtO3RleHQtYWxpZ246Y2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtncmlkLWNvbHVtbjphdXRvICFpbXBvcnRhbnQ7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi10aW1lci1wcm9ncmVzcy1iYXIpe3dpZHRoOjEwMCU7aGVpZ2h0Oi4yNWVtO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMil9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGltZzp3aGVyZSguc3dhbDItaW1hZ2Upe21heC13aWR0aDoxMDAlO21hcmdpbjoyZW0gYXV0byAxZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGJ1dHRvbjp3aGVyZSguc3dhbDItY2xvc2Upe3otaW5kZXg6MjthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxLjJlbTtoZWlnaHQ6MS4yZW07bWFyZ2luLXRvcDowO21hcmdpbi1yaWdodDowO21hcmdpbi1ib3R0b206LTEuMmVtO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW47dHJhbnNpdGlvbjpjb2xvciAuMXMsYm94LXNoYWRvdyAuMXM7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2NvbG9yOiNjY2M7Zm9udC1mYW1pbHk6bW9ub3NwYWNlO2ZvbnQtc2l6ZToyLjVlbTtjdXJzb3I6cG9pbnRlcjtqdXN0aWZ5LXNlbGY6ZW5kfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKTpob3Zlcnt0cmFuc2Zvcm06bm9uZTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Y29sb3I6I2YyNzQ3NH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgYnV0dG9uOndoZXJlKC5zd2FsMi1jbG9zZSk6Zm9jdXN7b3V0bGluZTpub25lO2JveC1zaGFkb3c6aW5zZXQgMCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBidXR0b246d2hlcmUoLnN3YWwyLWNsb3NlKTo6LW1vei1mb2N1cy1pbm5lcntib3JkZXI6MH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWh0bWwtY29udGFpbmVye3otaW5kZXg6MTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gMS42ZW0gLjNlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6YXV0bztjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtO2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDpub3JtYWw7dGV4dC1hbGlnbjpjZW50ZXI7d29yZC13cmFwOmJyZWFrLXdvcmQ7d29yZC1icmVhazpicmVhay13b3JkfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItaW5wdXQpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItZmlsZSksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHRleHRhcmVhOndoZXJlKC5zd2FsMi10ZXh0YXJlYSksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHNlbGVjdDp3aGVyZSguc3dhbDItc2VsZWN0KSxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi1yYWRpbyksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGxhYmVsOndoZXJlKC5zd2FsMi1jaGVja2JveCl7bWFyZ2luOjFlbSAyZW0gM3B4fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItaW5wdXQpLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItZmlsZSksZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHRleHRhcmVhOndoZXJlKC5zd2FsMi10ZXh0YXJlYSl7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOmF1dG87dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjFzLGJveC1zaGFkb3cgLjFzO2JvcmRlcjoxcHggc29saWQgI2Q5ZDlkOTtib3JkZXItcmFkaXVzOi4xODc1ZW07YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA2KSwwIDAgMCAzcHggcmdiYSgwLDAsMCwwKTtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItaW5wdXQpLnN3YWwyLWlucHV0ZXJyb3IsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIGlucHV0OndoZXJlKC5zd2FsMi1maWxlKS5zd2FsMi1pbnB1dGVycm9yLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSB0ZXh0YXJlYTp3aGVyZSguc3dhbDItdGV4dGFyZWEpLnN3YWwyLWlucHV0ZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQgIWltcG9ydGFudDtib3gtc2hhZG93OjAgMCAycHggI2YyNzQ3NCAhaW1wb3J0YW50fWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItaW5wdXQpOmZvY3VzLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItZmlsZSk6Zm9jdXMsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIHRleHRhcmVhOndoZXJlKC5zd2FsMi10ZXh0YXJlYSk6Zm9jdXN7Ym9yZGVyOjFweCBzb2xpZCAjYjRkYmVkO291dGxpbmU6bm9uZTtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNiksMCAwIDAgM3B4IHJnYmEoMTAwLDE1MCwyMDAsLjUpfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSBpbnB1dDp3aGVyZSguc3dhbDItaW5wdXQpOjpwbGFjZWhvbGRlcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgaW5wdXQ6d2hlcmUoLnN3YWwyLWZpbGUpOjpwbGFjZWhvbGRlcixkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgdGV4dGFyZWE6d2hlcmUoLnN3YWwyLXRleHRhcmVhKTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2NjY31kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhbmdle21hcmdpbjoxZW0gMmVtIDNweDtiYWNrZ3JvdW5kOiNmZmZ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDo4MCV9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZSBvdXRwdXR7d2lkdGg6MjAlO2NvbG9yOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcmFuZ2UgaW5wdXQsZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYW5nZSBvdXRwdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxLjEyNWVtO2xpbmUtaGVpZ2h0OjIuNjI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1pbnB1dHtoZWlnaHQ6Mi42MjVlbTtwYWRkaW5nOjAgLjc1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1maWxle3dpZHRoOjc1JTttYXJnaW4tcmlnaHQ6YXV0bzttYXJnaW4tbGVmdDphdXRvO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwKTtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXRleHRhcmVhe2hlaWdodDo2Ljc1ZW07cGFkZGluZzouNzVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXNlbGVjdHttaW4td2lkdGg6NTAlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6LjM3NWVtIC42MjVlbTtiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMCk7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXJhZGlvLGRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItY2hlY2tib3h7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDojZmZmO2NvbG9yOmluaGVyaXR9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYWRpbyBsYWJlbCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWNoZWNrYm94IGxhYmVse21hcmdpbjowIC42ZW07Zm9udC1zaXplOjEuMTI1ZW19ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1yYWRpbyBpbnB1dCxkaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLWNoZWNrYm94IGlucHV0e2ZsZXgtc2hyaW5rOjA7bWFyZ2luOjAgLjRlbX1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgbGFiZWw6d2hlcmUoLnN3YWwyLWlucHV0LWxhYmVsKXtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MWVtIGF1dG8gMH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2Upe2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxZW0gMCAwO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmMGYwZjA7Y29sb3I6IzY2Njtmb250LXNpemU6MWVtO2ZvbnQtd2VpZ2h0OjMwMH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgZGl2OndoZXJlKC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2UpOjpiZWZvcmV7Y29udGVudDpcXFwiIVxcXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MS41ZW07bWluLXdpZHRoOjEuNWVtO2hlaWdodDoxLjVlbTttYXJnaW46MCAuNjI1ZW07Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjEuNWVtO3RleHQtYWxpZ246Y2VudGVyfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHN7ZmxleC13cmFwOndyYXA7YWxpZ24taXRlbXM6Y2VudGVyO21heC13aWR0aDoxMDAlO21hcmdpbjoxLjI1ZW0gYXV0bztwYWRkaW5nOjA7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLDApO2ZvbnQtd2VpZ2h0OjYwMH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXB7ei1pbmRleDoyMDtmbGV4LXNocmluazowO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO2JvcmRlci1yYWRpdXM6MmVtO2JhY2tncm91bmQ6IzI3NzhjNDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjJlbTt0ZXh0LWFsaWduOmNlbnRlcn1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6IzI3NzhjNH1kaXY6d2hlcmUoLnN3YWwyLWNvbnRhaW5lcikgLnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6I2FkZDhlNjtjb2xvcjojZmZmfWRpdjp3aGVyZSguc3dhbDItY29udGFpbmVyKSAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXtiYWNrZ3JvdW5kOiNhZGQ4ZTZ9ZGl2OndoZXJlKC5zd2FsMi1jb250YWluZXIpIC5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le3otaW5kZXg6MTA7ZmxleC1zaHJpbms6MDt3aWR0aDoyLjVlbTtoZWlnaHQ6LjRlbTttYXJnaW46MCAtMXB4O2JhY2tncm91bmQ6IzI3NzhjNH1kaXY6d2hlcmUoLnN3YWwyLWljb24pe3Bvc2l0aW9uOnJlbGF0aXZlO2JveC1zaXppbmc6Y29udGVudC1ib3g7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDo1ZW07aGVpZ2h0OjVlbTttYXJnaW46Mi41ZW0gYXV0byAuNmVtO2JvcmRlcjowLjI1ZW0gc29saWQgcmdiYSgwLDAsMCwwKTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXItY29sb3I6IzAwMDtmb250LWZhbWlseTppbmhlcml0O2xpbmUtaGVpZ2h0OjVlbTtjdXJzb3I6ZGVmYXVsdDt1c2VyLXNlbGVjdDpub25lfWRpdjp3aGVyZSguc3dhbDItaWNvbikgLnN3YWwyLWljb24tY29udGVudHtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZTozLjc1ZW19ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NDtjb2xvcjojZjI3NDc0fWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3IgLnN3YWwyLXgtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LWdyb3c6MX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjIuMzEyNWVtO3dpZHRoOjIuOTM3NWVtO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NH1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1sZWZ0XXtsZWZ0OjEuMDYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDoxZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItZXJyb3Iuc3dhbDItaWNvbi1zaG93IC5zd2FsMi14LW1hcmt7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXdhcm5pbmd7Ym9yZGVyLWNvbG9yOiNmYWNlYTg7Y29sb3I6I2Y4YmI4Nn1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXdhcm5pbmcuc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItd2FybmluZy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLWljb24tY29udGVudHthbmltYXRpb246c3dhbDItYW5pbWF0ZS1pLW1hcmsgLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItaW5mb3tib3JkZXItY29sb3I6IzlkZTBmNjtjb2xvcjojM2ZjM2VlfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItaW5mby5zd2FsMi1pY29uLXNob3d7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbiAuNXN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1pbmZvLnN3YWwyLWljb24tc2hvdyAuc3dhbDItaWNvbi1jb250ZW50e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWktbWFyayAuOHN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1xdWVzdGlvbntib3JkZXItY29sb3I6I2M5ZGFlMTtjb2xvcjojODdhZGJkfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb24uc3dhbDItaWNvbi1zaG93e2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItcXVlc3Rpb24uc3dhbDItaWNvbi1zaG93IC5zd2FsMi1pY29uLWNvbnRlbnR7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFyayAuOHN9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2O2NvbG9yOiNhNWRjODZ9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDozLjc1ZW07aGVpZ2h0OjcuNWVtO2JvcmRlci1yYWRpdXM6NTAlfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotMC40Mzc1ZW07bGVmdDotMi4wNjM1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46My43NWVtIDMuNzVlbTtib3JkZXItcmFkaXVzOjcuNWVtIDAgMCA3LjVlbX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0wLjY4NzVlbTtsZWZ0OjEuODc1ZW07dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07Ym9yZGVyLXJhZGl1czowIDcuNWVtIDcuNWVtIDB9ZGl2OndoZXJlKC5zd2FsMi1pY29uKS5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDotMC4yNWVtO2xlZnQ6LTAuMjVlbTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOi4yNWVtIHNvbGlkIHJnYmEoMTY1LDIyMCwxMzQsLjMpO2JvcmRlci1yYWRpdXM6NTAlfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2VzcyAuc3dhbDItc3VjY2Vzcy1maXh7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO3RvcDouNWVtO2xlZnQ6MS42MjVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDo1LjYyNWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Nn1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoyLjg3NWVtO2xlZnQ6LjgxMjVlbTt3aWR0aDoxLjU2MjVlbTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX1kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwe2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c31kaXY6d2hlcmUoLnN3YWwyLWljb24pLnN3YWwyLXN1Y2Nlc3Muc3dhbDItaWNvbi1zaG93IC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3thbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfWRpdjp3aGVyZSguc3dhbDItaWNvbikuc3dhbDItc3VjY2Vzcy5zd2FsMi1pY29uLXNob3cgLnN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1yaWdodHthbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWlufVtjbGFzc149c3dhbDJdey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjpyZ2JhKDAsMCwwLDApfS5zd2FsMi1zaG93e2FuaW1hdGlvbjpzd2FsMi1zaG93IC4zc30uc3dhbDItaGlkZXthbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzfS5zd2FsMi1ub2FuaW1hdGlvbnt0cmFuc2l0aW9uOm5vbmV9LnN3YWwyLXNjcm9sbGJhci1tZWFzdXJle3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O3dpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7b3ZlcmZsb3c6c2Nyb2xsfS5zd2FsMi1ydGwgLnN3YWwyLWNsb3Nle21hcmdpbi1yaWdodDppbml0aWFsO21hcmdpbi1sZWZ0OjB9LnN3YWwyLXJ0bCAuc3dhbDItdGltZXItcHJvZ3Jlc3MtYmFye3JpZ2h0OjA7bGVmdDphdXRvfUBrZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvd3swJXt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC42MjVlbSkgcm90YXRlWigyZGVnKX0zMyV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyl9NjYle3RyYW5zZm9ybTp0cmFuc2xhdGVZKDAuMzEyNWVtKSByb3RhdGVaKDJkZWcpfTEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwZGVnKX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlezEwMCV7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LTAuMjVlbTt3aWR0aDoxLjYyNWVtfTg0JXt0b3A6MS4wNjI1ZW07bGVmdDouNzVlbTt3aWR0aDouNWVtfTEwMCV7dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7dHJhbnNmb3JtOnNjYWxlKDAuNyl9NDUle3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7dHJhbnNmb3JtOnNjYWxlKDAuOTUpfTEwMCV7dHJhbnNmb3JtOnNjYWxlKDEpfX1Aa2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAle3RyYW5zZm9ybTpzY2FsZSgwLjUpO29wYWNpdHk6MH19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LTAuMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6LjgxMjVlbTt3aWR0aDoxLjU2MjVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFya3swJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKDAuNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07dHJhbnNmb3JtOnNjYWxlKDAuNCk7b3BhY2l0eTowfTgwJXttYXJnaW4tdG9wOi0wLjM3NWVtO3RyYW5zZm9ybTpzY2FsZSgxLjE1KX0xMDAle21hcmdpbi10b3A6MDt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAle3RyYW5zZm9ybTpyb3RhdGVYKDBkZWcpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1yb3RhdGUtbG9hZGluZ3swJXt0cmFuc2Zvcm06cm90YXRlKDBkZWcpfTEwMCV7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtcXVlc3Rpb24tbWFya3swJXt0cmFuc2Zvcm06cm90YXRlWSgtMzYwZGVnKX0xMDAle3RyYW5zZm9ybTpyb3RhdGVZKDApfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtaS1tYXJrezAle3RyYW5zZm9ybTpyb3RhdGVaKDQ1ZGVnKTtvcGFjaXR5OjB9MjUle3RyYW5zZm9ybTpyb3RhdGVaKC0yNWRlZyk7b3BhY2l0eTouNH01MCV7dHJhbnNmb3JtOnJvdGF0ZVooMTVkZWcpO29wYWNpdHk6Ljh9NzUle3RyYW5zZm9ybTpyb3RhdGVaKC01ZGVnKTtvcGFjaXR5OjF9MTAwJXt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8gIWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLDApICFpbXBvcnRhbnQ7cG9pbnRlci1ldmVudHM6bm9uZX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLXBvcHVwe3BvaW50ZXItZXZlbnRzOmFsbH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse2JveC1zaGFkb3c6MCAwIDEwcHggcmdiYSgwLDAsMCwuNCl9QG1lZGlhIHByaW50e2JvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3cteTpzY3JvbGwgIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pPlthcmlhLWhpZGRlbj10cnVlXXtkaXNwbGF5Om5vbmV9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOnN0YXRpYyAhaW1wb3J0YW50fX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXJ7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjM2MHB4O21heC13aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwKTtwb2ludGVyLWV2ZW50czpub25lfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7aW5zZXQ6MCBhdXRvIGF1dG8gNTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7aW5zZXQ6MCAwIGF1dG8gYXV0b31ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdHtpbnNldDowIGF1dG8gYXV0byAwfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0e2luc2V0OjUwJSBhdXRvIGF1dG8gMDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye2luc2V0OjUwJSBhdXRvIGF1dG8gNTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwgLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodHtpbnNldDo1MCUgMCBhdXRvIGF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnR7aW5zZXQ6YXV0byBhdXRvIDAgMH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te2luc2V0OmF1dG8gYXV0byAwIDUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0e2luc2V0OmF1dG8gMCAwIGF1dG99XCIpOyIsImltcG9ydCB7IEVkZ2UgfSBmcm9tIFwiLi9vYmplY3QvRWRnZVwiO1xuaW1wb3J0IHsgVmVydGV4IH0gZnJvbSBcIi4vb2JqZWN0L1ZlcnRleFwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g6Zqj5o6l6KGM5YiX44Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgQWRqYWNlbmN5TWF0cml4IHtcbiAgICBjb25zdHJ1Y3RvcihhcmcxLCBhcmcyKSB7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl1xuICAgICAgICB0aGlzLm1hdHJpeCA9IG51bGw7XG4gICAgICAgIC8vIGszLDPmjqLntKLntZDmnpxcbiAgICAgICAgdGhpcy5yZXN1bHRLMzMgPSBudWxsO1xuICAgICAgICAvLyBrNeaOoue0oue1kOaenFxuICAgICAgICB0aGlzLnJlc3VsdEs1ID0gbnVsbDtcbiAgICAgICAgaWYgKGFyZzEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk51bGwgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZzEpICYmIGFyZzEuZXZlcnkoKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSBcIm51bWJlclwiKSAmJiBhcmcyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWF0cml4ID0gdGhpcy5nZW5lcmF0ZU1hdHJpeChhcmcxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZzEpICYmIGFyZzEuZXZlcnkoKGl0ZW0pID0+IGl0ZW0gaW5zdGFuY2VvZiBWZXJ0ZXgpICYmIEFycmF5LmlzQXJyYXkoYXJnMikgJiYgYXJnMi5ldmVyeSgoaXRlbSkgPT4gaXRlbSBpbnN0YW5jZW9mIEVkZ2UpKSB7XG4gICAgICAgICAgICB0aGlzLm1hdHJpeCA9IHRoaXMuY29udmVydE1hdHJpeChhcmcxLCBhcmcyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXJndW1lbnRzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3JcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSzMsM1xuICAgICAgICB0aGlzLnJlc3VsdEszMyA9IHRoaXMuc2VhcmNoSzMzKCk7XG4gICAgICAgIC8vIEs1XG4gICAgICAgIHRoaXMucmVzdWx0SzUgPSB0aGlzLnNlYXJjaEs1KCk7XG4gICAgfVxuICAgIC8vIOmao+aOpeihjOWIl+OCkuWPluW+l+OBmeOCi1xuICAgIGdldE1hdHJpeCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICAgIH1cbiAgICAvLyBLMzPjga7mjqLntKLntZDmnpzjgpLlj5blvpfjgZnjgotcbiAgICBnZXRSZXN1bHRLMzMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdEszMztcbiAgICB9XG4gICAgLy8gSzXjga7mjqLntKLntZDmnpzjgpLlj5blvpfjgZnjgotcbiAgICBnZXRSZXN1bHRLNSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0SzU7XG4gICAgfVxuICAgIC8vIOaPj+eUu+WPr+iDveWMluOBi1xuICAgIGlzR3JhcGhpY2FsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXggIT09IG51bGw7XG4gICAgfVxuICAgIC8vIEszM+OBjOWtmOWcqOOBmeOCi+OBi1xuICAgIGhhc0szMygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4ICE9PSBudWxsICYmIHRoaXMucmVzdWx0SzMzICE9PSBudWxsO1xuICAgIH1cbiAgICAvLyBLNeOBjOWtmOWcqOOBmeOCi+OBi1xuICAgIGhhc0s1KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRyaXggIT09IG51bGwgJiYgdGhpcy5yZXN1bHRLNSAhPT0gbnVsbDtcbiAgICB9XG4gICAgLy8g5bmz6Z2i44Kw44Op44OV44GLXG4gICAgaXNQbGFuYXJHcmFwaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF0cml4ICE9PSBudWxsICYmIHRoaXMucmVzdWx0SzMzID09PSBudWxsICYmIHRoaXMucmVzdWx0SzUgPT09IG51bGw7XG4gICAgfVxuICAgIC8vIOmggueCueOCquODluOCuOOCp+OCr+ODiOmFjeWIl+OBi+OCieOAgemao+aOpeihjOWIl+OBq+WkieaPm1xuICAgIGNvbnZlcnRNYXRyaXgodmVydGljZXMsIGVkZ2VzKSB7XG4gICAgICAgIC8vIOmggueCueOBruaVsOOBq+WfuuOBpeOBhOOBpuOAgeWIneacn+WApOOBjDDjga7pmqPmjqXooYzliJfjgpLnlJ/miJBcbiAgICAgICAgY29uc3QgYWRqYWNlbmN5TWF0cml4ID0gdmVydGljZXMubWFwKCgpID0+IEFycmF5KHZlcnRpY2VzLmxlbmd0aCkuZmlsbCgwKSk7XG4gICAgICAgIC8vIOWFqOOBpuOBrui+uuOBq+WvvuOBl+OBpuWHpueQhuOCkuWun+ihjFxuICAgICAgICBlZGdlcy5mb3JFYWNoKChlZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b0luZGV4ID0gdmVydGljZXMuaW5kZXhPZihlZGdlLnRvKTtcbiAgICAgICAgICAgIGNvbnN0IGZyb21JbmRleCA9IHZlcnRpY2VzLmluZGV4T2YoZWRnZS5mcm9tKTtcbiAgICAgICAgICAgIC8vIOeEoeWQkeOCsOODqeODleOBruWgtOWQiOOAgeWvvuensOaAp+OCkuS/neOBpOOBn+OCgeOBq+S4oeaWueWQkeOBqzHjgpLoqK3lrppcbiAgICAgICAgICAgIGFkamFjZW5jeU1hdHJpeFtmcm9tSW5kZXhdW3RvSW5kZXhdID0gMTtcbiAgICAgICAgICAgIGFkamFjZW5jeU1hdHJpeFt0b0luZGV4XVtmcm9tSW5kZXhdID0gMTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhZGphY2VuY3lNYXRyaXg7XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+OBi+OCieOAgemao+aOpeihjOWIl+OCkueUn+aIkOOBmeOCi1xuICAgIC8vIOODj+ODmeODq+ODu+ODj+OCreODn+OBruWumueQhuOCkuWPguiAg+OBq+OBl+OBn+OBjOOAgeW8leaVsOOBruasoeaVsOmFjeWIl+mghuOBp+Wun+ihjOOBmeOCi1xuICAgIC8vIOOBk+OCjOOBq+OCiOOCiuOAgeasoeaVsOmFjeWIl+OBrumghuW6j+OBjOeVsOOBquOCi+OBqOe1kOaenOOCgueVsOOBquOCi1xuICAgIGdlbmVyYXRlTWF0cml4KGRlZ3JlZVNlcXVlbmNlKSB7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl+OBruWIneacn+WMljog5YWo44Gm44Gu6KaB57Sg44KSMOOBp+Wfi+OCgeOBn24geCBu44Gu6KGM5YiX44KS5L2c5oiQXG4gICAgICAgIGNvbnN0IG4gPSBkZWdyZWVTZXF1ZW5jZS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IGRlZ3JlZVNlcXVlbmNlLm1hcCgoKSA9PiBuZXcgQXJyYXkobikuZmlsbCgwKSk7XG4gICAgICAgIC8vIOaui+asoeaVsOOCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgICAgICBjb25zdCByZW1haW5pbmdEZWdyZWVzID0gWy4uLmRlZ3JlZVNlcXVlbmNlXTtcbiAgICAgICAgLy8g6aCC54K544Kk44Oz44OH44OD44Kv44K56YWN5YiX44KS55Sf5oiQXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb25zID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbiB9LCAoXywgaW5kZXgpID0+IGluZGV4KTtcbiAgICAgICAgLy8g5ZCE6aCC54K544Gr5a++44GX44Gm5o6l57aa44GX44Gm44GE44GPXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVtYWluaW5nRGVncmVlc1tpXSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmrovjgormrKHmlbDjgYzmnIDlpKfjgafjgYvjgaTjgqTjg7Pjg4fjg4Pjgq/jgrnjgYzlsI/jgZXjgYTpoIbjgavmjqXntprlr77osaHjgpLjgr3jg7zjg4hcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9ucy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1haW5pbmdEZWdyZWVzW2FdID09PSByZW1haW5pbmdEZWdyZWVzW2JdKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEgLSBiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVtYWluaW5nRGVncmVlc1tiXSAtIHJlbWFpbmluZ0RlZ3JlZXNbYV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGF0dGVtcHRzID0gcmVtYWluaW5nRGVncmVlc1tpXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMCwgayA9IDA7IGsgPCBhdHRlbXB0cyAmJiBqIDwgbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbm5JbmRleCA9IGNvbm5lY3Rpb25zW2pdO1xuICAgICAgICAgICAgICAgICAgICAvLyDoh6rliIboh6rouqvjgpLpmaTjgY/jgIHmrovjgormrKHmlbDjgYzmraPjga7poILngrnjgajmjqXntppcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGNvbm5JbmRleCAmJiByZW1haW5pbmdEZWdyZWVzW2Nvbm5JbmRleF0gPiAwICYmIG1hdHJpeFtpXVtjb25uSW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbaV1bY29ubkluZGV4XSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbY29ubkluZGV4XVtpXSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5pbmdEZWdyZWVzW2Nvbm5JbmRleF0tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZ0RlZ3JlZXNbaV0tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDmjqXntprlr77osaHjgYzotrPjgorjgarjgYTloLTlkIjjga/lrp/nj77kuI3lj6/og71cbiAgICAgICAgICAgICAgICBpZiAocmVtYWluaW5nRGVncmVlc1tpXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOeUn+aIkOOBleOCjOOBn+mao+aOpeihjOWIl+OCkui/lOOBmVxuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cbiAgICAvLyBLMywz44KS5o6i57Si44GX44Gm44CB5a2Y5Zyo44GZ44KL5aC05ZCI44Gv44CBSzMsM+OCkuani+aIkOOBmeOCi2luZGV46YWN5YiX44KS5Y+W5b6X44GZ44KLXG4gICAgc2VhcmNoSzMzKCkge1xuICAgICAgICAvLyDpmqPmjqXooYzliJfljJbjgafjgY3jgabjgarjgYTloLTlkIjjga/jgIHliKTlrprlr77osaHlpJZcbiAgICAgICAgaWYgKCF0aGlzLm1hdHJpeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6aCC54K55pWw77yW5pyq5rqA44Gv44CB5Yik5a6a5a++6LGh5aSWXG4gICAgICAgIGNvbnN0IG4gPSB0aGlzLm1hdHJpeC5sZW5ndGg7XG4gICAgICAgIGlmIChuIDwgNikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6Zqj5o6l6KGM5YiX44KS44Kz44OU44O844GZ44KLXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMubWF0cml4Lm1hcCgocm93KSA9PiByb3cuc2xpY2UoKSk7XG4gICAgICAgIC8vIDPjgaTjga7nlbDjgarjgovooYzjgpLpgbjmip7jgZnjgovjgZnjgbnjgabjga7ntYTjgb/lkIjjgo/jgZvjgpLoqabjgZlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IG47IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSBqICsgMTsgayA8IG47IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyDoq5bnkIbnqY3jga7ntZDmnpxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbjsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0cml4W2ldW3hdICYmIG1hdHJpeFtqXVt4XSAmJiBtYXRyaXhba11beF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSzMsM+WIpOWumlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtbaSwgaiwga10sIHJlc3VsdF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSzMsM+OBjOimi+OBpOOBi+OCieOBquOBi+OBo+OBn1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8gSzXjgpLmjqLntKLjgZfjgabjgIHlrZjlnKjjgZnjgovloLTlkIjjga/jgIFLNeOCkuani+aIkOOBmeOCi2luZGV46YWN5YiX44KS5Y+W5b6X44GZ44KLXG4gICAgc2VhcmNoSzUoKSB7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl+WMluOBp+OBjeOBpuOBquOBhOWgtOWQiOOBr+OAgeWIpOWumuWvvuixoeWkllxuICAgICAgICBpZiAoIXRoaXMubWF0cml4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuID0gdGhpcy5tYXRyaXgubGVuZ3RoO1xuICAgICAgICAvLyDpoILngrnmlbDvvJXmnKrmuoDjga/jgIHliKTlrprlr77osaHlpJZcbiAgICAgICAgaWYgKG4gPCA1KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpmqPmjqXooYzliJfjgpLjgrPjg5Tjg7zjgZfjgIHlr77op5LjgpIx44Gr44GZ44KLXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMubWF0cml4Lm1hcCgocm93LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Um93ID0gcm93LnNsaWNlKCk7XG4gICAgICAgICAgICBuZXdSb3dbaW5kZXhdID0gMTtcbiAgICAgICAgICAgIHJldHVybiBuZXdSb3c7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyA144Gk44Gu6KGM44Gu57WE44G/5ZCI44KP44Gb44KS55Sf5oiQ44GX44Gm44OB44Kn44OD44KvXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gaiArIDE7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IGsgKyAxOyBsIDwgbjsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtID0gbCArIDE7IG0gPCBuOyBtKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDoq5bnkIbnqY3jga7ntZDmnpxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgbjsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRyaXhbaV1beF0gJiYgbWF0cml4W2pdW3hdICYmIG1hdHJpeFtrXVt4XSAmJiBtYXRyaXhbbF1beF0gJiYgbWF0cml4W21dW3hdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaCh4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSzXliKTlrppcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSA1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2ksIGosIGssIGwsIG1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEs144GM6KaL44Gk44GL44KJ44Gq44GL44Gj44GfXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEFkamFjZW5jeU1hdHJpeCB9IGZyb20gXCIuL0FkamFjZW5jeU1hdHJpeFwiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5qyh5pWw6YWN5YiX44Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgRGVncmVlU2VxdWVuY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyDpmqPmjqXooYzliJdcbiAgICAgICAgdGhpcy5hZGphY2VuY3lNYXRyaXggPSBudWxsO1xuICAgICAgICB0aGlzLnNlcXVlbmNlID0gW107XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+OBqOOBl+OBpuacieWKueOBi1xuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIC8vIOacgOWkp+asoeaVsOOBr+mggueCueaVsOOCiOOCiuWwj+OBleOBhFxuICAgICAgICBjb25zdCBtYXhEZWdyZWUgPSBNYXRoLm1heCguLi50aGlzLnNlcXVlbmNlKTtcbiAgICAgICAgaWYgKCEobWF4RGVncmVlIDwgdGhpcy52ZXJ0ZXhDb3VudCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOasoeaVsOWQiOioiOOBjOWBtuaVsOOBp+OBguOCi1xuICAgICAgICBpZiAoISh0aGlzLnRvdGFsRGVncmVlKCkgJSAyID09IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIOmggueCueOBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgIHZlcnRleENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZS5sZW5ndGg7XG4gICAgfVxuICAgIC8vIOi+uuOBruaVsOOCkuWPluW+l+OBmeOCi1xuICAgIGVkZ2VDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy50b3RhbERlZ3JlZSgpIC8gMik7XG4gICAgfVxuICAgIC8vIOasoeaVsOWQiOioiOOCkuWPluW+l+OBmeOCi1xuICAgIHRvdGFsRGVncmVlKCkge1xuICAgICAgICBjb25zdCBpbml0aWFsVmFsdWUgPSAwO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXF1ZW5jZS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWUpID0+IGFjY3VtdWxhdG9yICsgY3VycmVudFZhbHVlLCBpbml0aWFsVmFsdWUpO1xuICAgIH1cbiAgICAvLyDmrKHmlbDphY3liJflvaLlvI/jga7mloflrZfliJflj5blvpdcbiAgICBnZXRBcnJheVN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VxdWVuY2Uuam9pbihcIiwgXCIpO1xuICAgIH1cbiAgICAvLyDjg6njg7Pjg6zjg7PjgrDjgrnlnKfnuK7lvaLlvI/jga7mloflrZfliJflj5blvpdcbiAgICBnZXRSdW5MZW5ndGhTdHJpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlcXVlbmNlLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIGxldCBjdXJyZW50ID0gdGhpcy5zZXF1ZW5jZVswXTtcbiAgICAgICAgbGV0IGNvdW50ID0gMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnNlcXVlbmNlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZXF1ZW5jZVtpXSA9PT0gY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChgJHtjdXJyZW50fSoke2NvdW50fWApO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLnNlcXVlbmNlW2ldO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmnIDlvozjga7opoHntKDjgpLov73liqBcbiAgICAgICAgcmVzdWx0LnB1c2goYCR7Y3VycmVudH0qJHtjb3VudH1gKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKFwiLCBcIik7XG4gICAgfVxuICAgIC8vIOmggueCueOCquODluOCuOOCp+OCr+ODiOmFjeWIl+OBi+OCieOAgeasoeaVsOmFjeWIl+OBq+OCu+ODg+ODiOOBmeOCi1xuICAgIHNldFZlcnRpY2VzKHZlcnRpY2VzLCBlZGdlcykge1xuICAgICAgICB0aGlzLnNlcXVlbmNlID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHZlcnRleC5nZXREZWdyZWUoKSk7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl1xuICAgICAgICB0aGlzLmFkamFjZW5jeU1hdHJpeCA9IG5ldyBBZGphY2VuY3lNYXRyaXgodmVydGljZXMsIGVkZ2VzKTtcbiAgICB9XG4gICAgLy8g5YWl5Yqb5paH5a2X44GL44KJ44CB5qyh5pWw6YWN5YiX44Gr44K744OD44OI44GZ44KLXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgbGV0IGNsZWFuZWRWYWx1ZSA9IHZhbHVlXG4gICAgICAgICAgICAvLyDpgKPntprjgZnjgovjgqvjg7Pjg57jgoTjgqLjgrnjgr/jg6rjgrnjgq/jgpLkuIDjgaTjgavjgZnjgotcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oWywqXSlcXDErL2csIFwiJDFcIilcbiAgICAgICAgICAgIC8vIOacgOW+jOOBruOCq+ODs+ODnuOChOOCouOCueOCv+ODquOCueOCr+OCkuWJiumZpFxuICAgICAgICAgICAgLnJlcGxhY2UoL1ssKl0kLywgXCJcIik7XG4gICAgICAgIC8vIOaWh+Wtl+WIl+OCkuOAgeasoeaVsOmFjeWIl+OBq+WkieaPm1xuICAgICAgICBpZiAoY2xlYW5lZFZhbHVlLmluY2x1ZGVzKFwiKlwiKSkge1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZSA9IHRoaXMuY29udmVydFJ1bkxlbmd0aFN0cmluZ1RvRGVncmVlcyhjbGVhbmVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXF1ZW5jZSA9IHRoaXMuY29udmVydEFycmF5U3RyaW5nVG9EZWdyZWVzKGNsZWFuZWRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX44GL44KJ6Zqj5o6l6KGM5YiX44KS55Sf5oiQ44GZ44KLXG4gICAgZ2VuZXJhdGVBZGphY2VuY3lNYXRyaXgoKSB7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl1xuICAgICAgICB0aGlzLmFkamFjZW5jeU1hdHJpeCA9IG5ldyBBZGphY2VuY3lNYXRyaXgodGhpcy5zZXF1ZW5jZSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkamFjZW5jeU1hdHJpeDtcbiAgICB9XG4gICAgZ2V0QWRqYWNlbmN5TWF0cml4KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGphY2VuY3lNYXRyaXg7XG4gICAgfVxuICAgIC8vIOODqeODs+ODrOODs+OCsOOCueWcp+e4ruW9ouW8j+OBruaWh+Wtl+WIl+OBi+OCieOAgeasoeaVsOmFjeWIl+OBq+WkieaPm1xuICAgIGNvbnZlcnRSdW5MZW5ndGhTdHJpbmdUb0RlZ3JlZXMoaW5wdXQpIHtcbiAgICAgICAgaWYgKCFpbnB1dClcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIGlucHV0LnNwbGl0KFwiLFwiKS5yZWR1Y2UoKGFjYywgcGFydCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW3ZhbHVlLCBjb3VudF0gPSBwYXJ0LnNwbGl0KFwiKlwiKS5tYXAoTnVtYmVyKTtcbiAgICAgICAgICAgIC8vIOaVsOOBjCAwIOOBp+OBquOBhOWgtOWQiOOBruOBv+i/veWKoFxuICAgICAgICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjYy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBbXSk7XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+W9ouW8j+OBruaWh+Wtl+WIl+OBi+OCieOAgeasoeaVsOmFjeWIl+OBq+WkieaPm1xuICAgIGNvbnZlcnRBcnJheVN0cmluZ1RvRGVncmVlcyhpbnB1dCkge1xuICAgICAgICByZXR1cm4gaW5wdXRcbiAgICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IFwiXCIpXG4gICAgICAgICAgICAubWFwKE51bWJlcik7XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzLWZvcmNlXCI7XG5pbXBvcnQgeyBEZWdyZWVTZXF1ZW5jZSB9IGZyb20gXCIuL0RlZ3JlZVNlcXVlbmNlIFwiO1xuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gXCIuL29iamVjdC9Db250cm9sXCI7XG5pbXBvcnQgeyBFZGdlIH0gZnJvbSBcIi4vb2JqZWN0L0VkZ2VcIjtcbmltcG9ydCB7IFZlcnRleCB9IGZyb20gXCIuL29iamVjdC9WZXJ0ZXhcIjtcbmltcG9ydCB7IE1vdXNlQnV0dG9uRW51bSwgVXRpbHMgfSBmcm9tIFwiLi91dGlsc1wiO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g44Kw44Op44OV44Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgR3JhcGhNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIHVwZGF0ZURlZ3JlZVNlcXVlbmNlLCB1cGRhdGVJbmZvKSB7XG4gICAgICAgIHRoaXMuTUFYX0NBTlZBU19XSURUSCA9IDIwMDAwO1xuICAgICAgICB0aGlzLk1BWF9DQU5WQVNfSEVJR0hUID0gMTAwMDA7XG4gICAgICAgIC8vIOOCsOODquODg+ODieihqOekuueKtuaFi1xuICAgICAgICB0aGlzLnNob3dHcmlkID0gdHJ1ZTtcbiAgICAgICAgLy8g5Yqb5oyH5ZCR44Oi44O844OJXG4gICAgICAgIHRoaXMuZm9yY2VEaXJlY3RNb2RlID0gdHJ1ZTtcbiAgICAgICAgLy8g44Oe44Km44K55L2N572uXG4gICAgICAgIHRoaXMubW91c2UgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgLy8g44Kq44OW44K444Kn44Kv44OI566h55CGXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IFtdO1xuICAgICAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmk43kvZxcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZlcnRleCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVFZGdlID0gbnVsbDtcbiAgICAgICAgLy8g44K644O844Og5qmf6IO96Zai6YCjXG4gICAgICAgIHRoaXMub3JpZ2luID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLnpvb21MZXZlbHMgPSBbMC4xLCAwLjIsIDAuMywgMC40LCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuOSwgMS4wLCAxLjEsIDEuMiwgMS4zLCAxLjQsIDEuNSwgMS43NSwgMi4wLCAyLjUsIDMuMCwgMy41LCA0LjBdO1xuICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSAxMDsgLy8g5Yid5pyf5YCkIDEwMCVcbiAgICAgICAgLy8g44OR44Oz5qmf6IO9XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxhc3RQb3MgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgLy8g6aCC54K55oOF5aCx6KGo56S6XG4gICAgICAgIHRoaXMuc2hvd0luZGV4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93RGVncmVlID0gZmFsc2U7XG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgLy8g5Yqb5oyH5ZCR44Ki44Or44K044Oq44K644OgXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmRlZ3JlZVNlcXVlbmNlID0gbmV3IERlZ3JlZVNlcXVlbmNlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRGVncmVlU2VxdWVuY2UgPSB1cGRhdGVEZWdyZWVTZXF1ZW5jZTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvID0gdXBkYXRlSW5mbztcbiAgICAgICAgdGhpcy5zZXR1cEV2ZW50cygpO1xuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Kk44OZ44Oz44OI5Yem55CGXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCpOODmeODs+ODiOeZu+mMslxuICAgIHNldHVwRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgdGhpcy5oYW5kbGVEb3VibGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLmhhbmRsZU1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIHRoaXMuaGFuZGxlTW91c2VPdXQuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuaGFuZGxlTW91c2VVcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIHRoaXMuaGFuZGxlQ29udGV4dE1lbnUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCB0aGlzLmhhbmRsZVdoZWVsLmJpbmQodGhpcykpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUNhbnZhcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VGb3JjZURpcmVjdE1vZGUodGhpcy5mb3JjZURpcmVjdE1vZGUpO1xuICAgIH1cbiAgICAvLyDjg4Djg5bjg6vjgq/jg6rjg4Pjgq9cbiAgICBoYW5kbGVEb3VibGVDbGljayhlKSB7XG4gICAgICAgIHRoaXMubW91c2UgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG4gICAgICAgIHRoaXMuYWRkVmVydGV4KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55KTtcbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8g44Oe44Km44K544Og44O844OWXG4gICAgaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgLy8g6aCC54K544GL5Yi25b6h54K544Gu56e75YuVXG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nUG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludC54ID0gdGhpcy5tb3VzZS54O1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50LnkgPSB0aGlzLm1vdXNlLnk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcIm1vdmVcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7np7vli5VcbiAgICAgICAgZWxzZSBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkeCA9IGUuY2xpZW50WCAtIHRoaXMubGFzdFBvcy54O1xuICAgICAgICAgICAgY29uc3QgZHkgPSBlLmNsaWVudFkgLSB0aGlzLmxhc3RQb3MueTtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnggKz0gZHg7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbi55ICs9IGR5O1xuICAgICAgICAgICAgLy8g56e75YuV5Yi26ZmQXG4gICAgICAgICAgICB0aGlzLmxpbWl0Q2FudmFzUGFuKCk7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueCA9IGUuY2xpZW50WDtcbiAgICAgICAgICAgIHRoaXMubGFzdFBvcy55ID0gZS5jbGllbnRZO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmggueCuemBuOaKnua4iOOBv+OBruWgtOWQiFxuICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkVmVydGV4KSB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g6L6644Gu6L+R44GP44Gu5aC05ZCIXG4gICAgICAgICAgICBjb25zdCBlZGdlID0gVXRpbHMuZmluZEVkZ2VBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy5lZGdlcyk7XG4gICAgICAgICAgICBlZGdlICYmICh0aGlzLmFjdGl2ZUVkZ2UgPSBlZGdlKTtcbiAgICAgICAgICAgIC8vIOmggueCueOBi+WItuW+oeeCueOBrui/keOBj+OBruWgtOWQiFxuICAgICAgICAgICAgY29uc3QgcG9pbnQgPSBVdGlscy5maW5kUG9pbnRBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy52ZXJ0aWNlcywgdGhpcy5lZGdlcyk7XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBwb2ludCA/IFwibW92ZVwiIDogXCJkZWZhdWx0XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3R3JhcGgoKTtcbiAgICB9XG4gICAgLy8g44Oe44Km44K544Ki44Km44OIXG4gICAgaGFuZGxlTW91c2VPdXQoZSkge1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy5oYW5kbGVNb3VzZVVwKGUpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjg4Djgqbjg7NcbiAgICBoYW5kbGVNb3VzZURvd24oZSkge1xuICAgICAgICAvLyDlt6bjgq/jg6rjg4Pjgq/ku6XlpJbjga/lh6bnkIbjgarjgZdcbiAgICAgICAgaWYgKGUuYnV0dG9uICE9PSBNb3VzZUJ1dHRvbkVudW0uTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW91c2UgPSB0aGlzLmdldE1vdXNlUG9zaXRpb24oZSk7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IFV0aWxzLmZpbmRWZXJ0ZXhBdCh0aGlzLm1vdXNlLngsIHRoaXMubW91c2UueSwgdGhpcy52ZXJ0aWNlcyk7XG4gICAgICAgIGNvbnN0IGVkZ2UgPSBVdGlscy5maW5kRWRnZUF0KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgY29uc3QgY29udHJvbCA9IFV0aWxzLmZpbmRDb250cm9sQXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMuZWRnZXMpO1xuICAgICAgICAvLyDliKTlrprjga7jgZ/jgoHkuIDmmYLpgIDpgb9cbiAgICAgICAgY29uc3QgdGVtcFNlbGVjdGVkVmVydGV4ID0gdGhpcy5zZWxlY3RlZFZlcnRleDtcbiAgICAgICAgLy8g6YG45oqe54q25oWL44Gu5Yid5pyf5YyWXG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdGVkKCk7XG4gICAgICAgIC8vIOmggueCueOBruWgtOWQiFxuICAgICAgICBpZiAodmVydGV4KSB7XG4gICAgICAgICAgICBpZiAodGVtcFNlbGVjdGVkVmVydGV4KSB7XG4gICAgICAgICAgICAgICAgLy8g6YG45oqe5riI44G/6aCC54K544Go44CB55Ww44Gq44KL6aCC54K544GM5Y+W5b6X44Gn44GN44Gf5aC05ZCIXG4gICAgICAgICAgICAgICAgaWYgKHRlbXBTZWxlY3RlZFZlcnRleCAhPT0gdmVydGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkRWRnZSh0ZW1wU2VsZWN0ZWRWZXJ0ZXgsIHZlcnRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6aCC54K544KS6YG45oqe5riI44G/44Gr44GZ44KLXG4gICAgICAgICAgICB2ZXJ0ZXguaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVmVydGV4ID0gdmVydGV4O1xuICAgICAgICAgICAgLy8g44Kr44O844K944Or44KS6YG45oqe55So44Gr5aSJ5pu0XG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImNyb3NzaGFpclwiO1xuICAgICAgICAgICAgLy8g44OJ44Op44OD44Kw6ZaL5aeLXG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nUG9pbnQgPSB2ZXJ0ZXg7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yi25b6h54K544Gu5aC05ZCIXG4gICAgICAgIGVsc2UgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgICAgIC8vIOODieODqeODg+OCsOmWi+Wni1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50ID0gY29udHJvbDtcbiAgICAgICAgfVxuICAgICAgICAvLyDovrrjga7loLTlkIhcbiAgICAgICAgZWxzZSBpZiAoZWRnZSkge1xuICAgICAgICAgICAgLy8g6L6644KS6YG45oqe5riI44G/44Gr44GZ44KLXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZSA9IGVkZ2U7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRWRnZS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7pgbjmip5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5sYXN0UG9zLnggPSBlLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLmxhc3RQb3MueSA9IGUuY2xpZW50WTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjgqLjg4Pjg5dcbiAgICBoYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZHJhZ2dpbmdQb2ludCBpbnN0YW5jZW9mIENvbnRyb2wpIHtcbiAgICAgICAgICAgIC8vIOODkOOCpuODs+ODh+OCo+ODs+OCsOODnOODg+OCr+OCueOBruWGjeeul+WHulxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDlj7Pjgq/jg6rjg4Pjgq9cbiAgICBoYW5kbGVDb250ZXh0TWVudShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgY29uc3QgdmVydGV4ID0gVXRpbHMuZmluZFZlcnRleEF0KHRoaXMubW91c2UueCwgdGhpcy5tb3VzZS55LCB0aGlzLnZlcnRpY2VzKTtcbiAgICAgICAgY29uc3QgZWRnZSA9IFV0aWxzLmZpbmRFZGdlQXQodGhpcy5tb3VzZS54LCB0aGlzLm1vdXNlLnksIHRoaXMuZWRnZXMpO1xuICAgICAgICAvLyDpgbjmip7nirbmhYvjga7liJ3mnJ/ljJZcbiAgICAgICAgdGhpcy5pbml0U2VsZWN0ZWQoKTtcbiAgICAgICAgLy8g5YmK6Zmk5Yem55CGXG4gICAgICAgIGlmICh2ZXJ0ZXgpIHtcbiAgICAgICAgICAgIC8vIOmggueCueOCkuWJiumZpFxuICAgICAgICAgICAgdGhpcy5kZWxldGVWZXJ0ZXgodmVydGV4KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChlZGdlKSB7XG4gICAgICAgICAgICAvLyDovrrjgpLliYrpmaRcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDjg57jgqbjgrnjg5vjgqTjg7zjg6tcbiAgICBoYW5kbGVXaGVlbChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IHRoaXMuZ2V0TW91c2VQb3NpdGlvbihlKTtcbiAgICAgICAgLy8g44K644O844Og44Os44OZ44Or44Gu5pu05pawXG4gICAgICAgIGlmIChlLmRlbHRhWSA8IDApIHtcbiAgICAgICAgICAgIC8vIOOCuuODvOODoOOCpOODs1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Wm9vbUluZGV4ID0gTWF0aC5taW4odGhpcy5jdXJyZW50Wm9vbUluZGV4ICsgMSwgdGhpcy56b29tTGV2ZWxzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g44K644O844Og44Ki44Km44OIXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSBNYXRoLm1heCh0aGlzLmN1cnJlbnRab29tSW5kZXggLSAxLCAwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDmlrDjgZfjgYTjgrnjgrHjg7zjg6vjgpLlj5blvpfjgZfjgIHjgrnjgrHjg7zjg6vjgYzlpInmm7TjgZXjgozjgZ/jgYvnorroqo1cbiAgICAgICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLnpvb21MZXZlbHNbdGhpcy5jdXJyZW50Wm9vbUluZGV4XTtcbiAgICAgICAgaWYgKG5ld1NjYWxlICE9PSB0aGlzLnNjYWxlKSB7XG4gICAgICAgICAgICAvLyDjg57jgqbjgrnkvY3nva7jgpLjgrrjg7zjg6DjgqTjg7PjgIHjgrrjg7zjg6DjgqLjgqbjg4jjgZnjgotcbiAgICAgICAgICAgIC8vIHNjYWxl44Gu44Kt44Oj44Oz44OQ44K544Gu44Oe44Km44K55L2N572u44Gu5Ymy5ZCI44Go44CBbmV3U2NhbGXjga7jgq3jg6Pjg7Pjg5Djgrnjga7jg57jgqbjgrnkvY3nva7jga7libLlkIjjgYzlkIzjgZjjgZ/jgoHkuIvoqJjjga7lvI/jgYzmiJDjgornq4vjgaRcbiAgICAgICAgICAgIC8vIChtb3VzZSArIG9yaWdpbiAvIHNjYWxlKSAvIChjYW52YXMgLyBzY2FsZSkgPSAobW91c2UgKyBuZXdPcmlnaW4gLyBuZXdTY2FsZSkgLyAoY2FudmFzIC8gbmV3U2NhbGUpXG4gICAgICAgICAgICAvLyDjgZPjgozjgpIgbmV3T3JpZ2luIOOBq+OBpOOBhOOBpuino+OBj+OBqOOAgeasoeOBrumAmuOCiuOBq+OBquOCi1xuICAgICAgICAgICAgdGhpcy5vcmlnaW4ueCA9IHRoaXMubW91c2UueCAqICh0aGlzLnNjYWxlIC0gbmV3U2NhbGUpICsgdGhpcy5vcmlnaW4ueDtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLm1vdXNlLnkgKiAodGhpcy5zY2FsZSAtIG5ld1NjYWxlKSArIHRoaXMub3JpZ2luLnk7XG4gICAgICAgICAgICB0aGlzLnNjYWxlID0gbmV3U2NhbGU7XG4gICAgICAgICAgICAvLyDnp7vli5XliLbpmZBcbiAgICAgICAgICAgIHRoaXMubGltaXRDYW52YXNQYW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5Yem55CG6Zai5pWwXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOODnuOCpuOCueS9jee9ruOCkuWPluW+l+OBmeOCi1xuICAgIGdldE1vdXNlUG9zaXRpb24oZSkge1xuICAgICAgICBjb25zdCByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHggPSAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gdGhpcy5vcmlnaW4ueCkgLyB0aGlzLnNjYWxlO1xuICAgICAgICBjb25zdCB5ID0gKGUuY2xpZW50WSAtIHJlY3QudG9wIC0gdGhpcy5vcmlnaW4ueSkgLyB0aGlzLnNjYWxlO1xuICAgICAgICByZXR1cm4geyB4LCB5IH07XG4gICAgfVxuICAgIC8vIOmBuOaKnueKtuaFi+OCkuWIneacn+WMluOBmeOCi1xuICAgIGluaXRTZWxlY3RlZCgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZlcnRleCAmJiAodGhpcy5zZWxlY3RlZFZlcnRleC5pc1NlbGVjdGVkID0gZmFsc2UpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmVydGV4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEVkZ2UgJiYgKHRoaXMuc2VsZWN0ZWRFZGdlLmlzU2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFZGdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuY3Vyc29yID0gXCJkZWZhdWx0XCI7XG4gICAgfVxuICAgIC8vIOmggueCueOCkui/veWKoOOBmeOCi1xuICAgIGFkZFZlcnRleCh4LCB5KSB7XG4gICAgICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgoeCwgeSk7XG4gICAgICAgIHRoaXMudmVydGljZXMucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzLCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICB9XG4gICAgLy8g6L6644KS6L+95Yqg44GZ44KLXG4gICAgYWRkRWRnZShmcm9tLCB0bykge1xuICAgICAgICAvLyDnlbDjgarjgovvvJLpoILngrnjgYvvvJ9cbiAgICAgICAgaWYgKGZyb20gJiYgdG8gJiYgZnJvbSAhPT0gdG8pIHtcbiAgICAgICAgICAgIC8vIOmHjeikh+i+uuOCkuWPluW+l1xuICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlRWRnZSA9IHRoaXMuZWRnZXMuZmluZCgoZWRnZSkgPT4gKGVkZ2UuZnJvbSA9PT0gZnJvbSAmJiBlZGdlLnRvID09PSB0bykgfHwgKGVkZ2UuZnJvbSA9PT0gdG8gJiYgZWRnZS50byA9PT0gZnJvbSkpO1xuICAgICAgICAgICAgLy8g6YeN6KSH6L6644Gv5YmK6ZmkXG4gICAgICAgICAgICBpZiAoZHVwbGljYXRlRWRnZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRWRnZShkdXBsaWNhdGVFZGdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaWsOOBl+OBhOi+uuOCkui/veWKoFxuICAgICAgICAgICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKGZyb20sIHRvKTtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlKTtcbiAgICAgICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzLCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgICAgIHJldHVybiBlZGdlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICAvLyDpoILngrnjgpLliYrpmaTjgZnjgotcbiAgICBkZWxldGVWZXJ0ZXgodmVydGV4KSB7XG4gICAgICAgIC8vIOmggueCueOCkuWJiumZpFxuICAgICAgICB0aGlzLnZlcnRpY2VzLnNwbGljZSh0aGlzLnZlcnRpY2VzLmluZGV4T2YodmVydGV4KSwgMSk7XG4gICAgICAgIC8vIOmggueCueOBq+aOpee2muOBleOCjOOBn+i+uuOCkuWJiumZpFxuICAgICAgICB2ZXJ0ZXguZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgZWRnZS5mcm9tLmRlbGV0ZUVkZ2UoZWRnZSk7XG4gICAgICAgICAgICBlZGdlLnRvLmRlbGV0ZUVkZ2UoZWRnZSk7XG4gICAgICAgICAgICAvLyDovrrjgqrjg5bjgrjjgqfjgq/jg4jphY3liJfjgYvjgonjgIHovrrjgpLliYrpmaRcbiAgICAgICAgICAgIHRoaXMuZWRnZXMgPSB0aGlzLmVkZ2VzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gZWRnZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzLCB0aGlzLmVkZ2VzKTtcbiAgICB9XG4gICAgLy8g6L6644KS5YmK6Zmk44GZ44KLXG4gICAgZGVsZXRlRWRnZShlZGdlKSB7XG4gICAgICAgIC8vIOi+uuOBq+aOpee2muOBl+OBpuOBhOOCi+mggueCueOBi+OCieOAgei+uuOCkuWJiumZpFxuICAgICAgICBlZGdlLmZyb20uZGVsZXRlRWRnZShlZGdlKTtcbiAgICAgICAgZWRnZS50by5kZWxldGVFZGdlKGVkZ2UpO1xuICAgICAgICAvLyDovrrjgqrjg5bjgrjjgqfjgq/jg4jphY3liJfjgYvjgonjgIHovrrjgpLliYrpmaRcbiAgICAgICAgdGhpcy5lZGdlcyA9IHRoaXMuZWRnZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBlZGdlKTtcbiAgICAgICAgLy8g5qyh5pWw6YWN5YiX44Gu5pu05pawXG4gICAgICAgIHRoaXMudXBkYXRlRGVncmVlU2VxdWVuY2UodGhpcy52ZXJ0aWNlcywgdGhpcy5lZGdlcyk7XG4gICAgfVxuICAgIC8vIOOCreODo+ODs+ODkOOCueOBruenu+WLleWItumZkFxuICAgIGxpbWl0Q2FudmFzUGFuKCkge1xuICAgICAgICBjb25zdCBtYXhYID0gdGhpcy5NQVhfQ0FOVkFTX1dJRFRIICogdGhpcy5zY2FsZSAtIHRoaXMuY2FudmFzLndpZHRoO1xuICAgICAgICBjb25zdCBtYXhZID0gdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAqIHRoaXMuc2NhbGUgLSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMub3JpZ2luLnggPSB0aGlzLm9yaWdpbi54ICsgbWF4WCA8IDAgPyAtbWF4WCA6IHRoaXMub3JpZ2luLng7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSB0aGlzLm9yaWdpbi55ICsgbWF4WSA8IDAgPyAtbWF4WSA6IHRoaXMub3JpZ2luLnk7XG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAwIDwgdGhpcy5vcmlnaW4ueCA/IDAgOiB0aGlzLm9yaWdpbi54O1xuICAgICAgICB0aGlzLm9yaWdpbi55ID0gMCA8IHRoaXMub3JpZ2luLnkgPyAwIDogdGhpcy5vcmlnaW4ueTtcbiAgICB9XG4gICAgLy8g44Oq44K144Kk44K6XG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC44O1xuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA5MDtcbiAgICAgICAgLy8g5Lit5b+D44KS5Yid5pyf5o+P55S75L2N572u44Gr44GZ44KLXG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAodGhpcy5NQVhfQ0FOVkFTX1dJRFRIIC0gdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLnNjYWxlKSAvIDI7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSAodGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAtIHRoaXMuY2FudmFzLmhlaWdodCAvIHRoaXMuc2NhbGUpIC8gMjtcbiAgICAgICAgLy8g5bqn5qiZ44KS44OU44Kv44K744Or44Gr5aSJ5o+b44GX44CB5YCk44KS44Oe44Kk44OK44K55aSJ5o+b44KS44GZ44KL77yIb3JpZ2lu44Gu5LuV5qeY77yJXG4gICAgICAgIHRoaXMub3JpZ2luLnggPSAtdGhpcy5vcmlnaW4ueCAqIHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMub3JpZ2luLnkgPSAtdGhpcy5vcmlnaW4ueSAqIHRoaXMuc2NhbGU7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vIOOCsOODqeODleOBruWIneacn+WMllxuICAgIGluaXRHcmFwaCgpIHtcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdGVkKCk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICB0aGlzLmN1cnJlbnRab29tSW5kZXggPSAxMDtcbiAgICAgICAgdGhpcy5kcmFnZ2luZ1BvaW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY3RpdmVFZGdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGFzdFBvcyA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICAvLyDmrKHmlbDphY3liJfjga7mm7TmlrBcbiAgICAgICAgdGhpcy51cGRhdGVEZWdyZWVTZXF1ZW5jZSh0aGlzLnZlcnRpY2VzLCB0aGlzLmVkZ2VzKTtcbiAgICAgICAgdGhpcy5yZXNpemVDYW52YXMoKTtcbiAgICB9XG4gICAgLy8g6aCC54K55oOF5aCx44Gu6KGo56S65YiH44KK5pu/44GIXG4gICAgZHJhd1ZlcnRleEluZm8oc2hvd0luZGV4LCBzaG93RGVncmVlKSB7XG4gICAgICAgIHRoaXMuc2hvd0luZGV4ID0gc2hvd0luZGV4O1xuICAgICAgICB0aGlzLnNob3dEZWdyZWUgPSBzaG93RGVncmVlO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyDovrrjgpLjgZnjgbnjgabnm7Tnt5rjgavjgZnjgotcbiAgICBzdHJhaWdodGVuRWRnZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGVkZ2Ugb2YgdGhpcy5lZGdlcykge1xuICAgICAgICAgICAgZWRnZS5zdHJhaWdodGVuRWRnZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMsIHRoaXMuZWRnZXMpO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5o+P55S75Yem55CGXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCsOODquODg+ODieOBruaPj+eUu1xuICAgIGRyYXdHcmlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuc2hvd0dyaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncmlkU2l6ZSA9IDEwMDtcbiAgICAgICAgY29uc3QgZ3JpZENvdW50WCA9IE1hdGguY2VpbCh0aGlzLk1BWF9DQU5WQVNfV0lEVEggLyBncmlkU2l6ZSk7XG4gICAgICAgIGNvbnN0IGdyaWRDb3VudFkgPSBNYXRoLmNlaWwodGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCAvIGdyaWRTaXplKTtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwiI2UwZTBlMFwiO1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICAvLyDjgrDjg6rjg4Pjg4nnt5rjgpLmj4/nlLtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gZ3JpZENvdW50WDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gaSAqIGdyaWRTaXplO1xuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgdGhpcy5NQVhfQ0FOVkFTX0hFSUdIVCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBncmlkQ291bnRZOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBqICogZ3JpZFNpemU7XG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB5KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLk1BWF9DQU5WQVNfV0lEVEgsIHkpO1xuICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpO1xuICAgIH1cbiAgICAvLyDjgrDjg6njg5Xmj4/nlLtcbiAgICBkcmF3R3JhcGgoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpO1xuICAgICAgICB0aGlzLmN0eC50cmFuc2xhdGUodGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSk7XG4gICAgICAgIHRoaXMuY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xuICAgICAgICAvLyDjgrDjg6rjg4Pjg4njga7mj4/nlLtcbiAgICAgICAgdGhpcy5kcmF3R3JpZCgpO1xuICAgICAgICAvLyDlipvmjIflkJHjg6Ljg7zjg4njgavjgojjgaPjgabovrrjga7mj4/nlLvjgpLliIfjgormm7/jgYjjgotcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VEaXJlY3RNb2RlKSB7XG4gICAgICAgICAgICAvLyDovrrjga7mj4/nlLtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZWRnZS5kcmF3KHRoaXMuY3R4KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDovrrjga7mj4/nlLtcbiAgICAgICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4gZWRnZS5kcmF3QmV6aWVyKHRoaXMuY3R4KSk7XG4gICAgICAgICAgICAvLyDliLblvqHngrnjga7mj4/nlLtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRWRnZSAmJiB0aGlzLmFjdGl2ZUVkZ2UuY29udHJvbC5kcmF3KHRoaXMuY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmdQb2ludCBpbnN0YW5jZW9mIENvbnRyb2wgJiYgdGhpcy5kcmFnZ2luZ1BvaW50LmRyYXcodGhpcy5jdHgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOmggueCueOBruaPj+eUu1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKHZlcnRleCwgaW5kZXgpID0+IHZlcnRleC5kcmF3KHRoaXMuY3R4LCB0aGlzLnNob3dJbmRleCwgaW5kZXgsIHRoaXMuc2hvd0RlZ3JlZSkpO1xuICAgICAgICB0aGlzLmN0eC5yZXN0b3JlKCk7XG4gICAgICAgIC8vIOeUu+mdouS4iuOBruaDheWgseabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZUluZm8oe1xuICAgICAgICAgICAgdmVydGljZXM6IHRoaXMudmVydGljZXMsXG4gICAgICAgICAgICBlZGdlczogdGhpcy5lZGdlcyxcbiAgICAgICAgICAgIGRlZ3JlZVNlcXVlbmNlOiB0aGlzLmRlZ3JlZVNlcXVlbmNlLFxuICAgICAgICB9KTtcbiAgICAgICAgLy8g5oOF5aCx6KGo56S677yI5YCN546H44Go5bqn5qiZ77yJXG4gICAgICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICAgICAgdGhpcy5jdHguc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIxNnB4IFNhbnMtc2VyaWZcIjtcbiAgICAgICAgY29uc3Qgem9vbVRleHQgPSBg5YCN546HOiAke3RoaXMuc2NhbGUudG9GaXhlZCgyKX14ICDluqfmqJk6ICgke3RoaXMubW91c2UueC50b0ZpeGVkKDApfSwgJHt0aGlzLm1vdXNlLnkudG9GaXhlZCgwKX0pYDtcbiAgICAgICAgY29uc3Qgem9vbVRleHRXaWR0aCA9IHRoaXMuY3R4Lm1lYXN1cmVUZXh0KHpvb21UZXh0KS53aWR0aDtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAzMCwgem9vbVRleHRXaWR0aCArIDIwLCAzMCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoem9vbVRleHQsIDEwLCB0aGlzLmNhbnZhcy5oZWlnaHQgLSAxMCk7XG4gICAgICAgIHRoaXMuY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgLy8g5Yqb5oyH5ZCR44Oi44O844OJ44GuT04vT0ZGXG4gICAgY2hhbmdlRm9yY2VEaXJlY3RNb2RlKGZvcmNlRGlyZWN0TW9kZSkge1xuICAgICAgICB0aGlzLmZvcmNlRGlyZWN0TW9kZSA9IGZvcmNlRGlyZWN0TW9kZTtcbiAgICAgICAgaWYgKHRoaXMuZm9yY2VEaXJlY3RNb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGb3JjZURpcmVjdGVkTGF5b3V0KCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaW50ZXJ2YWxJZCkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlipvmjIflkJHjg6zjgqTjgqLjgqbjg4jjga7mm7TmlrBcbiAgICB1cGRhdGVGb3JjZURpcmVjdGVkTGF5b3V0KCkge1xuICAgICAgICAvLyDmlqXliptcbiAgICAgICAgY29uc3QgcmVwdWxzaW9uQ29uc3RhbnQgPSAyMDA7XG4gICAgICAgIC8vIOW8leWKm1xuICAgICAgICBjb25zdCBhdHRyYWN0aW9uQ29uc3RhbnQgPSAyMDA7XG4gICAgICAgIGNvbnN0IG1heERpc3BsYWNlbWVudCA9IDUwO1xuICAgICAgICBjb25zdCBtaW5EaXN0YW5jZSA9IDEwO1xuICAgICAgICAvLyDliJ3mnJ/lpInkvY3jgpIw44Gn6Kit5a6aXG4gICAgICAgIGxldCBkaXNwbGFjZW1lbnRzID0gdGhpcy52ZXJ0aWNlcy5tYXAoKCkgPT4gKHsgeDogMCwgeTogMCB9KSk7XG4gICAgICAgIC8vIOaWpeWKm1xuICAgICAgICB0aGlzLnZlcnRpY2VzLmZvckVhY2goKGZyb20sIGkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMuZm9yRWFjaCgodG8sIGopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkeCA9IGZyb20ueCAtIHRvLng7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR5ID0gZnJvbS55IC0gdG8ueTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgcmVwdWxzaW9uQ29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gTWF0aC5tYXgoZGlzdGFuY2UsIG1pbkRpc3RhbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcmNlID0gcmVwdWxzaW9uQ29uc3RhbnQgLyBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbaV0ueCArPSAoZHggLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbaV0ueSArPSAoZHkgLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8g5byV5YqbXG4gICAgICAgIHRoaXMuZWRnZXMuZm9yRWFjaCgoZWRnZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJvbUluZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UuZnJvbSk7XG4gICAgICAgICAgICBjb25zdCB0b0luZGV4ID0gdGhpcy52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UudG8pO1xuICAgICAgICAgICAgY29uc3QgZHggPSBlZGdlLmZyb20ueCAtIGVkZ2UudG8ueDtcbiAgICAgICAgICAgIGNvbnN0IGR5ID0gZWRnZS5mcm9tLnkgLSBlZGdlLnRvLnk7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgICAgICAgICBjb25zdCBmb3JjZSA9IGRpc3RhbmNlIC8gYXR0cmFjdGlvbkNvbnN0YW50O1xuICAgICAgICAgICAgZGlzcGxhY2VtZW50c1tmcm9tSW5kZXhdLnggLT0gKGR4IC8gZGlzdGFuY2UpICogZm9yY2U7XG4gICAgICAgICAgICBkaXNwbGFjZW1lbnRzW2Zyb21JbmRleF0ueSAtPSAoZHkgLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbdG9JbmRleF0ueCArPSAoZHggLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgICAgIGRpc3BsYWNlbWVudHNbdG9JbmRleF0ueSArPSAoZHkgLyBkaXN0YW5jZSkgKiBmb3JjZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOenu+WLleW6p+aomeioreWumlxuICAgICAgICBkaXNwbGFjZW1lbnRzLmZvckVhY2goKGRpc3BsYWNlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjYWxhciA9IE1hdGguc3FydChkaXNwbGFjZW1lbnQueCAqIGRpc3BsYWNlbWVudC54ICsgZGlzcGxhY2VtZW50LnkgKiBkaXNwbGFjZW1lbnQueSk7XG4gICAgICAgICAgICBpZiAoc2NhbGFyID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbWl0ZWREaXNwWCA9IChkaXNwbGFjZW1lbnQueCAvIHNjYWxhcikgKiBNYXRoLm1pbihzY2FsYXIsIG1heERpc3BsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbGltaXRlZERpc3BZID0gKGRpc3BsYWNlbWVudC55IC8gc2NhbGFyKSAqIE1hdGgubWluKHNjYWxhciwgbWF4RGlzcGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzW2luZGV4XS54ICs9IE1hdGgucm91bmQobGltaXRlZERpc3BYKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzW2luZGV4XS55ICs9IE1hdGgucm91bmQobGltaXRlZERpc3BZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhd0dyYXBoKCk7XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjgqjjgq/jgrnjg53jg7zjg4jvvI/jgqTjg7Pjg53jg7zjg4jlh6bnkIZcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Kw44Op44OV44Gu54q25oWL44KSSlNPTuOBqOOBl+OBpuOCqOOCr+OCueODneODvOODiFxuICAgIGV4cG9ydFRvSnNvbigpIHtcbiAgICAgICAgY29uc3QgZXhwb3J0RGF0YSA9IHtcbiAgICAgICAgICAgIHZlcnRpY2VzOiB0aGlzLnZlcnRpY2VzLm1hcCgodmVydGV4LCBpbmRleCkgPT4gKHtcbiAgICAgICAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgICAgICAgeDogdmVydGV4LngsXG4gICAgICAgICAgICAgICAgeTogdmVydGV4LnksXG4gICAgICAgICAgICB9KSksXG4gICAgICAgICAgICBlZGdlczogdGhpcy5lZGdlcy5tYXAoKGVkZ2UpID0+ICh7XG4gICAgICAgICAgICAgICAgZnJvbTogdGhpcy52ZXJ0aWNlcy5pbmRleE9mKGVkZ2UuZnJvbSksXG4gICAgICAgICAgICAgICAgdG86IHRoaXMudmVydGljZXMuaW5kZXhPZihlZGdlLnRvKSxcbiAgICAgICAgICAgICAgICBjb250cm9sOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGVkZ2UuY29udHJvbC54LFxuICAgICAgICAgICAgICAgICAgICB5OiBlZGdlLmNvbnRyb2wueSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXhwb3J0RGF0YSk7XG4gICAgfVxuICAgIC8vIEpTT07jgYvjgonjgrDjg6njg5Xjga7nirbmhYvjgpLjgqTjg7Pjg53jg7zjg4hcbiAgICBpbXBvcnRGcm9tSnNvbihqc29uU3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGltcG9ydERhdGEgPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgICAgICB0aGlzLnZlcnRpY2VzID0gaW1wb3J0RGF0YS52ZXJ0aWNlcy5tYXAoKHZEYXRhKSA9PiBuZXcgVmVydGV4KHZEYXRhLngsIHZEYXRhLnkpKTtcbiAgICAgICAgdGhpcy5lZGdlcyA9IGltcG9ydERhdGEuZWRnZXMubWFwKChlRGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJvbVZlcnRleCA9IHRoaXMudmVydGljZXNbZURhdGEuZnJvbV07XG4gICAgICAgICAgICBjb25zdCB0b1ZlcnRleCA9IHRoaXMudmVydGljZXNbZURhdGEudG9dO1xuICAgICAgICAgICAgY29uc3QgZWRnZSA9IG5ldyBFZGdlKGZyb21WZXJ0ZXgsIHRvVmVydGV4KTtcbiAgICAgICAgICAgIGVkZ2UuY29udHJvbC54ID0gZURhdGEuY29udHJvbC54O1xuICAgICAgICAgICAgZWRnZS5jb250cm9sLnkgPSBlRGF0YS5jb250cm9sLnk7XG4gICAgICAgICAgICByZXR1cm4gZWRnZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgICAgICB0aGlzLnVwZGF0ZURlZ3JlZVNlcXVlbmNlKHRoaXMudmVydGljZXMsIHRoaXMuZWRnZXMpO1xuICAgICAgICB0aGlzLmRyYXdHcmFwaCgpO1xuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Kw44Op44OV55Sf5oiQXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNyZWF0ZUdyYXBoRnJvbU1hdHJpeCgpIHtcbiAgICAgICAgY29uc3QgYWRqYWNlbmN5TWF0cml4ID0gdGhpcy5kZWdyZWVTZXF1ZW5jZS5nZW5lcmF0ZUFkamFjZW5jeU1hdHJpeCgpO1xuICAgICAgICBpZiAoIWFkamFjZW5jeU1hdHJpeCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IGFkamFjZW5jeU1hdHJpeC5nZXRNYXRyaXgoKTtcbiAgICAgICAgaWYgKCFtYXRyaXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDjgq3jg6Pjg7Pjg5Djgrnjga7kuK3lv4PluqfmqJnjgpLlj5blvpdcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IHRoaXMuTUFYX0NBTlZBU19XSURUSCAvIDI7XG4gICAgICAgIGNvbnN0IGNlbnRlclkgPSB0aGlzLk1BWF9DQU5WQVNfSEVJR0hUIC8gMjtcbiAgICAgICAgLy8g5Yqb5oyH5ZCR44Os44Kk44Ki44Km44OI44KS6YGp55So44GX44Gm6aCC54K544KS6YWN572uXG4gICAgICAgIHRoaXMudmVydGljZXMgPSB0aGlzLmFwcGx5Rm9yY2VEaXJlY3RlZExheW91dChtYXRyaXgsIGNlbnRlclgsIGNlbnRlclkpO1xuICAgICAgICB0aGlzLmVkZ2VzID0gW107XG4gICAgICAgIC8vIOi+uuOBruS9nOaIkFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgbWF0cml4W2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdHJpeFtpXVtqXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFZGdlID0gbmV3IEVkZ2UodGhpcy52ZXJ0aWNlc1tpXSwgdGhpcy52ZXJ0aWNlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChuZXdFZGdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlc1tpXS5hZGRFZGdlKG5ld0VkZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzW2pdLmFkZEVkZ2UobmV3RWRnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOWKm+aMh+WQkeODrOOCpOOCouOCpuODiOmBqeeUqFxuICAgIGFwcGx5Rm9yY2VEaXJlY3RlZExheW91dChtYXRyaXgsIGNlbnRlclgsIGNlbnRlclkpIHtcbiAgICAgICAgY29uc3Qgbm9kZXMgPSBtYXRyaXgubWFwKChfLCBpKSA9PiAoeyBpbmRleDogaSB9KSk7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cml4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCBtYXRyaXhbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0cml4W2ldW2pdID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtzLnB1c2goeyBzb3VyY2U6IGksIHRhcmdldDogaiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yqb5oyH5ZCR44Ki44Or44K044Oq44K644Og44Gu6Kit5a6aXG4gICAgICAgIGxldCBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKG5vZGVzKTtcbiAgICAgICAgc2ltdWxhdGlvbi5mb3JjZShcImxpbmtcIiwgZDMuZm9yY2VMaW5rKGxpbmtzKS5kaXN0YW5jZSg1MCkpO1xuICAgICAgICBzaW11bGF0aW9uLmZvcmNlKFwiY2hhcmdlXCIsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCgtMTAwKSk7XG4gICAgICAgIHNpbXVsYXRpb24uZm9yY2UoXCJjZW50ZXJcIiwgZDMuZm9yY2VDZW50ZXIoY2VudGVyWCwgY2VudGVyWSkpO1xuICAgICAgICBzaW11bGF0aW9uLnN0b3AoKTtcbiAgICAgICAgLy8g44K344Of44Ol44Os44O844K344On44Oz44Gu5a6f6KGMXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspXG4gICAgICAgICAgICBzaW11bGF0aW9uLnRpY2soKTtcbiAgICAgICAgLy8g6aCC54K544Kq44OW44K444Kn44Kv44OI44Gu55Sf5oiQXG4gICAgICAgIHJldHVybiBub2Rlcy5tYXAoKG5vZGUpID0+IG5ldyBWZXJ0ZXgobm9kZS54LCBub2RlLnkpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1Bvc2l0aW9uXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDliLblvqHngrnjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBDb250cm9sIGV4dGVuZHMgUG9pbnQge1xuICAgIGNvbnN0cnVjdG9yKGZyb20sIHRvLCBlZGdlKSB7XG4gICAgICAgIHN1cGVyKDAsIDApO1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuZWRnZSA9IGVkZ2U7XG4gICAgICAgIC8vIOS4reeCueOBruW6p+aomeOBq+OBmeOCi1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgLy8g5Yid5pyf5YyWXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy54ID0gKHRoaXMuZnJvbS54ICsgdGhpcy50by54KSAvIDI7XG4gICAgICAgIHRoaXMueSA9ICh0aGlzLmZyb20ueSArIHRoaXMudG8ueSkgLyAyIC0gQ29udHJvbC5BREpVU1RfVklFVztcbiAgICB9XG4gICAgLy8g6KiI566X55So44Gu5Yi25b6h54K55bqn5qiZ77yI44Oa44K444Kn5puy57ea566X5Ye655So77yJXG4gICAgZ2V0Q2FsY1Bvc2l0aW9uKCkge1xuICAgICAgICBjb25zdCBjb250cm9sWCA9IHRoaXMueDtcbiAgICAgICAgY29uc3QgY29udHJvbFkgPSB0aGlzLnkgKyBDb250cm9sLkFESlVTVF9WSUVXO1xuICAgICAgICBjb25zdCBtaWRwb2ludFggPSAodGhpcy5mcm9tLnggKyB0aGlzLnRvLngpIC8gMjtcbiAgICAgICAgY29uc3QgbWlkcG9pbnRZID0gKHRoaXMuZnJvbS55ICsgdGhpcy50by55KSAvIDI7XG4gICAgICAgIGNvbnN0IHggPSBtaWRwb2ludFggKyBDb250cm9sLklNUEFDVF9GQUNUT1IgKiAoY29udHJvbFggLSBtaWRwb2ludFgpO1xuICAgICAgICBjb25zdCB5ID0gbWlkcG9pbnRZICsgQ29udHJvbC5JTVBBQ1RfRkFDVE9SICogKGNvbnRyb2xZIC0gbWlkcG9pbnRZKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbih4LCB5KTtcbiAgICB9XG4gICAgLy8g5o+P55S7XG4gICAgZHJhdyhjdHgpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGwoKTtcbiAgICB9XG59XG4vLyDliLblvqHngrnnp7vli5Xjga7lvbHpn7/lgI3njodcbkNvbnRyb2wuSU1QQUNUX0ZBQ1RPUiA9IDM7XG4vLyDliLblvqHngrnjga7ooajnpLrkvY3nva7oqr/mlbRcbkNvbnRyb2wuQURKVVNUX1ZJRVcgPSAyMDtcbiIsImltcG9ydCB7IENvbnRyb2wgfSBmcm9tIFwiLi9Db250cm9sXCI7XG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gXCIuL1Bvc2l0aW9uXCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDovrrjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBFZGdlIHtcbiAgICBjb25zdHJ1Y3Rvcihmcm9tLCB0bykge1xuICAgICAgICB0aGlzLmZyb20gPSBmcm9tO1xuICAgICAgICB0aGlzLnRvID0gdG87XG4gICAgICAgIHRoaXMuY29udHJvbCA9IG5ldyBDb250cm9sKGZyb20sIHRvLCB0aGlzKTtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIC8vIOmggueCueOBq+i+uuOCkui/veWKoOOBmeOCi1xuICAgICAgICB0aGlzLmZyb20uYWRkRWRnZSh0aGlzKTtcbiAgICAgICAgdGhpcy50by5hZGRFZGdlKHRoaXMpO1xuICAgIH1cbiAgICAvLyDovrrjgpLnm7Tnt5rjgavjgZnjgotcbiAgICBzdHJhaWdodGVuRWRnZSgpIHtcbiAgICAgICAgdGhpcy5jb250cm9sLmluaXQoKTtcbiAgICB9XG4gICAgLy8g56+E5Zuy5YaF44GLXG4gICAgaXNOZWFyKG1vdXNlWCwgbW91c2VZLCB0b2xlcmFuY2UgPSAxMCkge1xuICAgICAgICBjb25zdCBjYWxjUG9zaXRpb24gPSB0aGlzLmNvbnRyb2wuZ2V0Q2FsY1Bvc2l0aW9uKCk7XG4gICAgICAgIC8vIOODmeOCuOOCp+absue3muOCkuWIhuWJsuOBl+OBpui/keS8vFxuICAgICAgICBjb25zdCBzZWdtZW50ID0gMTA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VnbWVudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0MSA9IGkgLyBzZWdtZW50O1xuICAgICAgICAgICAgY29uc3QgdDIgPSAoaSArIDEpIC8gc2VnbWVudDtcbiAgICAgICAgICAgIGNvbnN0IHAxID0gdGhpcy5nZXRCZXppZXJQb3NpdGlvbih0MSwgY2FsY1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGNvbnN0IHAyID0gdGhpcy5nZXRCZXppZXJQb3NpdGlvbih0MiwgY2FsY1Bvc2l0aW9uKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50VG9TZWdtZW50RGlzdGFuY2UobW91c2VYLCBtb3VzZVksIHAxLngsIHAxLnksIHAyLngsIHAyLnkpIDwgdG9sZXJhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyDjg5rjgrjjgqfmm7Lnt5rjga7liIblibLngrlcbiAgICBnZXRCZXppZXJQb3NpdGlvbih0LCBjYWxjUG9zaXRpb24pIHtcbiAgICAgICAgY29uc3QgeCA9ICgxIC0gdCkgKiAoMSAtIHQpICogdGhpcy5mcm9tLnggKyAyICogKDEgLSB0KSAqIHQgKiBjYWxjUG9zaXRpb24ueCArIHQgKiB0ICogdGhpcy50by54O1xuICAgICAgICBjb25zdCB5ID0gKDEgLSB0KSAqICgxIC0gdCkgKiB0aGlzLmZyb20ueSArIDIgKiAoMSAtIHQpICogdCAqIGNhbGNQb3NpdGlvbi55ICsgdCAqIHQgKiB0aGlzLnRvLnk7XG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb24oeCwgeSk7XG4gICAgfVxuICAgIC8vIOeCueOBqOebtOe3muOBrui3nembolxuICAgIHBvaW50VG9TZWdtZW50RGlzdGFuY2UocHgsIHB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICBjb25zdCBkeCA9IHgyIC0geDE7XG4gICAgICAgIGNvbnN0IGR5ID0geTIgLSB5MTtcbiAgICAgICAgaWYgKGR4ID09PSAwICYmIGR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KChweCAtIHgxKSwgMikgKyBNYXRoLnBvdygocHkgLSB5MSksIDIpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ID0gKChweCAtIHgxKSAqIGR4ICsgKHB5IC0geTEpICogZHkpIC8gKGR4ICogZHggKyBkeSAqIGR5KTtcbiAgICAgICAgY29uc3QgdENsYW1wZWQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSk7XG4gICAgICAgIGNvbnN0IG5lYXJlc3RYID0geDEgKyB0Q2xhbXBlZCAqIGR4O1xuICAgICAgICBjb25zdCBuZWFyZXN0WSA9IHkxICsgdENsYW1wZWQgKiBkeTtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdygocHggLSBuZWFyZXN0WCksIDIpICsgTWF0aC5wb3coKHB5IC0gbmVhcmVzdFkpLCAyKSk7XG4gICAgfVxuICAgIC8vIOaPj+eUu1xuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLmZyb20ueCwgdGhpcy5mcm9tLnkpO1xuICAgICAgICBjdHgubGluZVRvKHRoaXMudG8ueCwgdGhpcy50by55KTtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5pc1NlbGVjdGVkID8gXCJyZWRcIiA6IFwicmdiYSgxMzUsIDIwNiwgMjUwLCAwLjg1KVwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICB0aGlzLmNvbnRyb2wuaW5pdCgpO1xuICAgIH1cbiAgICAvLyDmj4/nlLvvvIjjg5rjgrjjgqfmm7Lnt5rvvIlcbiAgICBkcmF3QmV6aWVyKGN0eCkge1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5mcm9tLngsIHRoaXMuZnJvbS55KTtcbiAgICAgICAgLy8g5LqM5qyh44OZ44K444Kn5puy57eaXG4gICAgICAgIGNvbnN0IGNhbGNQb3NpdGlvbiA9IHRoaXMuY29udHJvbC5nZXRDYWxjUG9zaXRpb24oKTtcbiAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oY2FsY1Bvc2l0aW9uLngsIGNhbGNQb3NpdGlvbi55LCB0aGlzLnRvLngsIHRoaXMudG8ueSk7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuaXNTZWxlY3RlZCA/IFwicmVkXCIgOiBcInJnYmEoMTM1LCAyMDYsIDI1MCwgMC44NSlcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sLmRyYXcoY3R4KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvc2l0aW9uIH0gZnJvbSBcIi4vUG9zaXRpb25cIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOeCueOCr+ODqeOCuVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGNsYXNzIFBvaW50IGV4dGVuZHMgUG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgc3VwZXIoeCwgeSk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gNDtcbiAgICB9XG4gICAgLy8g56+E5Zuy5YaF44GLXG4gICAgaXNOZWFyKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguaHlwb3QodGhpcy54IC0geCwgdGhpcy55IC0geSkgPCB0aGlzLnJhZGl1cyAqIDI7XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5L2N572u44Kv44Op44K5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICAgICAgdGhpcy54ID0gTWF0aC5yb3VuZCh4KTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5yb3VuZCh5KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL1BvaW50XCI7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDpoILngrnjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBWZXJ0ZXggZXh0ZW5kcyBQb2ludCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICBzdXBlcih4LCB5KTtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSAxMDtcbiAgICAgICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcbiAgICB9XG4gICAgLy8g6L6644KS6L+95YqgXG4gICAgYWRkRWRnZShlZGdlKSB7XG4gICAgICAgIC8vIOmHjeikh+i+uuOCkuWPluW+l1xuICAgICAgICBjb25zdCBkdXBsaWNhdGVFZGdlID0gdGhpcy5lZGdlcy5maW5kKChpdGVtKSA9PiAoaXRlbS5mcm9tID09PSBlZGdlLmZyb20gJiYgaXRlbS50byA9PT0gZWRnZS50bykgfHwgKGl0ZW0uZnJvbSA9PT0gZWRnZS50byAmJiBpdGVtLnRvID09PSBlZGdlLmZyb20pKTtcbiAgICAgICAgLy8g6YeN6KSH6L6644Gv5YmK6ZmkXG4gICAgICAgIGlmIChkdXBsaWNhdGVFZGdlKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUVkZ2UoZHVwbGljYXRlRWRnZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UpO1xuICAgIH1cbiAgICAvLyDovrrjgpLliYrpmaRcbiAgICBkZWxldGVFZGdlKGVkZ2UpIHtcbiAgICAgICAgdGhpcy5lZGdlcyA9IHRoaXMuZWRnZXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBlZGdlKTtcbiAgICB9XG4gICAgLy8g5qyh5pWw5Y+W5b6XXG4gICAgZ2V0RGVncmVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGdlcy5sZW5ndGg7XG4gICAgfVxuICAgIC8vIOaPj+eUu1xuICAgIGRyYXcoY3R4LCBzaG93SW5kZXgsIGluZGV4LCBzaG93RGVncmVlKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyNTUsIDEwMCwgMTUwLCAxKVwiO1xuICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmlzU2VsZWN0ZWQgPyBcInJlZFwiIDogXCJyZ2JhKDEzNSwgMjA2LCAyNTAsIDAuODUpXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIC8vIOmggueCueaDheWgseOBruihqOekulxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjdHguZm9udCA9IFwiMTJweCBTYW5zLXNlcmlmXCI7XG4gICAgICAgIGlmIChzaG93SW5kZXgpIHtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChgSW5kZXg6ICR7aW5kZXh9YCwgdGhpcy54ICsgdGhpcy5yYWRpdXMgKyA1LCB0aGlzLnkgLSB0aGlzLnJhZGl1cyAtIDUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93RGVncmVlKSB7XG4gICAgICAgICAgICBjdHguZmlsbFRleHQoYERlZ3JlZTogJHt0aGlzLmdldERlZ3JlZSgpfWAsIHRoaXMueCArIHRoaXMucmFkaXVzICsgNSwgdGhpcy55IC0gdGhpcy5yYWRpdXMgKyAxNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOWIl+aMmeS9k1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g44Oe44Km44K544Oc44K/44Oz44Gu5YiX5oyZ5L2TXG5leHBvcnQgdmFyIE1vdXNlQnV0dG9uRW51bTtcbihmdW5jdGlvbiAoTW91c2VCdXR0b25FbnVtKSB7XG4gICAgTW91c2VCdXR0b25FbnVtW01vdXNlQnV0dG9uRW51bVtcIkxlZnRcIl0gPSAwXSA9IFwiTGVmdFwiO1xuICAgIE1vdXNlQnV0dG9uRW51bVtNb3VzZUJ1dHRvbkVudW1bXCJNaWRkbGVcIl0gPSAxXSA9IFwiTWlkZGxlXCI7XG4gICAgTW91c2VCdXR0b25FbnVtW01vdXNlQnV0dG9uRW51bVtcIlJpZ2h0XCJdID0gMl0gPSBcIlJpZ2h0XCI7XG59KShNb3VzZUJ1dHRvbkVudW0gfHwgKE1vdXNlQnV0dG9uRW51bSA9IHt9KSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDjg6bjg7zjg4bjgqPjg6rjg4bjgqPjgq/jg6njgrlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmV4cG9ydCBjbGFzcyBVdGlscyB7XG4gICAgLy8g56K66KqN44OA44Kk44Ki44Ot44Kw44KS6KGo56S644GX44Gm44Ki44Kv44K344On44Oz44KS5a6f6KGMXG4gICAgc3RhdGljIGNvbmZpcm1BY3Rpb24obWVzc2FnZSwgYWN0aW9uKSB7XG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogXCLnorroqo1cIixcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uQ29sb3I6IFwiIzMwODVkNlwiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IFwiI2QzM1wiLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwi44Gv44GE44CB5a6f6KGM44GX44G+44GZXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIuOBhOOBhOOBiFwiLFxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIOS9jee9ruOBq+i/keOBhOeCueOCkuWPluW+l+OBmeOCi1xuICAgIHN0YXRpYyBmaW5kUG9pbnRBdCh4LCB5LCB2ZXJ0aWNlcywgZWRnZXMpIHtcbiAgICAgICAgLy8g6aCC54K544KS5qSc57SiXG4gICAgICAgIGxldCBwb2ludCA9IFV0aWxzLmZpbmRWZXJ0ZXhBdCh4LCB5LCB2ZXJ0aWNlcyk7XG4gICAgICAgIC8vIOimi+OBpOOBi+OCieOBquOBhOWgtOWQiFxuICAgICAgICBpZiAocG9pbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8g5Yi25b6h54K544KS5qSc57SiXG4gICAgICAgICAgICBwb2ludCA9IFV0aWxzLmZpbmRDb250cm9sQXQoeCwgeSwgZWRnZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb2ludDtcbiAgICB9XG4gICAgLy8g5L2N572u44Gr6L+R44GE6aCC54K544KS5Y+W5b6X44GZ44KLXG4gICAgc3RhdGljIGZpbmRWZXJ0ZXhBdCh4LCB5LCB2ZXJ0aWNlcykge1xuICAgICAgICBjb25zdCBmb3VuZFZlcnRleCA9IHZlcnRpY2VzLmZpbmQoKHZlcnRleCkgPT4gdmVydGV4LmlzTmVhcih4LCB5KSk7XG4gICAgICAgIHJldHVybiBmb3VuZFZlcnRleCA/IGZvdW5kVmVydGV4IDogbnVsbDtcbiAgICB9XG4gICAgLy8g5L2N572u44Gr6L+R44GE5Yi25b6h54K544KS5Y+W5b6X44GZ44KLXG4gICAgc3RhdGljIGZpbmRDb250cm9sQXQoeCwgeSwgZWRnZXMpIHtcbiAgICAgICAgY29uc3QgZm91bmRDb250cm9sID0gZWRnZXMuZmluZCgoZWRnZSkgPT4gZWRnZS5jb250cm9sLmlzTmVhcih4LCB5KSk7XG4gICAgICAgIHJldHVybiBmb3VuZENvbnRyb2wgPyBmb3VuZENvbnRyb2wuY29udHJvbCA6IG51bGw7XG4gICAgfVxuICAgIC8vIOS9jee9ruOBq+i/keOBhOi+uuOCkuWPluW+l+OBmeOCi1xuICAgIHN0YXRpYyBmaW5kRWRnZUF0KHgsIHksIGVkZ2VzKSB7XG4gICAgICAgIGNvbnN0IGZvdW5kRWRnZSA9IGVkZ2VzLmZpbmQoKGVkZ2UpID0+IGVkZ2UuaXNOZWFyKHgsIHkpKTtcbiAgICAgICAgcmV0dXJuIGZvdW5kRWRnZSA/IGZvdW5kRWRnZSA6IG51bGw7XG4gICAgfVxufVxuIiwidmFyIG5vb3AgPSB7dmFsdWU6ICgpID0+IHt9fTtcblxuZnVuY3Rpb24gZGlzcGF0Y2goKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gYXJndW1lbnRzLmxlbmd0aCwgXyA9IHt9LCB0OyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKCEodCA9IGFyZ3VtZW50c1tpXSArIFwiXCIpIHx8ICh0IGluIF8pIHx8IC9bXFxzLl0vLnRlc3QodCkpIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgdHlwZTogXCIgKyB0KTtcbiAgICBfW3RdID0gW107XG4gIH1cbiAgcmV0dXJuIG5ldyBEaXNwYXRjaChfKTtcbn1cblxuZnVuY3Rpb24gRGlzcGF0Y2goXykge1xuICB0aGlzLl8gPSBfO1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMsIHR5cGVzKSB7XG4gIHJldHVybiB0eXBlbmFtZXMudHJpbSgpLnNwbGl0KC9efFxccysvKS5tYXAoZnVuY3Rpb24odCkge1xuICAgIHZhciBuYW1lID0gXCJcIiwgaSA9IHQuaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKGkgPj0gMCkgbmFtZSA9IHQuc2xpY2UoaSArIDEpLCB0ID0gdC5zbGljZSgwLCBpKTtcbiAgICBpZiAodCAmJiAhdHlwZXMuaGFzT3duUHJvcGVydHkodCkpIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0KTtcbiAgICByZXR1cm4ge3R5cGU6IHQsIG5hbWU6IG5hbWV9O1xuICB9KTtcbn1cblxuRGlzcGF0Y2gucHJvdG90eXBlID0gZGlzcGF0Y2gucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogRGlzcGF0Y2gsXG4gIG9uOiBmdW5jdGlvbih0eXBlbmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgXyA9IHRoaXMuXyxcbiAgICAgICAgVCA9IHBhcnNlVHlwZW5hbWVzKHR5cGVuYW1lICsgXCJcIiwgXyksXG4gICAgICAgIHQsXG4gICAgICAgIGkgPSAtMSxcbiAgICAgICAgbiA9IFQubGVuZ3RoO1xuXG4gICAgLy8gSWYgbm8gY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmV0dXJuIHRoZSBjYWxsYmFjayBvZiB0aGUgZ2l2ZW4gdHlwZSBhbmQgbmFtZS5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHdoaWxlICgrK2kgPCBuKSBpZiAoKHQgPSAodHlwZW5hbWUgPSBUW2ldKS50eXBlKSAmJiAodCA9IGdldChfW3RdLCB0eXBlbmFtZS5uYW1lKSkpIHJldHVybiB0O1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGEgdHlwZSB3YXMgc3BlY2lmaWVkLCBzZXQgdGhlIGNhbGxiYWNrIGZvciB0aGUgZ2l2ZW4gdHlwZSBhbmQgbmFtZS5cbiAgICAvLyBPdGhlcndpc2UsIGlmIGEgbnVsbCBjYWxsYmFjayB3YXMgc3BlY2lmaWVkLCByZW1vdmUgY2FsbGJhY2tzIG9mIHRoZSBnaXZlbiBuYW1lLlxuICAgIGlmIChjYWxsYmFjayAhPSBudWxsICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGNhbGxiYWNrOiBcIiArIGNhbGxiYWNrKTtcbiAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgaWYgKHQgPSAodHlwZW5hbWUgPSBUW2ldKS50eXBlKSBfW3RdID0gc2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIGVsc2UgaWYgKGNhbGxiYWNrID09IG51bGwpIGZvciAodCBpbiBfKSBfW3RdID0gc2V0KF9bdF0sIHR5cGVuYW1lLm5hbWUsIG51bGwpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuICBjb3B5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29weSA9IHt9LCBfID0gdGhpcy5fO1xuICAgIGZvciAodmFyIHQgaW4gXykgY29weVt0XSA9IF9bdF0uc2xpY2UoKTtcbiAgICByZXR1cm4gbmV3IERpc3BhdGNoKGNvcHkpO1xuICB9LFxuICBjYWxsOiBmdW5jdGlvbih0eXBlLCB0aGF0KSB7XG4gICAgaWYgKChuID0gYXJndW1lbnRzLmxlbmd0aCAtIDIpID4gMCkgZm9yICh2YXIgYXJncyA9IG5ldyBBcnJheShuKSwgaSA9IDAsIG4sIHQ7IGkgPCBuOyArK2kpIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIGlmICghdGhpcy5fLmhhc093blByb3BlcnR5KHR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdHlwZSk7XG4gICAgZm9yICh0ID0gdGhpcy5fW3R5cGVdLCBpID0gMCwgbiA9IHQubGVuZ3RoOyBpIDwgbjsgKytpKSB0W2ldLnZhbHVlLmFwcGx5KHRoYXQsIGFyZ3MpO1xuICB9LFxuICBhcHBseTogZnVuY3Rpb24odHlwZSwgdGhhdCwgYXJncykge1xuICAgIGlmICghdGhpcy5fLmhhc093blByb3BlcnR5KHR5cGUpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdHlwZSk7XG4gICAgZm9yICh2YXIgdCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0KHR5cGUsIG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0eXBlLmxlbmd0aCwgYzsgaSA8IG47ICsraSkge1xuICAgIGlmICgoYyA9IHR5cGVbaV0pLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHJldHVybiBjLnZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXQodHlwZSwgbmFtZSwgY2FsbGJhY2spIHtcbiAgZm9yICh2YXIgaSA9IDAsIG4gPSB0eXBlLmxlbmd0aDsgaSA8IG47ICsraSkge1xuICAgIGlmICh0eXBlW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHR5cGVbaV0gPSBub29wLCB0eXBlID0gdHlwZS5zbGljZSgwLCBpKS5jb25jYXQodHlwZS5zbGljZShpICsgMSkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGlmIChjYWxsYmFjayAhPSBudWxsKSB0eXBlLnB1c2goe25hbWU6IG5hbWUsIHZhbHVlOiBjYWxsYmFja30pO1xuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGF0Y2g7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIHZhciBub2Rlcywgc3RyZW5ndGggPSAxO1xuXG4gIGlmICh4ID09IG51bGwpIHggPSAwO1xuICBpZiAoeSA9PSBudWxsKSB5ID0gMDtcblxuICBmdW5jdGlvbiBmb3JjZSgpIHtcbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbm9kZSxcbiAgICAgICAgc3ggPSAwLFxuICAgICAgICBzeSA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBub2RlID0gbm9kZXNbaV0sIHN4ICs9IG5vZGUueCwgc3kgKz0gbm9kZS55O1xuICAgIH1cblxuICAgIGZvciAoc3ggPSAoc3ggLyBuIC0geCkgKiBzdHJlbmd0aCwgc3kgPSAoc3kgLyBuIC0geSkgKiBzdHJlbmd0aCwgaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS54IC09IHN4LCBub2RlLnkgLT0gc3k7XG4gICAgfVxuICB9XG5cbiAgZm9yY2UuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICBub2RlcyA9IF87XG4gIH07XG5cbiAgZm9yY2UueCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh4ID0gK18sIGZvcmNlKSA6IHg7XG4gIH07XG5cbiAgZm9yY2UueSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh5ID0gK18sIGZvcmNlKSA6IHk7XG4gIH07XG5cbiAgZm9yY2Uuc3RyZW5ndGggPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3RyZW5ndGggPSArXywgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgcmV0dXJuIGZvcmNlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHg7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihyYW5kb20pIHtcbiAgcmV0dXJuIChyYW5kb20oKSAtIDAuNSkgKiAxZS02O1xufVxuIiwiLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3IjUGFyYW1ldGVyc19pbl9jb21tb25fdXNlXG5jb25zdCBhID0gMTY2NDUyNTtcbmNvbnN0IGMgPSAxMDEzOTA0MjIzO1xuY29uc3QgbSA9IDQyOTQ5NjcyOTY7IC8vIDJeMzJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIGxldCBzID0gMTtcbiAgcmV0dXJuICgpID0+IChzID0gKGEgKiBzICsgYykgJSBtKSAvIG07XG59XG4iLCJpbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBqaWdnbGUgZnJvbSBcIi4vamlnZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGluZGV4KGQpIHtcbiAgcmV0dXJuIGQuaW5kZXg7XG59XG5cbmZ1bmN0aW9uIGZpbmQobm9kZUJ5SWQsIG5vZGVJZCkge1xuICB2YXIgbm9kZSA9IG5vZGVCeUlkLmdldChub2RlSWQpO1xuICBpZiAoIW5vZGUpIHRocm93IG5ldyBFcnJvcihcIm5vZGUgbm90IGZvdW5kOiBcIiArIG5vZGVJZCk7XG4gIHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihsaW5rcykge1xuICB2YXIgaWQgPSBpbmRleCxcbiAgICAgIHN0cmVuZ3RoID0gZGVmYXVsdFN0cmVuZ3RoLFxuICAgICAgc3RyZW5ndGhzLFxuICAgICAgZGlzdGFuY2UgPSBjb25zdGFudCgzMCksXG4gICAgICBkaXN0YW5jZXMsXG4gICAgICBub2RlcyxcbiAgICAgIGNvdW50LFxuICAgICAgYmlhcyxcbiAgICAgIHJhbmRvbSxcbiAgICAgIGl0ZXJhdGlvbnMgPSAxO1xuXG4gIGlmIChsaW5rcyA9PSBudWxsKSBsaW5rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGRlZmF1bHRTdHJlbmd0aChsaW5rKSB7XG4gICAgcmV0dXJuIDEgLyBNYXRoLm1pbihjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0sIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JjZShhbHBoYSkge1xuICAgIGZvciAodmFyIGsgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGluaywgc291cmNlLCB0YXJnZXQsIHgsIHksIGwsIGI7IGkgPCBuOyArK2kpIHtcbiAgICAgICAgbGluayA9IGxpbmtzW2ldLCBzb3VyY2UgPSBsaW5rLnNvdXJjZSwgdGFyZ2V0ID0gbGluay50YXJnZXQ7XG4gICAgICAgIHggPSB0YXJnZXQueCArIHRhcmdldC52eCAtIHNvdXJjZS54IC0gc291cmNlLnZ4IHx8IGppZ2dsZShyYW5kb20pO1xuICAgICAgICB5ID0gdGFyZ2V0LnkgKyB0YXJnZXQudnkgLSBzb3VyY2UueSAtIHNvdXJjZS52eSB8fCBqaWdnbGUocmFuZG9tKTtcbiAgICAgICAgbCA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgbCA9IChsIC0gZGlzdGFuY2VzW2ldKSAvIGwgKiBhbHBoYSAqIHN0cmVuZ3Roc1tpXTtcbiAgICAgICAgeCAqPSBsLCB5ICo9IGw7XG4gICAgICAgIHRhcmdldC52eCAtPSB4ICogKGIgPSBiaWFzW2ldKTtcbiAgICAgICAgdGFyZ2V0LnZ5IC09IHkgKiBiO1xuICAgICAgICBzb3VyY2UudnggKz0geCAqIChiID0gMSAtIGIpO1xuICAgICAgICBzb3VyY2UudnkgKz0geSAqIGI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm47XG5cbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IG5vZGVzLmxlbmd0aCxcbiAgICAgICAgbSA9IGxpbmtzLmxlbmd0aCxcbiAgICAgICAgbm9kZUJ5SWQgPSBuZXcgTWFwKG5vZGVzLm1hcCgoZCwgaSkgPT4gW2lkKGQsIGksIG5vZGVzKSwgZF0pKSxcbiAgICAgICAgbGluaztcblxuICAgIGZvciAoaSA9IDAsIGNvdW50ID0gbmV3IEFycmF5KG4pOyBpIDwgbTsgKytpKSB7XG4gICAgICBsaW5rID0gbGlua3NbaV0sIGxpbmsuaW5kZXggPSBpO1xuICAgICAgaWYgKHR5cGVvZiBsaW5rLnNvdXJjZSAhPT0gXCJvYmplY3RcIikgbGluay5zb3VyY2UgPSBmaW5kKG5vZGVCeUlkLCBsaW5rLnNvdXJjZSk7XG4gICAgICBpZiAodHlwZW9mIGxpbmsudGFyZ2V0ICE9PSBcIm9iamVjdFwiKSBsaW5rLnRhcmdldCA9IGZpbmQobm9kZUJ5SWQsIGxpbmsudGFyZ2V0KTtcbiAgICAgIGNvdW50W2xpbmsuc291cmNlLmluZGV4XSA9IChjb3VudFtsaW5rLnNvdXJjZS5pbmRleF0gfHwgMCkgKyAxO1xuICAgICAgY291bnRbbGluay50YXJnZXQuaW5kZXhdID0gKGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSB8fCAwKSArIDE7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMCwgYmlhcyA9IG5ldyBBcnJheShtKTsgaSA8IG07ICsraSkge1xuICAgICAgbGluayA9IGxpbmtzW2ldLCBiaWFzW2ldID0gY291bnRbbGluay5zb3VyY2UuaW5kZXhdIC8gKGNvdW50W2xpbmsuc291cmNlLmluZGV4XSArIGNvdW50W2xpbmsudGFyZ2V0LmluZGV4XSk7XG4gICAgfVxuXG4gICAgc3RyZW5ndGhzID0gbmV3IEFycmF5KG0pLCBpbml0aWFsaXplU3RyZW5ndGgoKTtcbiAgICBkaXN0YW5jZXMgPSBuZXcgQXJyYXkobSksIGluaXRpYWxpemVEaXN0YW5jZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZVN0cmVuZ3RoKCkge1xuICAgIGlmICghbm9kZXMpIHJldHVybjtcblxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gbGlua3MubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICBzdHJlbmd0aHNbaV0gPSArc3RyZW5ndGgobGlua3NbaV0sIGksIGxpbmtzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplRGlzdGFuY2UoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBsaW5rcy5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICAgIGRpc3RhbmNlc1tpXSA9ICtkaXN0YW5jZShsaW5rc1tpXSwgaSwgbGlua3MpO1xuICAgIH1cbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5saW5rcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChsaW5rcyA9IF8sIGluaXRpYWxpemUoKSwgZm9yY2UpIDogbGlua3M7XG4gIH07XG5cbiAgZm9yY2UuaWQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaWQgPSBfLCBmb3JjZSkgOiBpZDtcbiAgfTtcblxuICBmb3JjZS5pdGVyYXRpb25zID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGl0ZXJhdGlvbnMgPSArXywgZm9yY2UpIDogaXRlcmF0aW9ucztcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplU3RyZW5ndGgoKSwgZm9yY2UpIDogc3RyZW5ndGg7XG4gIH07XG5cbiAgZm9yY2UuZGlzdGFuY2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZGlzdGFuY2UgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCtfKSwgaW5pdGlhbGl6ZURpc3RhbmNlKCksIGZvcmNlKSA6IGRpc3RhbmNlO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsImltcG9ydCB7cXVhZHRyZWV9IGZyb20gXCJkMy1xdWFkdHJlZVwiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgamlnZ2xlIGZyb20gXCIuL2ppZ2dsZS5qc1wiO1xuaW1wb3J0IHt4LCB5fSBmcm9tIFwiLi9zaW11bGF0aW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgbm9kZXMsXG4gICAgICBub2RlLFxuICAgICAgcmFuZG9tLFxuICAgICAgYWxwaGEsXG4gICAgICBzdHJlbmd0aCA9IGNvbnN0YW50KC0zMCksXG4gICAgICBzdHJlbmd0aHMsXG4gICAgICBkaXN0YW5jZU1pbjIgPSAxLFxuICAgICAgZGlzdGFuY2VNYXgyID0gSW5maW5pdHksXG4gICAgICB0aGV0YTIgPSAwLjgxO1xuXG4gIGZ1bmN0aW9uIGZvcmNlKF8pIHtcbiAgICB2YXIgaSwgbiA9IG5vZGVzLmxlbmd0aCwgdHJlZSA9IHF1YWR0cmVlKG5vZGVzLCB4LCB5KS52aXNpdEFmdGVyKGFjY3VtdWxhdGUpO1xuICAgIGZvciAoYWxwaGEgPSBfLCBpID0gMDsgaSA8IG47ICsraSkgbm9kZSA9IG5vZGVzW2ldLCB0cmVlLnZpc2l0KGFwcGx5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgaWYgKCFub2RlcykgcmV0dXJuO1xuICAgIHZhciBpLCBuID0gbm9kZXMubGVuZ3RoLCBub2RlO1xuICAgIHN0cmVuZ3RocyA9IG5ldyBBcnJheShuKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSBub2RlID0gbm9kZXNbaV0sIHN0cmVuZ3Roc1tub2RlLmluZGV4XSA9ICtzdHJlbmd0aChub2RlLCBpLCBub2Rlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBhY2N1bXVsYXRlKHF1YWQpIHtcbiAgICB2YXIgc3RyZW5ndGggPSAwLCBxLCBjLCB3ZWlnaHQgPSAwLCB4LCB5LCBpO1xuXG4gICAgLy8gRm9yIGludGVybmFsIG5vZGVzLCBhY2N1bXVsYXRlIGZvcmNlcyBmcm9tIGNoaWxkIHF1YWRyYW50cy5cbiAgICBpZiAocXVhZC5sZW5ndGgpIHtcbiAgICAgIGZvciAoeCA9IHkgPSBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgICBpZiAoKHEgPSBxdWFkW2ldKSAmJiAoYyA9IE1hdGguYWJzKHEudmFsdWUpKSkge1xuICAgICAgICAgIHN0cmVuZ3RoICs9IHEudmFsdWUsIHdlaWdodCArPSBjLCB4ICs9IGMgKiBxLngsIHkgKz0gYyAqIHEueTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcXVhZC54ID0geCAvIHdlaWdodDtcbiAgICAgIHF1YWQueSA9IHkgLyB3ZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gRm9yIGxlYWYgbm9kZXMsIGFjY3VtdWxhdGUgZm9yY2VzIGZyb20gY29pbmNpZGVudCBxdWFkcmFudHMuXG4gICAgZWxzZSB7XG4gICAgICBxID0gcXVhZDtcbiAgICAgIHEueCA9IHEuZGF0YS54O1xuICAgICAgcS55ID0gcS5kYXRhLnk7XG4gICAgICBkbyBzdHJlbmd0aCArPSBzdHJlbmd0aHNbcS5kYXRhLmluZGV4XTtcbiAgICAgIHdoaWxlIChxID0gcS5uZXh0KTtcbiAgICB9XG5cbiAgICBxdWFkLnZhbHVlID0gc3RyZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseShxdWFkLCB4MSwgXywgeDIpIHtcbiAgICBpZiAoIXF1YWQudmFsdWUpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIHggPSBxdWFkLnggLSBub2RlLngsXG4gICAgICAgIHkgPSBxdWFkLnkgLSBub2RlLnksXG4gICAgICAgIHcgPSB4MiAtIHgxLFxuICAgICAgICBsID0geCAqIHggKyB5ICogeTtcblxuICAgIC8vIEFwcGx5IHRoZSBCYXJuZXMtSHV0IGFwcHJveGltYXRpb24gaWYgcG9zc2libGUuXG4gICAgLy8gTGltaXQgZm9yY2VzIGZvciB2ZXJ5IGNsb3NlIG5vZGVzOyByYW5kb21pemUgZGlyZWN0aW9uIGlmIGNvaW5jaWRlbnQuXG4gICAgaWYgKHcgKiB3IC8gdGhldGEyIDwgbCkge1xuICAgICAgaWYgKGwgPCBkaXN0YW5jZU1heDIpIHtcbiAgICAgICAgaWYgKHggPT09IDApIHggPSBqaWdnbGUocmFuZG9tKSwgbCArPSB4ICogeDtcbiAgICAgICAgaWYgKHkgPT09IDApIHkgPSBqaWdnbGUocmFuZG9tKSwgbCArPSB5ICogeTtcbiAgICAgICAgaWYgKGwgPCBkaXN0YW5jZU1pbjIpIGwgPSBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yICogbCk7XG4gICAgICAgIG5vZGUudnggKz0geCAqIHF1YWQudmFsdWUgKiBhbHBoYSAvIGw7XG4gICAgICAgIG5vZGUudnkgKz0geSAqIHF1YWQudmFsdWUgKiBhbHBoYSAvIGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UsIHByb2Nlc3MgcG9pbnRzIGRpcmVjdGx5LlxuICAgIGVsc2UgaWYgKHF1YWQubGVuZ3RoIHx8IGwgPj0gZGlzdGFuY2VNYXgyKSByZXR1cm47XG5cbiAgICAvLyBMaW1pdCBmb3JjZXMgZm9yIHZlcnkgY2xvc2Ugbm9kZXM7IHJhbmRvbWl6ZSBkaXJlY3Rpb24gaWYgY29pbmNpZGVudC5cbiAgICBpZiAocXVhZC5kYXRhICE9PSBub2RlIHx8IHF1YWQubmV4dCkge1xuICAgICAgaWYgKHggPT09IDApIHggPSBqaWdnbGUocmFuZG9tKSwgbCArPSB4ICogeDtcbiAgICAgIGlmICh5ID09PSAwKSB5ID0gamlnZ2xlKHJhbmRvbSksIGwgKz0geSAqIHk7XG4gICAgICBpZiAobCA8IGRpc3RhbmNlTWluMikgbCA9IE1hdGguc3FydChkaXN0YW5jZU1pbjIgKiBsKTtcbiAgICB9XG5cbiAgICBkbyBpZiAocXVhZC5kYXRhICE9PSBub2RlKSB7XG4gICAgICB3ID0gc3RyZW5ndGhzW3F1YWQuZGF0YS5pbmRleF0gKiBhbHBoYSAvIGw7XG4gICAgICBub2RlLnZ4ICs9IHggKiB3O1xuICAgICAgbm9kZS52eSArPSB5ICogdztcbiAgICB9IHdoaWxlIChxdWFkID0gcXVhZC5uZXh0KTtcbiAgfVxuXG4gIGZvcmNlLmluaXRpYWxpemUgPSBmdW5jdGlvbihfbm9kZXMsIF9yYW5kb20pIHtcbiAgICBub2RlcyA9IF9ub2RlcztcbiAgICByYW5kb20gPSBfcmFuZG9tO1xuICAgIGluaXRpYWxpemUoKTtcbiAgfTtcblxuICBmb3JjZS5zdHJlbmd0aCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChzdHJlbmd0aCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoK18pLCBpbml0aWFsaXplKCksIGZvcmNlKSA6IHN0cmVuZ3RoO1xuICB9O1xuXG4gIGZvcmNlLmRpc3RhbmNlTWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRpc3RhbmNlTWluMiA9IF8gKiBfLCBmb3JjZSkgOiBNYXRoLnNxcnQoZGlzdGFuY2VNaW4yKTtcbiAgfTtcblxuICBmb3JjZS5kaXN0YW5jZU1heCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkaXN0YW5jZU1heDIgPSBfICogXywgZm9yY2UpIDogTWF0aC5zcXJ0KGRpc3RhbmNlTWF4Mik7XG4gIH07XG5cbiAgZm9yY2UudGhldGEgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGhldGEyID0gXyAqIF8sIGZvcmNlKSA6IE1hdGguc3FydCh0aGV0YTIpO1xuICB9O1xuXG4gIHJldHVybiBmb3JjZTtcbn1cbiIsImltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCJkMy1kaXNwYXRjaFwiO1xuaW1wb3J0IHt0aW1lcn0gZnJvbSBcImQzLXRpbWVyXCI7XG5pbXBvcnQgbGNnIGZyb20gXCIuL2xjZy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24geChkKSB7XG4gIHJldHVybiBkLng7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5KGQpIHtcbiAgcmV0dXJuIGQueTtcbn1cblxudmFyIGluaXRpYWxSYWRpdXMgPSAxMCxcbiAgICBpbml0aWFsQW5nbGUgPSBNYXRoLlBJICogKDMgLSBNYXRoLnNxcnQoNSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihub2Rlcykge1xuICB2YXIgc2ltdWxhdGlvbixcbiAgICAgIGFscGhhID0gMSxcbiAgICAgIGFscGhhTWluID0gMC4wMDEsXG4gICAgICBhbHBoYURlY2F5ID0gMSAtIE1hdGgucG93KGFscGhhTWluLCAxIC8gMzAwKSxcbiAgICAgIGFscGhhVGFyZ2V0ID0gMCxcbiAgICAgIHZlbG9jaXR5RGVjYXkgPSAwLjYsXG4gICAgICBmb3JjZXMgPSBuZXcgTWFwKCksXG4gICAgICBzdGVwcGVyID0gdGltZXIoc3RlcCksXG4gICAgICBldmVudCA9IGRpc3BhdGNoKFwidGlja1wiLCBcImVuZFwiKSxcbiAgICAgIHJhbmRvbSA9IGxjZygpO1xuXG4gIGlmIChub2RlcyA9PSBudWxsKSBub2RlcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIHN0ZXAoKSB7XG4gICAgdGljaygpO1xuICAgIGV2ZW50LmNhbGwoXCJ0aWNrXCIsIHNpbXVsYXRpb24pO1xuICAgIGlmIChhbHBoYSA8IGFscGhhTWluKSB7XG4gICAgICBzdGVwcGVyLnN0b3AoKTtcbiAgICAgIGV2ZW50LmNhbGwoXCJlbmRcIiwgc2ltdWxhdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGljayhpdGVyYXRpb25zKSB7XG4gICAgdmFyIGksIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7XG5cbiAgICBpZiAoaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkKSBpdGVyYXRpb25zID0gMTtcblxuICAgIGZvciAodmFyIGsgPSAwOyBrIDwgaXRlcmF0aW9uczsgKytrKSB7XG4gICAgICBhbHBoYSArPSAoYWxwaGFUYXJnZXQgLSBhbHBoYSkgKiBhbHBoYURlY2F5O1xuXG4gICAgICBmb3JjZXMuZm9yRWFjaChmdW5jdGlvbihmb3JjZSkge1xuICAgICAgICBmb3JjZShhbHBoYSk7XG4gICAgICB9KTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChub2RlLmZ4ID09IG51bGwpIG5vZGUueCArPSBub2RlLnZ4ICo9IHZlbG9jaXR5RGVjYXk7XG4gICAgICAgIGVsc2Ugbm9kZS54ID0gbm9kZS5meCwgbm9kZS52eCA9IDA7XG4gICAgICAgIGlmIChub2RlLmZ5ID09IG51bGwpIG5vZGUueSArPSBub2RlLnZ5ICo9IHZlbG9jaXR5RGVjYXk7XG4gICAgICAgIGVsc2Ugbm9kZS55ID0gbm9kZS5meSwgbm9kZS52eSA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpbXVsYXRpb247XG4gIH1cblxuICBmdW5jdGlvbiBpbml0aWFsaXplTm9kZXMoKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBub2Rlcy5sZW5ndGgsIG5vZGU7IGkgPCBuOyArK2kpIHtcbiAgICAgIG5vZGUgPSBub2Rlc1tpXSwgbm9kZS5pbmRleCA9IGk7XG4gICAgICBpZiAobm9kZS5meCAhPSBudWxsKSBub2RlLnggPSBub2RlLmZ4O1xuICAgICAgaWYgKG5vZGUuZnkgIT0gbnVsbCkgbm9kZS55ID0gbm9kZS5meTtcbiAgICAgIGlmIChpc05hTihub2RlLngpIHx8IGlzTmFOKG5vZGUueSkpIHtcbiAgICAgICAgdmFyIHJhZGl1cyA9IGluaXRpYWxSYWRpdXMgKiBNYXRoLnNxcnQoMC41ICsgaSksIGFuZ2xlID0gaSAqIGluaXRpYWxBbmdsZTtcbiAgICAgICAgbm9kZS54ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBub2RlLnkgPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNOYU4obm9kZS52eCkgfHwgaXNOYU4obm9kZS52eSkpIHtcbiAgICAgICAgbm9kZS52eCA9IG5vZGUudnkgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRpYWxpemVGb3JjZShmb3JjZSkge1xuICAgIGlmIChmb3JjZS5pbml0aWFsaXplKSBmb3JjZS5pbml0aWFsaXplKG5vZGVzLCByYW5kb20pO1xuICAgIHJldHVybiBmb3JjZTtcbiAgfVxuXG4gIGluaXRpYWxpemVOb2RlcygpO1xuXG4gIHJldHVybiBzaW11bGF0aW9uID0ge1xuICAgIHRpY2s6IHRpY2ssXG5cbiAgICByZXN0YXJ0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzdGVwcGVyLnJlc3RhcnQoc3RlcCksIHNpbXVsYXRpb247XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHN0ZXBwZXIuc3RvcCgpLCBzaW11bGF0aW9uO1xuICAgIH0sXG5cbiAgICBub2RlczogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAobm9kZXMgPSBfLCBpbml0aWFsaXplTm9kZXMoKSwgZm9yY2VzLmZvckVhY2goaW5pdGlhbGl6ZUZvcmNlKSwgc2ltdWxhdGlvbikgOiBub2RlcztcbiAgICB9LFxuXG4gICAgYWxwaGE6IGZ1bmN0aW9uKF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFscGhhID0gK18sIHNpbXVsYXRpb24pIDogYWxwaGE7XG4gICAgfSxcblxuICAgIGFscGhhTWluOiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYU1pbiA9ICtfLCBzaW11bGF0aW9uKSA6IGFscGhhTWluO1xuICAgIH0sXG5cbiAgICBhbHBoYURlY2F5OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYURlY2F5ID0gK18sIHNpbXVsYXRpb24pIDogK2FscGhhRGVjYXk7XG4gICAgfSxcblxuICAgIGFscGhhVGFyZ2V0OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChhbHBoYVRhcmdldCA9ICtfLCBzaW11bGF0aW9uKSA6IGFscGhhVGFyZ2V0O1xuICAgIH0sXG5cbiAgICB2ZWxvY2l0eURlY2F5OiBmdW5jdGlvbihfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2ZWxvY2l0eURlY2F5ID0gMSAtIF8sIHNpbXVsYXRpb24pIDogMSAtIHZlbG9jaXR5RGVjYXk7XG4gICAgfSxcblxuICAgIHJhbmRvbVNvdXJjZTogZnVuY3Rpb24oXykge1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZG9tID0gXywgZm9yY2VzLmZvckVhY2goaW5pdGlhbGl6ZUZvcmNlKSwgc2ltdWxhdGlvbikgOiByYW5kb207XG4gICAgfSxcblxuICAgIGZvcmNlOiBmdW5jdGlvbihuYW1lLCBfKSB7XG4gICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyAoKF8gPT0gbnVsbCA/IGZvcmNlcy5kZWxldGUobmFtZSkgOiBmb3JjZXMuc2V0KG5hbWUsIGluaXRpYWxpemVGb3JjZShfKSkpLCBzaW11bGF0aW9uKSA6IGZvcmNlcy5nZXQobmFtZSk7XG4gICAgfSxcblxuICAgIGZpbmQ6IGZ1bmN0aW9uKHgsIHksIHJhZGl1cykge1xuICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgIG4gPSBub2Rlcy5sZW5ndGgsXG4gICAgICAgICAgZHgsXG4gICAgICAgICAgZHksXG4gICAgICAgICAgZDIsXG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBjbG9zZXN0O1xuXG4gICAgICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICAgICAgZWxzZSByYWRpdXMgKj0gcmFkaXVzO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgZHggPSB4IC0gbm9kZS54O1xuICAgICAgICBkeSA9IHkgLSBub2RlLnk7XG4gICAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHk7XG4gICAgICAgIGlmIChkMiA8IHJhZGl1cykgY2xvc2VzdCA9IG5vZGUsIHJhZGl1cyA9IGQyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2xvc2VzdDtcbiAgICB9LFxuXG4gICAgb246IGZ1bmN0aW9uKG5hbWUsIF8pIHtcbiAgICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMSA/IChldmVudC5vbihuYW1lLCBfKSwgc2ltdWxhdGlvbikgOiBldmVudC5vbihuYW1lKTtcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihkKSB7XG4gIGNvbnN0IHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQpLFxuICAgICAgeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCk7XG4gIHJldHVybiBhZGQodGhpcy5jb3Zlcih4LCB5KSwgeCwgeSwgZCk7XG59XG5cbmZ1bmN0aW9uIGFkZCh0cmVlLCB4LCB5LCBkKSB7XG4gIGlmIChpc05hTih4KSB8fCBpc05hTih5KSkgcmV0dXJuIHRyZWU7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdHJlZS5fcm9vdCxcbiAgICAgIGxlYWYgPSB7ZGF0YTogZH0sXG4gICAgICB4MCA9IHRyZWUuX3gwLFxuICAgICAgeTAgPSB0cmVlLl95MCxcbiAgICAgIHgxID0gdHJlZS5feDEsXG4gICAgICB5MSA9IHRyZWUuX3kxLFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHhwLFxuICAgICAgeXAsXG4gICAgICByaWdodCxcbiAgICAgIGJvdHRvbSxcbiAgICAgIGksXG4gICAgICBqO1xuXG4gIC8vIElmIHRoZSB0cmVlIGlzIGVtcHR5LCBpbml0aWFsaXplIHRoZSByb290IGFzIGEgbGVhZi5cbiAgaWYgKCFub2RlKSByZXR1cm4gdHJlZS5fcm9vdCA9IGxlYWYsIHRyZWU7XG5cbiAgLy8gRmluZCB0aGUgZXhpc3RpbmcgbGVhZiBmb3IgdGhlIG5ldyBwb2ludCwgb3IgYWRkIGl0LlxuICB3aGlsZSAobm9kZS5sZW5ndGgpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAocGFyZW50ID0gbm9kZSwgIShub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gcGFyZW50W2ldID0gbGVhZiwgdHJlZTtcbiAgfVxuXG4gIC8vIElzIHRoZSBuZXcgcG9pbnQgaXMgZXhhY3RseSBjb2luY2lkZW50IHdpdGggdGhlIGV4aXN0aW5nIHBvaW50P1xuICB4cCA9ICt0cmVlLl94LmNhbGwobnVsbCwgbm9kZS5kYXRhKTtcbiAgeXAgPSArdHJlZS5feS5jYWxsKG51bGwsIG5vZGUuZGF0YSk7XG4gIGlmICh4ID09PSB4cCAmJiB5ID09PSB5cCkgcmV0dXJuIGxlYWYubmV4dCA9IG5vZGUsIHBhcmVudCA/IHBhcmVudFtpXSA9IGxlYWYgOiB0cmVlLl9yb290ID0gbGVhZiwgdHJlZTtcblxuICAvLyBPdGhlcndpc2UsIHNwbGl0IHRoZSBsZWFmIG5vZGUgdW50aWwgdGhlIG9sZCBhbmQgbmV3IHBvaW50IGFyZSBzZXBhcmF0ZWQuXG4gIGRvIHtcbiAgICBwYXJlbnQgPSBwYXJlbnQgPyBwYXJlbnRbaV0gPSBuZXcgQXJyYXkoNCkgOiB0cmVlLl9yb290ID0gbmV3IEFycmF5KDQpO1xuICAgIGlmIChyaWdodCA9IHggPj0gKHhtID0gKHgwICsgeDEpIC8gMikpIHgwID0geG07IGVsc2UgeDEgPSB4bTtcbiAgICBpZiAoYm90dG9tID0geSA+PSAoeW0gPSAoeTAgKyB5MSkgLyAyKSkgeTAgPSB5bTsgZWxzZSB5MSA9IHltO1xuICB9IHdoaWxlICgoaSA9IGJvdHRvbSA8PCAxIHwgcmlnaHQpID09PSAoaiA9ICh5cCA+PSB5bSkgPDwgMSB8ICh4cCA+PSB4bSkpKTtcbiAgcmV0dXJuIHBhcmVudFtqXSA9IG5vZGUsIHBhcmVudFtpXSA9IGxlYWYsIHRyZWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbGwoZGF0YSkge1xuICB2YXIgZCwgaSwgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgeCxcbiAgICAgIHksXG4gICAgICB4eiA9IG5ldyBBcnJheShuKSxcbiAgICAgIHl6ID0gbmV3IEFycmF5KG4pLFxuICAgICAgeDAgPSBJbmZpbml0eSxcbiAgICAgIHkwID0gSW5maW5pdHksXG4gICAgICB4MSA9IC1JbmZpbml0eSxcbiAgICAgIHkxID0gLUluZmluaXR5O1xuXG4gIC8vIENvbXB1dGUgdGhlIHBvaW50cyBhbmQgdGhlaXIgZXh0ZW50LlxuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgaWYgKGlzTmFOKHggPSArdGhpcy5feC5jYWxsKG51bGwsIGQgPSBkYXRhW2ldKSkgfHwgaXNOYU4oeSA9ICt0aGlzLl95LmNhbGwobnVsbCwgZCkpKSBjb250aW51ZTtcbiAgICB4eltpXSA9IHg7XG4gICAgeXpbaV0gPSB5O1xuICAgIGlmICh4IDwgeDApIHgwID0geDtcbiAgICBpZiAoeCA+IHgxKSB4MSA9IHg7XG4gICAgaWYgKHkgPCB5MCkgeTAgPSB5O1xuICAgIGlmICh5ID4geTEpIHkxID0geTtcbiAgfVxuXG4gIC8vIElmIHRoZXJlIHdlcmUgbm8gKHZhbGlkKSBwb2ludHMsIGFib3J0LlxuICBpZiAoeDAgPiB4MSB8fCB5MCA+IHkxKSByZXR1cm4gdGhpcztcblxuICAvLyBFeHBhbmQgdGhlIHRyZWUgdG8gY292ZXIgdGhlIG5ldyBwb2ludHMuXG4gIHRoaXMuY292ZXIoeDAsIHkwKS5jb3Zlcih4MSwgeTEpO1xuXG4gIC8vIEFkZCB0aGUgbmV3IHBvaW50cy5cbiAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgIGFkZCh0aGlzLCB4eltpXSwgeXpbaV0sIGRhdGFbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5KSB7XG4gIGlmIChpc05hTih4ID0gK3gpIHx8IGlzTmFOKHkgPSAreSkpIHJldHVybiB0aGlzOyAvLyBpZ25vcmUgaW52YWxpZCBwb2ludHNcblxuICB2YXIgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MTtcblxuICAvLyBJZiB0aGUgcXVhZHRyZWUgaGFzIG5vIGV4dGVudCwgaW5pdGlhbGl6ZSB0aGVtLlxuICAvLyBJbnRlZ2VyIGV4dGVudCBhcmUgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgd2UgbGF0ZXIgZG91YmxlIHRoZSBleHRlbnQsXG4gIC8vIHRoZSBleGlzdGluZyBxdWFkcmFudCBib3VuZGFyaWVzIGRvbuKAmXQgY2hhbmdlIGR1ZSB0byBmbG9hdGluZyBwb2ludCBlcnJvciFcbiAgaWYgKGlzTmFOKHgwKSkge1xuICAgIHgxID0gKHgwID0gTWF0aC5mbG9vcih4KSkgKyAxO1xuICAgIHkxID0gKHkwID0gTWF0aC5mbG9vcih5KSkgKyAxO1xuICB9XG5cbiAgLy8gT3RoZXJ3aXNlLCBkb3VibGUgcmVwZWF0ZWRseSB0byBjb3Zlci5cbiAgZWxzZSB7XG4gICAgdmFyIHogPSB4MSAtIHgwIHx8IDEsXG4gICAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIGk7XG5cbiAgICB3aGlsZSAoeDAgPiB4IHx8IHggPj0geDEgfHwgeTAgPiB5IHx8IHkgPj0geTEpIHtcbiAgICAgIGkgPSAoeSA8IHkwKSA8PCAxIHwgKHggPCB4MCk7XG4gICAgICBwYXJlbnQgPSBuZXcgQXJyYXkoNCksIHBhcmVudFtpXSA9IG5vZGUsIG5vZGUgPSBwYXJlbnQsIHogKj0gMjtcbiAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICBjYXNlIDA6IHgxID0geDAgKyB6LCB5MSA9IHkwICsgejsgYnJlYWs7XG4gICAgICAgIGNhc2UgMTogeDAgPSB4MSAtIHosIHkxID0geTAgKyB6OyBicmVhaztcbiAgICAgICAgY2FzZSAyOiB4MSA9IHgwICsgeiwgeTAgPSB5MSAtIHo7IGJyZWFrO1xuICAgICAgICBjYXNlIDM6IHgwID0geDEgLSB6LCB5MCA9IHkxIC0gejsgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Jvb3QgJiYgdGhpcy5fcm9vdC5sZW5ndGgpIHRoaXMuX3Jvb3QgPSBub2RlO1xuICB9XG5cbiAgdGhpcy5feDAgPSB4MDtcbiAgdGhpcy5feTAgPSB5MDtcbiAgdGhpcy5feDEgPSB4MTtcbiAgdGhpcy5feTEgPSB5MTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSBbXTtcbiAgdGhpcy52aXNpdChmdW5jdGlvbihub2RlKSB7XG4gICAgaWYgKCFub2RlLmxlbmd0aCkgZG8gZGF0YS5wdXNoKG5vZGUuZGF0YSk7IHdoaWxlIChub2RlID0gbm9kZS5uZXh0KVxuICB9KTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoXG4gICAgICA/IHRoaXMuY292ZXIoK19bMF1bMF0sICtfWzBdWzFdKS5jb3ZlcigrX1sxXVswXSwgK19bMV1bMV0pXG4gICAgICA6IGlzTmFOKHRoaXMuX3gwKSA/IHVuZGVmaW5lZCA6IFtbdGhpcy5feDAsIHRoaXMuX3kwXSwgW3RoaXMuX3gxLCB0aGlzLl95MV1dO1xufVxuIiwiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4LCB5LCByYWRpdXMpIHtcbiAgdmFyIGRhdGEsXG4gICAgICB4MCA9IHRoaXMuX3gwLFxuICAgICAgeTAgPSB0aGlzLl95MCxcbiAgICAgIHgxLFxuICAgICAgeTEsXG4gICAgICB4MixcbiAgICAgIHkyLFxuICAgICAgeDMgPSB0aGlzLl94MSxcbiAgICAgIHkzID0gdGhpcy5feTEsXG4gICAgICBxdWFkcyA9IFtdLFxuICAgICAgbm9kZSA9IHRoaXMuX3Jvb3QsXG4gICAgICBxLFxuICAgICAgaTtcblxuICBpZiAobm9kZSkgcXVhZHMucHVzaChuZXcgUXVhZChub2RlLCB4MCwgeTAsIHgzLCB5MykpO1xuICBpZiAocmFkaXVzID09IG51bGwpIHJhZGl1cyA9IEluZmluaXR5O1xuICBlbHNlIHtcbiAgICB4MCA9IHggLSByYWRpdXMsIHkwID0geSAtIHJhZGl1cztcbiAgICB4MyA9IHggKyByYWRpdXMsIHkzID0geSArIHJhZGl1cztcbiAgICByYWRpdXMgKj0gcmFkaXVzO1xuICB9XG5cbiAgd2hpbGUgKHEgPSBxdWFkcy5wb3AoKSkge1xuXG4gICAgLy8gU3RvcCBzZWFyY2hpbmcgaWYgdGhpcyBxdWFkcmFudCBjYW7igJl0IGNvbnRhaW4gYSBjbG9zZXIgbm9kZS5cbiAgICBpZiAoIShub2RlID0gcS5ub2RlKVxuICAgICAgICB8fCAoeDEgPSBxLngwKSA+IHgzXG4gICAgICAgIHx8ICh5MSA9IHEueTApID4geTNcbiAgICAgICAgfHwgKHgyID0gcS54MSkgPCB4MFxuICAgICAgICB8fCAoeTIgPSBxLnkxKSA8IHkwKSBjb250aW51ZTtcblxuICAgIC8vIEJpc2VjdCB0aGUgY3VycmVudCBxdWFkcmFudC5cbiAgICBpZiAobm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MSArIHgyKSAvIDIsXG4gICAgICAgICAgeW0gPSAoeTEgKyB5MikgLyAyO1xuXG4gICAgICBxdWFkcy5wdXNoKFxuICAgICAgICBuZXcgUXVhZChub2RlWzNdLCB4bSwgeW0sIHgyLCB5MiksXG4gICAgICAgIG5ldyBRdWFkKG5vZGVbMl0sIHgxLCB5bSwgeG0sIHkyKSxcbiAgICAgICAgbmV3IFF1YWQobm9kZVsxXSwgeG0sIHkxLCB4MiwgeW0pLFxuICAgICAgICBuZXcgUXVhZChub2RlWzBdLCB4MSwgeTEsIHhtLCB5bSlcbiAgICAgICk7XG5cbiAgICAgIC8vIFZpc2l0IHRoZSBjbG9zZXN0IHF1YWRyYW50IGZpcnN0LlxuICAgICAgaWYgKGkgPSAoeSA+PSB5bSkgPDwgMSB8ICh4ID49IHhtKSkge1xuICAgICAgICBxID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMV07XG4gICAgICAgIHF1YWRzW3F1YWRzLmxlbmd0aCAtIDFdID0gcXVhZHNbcXVhZHMubGVuZ3RoIC0gMSAtIGldO1xuICAgICAgICBxdWFkc1txdWFkcy5sZW5ndGggLSAxIC0gaV0gPSBxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFZpc2l0IHRoaXMgcG9pbnQuIChWaXNpdGluZyBjb2luY2lkZW50IHBvaW50cyBpc27igJl0IG5lY2Vzc2FyeSEpXG4gICAgZWxzZSB7XG4gICAgICB2YXIgZHggPSB4IC0gK3RoaXMuX3guY2FsbChudWxsLCBub2RlLmRhdGEpLFxuICAgICAgICAgIGR5ID0geSAtICt0aGlzLl95LmNhbGwobnVsbCwgbm9kZS5kYXRhKSxcbiAgICAgICAgICBkMiA9IGR4ICogZHggKyBkeSAqIGR5O1xuICAgICAgaWYgKGQyIDwgcmFkaXVzKSB7XG4gICAgICAgIHZhciBkID0gTWF0aC5zcXJ0KHJhZGl1cyA9IGQyKTtcbiAgICAgICAgeDAgPSB4IC0gZCwgeTAgPSB5IC0gZDtcbiAgICAgICAgeDMgPSB4ICsgZCwgeTMgPSB5ICsgZDtcbiAgICAgICAgZGF0YSA9IG5vZGUuZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5vZGUsIHgwLCB5MCwgeDEsIHkxKSB7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMueDAgPSB4MDtcbiAgdGhpcy55MCA9IHkwO1xuICB0aGlzLngxID0geDE7XG4gIHRoaXMueTEgPSB5MTtcbn1cbiIsImltcG9ydCB0cmVlX2FkZCwge2FkZEFsbCBhcyB0cmVlX2FkZEFsbH0gZnJvbSBcIi4vYWRkLmpzXCI7XG5pbXBvcnQgdHJlZV9jb3ZlciBmcm9tIFwiLi9jb3Zlci5qc1wiO1xuaW1wb3J0IHRyZWVfZGF0YSBmcm9tIFwiLi9kYXRhLmpzXCI7XG5pbXBvcnQgdHJlZV9leHRlbnQgZnJvbSBcIi4vZXh0ZW50LmpzXCI7XG5pbXBvcnQgdHJlZV9maW5kIGZyb20gXCIuL2ZpbmQuanNcIjtcbmltcG9ydCB0cmVlX3JlbW92ZSwge3JlbW92ZUFsbCBhcyB0cmVlX3JlbW92ZUFsbH0gZnJvbSBcIi4vcmVtb3ZlLmpzXCI7XG5pbXBvcnQgdHJlZV9yb290IGZyb20gXCIuL3Jvb3QuanNcIjtcbmltcG9ydCB0cmVlX3NpemUgZnJvbSBcIi4vc2l6ZS5qc1wiO1xuaW1wb3J0IHRyZWVfdmlzaXQgZnJvbSBcIi4vdmlzaXQuanNcIjtcbmltcG9ydCB0cmVlX3Zpc2l0QWZ0ZXIgZnJvbSBcIi4vdmlzaXRBZnRlci5qc1wiO1xuaW1wb3J0IHRyZWVfeCwge2RlZmF1bHRYfSBmcm9tIFwiLi94LmpzXCI7XG5pbXBvcnQgdHJlZV95LCB7ZGVmYXVsdFl9IGZyb20gXCIuL3kuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhZHRyZWUobm9kZXMsIHgsIHkpIHtcbiAgdmFyIHRyZWUgPSBuZXcgUXVhZHRyZWUoeCA9PSBudWxsID8gZGVmYXVsdFggOiB4LCB5ID09IG51bGwgPyBkZWZhdWx0WSA6IHksIE5hTiwgTmFOLCBOYU4sIE5hTik7XG4gIHJldHVybiBub2RlcyA9PSBudWxsID8gdHJlZSA6IHRyZWUuYWRkQWxsKG5vZGVzKTtcbn1cblxuZnVuY3Rpb24gUXVhZHRyZWUoeCwgeSwgeDAsIHkwLCB4MSwgeTEpIHtcbiAgdGhpcy5feCA9IHg7XG4gIHRoaXMuX3kgPSB5O1xuICB0aGlzLl94MCA9IHgwO1xuICB0aGlzLl95MCA9IHkwO1xuICB0aGlzLl94MSA9IHgxO1xuICB0aGlzLl95MSA9IHkxO1xuICB0aGlzLl9yb290ID0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBsZWFmX2NvcHkobGVhZikge1xuICB2YXIgY29weSA9IHtkYXRhOiBsZWFmLmRhdGF9LCBuZXh0ID0gY29weTtcbiAgd2hpbGUgKGxlYWYgPSBsZWFmLm5leHQpIG5leHQgPSBuZXh0Lm5leHQgPSB7ZGF0YTogbGVhZi5kYXRhfTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbnZhciB0cmVlUHJvdG8gPSBxdWFkdHJlZS5wcm90b3R5cGUgPSBRdWFkdHJlZS5wcm90b3R5cGU7XG5cbnRyZWVQcm90by5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBjb3B5ID0gbmV3IFF1YWR0cmVlKHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSxcbiAgICAgIG5vZGUgPSB0aGlzLl9yb290LFxuICAgICAgbm9kZXMsXG4gICAgICBjaGlsZDtcblxuICBpZiAoIW5vZGUpIHJldHVybiBjb3B5O1xuXG4gIGlmICghbm9kZS5sZW5ndGgpIHJldHVybiBjb3B5Ll9yb290ID0gbGVhZl9jb3B5KG5vZGUpLCBjb3B5O1xuXG4gIG5vZGVzID0gW3tzb3VyY2U6IG5vZGUsIHRhcmdldDogY29weS5fcm9vdCA9IG5ldyBBcnJheSg0KX1dO1xuICB3aGlsZSAobm9kZSA9IG5vZGVzLnBvcCgpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyArK2kpIHtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGUuc291cmNlW2ldKSB7XG4gICAgICAgIGlmIChjaGlsZC5sZW5ndGgpIG5vZGVzLnB1c2goe3NvdXJjZTogY2hpbGQsIHRhcmdldDogbm9kZS50YXJnZXRbaV0gPSBuZXcgQXJyYXkoNCl9KTtcbiAgICAgICAgZWxzZSBub2RlLnRhcmdldFtpXSA9IGxlYWZfY29weShjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvcHk7XG59O1xuXG50cmVlUHJvdG8uYWRkID0gdHJlZV9hZGQ7XG50cmVlUHJvdG8uYWRkQWxsID0gdHJlZV9hZGRBbGw7XG50cmVlUHJvdG8uY292ZXIgPSB0cmVlX2NvdmVyO1xudHJlZVByb3RvLmRhdGEgPSB0cmVlX2RhdGE7XG50cmVlUHJvdG8uZXh0ZW50ID0gdHJlZV9leHRlbnQ7XG50cmVlUHJvdG8uZmluZCA9IHRyZWVfZmluZDtcbnRyZWVQcm90by5yZW1vdmUgPSB0cmVlX3JlbW92ZTtcbnRyZWVQcm90by5yZW1vdmVBbGwgPSB0cmVlX3JlbW92ZUFsbDtcbnRyZWVQcm90by5yb290ID0gdHJlZV9yb290O1xudHJlZVByb3RvLnNpemUgPSB0cmVlX3NpemU7XG50cmVlUHJvdG8udmlzaXQgPSB0cmVlX3Zpc2l0O1xudHJlZVByb3RvLnZpc2l0QWZ0ZXIgPSB0cmVlX3Zpc2l0QWZ0ZXI7XG50cmVlUHJvdG8ueCA9IHRyZWVfeDtcbnRyZWVQcm90by55ID0gdHJlZV95O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZCkge1xuICBpZiAoaXNOYU4oeCA9ICt0aGlzLl94LmNhbGwobnVsbCwgZCkpIHx8IGlzTmFOKHkgPSArdGhpcy5feS5jYWxsKG51bGwsIGQpKSkgcmV0dXJuIHRoaXM7IC8vIGlnbm9yZSBpbnZhbGlkIHBvaW50c1xuXG4gIHZhciBwYXJlbnQsXG4gICAgICBub2RlID0gdGhpcy5fcm9vdCxcbiAgICAgIHJldGFpbmVyLFxuICAgICAgcHJldmlvdXMsXG4gICAgICBuZXh0LFxuICAgICAgeDAgPSB0aGlzLl94MCxcbiAgICAgIHkwID0gdGhpcy5feTAsXG4gICAgICB4MSA9IHRoaXMuX3gxLFxuICAgICAgeTEgPSB0aGlzLl95MSxcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeG0sXG4gICAgICB5bSxcbiAgICAgIHJpZ2h0LFxuICAgICAgYm90dG9tLFxuICAgICAgaSxcbiAgICAgIGo7XG5cbiAgLy8gSWYgdGhlIHRyZWUgaXMgZW1wdHksIGluaXRpYWxpemUgdGhlIHJvb3QgYXMgYSBsZWFmLlxuICBpZiAoIW5vZGUpIHJldHVybiB0aGlzO1xuXG4gIC8vIEZpbmQgdGhlIGxlYWYgbm9kZSBmb3IgdGhlIHBvaW50LlxuICAvLyBXaGlsZSBkZXNjZW5kaW5nLCBhbHNvIHJldGFpbiB0aGUgZGVlcGVzdCBwYXJlbnQgd2l0aCBhIG5vbi1yZW1vdmVkIHNpYmxpbmcuXG4gIGlmIChub2RlLmxlbmd0aCkgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAocmlnaHQgPSB4ID49ICh4bSA9ICh4MCArIHgxKSAvIDIpKSB4MCA9IHhtOyBlbHNlIHgxID0geG07XG4gICAgaWYgKGJvdHRvbSA9IHkgPj0gKHltID0gKHkwICsgeTEpIC8gMikpIHkwID0geW07IGVsc2UgeTEgPSB5bTtcbiAgICBpZiAoIShwYXJlbnQgPSBub2RlLCBub2RlID0gbm9kZVtpID0gYm90dG9tIDw8IDEgfCByaWdodF0pKSByZXR1cm4gdGhpcztcbiAgICBpZiAoIW5vZGUubGVuZ3RoKSBicmVhaztcbiAgICBpZiAocGFyZW50WyhpICsgMSkgJiAzXSB8fCBwYXJlbnRbKGkgKyAyKSAmIDNdIHx8IHBhcmVudFsoaSArIDMpICYgM10pIHJldGFpbmVyID0gcGFyZW50LCBqID0gaTtcbiAgfVxuXG4gIC8vIEZpbmQgdGhlIHBvaW50IHRvIHJlbW92ZS5cbiAgd2hpbGUgKG5vZGUuZGF0YSAhPT0gZCkgaWYgKCEocHJldmlvdXMgPSBub2RlLCBub2RlID0gbm9kZS5uZXh0KSkgcmV0dXJuIHRoaXM7XG4gIGlmIChuZXh0ID0gbm9kZS5uZXh0KSBkZWxldGUgbm9kZS5uZXh0O1xuXG4gIC8vIElmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb2luY2lkZW50IHBvaW50cywgcmVtb3ZlIGp1c3QgdGhlIHBvaW50LlxuICBpZiAocHJldmlvdXMpIHJldHVybiAobmV4dCA/IHByZXZpb3VzLm5leHQgPSBuZXh0IDogZGVsZXRlIHByZXZpb3VzLm5leHQpLCB0aGlzO1xuXG4gIC8vIElmIHRoaXMgaXMgdGhlIHJvb3QgcG9pbnQsIHJlbW92ZSBpdC5cbiAgaWYgKCFwYXJlbnQpIHJldHVybiB0aGlzLl9yb290ID0gbmV4dCwgdGhpcztcblxuICAvLyBSZW1vdmUgdGhpcyBsZWFmLlxuICBuZXh0ID8gcGFyZW50W2ldID0gbmV4dCA6IGRlbGV0ZSBwYXJlbnRbaV07XG5cbiAgLy8gSWYgdGhlIHBhcmVudCBub3cgY29udGFpbnMgZXhhY3RseSBvbmUgbGVhZiwgY29sbGFwc2Ugc3VwZXJmbHVvdXMgcGFyZW50cy5cbiAgaWYgKChub2RlID0gcGFyZW50WzBdIHx8IHBhcmVudFsxXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzNdKVxuICAgICAgJiYgbm9kZSA9PT0gKHBhcmVudFszXSB8fCBwYXJlbnRbMl0gfHwgcGFyZW50WzFdIHx8IHBhcmVudFswXSlcbiAgICAgICYmICFub2RlLmxlbmd0aCkge1xuICAgIGlmIChyZXRhaW5lcikgcmV0YWluZXJbal0gPSBub2RlO1xuICAgIGVsc2UgdGhpcy5fcm9vdCA9IG5vZGU7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbChkYXRhKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gZGF0YS5sZW5ndGg7IGkgPCBuOyArK2kpIHRoaXMucmVtb3ZlKGRhdGFbaV0pO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fcm9vdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgc2l6ZSA9IDA7XG4gIHRoaXMudmlzaXQoZnVuY3Rpb24obm9kZSkge1xuICAgIGlmICghbm9kZS5sZW5ndGgpIGRvICsrc2l6ZTsgd2hpbGUgKG5vZGUgPSBub2RlLm5leHQpXG4gIH0pO1xuICByZXR1cm4gc2l6ZTtcbn1cbiIsImltcG9ydCBRdWFkIGZyb20gXCIuL3F1YWQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgdmFyIHF1YWRzID0gW10sIHEsIG5vZGUgPSB0aGlzLl9yb290LCBjaGlsZCwgeDAsIHkwLCB4MSwgeTE7XG4gIGlmIChub2RlKSBxdWFkcy5wdXNoKG5ldyBRdWFkKG5vZGUsIHRoaXMuX3gwLCB0aGlzLl95MCwgdGhpcy5feDEsIHRoaXMuX3kxKSk7XG4gIHdoaWxlIChxID0gcXVhZHMucG9wKCkpIHtcbiAgICBpZiAoIWNhbGxiYWNrKG5vZGUgPSBxLm5vZGUsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSkgJiYgbm9kZS5sZW5ndGgpIHtcbiAgICAgIHZhciB4bSA9ICh4MCArIHgxKSAvIDIsIHltID0gKHkwICsgeTEpIC8gMjtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbM10pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHhtLCB5bSwgeDEsIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzJdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeW0sIHhtLCB5MSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMF0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5MCwgeG0sIHltKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IFF1YWQgZnJvbSBcIi4vcXVhZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjYWxsYmFjaykge1xuICB2YXIgcXVhZHMgPSBbXSwgbmV4dCA9IFtdLCBxO1xuICBpZiAodGhpcy5fcm9vdCkgcXVhZHMucHVzaChuZXcgUXVhZCh0aGlzLl9yb290LCB0aGlzLl94MCwgdGhpcy5feTAsIHRoaXMuX3gxLCB0aGlzLl95MSkpO1xuICB3aGlsZSAocSA9IHF1YWRzLnBvcCgpKSB7XG4gICAgdmFyIG5vZGUgPSBxLm5vZGU7XG4gICAgaWYgKG5vZGUubGVuZ3RoKSB7XG4gICAgICB2YXIgY2hpbGQsIHgwID0gcS54MCwgeTAgPSBxLnkwLCB4MSA9IHEueDEsIHkxID0gcS55MSwgeG0gPSAoeDAgKyB4MSkgLyAyLCB5bSA9ICh5MCArIHkxKSAvIDI7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzBdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4MCwgeTAsIHhtLCB5bSkpO1xuICAgICAgaWYgKGNoaWxkID0gbm9kZVsxXSkgcXVhZHMucHVzaChuZXcgUXVhZChjaGlsZCwgeG0sIHkwLCB4MSwgeW0pKTtcbiAgICAgIGlmIChjaGlsZCA9IG5vZGVbMl0pIHF1YWRzLnB1c2gobmV3IFF1YWQoY2hpbGQsIHgwLCB5bSwgeG0sIHkxKSk7XG4gICAgICBpZiAoY2hpbGQgPSBub2RlWzNdKSBxdWFkcy5wdXNoKG5ldyBRdWFkKGNoaWxkLCB4bSwgeW0sIHgxLCB5MSkpO1xuICAgIH1cbiAgICBuZXh0LnB1c2gocSk7XG4gIH1cbiAgd2hpbGUgKHEgPSBuZXh0LnBvcCgpKSB7XG4gICAgY2FsbGJhY2socS5ub2RlLCBxLngwLCBxLnkwLCBxLngxLCBxLnkxKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0WChkKSB7XG4gIHJldHVybiBkWzBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihfKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRoaXMuX3ggPSBfLCB0aGlzKSA6IHRoaXMuX3g7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGVmYXVsdFkoZCkge1xuICByZXR1cm4gZFsxXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oXykge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aGlzLl95ID0gXywgdGhpcykgOiB0aGlzLl95O1xufVxuIiwidmFyIGZyYW1lID0gMCwgLy8gaXMgYW4gYW5pbWF0aW9uIGZyYW1lIHBlbmRpbmc/XG4gICAgdGltZW91dCA9IDAsIC8vIGlzIGEgdGltZW91dCBwZW5kaW5nP1xuICAgIGludGVydmFsID0gMCwgLy8gYXJlIGFueSB0aW1lcnMgYWN0aXZlP1xuICAgIHBva2VEZWxheSA9IDEwMDAsIC8vIGhvdyBmcmVxdWVudGx5IHdlIGNoZWNrIGZvciBjbG9jayBza2V3XG4gICAgdGFza0hlYWQsXG4gICAgdGFza1RhaWwsXG4gICAgY2xvY2tMYXN0ID0gMCxcbiAgICBjbG9ja05vdyA9IDAsXG4gICAgY2xvY2tTa2V3ID0gMCxcbiAgICBjbG9jayA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gXCJvYmplY3RcIiAmJiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZSA6IERhdGUsXG4gICAgc2V0RnJhbWUgPSB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KSA6IGZ1bmN0aW9uKGYpIHsgc2V0VGltZW91dChmLCAxNyk7IH07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3coKSB7XG4gIHJldHVybiBjbG9ja05vdyB8fCAoc2V0RnJhbWUoY2xlYXJOb3cpLCBjbG9ja05vdyA9IGNsb2NrLm5vdygpICsgY2xvY2tTa2V3KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJOb3coKSB7XG4gIGNsb2NrTm93ID0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRpbWVyKCkge1xuICB0aGlzLl9jYWxsID1cbiAgdGhpcy5fdGltZSA9XG4gIHRoaXMuX25leHQgPSBudWxsO1xufVxuXG5UaW1lci5wcm90b3R5cGUgPSB0aW1lci5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBUaW1lcixcbiAgcmVzdGFydDogZnVuY3Rpb24oY2FsbGJhY2ssIGRlbGF5LCB0aW1lKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gICAgdGltZSA9ICh0aW1lID09IG51bGwgPyBub3coKSA6ICt0aW1lKSArIChkZWxheSA9PSBudWxsID8gMCA6ICtkZWxheSk7XG4gICAgaWYgKCF0aGlzLl9uZXh0ICYmIHRhc2tUYWlsICE9PSB0aGlzKSB7XG4gICAgICBpZiAodGFza1RhaWwpIHRhc2tUYWlsLl9uZXh0ID0gdGhpcztcbiAgICAgIGVsc2UgdGFza0hlYWQgPSB0aGlzO1xuICAgICAgdGFza1RhaWwgPSB0aGlzO1xuICAgIH1cbiAgICB0aGlzLl9jYWxsID0gY2FsbGJhY2s7XG4gICAgdGhpcy5fdGltZSA9IHRpbWU7XG4gICAgc2xlZXAoKTtcbiAgfSxcbiAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2NhbGwpIHtcbiAgICAgIHRoaXMuX2NhbGwgPSBudWxsO1xuICAgICAgdGhpcy5fdGltZSA9IEluZmluaXR5O1xuICAgICAgc2xlZXAoKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lcihjYWxsYmFjaywgZGVsYXksIHRpbWUpIHtcbiAgdmFyIHQgPSBuZXcgVGltZXI7XG4gIHQucmVzdGFydChjYWxsYmFjaywgZGVsYXksIHRpbWUpO1xuICByZXR1cm4gdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVyRmx1c2goKSB7XG4gIG5vdygpOyAvLyBHZXQgdGhlIGN1cnJlbnQgdGltZSwgaWYgbm90IGFscmVhZHkgc2V0LlxuICArK2ZyYW1lOyAvLyBQcmV0ZW5kIHdl4oCZdmUgc2V0IGFuIGFsYXJtLCBpZiB3ZSBoYXZlbuKAmXQgYWxyZWFkeS5cbiAgdmFyIHQgPSB0YXNrSGVhZCwgZTtcbiAgd2hpbGUgKHQpIHtcbiAgICBpZiAoKGUgPSBjbG9ja05vdyAtIHQuX3RpbWUpID49IDApIHQuX2NhbGwuY2FsbCh1bmRlZmluZWQsIGUpO1xuICAgIHQgPSB0Ll9uZXh0O1xuICB9XG4gIC0tZnJhbWU7XG59XG5cbmZ1bmN0aW9uIHdha2UoKSB7XG4gIGNsb2NrTm93ID0gKGNsb2NrTGFzdCA9IGNsb2NrLm5vdygpKSArIGNsb2NrU2tldztcbiAgZnJhbWUgPSB0aW1lb3V0ID0gMDtcbiAgdHJ5IHtcbiAgICB0aW1lckZsdXNoKCk7XG4gIH0gZmluYWxseSB7XG4gICAgZnJhbWUgPSAwO1xuICAgIG5hcCgpO1xuICAgIGNsb2NrTm93ID0gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwb2tlKCkge1xuICB2YXIgbm93ID0gY2xvY2subm93KCksIGRlbGF5ID0gbm93IC0gY2xvY2tMYXN0O1xuICBpZiAoZGVsYXkgPiBwb2tlRGVsYXkpIGNsb2NrU2tldyAtPSBkZWxheSwgY2xvY2tMYXN0ID0gbm93O1xufVxuXG5mdW5jdGlvbiBuYXAoKSB7XG4gIHZhciB0MCwgdDEgPSB0YXNrSGVhZCwgdDIsIHRpbWUgPSBJbmZpbml0eTtcbiAgd2hpbGUgKHQxKSB7XG4gICAgaWYgKHQxLl9jYWxsKSB7XG4gICAgICBpZiAodGltZSA+IHQxLl90aW1lKSB0aW1lID0gdDEuX3RpbWU7XG4gICAgICB0MCA9IHQxLCB0MSA9IHQxLl9uZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0MiA9IHQxLl9uZXh0LCB0MS5fbmV4dCA9IG51bGw7XG4gICAgICB0MSA9IHQwID8gdDAuX25leHQgPSB0MiA6IHRhc2tIZWFkID0gdDI7XG4gICAgfVxuICB9XG4gIHRhc2tUYWlsID0gdDA7XG4gIHNsZWVwKHRpbWUpO1xufVxuXG5mdW5jdGlvbiBzbGVlcCh0aW1lKSB7XG4gIGlmIChmcmFtZSkgcmV0dXJuOyAvLyBTb29uZXN0IGFsYXJtIGFscmVhZHkgc2V0LCBvciB3aWxsIGJlLlxuICBpZiAodGltZW91dCkgdGltZW91dCA9IGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgdmFyIGRlbGF5ID0gdGltZSAtIGNsb2NrTm93OyAvLyBTdHJpY3RseSBsZXNzIHRoYW4gaWYgd2UgcmVjb21wdXRlZCBjbG9ja05vdy5cbiAgaWYgKGRlbGF5ID4gMjQpIHtcbiAgICBpZiAodGltZSA8IEluZmluaXR5KSB0aW1lb3V0ID0gc2V0VGltZW91dCh3YWtlLCB0aW1lIC0gY2xvY2subm93KCkgLSBjbG9ja1NrZXcpO1xuICAgIGlmIChpbnRlcnZhbCkgaW50ZXJ2YWwgPSBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWludGVydmFsKSBjbG9ja0xhc3QgPSBjbG9jay5ub3coKSwgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChwb2tlLCBwb2tlRGVsYXkpO1xuICAgIGZyYW1lID0gMSwgc2V0RnJhbWUod2FrZSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHcmFwaE1hbmFnZXIgfSBmcm9tIFwiLi9HcmFwaE1hbmFnZXJcIjtcbmltcG9ydCB7IFV0aWxzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOWIl+aMmeS9k1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g5qyh5pWw6YWN5YiX44Oi44O844OJ44Gu5YiX5oyZ5L2TXG5leHBvcnQgdmFyIERlZ3JlZVNlcUVudW07XG4oZnVuY3Rpb24gKERlZ3JlZVNlcUVudW0pIHtcbiAgICBEZWdyZWVTZXFFbnVtW1wiQXJyYXlcIl0gPSBcIlxcdTZCMjFcXHU2NTcwXFx1OTE0RFxcdTUyMTdcIjtcbiAgICBEZWdyZWVTZXFFbnVtW1wiUnVuTGVuZ3RoXCJdID0gXCJcXHUzMEU5XFx1MzBGM1xcdTMwRUNcXHUzMEYzXFx1MzBCMFxcdTMwQjlcXHU1NzI3XFx1N0UyRVwiO1xufSkoRGVncmVlU2VxRW51bSB8fCAoRGVncmVlU2VxRW51bSA9IHt9KSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBIVE1M6aCF55uu6Zai6YCj5Yem55CGXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBzZXR1cCk7XG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g5qyh5pWw6YWN5YiXXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IGRlZ3JlZVRvZ2dsZTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVRvZ2dsZTFcIik7XG4gICAgY29uc3QgZGVncmVlVG9nZ2xlMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVncmVlVG9nZ2xlMlwiKTtcbiAgICBjb25zdCBkZWdyZWVzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlZ3JlZVNlcXVlbmNlSW5wdXRcIik7XG4gICAgY29uc3QgYXBwbHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcGx5RGVncmVlU2VxdWVuY2VcIik7XG4gICAgZGVncmVlVG9nZ2xlMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tEZWdyZWVBcnJheSk7XG4gICAgZGVncmVlVG9nZ2xlMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tSdW5MZW5ndGgpO1xuICAgIGRlZ3JlZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgaW5wdXREZWdyZWVTZXF1ZW5jZSk7XG4gICAgZGVncmVlc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGJsdXJEZWdyZWVTZXF1ZW5jZSk7XG4gICAgYXBwbHlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcGx5RGVncmVlU2VxdWVuY2UpO1xuICAgIC8vIOODiOOCsOODq+ODnOOCv+ODs+OBrueKtuaFizog5Yid5pyf5YCk44Gv44CM5qyh5pWw6YWN5YiX44CN44Go44GZ44KLXG4gICAgbGV0IGRlZ3JlZU1vZGUgPSBEZWdyZWVTZXFFbnVtLkFycmF5O1xuICAgIC8vIOODiOOCsOODq+ODnOOCv+ODs+OBp+OAgeasoeaVsOmFjeWIl+OBjOmBuOaKnuOBleOCjOOBn+aZguOBruWHpueQhlxuICAgIGZ1bmN0aW9uIGNsaWNrRGVncmVlQXJyYXkoZSkge1xuICAgICAgICBkZWdyZWVNb2RlID0gRGVncmVlU2VxRW51bS5BcnJheTtcbiAgICAgICAgZGVncmVlVG9nZ2xlMS50ZXh0Q29udGVudCA9IGRlZ3JlZU1vZGU7XG4gICAgICAgIGRlZ3JlZVRvZ2dsZTEuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZGVncmVlVG9nZ2xlMi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkZWdyZWVzSW5wdXQucGxhY2Vob2xkZXIgPSBcIuS+izogNCw0LDQsMywzXCI7XG4gICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS5nZXRBcnJheVN0cmluZygpO1xuICAgIH1cbiAgICAvLyDjg4jjgrDjg6vjg5zjgr/jg7PjgafjgIHjg6njg7Pjg6zjg7PjgrDjgrnlnKfnuK7jgYzpgbjmip7jgZXjgozjgZ/mmYLjga7lh6bnkIZcbiAgICBmdW5jdGlvbiBjbGlja1J1bkxlbmd0aChlKSB7XG4gICAgICAgIGRlZ3JlZU1vZGUgPSBEZWdyZWVTZXFFbnVtLlJ1bkxlbmd0aDtcbiAgICAgICAgZGVncmVlVG9nZ2xlMi50ZXh0Q29udGVudCA9IGRlZ3JlZU1vZGU7XG4gICAgICAgIGRlZ3JlZVRvZ2dsZTIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgZGVncmVlVG9nZ2xlMS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBkZWdyZWVzSW5wdXQucGxhY2Vob2xkZXIgPSBcIuS+izogNCozLDMqMlwiO1xuICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2UuZ2V0UnVuTGVuZ3RoU3RyaW5nKCk7XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+WFpeWKm+ashOOBq+WFpeWKm+OBl+OBn+aZguOBruWHpueQhlxuICAgIGZ1bmN0aW9uIGlucHV0RGVncmVlU2VxdWVuY2UoZSkge1xuICAgICAgICBpZiAoZGVncmVlTW9kZSA9PT0gRGVncmVlU2VxRW51bS5BcnJheSkge1xuICAgICAgICAgICAgLy8g5pWw5a2X44CB44Kr44Oz44Oe44KS6Kix5a65XG4gICAgICAgICAgICBjb25zdCBjbGVhbmVkVmFsdWUgPSBkZWdyZWVzSW5wdXQudmFsdWUucmVwbGFjZSgvW14wLTksIF0vZywgXCJcIik7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBjbGVhbmVkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDmlbDlrZfjgIHjgqvjg7Pjg57jgIHjgqLjgrnjgr/jg6rjgrnjgq/jgpLoqLHlrrlcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuZWRWYWx1ZSA9IGRlZ3JlZXNJbnB1dC52YWx1ZS5yZXBsYWNlKC9bXjAtOSwqIF0vZywgXCJcIik7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBjbGVhbmVkVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5qyh5pWw6YWN5YiX5YWl5Yqb5qyE44Gu44Ot44K544OI44OV44Kp44O844Kr44K55pmC44Gu5Yem55CGXG4gICAgZnVuY3Rpb24gYmx1ckRlZ3JlZVNlcXVlbmNlKGUpIHtcbiAgICAgICAgZ3JhcGhNYW5hZ2VyLmRlZ3JlZVNlcXVlbmNlLnNldFZhbHVlKGRlZ3JlZXNJbnB1dC52YWx1ZSk7XG4gICAgICAgIC8vIOWApOOBruioreWumlxuICAgICAgICBpZiAoZGVncmVlTW9kZSA9PT0gRGVncmVlU2VxRW51bS5BcnJheSkge1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZ3JhcGhNYW5hZ2VyLmRlZ3JlZVNlcXVlbmNlLmdldEFycmF5U3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQudmFsdWUgPSBncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2UuZ2V0UnVuTGVuZ3RoU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5pyJ5Yq55oCn5Yik5a6aXG4gICAgICAgIGlmIChncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2UuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWludmFsaWRcIik7XG4gICAgICAgICAgICBkZWdyZWVzSW5wdXQuY2xhc3NMaXN0LmFkZChcImlzLXZhbGlkXCIpO1xuICAgICAgICAgICAgYXBwbHlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaXMtaW52YWxpZFwiKTtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtdmFsaWRcIik7XG4gICAgICAgICAgICBhcHBseUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6YGp55So44Oc44K/44Oz44GM5oq844GV44KM44Gf5pmC44Gu5Yem55CGXG4gICAgZnVuY3Rpb24gYXBwbHlEZWdyZWVTZXF1ZW5jZShlKSB7XG4gICAgICAgIGlmIChncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2UudmVydGV4Q291bnQoKSA+IDEwMCkge1xuICAgICAgICAgICAgVXRpbHMuY29uZmlybUFjdGlvbihcIumggueCueOBruaVsOOBjDEwMOOCkui2heOBiOOCi+OCsOODqeODleOBr+aPj+eUu+OBp+OBjeOBvuOBm+OCk1wiLCAoKSA9PiB7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS52ZXJ0ZXhDb3VudCgpID4gNTApIHtcbiAgICAgICAgICAgIFV0aWxzLmNvbmZpcm1BY3Rpb24oXCLpoILngrnjga7mlbDjgYzlpKfjgY3jgYTjgZ/jgoHjgIHmj4/nlLvjgavmlbDliIbjgYvjgYvjgovloLTlkIjjgYzjgYLjgorjgb7jgZnjgYzjgojjgo3jgZfjgYTjgafjgZnjgYvvvJ9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyYXBoTWFuYWdlci5jcmVhdGVHcmFwaEZyb21NYXRyaXgoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ3JhcGhNYW5hZ2VyLmNyZWF0ZUdyYXBoRnJvbU1hdHJpeCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOasoeaVsOmFjeWIl+OBruabtOaWsFxuICAgIGZ1bmN0aW9uIHVwZGF0ZURlZ3JlZVNlcXVlbmNlKHZlcnRpY2VzLCBlZGdlcykge1xuICAgICAgICBncmFwaE1hbmFnZXIuZGVncmVlU2VxdWVuY2Uuc2V0VmVydGljZXModmVydGljZXMsIGVkZ2VzKTtcbiAgICAgICAgaWYgKGRlZ3JlZU1vZGUgPT09IERlZ3JlZVNlcUVudW0uQXJyYXkpIHtcbiAgICAgICAgICAgIGRlZ3JlZXNJbnB1dC52YWx1ZSA9IGdyYXBoTWFuYWdlci5kZWdyZWVTZXF1ZW5jZS5nZXRBcnJheVN0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZGVncmVlc0lucHV0LnZhbHVlID0gZ3JhcGhNYW5hZ2VyLmRlZ3JlZVNlcXVlbmNlLmdldFJ1bkxlbmd0aFN0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDjg5fjg63jg5Hjg4bjgqPjgqjjg6rjgqJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgaW5pdEdyYXBoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbml0R3JhcGhCdXR0b25cIik7XG4gICAgY29uc3QgdmVydGV4RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVydGV4RGlzcGxheVwiKTtcbiAgICBjb25zdCBlZGdlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRnZURpc3BsYXlcIik7XG4gICAgY29uc3QgZ3JhcGhTdGF0dXNEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFwaFN0YXR1c0Rpc3BsYXlcIik7XG4gICAgY29uc3QgbWF4R3JhcGhFZGdlRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4R3JhcGhFZGdlRGlzcGxheVwiKTtcbiAgICBjb25zdCBoYXNLMzNEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoYXNLMzNEaXNwbGF5XCIpO1xuICAgIGNvbnN0IGhhc0s1RGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGFzSzVEaXNwbGF5XCIpO1xuICAgIGNvbnN0IHNob3dJbmRleENoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93SW5kZXhDaGVja2JveFwiKTtcbiAgICBjb25zdCBzaG93RGVncmVlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dEZWdyZWVDaGVja2JveFwiKTtcbiAgICBjb25zdCBjaGFuZ2VGb3JjZURpcmVjdE1vZGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYW5nZUZvcmNlRGlyZWN0TW9kZUJ1dHRvblwiKTtcbiAgICBjb25zdCBzdHJhaWdodGVuRWRnZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0cmFpZ2h0ZW5FZGdlc0J1dHRvblwiKTtcbiAgICBpbml0R3JhcGhCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGluaXRHcmFwaCk7XG4gICAgc2hvd0luZGV4Q2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzaG93SW5kZXgpO1xuICAgIHNob3dEZWdyZWVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHNob3dEZWdyZWUpO1xuICAgIGNoYW5nZUZvcmNlRGlyZWN0TW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlRm9yY2VEaXJlY3RNb2RlKTtcbiAgICBzdHJhaWdodGVuRWRnZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0cmFpZ2h0ZW5FZGdlcyk7XG4gICAgLy8g44Kw44Op44OV44Gu5Yid5pyf5YyWXG4gICAgZnVuY3Rpb24gaW5pdEdyYXBoKGUpIHtcbiAgICAgICAgVXRpbHMuY29uZmlybUFjdGlvbihcIuOCsOODqeODleOBjOWIneacn+WMluOBleOCjOOBvuOBmeOBjOOCiOOCjeOBl+OBhOOBp+OBmeOBi++8n1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBncmFwaE1hbmFnZXIuaW5pdEdyYXBoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDjgqrjg5bjgrjjgqfjgq/jg4jmg4XloLHjga7mm7TmlrBcbiAgICBmdW5jdGlvbiB1cGRhdGVJbmZvKGluZm8pIHtcbiAgICAgICAgLy8g6aCC54K544Go6L6644Gu5pWwXG4gICAgICAgIHZlcnRleERpc3BsYXkudGV4dENvbnRlbnQgPSBg6aCC54K544Gu5pWwOiAke2luZm8udmVydGljZXMubGVuZ3RofWA7XG4gICAgICAgIGVkZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gYOi+uuOBruaVsDogJHtpbmZvLmVkZ2VzLmxlbmd0aH1gO1xuICAgICAgICAvLyDliJ3mnJ/ljJZcbiAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gXCLjgrDjg6njg5U6IOW5s+mdouOCsOODqeODlVwiO1xuICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiXCI7XG4gICAgICAgIG1heEdyYXBoRWRnZURpc3BsYXkudGV4dENvbnRlbnQgPSBcIiAtIFwiO1xuICAgICAgICBoYXNLMzNEaXNwbGF5LnRleHRDb250ZW50ID0gXCJrMywzOiAtXCI7XG4gICAgICAgIGhhc0szM0Rpc3BsYXkuc3R5bGUuY29sb3IgPSBcIlwiO1xuICAgICAgICBoYXNLMzNEaXNwbGF5LnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgICAgICBoYXNLNURpc3BsYXkudGV4dENvbnRlbnQgPSBcIms1OiAtXCI7XG4gICAgICAgIGhhc0s1RGlzcGxheS5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgIGhhc0s1RGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJcIjtcbiAgICAgICAgLy8g5pyA5bCP6ZmQ44Gu44Kw44Op44OV5Yik5a6aXG4gICAgICAgIGlmIChpbmZvLnZlcnRpY2VzLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDmpbXlpKflubPpnaLjgrDjg6njg5XliKTlrprvvIggM1YgLSBFID0gNiDvvIlcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gMyAqIGluZm8udmVydGljZXMubGVuZ3RoIC0gaW5mby5lZGdlcy5sZW5ndGg7XG4gICAgICAgIC8vIOmao+aOpeihjOWIl+OCkuWPluW+l1xuICAgICAgICBjb25zdCBhZGphY2VuY3lNYXRyaXggPSBpbmZvLmRlZ3JlZVNlcXVlbmNlLmdldEFkamFjZW5jeU1hdHJpeCgpO1xuICAgICAgICAvLyDjgrDjg6njg5XnirbmhYtcbiAgICAgICAgaWYgKGFkamFjZW5jeU1hdHJpeCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8g5o+P55S75LiN5Y+v6IO9XG4gICAgICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkudGV4dENvbnRlbnQgPSBcIuOCsOODqeODlTog5a6f54++5LiN5Y+vXCI7XG4gICAgICAgICAgICBncmFwaFN0YXR1c0Rpc3BsYXkuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhZGphY2VuY3lNYXRyaXguaGFzSzMzKCkgfHwgYWRqYWNlbmN5TWF0cml4Lmhhc0s1KCkpIHtcbiAgICAgICAgICAgIC8vIOmdnuW5s+mdouOCsOODqeODlVxuICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gXCLjgrDjg6njg5U6IOmdnuW5s+mdouOCsOODqeODlVwiO1xuICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgICAvLyBLMywzXG4gICAgICAgICAgICBpZiAoYWRqYWNlbmN5TWF0cml4ICYmIGFkamFjZW5jeU1hdHJpeC5oYXNLMzMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGszMyA9IGFkamFjZW5jeU1hdHJpeC5nZXRSZXN1bHRLMzMoKTtcbiAgICAgICAgICAgICAgICBoYXNLMzNEaXNwbGF5LnRleHRDb250ZW50ID0gYGszLDM6ICR7azMzLm1hcCgoc3ViKSA9PiBgKCR7c3ViLmpvaW4oXCIsXCIpfSlgKS5qb2luKFwiLCBcIil9YDtcbiAgICAgICAgICAgICAgICBoYXNLMzNEaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgICAgICBoYXNLMzNEaXNwbGF5LnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEs1XG4gICAgICAgICAgICBpZiAoYWRqYWNlbmN5TWF0cml4ICYmIGFkamFjZW5jeU1hdHJpeC5oYXNLNSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgazUgPSBhZGphY2VuY3lNYXRyaXguZ2V0UmVzdWx0SzUoKTtcbiAgICAgICAgICAgICAgICBoYXNLNURpc3BsYXkudGV4dENvbnRlbnQgPSBgazU6ICgke2s1LmpvaW4oXCIsIFwiKX0pYDtcbiAgICAgICAgICAgICAgICBoYXNLNURpc3BsYXkuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgICAgIGhhc0s1RGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDlubPpnaLjgrDjg6njg5VcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPiA2KSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gXCLjgrDjg6njg5U6IOW5s+mdouOCsOODqeODlVwiO1xuICAgICAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS5zdHlsZS5jb2xvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnN0eWxlLmZvbnRXZWlnaHQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIG1heEdyYXBoRWRnZURpc3BsYXkudGV4dENvbnRlbnQgPSBg6L665pWwICR7cmVzdWx0IC0gNn0g6L+95Yqg5Y+v6IO9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCA9PSA2KSB7XG4gICAgICAgICAgICAgICAgZ3JhcGhTdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gXCLjgrDjg6njg5U6IOalteWkp+W5s+mdouOCsOODqeODlVwiO1xuICAgICAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS5zdHlsZS5jb2xvciA9IFwiYmx1ZVwiO1xuICAgICAgICAgICAgICAgIGdyYXBoU3RhdHVzRGlzcGxheS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgICAgICAgICAgbWF4R3JhcGhFZGdlRGlzcGxheS50ZXh0Q29udGVudCA9IGAgLSBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOmggueCueeVquWPt+OCkuihqOekulxuICAgIGZ1bmN0aW9uIHNob3dJbmRleChlKSB7XG4gICAgICAgIGdyYXBoTWFuYWdlci5kcmF3VmVydGV4SW5mbyhzaG93SW5kZXhDaGVja2JveC5jaGVja2VkLCBzaG93RGVncmVlQ2hlY2tib3guY2hlY2tlZCk7XG4gICAgfVxuICAgIC8vIOasoeaVsOOCkuihqOekulxuICAgIGZ1bmN0aW9uIHNob3dEZWdyZWUoZSkge1xuICAgICAgICBncmFwaE1hbmFnZXIuZHJhd1ZlcnRleEluZm8oc2hvd0luZGV4Q2hlY2tib3guY2hlY2tlZCwgc2hvd0RlZ3JlZUNoZWNrYm94LmNoZWNrZWQpO1xuICAgIH1cbiAgICBsZXQgZm9yY2VEaXJlY3RNb2RlID0gdHJ1ZTtcbiAgICAvLyDlipvmjIflkJHjg6Ljg7zjg4njgpLliIfjgormm7/jgYjjgotcbiAgICBmdW5jdGlvbiBjaGFuZ2VGb3JjZURpcmVjdE1vZGUoZSkge1xuICAgICAgICBmb3JjZURpcmVjdE1vZGUgPSAhZm9yY2VEaXJlY3RNb2RlO1xuICAgICAgICBncmFwaE1hbmFnZXIuY2hhbmdlRm9yY2VEaXJlY3RNb2RlKGZvcmNlRGlyZWN0TW9kZSk7XG4gICAgICAgIGlmIChmb3JjZURpcmVjdE1vZGUpIHtcbiAgICAgICAgICAgIGNoYW5nZUZvcmNlRGlyZWN0TW9kZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwi44Oa44K444Kn5puy57ea44Oi44O844OJ44Gr44GZ44KLXCI7XG4gICAgICAgICAgICBzdHJhaWdodGVuRWRnZXNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hhbmdlRm9yY2VEaXJlY3RNb2RlQnV0dG9uLnRleHRDb250ZW50ID0gXCLlipvmjIflkJHjg6Ljg7zjg4njgavjgZnjgotcIjtcbiAgICAgICAgICAgIHN0cmFpZ2h0ZW5FZGdlc0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOOBmeOBueOBpuOBrui+uuOCkuebtOe3muOBq+OBmeOCi1xuICAgIGZ1bmN0aW9uIHN0cmFpZ2h0ZW5FZGdlcyhlKSB7XG4gICAgICAgIFV0aWxzLmNvbmZpcm1BY3Rpb24oXCLjgZnjgbnjgabjga7ovrrjgYznm7Tnt5rjgavjgarjgorjgb7jgZnjgYzjgojjgo3jgZfjgYTjgafjgZnjgYvvvJ9cIiwgKCkgPT4ge1xuICAgICAgICAgICAgZ3JhcGhNYW5hZ2VyLnN0cmFpZ2h0ZW5FZGdlcygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIOOCqOOCr+OCueODneODvOODiO+8j+OCpOODs+ODneODvOODiOWHpueQhlxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjb25zdCBleHBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4cG9ydEJ1dHRvblwiKTtcbiAgICBjb25zdCBpbXBvcnRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltcG9ydEJ1dHRvblwiKTtcbiAgICBjb25zdCBpbXBvcnRGaWxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltcG9ydEZpbGVJbnB1dFwiKTtcbiAgICBleHBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV4cG9ydEpzb24pO1xuICAgIGltcG9ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdXBsb2FkSnNvbik7XG4gICAgaW1wb3J0RmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaW1wb3J0SnNvbik7XG4gICAgLy8g44Ko44Kv44K544Od44O844OI44Oc44K/44Oz44GM5oq85LiL44GV44KM44Gf44KJ44CB44Ko44Kv44K544Od44O844OI44GZ44KLXG4gICAgZnVuY3Rpb24gZXhwb3J0SnNvbihlKSB7XG4gICAgICAgIC8vIOODh+ODvOOCv+WPluW+l1xuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGdyYXBoTWFuYWdlci5leHBvcnRUb0pzb24oKTtcbiAgICAgICAgLy8g44OV44Kh44Kk44Or5ZCNXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKSArIChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpICsgKFwiMFwiICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKSArIFwiX1wiICsgKFwiMFwiICsgZGF0ZS5nZXRIb3VycygpKS5zbGljZSgtMikgKyAoXCIwXCIgKyBkYXRlLmdldE1pbnV0ZXMoKSkuc2xpY2UoLTIpICsgKFwiMFwiICsgZGF0ZS5nZXRTZWNvbmRzKCkpLnNsaWNlKC0yKTtcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBgZ3JhcGgtZGF0YV8ke3RpbWVzdGFtcH0uanNvbmA7XG4gICAgICAgIC8vIOODgOOCpuODs+ODreODvOODiVVSTFxuICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2pzb25EYXRhXSwgeyB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9KTtcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBhLmhyZWYgPSB1cmw7XG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcbiAgICAgICAgLy8g44Oq44Oz44Kv44KS44OX44Ot44Kw44Op44Og55qE44Gr44Kv44Oq44OD44Kv44GX44Gm44OA44Km44Oz44Ot44O844OJ44KS5a6f6KGMXG4gICAgICAgIGEuY2xpY2soKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbiAgICAgICAgLy8g5L2c5oiQ44GX44GfVVJM44KS6Kej5pS+XG4gICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcbiAgICB9XG4gICAgLy8g44Oc44K/44Oz44GM44Kv44Oq44OD44Kv44GV44KM44Gf44KJ44CB44OV44Kh44Kk44Or5YWl5Yqb44KS44OI44Oq44Ks44O844GZ44KLXG4gICAgZnVuY3Rpb24gdXBsb2FkSnNvbigpIHtcbiAgICAgICAgaW1wb3J0RmlsZUlucHV0LmNsaWNrKCk7XG4gICAgfVxuICAgIC8vIOODleOCoeOCpOODq+OBjOWFpeWKm+OBleOCjOOBn+OCieOAgeOCpOODs+ODneODvOODiOOBmeOCi1xuICAgIGZ1bmN0aW9uIGltcG9ydEpzb24oZSkge1xuICAgICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIC8vIOiqreOBv+i+vOOCk+OBoEpTT07jg4fjg7zjgr/jgafjgrDjg6njg5XjgpLjgqTjg7Pjg53jg7zjg4hcbiAgICAgICAgICAgICAgICBncmFwaE1hbmFnZXIuaW1wb3J0RnJvbUpzb24oY29udGVudCk7XG4gICAgICAgICAgICAgICAgLy8g44OV44Kh44Kk44Or5YWl5Yqb44KS44Oq44K744OD44OIXG4gICAgICAgICAgICAgICAgaW1wb3J0RmlsZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8g44Oh44Kk44Oz5Yem55CGXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhcGhDYW52YXNcIik7XG4gICAgY29uc3QgZ3JhcGhNYW5hZ2VyID0gbmV3IEdyYXBoTWFuYWdlcihjYW52YXMsIHVwZGF0ZURlZ3JlZVNlcXVlbmNlLCB1cGRhdGVJbmZvKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
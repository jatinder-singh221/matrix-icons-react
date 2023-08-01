(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyIconLibrary = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  const ActivitySolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  }));

  const AdjustHorizontalSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M21 19.273h-7m-4 0H3M21 12h-9m-4 0H3m18-7.273h-5m-4 0H3M14 22v-5.454m-6-1.819V9.273m8-1.818V2"
  }));

  const AdjustSquareSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeDasharray: "1 2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2 12h20"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M4.344 8.182 6 2l15.455 4.141-.828 3.091m-1.76 6.568-1.553 5.796-15.455-4.141.776-2.898"
  }));

  const AdjustVerticleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M4.727 21v-7m0-4V3M12 21v-9m0-4V3m7.273 18v-5m0-4V3M2 14h5.455m1.818-6h5.454m1.819 8H22"
  }));

  const ApertureSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 2c.096 0 .191.001.286.004L7.38 10.5 4.6 5.685a.748.748 0 0 0-.179-.209A9.977 9.977 0 0 1 12 2ZM3.485 6.754A9.953 9.953 0 0 0 2 12c0 1.157.196 2.268.558 3.301a.749.749 0 0 1 .272-.051h5.56l-1.648-2.856a.736.736 0 0 1-.022-.037L3.485 6.754Zm6.653 15.073a10.013 10.013 0 0 1-6.94-5.077h9.813l-2.78 4.815a.75.75 0 0 0-.093.262Zm1.576.169a9.977 9.977 0 0 0 7.866-3.472.748.748 0 0 1-.18-.209L16.62 13.5l-1.652 2.86a.693.693 0 0 1-.016.028l-3.238 5.608Zm2.163-6.746L15.754 12l-1.877-3.25h-3.754L8.246 12l1.877 3.25h3.754Zm3.398-3.615a.623.623 0 0 0-.012-.021L15.609 8.75h5.56a.748.748 0 0 0 .273-.051A9.984 9.984 0 0 1 22 12c0 1.924-.543 3.72-1.485 5.246l-3.24-5.611ZM14.296 7.25h-3.307l2.78-4.815a.748.748 0 0 0 .092-.262 10.013 10.013 0 0 1 6.941 5.077h-6.506Z"
  }));

  const ArchiveAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M20 18v-8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3ZM8.25 15a.75.75 0 0 1 .75-.75h2.25V12a.75.75 0 0 1 1.5 0v2.25H15a.75.75 0 0 1 0 1.5h-2.25V18a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1-.75-.75Z",
    clipRule: "evenodd"
  }));

  const ArchiveArrowDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-7.25 2a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.044.016l2.122-2a.75.75 0 1 0-1.03-1.092l-.856.808V12Z",
    clipRule: "evenodd"
  }));

  const ArchiveArrowUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M20 10v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Zm-8.629 8a.75.75 0 0 0 1.5 0v-4.19l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.044-.016l-2.121 2a.75.75 0 0 0 1.028 1.092l.857-.808V18Z",
    clipRule: "evenodd"
  }));

  const ArchiveMinusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M5 9a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a1 1 0 0 0-1-1H5Zm4 3.25a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5H9Z",
    clipRule: "evenodd"
  }));

  const ArrowAngleDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m15 15-6 6m0 0-6-6m6 6V9a6 6 0 1 1 12 0v3"
  }));

  const ArrowAngleLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 1 1 0 12h-3"
  }));

  const ArrowAngleRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 1 0 0 12h3"
  }));

  const ArrowAngleUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M15 9 9 3m0 0L3 9m6-6v12a6 6 0 1 0 12 0v-3"
  }));

  const ArrowBarDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M2 21h20m-3-10.25L11.5 17m0 0L4 10.75M11.5 17V2"
  }));

  const ArrowBarLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M2.5 1.5v20m10.25-3L6.5 11m0 0 6.25-7.5M6.5 11h15"
  }));

  const ArrowBarRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M21.5 21.5v-20m-10.25 3L17.5 12m0 0-6.25 7.5M17.5 12h-15"
  }));

  const ArrowBarUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M22 3H2m3 10.25L12.5 7m0 0 7.5 6.25M12.5 7v15"
  }));

  const ArrowCycleCircleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M16.023 9.348h4.992l-3.181-3.183a8.25 8.25 0 0 0-13.803 3.7m-1.046 9.779v-4.992m0 0h4.992m-4.992 0 3.18 3.183a8.25 8.25 0 0 0 13.803-3.7m1.047-9.779v4.99"
  }));

  const ArrowCycleSquareSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M4.609 10.2V5.7c0-1.491 1.168-2.7 2.608-2.7h9.276c1.44 0 2.608 1.209 2.608 2.7v4.5m0 0-2.898-2.16M19.1 10.2 22 8.04m-2.609 5.76v4.5c0 1.491-1.168 2.7-2.608 2.7H7.507C6.067 21 4.9 19.791 4.9 18.3v-4.5m0 0 2.898 2.16M4.9 13.8 2 15.96"
  }));

  const ArrowDoubleHorizontalSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
  }));

  const ArrowDoubleVerticleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
  }));

  const ArrowDownLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M17.889 5.661 5.16 18.39m0 0 10.831-.275M5.16 18.39l.225-10.881"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ArrowDownRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M5.161 5.611 17.89 18.339m0 0-.275-10.831m.275 10.83-10.881-.224"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ArrowDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M11.535 3v18m0 0L19 13.147M11.535 21 4 13.147"
  }));

  const ArrowLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M20.5 12.035h-18m0 0 7.853 7.465M2.5 12.035 10.353 4.5"
  }));

  const ArrowRectDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M8.667 9.545H4.5c-.663 0-1.299.26-1.768.72A2.432 2.432 0 0 0 2 12v6.546c0 .65.263 1.275.732 1.735.47.46 1.105.719 1.768.719h15c.663 0 1.299-.259 1.768-.719.469-.46.732-1.085.732-1.735V12c0-.651-.263-1.275-.732-1.736a2.524 2.524 0 0 0-1.768-.719h-4.167m-6.666 4.091L12 16.91m0 0 3.333-3.273M12 16.91V3"
  }));

  const ArrowRectLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M14.454 8.667V4.5c0-.663-.258-1.299-.718-1.768A2.432 2.432 0 0 0 12 2H5.455c-.651 0-1.276.263-1.736.732A2.524 2.524 0 0 0 3 4.5v15c0 .663.259 1.299.719 1.768.46.469 1.085.732 1.736.732H12c.651 0 1.275-.263 1.736-.732.46-.47.718-1.105.718-1.768v-4.167m-4.09-6.666L7.09 12m0 0 3.273 3.333M7.09 12H21"
  }));

  const ArrowRectRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M14.454 8.667V4.5c0-.663-.258-1.299-.718-1.768A2.432 2.432 0 0 0 12 2H5.455c-.651 0-1.276.263-1.736.732A2.524 2.524 0 0 0 3 4.5v15c0 .663.259 1.299.719 1.768.46.469 1.085.732 1.736.732H12c.651 0 1.275-.263 1.736-.732.46-.47.718-1.105.718-1.768v-4.167m3.273 0L21 12m0 0-3.273-3.333M21 12H7.09"
  }));

  const ArrowRectUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M8.667 9.545H4.5c-.663 0-1.299.26-1.768.72A2.432 2.432 0 0 0 2 12v6.546c0 .65.263 1.275.732 1.735.47.46 1.105.719 1.768.719h15c.663 0 1.299-.259 1.768-.719.469-.46.732-1.085.732-1.735V12c0-.651-.263-1.275-.732-1.736a2.524 2.524 0 0 0-1.768-.719h-4.167m0-3.272L12 3m0 0L8.667 6.273M12 3v13.91"
  }));

  const ArrowRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M2.5 11.965h18m0 0L12.647 4.5m7.853 7.465L12.647 19.5"
  }));

  const ArrowRoundedDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.442-5.391 3.977-3.978a.625.625 0 1 0-.883-.884l-2.911 2.91V7.834a.625.625 0 0 0-1.25 0v6.825l-2.91-2.91a.625.625 0 1 0-.884.883l3.977 3.978c.244.244.64.244.884 0Z",
    clipRule: "evenodd"
  }));

  const ArrowRoundedLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm5.391.442 3.978 3.977a.625.625 0 1 0 .884-.883l-2.91-2.911h6.824a.625.625 0 0 0 0-1.25H9.342l2.91-2.91a.625.625 0 1 0-.883-.884L7.39 11.558a.625.625 0 0 0 0 .884Z",
    clipRule: "evenodd"
  }));

  const ArrowRoundedRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Zm-5.391-.442L12.63 7.581a.625.625 0 0 0-.884.883l2.91 2.911H7.834a.625.625 0 0 0 0 1.25h6.825l-2.91 2.91a.625.625 0 1 0 .883.884l3.978-3.977a.625.625 0 0 0 0-.884Z",
    clipRule: "evenodd"
  }));

  const ArrowRoundedUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-.442 5.391L7.581 11.37a.625.625 0 0 0 .883.884l2.911-2.91v6.824a.625.625 0 0 0 1.25 0V9.342l2.91 2.91a.625.625 0 1 0 .884-.883L12.442 7.39a.625.625 0 0 0-.884 0Z",
    clipRule: "evenodd"
  }));

  const ArrowsInSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
  }));

  const ArrowsOutSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
  }));

  const ArrowTopRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M5.111 18.339 17.839 5.611m0 0-10.831.275m10.83-.275-.224 10.881"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ArrowTrendsDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.511-5.511-3.182"
  }));

  const ArrowTrendsUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941"
  }));

  const ArrowUDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M3 15.79V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.21m-4.5-4.264L12 15.79m0 0-4.5-4.264M12 15.79V3"
  }));

  const ArrowUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M11.465 21V3m0 0L4 10.853M11.465 3 19 10.853"
  }));

  const ArrowUUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M3 15.987v3.008C3 20.102 3.895 21 5 21h14c1.105 0 2-.898 2-2.005v-4.01M6.5 7.967l5.409-4.937a.13.13 0 0 1 .175.008m0 0L17 7.967m-4.916-4.929L12 16.99"
  }));

  const AtTheRateSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
  }));

  const AwardSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.816 8.76c0 3.732-3.019 6.759-6.742 6.759-3.724 0-6.742-3.027-6.742-6.76C5.332 5.026 8.35 2 12.074 2c3.723 0 6.742 3.026 6.742 6.76Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m9.617 11.422 2.567 2.574-5.15 7.745c-.13.196-.502.042-.47-.192.151-1.125.185-2.708-.614-3.509-.841-.843-2.546-.761-3.672-.59-.228.034-.38-.307-.196-.444l7.535-5.584Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m11.618 14.363 2.567-2.573 7.725 5.163c.197.131.042.503-.191.471-1.122-.151-2.7-.185-3.5.616-.841.843-.76 2.552-.59 3.681.035.229-.305.382-.442.196l-5.569-7.554Z"
  }));

  const BackwardSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03V8.69c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z"
  }));

  const BadgeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4.272 19.385a4 4 0 0 0 3.976 1.004 4.002 4.002 0 0 0 7.335.39 4 4 0 0 0 4.806-5.028 4.002 4.002 0 0 0 .238-7.406 4.001 4.001 0 0 0-5.18-5.376 4 4 0 0 0-7.102.403 4.002 4.002 0 0 0-5.376 5.181 4 4 0 0 0 .25 7.03 3.998 3.998 0 0 0 1.053 3.802Zm11.409-10.07a.75.75 0 1 0-1.362-.63l-2.414 5.231-2.51-1.554a.75.75 0 0 0-.79 1.276l3.231 2a.75.75 0 0 0 1.076-.324l2.769-6Z",
    clipRule: "evenodd"
  }));

  const BarAlignCenterSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M2 3h20m-2 4.5H4M2 12h20m-2 4.5H4M2 21h20"
  }));

  const BarAlignDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M22 3H4.684m5.195 6.5H22m0 6.149H9.879m0 5.351H22M4.684 9.5V21m0 0 2.597-3m-2.597 3L2 18"
  }));

  const BarAlignLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M2 3h20m-6 6.5H2m0 6.149h20M16 21H2"
  }));

  const BarAlignRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M22 3H2m6 6.5h14m0 6.149H2M8 21h14"
  }));

  const BarAlignUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M22 3H4.684m5.195 6.5H22m0 6.149H9.879m0 5.351H22M4.684 9.5V21m0-11.5L1.5 13m3.184-3.5L8 13"
  }));

  const BarCodeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm6 0a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm5 1a1 1 0 1 0-2 0v20a1 1 0 1 0 2 0V2Zm8-1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM5.75 2a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V2ZM15 1.25a.75.75 0 0 1 .75.75v16.5a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75Zm3.75.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0V2Z"
  }));

  const BarThreeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M4 4h17M4 12h17M4 20h17"
  }));

  const BarTwoSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M3 5h17M3 19h17"
  }));

  const BatterySolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M22 14v-3M3.86 6h13.024c1.027 0 1.86.895 1.86 2v8c0 1.105-.833 2-1.86 2H3.86C2.833 18 2 17.105 2 16V8c0-1.105.833-2 1.86-2Z"
  }));

  const BellOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.304 2c0 .444-.142.853-.38 1.185 3.357.803 5.764 4.11 5.882 7.8.041 1.304.152 2.594.372 3.715.13.664.328 1.416.549 2.163L7.391 4.263a6.954 6.954 0 0 1 2.377-1.078A2.02 2.02 0 0 1 9.388 2c0-1.105.876-2 1.958-2 1.081 0 1.958.895 1.958 2ZM5.33 6.402 19.624 21h-6.581c.166.294.262.636.262 1 0 1.105-.877 2-1.958 2-1.082 0-1.959-.895-1.959-2 0-.364.096-.706.262-1H2.995c-.691 0-1.17-.712-.934-1.376.471-1.33 1.147-3.368 1.452-4.924.22-1.121.33-2.411.372-3.716a8.867 8.867 0 0 1 1.446-4.582ZM4.477 2.47a.723.723 0 0 0-1.038 0 .761.761 0 0 0 0 1.06l17.308 17.678a.723.723 0 0 0 1.038 0 .761.761 0 0 0 0-1.06L4.477 2.47Z"
  }));

  const BellSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.49 2c0 .444-.143.853-.386 1.185 3.413.803 5.86 4.11 5.98 7.8.042 1.304.154 2.594.378 3.715.31 1.556.997 3.594 1.476 4.924.24.664-.247 1.376-.95 1.376h-6.764c.17.294.267.636.267 1 0 1.105-.892 2-1.991 2-1.1 0-1.99-.895-1.99-2 0-.364.096-.706.266-1H3.01c-.702 0-1.188-.712-.95-1.376.48-1.33 1.167-3.368 1.477-4.924.224-1.121.336-2.411.379-3.716.12-3.69 2.566-6.996 5.98-7.799A1.997 1.997 0 0 1 9.51 2c0-1.105.89-2 1.99-2s1.99.895 1.99 2Z"
  }));

  const BlockCircleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "m5 4.859 14.276 14M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const BlockSquareSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m3.5 3.5 17 17M3 22h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const BluetoothSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m6.5 6.5 11 11L12 23V1l5.5 5.5-11 11"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const BoldSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M6 12h8a4 4 0 1 0 0-8H6v8Zm0 0h9a4 4 0 1 1 0 8H6v-8Z"
  }));

  const BookCloseSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20 2H6.5A2.5 2.5 0 0 0 4 4.5v12.923a3.25 3.25 0 0 1 2.5-1.173H20V2Zm0 15.75H6.5a1.75 1.75 0 0 0-1.75 1.75.75.75 0 0 1-.637.742A2.5 2.5 0 0 0 6.5 22H20v-4.25Z"
  }));

  const BookMarkOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.511 2.451A.75.75 0 1 0 2.49 3.55l17.55 16.366a.75.75 0 1 0 1.023-1.097L3.511 2.451Zm12.582.873C17.193 3.452 18 4.4 18 5.509V13L7 3.126a48.507 48.507 0 0 1 9.093.198ZM18 21.002l-8-5-7 5V6l15 13.5v1.502Z"
  }));

  const BookmarkSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21l-8-5-7 5V5.507c0-1.108.806-2.057 1.907-2.185a48.506 48.506 0 0 1 11.186 0Z"
  }));

  const BookOpenSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533Zm1.5 16.103A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
  }));

  const BreifcaseSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M6 2a.75.75 0 0 0-.75.75v4.5H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-2.25v-4.5A.75.75 0 0 0 18 2H6Zm11.25 5.25V3.5H6.75v3.75h10.5Z",
    clipRule: "evenodd"
  }));

  const BrightnessSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.998 2a.75.75 0 0 1 .75.75v3.964a.75.75 0 0 1-1.5 0V2.75a.75.75 0 0 1 .75-.75Zm3.558 9.999c0 1.824-1.593 3.303-3.557 3.303-1.965 0-3.558-1.479-3.558-3.303 0-1.825 1.593-3.303 3.557-3.303 1.965 0 3.558 1.479 3.558 3.303Zm-2.808 5.285a.75.75 0 0 0-1.5 0v3.963a.75.75 0 0 0 1.5 0v-3.963Zm4.192-5.946a.75.75 0 0 1 .75-.75h3.557a.75.75 0 0 1 0 1.5H17.69a.75.75 0 0 1-.75-.75Zm-14.19-.75a.75.75 0 0 0 0 1.5h3.557a.75.75 0 0 0 0-1.5H2.75Zm.873-6.366a.82.82 0 0 1 1.1 0l2.515 2.335a.686.686 0 0 1 0 1.02.82.82 0 0 1-1.1 0L3.624 5.243a.686.686 0 0 1 0-1.02Zm13.905 11.891a.82.82 0 0 0-1.1 0 .686.686 0 0 0 0 1.02l2.516 2.336a.82.82 0 0 0 1.1 0 .686.686 0 0 0 0-1.02l-2.516-2.336Zm-10.29 0a.686.686 0 0 1 0 1.02L4.722 19.47a.82.82 0 0 1-1.099 0 .686.686 0 0 1 0-1.02l2.515-2.336a.82.82 0 0 1 1.1 0ZM20.043 5.242a.686.686 0 0 0 0-1.02.82.82 0 0 0-1.099 0L16.43 6.557a.686.686 0 0 0 0 1.02.82.82 0 0 0 1.099 0l2.515-2.335Z"
  }));

  const CalenderSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7 1.468C7 1.21 6.776 1 6.5 1s-.5.21-.5.468v2.809H5c-1.657 0-3 1.257-3 2.808h20c0-1.551-1.343-2.808-3-2.808h-1.5V1.468C17.5 1.21 17.276 1 17 1s-.5.21-.5.468v2.809H7V1.468Zm15 6.553H2v12.17C2 21.744 3.343 23 5 23h14c1.657 0 3-1.257 3-2.808V8.022Z"
  }));

  const CameraOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m13.615 14.871 6.125 6.25a2.902 2.902 0 0 1-2.08.879H3.94C2.316 22 1 20.657 1 19V8.333c0-1.657 1.316-3 2.94-3h.327l5.68 5.796A2.994 2.994 0 0 0 7.86 14c0 1.657 1.317 3 2.94 3 1.327 0 2.449-.897 2.815-2.129ZM6.88 3.667c0 .03 0 .059-.002.088l13.723 14.002V8.333c0-1.657-1.316-3-2.94-3h-1.307c-.902 0-1.633-.746-1.633-1.666 0-.92-.732-1.667-1.634-1.667H8.514c-.902 0-1.634.746-1.634 1.667ZM4.46 2.47a.725.725 0 0 0-1.04 0 .76.76 0 0 0 0 1.06l17.325 17.678a.725.725 0 0 0 1.04 0 .76.76 0 0 0 0-1.06L4.46 2.47Z"
  }));

  const CameraSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M14.333 2C15.253 2 16 2.746 16 3.667c0 .92.746 1.666 1.667 1.666H19a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8.333a3 3 0 0 1 3-3h1.333C7.253 5.333 8 4.587 8 3.667 8 2.747 8.746 2 9.667 2h4.666ZM12 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    clipRule: "evenodd"
  }));

  const CartSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.195 3.132a1.5 1.5 0 0 0 0 3v-3ZM22 4.632l1.427.462A1.5 1.5 0 0 0 22 3.132v1.5Zm-3.415 10.526v1.5a1.5 1.5 0 0 0 1.427-1.037l-1.427-.463Zm-9.268 0-1.452.377a1.5 1.5 0 0 0 1.452 1.123v-1.5ZM5.902 2l1.452-.377A1.5 1.5 0 0 0 5.902.5V2ZM2 .5a1.5 1.5 0 1 0 0 3v-3Zm12.195 5.632H22v-3h-7.805v3Zm6.378-1.963L17.16 14.695l2.853.926 3.415-10.527-2.854-.925Zm-1.988 9.489H9.317v3h9.268v-3ZM10.77 14.78 7.354 1.623l-2.903.754 3.414 13.158 2.904-.754ZM5.902.5H2v3h3.902v-3ZM9.28 20.947a.41.41 0 0 1 .115-.275.563.563 0 0 1 .41-.172v3c1.472 0 2.476-1.252 2.476-2.553h-3Zm.525-.447c.183 0 .328.083.41.172a.41.41 0 0 1 .114.275h-3c0 1.3 1.003 2.553 2.476 2.553v-3Zm.524.447a.409.409 0 0 1-.114.276.563.563 0 0 1-.41.172v-3c-1.473 0-2.476 1.252-2.476 2.552h3Zm-.524.448a.563.563 0 0 1-.41-.172.409.409 0 0 1-.115-.276h3c0-1.3-1.003-2.552-2.475-2.552v3Zm8.256-.448c0-.087.033-.188.114-.275a.563.563 0 0 1 .41-.172v3c1.473 0 2.476-1.252 2.476-2.553h-3Zm.524-.447a.56.56 0 0 1 .41.172.41.41 0 0 1 .115.275h-3c0 1.3 1.003 2.553 2.475 2.553v-3Zm.525.447a.409.409 0 0 1-.114.276.563.563 0 0 1-.41.172v-3c-1.473 0-2.476 1.252-2.476 2.552h3Zm-.525.448a.562.562 0 0 1-.41-.172.408.408 0 0 1-.114-.276h3c0-1.3-1.003-2.552-2.476-2.552v3Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));

  const CastSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h.01"
  }));

  const ChartLinesSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M1 13a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-8Zm9-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V8Zm9-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3Z"
  }));

  const ChartPieSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.333 5.333a8.333 8.333 0 1 0 8.334 8.334h-8.334V5.333Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.667 10.333H22A8.333 8.333 0 0 0 13.667 2v8.333Z"
  }));

  const ChatOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.514 1.222a.736.736 0 0 0-1.054 0 .769.769 0 0 0 0 1.074l18.268 18.606a.736.736 0 0 0 1.054 0 .769.769 0 0 0 0-1.073L3.514 1.222Zm16.409 14.981a1.49 1.49 0 0 0-.124.41l-5.139-5.234.83-1.046a.769.769 0 0 0-.11-1.068.736.736 0 0 0-1.049.113l-.73.921-7.26-7.395a9.749 9.749 0 0 1 4.595-1.145c5.488 0 9.936 4.531 9.936 10.12 0 1.547-.34 3.013-.95 4.324Zm-8.274-3.445.067-.084-7.806-7.95A10.184 10.184 0 0 0 1 11.878C1 17.47 5.449 22 10.936 22a9.754 9.754 0 0 0 5.049-1.402 1.343 1.343 0 0 1 1.037-.163l1.7.454c.339.09.67.034.94-.122l-6.886-7.014-.465.586a.737.737 0 0 1-1.082.084l-1.776-1.65-1.893 2.595a.736.736 0 0 1-1.043.157.768.768 0 0 1-.153-1.062l2.384-3.268a.737.737 0 0 1 1.1-.108l1.8 1.67Z"
  }));

  const ChatSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M20.932 17.139a1.37 1.37 0 0 1 .112-.867A9.961 9.961 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.954 9.954 0 0 0 5.08-1.385 1.376 1.376 0 0 1 1.045-.161l1.71.448a1.277 1.277 0 0 0 1.573-1.497l-.476-2.266Zm-4.349-6.667a.75.75 0 1 0-1.166-.943l-2.7 3.339-1.812-1.651a.75.75 0 0 0-1.107.106l-2.4 3.23a.75.75 0 1 0 1.204.894l1.905-2.563 1.788 1.629a.75.75 0 0 0 1.088-.083l3.2-3.958Z",
    clipRule: "evenodd"
  }));

  const CheckSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M21 3 9.353 20.352a.5.5 0 0 1-.842-.018L3 11.308"
  }));

  const ChevronDoubleDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m19.5 11.25-7.5 7.5-7.5-7.5m15-6-7.5 7.5-7.5-7.5"
  }));

  const ChevronDoubleLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M12.75 19.5 5.25 12l7.5-7.5m6 15-7.5-7.5 7.5-7.5"
  }));

  const ChevronDoubleRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m11.25 4.5 7.5 7.5-7.5 7.5m-6-15 7.5 7.5-7.5 7.5"
  }));

  const ChevronDoubleUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m4.5 12.75 7.5-7.5 7.5 7.5m-15 6 7.5-7.5 7.5 7.5"
  }));

  const ChevronDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));

  const ChevronHorizontalSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M15 15.75 18.75 12 15 8.25m-6 7.5L5.25 12 9 8.25"
  }));

  const ChevronLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  }));

  const ChevronRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  }));

  const ChevronUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m4.5 15.75 7.5-7.5 7.5 7.5"
  }));

  const ChevronVerticleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
  }));

  const CircleAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.75-13a.75.75 0 0 0-1.5 0v2.75H8.5a.75.75 0 0 0 0 1.5h2.75V16a.75.75 0 0 0 1.5 0v-2.75h2.75a.75.75 0 0 0 0-1.5h-2.75V9Z",
    clipRule: "evenodd"
  }));

  const ClipboardSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 6.818a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6.818Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.5 3a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2.636h-9V3Z"
  }));

  const ClockSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-.25-13a.75.75 0 0 0-1.5 0v4.575c0 .335.222.63.544.721l5 1.425a.75.75 0 0 0 .412-1.442l-4.456-1.27V9Z",
    clipRule: "evenodd"
  }));

  const CloudOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.863 2.218a.701.701 0 0 0-1.016 0c-.28.29-.28.76 0 1.05l16.927 17.514c.28.29.735.29 1.016 0 .28-.29.28-.76 0-1.05L4.863 2.218Zm10.504 16.407c.685 0 1.354-.169 1.954-.485L6.97 7.43a5.346 5.346 0 0 0-.053.193 2.78 2.78 0 0 0-1.575-.06 2.85 2.85 0 0 0-1.368.81 3.005 3.005 0 0 0-.75 1.435 3.07 3.07 0 0 0 .095 1.627 3.628 3.628 0 0 0-1.856 1.65 3.827 3.827 0 0 0-.404 2.496 3.744 3.744 0 0 0 1.235 2.185c.646.556 1.46.86 2.3.86h10.773Zm3.933-2.64L8.598 4.911c.181-.153.373-.294.575-.421a4.884 4.884 0 0 1 3.726-.626 5.032 5.032 0 0 1 3.097 2.233 5.35 5.35 0 0 1 .72 3.835 4.316 4.316 0 0 1 2.143 1.622 4.589 4.589 0 0 1 .443 4.432Z"
  }));

  const ClouldSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21.75 15a4.5 4.5 0 0 1-4.5 4.5H6a3.75 3.75 0 0 1-1.332-7.257 3 3 0 0 1 3.758-3.848 5.25 5.25 0 0 1 10.233 2.33A4.502 4.502 0 0 1 21.75 15Z"
  }));

  const CommentOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.664 16.272a1.5 1.5 0 0 0-.122.405L6.267 3.132A9.602 9.602 0 0 1 10.8 2c5.413 0 9.8 4.477 9.8 10a10.13 10.13 0 0 1-.936 4.272ZM1 12c0-2.761 1.097-5.261 2.87-7.071l15.537 15.853a1.21 1.21 0 0 1-.928.12l-1.676-.448a1.323 1.323 0 0 0-1.023.16A9.607 9.607 0 0 1 10.8 22C5.388 22 1 17.523 1 12Zm3.46-9.53a.725.725 0 0 0-1.04 0 .76.76 0 0 0 0 1.06l17.325 17.678a.725.725 0 0 0 1.04 0 .76.76 0 0 0 0-1.06L4.46 2.47Z"
  }));

  const CommentSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.932 17.139a1.37 1.37 0 0 1 .112-.867A9.962 9.962 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a9.953 9.953 0 0 0 5.08-1.385 1.376 1.376 0 0 1 1.045-.161l1.71.448a1.277 1.277 0 0 0 1.573-1.497l-.476-2.266Z"
  }));

  const CompasSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m8.946 15.054 1.527-4.581 4.581-1.527-1.527 4.581-4.581 1.527Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.049-4.003a.75.75 0 0 0-.948-.949l-6.36 2.12a.75.75 0 0 0-.475.475l-2.12 6.36a.75.75 0 0 0 .95.948l6.36-2.12a.75.75 0 0 0 .473-.474l2.12-6.36Z",
    clipRule: "evenodd"
  }));

  const ContrastSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4.929 19.071A10 10 0 1 0 19.072 4.928 10 10 0 0 0 4.929 19.07Zm.707-.707A9 9 0 0 0 11 20.944V3.056a9 9 0 0 0-5.364 15.308Z",
    clipRule: "evenodd"
  }));

  const CropSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M6.13 1 6 16a2 2 0 0 0 2 2h15M1 6.13 16 6a2 2 0 0 1 2 2v15"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const DocumentAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2H7Zm5.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V11Z",
    clipRule: "evenodd"
  }));

  const DocumentArrowDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2H7Zm1.59 12.991 2.5 1.637a.75.75 0 0 0 .82 0l2.5-1.637a.75.75 0 0 0-.82-1.255l-1.34.877V10a.75.75 0 0 0-1.5 0v4.613l-1.34-.877a.75.75 0 0 0-.82 1.255Z",
    clipRule: "evenodd"
  }));

  const DocumentArrowUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2H7Zm4.91 7.373a.75.75 0 0 0-.82 0l-2.5 1.636a.75.75 0 1 0 .82 1.255l1.34-.877V16a.75.75 0 0 0 1.5 0v-4.613l1.34.877a.75.75 0 0 0 .82-1.255l-2.5-1.636Z",
    clipRule: "evenodd"
  }));

  const DocumentMinusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2H7Zm2 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z",
    clipRule: "evenodd"
  }));

  const DocumentSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4 5a3 3 0 0 1 3-3h6.757a3 3 0 0 1 2.122.879L18 5l1.121 1.121A3 3 0 0 1 20 8.243V19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Z"
  }));

  const DrawSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 3,
    d: "M2 2s9.676 1.704 12 6.5c1.535 3.168-1.343 6 .5 9C16.288 20.41 22 22 22 22"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ExclimationCircleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 1 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));

  const ExclimationTriangleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003h.001ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 1 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));

  const ExpandDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M17 2v5h5M7 2v5H2m0 10h5v5m15-5h-5v5"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ExpandUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M7 2H2v5m0 10v5h5m10 0h5v-5m0-10V2h-5"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ExternalLinkSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6m0 0v6m0-6L10 14"
  }));

  const EyeOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.601 2.218a.792.792 0 0 0-1.09 0 .724.724 0 0 0 0 1.05l18.173 17.514c.3.29.79.29 1.09 0a.724.724 0 0 0 0-1.05L3.601 2.218ZM21.538 12.47a10.304 10.304 0 0 1-2.245 3.7l-5.039-4.857a2.95 2.95 0 0 0-.777-1.26 3.109 3.109 0 0 0-1.307-.748l-4.223-4.07c1.055-.331 2.18-.51 3.35-.51 4.767 0 8.813 2.979 10.241 7.111a.955.955 0 0 1 0 .633Zm-13.326-.315c0-.667.233-1.31.655-1.83l-3.82-3.681C3.2 7.911 1.784 9.725 1.054 11.841a.968.968 0 0 0 0 .633c1.43 4.132 5.475 7.112 10.243 7.112a11.05 11.05 0 0 0 5.61-1.514l-3.71-3.575a3.16 3.16 0 0 1-1.9.63 3.144 3.144 0 0 1-2.18-.87 2.919 2.919 0 0 1-.904-2.102Z"
  }));

  const EyeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2.036 11.683a1.012 1.012 0 0 0 0 .639C3.426 16.493 7.362 19.5 12 19.5c4.64 0 8.577-3.01 9.963-7.183a.998.998 0 0 0 0-.639C20.573 7.507 16.638 4.5 12 4.5c-4.64 0-8.577 3.01-9.964 7.183Zm12.085 2.438A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z",
    clipRule: "evenodd"
  }));

  const FacebookSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
  }));

  const FigmaSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5ZM12 2h3.5a3.5 3.5 0 1 1 0 7H12V2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0Zm-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0Zm0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5Z"
  }));

  const FilmSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5ZM4.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5ZM3.375 15h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Zm4.125 0a.75.75 0 1 0 0 1.5h9a.75.75 0 1 0 0-1.5h-9Z",
    clipRule: "evenodd"
  }));

  const FilterSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M22 3H2l8 9.46V19l4 2v-8.54L22 3Z"
  }));

  const FireSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.406 5.562a8.252 8.252 0 0 0-3.963 3.822c-.844 1.69-1.286 3.328-.88 5.173.407 1.845 1.637 3.785 3.113 4.964a8.252 8.252 0 0 0 5.202 1.803 8.25 8.25 0 0 0 5.864-13.993 8.287 8.287 0 0 1-2.944 2.572A8.983 8.983 0 0 0 12.39 3.06a8.21 8.21 0 0 1-2.983 2.501l-.001.001Z"
  }));

  const FlagSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-6.013c.199-.08 2.275-.902 3.985-.994 1.622-.087 2.824.452 4.03.993 1.186.531 2.375 1.064 3.97 1.007 1.79-.064 4.224-.858 5.363-1.264a.966.966 0 0 0 .637-.917V4.563c0-.662-.635-1.147-1.28-.996-1.271.296-3.239.689-4.72.676-1.556-.013-2.726-.52-3.881-1.022-1.237-.537-2.457-1.067-4.12-.978-1.71.092-3.785.914-3.984.994V1.75Z"
  }));

  const FolderAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.696 2C9.416 2 10 2.584 10 3.304c0 .72.584 1.305 1.304 1.305H19a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4.609A2.609 2.609 0 0 1 4.609 2h4.087Zm4.054 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 1 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V11Z",
    clipRule: "evenodd"
  }));

  const FolderArrowDownSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.696 2C9.416 2 10 2.584 10 3.304c0 .72.584 1.305 1.304 1.305H19a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4.609A2.609 2.609 0 0 1 4.609 2h4.087Zm3.554 9a.75.75 0 0 0-1.5 0v4.153l-1.212-1.247a.75.75 0 1 0-1.076 1.045l2.5 2.572a.75.75 0 0 0 1.076 0l2.5-2.572a.75.75 0 1 0-1.076-1.045l-1.212 1.247V11Z",
    clipRule: "evenodd"
  }));

  const FolderArrowUpSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.696 2C9.416 2 10 2.584 10 3.304c0 .72.584 1.305 1.304 1.305H19a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4.609A2.609 2.609 0 0 1 4.609 2h4.087Zm2.054 15a.75.75 0 0 0 1.5 0v-4.153l1.212 1.247a.75.75 0 1 0 1.076-1.045l-2.5-2.572a.75.75 0 0 0-1.076 0l-2.5 2.572a.75.75 0 0 0 1.076 1.045l1.212-1.247V17Z",
    clipRule: "evenodd"
  }));

  const FolderMinusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.696 2C9.416 2 10 2.584 10 3.304c0 .72.584 1.305 1.304 1.305H19a3 3 0 0 1 3 3V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4.609A2.609 2.609 0 0 1 4.609 2h4.087ZM9 13.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z",
    clipRule: "evenodd"
  }));

  const FolderSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10 3.304C10 2.584 9.416 2 8.696 2H4.609A2.609 2.609 0 0 0 2 4.609V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7.609a3 3 0 0 0-3-3h-7.696c-.72 0-1.304-.584-1.304-1.305Z"
  }));

  const FontsSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M2 22 12 2l10 20M2 13.5h20"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ForwardSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062A1.125 1.125 0 0 1 3 16.81V8.688Zm9.75 0c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062a1.124 1.124 0 0 1-1.683-.977V8.688Z"
  }));

  const GaleryListSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 4a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 4a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0V4Zm7 1a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9 5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V5Zm3 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-7Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 11a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-7Z"
  }));

  const GearSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M10.704 3c-.55 0-1.02.398-1.11.94L9.38 5.221c-.062.374-.312.686-.644.869a6.001 6.001 0 0 0-.22.128c-.325.196-.72.257-1.076.124l-1.216-.456a1.125 1.125 0 0 0-1.37.491L3.557 8.624a1.125 1.125 0 0 0 .26 1.43l1.004.828c.292.24.437.612.43.99a5.42 5.42 0 0 0 0 .255c.007.379-.138.752-.43.992l-1.004.827a1.125 1.125 0 0 0-.26 1.431l1.297 2.247a1.125 1.125 0 0 0 1.369.49l1.217-.456c.356-.133.751-.072 1.076.124.072.044.146.086.22.127.332.184.582.496.644.87l.213 1.281c.09.542.56.94 1.11.94h2.594c.55 0 1.02-.398 1.11-.941l.213-1.28c.063-.374.313-.686.644-.869.074-.041.148-.084.22-.128.326-.196.721-.257 1.076-.124l1.217.456a1.125 1.125 0 0 0 1.369-.491l1.298-2.247a1.126 1.126 0 0 0-.26-1.43l-1.005-.828c-.292-.24-.437-.612-.43-.99a5.42 5.42 0 0 0 0-.255c-.007-.379.138-.752.431-.992l1.003-.827a1.125 1.125 0 0 0 .26-1.431l-1.296-2.247a1.125 1.125 0 0 0-1.37-.49l-1.217.456c-.355.133-.751.072-1.075-.124a5.427 5.427 0 0 0-.22-.127c-.332-.184-.582-.496-.645-.87l-.213-1.281c-.09-.542-.56-.94-1.11-.94h-2.593Zm3.417 11.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z",
    clipRule: "evenodd"
  }));

  const GifSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm9 4.5a.75.75 0 1 0-1.5 0v7.5a.75.75 0 1 0 1.5 0v-7.5Zm1.5 0a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5H16.5v2.25H18a.75.75 0 1 1 0 1.5h-1.5v3a.75.75 0 1 1-1.5 0v-7.5ZM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 1 0 1.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 0 0 .136-.431V12a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 1 0 0 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22Z",
    clipRule: "evenodd"
  }));

  const GithubSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.75 18.157v3.87h-7v-1.75h-1.5c-.118 0-.205.004-.305.01l-.166.007a3.628 3.628 0 0 1-.622-.023c-.68-.085-1.165-.201-1.81-.611-.492-.314-.762-.648-1.018-.964l-.153-.187a3.77 3.77 0 0 1-.516-.85 9.268 9.268 0 0 0-.045-.093c-.107-.218-.182-.336-.325-.447a2.547 2.547 0 0 0-.472-.257 5.565 5.565 0 0 0-.299-.121l-.016-.006-.003-.001A.75.75 0 0 1 3 15.32l-.25.707.25-.707h.002l.003.001.007.003.027.01a6.537 6.537 0 0 1 .385.156c.217.096.538.251.787.445.412.32.61.684.752.972l.061.128c.105.218.172.356.3.51l.208.25c.237.29.347.425.62.599.398.253.646.32 1.191.389.14.017.249.018.376.012.031 0 .068-.003.109-.005.115-.005.264-.013.422-.013h1.5v-.62a3.37 3.37 0 0 1 .94-2.58c-3.14-.39-6.44-1.58-6.44-7a5.44 5.44 0 0 1 1.5-3.78 5.07 5.07 0 0 1 .09-3.77s1.18-.35 3.91 1.48a13.38 13.38 0 0 1 7 0c2.73-1.83 3.91-1.48 3.91-1.48a5.07 5.07 0 0 1 .09 3.77 5.44 5.44 0 0 1 1.5 3.75c0 5.46-3.3 6.65-6.44 7a3.37 3.37 0 0 1 .94 2.61Z"
  }));

  const GlobeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.93 2A10.003 10.003 0 0 0 2 11.196h5.255A16.05 16.05 0 0 1 10.93 2ZM7.255 12.696H2a10.003 10.003 0 0 0 8.93 9.197 16.05 16.05 0 0 1-3.675-9.197Zm5.759 9.197a10.003 10.003 0 0 0 8.93-9.197H16.69a16.05 16.05 0 0 1-3.676 9.197Zm2.172-9.197a14.55 14.55 0 0 1-3.214 8.102 14.55 14.55 0 0 1-3.214-8.102h6.428Zm0-1.5H8.758a14.55 14.55 0 0 1 3.214-8.1 14.55 14.55 0 0 1 3.214 8.1Zm1.504 0h5.255A10.003 10.003 0 0 0 13.014 2a16.05 16.05 0 0 1 3.676 9.196Z"
  }));

  const GridSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 3,
    d: "M8.5 3v18m7-18v18m6-5h-19m0-8h19M3 22h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const GridSquareAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2 4.917A2.917 2.917 0 0 1 4.917 2h2.5a2.917 2.917 0 0 1 2.916 2.917v2.5a2.917 2.917 0 0 1-2.916 2.916h-2.5A2.917 2.917 0 0 1 2 7.417v-2.5Zm11.667 0A2.917 2.917 0 0 1 16.583 2h2.5A2.917 2.917 0 0 1 22 4.917v2.5a2.917 2.917 0 0 1-2.917 2.916h-2.5a2.917 2.917 0 0 1-2.916-2.916v-2.5Zm-8.75 8.75A2.917 2.917 0 0 0 2 16.583v2.5A2.917 2.917 0 0 0 4.917 22h2.5a2.917 2.917 0 0 0 2.916-2.917v-2.5a2.917 2.917 0 0 0-2.916-2.916h-2.5ZM18.75 14a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25V20a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V14Z",
    clipRule: "evenodd"
  }));

  const GridSquareMinusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 4.917A2.917 2.917 0 0 1 4.917 2h2.5a2.917 2.917 0 0 1 2.916 2.917v2.5a2.917 2.917 0 0 1-2.916 2.916h-2.5A2.917 2.917 0 0 1 2 7.417v-2.5Zm11.667 0A2.917 2.917 0 0 1 16.583 2h2.5A2.917 2.917 0 0 1 22 4.917v2.5a2.917 2.917 0 0 1-2.917 2.916h-2.5a2.917 2.917 0 0 1-2.916-2.916v-2.5Zm-8.75 8.75A2.917 2.917 0 0 0 2 16.583v2.5A2.917 2.917 0 0 0 4.917 22h2.5a2.917 2.917 0 0 0 2.916-2.917v-2.5a2.917 2.917 0 0 0-2.916-2.916h-2.5ZM15 17.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
  }));

  const GridSquareSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 4.917A2.917 2.917 0 0 1 4.917 2h2.5a2.917 2.917 0 0 1 2.916 2.917v2.5a2.917 2.917 0 0 1-2.916 2.916h-2.5A2.917 2.917 0 0 1 2 7.417v-2.5Zm11.667 0A2.917 2.917 0 0 1 16.583 2h2.5A2.917 2.917 0 0 1 22 4.917v2.5a2.917 2.917 0 0 1-2.917 2.916h-2.5a2.917 2.917 0 0 1-2.916-2.916v-2.5ZM2 16.583a2.917 2.917 0 0 1 2.917-2.916h2.5a2.917 2.917 0 0 1 2.916 2.916v2.5A2.917 2.917 0 0 1 7.417 22h-2.5A2.917 2.917 0 0 1 2 19.083v-2.5Zm11.667 0a2.917 2.917 0 0 1 2.916-2.916h2.5A2.917 2.917 0 0 1 22 16.583v2.5A2.917 2.917 0 0 1 19.083 22h-2.5a2.917 2.917 0 0 1-2.916-2.917v-2.5Z"
  }));

  const HandLeftSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.752 2.27c0-.702.566-1.27 1.263-1.27s1.262.568 1.262 1.27v9.31a.42.42 0 0 0 .842 0V5.653c0-.701.565-1.27 1.262-1.27.698 0 1.263.569 1.263 1.27v5.925a.42.42 0 1 0 .842 0V7.346c0-.7.565-1.27 1.262-1.27.697 0 1.262.57 1.262 1.27v9.73c0 3.272-2.637 5.924-5.891 5.924h-.842a5.888 5.888 0 0 1-5.25-3.234l-5.721-6.854c-.448-.537-.403-1.461.13-1.912.535-.45 1.553-.537 2 0l2.95 3.084V4.808c0-.701.565-1.27 1.262-1.27.697 0 1.263.569 1.263 1.27v6.771a.42.42 0 1 0 .842 0V2.27Z"
  }));

  const HandRightSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.248 2.27c0-.702-.566-1.27-1.263-1.27s-1.262.568-1.262 1.27v9.31a.42.42 0 0 1-.842 0V5.653c0-.701-.565-1.27-1.262-1.27-.698 0-1.263.569-1.263 1.27v5.925a.42.42 0 0 1-.842 0V7.346c0-.7-.565-1.27-1.262-1.27-.697 0-1.262.57-1.262 1.27v9.73C2.99 20.349 5.627 23 8.88 23h.842a5.888 5.888 0 0 0 5.25-3.234l5.721-6.854c.448-.537.403-1.461-.13-1.912-.535-.45-1.553-.537-2 0l-2.95 3.084V4.808c0-.701-.565-1.27-1.262-1.27-.697 0-1.263.569-1.263 1.27v6.771a.42.42 0 0 1-.842 0V2.27Z"
  }));

  const HardDriveSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5 2a3 3 0 0 0-3 3v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3H5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M19 22a3 3 0 0 0 3-3v-1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h14Zm-5-2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z",
    clipRule: "evenodd"
  }));

  const HashtagSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
  }));

  const HeadphoneSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 12.196C2 6.565 6.565 2 12.196 2c5.63 0 10.195 4.565 10.195 10.196v4.77a1.5 1.5 0 0 1-3 0v-4.77a7.196 7.196 0 1 0-14.391 0v4.77a1.5 1.5 0 0 1-3 0v-4.77Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.24 18.283a3 3 0 0 1 3-3h.347a1 1 0 0 1 1 1v4.734a1 1 0 0 1-1 1h-.348a3 3 0 0 1-3-3v-.734Zm10.912-3a3 3 0 0 1 3 3v.734a3 3 0 0 1-3 3h-.348a1 1 0 0 1-1-1v-4.734a1 1 0 0 1 1-1h.348Z"
  }));

  const HeadPieceSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M11.09 6.762c0 2.63-2.034 4.762-4.545 4.762a4.392 4.392 0 0 1-2.727-.952v10.476c0 .526-.407.952-.909.952S2 21.574 2 21.048V6.762C2 4.132 4.035 2 6.545 2s4.546 2.132 4.546 4.762Zm-2.272-1.19c.377 0 .682.32.682.714v1.428c0 .395-.305.715-.682.715-.376 0-.682-.32-.682-.715V6.286c0-.395.306-.715.682-.715Zm4.092 1.19c0 2.63 2.034 4.762 4.544 4.762a4.392 4.392 0 0 0 2.728-.952v10.476c0 .526.407.952.909.952s.909-.426.909-.952V6.762C22 4.132 19.965 2 17.454 2c-2.51 0-4.545 2.132-4.545 4.762Zm2.272-1.19c-.377 0-.682.32-.682.714v1.428c0 .395.305.715.682.715.376 0 .682-.32.682-.715V6.286c0-.395-.306-.715-.682-.715Z",
    clipRule: "evenodd"
  }));

  const HeartOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.53 2.211a.77.77 0 0 0-1.06 0 .703.703 0 0 0 0 1.02l16.25 15.647a.77.77 0 0 0 1.06 0 .703.703 0 0 0 0-1.02L4.53 2.21ZM19.346 5.5c2.26 2.355 2.174 6.198-.189 8.44L7.997 3.723a5.497 5.497 0 0 1 4.105 1.173c2.182-1.647 5.263-1.46 7.244.604ZM11.715 21l-7.03-7.224c-2.029-2.085-2.227-5.369-.587-7.687L15.77 17.152 11.715 21Z"
  }));

  const HeartSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.66 4.795c-2.224 2.405-2.211 6.307.026 8.696L11.721 21l7.448-7.34c2.365-2.33 2.45-6.324.19-8.771-1.983-2.144-5.067-2.34-7.25-.628-2.208-1.834-5.405-1.678-7.45.534Z"
  }));

  const HomeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M6.067 4.029A7 7 0 0 0 2 10.385v3.905a7 7 0 0 0 7 7h6a7 7 0 0 0 7-7v-3.905a7 7 0 0 0-4.067-6.356l-3-1.385a7 7 0 0 0-5.866 0l-3 1.385Zm6.683 9.261a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0v-5Z",
    clipRule: "evenodd"
  }));

  const ImageSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.25 2A6.25 6.25 0 0 0 2 8.25v7.5A6.25 6.25 0 0 0 8.25 22h7.5A6.25 6.25 0 0 0 22 15.75v-7.5A6.25 6.25 0 0 0 15.75 2h-7.5Zm3.937 6.458a1.25 1.25 0 0 1 2.165 0l3.608 6.25a1.25 1.25 0 0 1-1.082 1.875H7.002a1.25 1.25 0 0 1-1.083-1.875l1.805-3.125a1.25 1.25 0 0 1 2.165 0c.11.19.384.19.493 0l1.805-3.125Z",
    clipRule: "evenodd"
  }));

  const ImageTagSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M7 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7Zm3.762 7.5c0 .828-.64 1.5-1.428 1.5-.79 0-1.43-.672-1.43-1.5S8.545 8 9.335 8c.788 0 1.428.672 1.428 1.5Zm4.686.094a1 1 0 0 0-1.753 0l-1.738 3.16a2.492 2.492 0 0 0-1.79-.754H8.5a2.5 2.5 0 1 0 0 5h1.667a2.5 2.5 0 0 0 2.292-1.5h4.546a1 1 0 0 0 .876-1.482l-2.433-4.424Z",
    clipRule: "evenodd"
  }));

  const InboxSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2.376 11.25 5.45 5.11A2 2 0 0 1 7.24 4h9.52a2 2 0 0 1 1.79 1.11l3.075 6.14H16a.75.75 0 0 0-.624.334l-1.777 2.666H10.4l-1.777-2.666A.75.75 0 0 0 8 11.25H2.376Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 12.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.25h-5.599l-1.777 2.666a.75.75 0 0 1-.624.334h-4a.75.75 0 0 1-.624-.334L7.599 12.75H2Z"
  }));

  const InformationCircleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#000",
    fillRule: "evenodd",
    d: "M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));

  const InstagramSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12.52 8.742a3.25 3.25 0 1 0-.954 6.429 3.25 3.25 0 0 0 .954-6.43Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5ZM9.856 7.74a4.75 4.75 0 1 1 4.375 8.433 4.75 4.75 0 0 1-4.375-8.432ZM17.5 5.75a.75.75 0 0 0 0 1.5h.01a.75.75 0 0 0 0-1.5h-.01Z",
    clipRule: "evenodd"
  }));

  const ItalicSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M19 4h-9m4 16H5M15 4 9 20"
  }));

  const LanguageSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.473 48.473 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A47.63 47.63 0 0 1 15 5.621m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
  }));

  const LayerSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m2 9.391 9.524 3.913L22 9.391M2 13.74l9.524 3.913L22 13.74m0 4.348L11.524 22 2 18.087M2 5.478 11.524 2 22 5.478 11.524 8.957 2 5.478Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const LinkSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 1 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 1 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ListCircleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));

  const ListReactangleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 1 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
  }));

  const LockOpenSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 1 1-1.5 0V6.75a3.75 3.75 0 0 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z"
  }));

  const LockSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 0 0-7.5 0v3h7.5Z",
    clipRule: "evenodd"
  }));

  const MagnificationAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0ZM9.75 6.5a.75.75 0 0 0-1.5 0v1.75H6.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V9.75h1.75a.75.75 0 0 0 0-1.5H9.75V6.5Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m16.53 15.47 5.657 5.656a.75.75 0 0 1-1.06 1.061L15.47 16.53a.75.75 0 1 1 1.06-1.06Z"
  }));

  const MagnificationMinusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Zm-9.5-.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m16.53 15.47 5.657 5.656a.75.75 0 0 1-1.06 1.061L15.47 16.53a.75.75 0 1 1 1.06-1.06Z"
  }));

  const MagnificationSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9 16A7 7 0 1 0 9 2a7 7 0 0 0 0 14Zm13.187 5.127L16.53 15.47a.75.75 0 1 0-1.06 1.06l5.656 5.657a.75.75 0 0 0 1.061-1.06Z"
  }));

  const MappinSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 23s10-4.82 10-13.2c0-2.334-1.054-4.572-2.929-6.223C17.196 1.927 14.652 1 12 1s-5.196.927-7.071 2.577S2 7.467 2 9.8C2 18.18 12 23 12 23Zm2.828-10.711C15.578 11.629 16 10.734 16 9.8c0-.934-.421-1.829-1.172-2.489-.75-.66-1.767-1.031-2.828-1.031-1.06 0-2.078.37-2.828 1.031C8.422 7.971 8 8.866 8 9.8c0 .934.421 1.829 1.172 2.489.75.66 1.767 1.031 2.828 1.031 1.06 0 2.078-.37 2.828-1.031Z",
    clipRule: "evenodd"
  }));

  const MapSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.874 1.874 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437V2.58Z",
    clipRule: "evenodd"
  }));

  const MessageCloseSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 6.06V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6.06a.751.751 0 0 1-.1.074L12 12.387 2.1 6.134A.755.755 0 0 1 2 6.06Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.887 5H3.113L12 10.613 20.887 5Z"
  }));

  const MessageOpenSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2.022 8.393A1 1 0 0 0 2 8.6v12.223a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8.57a.996.996 0 0 0-.017-.181L12 13.382l-9.978-4.99Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2.702 7.615 12 12.264l9.336-4.668-8.315-5.433a1 1 0 0 0-1.056-.024L2.702 7.615Z"
  }));

  const MessageTextSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.375 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM2 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.288 48.288 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.395 48.395 0 0 0 11.75 3c-2.392 0-4.744.175-7.043.513C3.123 3.746 2 5.14 2 6.741v6.019Z"
  }));

  const MicOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.109 12.733c0 .382-.034.76-.1 1.132l-1.386-1.369v-1.23a.73.73 0 0 1 .217-.518.748.748 0 0 1 1.051 0c.14.138.218.324.218.519v1.466Zm-2.973-8.066v6.362L6.811 3.8c.16-.648.497-1.247.983-1.726A3.74 3.74 0 0 1 10.421 1c.986 0 1.93.386 2.627 1.074a3.642 3.642 0 0 1 1.088 2.593Zm-.542 9.975L6.706 7.844v4.89c0 .972.391 1.904 1.088 2.592a3.74 3.74 0 0 0 2.627 1.074 3.74 3.74 0 0 0 2.627-1.074c.21-.208.393-.438.546-.684Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m15.729 16.75-1.063-1.05a5.139 5.139 0 0 1-.567.663 5.237 5.237 0 0 1-3.678 1.504 5.236 5.236 0 0 1-3.678-1.504 5.1 5.1 0 0 1-1.523-3.63v-1.466a.729.729 0 0 0-.218-.519.748.748 0 0 0-1.05 0 .729.729 0 0 0-.218.519v1.466c0 1.624.606 3.19 1.703 4.4a6.718 6.718 0 0 0 4.241 2.16v2.24H6.706a.748.748 0 0 0-.525.215.729.729 0 0 0 0 1.037.745.745 0 0 0 .525.215h7.43a.748.748 0 0 0 .526-.215.728.728 0 0 0 0-1.037.748.748 0 0 0-.526-.215h-2.972v-2.24a6.718 6.718 0 0 0 4.565-2.544ZM3.268 1.46a.75.75 0 0 0-1.05 0 .727.727 0 0 0 0 1.036l17.514 17.285a.75.75 0 0 0 1.05 0 .727.727 0 0 0 0-1.037L3.268 1.46Z"
  }));

  const MicSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.947 2.074a3.695 3.695 0 0 0-1.058 2.593v8.066c0 .973.38 1.905 1.058 2.593A3.584 3.584 0 0 0 11.5 16.4a3.58 3.58 0 0 0 2.553-1.074 3.695 3.695 0 0 0 1.058-2.593V4.667c0-.973-.38-1.905-1.058-2.593A3.584 3.584 0 0 0 11.5 1a3.58 3.58 0 0 0-2.553 1.074Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.233 10.748a.717.717 0 0 0-1.021 0 .74.74 0 0 0-.212.519v1.466c0 1.624.59 3.19 1.655 4.4a6.469 6.469 0 0 0 4.123 2.16v2.24h-2.89a.717.717 0 0 0-.51.215.74.74 0 0 0 0 1.037c.136.138.32.215.51.215h7.223a.717.717 0 0 0 .51-.215.74.74 0 0 0 0-1.037.717.717 0 0 0-.51-.215h-2.889v-2.24a6.469 6.469 0 0 0 4.123-2.16 6.659 6.659 0 0 0 1.655-4.4v-1.466a.74.74 0 0 0-.212-.519.717.717 0 0 0-1.02 0 .739.739 0 0 0-.212.519v1.466a5.173 5.173 0 0 1-1.481 3.63 5.017 5.017 0 0 1-3.575 1.504 5.018 5.018 0 0 1-3.575-1.504 5.173 5.173 0 0 1-1.48-3.63v-1.466a.74.74 0 0 0-.212-.519Z"
  }));

  const MinusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4 12.5c0-.398.079-.78.22-1.06.14-.282.331-.44.53-.44h15c.199 0 .39.158.53.44.141.28.22.662.22 1.06s-.079.78-.22 1.06c-.14.282-.331.44-.53.44h-15c-.199 0-.39-.158-.53-.44-.141-.28-.22-.662-.22-1.06Z",
    clipRule: "evenodd"
  }));

  const MoneyDollarSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));

  const MoneyRupeeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 0 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));

  const MoreHorizontalSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm8 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5.5 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
  }));

  const MoreVerticleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.5 18a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.5 18a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm0-8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.5 10a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM14 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
  }));

  const MusicSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M22 3.017c0-.32-.153-.62-.413-.813a1.049 1.049 0 0 0-.91-.164L7.575 5.77a1.02 1.02 0 0 0-.746.977v8.756a3.488 3.488 0 0 0-1.38-.282C3.544 15.22 2 16.738 2 18.61S3.544 22 5.448 22c1.905 0 3.449-1.518 3.449-3.39V7.51L19.93 4.37v7.743a3.488 3.488 0 0 0-1.38-.282c-1.904 0-3.448 1.517-3.448 3.39 0 1.872 1.544 3.39 3.449 3.39 1.904 0 3.448-1.518 3.448-3.39V3.016Z"
  }));

  const NavigationSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m3 11 19-9-9 19-2-8-8-2Z"
  }));

  const PaperClipSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m19.5 12-8.21 7.194a4.435 4.435 0 0 1-6.137-.28v0a4.435 4.435 0 0 1 .258-6.363l9.622-8.599a3.23 3.23 0 0 1 4.34.031v0a3.23 3.23 0 0 1-.039 4.79l-9.44 8.404a1.88 1.88 0 0 1-2.625-.122v0a1.88 1.88 0 0 1 .172-2.727L15.044 8"
  }));

  const PauseSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M6 2v19.5m12 0V2"
  }));

  const PencilSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18.665 4.853c.438-.625.242-1.517-.436-1.993-.679-.475-1.584-.353-2.022.272l-1.32 1.886 2.457 1.721 1.32-1.886Zm-1.849 2.641-8.719 12.45a1.343 1.343 0 0 1-1.125.562l-.85.424c-.345.172-.776-.13-.732-.513l.107-.943a1.347 1.347 0 0 1 .143-1.25l8.718-12.451 2.458 1.72Z"
  }));

  const PencilSquareSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.875 1.5a2.625 2.625 0 0 1 1.856 4.48l-1.157 1.158-3.712-3.712 1.157-1.157a2.625 2.625 0 0 1 1.856-.769Zm-4.074 2.987 3.712 3.712-8.4 8.4a5.248 5.248 0 0 1-2.214 1.32l-2.685.8a.75.75 0 0 1-.933-.933l.8-2.685a5.25 5.25 0 0 1 1.32-2.214l8.4-8.4Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.129 6.129a3 3 0 0 1 2.121-.88h5.25a.75.75 0 1 1 0 1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V13.5a.75.75 0 0 1 1.5 0v5.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 .879-2.12Z"
  }));

  const PhoneAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M1.879 1.879A3 3 0 0 0 1 4v2.25C1 14.948 8.052 22 16.75 22H19a3 3 0 0 0 3-3v-1.371c0-.861-.586-1.611-1.42-1.82l-4.423-1.105a1.875 1.875 0 0 0-1.955.694l-.97 1.293c-.102.135-.249.164-.352.126a11.285 11.285 0 0 1-6.697-6.697c-.038-.103-.009-.251.126-.352l1.293-.97a1.875 1.875 0 0 0 .694-1.955L7.191 2.42A1.876 1.876 0 0 0 5.372 1H4a3 3 0 0 0-2.121.879Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15.75 5a.75.75 0 0 0-1.5 0v2.25H12a.75.75 0 0 0 0 1.5h2.25V11a.75.75 0 0 0 1.5 0V8.75H18a.75.75 0 0 0 0-1.5h-2.25V5Z"
  }));

  const PhoneCrossSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M1.879 1.879A3 3 0 0 0 1 4v2.25C1 14.948 8.052 22 16.75 22H19a3 3 0 0 0 3-3v-1.371c0-.861-.586-1.611-1.42-1.82l-4.423-1.105a1.875 1.875 0 0 0-1.955.694l-.97 1.293c-.102.135-.249.164-.352.126a11.285 11.285 0 0 1-6.697-6.697c-.038-.103-.009-.251.126-.352l1.293-.97a1.875 1.875 0 0 0 .694-1.955L7.191 2.42A1.876 1.876 0 0 0 5.372 1H4a3 3 0 0 0-2.121.879Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.652 4.591a.75.75 0 0 0-1.061 1.06l1.591 1.592-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.592-1.59 1.59 1.59a.75.75 0 1 0 1.061-1.06l-1.59-1.591 1.59-1.591a.75.75 0 1 0-1.06-1.061l-1.591 1.59-1.591-1.59Z"
  }));

  const PhoneHangSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M22.637 10.182a2.571 2.571 0 0 1 0 3.636l-.831.832a1.608 1.608 0 0 1-1.963.242l-3.35-2.011a1.607 1.607 0 0 1-.765-1.606l.196-1.371c.02-.144-.052-.25-.137-.29a9.673 9.673 0 0 0-8.118 0c-.086.04-.157.146-.137.29l.196 1.371a1.607 1.607 0 0 1-.765 1.606l-3.35 2.01a1.608 1.608 0 0 1-1.964-.242l-.83-.83a2.572 2.572 0 0 1 0-3.637l1.363-1.364c5.272-5.272 13.82-5.272 19.092 0l1.363 1.364Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M0 0h24v24H0z"
  }))));

  const PhoneSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
    clipRule: "evenodd"
  }));

  const PlayNextSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.5 2.75a.75.75 0 0 0-1.5 0v7.901L6.667 4.417A1.125 1.125 0 0 0 5 5.403v12.695a1.125 1.125 0 0 0 1.667.985L18 12.85v7.9a.75.75 0 0 0 1.5 0v-18Z"
  }));

  const PlayPreviousSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5 20.75a.75.75 0 0 0 1.5 0v-7.901l11.333 6.234c.75.412 1.667-.13 1.667-.986V5.402a1.125 1.125 0 0 0-1.667-.985L6.5 10.65v-7.9a.75.75 0 0 0-1.5 0v18Z"
  }));

  const PlaySolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643L4.5 5.653Z",
    clipRule: "evenodd"
  }));

  const PlusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 3,
    d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 1 1 0 1.5h-6.75v6.75a.75.75 0 1 1-1.5 0v-6.75H4.5a.75.75 0 1 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));

  const PowerSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 3,
    d: "M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const QrCodeSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 5.125C2 3.399 3.4 2 5.125 2h2.083c1.726 0 3.125 1.4 3.125 3.125v2.083a3.125 3.125 0 0 1-3.125 3.125H5.125A3.125 3.125 0 0 1 2 7.208V5.125Zm0 11.667c0-1.726 1.4-3.125 3.125-3.125h2.083a3.125 3.125 0 0 1 3.125 3.125v2.083A3.125 3.125 0 0 1 7.208 22H5.125A3.125 3.125 0 0 1 2 18.875v-2.083ZM13.667 5.125A3.125 3.125 0 0 1 16.792 2h2.083C20.601 2 22 3.4 22 5.125v2.083c0 1.726-1.4 3.125-3.125 3.125h-2.083a3.125 3.125 0 0 1-3.125-3.125V5.125Zm0 9.792c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Zm0 5c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Zm5-5c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Zm0 5c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Z"
  }));

  const QuestionMarkSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 1 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 1 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502a2.28 2.28 0 0 0 .503-.331c.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));

  const RadioSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.46 5.46A.75.75 0 1 0 4.4 4.4a10.75 10.75 0 0 0 0 15.2.75.75 0 0 0 1.06-1.06 9.25 9.25 0 0 1 0-13.08ZM19.6 4.4a.75.75 0 1 0-1.06 1.06 9.25 9.25 0 0 1 0 13.08.75.75 0 0 0 1.06 1.06 10.75 10.75 0 0 0 0-15.2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.29 8.28a.75.75 0 0 0-1.06-1.06 6.75 6.75 0 0 0 0 9.55.75.75 0 0 0 1.06-1.06 5.25 5.25 0 0 1 0-7.43Zm8.48-1.05a.75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 1 0 7.43.75.75 0 0 0 1.06 1.06 6.75 6.75 0 0 0 0-9.55ZM14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
  }));

  const RecycleBinSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M5 1a1 1 0 0 0-.999 1.048l.814 17.095A3 3 0 0 0 7.812 22h8.279a3 3 0 0 0 2.996-2.857l.814-17.095A1 1 0 0 0 18.903 1H5Zm8.517 6.453c-.645-1.29-2.486-1.29-3.131 0l-.772 1.545a.75.75 0 0 0 1.341.67l.773-1.544a.25.25 0 0 1 .447 0l.772 1.545a.75.75 0 0 0 1.342-.671l-.772-1.545Zm2.438 4.878a.75.75 0 1 0-1.341.671l.943 1.886a.25.25 0 0 1-.224.362h-.882a.75.75 0 0 0 0 1.5h.882a1.75 1.75 0 0 0 1.565-2.533l-.943-1.886Zm-6.666.671a.75.75 0 0 0-1.342-.67l-.943 1.885A1.75 1.75 0 0 0 8.57 16.75h.882a.75.75 0 0 0 0-1.5H8.57a.25.25 0 0 1-.223-.362l.943-1.886Z",
    clipRule: "evenodd"
  }));

  const RecycleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "m5.333 15.333-2.61 5.22A1 1 0 0 0 3.619 22H7m8.333-13.333-2.439-4.878a1 1 0 0 0-1.788 0l-2.44 4.878m10 6.666L20 18l1.276 2.553A1 1 0 0 1 20.382 22H17"
  }));

  const ScannerSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M7 2H2v5m0 10v5h5m10 0h5v-5m0-10V2h-5m-7 5v10H6.5V7H10Zm8 0h-3.5v10H18V7Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const SendSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.556 3.107c-.862-.43-1.837.517-1.48 1.412.712 1.785 1.509 4.153 1.72 6.235H9.85a.5.5 0 0 1 0 1h-5c0 2.288-.945 5.157-1.774 7.234-.357.895.618 1.843 1.48 1.413l15.505-7.753a1 1 0 0 0 0-1.788L4.556 3.107Z"
  }));

  const ServerSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 13a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H5Zm9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));

  const ShareSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z",
    clipRule: "evenodd"
  }));

  const SheildOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.54 2.229a.75.75 0 1 0-1.08 1.042l16.672 17.264a.75.75 0 1 0 1.08-1.042L4.54 2.23ZM22 7.846v3.104c0 1.963-.47 3.828-1.309 5.475L9.196 3.75l1.554-.723a2.96 2.96 0 0 1 2.5 0l8.08 3.76c.408.19.67.604.67 1.06Zm-20 0c0-.455.262-.87.67-1.06l1.83-.85L18.186 19.75a11.648 11.648 0 0 1-6.186 3c-5.75-.881-10-5.897-10-11.8V7.846Z"
  }));

  const SheildSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2.67 6.037c-.408.19-.67.604-.67 1.06V10.2C2 16.103 6.25 21.12 12 22c5.75-.881 10-5.897 10-11.8V7.096c0-.455-.262-.87-.67-1.06l-8.08-3.759a2.96 2.96 0 0 0-2.5 0l-8.08 3.76Z",
    clipRule: "evenodd"
  }));

  const SignalOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.316 16.345A5.231 5.231 0 0 1 12 14.831m-6.842-1.619a9.65 9.65 0 0 1 3.158-2.092m10.526 2.092a9.65 9.65 0 0 0-3.79-2.324M2 10.078a14.125 14.125 0 0 1 3.676-2.632M22 10.08c-3.033-3.01-7.101-4.366-11.068-4.07M5.676 4l13.166 15.478m-6.316 0L12 20l-.526-.522a.748.748 0 0 1 1.052 0Z"
  }));

  const SignalSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M1.218 8.393c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.06l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.978-13.053-4.978-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06ZM4.4 11.575c4.1-4.1 10.75-4.1 14.85 0a.75.75 0 0 1 0 1.06l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a5.998 5.998 0 0 1 8.486 0 .749.749 0 0 1 0 1.06l-.53.53a.75.75 0 0 1-1.06 0 3.749 3.749 0 0 0-5.305 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.502 1.502 0 0 1 2.122 0 .75.75 0 0 1 0 1.06l-.53.53a.752.752 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06h-.002Z",
    clipRule: "evenodd"
  }));

  const SkewerSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.833 2A.833.833 0 0 0 6 2.833c0 1.486.778 2.79 1.948 3.528l-.86 6.017A5.001 5.001 0 0 0 4 17a1 1 0 0 0 1 1h6.25v3.5a.75.75 0 0 0 1.5 0V18H19a1 1 0 0 0 1-1 5.001 5.001 0 0 0-3.089-4.622l-.86-6.017A4.164 4.164 0 0 0 18 2.833.833.833 0 0 0 17.167 2H6.833Z"
  }));

  const SoundOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.477 2.215A.734.734 0 1 0 3.44 3.254l17.308 17.31a.734.734 0 1 0 1.038-1.039L4.477 2.215Zm17.104 10.152c0 1.612-.485 3.17-1.366 4.43l-.81-.809a6.474 6.474 0 0 0 1.09-3.62c0-1.6-.573-3.135-1.594-4.266-1.02-1.13-2.404-1.766-3.847-1.766V5.13c1.731 0 3.391.763 4.616 2.12 1.224 1.357 1.911 3.197 1.911 5.116Zm-3.525 6.426-.874-.875c-.667.314-1.39.48-2.128.48v1.205a6.018 6.018 0 0 0 3.002-.81Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M19.074 14.213a4.945 4.945 0 0 1-.482.962l-.674-.675c.127-.21.236-.434.324-.67a4.199 4.199 0 0 0 0-2.927 3.876 3.876 0 0 0-.748-1.24 3.45 3.45 0 0 0-1.12-.83 3.16 3.16 0 0 0-1.32-.29v-1c.572 0 1.138.125 1.665.367a4.35 4.35 0 0 1 1.412 1.046c.404.448.725.98.943 1.565.22.585.332 1.213.332 1.846 0 .634-.113 1.26-.332 1.846Zm-3.642 1.956.832.832c-.392.126-.8.19-1.21.19v-1c.127 0 .253-.007.378-.022ZM14.184 3.758v7.008l-4.79-4.79c1.066-.898 2.086-1.962 2.908-2.892.626-.707 1.882-.27 1.882.674Zm0 11.162-7.29-7.292a4.758 4.758 0 0 1-.663.237c-.747.202-1.693.22-2.502.179C2.821 7.998 2 8.695 2 9.605v5.524c0 .91.82 1.607 1.73 1.562.808-.04 1.754-.023 2.5.178 2.013.544 4.434 2.93 6.072 4.782.626.707 1.882.27 1.882-.675V14.92Z"
  }));

  const SoundSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 8.776c0-.897.838-1.585 1.766-1.54.826.04 1.792.023 2.555-.176 2.055-.537 4.528-2.889 6.202-4.715.638-.698 1.921-.267 1.921.665v16.98c0 .932-1.283 1.363-1.921.665-1.674-1.827-4.147-4.178-6.202-4.715-.763-.199-1.73-.216-2.555-.176C2.838 15.809 2 15.12 2 14.224V8.776Zm13.333-2.033c.584 0 1.162.123 1.701.362.54.239 1.03.59 1.442 1.031.413.442.74.966.963 1.543a5.05 5.05 0 0 1 0 3.642 4.794 4.794 0 0 1-.963 1.543 4.439 4.439 0 0 1-1.442 1.031 4.193 4.193 0 0 1-1.7.362v-.985c.462 0 .92-.098 1.348-.287.427-.19.816-.468 1.143-.818.327-.35.587-.766.764-1.224a4.003 4.003 0 0 0 0-2.886 3.8 3.8 0 0 0-.764-1.224 3.518 3.518 0 0 0-1.143-.818 3.324 3.324 0 0 0-1.349-.287v-.985Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M20.047 6.454c-1.25-1.338-2.945-2.09-4.714-2.09v1.188c1.474 0 2.888.626 3.93 1.742 1.042 1.115 1.627 2.628 1.627 4.206 0 1.578-.585 3.09-1.627 4.206-1.042 1.116-2.456 1.742-3.93 1.742v1.188c1.769 0 3.464-.752 4.714-2.09C21.297 15.208 22 13.393 22 11.5c0-1.893-.702-3.708-1.953-5.046Z"
  }));

  const SparkleSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "m18.9 2 .732 2.379H22l-1.917 1.47.732 2.38L18.9 6.757l-1.917 1.47.732-2.379-1.917-1.47h2.37L18.9 2ZM7.622 5.376a.2.2 0 0 1 .382 0l1.23 3.995a.2.2 0 0 0 .191.141h4.001a.2.2 0 0 1 .122.36l-3.255 2.496a.2.2 0 0 0-.07.218l1.24 4.026a.2.2 0 0 1-.314.218l-3.214-2.466a.2.2 0 0 0-.243 0L4.477 16.83a.2.2 0 0 1-.313-.218l1.24-4.026a.2.2 0 0 0-.07-.218L2.079 9.871a.2.2 0 0 1 .121-.359h4.001a.2.2 0 0 0 .192-.14l1.23-3.996Zm12.01 12.774-.733-2.378-.732 2.379h-2.369l1.917 1.47L16.983 22l1.916-1.47L20.817 22l-.732-2.379 1.917-1.47h-2.37Z"
  }));

  const SpeakerSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2Zm9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-4 8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Z",
    clipRule: "evenodd"
  }));

  const SquareLayoutSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M2 3a1 1 0 0 1 1-1h7v20H3a1 1 0 0 1-1-1V3Zm9-1h10a1 1 0 0 1 1 1v10H11V2Zm11 12H11v8h10a1 1 0 0 0 1-1v-7Z"
  }));

  const SquareStackSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.5 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7.5a3 3 0 0 0 3 3v-6A4.5 4.5 0 0 1 10.5 6h6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M18 7.5a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3H18Z"
  }));

  const StackSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6Zm3-4.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"
  }));

  const StarSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007Z",
    clipRule: "evenodd"
  }));

  const SwatchSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 1 1-9 0V4.125Zm4.5 14.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743a6 6 0 0 1-.274.257Zm2.019-4.125 6.474-6.474a1.875 1.875 0 0 0 0-2.651L15.5 4.787a1.875 1.875 0 0 0-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375h-.001Z"
  }));

  const TagSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M21.39 5.25v4.318a2.251 2.251 0 0 1-.66 1.592l-9.58 9.58c-.7.699-1.78.872-2.608.33a18.095 18.095 0 0 1-5.223-5.223c-.542-.827-.369-1.908.33-2.607l9.581-9.581A2.248 2.248 0 0 1 14.821 3h4.318a2.25 2.25 0 0 1 2.25 2.25ZM18.5 7.134a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));

  const TemperatureSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"
  }));

  const TextSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M4 7V4h16v3M9 20h6M12 4v16"
  }));

  const ThunderSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3 13.539 14.454 2 12 10.461h9L9.545 22 12 13.539H3Z"
  }));

  const TrashSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M16.5 4.978v.227c1.299.119 2.593.29 3.878.512a.75.75 0 0 1-.256 1.478l-.209-.035-1.005 13.07A3 3 0 0 1 15.917 23H8.084a3 3 0 0 1-2.991-2.77L4.087 7.16l-.209.035a.75.75 0 1 1-.256-1.478A48.564 48.564 0 0 1 7.5 5.205v-.227c0-1.564 1.213-2.9 2.816-2.951a52.663 52.663 0 0 1 3.369 0c1.603.05 2.815 1.387 2.815 2.95Zm-6.136-1.452a51.186 51.186 0 0 1 3.273 0C14.39 3.55 15 4.184 15 4.978v.113a49.49 49.49 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Z",
    clipRule: "evenodd"
  }));

  const TvSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5 3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h6.25v2.25H7a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5h-4.25V18H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Z"
  }));

  const UnderlineSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M6 3v7a6 6 0 1 0 12 0V3M4 21h16"
  }));

  const UserAddSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11 11.167c3.038 0 5.5-2.052 5.5-4.584C16.5 4.052 14.038 2 11 2S5.5 4.052 5.5 6.583c0 2.532 2.462 4.584 5.5 4.584Zm-4.5 1.666c-3.038 0-5.5 2.052-5.5 4.584C1 19.948 3.462 22 6.5 22h9c3.038 0 5.5-2.052 5.5-4.583 0-2.532-2.462-4.584-5.5-4.584h-9ZM20 7.5a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2v-2Z"
  }));

  const UserGroupSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M16.5 6.583c0 2.532-2.462 4.584-5.5 4.584S5.5 9.115 5.5 6.583C5.5 4.052 7.962 2 11 2s5.5 2.052 5.5 4.583ZM1 17.417c0-2.532 2.462-4.584 5.5-4.584h9c3.038 0 5.5 2.052 5.5 4.584C21 19.948 18.538 22 15.5 22h-9C3.462 22 1 19.948 1 17.417Zm20.2-8.584c0 1.013-.985 1.834-2.2 1.834-1.215 0-2.2-.821-2.2-1.834C16.8 7.821 17.785 7 19 7c1.215 0 2.2.82 2.2 1.833Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15 13.167c0-1.013.985-1.834 2.2-1.834h3.6c1.215 0 2.2.821 2.2 1.834C23 14.179 22.015 15 20.8 15h-3.6c-1.215 0-2.2-.82-2.2-1.833Z"
  }));

  const UserMinusSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 11.167c3.038 0 5.5-2.052 5.5-4.584C17.5 4.052 15.038 2 12 2S6.5 4.052 6.5 6.583c0 2.532 2.462 4.584 5.5 4.584Zm-4.5 1.666c-3.038 0-5.5 2.052-5.5 4.584C2 19.948 4.462 22 7.5 22h9c3.038 0 5.5-2.052 5.5-4.583 0-2.532-2.462-4.584-5.5-4.584h-9ZM17 10.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
  }));

  const UserOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M13.781 10.538 6.834 3.591C7.842 2.617 9.334 2 11 2c3.038 0 5.5 2.052 5.5 4.583 0 1.686-1.092 3.16-2.719 3.955Zm-1.948 2.295 7.7 7.7C18.529 21.435 17.093 22 15.5 22h-9C3.462 22 1 19.948 1 17.417c0-2.532 2.462-4.584 5.5-4.584h5.333ZM21 17.417c0-2.362-2.143-4.306-4.897-4.556l4.883 4.883a3.85 3.85 0 0 0 .014-.327Zm-10.893-6.31L5.5 6.5l-.001.082c0 2.278 1.994 4.168 4.607 4.524ZM4.53 2.47a.75.75 0 0 0-1.06 1.06l17.677 17.678a.75.75 0 0 0 1.061-1.06L4.53 2.47Z"
  }));

  const UserSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M17.5 6.583c0 2.532-2.462 4.584-5.5 4.584S6.5 9.115 6.5 6.583C6.5 4.052 8.962 2 12 2s5.5 2.052 5.5 4.583ZM2 17.417c0-2.532 2.462-4.584 5.5-4.584h9c3.038 0 5.5 2.052 5.5 4.584C22 19.948 19.538 22 16.5 22h-9C4.462 22 2 19.948 2 17.417Z"
  }));

  const VideoOffSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.265 3.205a.75.75 0 0 0-1.03 1.09l18 17a.75.75 0 0 0 1.03-1.09l-18-17Zm17.97 14.623V9.213a.2.2 0 0 0-.316-.162l-3.684 2.63V8.827a2 2 0 0 0-2-2h-6l11.662 11.146a.2.2 0 0 0 .338-.145Zm-6 2.998h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 1.108-1.79l13.215 13.29a2 2 0 0 1-1.323.5Z"
  }));

  const VideoSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M21 7.389a.2.2 0 0 0-.316-.163L14 12l6.684 4.774a.2.2 0 0 0 .316-.163V7.39Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M15 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
  }));

  const ViewOnceSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm.75-14a.75.75 0 0 0-1.166-.624l-3 2a.75.75 0 1 0 .832 1.248l1.834-1.223V17a.75.75 0 1 0 1.5 0V8Z",
    clipRule: "evenodd"
  }));

  const WaletSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M19.75 1.636c0-.217-.13-.42-.347-.536a.867.867 0 0 0-.72-.04L4.013 6.868C2.842 7.214 2 8.16 2 9.273v10.181C2 20.86 3.343 22 5 22h14c1.657 0 3-1.14 3-2.546V9.274c0-1.188-.959-2.186-2.256-2.467a.557.557 0 0 0 .006-.079v-5.09Zm-1.5 5.091V2.636L7.916 6.727H18.25Zm.75 8.06c0 .704-.672 1.274-1.5 1.274s-1.5-.57-1.5-1.273.672-1.273 1.5-1.273 1.5.57 1.5 1.273Z",
    clipRule: "evenodd"
  }));

  const WindowSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));

  const XSolid = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 3,
    d: "M6 18 18 6M6 6l12 12"
  }));

  const ActivityOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 12h-4l-3 9L9 3l-3 9H2"
  }));

  const AdjustHorizontalOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21 20h-7m-4 0H3m18-8h-9m-4 0H3m18-8h-5m-4 0H3m11 19v-6m-6-2V9m8-2V1"
  }));

  const AdjustSquareOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeDasharray: "1 2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2 12h20"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.344 8.182 6 2l15.455 4.141-.828 3.091m-1.76 6.568-1.553 5.796-15.455-4.141.776-2.898"
  }));

  const AdjustVerticleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6"
  }));

  const ApertureOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83m13.79-4-5.74 9.94M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));

  const ArchiveAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4 8h16M4 8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M4 8v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8M9 15h6m-3 3v-6"
  }));

  const ArchiveArrowDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4 8h16M4 8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M4 8v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8m-8 10 2.121-2M12 18l-2-2m2 2v-6"
  }));

  const ArchiveArrowUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4 8h16M4 8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M4 8v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8m-7.879 4L10 14m2.121-2 2 2m-2-2v6"
  }));

  const ArchiveMinusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4 8h16M4 8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1M4 8v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8M9 13h6"
  }));

  const ArrowAngleDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m15 15-6 6m0 0-6-6m6 6V9a6 6 0 1 1 12 0v3"
  }));

  const ArrowAngleLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9 15 3 9m0 0 6-6M3 9h12a6 6 0 1 1 0 12h-3"
  }));

  const ArrowAngleRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 1 0 0 12h3"
  }));

  const ArrowAngleUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15 9 9 3m0 0L3 9m6-6v12a6 6 0 1 0 12 0v-3"
  }));

  const ArrowBarDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2 21h20m-3-10.25L11.5 17m0 0L4 10.75M11.5 17V2"
  }));

  const ArrowBarLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2.5 1.5v20m10.25-3L6.5 11m0 0 6.25-7.5M6.5 11h15"
  }));

  const ArrowBarRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21.5 21.5v-20m-10.25 3L17.5 12m0 0-6.25 7.5M17.5 12h-15"
  }));

  const ArrowBarUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 3H2m3 10.25L12.5 7m0 0 7.5 6.25M12.5 7v15"
  }));

  const ArrowCycleCircleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16.023 9.348h4.992l-3.181-3.183a8.25 8.25 0 0 0-13.803 3.7m-1.046 9.779v-4.992m0 0h4.992m-4.992 0 3.18 3.183a8.25 8.25 0 0 0 13.803-3.7m1.047-9.779v4.99"
  }));

  const ArrowCycleSquareOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4.609 10.2V5.7c0-1.491 1.168-2.7 2.608-2.7h9.276c1.44 0 2.608 1.209 2.608 2.7v4.5m0 0-2.898-2.16M19.1 10.2 22 8.04m-2.609 5.76v4.5c0 1.491-1.168 2.7-2.608 2.7H7.507C6.067 21 4.9 19.791 4.9 18.3v-4.5m0 0 2.898 2.16M4.9 13.8 2 15.96"
  }));

  const ArrowDoubleHorizontalOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
  }));

  const ArrowDoubleVerticleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
  }));

  const ArrowDownLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.889 5.661 5.16 18.39m0 0 10.831-.275M5.16 18.39l.225-10.881"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ArrowDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.535 3v18m0 0L19 13.147M11.535 21 4 13.147"
  }));

  const ArrowDownRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m5.161 5.611 12.728 12.728m0 0-.275-10.831m.275 10.83-10.881-.224"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ArrowLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M20.5 12.035h-18m0 0 7.853 7.465M2.5 12.035 10.353 4.5"
  }));

  const ArrowRectDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.667 9.545H4.5c-.663 0-1.299.26-1.768.72A2.432 2.432 0 0 0 2 12v6.546c0 .65.263 1.275.732 1.735.47.46 1.105.719 1.768.719h15c.663 0 1.299-.259 1.768-.719.469-.46.732-1.085.732-1.735V12c0-.651-.263-1.275-.732-1.736a2.524 2.524 0 0 0-1.768-.719h-4.167m-6.666 4.091L12 16.91m0 0 3.333-3.273M12 16.91V3"
  }));

  const ArrowRectLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M14.454 8.667V4.5c0-.663-.258-1.299-.718-1.768A2.432 2.432 0 0 0 12 2H5.455c-.651 0-1.276.263-1.736.732A2.524 2.524 0 0 0 3 4.5v15c0 .663.259 1.299.719 1.768.46.469 1.085.732 1.736.732H12c.651 0 1.275-.263 1.736-.732.46-.47.718-1.105.718-1.768v-4.167m-4.09-6.666L7.09 12m0 0 3.273 3.333M7.09 12H21"
  }));

  const ArrowRectRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M14.454 8.667V4.5c0-.663-.258-1.299-.718-1.768A2.432 2.432 0 0 0 12 2H5.455c-.651 0-1.276.263-1.736.732A2.524 2.524 0 0 0 3 4.5v15c0 .663.259 1.299.719 1.768.46.469 1.085.732 1.736.732H12c.651 0 1.275-.263 1.736-.732.46-.47.718-1.105.718-1.768v-4.167m3.273 0L21 12m0 0-3.273-3.333M21 12H7.09"
  }));

  const ArrowRectUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.667 9.545H4.5c-.663 0-1.299.26-1.768.72A2.432 2.432 0 0 0 2 12v6.546c0 .65.263 1.275.732 1.735.47.46 1.105.719 1.768.719h15c.663 0 1.299-.259 1.768-.719.469-.46.732-1.085.732-1.735V12c0-.651-.263-1.275-.732-1.736a2.524 2.524 0 0 0-1.768-.719h-4.167m0-3.272L12 3m0 0L8.667 6.273M12 3v13.91"
  }));

  const ArrowRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2.5 11.965h18m0 0L12.647 4.5m7.853 7.465L12.647 19.5"
  }));

  const ArrowRoundedDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.667 12.833 12 16.167m0 0 3.333-3.334M12 16.167V7.833M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"
  }));

  const ArrowRoundedLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.167 8.667 7.833 12m0 0 3.334 3.333M7.833 12h8.334M12 22a10.001 10.001 0 1 1 0-20.002A10.001 10.001 0 0 1 12 22Z"
  }));

  const ArrowRoundedRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12.833 15.333 16.167 12m0 0-3.334-3.333M16.167 12H7.833M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Z"
  }));

  const ArrowRoundedUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15.333 11.167 12 7.833m0 0-3.333 3.334M12 7.833v8.334M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Z"
  }));

  const ArrowsInOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
  }));

  const ArrowsOutOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
  }));

  const ArrowTopLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.839 18.389 5.111 5.661m0 0 .275 10.831M5.11 5.661l10.881.225"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ArrowTopRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M5.111 18.339 17.839 5.611m0 0-10.831.275m10.831-.275-.225 10.881"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const ArrowTrendsDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.511-5.511-3.182"
  }));

  const ArrowTrendsUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941"
  }));

  const ArrowUDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3 15.79V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.21m-4.5-4.29L12 15.79m0 0-4.5-4.264M12 15.79V3"
  }));

  const ArrowUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.465 21V3m0 0L4 10.853M11.465 3 19 10.853"
  }));

  const ArrowUUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M3 15.987v3.008C3 20.102 3.895 21 5 21h14c1.105 0 2-.898 2-2.005v-4.01M6.5 7.967l5.409-4.937a.13.13 0 0 1 .175.008m0 0L17 7.967m-4.916-4.929L12 16.99"
  }));

  const AtTheRateOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
  }));

  const AwardOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m7.488 13-5.406 4.006c-.184.137-.032.478.196.443 1.126-.17 2.83-.252 3.672.591.8.801.765 2.384.614 3.509-.032.234.34.388.47.192l4.174-6.277m0 0a6.79 6.79 0 0 0 1.254.044m-1.254-.044a6.755 6.755 0 0 1-5.876-6.705C5.332 5.026 8.35 2 12.074 2c3.723 0 6.742 3.026 6.742 6.76a6.75 6.75 0 0 1-1.99 4.795m-4.364 1.953 4.725 6.41c.137.185.477.032.443-.197-.17-1.129-.252-2.838.59-3.681.799-.801 2.377-.767 3.499-.616.233.032.388-.34.191-.47l-5.084-3.4m-4.364 1.954a6.712 6.712 0 0 0 4.364-1.953"
  }));

  const BackwardOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m12.372 13.82-1.122-.641v3.631c0 .863-.933 1.405-1.683.978l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.062a1.125 1.125 0 0 1 1.683.978v3.633l1.122-.642 6.945-3.97A1.125 1.125 0 0 1 21 8.688v8.123c0 .864-.933 1.405-1.683.977l-6.945-3.968Z"
  }));

  const BadgeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m9 13 3.23 2L15 9M8.248 20.39a4 4 0 0 1-5.028-4.807 4 4 0 0 1-.25-7.03 4.001 4.001 0 0 1 5.375-5.18 4 4 0 0 1 7.102-.404 4.001 4.001 0 0 1 5.18 5.376 4 4 0 0 1-.238 7.407 4 4 0 0 1-4.806 5.028 4 4 0 0 1-7.335-.39Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const BarAlignCenterOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M2 3h20m-2 4.5H4M2 12h20m-2 4.5H4M2 21h20"
  }));

  const BarAlignDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 3H4.684m5.195 6.5H22m0 6.149H9.879m0 5.351H22M4.684 9.5V21m0 0 2.597-3m-2.597 3L2 18"
  }));

  const BarAlignLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M2 3h20m-6 6.5H2m0 6.149h20M16 21H2"
  }));

  const BarAlignRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M22 3H2m6 6.5h14m0 6.149H2M8 21h14"
  }));

  const BarAlignUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 3H4.684m5.195 6.5H22m0 6.149H9.879m0 5.351H22M4.684 9.5V21m0-11.5L1.5 13m3.184-3.5L8 13"
  }));

  const BarCodeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    d: "M2 1.5a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Zm6 0a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Zm4 0a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5Zm9 0a.5.5 0 0 1 .5.5v20a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5ZM5 1.75a.25.25 0 0 1 .25.25v16.5a.25.25 0 1 1-.5 0V2A.25.25 0 0 1 5 1.75Zm10 0a.25.25 0 0 1 .25.25v16.5a.25.25 0 1 1-.5 0V2a.25.25 0 0 1 .25-.25Zm3 0a.25.25 0 0 1 .25.25v20a.25.25 0 1 1-.5 0V2a.25.25 0 0 1 .25-.25Z"
  }));

  const BarThreeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M4 4h17M4 12h17M4 20h17"
  }));

  const BarTwoOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M3 5h17M3 19h17"
  }));

  const BatteryOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 14v-3M3.958 6h13.71c1.08 0 1.957.895 1.957 2v8c0 1.105-.876 2-1.958 2H3.958C2.877 18 2 17.105 2 16V8c0-1.105.877-2 1.958-2Z"
  }));

  const BellOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M18.71 14.475c-.214-1.028-.322-2.21-.362-3.406-.115-3.382-2.456-6.414-5.722-7.15.232-.303.37-.68.37-1.086C12.996 1.821 12.143 1 11.09 1s-1.905.82-1.905 1.833c0 .407.138.783.37 1.087a6.917 6.917 0 0 0-1.61.58m11.268 15.75H12.74c.162.27.255.583.255.917 0 1.012-.853 1.833-1.905 1.833s-1.905-.82-1.905-1.833c0-.334.093-.647.255-.917H2.968c-.672 0-1.138-.653-.91-1.261.46-1.22 1.117-3.088 1.414-4.514.214-1.028.322-2.21.362-3.406a7.797 7.797 0 0 1 1.023-3.596m-1.89-4.64L22 20.25"
  }));

  const BellOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m12.499 2.742-.67.914 1.103.259c3.04.715 5.292 3.695 5.402 7.094.043 1.326.157 2.661.392 3.838.323 1.615 1.027 3.7 1.507 5.031.069.192-.079.372-.244.372h-8.062l.647 1.124c.106.184.167.396.167.626 0 .694-.56 1.25-1.241 1.25-.682 0-1.24-.556-1.24-1.25 0-.23.06-.442.166-.626l.647-1.124H3.011c-.165 0-.313-.18-.244-.372.48-1.331 1.184-3.416 1.507-5.031.235-1.177.35-2.512.392-3.838.11-3.399 2.363-6.38 5.402-7.094l1.103-.26-.67-.913A1.247 1.247 0 0 1 10.26 2c0-.694.56-1.25 1.241-1.25.682 0 1.24.556 1.24 1.25 0 .279-.09.534-.241.742Z"
  }));

  const BlockCircleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m5 4.859 14.276 14M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));

  const BlockSquareOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m2.5 2.5 19 19M3 22h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Z"
  }));

  const BluetoothOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m6.5 6.5 11 11L12 23V1l5.5 5.5-11 11"
  }));

  const BoldOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6 12h8a4 4 0 1 0 0-8H6v8Zm0 0h9a4 4 0 1 1 0 8H6v-8Z"
  }));

  const BookCloseOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15Z"
  }));

  const BookMarkOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7 3.126a48.507 48.507 0 0 1 9.093.198C17.193 3.452 18 4.4 18 5.509V13M3 6v15.002l7-5 8 5V19.5M2 2l19.5 17.5"
  }));

  const BookmarkOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21l-8-5-7 5V5.507c0-1.108.806-2.057 1.907-2.185a48.506 48.506 0 0 1 11.186 0Z"
  }));

  const BookOpenOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533Zm1.5 16.103A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z"
  }));

  const BreifcaseOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M5.25 7.25v-4.5A.75.75 0 0 1 6 2h12a.75.75 0 0 1 .75.75v4.5m-13.5 0H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1h-2.25m-13.5 0h13.5"
  }));

  const BrightnessOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 6.5V2.536m-.002 15.348v3.963M21.5 12h-3.557M2.581 12h3.557m1.377-4.163L5 5.5m11.985 11.634 2.515 2.335M5 18.836 7.515 16.5M19.5 5.807l-2.515 2.336m-4.987 7.159c1.965 0 3.558-1.479 3.558-3.303 0-1.825-1.593-3.303-3.558-3.303-1.964 0-3.557 1.479-3.557 3.303 0 1.824 1.593 3.303 3.557 3.303Z"
  }));

  const CalenderOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M22 8.021H2m20 0v12.17C22 21.744 20.657 23 19 23H5c-1.657 0-3-1.257-3-2.808V8.022m20 0v-.937c0-1.551-1.343-2.808-3-2.808h-1.5V1.468C17.5 1.21 17.276 1 17 1s-.5.21-.5.468v2.809H7V1.468C7 1.21 6.776 1 6.5 1s-.5.21-.5.468v2.809H5c-1.657 0-3 1.257-3 2.808v.936"
  }));

  const CameraOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M4 5.333a3 3 0 0 0-3 3V19a3 3 0 0 0 3 3h14c.768 0 1.47-.289 2-.764M7 3.666C7 2.747 7.746 2 8.667 2h4.666C14.253 2 15 2.746 15 3.667c0 .92.746 1.666 1.667 1.666H18a3 3 0 0 1 3 3V17m-7.203-1.913a3.001 3.001 0 1 1-4.193-3.743M3 2l19 19"
  }));

  const CameraOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M14.333 2.75c.507 0 .917.41.917.917a2.417 2.417 0 0 0 2.417 2.416H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V8.333A2.25 2.25 0 0 1 5 6.083h1.333A2.417 2.417 0 0 0 8.75 3.667c0-.507.41-.917.917-.917h4.666ZM12 17.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
  }));

  const CartOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M14.5 4.5h8l-3 10.5h-10l-3-13H2"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 10.5,
    cy: 19.5,
    r: 1.5,
    stroke: "currentColor",
    strokeWidth: 1.5
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 18.5,
    cy: 19.5,
    r: 1.5,
    stroke: "currentColor",
    strokeWidth: 1.5
  }));

  const CastOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6M2 20h.01"
  }));

  const ChartLinesOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2 12.75h2a.25.25 0 0 1 .25.25v8a.25.25 0 0 1-.25.25H2a.25.25 0 0 1-.25-.25v-8a.25.25 0 0 1 .25-.25Zm9-5h2a.25.25 0 0 1 .25.25v13a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25V8a.25.25 0 0 1 .25-.25Zm9-5h2a.25.25 0 0 1 .25.25v18a.25.25 0 0 1-.25.25h-2a.25.25 0 0 1-.25-.25V3a.25.25 0 0 1 .25-.25Z"
  }));

  const ChartPieOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M10.333 5.333a8.333 8.333 0 1 0 8.334 8.334h-8.334V5.333Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M13.667 10.333H22A8.333 8.333 0 0 0 13.667 2v8.333Z"
  }));

  const ChatOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m14.486 10-.493.75m-1.702 2.526-.822-.905-.823-.905L9 14.138"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m19.835 20.902-1.71-.448a1.374 1.374 0 0 0-1.044.16A9.953 9.953 0 0 1 12 22C6.477 22 2 17.523 2 12a9.96 9.96 0 0 1 2.4-6.5m3.1-2.433A9.958 9.958 0 0 1 12 2c5.523 0 10 4.477 10 10a9.969 9.969 0 0 1-.791 3.905M4 2l18.385 18.385"
  }));

  const ChatOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m14.486 10-2.195 3.276-1.645-1.81L9 14.138"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m20.366 15.951.678.321-.678-.32a2.12 2.12 0 0 0-.168 1.34l.476 2.267a.527.527 0 0 1-.649.618l-1.71-.449a2.122 2.122 0 0 0-1.616.241A9.204 9.204 0 0 1 12 21.25 9.25 9.25 0 1 1 21.25 12a9.21 9.21 0 0 1-.884 3.951Z"
  }));

  const CheckOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M21 3 9.353 20.352a.5.5 0 0 1-.842-.018L3 11.308"
  }));

  const ChevronDoubleDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m19.5 11.25-7.5 7.5-7.5-7.5m15-6-7.5 7.5-7.5-7.5"
  }));

  const ChevronDoubleLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12.75 19.5 5.25 12l7.5-7.5m6 15-7.5-7.5 7.5-7.5"
  }));

  const ChevronDoubleRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m11.25 4.5 7.5 7.5-7.5 7.5m-6-15 7.5 7.5-7.5 7.5"
  }));

  const ChevronDoubleUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m4.5 12.75 7.5-7.5 7.5 7.5m-15 6 7.5-7.5 7.5 7.5"
  }));

  const ChevronDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));

  const ChevronHorizontalOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15 15.75 18.75 12 15 8.25m-6 7.5L5.25 12 9 8.25"
  }));

  const ChevronLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15.75 19.5 8.25 12l7.5-7.5"
  }));

  const ChevronRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m8.25 4.5 7.5 7.5-7.5 7.5"
  }));

  const ChevronUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m4.5 15.75 7.5-7.5 7.5 7.5"
  }));

  const ChevronVerticleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
  }));

  const CircleAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 9v3.5m0 0V16m0-3.5H8.5m3.5 0h3.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));

  const ClipboardOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M16.5 5.043V3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v2.043M6 22h12a3 3 0 0 0 3-3V7.609a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3V19a3 3 0 0 0 3 3Z"
  }));

  const ClockOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11 9v4.575L16 15m6-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));

  const CloudOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M20.976 14.53a4.43 4.43 0 0 0-.875-2.637 4.606 4.606 0 0 0-2.291-1.637 5.148 5.148 0 0 0-.771-3.87 5.378 5.378 0 0 0-3.313-2.255 5.488 5.488 0 0 0-3.985.632M17.903 19l-13.058.03c-.9.002-1.77-.305-2.461-.867a3.733 3.733 0 0 1-1.32-2.205 3.674 3.674 0 0 1 .432-2.52 3.816 3.816 0 0 1 1.985-1.664 2.933 2.933 0 0 1-.102-1.643 2.98 2.98 0 0 1 .802-1.448c.4-.4.907-.684 1.464-.817M4.18 3 22 20"
  }));

  const ClouldOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21.75 15a4.5 4.5 0 0 1-4.5 4.5H6a3.75 3.75 0 0 1-1.332-7.257 3 3 0 0 1 3.758-3.848 5.25 5.25 0 0 1 10.233 2.33A4.502 4.502 0 0 1 21.75 15Z"
  }));

  const CommentOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m18.835 20.929-1.71-.438a1.403 1.403 0 0 0-1.044.158A10.143 10.143 0 0 1 11 22c-5.523 0-10-4.368-10-9.756 0-2.66 1.09-5.07 2.859-6.83m16.185 10.998A9.521 9.521 0 0 0 21 12.244c0-5.388-4.477-9.756-10-9.756-1.66 0-2.622.277-4 .975M2.5 2 22 21.512"
  }));

  const CommentOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M21.25 12a9.21 9.21 0 0 1-.884 3.951 2.12 2.12 0 0 0-.168 1.342l.476 2.266a.527.527 0 0 1-.649.618l-1.71-.449a2.122 2.122 0 0 0-1.616.241A9.204 9.204 0 0 1 12 21.25 9.25 9.25 0 1 1 21.25 12Z"
  }));

  const CompasOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z"
  }));

  const ContrastOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    d: "M4.929 19.071A10 10 0 1 0 19.072 4.928 10 10 0 0 0 4.929 19.07Zm.707-.707A9 9 0 0 0 11 20.944V3.056a9 9 0 0 0-5.364 15.308Z",
    clipRule: "evenodd"
  }));

  const CropOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6.13 1 6 16a2 2 0 0 0 2 2h15M1 6.13 16 6a2 2 0 0 1 2 2v15"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const DocumentAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 11v3m0 0v3m0-3H9m3 0h3M13.757 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2Z"
  }));

  const DocumentArrowDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.5 10v6m0 0 2.5-1.636M11.5 16 9 14.364M13.757 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2Z"
  }));

  const DocumentArrowUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.5 16v-6m0 0L9 11.636M11.5 10l2.5 1.636M13.757 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2Z"
  }));

  const DocumentMinusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9 14h6M13.757 2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.243a3 3 0 0 0-.879-2.122L15.88 2.88A3 3 0 0 0 13.757 2Z"
  }));

  const DocumentOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M17 21.25H7A2.25 2.25 0 0 1 4.75 19V5A2.25 2.25 0 0 1 7 2.75h6.757a2.25 2.25 0 0 1 1.591.659L17.47 5.53l1.121 1.122c.422.422.659.994.659 1.59V19A2.25 2.25 0 0 1 17 21.25Z"
  }));

  const DrawOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M2 2s9.676 1.704 12 6.5c1.535 3.168-1.343 6 .5 9C16.288 20.41 22 22 22 22"
  }));

  const ExclimationCircleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
  }));

  const ExclimationTriangleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
  }));

  const ExpandDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17 2v5h5M7 2v5H2m0 10h5v5m15-5h-5v5"
  }));

  const ExpandUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7 2H2v5m0 10v5h5m10 0h5v-5m0-10V2h-5"
  }));

  const ExternalLinkOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6m0 0v6m0-6L10 14"
  }));

  const EyeOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M13.137 14.621a3 3 0 0 1-4.243-4.242m.606-5.27A10.586 10.586 0 0 1 11.016 5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639-.366 1.1-.91 2.12-1.596 3.026m-2.66 2.471A10.449 10.449 0 0 1 11.017 20c-4.638 0-8.574-3.007-9.964-7.178a1.012 1.012 0 0 1 0-.639c.73-2.2 2.17-4.076 4.048-5.359M3 2l19 19"
  }));

  const EyeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.964-7.178Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
  }));

  const FacebookOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z"
  }));

  const FigmaOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9h3.5M12 9v7M8.5 9a3.5 3.5 0 0 0 0 7m7-7a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-7 7a3.5 3.5 0 1 0 3.5 3.5V16m-3.5 0H12"
  }));

  const FilmOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375M20.625 19.5c.621 0 1.125-.504 1.125-1.125M20.625 19.5h-1.5A1.125 1.125 0 0 1 18 18.375m-15.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125M6 18.375v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M2.25 5.625c0-.621.504-1.125 1.125-1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 7.5a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125m0 3.75h1.5m16.875 2.625V5.625m0 12.75v-1.5c0-.621-.504-1.125-1.125-1.125M21.75 5.625c0-.621-.504-1.125-1.125-1.125m1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m0 7.5c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125m1.5-11.25H3.375m17.25 0h-1.5C18.504 4.5 18 5.004 18 5.625M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m12 0c0-.621-.504-1.125-1.125-1.125h-9.75C6.504 4.5 6 5.004 6 5.625m12 0v1.5a1.125 1.125 0 0 0 1.125 1.125M18 5.625v5.25m2.625-2.625h-1.5m1.5 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M6 5.625v1.5c0 .621-.504 1.125-1.125 1.125M6 5.625v5.25M3.375 8.25h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5M3.375 12h1.5M6 10.875A1.125 1.125 0 0 0 7.125 12M6 10.875C6 11.496 5.496 12 4.875 12m14.25-3.75c-.621 0-1.125.504-1.125 1.125v1.5m0 0c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m1.5 0h-1.5m-12 0h9.75m-9.75 0C6.504 12 6 12.504 6 13.125M16.875 12c.621 0 1.125.504 1.125 1.125m-12 0v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m14.25 0c-.621 0-1.125.504-1.125 1.125m0 0v1.5c0 .621.504 1.125 1.125 1.125"
  }));

  const FireOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.406 5.562a8.252 8.252 0 0 0-3.963 3.822c-.844 1.69-1.286 3.328-.88 5.173.407 1.845 1.637 3.785 3.113 4.964a8.252 8.252 0 0 0 5.202 1.803 8.25 8.25 0 0 0 5.864-13.993 8.287 8.287 0 0 1-2.944 2.572A8.983 8.983 0 0 0 12.39 3.06a8.21 8.21 0 0 1-2.983 2.501l-.001.001Z"
  }));

  const FlagOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M3 2v20M3 3.01v12.5s2.202-.904 4-1c3.216-.172 4.782 2.115 8 2 1.79-.064 4.224-.858 5.363-1.264a.966.966 0 0 0 .637-.917V4.33c0-.663-.634-1.147-1.28-.997-1.27.297-3.238.69-4.72.677-3.22-.028-4.784-2.172-8-2-1.798.096-4 1-4 1Z"
  }));

  const FolderAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4.609 2.75h4.087c.306 0 .554.248.554.554 0 1.135.92 2.055 2.054 2.055H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V4.609c0-1.027.832-1.859 1.859-1.859Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 11v6m-3-3h6"
  }));

  const FolderArrowDownOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4.609 2.75h4.087c.306 0 .554.248.554.554 0 1.135.92 2.055 2.054 2.055H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V4.609c0-1.027.832-1.859 1.859-1.859Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.5 11v6m0 0L9 14.429M11.5 17l2.5-2.571"
  }));

  const FolderArrowUpOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4.609 2.75h4.087c.306 0 .554.248.554.554 0 1.135.92 2.055 2.054 2.055H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V4.609c0-1.027.832-1.859 1.859-1.859Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.5 17v-6m0 0 2.5 2.571M11.5 11 9 13.571"
  }));

  const FolderMinusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4.609 2.75h4.087c.306 0 .554.248.554.554 0 1.135.92 2.055 2.054 2.055H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V4.609c0-1.027.832-1.859 1.859-1.859Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9 14h6"
  }));

  const FolderOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4.609 2.75h4.087c.306 0 .554.248.554.554 0 1.135.92 2.055 2.054 2.055H19a2.25 2.25 0 0 1 2.25 2.25V19A2.25 2.25 0 0 1 19 21.25H5A2.25 2.25 0 0 1 2.75 19V4.609c0-1.027.832-1.859 1.859-1.859Z"
  }));

  const FontsOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M2 22 12 2l10 20M2 13.5h20"
  }));

  const ForwardOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062A1.125 1.125 0 0 1 3 16.81V8.688Zm9.75 0c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 0 1 0 1.953l-7.108 4.062a1.124 1.124 0 0 1-1.683-.977V8.688Z"
  }));

  const GaleryListOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2.75 4a1.25 1.25 0 1 1 2.5 0v16a1.25 1.25 0 1 1-2.5 0V4Zm7 1A2.25 2.25 0 0 1 12 2.75h7A2.25 2.25 0 0 1 21.25 5v1A2.25 2.25 0 0 1 19 8.25h-7A2.25 2.25 0 0 1 9.75 6V5Zm0 9A2.25 2.25 0 0 1 12 11.75h7A2.25 2.25 0 0 1 21.25 14v5A2.25 2.25 0 0 1 19 21.25h-7A2.25 2.25 0 0 1 9.75 19v-5Z"
  }));

  const GearOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M10.704 3c-.55 0-1.02.398-1.11.94L9.38 5.221c-.062.374-.312.686-.644.869a6.001 6.001 0 0 0-.22.128c-.325.196-.72.257-1.076.124l-1.216-.456a1.125 1.125 0 0 0-1.37.491L3.557 8.624a1.125 1.125 0 0 0 .26 1.43l1.004.828c.292.24.437.612.43.99a5.42 5.42 0 0 0 0 .255c.007.379-.138.752-.43.992l-1.004.827a1.125 1.125 0 0 0-.26 1.431l1.297 2.247a1.125 1.125 0 0 0 1.369.49l1.217-.456c.356-.133.751-.072 1.076.124.072.044.146.086.22.127.332.184.582.496.644.87l.213 1.281c.09.542.56.94 1.11.94h2.594c.55 0 1.02-.398 1.11-.941l.213-1.28c.063-.374.313-.686.644-.869.074-.041.148-.084.22-.128.326-.196.721-.257 1.076-.124l1.217.456a1.125 1.125 0 0 0 1.369-.491l1.298-2.247a1.126 1.126 0 0 0-.26-1.43l-1.005-.828c-.292-.24-.437-.612-.43-.99a5.42 5.42 0 0 0 0-.255c-.007-.379.138-.752.431-.992l1.003-.827a1.125 1.125 0 0 0 .26-1.431l-1.296-2.247a1.125 1.125 0 0 0-1.37-.49l-1.217.456c-.355.133-.751.072-1.075-.124a5.427 5.427 0 0 0-.22-.127c-.332-.184-.582-.496-.645-.87l-.213-1.281c-.09-.542-.56-.94-1.11-.94h-2.593Zm3.417 11.121A3 3 0 1 0 9.88 9.88a3 3 0 0 0 4.242 4.242Z",
    clipRule: "evenodd"
  }));

  const GifOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
  }));

  const GithubOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));

  const GlobeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10H2m10 10C6.477 22 2 17.523 2 12m10 10a15.3 15.3 0 0 0 4-10 15.3 15.3 0 0 0-4-10m0 20a15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10M2 12C2 6.477 6.477 2 12 2"
  }));

  const GridOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M8.5 2v20m7-20v20m6-6h-19m0-8h19M3 22h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Z"
  }));

  const GridSquareAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M18 14v3m0 0v3m0-3h-3m3 0h3M4.917 10.333h2.5a2.917 2.917 0 0 0 2.916-2.916v-2.5A2.917 2.917 0 0 0 7.417 2h-2.5A2.917 2.917 0 0 0 2 4.917v2.5a2.917 2.917 0 0 0 2.917 2.916Zm11.666 0h2.5A2.917 2.917 0 0 0 22 7.417v-2.5A2.917 2.917 0 0 0 19.083 2h-2.5a2.917 2.917 0 0 0-2.916 2.917v2.5a2.917 2.917 0 0 0 2.916 2.916ZM4.917 22h2.5a2.917 2.917 0 0 0 2.916-2.917v-2.5a2.917 2.917 0 0 0-2.916-2.916h-2.5A2.917 2.917 0 0 0 2 16.583v2.5A2.917 2.917 0 0 0 4.917 22Z"
  }));

  const GridSquareMinusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M15 18h6M4.917 10.333h2.5a2.917 2.917 0 0 0 2.916-2.916v-2.5A2.917 2.917 0 0 0 7.417 2h-2.5A2.917 2.917 0 0 0 2 4.917v2.5a2.917 2.917 0 0 0 2.917 2.916Zm11.666 0h2.5A2.917 2.917 0 0 0 22 7.417v-2.5A2.917 2.917 0 0 0 19.083 2h-2.5a2.917 2.917 0 0 0-2.916 2.917v2.5a2.917 2.917 0 0 0 2.916 2.916ZM4.917 22h2.5a2.917 2.917 0 0 0 2.916-2.917v-2.5a2.917 2.917 0 0 0-2.916-2.916h-2.5A2.917 2.917 0 0 0 2 16.583v2.5A2.917 2.917 0 0 0 4.917 22Z"
  }));

  const GridSquareOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4.917 2.75h2.5c1.196 0 2.166.97 2.166 2.167v2.5c0 1.196-.97 2.166-2.166 2.166h-2.5A2.167 2.167 0 0 1 2.75 7.417v-2.5c0-1.197.97-2.167 2.167-2.167Zm11.666 0h2.5c1.197 0 2.167.97 2.167 2.167v2.5c0 1.196-.97 2.166-2.167 2.166h-2.5a2.167 2.167 0 0 1-2.166-2.166v-2.5c0-1.197.97-2.167 2.166-2.167ZM4.917 14.417h2.5c1.196 0 2.166.97 2.166 2.166v2.5c0 1.197-.97 2.167-2.166 2.167h-2.5a2.167 2.167 0 0 1-2.167-2.167v-2.5c0-1.196.97-2.166 2.167-2.166Zm11.666 0h2.5c1.197 0 2.167.97 2.167 2.166v2.5c0 1.197-.97 2.167-2.167 2.167h-2.5a2.167 2.167 0 0 1-2.166-2.167v-2.5c0-1.196.97-2.166 2.166-2.166Z"
  }));

  const HandLeftOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.78 3.154c0-.637.563-1.154 1.257-1.154s1.257.517 1.257 1.154v8.427a.42.42 0 0 0 .838 0V6.23c0-.637.563-1.154 1.258-1.154.694 0 1.257.517 1.257 1.154v5.35a.42.42 0 0 0 .838 0V7.769c0-.637.563-1.154 1.258-1.154.694 0 1.257.517 1.257 1.154v8.846C21 19.59 18.373 22 15.133 22h-.839c-2.281 0-4.258-1.195-5.229-2.94l-5.697-6.231c-.447-.488-.532-1.074 0-1.484.532-.41 1.48-.488 1.926 0l3.133 3.427v-9.31c0-.638.563-1.154 1.257-1.154.695 0 1.258.516 1.258 1.154v6.119a.42.42 0 0 0 .838 0V3.154Z"
  }));

  const HandRightOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12.253 3.154c0-.637-.565-1.154-1.262-1.154-.697 0-1.262.517-1.262 1.154v8.425a.42.42 0 1 1-.841 0V6.231c0-.637-.565-1.154-1.262-1.154-.696 0-1.261.517-1.261 1.154v5.348a.42.42 0 1 1-.841 0V7.77c0-.637-.565-1.154-1.262-1.154C3.565 6.615 3 7.132 3 7.77v8.846C3 19.59 5.636 22 8.888 22h.841c2.29 0 4.274-1.195 5.248-2.94l5.717-6.231c.448-.488.403-1.328-.13-1.738-.534-.41-1.551-.488-2 0l-2.947 2.804V5.462c0-.638-.565-1.154-1.261-1.154-.697 0-1.262.516-1.262 1.154v6.117a.42.42 0 1 1-.841 0V3.154Z"
  }));

  const HardDriveOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2 15V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10M2 15a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M2 15v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4m-8.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm3.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
  }));

  const HashtagOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
  }));

  const HeadphoneOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M22 16.546V11.09C22 6.07 17.523 2 12 2S2 6.07 2 11.09v5.456M7 22h1c.552 0 1-.407 1-.91v-5.454c0-.502-.448-.909-1-.909H7c-1.657 0-3 1.221-3 2.727v1.819C4 20.779 5.343 22 7 22Zm10 0h-1c-.552 0-1-.407-1-.91v-5.454c0-.502.448-.909 1-.909h1c1.657 0 3 1.221 3 2.727v1.819C20 20.779 18.657 22 17 22Z"
  }));

  const HeadPieceOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M7.111 6.275V7.7M1 21V8.982m0 0V6.75C1 4.127 3.027 2 5.527 2s4.526 2.127 4.526 4.75-2.026 4.75-4.526 4.75a4.37 4.37 0 0 1-2.716-.95L1 8.982Zm15.889-2.707V7.7M23 21V8.982m0 0V6.75C23 4.127 20.973 2 18.473 2s-4.526 2.127-4.526 4.75 2.026 4.75 4.526 4.75a4.37 4.37 0 0 0 2.716-.95L23 8.982Z"
  }));

  const HeartOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M19.17 13.66c2.364-2.33 2.45-6.324.188-8.771-1.982-2.144-5.066-2.34-7.249-.628A5.356 5.356 0 0 0 8 3.041M4.099 5.5c-1.641 2.41-1.443 5.824.587 7.99L11.721 21l4.06-4M4 2l16.264 16.264"
  }));

  const HeartOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m11.63 4.838.466.387.476-.373c1.876-1.472 4.519-1.311 6.235.546 1.989 2.151 1.91 5.684-.164 7.728l-6.9 6.8-6.51-6.948c-1.968-2.101-1.98-5.558-.023-7.674 1.773-1.918 4.518-2.046 6.42-.466Z"
  }));

  const HomeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M12 13v5.5M2 10.385a7 7 0 0 1 4.067-6.356l3-1.385a7 7 0 0 1 5.866 0l3 1.385A7 7 0 0 1 22 10.385v3.905a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7v-3.905Z"
  }));

  const ImageOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M8.25 2A6.25 6.25 0 0 0 2 8.25v7.5A6.25 6.25 0 0 0 8.25 22h7.5A6.25 6.25 0 0 0 22 15.75v-7.5A6.25 6.25 0 0 0 15.75 2h-7.5Zm3.937 6.458a1.25 1.25 0 0 1 2.165 0l3.608 6.25a1.25 1.25 0 0 1-1.082 1.875H7.002a1.25 1.25 0 0 1-1.083-1.875l1.805-3.125a1.25 1.25 0 0 1 2.165 0c.11.19.384.19.493 0l1.805-3.125Z",
    clipRule: "evenodd"
  }));

  const ImageTagOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m11.719 13-.433.75a1 1 0 0 0 .866 1.5h.535M11.719 13l2.165-3.75a1 1 0 0 1 1.732 0l2.598 4.5a1 1 0 0 1-.866 1.5h-4.661M11.719 13a1.99 1.99 0 0 0-.969-.25h-3a2 2 0 1 0 0 4h3a2 2 0 0 0 1.937-1.5M7 22h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5Zm3.75-12.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
  }));

  const InboxOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 12h-6l-2 3h-4l-2-3H2m20 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6m20 0-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11L2 12"
  }));

  const InformationCircleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
  }));

  const InstagramOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm9 9.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37Z"
  }));

  const ItalicOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M19 4h-9m4 16H5M15 4 9 20"
  }));

  const LanguageOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.473 48.473 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138A47.63 47.63 0 0 1 15 5.621m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
  }));

  const LayerOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m2 9.391 9.524 3.913L22 9.391M2 13.74l9.524 3.913L22 13.74m0 4.348L11.524 22 2 18.087M2 5.478 11.524 2 22 5.478 11.524 8.957 2 5.478Z"
  }));

  const LinkOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 1 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 1 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
  }));

  const ListCircleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));

  const ListReactangleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 1 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
  }));

  const LockOpenOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M23.25 10.5V6.75a5.25 5.25 0 1 0-10.5 0v3m0 0h-9a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3h-1.5Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const LockOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M6.75 9.75v-3a5.25 5.25 0 1 1 10.5 0v3m-10.5 0a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3m-10.5 0h10.5"
  }));

  const MagnificationAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m16 16 5.5 5.5M9 7v2.5m0 0V12m0-2.5H6.5m2.5 0h2.5M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z"
  }));

  const MagnificationMinusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m16 16 5.5 5.5M6.5 9h5M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z"
  }));

  const MagnificationOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m16 16 5.5 5.5M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0Z"
  }));

  const MapOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m9.503 3.25 4.993 2.499.006.002c.314.155.682.155.996 0l.006-.002 3.868-1.935A1.125 1.125 0 0 1 21 4.82v12.485c0 .426-.24.816-.622 1.006l-4.875 2.437a1.125 1.125 0 0 1-1.006 0l-4.993-2.497a1.125 1.125 0 0 0-1.008 0l-3.868 1.935A1.125 1.125 0 0 1 3 19.18V6.695c0-.427.241-.816.621-1.006l4.875-2.437.041-.02a1.125 1.125 0 0 1 .966.019Z"
  }));

  const MappinOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 23s10-4.82 10-13.2c0-2.334-1.054-4.572-2.929-6.223C17.196 1.927 14.652 1 12 1s-5.196.927-7.071 2.577S2 7.467 2 9.8C2 18.18 12 23 12 23Zm2.828-10.711C15.578 11.629 16 10.734 16 9.8c0-.934-.421-1.829-1.172-2.489-.75-.66-1.767-1.031-2.828-1.031-1.06 0-2.078.37-2.828 1.031C8.422 7.971 8 8.866 8 9.8c0 .934.421 1.829 1.172 2.489.75.66 1.767 1.031 2.828 1.031 1.06 0 2.078-.37 2.828-1.031Z",
    clipRule: "evenodd"
  }));

  const MessageCloseOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M11.6 13.021a.75.75 0 0 0 .8 0l8.85-5.589V19a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25V7.432l8.85 5.59ZM5.705 5.75h12.59L12 9.726 5.705 5.75Z"
  }));

  const MessageOpenOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m12.61 2.79 7.222 4.72L12 11.424 4.269 7.56l8.077-4.775a.25.25 0 0 1 .264.006Zm8.64 6.805v11.228a.25.25 0 0 1-.25.25H3a.25.25 0 0 1-.25-.25V9.595l8.915 4.458a.75.75 0 0 0 .67 0l8.915-4.458Z"
  }));

  const MessageTextOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.375 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm3.75 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM2 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.288 48.288 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.395 48.395 0 0 0 11.75 3c-2.392 0-4.744.175-7.043.513C3.123 3.746 2 5.14 2 6.741v6.019Z"
  }));

  const MicOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M14.125 15.493a3.302 3.302 0 0 1-2.399 1.05 3.3 3.3 0 0 1-2.399-1.05 3.694 3.694 0 0 1-.994-2.537V9.61M5.62 11.522v1.434c0 1.589.554 3.121 1.555 4.305 1.002 1.184 2.38 1.936 3.874 2.113h.678M8.333 23h3.393m3.393 0h-3.393m4.552-5.739c-1.001 1.184-2.38 1.936-3.873 2.113h-.679M8.446 4.149a3.64 3.64 0 0 1 .881-1.62 3.302 3.302 0 0 1 2.4-1.05 3.3 3.3 0 0 1 2.398 1.05 3.69 3.69 0 0 1 .994 2.536v5.978M2 1l19 18.174m-9.274.2V23"
  }));

  const MicOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M5 11.5V13c0 1.66.59 3.263 1.655 4.5 1.066 1.238 3.256 2.315 4.845 2.5m0 0v3m0-3c1.589-.185 3.779-1.262 4.845-2.5A6.9 6.9 0 0 0 18 13v-1.5M7.889 23H11.5m3.611 0H11.5M7.889 4.75c0-.995.38-1.948 1.058-2.652A3.545 3.545 0 0 1 11.5 1c.958 0 1.876.395 2.553 1.098a3.824 3.824 0 0 1 1.058 2.652V13c0 .995-.38 1.948-1.058 2.652A3.545 3.545 0 0 1 11.5 16.75a3.545 3.545 0 0 1-2.553-1.098A3.825 3.825 0 0 1 7.889 13V4.75Z"
  }));

  const MinusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M19 12H4"
  }));

  const MoneyDollarOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));

  const MoneyRupeeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 0 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  }));

  const MoreHorizontalOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M5.25 12.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm8 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm8 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
  }));

  const MoreVerticleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M11.5 18.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-8a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm0-8a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z"
  }));

  const MusicOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M22 13V3.017c0-.32-.153-.62-.413-.813a1.049 1.049 0 0 0-.91-.164l-6.55 1.865L9 5.5l-.103 2.01v8.99M22 13v2.22c0 1.873-1.544 3.39-3.448 3.39-1.905 0-3.449-1.517-3.449-3.39 0-1.872 1.544-3.39 3.449-3.39.49 0 .957.101 1.379.283 0 0 0 0 0 0l1.034.443L22 13ZM8.897 16.5v2.11c0 1.872-1.544 3.39-3.449 3.39C3.544 22 2 20.482 2 18.61s1.544-3.39 3.448-3.39c.49 0 .957.101 1.38.282l2.069.998Z"
  }));

  const NavigationOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m3 11 19-9-9 19-2-8-8-2Z"
  }));

  const PaperClipOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m19.5 12-8.21 7.194a4.435 4.435 0 0 1-6.137-.28v0a4.435 4.435 0 0 1 .258-6.363l9.622-8.599a3.23 3.23 0 0 1 4.34.031v0a3.23 3.23 0 0 1-.039 4.79l-9.44 8.404a1.88 1.88 0 0 1-2.625-.122v0a1.88 1.88 0 0 1 .172-2.727L15.044 8"
  }));

  const PauseOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6 2v19.5m12 0V2"
  }));

  const PencilOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m14.886 5.018 1.321-1.886c.438-.625 1.343-.747 2.022-.272.678.476.874 1.368.436 1.993l-1.321 1.886m-2.458-1.72L5.64 18.223c-.26.37-.297.834-.143 1.25l-.107.943c-.044.383.387.685.732.513l.85-.424c.443.003.866-.191 1.125-.561l9.247-13.206m-2.458-1.72 1.23.86 1.228.86"
  }));

  const PencilSquareOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 0 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13H6.8v-1.885a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
  }));

  const PhoneAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M11 9h3m0 0h3m-3 0V6m0 3v3M1 4a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19a3 3 0 0 1-3 3h-2.25C8.052 22 1 14.948 1 6.25V4Z"
  }));

  const PhoneCrossOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m14.121 10.364 2.122-2.121m0 0 2.121-2.122m-2.121 2.122L14.12 6.12m2.122 2.122 2.121 2.12M1 4a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19a3 3 0 0 1-3 3h-2.25C8.052 22 1 14.948 1 6.25V4Z"
  }));

  const PhoneHangOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M22.182 11.182c.482.482.774 1.115.812 1.759.038.644-.182 1.247-.61 1.675l-.74.74c-.463.463-1.222.512-1.84.119l-3.276-2.086a1.799 1.799 0 0 1-.628-.684 1.608 1.608 0 0 1-.183-.874l.109-1.285a.287.287 0 0 0-.146-.281 9.89 9.89 0 0 0-3.883-1.069 8.551 8.551 0 0 0-3.784.618c-.078.032-.14.129-.113.266l.26 1.306c.06.298.032.597-.08.86a1.278 1.278 0 0 1-.552.614l-3.052 1.713c-.576.323-1.347.184-1.868-.338l-.831-.83a2.743 2.743 0 0 1-.813-1.76c-.038-.644.182-1.247.61-1.675l1.213-1.213c4.686-4.686 12.76-4.21 18.031 1.061l1.364 1.364Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const PhoneOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M1 4a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19a3 3 0 0 1-3 3h-2.25C8.052 22 1 14.948 1 6.25V4Z",
    clipRule: "evenodd"
  }));

  const PlayNextOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M18 3v8.5m0 0L6.667 4.667A1.125 1.125 0 0 0 5 5.653v12.695a1.125 1.125 0 0 0 1.667.985L18 11.5Zm0 0V21"
  }));

  const PlayOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m6.918 4.667 11.54 6.348a1.125 1.125 0 0 1 0 1.97l-11.54 6.349a1.125 1.125 0 0 1-1.667-.986L5.25 5.653c0-.855.917-1.398 1.668-.986Z"
  }));

  const PlayPreviousOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M5 21v-9m0 0 11.333 7.333c.75.412 1.667-.13 1.667-.986V5.652a1.125 1.125 0 0 0-1.667-.985L5 12Zm0 0V3"
  }));

  const PlusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 1 1 0 1.5h-6.75v6.75a.75.75 0 1 1-1.5 0v-6.75H4.5a.75.75 0 1 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",
    clipRule: "evenodd"
  }));

  const PowerOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M12 2.25a.75.75 0 0 1 .75.75v9a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.166 5.106a.75.75 0 0 1 0 1.06 8.25 8.25 0 1 0 11.668 0 .75.75 0 1 1 1.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 0 1 1.06 0Z",
    clipRule: "evenodd"
  }));

  const QrcodeOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2 5.125C2 3.399 3.4 2 5.125 2h2.083c1.726 0 3.125 1.4 3.125 3.125v2.083a3.125 3.125 0 0 1-3.125 3.125H5.125A3.125 3.125 0 0 1 2 7.208V5.125Zm0 11.667c0-1.726 1.4-3.125 3.125-3.125h2.083a3.125 3.125 0 0 1 3.125 3.125v2.083A3.125 3.125 0 0 1 7.208 22H5.125A3.125 3.125 0 0 1 2 18.875v-2.083ZM13.667 5.125A3.125 3.125 0 0 1 16.792 2h2.083C20.601 2 22 3.4 22 5.125v2.083c0 1.726-1.4 3.125-3.125 3.125h-2.083a3.125 3.125 0 0 1-3.125-3.125V5.125Zm0 9.792c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Zm0 5c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Zm5-5c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Zm0 5c0-.69.56-1.25 1.25-1.25h.833c.69 0 1.25.56 1.25 1.25v.833c0 .69-.56 1.25-1.25 1.25h-.833c-.69 0-1.25-.56-1.25-1.25v-.833Z"
  }));

  const QuestionMarkOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
  }));

  const RadioOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16.24 7.76a5.999 5.999 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14M14 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
  }));

  const RecycleBinOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m9.614 8.998.772-1.545c.645-1.29 2.486-1.29 3.13 0l.773 1.545m1.666 3.333.943 1.886a1.75 1.75 0 0 1-1.565 2.533h-.882m-6.504-4.419-.943 1.886A1.75 1.75 0 0 0 8.57 16.75h.882M4.001 2.048A1 1 0 0 1 5 1h13.902a1 1 0 0 1 1 1.048l-.815 17.095A3 3 0 0 1 16.091 22H7.81a3 3 0 0 1-2.996-2.857L4.001 2.048Z"
  }));

  const RecycleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m5.333 15.333-2.61 5.22A1 1 0 0 0 3.619 22H7m8.333-13.333-2.439-4.878a1 1 0 0 0-1.788 0l-2.44 4.878m10 6.666L20 18l1.276 2.553A1 1 0 0 1 20.382 22H17"
  }));

  const ScannerOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7 2H2v5m0 10v5h5m10 0h5v-5m0-10V2h-5m-7 5v10H6.5V7H10Zm8 0h-3.5v10H18V7Z"
  }));

  const SendOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4.556 3.107c-.862-.43-1.837.517-1.48 1.412.712 1.785 1.509 4.153 1.72 6.235H9.85a.5.5 0 0 1 0 1h-5c0 2.288-.945 5.157-1.774 7.234-.357.895.618 1.843 1.48 1.413l15.505-7.753a1 1 0 0 0 0-1.788L4.556 3.107Z"
  }));

  const ServerOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M5 2a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm10 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 13a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-3a3 3 0 0 0-3-3H5Zm9 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));

  const ShareOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0-12.814a2.249 2.249 0 0 0 4.219-1.344 2.252 2.252 0 0 0-3.324-1.678 2.25 2.25 0 0 0-.895 3.022Zm0 12.814a2.251 2.251 0 1 0 3.936 2.187 2.251 2.251 0 0 0-3.936-2.187Z"
  }));

  const SheildOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m9.196 3 1.554-.723a2.96 2.96 0 0 1 2.5 0l8.08 3.76c.408.19.67.604.67 1.06V10.2c0 1.963-.47 3.828-1.309 5.475M4.5 5.185l-1.83.852c-.408.19-.67.604-.67 1.06V10.2C2 16.103 6.25 21.12 12 22a11.648 11.648 0 0 0 6.186-3M5 3l16.672 17.264"
  }));

  const SheildOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M2.75 7.096a.42.42 0 0 1 .236-.38l8.08-3.76a2.21 2.21 0 0 1 1.868.001l8.08 3.76c.14.065.236.21.236.38V10.2c0 5.502-3.933 10.169-9.25 11.04-5.317-.871-9.25-5.538-9.25-11.04V7.096Z"
  }));

  const SignalOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.364 16.538A5.25 5.25 0 0 1 12.076 15m-6.894-1.644A9.708 9.708 0 0 1 9 10.996m9.97 2.36a9.711 9.711 0 0 0-3.819-2.36M2 10.173A14.237 14.237 0 0 1 5.704 7.5m16.448 2.674A14.229 14.229 0 0 0 10 6.15M5.704 4 18.97 19.72m-6.364 0-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
  }));

  const SignalOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
  }));

  const SkewerOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M12 18H5a1 1 0 0 1-1-1 5 5 0 0 1 2.576-4.374c.309-.172.543-.462.593-.812l.688-4.811c.055-.39-.131-.77-.428-1.029A4.157 4.157 0 0 1 6 2.834c0-.46.373-.834.833-.834h10.334c.46 0 .833.373.833.833a4.157 4.157 0 0 1-1.429 3.141c-.297.26-.484.638-.428 1.029l.688 4.81c.05.35.285.641.593.813A4.999 4.999 0 0 1 20 17a1 1 0 0 1-1 1h-7Zm0 0v3.5"
  }));

  const SoundOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M16.668 8.07c.526.24 1.004.59 1.406 1.034.403.443.722.968.94 1.547.218.579.33 1.199.33 1.825 0 .626-.112 1.247-.33 1.825-.146.387-.337.75-.568 1.082M6.878 7.707c-.356.183-.324.227-.662.318-.744.2-1.687.217-2.493.177C2.818 8.157 2 8.846 2 9.745v5.462c0 .9.818 1.589 1.723 1.544.806-.04 1.749-.023 2.493.177 2.005.537 4.417 2.895 6.05 4.726.623.7 1.875.267 1.875-.666v-5.655m.054-6.19-.054-5.179c0-.933-1.252-1.365-1.875-.666A30.23 30.23 0 0 1 9.772 5.81M20.05 16.997c.942-1.27 1.463-2.866 1.463-4.52 0-1.898-.685-3.718-1.905-5.06-.948-1.042-2.158-1.73-3.46-1.984m1.463 13.6c-.617.296-.787.395-1.464.467M3.951 2 22 21.524"
  }));

  const SoundOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M16 4.4c1.523.163 2.955.885 4.047 2.054C21.297 7.792 22 9.607 22 11.5c0 1.893-.702 3.708-1.953 5.046-1.092 1.169-2.524 1.89-4.047 2.054m0-11.804c.354.058.702.161 1.034.309.54.239 1.03.59 1.442 1.031.413.442.74.966.963 1.543a5.05 5.05 0 0 1 0 3.642 4.794 4.794 0 0 1-.963 1.543 4.439 4.439 0 0 1-1.442 1.031c-.332.148-.68.251-1.034.309M3.766 7.236C2.838 7.191 2 7.88 2 8.776v5.448c0 .897.838 1.585 1.766 1.54.826-.04 1.792-.023 2.555.176 2.055.537 4.528 2.888 6.202 4.715.638.698 1.921.267 1.921-.665V3.01c0-.932-1.283-1.363-1.921-.665C10.849 4.17 8.376 6.523 6.32 7.06c-.763.199-1.73.216-2.555.176Z"
  }));

  const SparkleOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m18.9 2 .732 2.379H22l-1.917 1.47.732 2.38L18.9 6.757l-1.917 1.47.732-2.379-1.917-1.47h2.37L18.9 2ZM7.622 5.376a.2.2 0 0 1 .382 0l1.23 3.995a.2.2 0 0 0 .191.141h4.001a.2.2 0 0 1 .122.36l-3.255 2.496a.2.2 0 0 0-.07.218l1.24 4.026a.2.2 0 0 1-.314.218l-3.214-2.466a.2.2 0 0 0-.243 0L4.477 16.83a.2.2 0 0 1-.313-.218l1.24-4.026a.2.2 0 0 0-.07-.218L2.079 9.871a.2.2 0 0 1 .121-.359h4.001a.2.2 0 0 0 .192-.14l1.23-3.996Zm12.01 12.774-.733-2.378-.732 2.379h-2.369l1.917 1.47L16.983 22l1.916-1.47L20.817 22l-.732-2.379 1.917-1.47h-2.37Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const SpeakerOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M4 2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2Zm9 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-4 8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Z",
    clipRule: "evenodd"
  }));

  const SquareLayoutOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M11 2h10a1 1 0 0 1 1 1v10M11 2v11m0-11H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8m11-9H11m11 0v8a1 1 0 0 1-1 1H11m0-9v9"
  }));

  const SquareStackOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
  }));

  const StackOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m-15 0c.235-.083.487-.128.75-.128h13.5c.256 0 .51.043.75.128m-15 0A2.25 2.25 0 0 0 3 12v6a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18v-6a2.25 2.25 0 0 0-1.5-2.122"
  }));

  const StarOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "m14.601 8.505.176.423.457.037 5.404.433c.499.04.702.661.321.987l-4.117 3.527-.348.298.106.446 1.257 5.273a.562.562 0 0 1-.84.61l-4.626-2.825-.391-.239-.39.239-4.628 2.826a.562.562 0 0 1-.84-.61v-.001L7.4 14.656l.106-.446-.348-.298-4.117-3.527a.562.562 0 0 1 .32-.987l5.405-.433.457-.037.176-.423 2.082-5.007a.563.563 0 0 1 1.039 0l2.082 5.007Z"
  }));

  const SwatchOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M10.557 20.682c-.844.844-2.614 1.068-3.807 1.068m3.807-1.068c.806-.806.65-2.136.69-3.272m-.69 3.272S19.465 13 20.5 13c1.035 0 1.25.589 1.25 1.625v5.25a1.875 1.875 0 0 1-1.875 1.875H6.75m0 0a4.5 4.5 0 0 1-4.5-4.5V4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V6.5m0 0v10.75c0 .054-.001.107-.003.16M11.25 6.5l1.499-1.614.1-.099a1.875 1.875 0 0 1 2.651 0L19.212 8.5a1.875 1.875 0 0 1 0 2.651l-7.965 6.26m-4.497.964a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
  }));

  const TagOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M21.39 5.25v4.318a2.251 2.251 0 0 1-.66 1.592l-9.58 9.58c-.7.699-1.78.872-2.608.33a18.095 18.095 0 0 1-5.223-5.223c-.542-.827-.369-1.908.33-2.607l9.581-9.581A2.248 2.248 0 0 1 14.821 3h4.318a2.25 2.25 0 0 1 2.25 2.25ZM18.5 7.134a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    clipRule: "evenodd"
  }));

  const TemperatureOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"
  }));

  const TextOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M4 7V4h16v3M9 20h6M12 4v16"
  }));

  const ThunderOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M3 13.539 14.454 2 12 10.461h9L9.545 22 12 13.539H3Z"
  }));

  const TrashOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M16.5 5.205v-.227c0-1.564-1.212-2.9-2.815-2.951a52.663 52.663 0 0 0-3.369 0C8.713 2.077 7.5 3.414 7.5 4.977v.228m9 0c1.299.119 2.593.29 3.878.512a.75.75 0 0 1-.256 1.478l-.209-.035-1.005 13.07A3 3 0 0 1 15.917 23H8.084a3 3 0 0 1-2.991-2.77L4.087 7.16l-.209.035a.75.75 0 1 1-.256-1.478A48.564 48.564 0 0 1 7.5 5.205m9 0c-1.998-.121-7.002-.121-9 0"
  }));

  const TvOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M12.5 18H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-6.5Zm0 0v3.75m-5 0h10"
  }));

  const UnderlineOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6 3v7a6 6 0 1 0 12 0V3M4 21h16"
  }));

  const UserAddOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M21 8.113v3.97m-2-1.985h4m-6.5-4.55c0 2.513-2.462 4.55-5.5 4.55S5.5 8.06 5.5 5.548C5.5 3.038 7.962 1 11 1s5.5 2.037 5.5 4.549ZM1 18.452c0-2.512 2.462-4.549 5.5-4.549h9c3.038 0 5.5 2.037 5.5 4.55C21 20.962 18.538 23 15.5 23h-9C3.462 23 1 20.963 1 18.451Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const UserGroupOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M15.292 13.333h-8.25C4.257 13.333 2 15.385 2 17.917 2 20.448 4.257 22.5 7.042 22.5h8.25c2.784 0 5.041-2.052 5.041-4.583 0-2.532-2.257-4.584-5.041-4.584Zm0 0c.37-.409.93-1.5 1.558-1.5h3.3c1.114 0 2.017.821 2.017 1.834 0 1.012-.903 1.833-2.017 1.833m-3.942-8.917c0 2.532-2.257 4.584-5.041 4.584-2.785 0-5.042-2.052-5.042-4.584C6.125 4.052 8.382 2 11.167 2c2.784 0 5.041 2.052 5.041 4.583ZM21.736 8c0 1.013-.903 1.833-2.017 1.833-1.114 0-2.017-.82-2.017-1.833s.903-1.833 2.017-1.833c1.114 0 2.017.82 2.017 1.833Z"
  }));

  const UserMinusOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M17.762 11.278H23m-5.578-5.606c0 2.58-2.58 4.672-5.762 4.672-3.182 0-5.762-2.092-5.762-4.672C5.898 3.092 8.478 1 11.66 1c3.182 0 5.762 2.092 5.762 4.672ZM1 18.328c0-2.58 2.58-4.672 5.762-4.672h9.428c3.183 0 5.762 2.092 5.762 4.672 0 2.58-2.58 4.672-5.762 4.672H6.762C3.58 23 1 20.908 1 18.328Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const UserOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "M6.552 3.5c.942-.922 2.3-1.5 3.81-1.5 2.843 0 5.149 2.052 5.149 4.583 0 1.66-.99 3.112-2.474 3.917m-2.675 2.333H6.149C3.305 12.833 1 14.885 1 17.417 1 19.948 3.305 22 6.149 22h8.425c1.476 0 2.806-.552 3.745-1.438M1 2l22 20"
  }));

  const UserOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M17.5 6.342c0 2.398-2.462 4.342-5.5 4.342S6.5 8.74 6.5 6.342C6.5 3.944 8.962 2 12 2s5.5 1.944 5.5 4.342ZM2 18.658c0-2.398 2.462-4.342 5.5-4.342h9c3.038 0 5.5 1.944 5.5 4.342C22 21.056 19.538 23 16.5 23h-9C4.462 23 2 21.056 2 18.658Z"
  }));

  const VideoOffOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M16 18v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 9v10M4 3l18.5 19"
  }));

  const VideoOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M17 9.857V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.857m0-4.286 3.684-2.631a.2.2 0 0 1 .316.163v9.222a.2.2 0 0 1-.316.163L17 14.143m0-4.286v4.286"
  }));

  const ViewOnceOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeWidth: 1.5,
    d: "m8.584 9.376 3-2A.75.75 0 0 1 12.75 8v9M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
  }));

  const WaletOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.5,
    d: "M19.75 6.727a.557.557 0 0 1-.006.08C21.041 7.086 22 8.084 22 9.272v10.181C22 20.86 20.657 22 19 22H5c-1.657 0-3-1.14-3-2.546V9.274c0-1.113.841-2.059 2.014-2.405L18.683 1.06a.867.867 0 0 1 .72.04c.216.116.347.319.347.536v5.091Zm0 0H4.37m13.13 9.334c.828 0 1.5-.57 1.5-1.273s-.672-1.273-1.5-1.273-1.5.57-1.5 1.273.672 1.273 1.5 1.273Z"
  }));

  const WindowOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#a)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.4,
    d: "M5 1.3A3.7 3.7 0 0 0 1.3 5v14A3.7 3.7 0 0 0 5 22.7h14a3.7 3.7 0 0 0 3.7-3.7V5A3.7 3.7 0 0 0 19 1.3H5ZM6.3 6a.3.3 0 1 1-.6 0 .3.3 0 0 1 .6 0Zm3 0a.3.3 0 1 1-.6 0 .3.3 0 0 1 .6 0Zm3 0a.3.3 0 1 1-.6 0 .3.3 0 0 1 .6 0Z"
  })), /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));

  const XOutline = props => /*#__PURE__*/React__namespace.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__namespace.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M6 18 18 6M6 6l12 12"
  }));

  exports.ActivityOutline = ActivityOutline;
  exports.ActivitySolid = ActivitySolid;
  exports.AdjustHorizontalOutline = AdjustHorizontalOutline;
  exports.AdjustHorizontalSolid = AdjustHorizontalSolid;
  exports.AdjustSquareOutline = AdjustSquareOutline;
  exports.AdjustSquareSolid = AdjustSquareSolid;
  exports.AdjustVerticleOutline = AdjustVerticleOutline;
  exports.AdjustVerticleSolid = AdjustVerticleSolid;
  exports.ApertureOutline = ApertureOutline;
  exports.ApertureSolid = ApertureSolid;
  exports.ArchiveAddOutline = ArchiveAddOutline;
  exports.ArchiveAddSolid = ArchiveAddSolid;
  exports.ArchiveArrowDownOutline = ArchiveArrowDownOutline;
  exports.ArchiveArrowDownSolid = ArchiveArrowDownSolid;
  exports.ArchiveArrowUpOutline = ArchiveArrowUpOutline;
  exports.ArchiveArrowUpSolid = ArchiveArrowUpSolid;
  exports.ArchiveMinusOutline = ArchiveMinusOutline;
  exports.ArchiveMinusSolid = ArchiveMinusSolid;
  exports.ArrowAngleDownOutline = ArrowAngleDownOutline;
  exports.ArrowAngleDownSolid = ArrowAngleDownSolid;
  exports.ArrowAngleLeftOutline = ArrowAngleLeftOutline;
  exports.ArrowAngleLeftSolid = ArrowAngleLeftSolid;
  exports.ArrowAngleRightOutline = ArrowAngleRightOutline;
  exports.ArrowAngleRightSolid = ArrowAngleRightSolid;
  exports.ArrowAngleUpOutline = ArrowAngleUpOutline;
  exports.ArrowAngleUpSolid = ArrowAngleUpSolid;
  exports.ArrowBarDownOutline = ArrowBarDownOutline;
  exports.ArrowBarDownSolid = ArrowBarDownSolid;
  exports.ArrowBarLeftOutline = ArrowBarLeftOutline;
  exports.ArrowBarLeftSolid = ArrowBarLeftSolid;
  exports.ArrowBarRightOutline = ArrowBarRightOutline;
  exports.ArrowBarRightSolid = ArrowBarRightSolid;
  exports.ArrowBarUpOutline = ArrowBarUpOutline;
  exports.ArrowBarUpSolid = ArrowBarUpSolid;
  exports.ArrowCycleCircleOutline = ArrowCycleCircleOutline;
  exports.ArrowCycleCircleSolid = ArrowCycleCircleSolid;
  exports.ArrowCycleSquareOutline = ArrowCycleSquareOutline;
  exports.ArrowCycleSquareSolid = ArrowCycleSquareSolid;
  exports.ArrowDoubleHorizontalOutline = ArrowDoubleHorizontalOutline;
  exports.ArrowDoubleHorizontalSolid = ArrowDoubleHorizontalSolid;
  exports.ArrowDoubleVerticleOutline = ArrowDoubleVerticleOutline;
  exports.ArrowDoubleVerticleSolid = ArrowDoubleVerticleSolid;
  exports.ArrowDownLeftOutline = ArrowDownLeftOutline;
  exports.ArrowDownLeftSolid = ArrowDownLeftSolid;
  exports.ArrowDownOutline = ArrowDownOutline;
  exports.ArrowDownRightOutline = ArrowDownRightOutline;
  exports.ArrowDownRightSolid = ArrowDownRightSolid;
  exports.ArrowDownSolid = ArrowDownSolid;
  exports.ArrowLeftOutline = ArrowLeftOutline;
  exports.ArrowLeftSolid = ArrowLeftSolid;
  exports.ArrowRectDownOutline = ArrowRectDownOutline;
  exports.ArrowRectDownSolid = ArrowRectDownSolid;
  exports.ArrowRectLeftOutline = ArrowRectLeftOutline;
  exports.ArrowRectLeftSolid = ArrowRectLeftSolid;
  exports.ArrowRectRightOutline = ArrowRectRightOutline;
  exports.ArrowRectRightSolid = ArrowRectRightSolid;
  exports.ArrowRectUpOutline = ArrowRectUpOutline;
  exports.ArrowRectUpSolid = ArrowRectUpSolid;
  exports.ArrowRightOutline = ArrowRightOutline;
  exports.ArrowRightSolid = ArrowRightSolid;
  exports.ArrowRoundedDownOutline = ArrowRoundedDownOutline;
  exports.ArrowRoundedDownSolid = ArrowRoundedDownSolid;
  exports.ArrowRoundedLeftOutline = ArrowRoundedLeftOutline;
  exports.ArrowRoundedLeftSolid = ArrowRoundedLeftSolid;
  exports.ArrowRoundedRightOutline = ArrowRoundedRightOutline;
  exports.ArrowRoundedRightSolid = ArrowRoundedRightSolid;
  exports.ArrowRoundedUpOutline = ArrowRoundedUpOutline;
  exports.ArrowRoundedUpSolid = ArrowRoundedUpSolid;
  exports.ArrowTopLeftOutline = ArrowTopLeftOutline;
  exports.ArrowTopRightOutline = ArrowTopRightOutline;
  exports.ArrowTopRightSolid = ArrowTopRightSolid;
  exports.ArrowTrendsDownOutline = ArrowTrendsDownOutline;
  exports.ArrowTrendsDownSolid = ArrowTrendsDownSolid;
  exports.ArrowTrendsUpOutline = ArrowTrendsUpOutline;
  exports.ArrowTrendsUpSolid = ArrowTrendsUpSolid;
  exports.ArrowUDownOutline = ArrowUDownOutline;
  exports.ArrowUDownSolid = ArrowUDownSolid;
  exports.ArrowUUpOutline = ArrowUUpOutline;
  exports.ArrowUUpSolid = ArrowUUpSolid;
  exports.ArrowUpOutline = ArrowUpOutline;
  exports.ArrowUpSolid = ArrowUpSolid;
  exports.ArrowsInOutline = ArrowsInOutline;
  exports.ArrowsInSolid = ArrowsInSolid;
  exports.ArrowsOutOutline = ArrowsOutOutline;
  exports.ArrowsOutSolid = ArrowsOutSolid;
  exports.AtTheRateOutline = AtTheRateOutline;
  exports.AtTheRateSolid = AtTheRateSolid;
  exports.AwardOutline = AwardOutline;
  exports.AwardSolid = AwardSolid;
  exports.BackwardOutline = BackwardOutline;
  exports.BackwardSolid = BackwardSolid;
  exports.BadgeOutline = BadgeOutline;
  exports.BadgeSolid = BadgeSolid;
  exports.BarAlignCenterOutline = BarAlignCenterOutline;
  exports.BarAlignCenterSolid = BarAlignCenterSolid;
  exports.BarAlignDownOutline = BarAlignDownOutline;
  exports.BarAlignDownSolid = BarAlignDownSolid;
  exports.BarAlignLeftOutline = BarAlignLeftOutline;
  exports.BarAlignLeftSolid = BarAlignLeftSolid;
  exports.BarAlignRightOutline = BarAlignRightOutline;
  exports.BarAlignRightSolid = BarAlignRightSolid;
  exports.BarAlignUpOutline = BarAlignUpOutline;
  exports.BarAlignUpSolid = BarAlignUpSolid;
  exports.BarCodeOutline = BarCodeOutline;
  exports.BarCodeSolid = BarCodeSolid;
  exports.BarThreeOutline = BarThreeOutline;
  exports.BarThreeSolid = BarThreeSolid;
  exports.BarTwoOutline = BarTwoOutline;
  exports.BarTwoSolid = BarTwoSolid;
  exports.BatteryOutline = BatteryOutline;
  exports.BatterySolid = BatterySolid;
  exports.BellOffOutline = BellOffOutline;
  exports.BellOffSolid = BellOffSolid;
  exports.BellOutline = BellOutline;
  exports.BellSolid = BellSolid;
  exports.BlockCircleOutline = BlockCircleOutline;
  exports.BlockCircleSolid = BlockCircleSolid;
  exports.BlockSquareOutline = BlockSquareOutline;
  exports.BlockSquareSolid = BlockSquareSolid;
  exports.BluetoothOutline = BluetoothOutline;
  exports.BluetoothSolid = BluetoothSolid;
  exports.BoldOutline = BoldOutline;
  exports.BoldSolid = BoldSolid;
  exports.BookCloseOutline = BookCloseOutline;
  exports.BookCloseSolid = BookCloseSolid;
  exports.BookMarkOffOutline = BookMarkOffOutline;
  exports.BookMarkOffSolid = BookMarkOffSolid;
  exports.BookOpenOutline = BookOpenOutline;
  exports.BookOpenSolid = BookOpenSolid;
  exports.BookmarkOutline = BookmarkOutline;
  exports.BookmarkSolid = BookmarkSolid;
  exports.BreifcaseOutline = BreifcaseOutline;
  exports.BreifcaseSolid = BreifcaseSolid;
  exports.BrightnessOutline = BrightnessOutline;
  exports.BrightnessSolid = BrightnessSolid;
  exports.CalenderOutline = CalenderOutline;
  exports.CalenderSolid = CalenderSolid;
  exports.CameraOffOutline = CameraOffOutline;
  exports.CameraOffSolid = CameraOffSolid;
  exports.CameraOutline = CameraOutline;
  exports.CameraSolid = CameraSolid;
  exports.CartOutline = CartOutline;
  exports.CartSolid = CartSolid;
  exports.CastOutline = CastOutline;
  exports.CastSolid = CastSolid;
  exports.ChartLinesOutline = ChartLinesOutline;
  exports.ChartLinesSolid = ChartLinesSolid;
  exports.ChartPieOutline = ChartPieOutline;
  exports.ChartPieSolid = ChartPieSolid;
  exports.ChatOffOutline = ChatOffOutline;
  exports.ChatOffSolid = ChatOffSolid;
  exports.ChatOutline = ChatOutline;
  exports.ChatSolid = ChatSolid;
  exports.CheckOutline = CheckOutline;
  exports.CheckSolid = CheckSolid;
  exports.ChevronDoubleDownOutline = ChevronDoubleDownOutline;
  exports.ChevronDoubleDownSolid = ChevronDoubleDownSolid;
  exports.ChevronDoubleLeftOutline = ChevronDoubleLeftOutline;
  exports.ChevronDoubleLeftSolid = ChevronDoubleLeftSolid;
  exports.ChevronDoubleRightOutline = ChevronDoubleRightOutline;
  exports.ChevronDoubleRightSolid = ChevronDoubleRightSolid;
  exports.ChevronDoubleUpOutline = ChevronDoubleUpOutline;
  exports.ChevronDoubleUpSolid = ChevronDoubleUpSolid;
  exports.ChevronDownOutline = ChevronDownOutline;
  exports.ChevronDownSolid = ChevronDownSolid;
  exports.ChevronHorizontalOutline = ChevronHorizontalOutline;
  exports.ChevronHorizontalSolid = ChevronHorizontalSolid;
  exports.ChevronLeftOutline = ChevronLeftOutline;
  exports.ChevronLeftSolid = ChevronLeftSolid;
  exports.ChevronRightOutline = ChevronRightOutline;
  exports.ChevronRightSolid = ChevronRightSolid;
  exports.ChevronUpOutline = ChevronUpOutline;
  exports.ChevronUpSolid = ChevronUpSolid;
  exports.ChevronVerticleOutline = ChevronVerticleOutline;
  exports.ChevronVerticleSolid = ChevronVerticleSolid;
  exports.CircleAddOutline = CircleAddOutline;
  exports.CircleAddSolid = CircleAddSolid;
  exports.ClipboardOutline = ClipboardOutline;
  exports.ClipboardSolid = ClipboardSolid;
  exports.ClockOutline = ClockOutline;
  exports.ClockSolid = ClockSolid;
  exports.CloudOffOutline = CloudOffOutline;
  exports.CloudOffSolid = CloudOffSolid;
  exports.ClouldOutline = ClouldOutline;
  exports.ClouldSolid = ClouldSolid;
  exports.CommentOffOutline = CommentOffOutline;
  exports.CommentOffSolid = CommentOffSolid;
  exports.CommentOutline = CommentOutline;
  exports.CommentSolid = CommentSolid;
  exports.CompasOutline = CompasOutline;
  exports.CompasSolid = CompasSolid;
  exports.ContrastOutline = ContrastOutline;
  exports.ContrastSolid = ContrastSolid;
  exports.CropOutline = CropOutline;
  exports.CropSolid = CropSolid;
  exports.DocumentAddOutline = DocumentAddOutline;
  exports.DocumentAddSolid = DocumentAddSolid;
  exports.DocumentArrowDownOutline = DocumentArrowDownOutline;
  exports.DocumentArrowDownSolid = DocumentArrowDownSolid;
  exports.DocumentArrowUpOutline = DocumentArrowUpOutline;
  exports.DocumentArrowUpSolid = DocumentArrowUpSolid;
  exports.DocumentMinusOutline = DocumentMinusOutline;
  exports.DocumentMinusSolid = DocumentMinusSolid;
  exports.DocumentOutline = DocumentOutline;
  exports.DocumentSolid = DocumentSolid;
  exports.DrawOutline = DrawOutline;
  exports.DrawSolid = DrawSolid;
  exports.ExclimationCircleOutline = ExclimationCircleOutline;
  exports.ExclimationCircleSolid = ExclimationCircleSolid;
  exports.ExclimationTriangleOutline = ExclimationTriangleOutline;
  exports.ExclimationTriangleSolid = ExclimationTriangleSolid;
  exports.ExpandDownOutline = ExpandDownOutline;
  exports.ExpandDownSolid = ExpandDownSolid;
  exports.ExpandUpOutline = ExpandUpOutline;
  exports.ExpandUpSolid = ExpandUpSolid;
  exports.ExternalLinkOutline = ExternalLinkOutline;
  exports.ExternalLinkSolid = ExternalLinkSolid;
  exports.EyeOffOutline = EyeOffOutline;
  exports.EyeOffSolid = EyeOffSolid;
  exports.EyeOutline = EyeOutline;
  exports.EyeSolid = EyeSolid;
  exports.FacebookOutline = FacebookOutline;
  exports.FacebookSolid = FacebookSolid;
  exports.FigmaOutline = FigmaOutline;
  exports.FigmaSolid = FigmaSolid;
  exports.FilmOutline = FilmOutline;
  exports.FilmSolid = FilmSolid;
  exports.FilterSolid = FilterSolid;
  exports.FireOutline = FireOutline;
  exports.FireSolid = FireSolid;
  exports.FlagOutline = FlagOutline;
  exports.FlagSolid = FlagSolid;
  exports.FolderAddOutline = FolderAddOutline;
  exports.FolderAddSolid = FolderAddSolid;
  exports.FolderArrowDownOutline = FolderArrowDownOutline;
  exports.FolderArrowDownSolid = FolderArrowDownSolid;
  exports.FolderArrowUpOutline = FolderArrowUpOutline;
  exports.FolderArrowUpSolid = FolderArrowUpSolid;
  exports.FolderMinusOutline = FolderMinusOutline;
  exports.FolderMinusSolid = FolderMinusSolid;
  exports.FolderOutline = FolderOutline;
  exports.FolderSolid = FolderSolid;
  exports.FontsOutline = FontsOutline;
  exports.FontsSolid = FontsSolid;
  exports.ForwardOutline = ForwardOutline;
  exports.ForwardSolid = ForwardSolid;
  exports.GaleryListOutline = GaleryListOutline;
  exports.GaleryListSolid = GaleryListSolid;
  exports.GearOutline = GearOutline;
  exports.GearSolid = GearSolid;
  exports.GifOutline = GifOutline;
  exports.GifSolid = GifSolid;
  exports.GithubOutline = GithubOutline;
  exports.GithubSolid = GithubSolid;
  exports.GlobeOutline = GlobeOutline;
  exports.GlobeSolid = GlobeSolid;
  exports.GridOutline = GridOutline;
  exports.GridSolid = GridSolid;
  exports.GridSquareAddOutline = GridSquareAddOutline;
  exports.GridSquareAddSolid = GridSquareAddSolid;
  exports.GridSquareMinusOutline = GridSquareMinusOutline;
  exports.GridSquareMinusSolid = GridSquareMinusSolid;
  exports.GridSquareOutline = GridSquareOutline;
  exports.GridSquareSolid = GridSquareSolid;
  exports.HandLeftOutline = HandLeftOutline;
  exports.HandLeftSolid = HandLeftSolid;
  exports.HandRightOutline = HandRightOutline;
  exports.HandRightSolid = HandRightSolid;
  exports.HardDriveOutline = HardDriveOutline;
  exports.HardDriveSolid = HardDriveSolid;
  exports.HashtagOutline = HashtagOutline;
  exports.HashtagSolid = HashtagSolid;
  exports.HeadPieceOutline = HeadPieceOutline;
  exports.HeadPieceSolid = HeadPieceSolid;
  exports.HeadphoneOutline = HeadphoneOutline;
  exports.HeadphoneSolid = HeadphoneSolid;
  exports.HeartOffOutline = HeartOffOutline;
  exports.HeartOffSolid = HeartOffSolid;
  exports.HeartOutline = HeartOutline;
  exports.HeartSolid = HeartSolid;
  exports.HomeOutline = HomeOutline;
  exports.HomeSolid = HomeSolid;
  exports.ImageOutline = ImageOutline;
  exports.ImageSolid = ImageSolid;
  exports.ImageTagOutline = ImageTagOutline;
  exports.ImageTagSolid = ImageTagSolid;
  exports.InboxOutline = InboxOutline;
  exports.InboxSolid = InboxSolid;
  exports.InformationCircleOutline = InformationCircleOutline;
  exports.InformationCircleSolid = InformationCircleSolid;
  exports.InstagramOutline = InstagramOutline;
  exports.InstagramSolid = InstagramSolid;
  exports.ItalicOutline = ItalicOutline;
  exports.ItalicSolid = ItalicSolid;
  exports.LanguageOutline = LanguageOutline;
  exports.LanguageSolid = LanguageSolid;
  exports.LayerOutline = LayerOutline;
  exports.LayerSolid = LayerSolid;
  exports.LinkOutline = LinkOutline;
  exports.LinkSolid = LinkSolid;
  exports.ListCircleOutline = ListCircleOutline;
  exports.ListCircleSolid = ListCircleSolid;
  exports.ListReactangleOutline = ListReactangleOutline;
  exports.ListReactangleSolid = ListReactangleSolid;
  exports.LockOpenOutline = LockOpenOutline;
  exports.LockOpenSolid = LockOpenSolid;
  exports.LockOutline = LockOutline;
  exports.LockSolid = LockSolid;
  exports.MagnificationAddOutline = MagnificationAddOutline;
  exports.MagnificationAddSolid = MagnificationAddSolid;
  exports.MagnificationMinusOutline = MagnificationMinusOutline;
  exports.MagnificationMinusSolid = MagnificationMinusSolid;
  exports.MagnificationOutline = MagnificationOutline;
  exports.MagnificationSolid = MagnificationSolid;
  exports.MapOutline = MapOutline;
  exports.MapSolid = MapSolid;
  exports.MappinOutline = MappinOutline;
  exports.MappinSolid = MappinSolid;
  exports.MessageCloseOutline = MessageCloseOutline;
  exports.MessageCloseSolid = MessageCloseSolid;
  exports.MessageOpenOutline = MessageOpenOutline;
  exports.MessageOpenSolid = MessageOpenSolid;
  exports.MessageTextOutline = MessageTextOutline;
  exports.MessageTextSolid = MessageTextSolid;
  exports.MicOffOutline = MicOffOutline;
  exports.MicOffSolid = MicOffSolid;
  exports.MicOutline = MicOutline;
  exports.MicSolid = MicSolid;
  exports.MinusOutline = MinusOutline;
  exports.MinusSolid = MinusSolid;
  exports.MoneyDollarOutline = MoneyDollarOutline;
  exports.MoneyDollarSolid = MoneyDollarSolid;
  exports.MoneyRupeeOutline = MoneyRupeeOutline;
  exports.MoneyRupeeSolid = MoneyRupeeSolid;
  exports.MoreHorizontalOutline = MoreHorizontalOutline;
  exports.MoreHorizontalSolid = MoreHorizontalSolid;
  exports.MoreVerticleOutline = MoreVerticleOutline;
  exports.MoreVerticleSolid = MoreVerticleSolid;
  exports.MusicOutline = MusicOutline;
  exports.MusicSolid = MusicSolid;
  exports.NavigationOutline = NavigationOutline;
  exports.NavigationSolid = NavigationSolid;
  exports.PaperClipOutline = PaperClipOutline;
  exports.PaperClipSolid = PaperClipSolid;
  exports.PauseOutline = PauseOutline;
  exports.PauseSolid = PauseSolid;
  exports.PencilOutline = PencilOutline;
  exports.PencilSolid = PencilSolid;
  exports.PencilSquareOutline = PencilSquareOutline;
  exports.PencilSquareSolid = PencilSquareSolid;
  exports.PhoneAddOutline = PhoneAddOutline;
  exports.PhoneAddSolid = PhoneAddSolid;
  exports.PhoneCrossOutline = PhoneCrossOutline;
  exports.PhoneCrossSolid = PhoneCrossSolid;
  exports.PhoneHangOutline = PhoneHangOutline;
  exports.PhoneHangSolid = PhoneHangSolid;
  exports.PhoneOutline = PhoneOutline;
  exports.PhoneSolid = PhoneSolid;
  exports.PlayNextOutline = PlayNextOutline;
  exports.PlayNextSolid = PlayNextSolid;
  exports.PlayOutline = PlayOutline;
  exports.PlayPreviousOutline = PlayPreviousOutline;
  exports.PlayPreviousSolid = PlayPreviousSolid;
  exports.PlaySolid = PlaySolid;
  exports.PlusOutline = PlusOutline;
  exports.PlusSolid = PlusSolid;
  exports.PowerOutline = PowerOutline;
  exports.PowerSolid = PowerSolid;
  exports.QrCodeSolid = QrCodeSolid;
  exports.QrcodeOutline = QrcodeOutline;
  exports.QuestionMarkOutline = QuestionMarkOutline;
  exports.QuestionMarkSolid = QuestionMarkSolid;
  exports.RadioOutline = RadioOutline;
  exports.RadioSolid = RadioSolid;
  exports.RecycleBinOutline = RecycleBinOutline;
  exports.RecycleBinSolid = RecycleBinSolid;
  exports.RecycleOutline = RecycleOutline;
  exports.RecycleSolid = RecycleSolid;
  exports.ScannerOutline = ScannerOutline;
  exports.ScannerSolid = ScannerSolid;
  exports.SendOutline = SendOutline;
  exports.SendSolid = SendSolid;
  exports.ServerOutline = ServerOutline;
  exports.ServerSolid = ServerSolid;
  exports.ShareOutline = ShareOutline;
  exports.ShareSolid = ShareSolid;
  exports.SheildOffOutline = SheildOffOutline;
  exports.SheildOffSolid = SheildOffSolid;
  exports.SheildOutline = SheildOutline;
  exports.SheildSolid = SheildSolid;
  exports.SignalOffOutline = SignalOffOutline;
  exports.SignalOffSolid = SignalOffSolid;
  exports.SignalOutline = SignalOutline;
  exports.SignalSolid = SignalSolid;
  exports.SkewerOutline = SkewerOutline;
  exports.SkewerSolid = SkewerSolid;
  exports.SoundOffOutline = SoundOffOutline;
  exports.SoundOffSolid = SoundOffSolid;
  exports.SoundOutline = SoundOutline;
  exports.SoundSolid = SoundSolid;
  exports.SparkleOutline = SparkleOutline;
  exports.SparkleSolid = SparkleSolid;
  exports.SpeakerOutline = SpeakerOutline;
  exports.SpeakerSolid = SpeakerSolid;
  exports.SquareLayoutOutline = SquareLayoutOutline;
  exports.SquareLayoutSolid = SquareLayoutSolid;
  exports.SquareStackOutline = SquareStackOutline;
  exports.SquareStackSolid = SquareStackSolid;
  exports.StackOutline = StackOutline;
  exports.StackSolid = StackSolid;
  exports.StarOutline = StarOutline;
  exports.StarSolid = StarSolid;
  exports.SwatchOutline = SwatchOutline;
  exports.SwatchSolid = SwatchSolid;
  exports.TagOutline = TagOutline;
  exports.TagSolid = TagSolid;
  exports.TemperatureOutline = TemperatureOutline;
  exports.TemperatureSolid = TemperatureSolid;
  exports.TextOutline = TextOutline;
  exports.TextSolid = TextSolid;
  exports.ThunderOutline = ThunderOutline;
  exports.ThunderSolid = ThunderSolid;
  exports.TrashOutline = TrashOutline;
  exports.TrashSolid = TrashSolid;
  exports.TvOutline = TvOutline;
  exports.TvSolid = TvSolid;
  exports.UnderlineOutline = UnderlineOutline;
  exports.UnderlineSolid = UnderlineSolid;
  exports.UserAddOutline = UserAddOutline;
  exports.UserAddSolid = UserAddSolid;
  exports.UserGroupOutline = UserGroupOutline;
  exports.UserGroupSolid = UserGroupSolid;
  exports.UserMinusOutline = UserMinusOutline;
  exports.UserMinusSolid = UserMinusSolid;
  exports.UserOffOutline = UserOffOutline;
  exports.UserOffSolid = UserOffSolid;
  exports.UserOutline = UserOutline;
  exports.UserSolid = UserSolid;
  exports.VideoOffOutline = VideoOffOutline;
  exports.VideoOffSolid = VideoOffSolid;
  exports.VideoOutline = VideoOutline;
  exports.VideoSolid = VideoSolid;
  exports.ViewOnceOutline = ViewOnceOutline;
  exports.ViewOnceSolid = ViewOnceSolid;
  exports.WaletOutline = WaletOutline;
  exports.WaletSolid = WaletSolid;
  exports.WindowOutline = WindowOutline;
  exports.WindowSolid = WindowSolid;
  exports.XOutline = XOutline;
  exports.XSolid = XSolid;

}));

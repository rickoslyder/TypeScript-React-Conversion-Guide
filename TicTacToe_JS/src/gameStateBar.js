"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.GameStateBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var GameStateBar = /** @class */ (function (_super) {
    __extends(GameStateBar, _super);
    function GameStateBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { gameState: "" };
        return _this;
    }
    GameStateBar.prototype.handleGameStateChange = function (e) {
        this.setState({ gameState: e.detail });
    };
    GameStateBar.prototype.handleRestart = function (e) {
        this.setState({ gameState: "" });
    };
    GameStateBar.prototype.componentDidMount = function () {
        var _this = this;
        window.addEventListener("gameStateChange", function (e) { return _this.handleGameStateChange(e); });
        window.addEventListener("restart", function (e) { return _this.handleRestart(e); });
    };
    GameStateBar.prototype.componentWillUnmount = function () {
        var _this = this;
        window.removeEventListener("gameStateChange", function (e) { return _this.handleGameStateChange(e); });
        window.removeEventListener("restart", function (e) { return _this.handleRestart(e); });
    };
    GameStateBar.prototype.render = function () {
        return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "gameStateBar" }, { children: [" ", this.state.gameState, " "] }), void 0));
    };
    return GameStateBar;
}(React.Component));
exports.GameStateBar = GameStateBar;

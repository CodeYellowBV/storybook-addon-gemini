'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manager = require('./manager');

Object.defineProperty(exports, 'register', {
  enumerable: true,
  get: function get() {
    return _manager.register;
  }
});
// addons, panels and events get unique names using a prefix
var ADDON_ID = exports.ADDON_ID = 'storybook-addon-gemini';
var PANEL_ID = exports.PANEL_ID = ADDON_ID + '/gemini-panel';
var EVENT_ID = exports.EVENT_ID = ADDON_ID + '/gemini-event';
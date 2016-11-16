// addons, panels and events get unique names using a prefix
export const ADDON_ID = 'storybook-addon-gemini';
export const PANEL_ID = `${ADDON_ID}/gemini-panel`;
export const EVENT_ID = `${ADDON_ID}/gemini-event`;

export { register } from './manager';

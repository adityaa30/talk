import { DeviceOS, getDeviceOS } from "./utils";

export const cDeviceOS = getDeviceOS();

export const cName = "Name";
export const cRoomId = "RoomId";
export const cLocalAudioEnabled = "LocalAudioEnabled";
export const cLocalVideoEnabled = "LocalVideoEnabled";

export const cDispatchJoinRoom = "join-room";
export const cDispatchShortcutClick = "shortcut-click";

export const cDebounceButtonClickDelay = 500; // milliseconds

export const cKeyboardCommandKey = "⌘";
export const cSpaceBar = "SpaceBar";
export const cKeyboardOptionsKey = "⌥";
export const cKeyboardControlKey = "^";
export const cKeyboardShiftKey = "⇧";

export const cKeyBoardIgnoreKeys = ["META", "CONTROL", "ALT", "SHIFT"];

const cActionKey = cDeviceOS === DeviceOS.MacOS ? cKeyboardCommandKey : cKeyboardControlKey;
export const cKeyboardShortCutToggleCamera = [cActionKey, "c"];
export const cKeyboardShortCutToggleMicrophone = [cActionKey, "m"];
export const cKeyboardShortCutHangup = [cActionKey, "h"];
export const cKeyboardShortCutSettings = [cActionKey, "s"];

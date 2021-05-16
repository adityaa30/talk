import { DeviceOS, getDeviceOS } from "./utils";

export const cDeviceOS = getDeviceOS();

export const cName = "Name";
export const cRoomId = "RoomId";
export const cLocalAudioEnabled = "LocalAudioEnabled";
export const cLocalVideoEnabled = "LocalVideoEnabled";

export const cDebounceButtonClickDelay = 500; // milliseconds

export const cKeyboardCommandKey = "⌘";
export const cSpaceBar = "SpaceBar";
export const cKeyboardOptionsKey = "⌥";
export const cKeyboardControlKey = "^";
export const cKeyboardShiftKey = "⇧";

export const cKeyBoardIgnoreKeys = ["META", "CONTROL", "ALT", "SHIFT"];

export const cKeyboardShortCutLocalVideoMute =
  (cDeviceOS === DeviceOS.MacOS ? cKeyboardCommandKey : cKeyboardControlKey) + " + d";
export const cKeyboardShortCutLocalAudioMute =
  (cDeviceOS === DeviceOS.MacOS ? cKeyboardCommandKey : cKeyboardControlKey) + " + e";

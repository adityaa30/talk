import { DeviceOS, getBaseUrl, getDeviceOS } from "./utils";

export const cDeviceOS = getDeviceOS();
const cBaseUrl = getBaseUrl();

export const cName = "Name";
export const cRoomId = "RoomId";
export const cLocalAudioEnabled = "LocalAudioEnabled";
export const cLocalVideoEnabled = "LocalVideoEnabled";

export const cDispatchJoinRoom = "join-room";
export const cDispatchClick = "click";
export const cDispatchDockParticipants = "dock-participants";

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
export const cKeyboardShortShowEveryone = [cActionKey, "a"];

export const cAssetsPath = `${cBaseUrl}/assets`;
export const cAssetsPathMic = `${cBaseUrl}/assets/mic.svg`;
export const cAssetsPathCallEnd = `${cBaseUrl}/assets/call_end.svg`;
export const cAssetsPathCamera = `${cBaseUrl}/assets/videocam.svg`;
export const cAssetsPathSettings = `${cBaseUrl}/assets/settings.png`;
export const cAssetsPathVideoGrid = `${cBaseUrl}/assets/video-grid.png`;

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
export const cDispatchDockMicrophone = "dock-microphone";
export const cDispatchDockCamera = "dock-camera";
export const cDispatchDockHangup = "dock-hangup";
export const cDispatchDockChat = "dock-chat";
export const cDispatchDockExtensions = "dock-settings";
export const cDispatchDockSettings = "dock-settings";

export const cDebounceButtonClickDelay = 500; // milliseconds
export const cDebounceDockItemClickDelay = 500; // milliseconds

export const cKeyboardCommandKey = "⌘";
export const cSpaceBar = "SpaceBar";
export const cKeyboardOptionsKey = "⌥";
export const cKeyboardControlKey = "^";
export const cKeyboardShiftKey = "⇧";

export const cKeyBoardIgnoreKeys = ["META", "CONTROL", "ALT", "SHIFT"];

const cActionKey = cDeviceOS === DeviceOS.MacOS ? cKeyboardCommandKey : cKeyboardControlKey;
export const cKeyboardShortcutToggleCamera = [cActionKey, "e"];
export const cKeyboardShortcutToggleMicrophone = [cActionKey, "d"];
export const cKeyboardShortcutHangup = [cActionKey, "h"];
export const cKeyboardShortcutSettings = [cActionKey, "s"];
export const cKeyboardShortcutParticipants = [cActionKey, "a"];
export const cKeyboardShortcutChat = [cActionKey, "c"];
export const cKeyboardShortcutExtensions = [cActionKey, "p"];

export const cAssetsPath = `${cBaseUrl}/assets`;
export const cAssetsPathMic = `${cBaseUrl}/assets/mic.svg`;
export const cAssetsPathCallEnd = `${cBaseUrl}/assets/call_end.svg`;
export const cAssetsPathCamera = `${cBaseUrl}/assets/videocam.svg`;
export const cAssetsPathSettings = `${cBaseUrl}/assets/settings.png`;
export const cAssetsPathParticipants = `${cBaseUrl}/assets/participants.png`;
export const cAssetsPathChat = `${cBaseUrl}/assets/chat.png`;
export const cAssetsPathExtensions = `${cBaseUrl}/assets/extensions.png`;

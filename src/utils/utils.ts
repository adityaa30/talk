export enum DeviceOS {
  Linux,
  Windows,
  MacOS,
  Unix
}

export function getDeviceOS(): DeviceOS {
  const device = navigator.appVersion;
  if (device.indexOf("Win") != -1) return DeviceOS.Windows;
  if (device.indexOf("Mac") != -1) return DeviceOS.MacOS;
  if (device.indexOf("X11") != -1) return DeviceOS.Unix;
  if (device.indexOf("Linux") != -1) return DeviceOS.Linux;

  throw Error("Cannot determine device OS");
}

export function toShortCutString(shortcut: Array<string>, prefix: string = "") {
  return (prefix + "  " + shortcut.join("")).trim();
}

export function getBaseUrl(): string {
  const { origin } = window.location;
  if (origin.indexOf("github.io") !== -1) {
    return `${origin}/talk`;
  }

  return origin;
}

export function isMobile() {
  return window.innerWidth <= 800 || window.innerHeight <= 600;
}

export function isInViewport(el: HTMLElement, offset: number = 150) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top + offset >= 0 &&
    rect.left + offset >= 0 &&
    rect.bottom - offset <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right - offset <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function hasVideoTrack(stream: MediaStream) {
  return stream.getVideoTracks().length > 0;
}

export function getNameInitials(name: string) {
  const words = name.trim().toUpperCase().split(" ");
  if (words.length == 0) {
    return "--";
  } else if (words.length == 1) {
    return words[0].substring(0, Math.min(words[0].length, 2));
  } else {
    return words[0][0] + words[0][0];
  }
}
export function sleep(ms: number): Promise<void> {
  if (ms <= 0) throw Error("`ms` should be a positive integer");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

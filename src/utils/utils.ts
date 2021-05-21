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
  return (prefix + " " + shortcut.join("+")).trim();
}

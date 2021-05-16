import {
  cKeyboardCommandKey,
  cKeyboardControlKey,
  cKeyBoardIgnoreKeys,
  cKeyboardOptionsKey,
  cKeyboardShiftKey,
  cSpaceBar
} from "./Constants";

const listeners = new Map<() => void, string>();

/** Get the key, convert to shortcut icon if possible */
function GetKeysFromEvent(ev: KeyboardEvent): Array<string> {
  const keys = [];

  let key = ev.key.toUpperCase();
  if (key === " ") {
    keys.push(cSpaceBar);
  } else if (cKeyBoardIgnoreKeys.findIndex((k) => k === key) === -1) {
    // We check if this key will be added below, if yes we add it below
    // and not consider here
    keys.push(key);
  }

  if (ev.ctrlKey) keys.push(cKeyboardControlKey);
  if (ev.metaKey) keys.push(cKeyboardCommandKey);
  if (ev.altKey) keys.push(cKeyboardOptionsKey);
  if (ev.shiftKey) keys.push(cKeyboardShiftKey);

  return keys;
}

function handleOnKeyDown(ev: KeyboardEvent) {
  const keys = GetKeysFromEvent(ev);
  const fired = firePossibleListeners(keys);

  // We fired an event, hence stop the default browser behaviour
  if (fired) ev.preventDefault();
}

function isKeyClicked(combination: string, keys: Array<string>): boolean {
  const buttons = combination.toUpperCase().replace(/[ +]/g, "").split("");

  for (const button of buttons) {
    if (keys.findIndex((key) => button === key) === -1) {
      return false;
    }
  }

  return true;
}

function firePossibleListeners(keys: Array<string>): boolean {
  let found = false;

  listeners.forEach((combination: string, cb: () => void) => {
    if (isKeyClicked(combination, keys)) {
      found = true;

      console.debug(`%c[KeyboardShortHelper] Clicked Combination=${combination}`, "color: LightBlue");
      cb(); // Fire the callback / listener
    }
  });

  return found;
}

function Start() {
  console.debug(`%c[KeyboardShortHelper] START`, "color: Orange");

  document.addEventListener("keydown", handleOnKeyDown);
}

function Stop() {
  console.debug(`%c[KeyboardShortHelper] STOP`, "color: Orange");
  listeners.clear();

  document.removeEventListener("keydown", handleOnKeyDown);
}

function addOnKeyClickListener(combination: string, cb: () => void) {
  listeners.set(cb, combination);
}

function removeOnKeyClickListener(combination: string, cb: () => void) {
  listeners.delete(cb);
}

export default {
  Start,
  Stop,
  addOnKeyClickListener,
  removeOnKeyClickListener
};

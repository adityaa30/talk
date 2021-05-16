import Store from "../utils/LocalStore";

import { cRoomId, cName, cLocalAudioEnabled, cLocalVideoEnabled } from "../utils/Constants";
import LocalStoreWritable from "./LocalStoreWritable";

export const name = LocalStoreWritable<string>(Store.get(cName) || "", cName);
export const roomId = LocalStoreWritable<string>(Store.get(cRoomId) || "", cRoomId);

export const localAudioEnabled = LocalStoreWritable<boolean>(Store.get(cLocalAudioEnabled) || true, cLocalAudioEnabled);

export const localVideoEnabled = LocalStoreWritable<boolean>(Store.get(cLocalVideoEnabled) || true, cLocalVideoEnabled);

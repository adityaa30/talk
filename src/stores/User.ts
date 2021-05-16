import Store from "../utils/LocalStore";

import { cRoomId, cName } from "../utils/Constants";
import LocalStoreWritable from "./LocalStoreWritable";

export const name = LocalStoreWritable(Store.get(cName) || "", cName);
export const roomId = LocalStoreWritable(Store.get(cRoomId) || "", cRoomId);

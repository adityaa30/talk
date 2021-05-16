import { writable } from "svelte/store";
import Store from "../utils/LocalStore";

export default function LocalStoreWritable<T>(initial: T, key: string) {
  const { subscribe, set: SvelteSet, update } = writable<T>(initial);

  const set = (value: T) => {
    SvelteSet(value);
    Store.save({ [key]: value });
  };

  return { subscribe, set };
}

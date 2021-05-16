const LOCALSTORAGE_KEY = "store";

export default class Store {
  static get(key: string) {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "{}");
    return data[key];
  }

  static save(values: Object) {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "{}");
    const saveObj = { ...data, ...values };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveObj));
    console.debug(`%c[Store] CurrentValue=${JSON.stringify(saveObj, null, 0)}`, "color: honeydew");
  }
}

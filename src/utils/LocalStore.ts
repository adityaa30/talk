const LOCALSTORAGE_KEY = "store";

export default class Store {
  static get<T>(key: string, defaultValue: T): T {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "{}") as Object;
    if (data.hasOwnProperty(key)) {
      return data[key];
    }

    return defaultValue;
  }

  static save(values: Object) {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "{}");
    const saveObj = { ...data, ...values };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(saveObj));
    console.debug(`%c[Store] CurrentValue=${JSON.stringify(saveObj, null, 0)}`, "color: honeydew");
  }
}

interface PersistentStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: any): void;
}

class LocalStorage implements PersistentStorage {
  allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  }

  getItem(key: string) {
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === "null") return null;
    if (item === "undefined") return undefined;

    try {
      return JSON.parse(item);
    } catch {}

    return item;
  }
  setItem(key: string, value: any) {
    if (value === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}

class MockStorage implements PersistentStorage {
  getItem() {
    return null;
  }
  setItem() {}
  allStorage() {
    return null;
  }
}

export const persistentStorage = window?.localStorage
  ? new LocalStorage()
  : new MockStorage();

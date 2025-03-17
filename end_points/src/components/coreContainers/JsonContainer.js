export default class JsonContainer {
    constructor(data = {}) {
        this.setData(data);
    }

    setData(data) {
        if (typeof data !== "object" || data === null) {
            throw new Error("Data must be a valid JSON object");
        }
        this._data = { ...data }; // Clone to avoid direct mutation
    }

    getData() {
        return { ...this._data }; // Return a copy to prevent external modification
    }

    getKeyValuePairs(obj, keys) {
        return keys.map(key => ({ [key]: obj[key] }));
    }

    intersection(arr1, arr2) {
        const set2 = new Set(arr2);
        return arr1.filter(item => set2.has(item));
    }
    
    getField(key, defaultValue = null) {
        return this._data.hasOwnProperty(key) ? this._data[key] : defaultValue;
    }

    setField(key, value) {
        this._data[key] = value;
    }

    hasField(key) {
        return this._data.hasOwnProperty(key);
    }

    toJson() {
        return JSON.stringify(this._data, null, 2);
    }
}
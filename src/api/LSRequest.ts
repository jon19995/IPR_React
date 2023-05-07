export class LSRequest {
    getStorageData (key: string) {
        const data = localStorage.getItem(key);

        return data ? JSON.parse(data) :  null
    }

    setStorageData (key: string, params: any) {
        localStorage.setItem(key, JSON.stringify(params))
    }

    removeStorageData (key: string) {
        localStorage.removeItem(key)
    }
}

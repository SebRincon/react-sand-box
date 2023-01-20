import { useState } from "react"

function getLocalStorageValue(key, initalValue) { 
    const itemFromStorage = localStorage.getItem(key)
    return itemFromStorage ? JSON.parse(itemFromStorage) : initalValue
}


function useLocalStorage(key, initalValue) {

    // Using useState to fetch values from localStorage
    const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initalValue))

    const setValue = (value) => {
        // Check if function 
        const valueToStore = value instanceof Function ? value(localStorageValue) : value

        setLocalStorageValue(valueToStore)
        localStorage.setItem(key, JSON.stringify(valueToStore))
    }

    return [localStorageValue, setValue]
}


export default useLocalStorage
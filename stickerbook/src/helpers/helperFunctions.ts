import { browser } from '$app/environment';
import { updateCartStore } from '../stores/cartStore';

export function setLocalStorageItem(key: string, value: string): void {
    if (browser){
        window.localStorage.setItem(key, value);  
    }
}

export function getLocalStorageItem(key: string): string | null {
    if (browser){
        return window.localStorage.getItem(key);
    }
    return(null);
}

export function removeLocalStorageItem(key: string): void {
    if (browser){
       window.localStorage.removeItem(key); 
    }
}

export const updateStores = () => {
    updateCartStore();
}
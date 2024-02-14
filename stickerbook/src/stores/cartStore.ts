import { writable, get } from "svelte/store";

// [ {id: "1", quanity: 5}, {id: "2", quanity: 3}]
export const cartStore = writable<CartItem[]>([]);

export const getCartStore = () => {
    return(get(cartStore));
}

export const getCartCount = () => {
    return(get(cartStore).length)
}

export const addToCart = (id: string) => {
    const items = get(cartStore);
    cartStore.update(() => {
        return [ ...items, { id: id, quantity: 1} ]
    });
}


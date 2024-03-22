import { writable, get } from "svelte/store";
import { getLocalStorageItem, setLocalStorageItem } from "../helpers/helperFunctions";

// [ {id: "1", quanity: 5}, {id: "2", quanity: 3}]
export const cartStore = writable<CartItem[]>([]);
export const cartCount = writable(0);
export const cartTotal = writable(0);

export const getCartCount = () => {
    let count = 0;
    const items = get(cartStore);
    items.forEach(function(item) {
        count += item.quantity;
    });
    cartCount.set(count)
}

export const getCartTotal = () => {
    let total = 0.00;
    const items = get(cartStore);
    items.forEach(function(item) {
        total += item.quantity*item.price;
    });
    total = total.toFixed(2);

    cartTotal.set(total)
}

export const addToCart = (stickerItem: {id: string, price:number, image: string}) => {
    const items = get(cartStore);
    const id = stickerItem.id
    cartStore.update(() => {
        const index = items.findIndex((i) => i.id == id);
        if (index == -1) {
            items.push({id: id, quantity: 1, price: stickerItem.price, image: stickerItem.image})
        } else {
            const quantity = items[index].quantity +1;
            items[index]. quantity = quantity;
        }
        getCartCount();
        getCartTotal();
        setLocalStorageItem("cartStore", JSON.stringify(items))
        return items;
    });
}

export const removeFromCart = (id: string) => {
    const items = get(cartStore);
    cartStore.update(() => {
        const index = items.findIndex((i) => i.id == id);
        const quantity = items[index].quantity-1;
        if (quantity <=0) {
            deleteFromCart(id);
        } else {
            items[index]. quantity = quantity;
        }
        getCartCount();
        getCartTotal();
        setLocalStorageItem("cartStore", JSON.stringify(items))
        return items;
    });
}

export const deleteFromCart = (id: string) => {
    cartStore.update((cartItems) => {
        const index = cartItems.findIndex((i) => i.id == id);
        cartItems.splice(index, 1);
        getCartCount();
        getCartTotal();
        setLocalStorageItem("cartStore", JSON.stringify(cartItems));
        return cartItems;
    });
}

export const getItem = (id: string) => {
    const items = get(cartStore);
    const index = items.findIndex((i) => i.id == id);
    return (items[index])
}

export const emptyCart = () => {
    cartStore.set([]);
    cartCount.set(0);
    cartTotal.set(0);
}

export const updateCartStore = () => {
    const localcart = getLocalStorageItem("cartStore");
    if (localcart === null){return}
    const localArr = JSON.parse(localcart)
    cartStore.set(localArr);
    getCartCount();
    getCartTotal();
};

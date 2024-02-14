import { writable, get } from "svelte/store";

// [ {id: "1", quanity: 5}, {id: "2", quanity: 3}]
export const cartStore = writable<CartItem[]>([]);

export const getCartCount = () => {
    return(get(cartStore).length)
}

export const addToCart = (id: string) => {
    const items = get(cartStore);
    const itemPosition = items.findIndex(
        (item) => { return item.id == id}
    )

    if(itemPosition !== -1) {
        cartStore.update(() => {
            const updatedItems = items.map( (item) => {
                if(item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return updatedItems;
        });
    } else {
        cartStore.update(() => {
            return [ ...items, { id: id, quantity: 1} ]
        });
    }
}

export const removeFromCart = (id: string) => {
    const items = get(cartStore);
    const itemPosition = items.findIndex(
        (item) => { return item.id == id} 
    )

    if(items[itemPosition]?.quantity - 1 === 0) {
        items.splice(itemPosition, 1);
    }

    cartStore.update(() => {
        const updatedItems = items.map( (item) => {
            if(item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });

        return updatedItems;
    });
}
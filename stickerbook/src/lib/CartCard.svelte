<script lang="ts">
	import { addToCart, deleteFromCart, getItem, removeFromCart, updateCartStore } from "../stores/cartStore";
    import Icon from '@iconify/svelte';

    export let id: string;

    const item = getItem(id);
    const name = item.id;
    const imageSrc = item.image;
    const price = item.price;

    let quantity = item.quantity;

    const updateQuantity = () => {
        let object = getItem(id);
        quantity = object.quantity;
    }

    const increaseItem = () => {
        addToCart(item);
        updateQuantity();
    }
    const decreaseItem = () => {
        removeFromCart(item.id);
        updateQuantity();
    }
    const deleteItem = () => {
        deleteFromCart(item.id);
    }
</script>

<div class="cart-card-container">
    <div class="image-container">
        <img alt="{name} Sticker" src={imageSrc} class="item-image"/>
    </div>
    <div class="item-description-container">
        <h3 class="item-name">{name}</h3>
        <div class="item-price-container">
            <h4>${price}</h4>
            <!-- <QuantityBar id={name} /> -->
            <div class="quantity-container">
                {#if quantity == 1}
                <button class="button minus" on:click={deleteItem}>
                    <Icon icon="ph:trash" />
                </button>
                {:else}
                <button class="button minus" on:click={decreaseItem}>-</button>
                {/if}
                <p>{quantity}</p>
                <button class="button plus" on:click={increaseItem}>+</button>
            </div>
        </div>
    </div>
</div>
<style>
    h4{
        margin: 5px 0;
    }
    .cart-card-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 450px;
        column-gap: 50px;
    }
    .image-container{
        display: flex;
        flex-direction: column;
    }
    .item-price-container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .item-image{
        width: 150px;
        height: 150px;
    }

    .quantity-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100px;
    }
    .button{
        color: black;
        display: flex;
        height: 25px;
        width: 25px;
        border: 1px solid black;
        text-align: center;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px black;
        cursor: pointer;
    }

    .button:active{
        box-shadow: none;
    }

    .minus{
        background-color: #FFEBEB;
    }

    .plus{
        background-color: #F6FFEB;
    }

    @media screen and (max-width: 675px) {
        .cart-card-container{
            flex-direction: column;
            justify-content: center;
        }

        .item-price-container{
            flex-direction: row;
            column-gap: 20px;
        }

        .item-name{
            text-align: center;
        }
    }
</style>
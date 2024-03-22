<script>
	import { addToCart, deleteFromCart, getItem, removeFromCart } from "../stores/cartStore";
    import Icon from '@iconify/svelte';

    export let id;
    const item = getItem(id);
    let quantity = item.quantity;

    const increaseItem = () => {
        addToCart(item);
        quantity = item.quantity
    }
    const decreaseItem = () => {
        removeFromCart(item.id);
        quantity = item.quantity
    }
    const deleteItem = () => {
        deleteFromCart(item.id);
    }
</script>

<div class="container">
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

<style>
    .container{
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
</style>
<script lang="ts">
	import CartCard from "$lib/CartCard.svelte";
    import { getCartStore, cartTotal } from "../../stores/cartStore";

    let cart = getCartStore();

    $: {
        cart = getCartStore();
    }

</script>

<h1>Your Stickerbook</h1>
<div class="card-container">
    {#each cart as item}
        <CartCard id={item.id} />
        <hr style="width:50%;text-align:center;">
    {/each}
    <div class="checkout-container">
        <h1>Total: ${$cartTotal}</h1>
        <button class="checkout-button">Checkout</button>
    </div>
</div>

<style>
    .card-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 50px;
    }

    .checkout-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 350px;
    }

    .checkout-button{
        color: black;
        background-color: white;
        display: flex;
        height: 65px;
        border: 1px solid black;
        text-align: center;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px black;
        cursor: pointer;
        width: 100px;
    }

    .button:active{
        box-shadow: none;
    }
</style>
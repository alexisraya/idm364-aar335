<script lang="ts">
	import CartCard from "$lib/CartCard.svelte";
	import ConfirmationModal from "$lib/ConfirmationModal.svelte";
	import { fade } from "svelte/transition";
    import { cartTotal, cartStore, emptyCart } from "../../stores/cartStore";
    import Icon from "@iconify/svelte";

    let cart: CartItem[] = [];
    cartStore.subscribe(result => {
        cart = result
    });

    let isConfirmShowing = false;
    let flag = true;

    const checkout = () => {
        isConfirmShowing = true;
        flag = false;
        emptyCart();
        setTimeout(()=>{
            isConfirmShowing = false;
        }, 3000);
        setTimeout(()=>{
            flag = true;
        }, 3500)
    }
</script>

{#if $cartTotal < 1}
    {#if isConfirmShowing}
    <ConfirmationModal />
    {:else if flag}
    <div class="empty-label-container">
        <Icon icon="fa6-solid:face-sad-tear" style="font-size: 100px;"/>
        <h1 class="empty-label">Your Stickerbook Cart is Empty</h1>
    </div>
    {/if}
{:else}
<h1 class="cart-title">Your Stickerbook Cart</h1>
<div class="card-container">
    {#each cart as item}
        <CartCard id={item.id} />
        <hr style="width:50%;text-align:center;">
    {/each}
    <div class="checkout-container">
        <h1>Total: ${$cartTotal}</h1>
        <button on:click={checkout} class="checkout-button">Checkout</button>
    </div>
</div>
{/if}

<style>
    .empty-label-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 45vh;
    }
    .empty-label{
        text-align: center;
    }
    .cart-title{
        text-align: center;
    }
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
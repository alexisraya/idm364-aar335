<script lang="ts">
	import { addToCart } from "../stores/cartStore";

    export let image: any;
    export let name: string;
    export let price: number;
    export let description: string;
    export let onClose: any;

    let visible = true;

    function closeModal() {
        onClose();
    }

    const addCart = () => {
        const object = {
            id: name, image, price
        }
        addToCart(object);
    }
</script>

{#if visible}
    <div class="product-card">
        <div class="image-container">
            <img alt="{name} Sticker" src={image} class="sticker"/>
        </div>
        <div class="product-info">
            <h1 class="title">{name}</h1>
            <h2 class="price">${price}</h2>
            <p class="description">{description}</p>
            <button class="add-to-cart-button" on:click={addCart}>Add to Cart</button>
        </div>
        <button on:click={closeModal} class="close-button">X</button>
    </div>
{/if}

<style>
    .product-card{
        display: flex;
        align-items: center;
        column-gap: 30px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #FAF7F5;
        padding: 30px;
        border: solid 3px black;
        width: 75vw;
    }

    .sticker{
        border: solid 3px white;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.7);
        width: 400px;
    }

    .add-to-cart-button{
        padding: 5px 10px;
        background-color: white;
        border: solid 1px black;
        box-shadow: 2px 2px black;
        cursor: pointer
    }

    .add-to-cart-button:active{
        box-shadow: none;
    }

    .close-button{
        position: relative;
        top: -225px;
        background-color: white;
        border: solid 1px black;
        box-shadow: 2px 2px black;
        cursor: pointer;
    }

    /* Responsiveness */
    @media screen and (max-width: 1220px) {
        .sticker{
            width: auto;
            max-height: 250px;
        }
    }
    @media screen and (max-width: 950px) {
        .sticker{
            width: auto;
            max-height: 150px;
        }
        .product-card{
            flex-direction: column;
            width: 85vw;
        }
        .image-container{
            align-self: flex-start;
        }
    }
</style>
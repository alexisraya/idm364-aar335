<script lang="ts">
    export let image: any;
    export let name: String;
    export let price: Number;

    let visible = true;

    const hide = () => {
        visible = false;
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
            <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras adipiscing enim eu. Egestas sed tempus urna et pharetra pharetra massa.</p>
            <button class="add-to-cart-button">Add to Cart</button>
        </div>
        <button on:click={hide} class="close-button">X</button>
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
    }

    .sticker{
        border: solid 3px white;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.7);
    }

    .add-to-cart-button{
        padding: 5px 10px;
        background-color: white;
        border: solid 1px black;
        box-shadow: 2px 2px black;
    }

    .close-button{
        position: relative;
        top: -115px;
        background-color: white;
        border: solid 1px black;
        box-shadow: 2px 2px black;
    }
</style>
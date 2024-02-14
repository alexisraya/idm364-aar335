<script lang="ts">
	import StickerItemCard from "./StickerItemCard.svelte";

    export let image: any;
    export let name: String;
    export let price: Number;

    let isCardOpen = false;

    const handleClick = () => {
        isCardOpen = !isCardOpen;
    }
</script>

<div class="item-container" on:click={handleClick} on:keydown={handleClick}>
    <div class="image-container">
       <img class="image" src={image} alt="sticker"/> 
    </div>
    <div class="item-copy">
        <h3 class="name text">{name}</h3>
        <p class="price text">${price}</p>
    </div>
</div>

{#if isCardOpen}
    <StickerItemCard name={name} image={image} price={price} />
{/if}

<style>
    .item-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 10px;
        cursor: pointer;
    }

    .item-copy{
        text-align: center;
    }

    .image{
        border: solid 3px white;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.7);
    }

    .text{
        padding: 0;
        margin: 0;
    }
</style>
<script>
    import StickerItem from '$lib/StickerItem.svelte';
	import { onMount } from 'svelte';
    
    /**
	 * @type {any[]}
	 */
    let sticker_items = [];

    onMount(async () => {
        const response = await fetch('/api');
        const items = await response.json();
        sticker_items = items.stickers;
    });

</script>

<div class="stickers-container">
    {#each sticker_items as {item_name, item_price, image_source, item_description}}
        <StickerItem name={item_name} price={item_price} image={image_source} description={item_description}/>
    {/each}
</div>

<style>
    .stickers-container{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 60px;
        row-gap: 30px;
    }

    /* Responsiveness */
    @media screen and (max-width: 1220px) {
        .stickers-container{
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media screen and (max-width: 950px) {
        .stickers-container{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 675px) {
        .stickers-container{
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>

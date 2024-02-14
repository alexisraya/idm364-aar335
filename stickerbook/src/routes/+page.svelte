<script>
    import StickerItem from '$lib/StickerItem.svelte';
import { stickers } from '../stickers/stickers'

    const items = stickers;
</script>

<div class="stickers-container">
    {#each items as {name, price, image}}
        <StickerItem name={name} price={price} image={image} />
    {/each}
</div>

<style>
    .stickers-container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 60px;
        row-gap: 30px;
    }
</style>

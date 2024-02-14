<script lang="ts">
    export let image: any;
    export let name: String;
    export let price: Number;
</script>

<div class="item-container">
    <div class="image-container">
       <img class="image" src={image} alt="sticker"/> 
    </div>
    <div class="item-copy">
        <h3 class="name text">{name}</h3>
        <p class="price text">${price}</p>
    </div>
</div>

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
<script>
	import { getItem } from "../stores/cartStore";
	import QuantityBar from "./QuantityBar.svelte";

    export let id;

    const item = getItem(id);
    console.log(item)
    const name = item.id;
    const imageSrc = item.image;
    const price = item.price;
</script>

<div class="cart-card-container">
    <div class="image-container">
        <img alt="{name} Sticker" src={imageSrc} class="item-image"/>
    </div>
    <div class="item-description-container">
        <h3 class="item-name">{name}</h3>
        <div class="item-price-container">
            <h4>${price}</h4>
            <QuantityBar id={name} />
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
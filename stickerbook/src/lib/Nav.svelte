<script>
	import { goto } from "$app/navigation";
	import { cartCount } from "../stores/cartStore";

    let screenWidth;
    let smallThird = 40;
    let bigThird = 40;

    $: {
        screenWidth = 800;
        smallThird = (screenWidth - 200)/3;
        bigThird = screenWidth - (smallThird*2);
    }

    const goHome = () => {
        goto("/");
    }
    const goCart = () => {
        goto("/cart");
    }

</script>

<nav>
    <!-- <button class="button menu" style="width: {smallThird}px">MENU</button> -->
    <div class="button title" style="width: {bigThird}px" on:click={goHome} on:keydown={goHome}>
        <a href="/">STICKERBOOK</a>
    </div>
    <div class="button cart" style="width: {smallThird}px" on:click={goCart} on:keydown={goCart}>
        <a href="/cart">SHOPPING CART ({$cartCount})</a>
    </div>
</nav>

<style>
    a{
        color: black;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
        color: black;
    }

    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    .button{
        color: black;
        display: flex;
        height: 65px;
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

    .menu{
        background-color: #F6FFEB;
    }

    .title{
        background-color: #FFF5EB;
    }

    .cart{
        background-color: #EBF4FF;
    }
</style>
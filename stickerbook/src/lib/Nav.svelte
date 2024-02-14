<script>
	import { getCartCount } from "../stores/cartStore";

    let screenWidth;
    let smallThird = 40;
    let bigThird = 40;
    let cartCount = 0;

    $: {
        // TODO: make this dynamic
        screenWidth = 800; // recieving window is not defined
        smallThird = (screenWidth - 200)/3;
        bigThird = screenWidth - (smallThird*2);
        cartCount = getCartCount();
    }

</script>

<nav>
    <button class="button menu" style="width: {smallThird}px">MENU</button>
    <div class="button title" style="width: {bigThird}px">
        <a href="/">STICKERBOOK</a>
    </div>
    <div class="button cart" style="width: {smallThird}px">
        <a href="/cart">SHOPPING CART ({cartCount})</a>
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
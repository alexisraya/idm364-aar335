<script>
    import Icon from "@iconify/svelte";
	import { fade } from "svelte/transition";
    
    const orderNumber = Math.ceil(Math.random()*1000);
</script>

<div class="confirm-modal-container" transition:fade>
    <Icon icon="mdi:face-happy" style="font-size: 100px;"/>
    <h1>Thank You!</h1>
    <h3>Order Number: #{orderNumber}</h3>
</div>

<style>
    .confirm-modal-container{
        background-color: #FFF5FE;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px solid black;
        padding: 25px;
        width: 300px;
        margin: auto;
    }
</style>
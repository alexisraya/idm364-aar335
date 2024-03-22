<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import Icon from '@iconify/svelte';

    export let toastName: string;
    let visible = true;

    onMount(async () => {
        setTimeout(()=>{
            visible = false;
        }, 3000);
    });
</script>

{#if visible}
    <article class="toast-container" role="alert" transition:fade>
        <Icon icon="ion:checkmark-sharp" />
        <p>{toastName} added to cart!</p>
    </article>
{/if}

<style>
    .toast-container{
        border: 1px solid black;
        bottom: 4rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(246, 255, 235, 25);
        height: 44px;
        width: 300px;
        padding: 0 15px;
        column-gap: 8px;
        color: black;
    }
</style>